import { Dva, Navigator, Storage } from '@/utils';
import * as authService from '@/services/auth';

export default {
  namespace: 'app',

  state: {
    login: false,
    loading: true,
    fetching: false,
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },

  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadStorage' });
    },
  },

  effects: {
    * loadStorage(action, { call, put }) {
      const login = yield call(Storage.get, 'login', false);
      yield put(Dva.createAction({ login, loading: false }));
    },

    * login({ payload }, { call, put }) {
      yield put(Dva.createAction({ fetching: true }));
      const login = yield call(authService.login, payload);
      if (login) {
        yield put(Navigator.back());
      }
      yield put(Dva.createAction({ login, fetching: false }));
      Storage.set('login', login);
    },

    * logout(action, { call, put }) {
      yield call(Storage.set, 'login', false);
      yield put(Dva.createAction({ login: false }));
    },
  },
};
