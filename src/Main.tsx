import { StyleSheet } from 'react-native';

import { registerRootComponent } from 'expo';

import App from './App';

const Main = () => {
  return <App />;
};

registerRootComponent(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
