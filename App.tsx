import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/routes/Routes';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
