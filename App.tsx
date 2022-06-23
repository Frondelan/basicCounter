import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import Counter from './src/components/Counter';
import ButtonRedux from './src/components/ButtonRedux';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.center}>
          <Counter />
          <ButtonRedux />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  center: {
    marginTop: 50,
  },
});

export default App;
