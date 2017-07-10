'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
// Redux
import { connect } from 'react-redux'




// Screens
import ProfileView from '../views/ProfileView'
import Login from '../views/Login'
import Register from '../views/Register'

const routeConfiguration = {
  Login: { screen: Login },
  Register: { screen: Register },
  ProfileView: { screen: ProfileView },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'Login'
}

export const NavigatorProfileTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)

class ProfileTabNavigation extends React.Component {
  static navigationOptions = {
    title: 'Profile Tab',
    tabBarLabel: 'Profile Tab',
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorProfileTab
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
const mapStateToProps = (state) => {
 return {
  navigationState: state.profileTab
  }
}

export default connect(mapStateToProps)(ProfileTabNavigation)
