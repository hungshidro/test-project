/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {AppLoading} from 'components';
import {AppNavigator} from 'navigation';
import React from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from 'reduxs';

function App(): React.JSX.Element {
  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */

  return (
    <>
      <Provider store={store}>
        <AppNavigator />
        <AppLoading />
      </Provider>
      <Toast />
    </>
  );
}

export default App;
