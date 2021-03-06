import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Categories from '../Categories/Categories'
import TransactionCreate from '../TransactionCreate/TransactionCreate'
import Category from '../Category/Category'
import TransactionEdit from '../TransactionEdit/TransactionEdit'
import LastMonthTransactions from '../LastMonthTransactions/LastMonthTransactions'
import Home from '../Home/Home'
import CategoryChart from '../Chart/Chart'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route exact path='/' component={Home}/>
          <AuthenticatedRoute exact user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/categories' render={() => (
            <Categories user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/categories/:id' render={({ match }) => (
            <Category user={user} match={ match } msgAlert={this.msgAlert} />
          )} />
          <AuthenticatedRoute exact user={user} path='/categories/:id/transactions/last_month' render={({ match }) => (
            <LastMonthTransactions user={user} match={ match } msgAlert={this.msgAlert}/>
          )} />
          <AuthenticatedRoute exact user={user} path='/create-transaction' render={() => (
            <TransactionCreate user={user} msgAlert={this.msgAlert}/>
          )} />
          <AuthenticatedRoute exact user={user} path='/transactions/:id/edit' render={({ match }) => (
            <TransactionEdit user={user} match={ match } msgAlert={this.msgAlert}/>
          )} />
          <AuthenticatedRoute exact user={user} path='/chart' render={() => (
            <CategoryChart />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
