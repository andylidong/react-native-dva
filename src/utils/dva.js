import React from 'react';
import { create } from 'dva-core';
import createLoading from 'dva-loading';
import { Provider, connect } from 'react-redux';

/**
 * createAction 是用来描述 UI 层事件的一个对象
 * @param {*} type
 */
export const createAction = (payload) => ({ type: 'updateState', payload });

export const createActions = (type) => (payload) => ({ type, payload });

/**
 * dva = React-Router + Redux + Redux-saga
 * dva 是体验技术部开发的 React 应用框架，将上面三个 React 工具库包装在一起，简化了 API，让开发 React 应用更加方便和快捷
 * @param {*} options
 */
export function init(options) {
  const app = create(options);
  // 监听loading
  app.use(createLoading());
  // HMR workaround
  if (!global.registered) options.models.forEach((model) => app.model(model));
  global.registered = true;
  app.start();
  // eslint-disable-next-line no-underscore-dangle
  const store = app._store;
  app.start = (container) => () => <Provider store={store}>{container}</Provider>;
  app.getStore = () => store;
  return app;
}

export default {
  // connect 是一个函数，绑定 State 到 View
  connect,
  createAction,
  createActions,
  init,
  createLoading,
};
