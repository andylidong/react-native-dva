import React, { Component } from 'react';
import {
  StyleSheet, View, Image, ActivityIndicator,
} from 'react-native';
import action from '@/constants/action';
import { Dva, Navigator } from '@/utils';
import { Button, Touchable } from '@/components';

const close = '@/images/close.png';

@Dva.connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  renderLoading() {
    const { fetching } = this.props;
    if (fetching) {
      return <ActivityIndicator />;
    }
    return <Button text="Login" onPress={this.onLogin} />;
  }

  renderClose() {
    const { fetching } = this.props;
    if (!fetching) {
      return (
        <Touchable style={styles.close} onPress={this.onClose}>
          <Image
            style={styles.icon}
            source={require(close)}
          />
        </Touchable>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderLoading()}
        {this.renderClose()}
      </View>
    );
  }

  onLogin = () => {
    this.props.dispatch(Dva.createAction(action.login)());
  }

  onClose = () => {
    this.props.dispatch(Navigator.back());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 30,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'gray',
  },
});

export default Login;
