import React from "react";

import Splash from "./src/screens/auth / Splash";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Splash/>
      </SafeAreaView>
  );
};

export default App