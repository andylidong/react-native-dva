import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from '@/components';
import { Dva, Navigator } from '@/utils';

const house = '@/images/house.png';

@Dva.connect(({ app }) => ({ ...app }))
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require(house)}
      />
    ),
  };

  gotoDetail = () => {
    this.props.dispatch(Navigator.go({ routeName: 'Detail' }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text="Goto Detail" onPress={this.gotoDetail} />
      </View>
    );
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
});

export default Home;
