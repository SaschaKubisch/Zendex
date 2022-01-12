import React, { Component } from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';


const Optgroup = [
    {
        label: 'Layer 1',
        options: [
            { value: 'btc', label: 'BTC' },
            { value: 'eth', label: 'ETH' },
            { value: 'sol', label: 'SOL' },
            { value: 'avax', label: 'AVAX' },
            { value: 'bnb', label: 'BNB' },
        ],
    },
    {
        label: 'DeFi',
        options: [
            { value: 'yfi', label: 'YFI' },
            { value: 'aave', label: 'AAVE' },
        ],
    },
    {
        label: 'Oracles',
        options: [
            { value: 'link', label: 'LINK' },
            { value: 'band', label: 'BAND' },
        ],
    },
    {
        label: 'Stablecoins',
        options: [
            { value: 'usdt', label: 'USDT' },
            { value: 'usdc', label: 'USDC' },
        ],
    },
];

class DualListbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            selectedOptGroup: [],
            selectedFilter: [],
            selectedFilterAlign: [],
            selectedPreserve: [],
            selectedRestrict: [],
            selectedDuplicate: [],
        }
    }
    onChange = (selected) => {
        this.setState({ selected });
    };

    onOptGroupChange = (selectedOptGroup) => {
        this.setState({ selectedOptGroup });
    };

    onFilterChange = (selectedFilter) => {
        this.setState({ selectedFilter });
    };

    onFilterAlignChange = (selectedFilterAlign) => {
        this.setState({ selectedFilterAlign });
    };

    onPreserveChange = (selectedPreserve) => {
        this.setState({ selectedPreserve });
    };

    onRestrictChange = (selectedRestrict) => {
        this.setState({ selectedRestrict });
    };

    onDuplicateChange = (selectedDuplicate) => {
        this.setState({ selectedDuplicate });
    };

    render() {
        const { selected, selectedOptGroup, selectedFilter, selectedFilterAlign, selectedPreserve, selectedDuplicate, selectedRestrict } = this.state;
        return (
            <React.Fragment>
                                {/* <CardTitle className="h4">Select Assets</CardTitle> */}
                                <DualListBox
                                    canFilter
                                    filterCallback={(Optgroup, filterInput) => {
                                        if (filterInput === '') {
                                            return true;
                                        }

                                        return (new RegExp(filterInput, 'i')).test(Optgroup.label);
                                    }}
                                    filterPlaceholder="Search..."
                                    disabled={false}
                                    options={Optgroup}
                                    selected={selectedFilter}
                                    onChange={this.onFilterChange}
                                />
            </React.Fragment>
        )
    }
}

export default DualListbox