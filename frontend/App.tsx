import { NativeBaseProvider } from 'native-base';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PrincipalView from './src/components/principalView';
import { NeoMovieSDK, NeoMovieSDKContext } from './src/SDK/neoMovieSDK';


export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NativeBaseProvider>
        <NeoMovieSDKContext.Provider value={new NeoMovieSDK}>
          <PrincipalView />
        </NeoMovieSDKContext.Provider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}