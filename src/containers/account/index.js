import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Button } from '@/components'
import { Dva, Navigator } from '@/utils'
import action from '@/constants/action'

const person = '@/images/person.png'

@Dva.connect(({ app }) => ({ ...app }))
class Account extends Component {

  static navigationOptions = {
    tabBarLabel: 'Account',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require(person)}
      />
    ),
  }

  renderContainer() {
    const { login } = this.props
    if (login) {
      return <Button text="Logout" onPress={this.logout} />
    }
    return <Button text="Goto Login" onPress={this.gotoLogin} />
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderContainer()}
      </View>
    )
  }

  gotoLogin = () => {
    this.props.dispatch(Navigator.go({ routeName: 'Login' }))
  }

  logout = () => {
    this.props.dispatch(Dva.createAction(action.logout)())
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Account
