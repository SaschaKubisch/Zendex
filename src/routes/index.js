import React from "react"
import { Redirect } from "react-router-dom"

// User profile
import UserProfile from "../pages/Authentication/UserProfile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import EmailVerification from "../pages/Authentication/EmailVerification"

// Landing Page
import Landing from "../pages/Landing/index"

//// DAPP

// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Categories
import Wallet from "../pages/Wallet/Wallet"
import Index from "../pages/Index/Index"
import Tracker from "../pages/Tracker/Tracker"
import Transactions from "../pages/Transactions/Transactions"

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/wallet", component: Wallet },
  { path: "/index", component: Index },
  { path: "/tracker", component: Tracker },
  { path: "/transactions", component: Transactions },

  //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/landing" /> }
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgotPassword", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/landing", component: Landing },
  { path: "/emailVerification", component: EmailVerification },

]

export { authProtectedRoutes, publicRoutes }
