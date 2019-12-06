import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '@/components';
import { Dva, Navigator } from '@/utils';

@Dva.connect(({ app }) => ({ ...app }))
class Detail extends Component {
  static navigationOptions = {
    title: 'Detail',
  }

  goBack = () => {
    this.props.dispatch(Navigator.back({ routeName: 'Account' }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text="Go Back" onPress={this.goBack} />
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
});

export default Detail;
