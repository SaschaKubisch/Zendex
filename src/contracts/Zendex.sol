pragma solidity >=0.4.21 <0.6.0;

import "./UsdtToken.sol";
import "./BtcToken.sol";
import "./EthToken.sol";


contract Zendex {

    // VARIABLES
    string public name = "Welcome to ZENDEX.";
    string[] public currencies = ["usdt", "btc", "eth"];
    uint[][] public priceFeed = [[1, 60000, 4000],[1, 50000, 3000],[1, 45000, 2500],[1, 65000, 4400],[1, 60000, 4000]];
    uint public timeJump = 0;

    // State variables
    UsdtToken public usdtToken;
    BtcToken public btcToken;
    EthToken public ethToken;

    // Mapping lists
    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public indexSetUp;
    mapping(address => bool) public isStaking;
    mapping(address => User) public users;

    // User structure
    struct User{
        address userAddress;
        uint[] balances; 
        uint[] indexPercentagesStatic;
    }

    // EVENTS
    //event UsersUpdate(User users);

    // MODIFIERS

    // FUCTIONS

    constructor (UsdtToken _usdtToken, BtcToken _btcToken, EthToken _ethToken) public {
        // Pass (local variable) addresses to state variables to make them accessible to other functions
        usdtToken = _usdtToken;
        btcToken = _btcToken;
        ethToken = _ethToken;
        address owner = msg.sender;
    }

    // Staking USDT
    function stakeUsdt(uint _amount) public {
        require(_amount > 0, "Amount cannot be 0.");
        // Transfer Mock USDT Tokensto this contract for staking
        usdtToken.transferFrom(msg.sender, address(this), _amount);
        // Update staking balance
        if(!isStaking[msg.sender] == true) {
            uint[] memory initBalances;
            uint[] memory indexPercentagesStatic;
            users[msg.sender] = User(msg.sender, initBalances, indexPercentagesStatic);
        }
        // Update amount USDT
        users[msg.sender].balances[0] += _amount;

        // Update staking status
        isStaking[msg.sender] = true;
        // Log to chain
        //emit UsersUpdate(users);
    }

    // Unstaking USDT
    function unstakeUsdt(uint amount) public {
        // Fetch balances of assets
        uint[] memory balances = getBalances();
        // Fetch total value in USDT
        uint totalUsdtValue = getTotalUsdtValue();
        // Require total value in USDT > 0
        require(totalUsdtValue > 0, "No balance to unstake.");
        require(amount <= totalUsdtValue, "Amount exceeds total value in usdt.");
        
        // Trade assets for requested USDT
        uint percentToUnstake = amount / totalUsdtValue;
        uint totalUsdtTraded = 0;
        uint usdtTraded = 0;
        for (uint i=0; i<currencies.length; i++) {
            usdtTraded = trade(i, 0, balances[i]*percentToUnstake);
            totalUsdtTraded += usdtTraded;
        }
        
        // Update user balances
        for (uint i=0; i<currencies.length; i++) {
            users[msg.sender].balances[i] -= balances[i]*percentToUnstake;
        }

        // Transfer amount to user
        usdtToken.transfer(msg.sender, totalUsdtTraded);

        // Log to chain
        //emit UsersUpdate(users);
    }

    // Rebalancing
    function rebalance() public {
        uint[] memory balances = users[msg.sender].balances;
        uint[] memory indexPercentagesStatic = users[msg.sender].indexPercentagesStatic;
        
        // Get total usdt value of index
        uint totalUsdtValue = getTotalUsdtValue();
        // Mock trade -> get new asset balances
        for (uint i = 0; i<currencies.length; i++) {
            users[msg.sender].balances[i] = totalUsdtValue * indexPercentagesStatic[i] / priceFeed[timeJump][i];
        }

        // Log to chain
        //emit UsersUpdate(users);
    }

    // Index Setup
    function setupIndex(uint[] memory percentages) public {
        // Require that sum of percentages equals 100 percent
        require(getSum(percentages) == 100.0);
        // Write to user structure and set indexSetUp flag true
        users[msg.sender].indexPercentagesStatic = percentages;
        indexSetUp[msg.sender] = true;
        
    }
    
    // Get sum of elements of dynamic array
    function getSum(uint[] memory arr) public view returns(uint)
    {
        uint i;
        uint sum = 0;
        for(i = 0; i < arr.length; i++)
            sum = sum + arr[i];
        return sum;
    }

    // Execute trade
    function trade(uint indexCurrency1, uint indexCurrency2, uint amount) public returns(uint) {
          // Execute mock trade
          uint tradeOut = amount * priceFeed[timeJump][indexCurrency1];
          return tradeOut;
    }

    // Get absolute balances
    function getBalances() public view returns(uint[] memory) {
        uint[] memory balances;
        for (uint i=0; i<currencies.length; i++) {
            balances[i] = users[msg.sender].balances[i];
        }
        return balances; 
    }

    // Get balances in USDT
    function getUsdtBalances() public view returns(uint[] memory) {
        uint[] memory balances = getBalances();
        uint[] memory usdtPrices = getUsdtPrices();
        uint[] memory usdtBalances;
        for (uint i=0; i<currencies.length; i++) {
            usdtBalances[i] = balances[i] * usdtPrices[i];
        }
        return usdtBalances;
    }

    // Get total balance in USDT
    function getTotalUsdtValue() public view returns(uint) {
        uint[] memory usdtBalances = getUsdtBalances();
        uint totalUsdtValue = getSum(usdtBalances);

        return totalUsdtValue;
    }

    // Get prices in USDT
    function getUsdtPrices() public view returns(uint[] memory) {
        uint[] memory usdtPrice = new uint[](3);
        for (uint i=0; i<currencies.length; i++) {
            usdtPrice[i] = priceFeed[timeJump][i];
        }
        return usdtPrice;
    }

    // Get percentages
    function getPercentages() public view returns(uint[] memory) {

        // Get balances from user
        uint[] memory usdtBalances = getUsdtBalances();
        uint totalUsdtBalance = getTotalUsdtValue();
        uint[] memory percentages;
        for (uint i=0; i<currencies.length; i++) {
            percentages[i] = usdtBalances[i] / totalUsdtBalance;
        }
        return percentages;
    }
    
}