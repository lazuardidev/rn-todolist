import React from 'react';
import {Provider} from 'react-redux';
import Routes from './src/routes/index.tsx';
import store from './src/redux/store/store.ts';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Toast />
    </Provider>
  );
}
