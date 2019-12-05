import React from 'react'
import { AppRegistry } from 'react-native'
import { Dva } from './utils'
import models from './models'
import Routers, { routerMiddleware, routerReducer } from './routers'

const app = Dva.init({
  initialState: {},
  models,
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Routers />)

AppRegistry.registerComponent('RNDva', () => App)
