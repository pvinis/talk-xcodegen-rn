import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {check, PERMISSIONS, request} from 'react-native-permissions';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [micStatus, setMicStatus] = useState(null);

  useEffect(() => {
    check(PERMISSIONS.IOS.MICROPHONE).then(setMicStatus);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />
        <View>
          <Text>Mic permission status: {micStatus}</Text>
          <Button
            title="Request mic permission"
            onPress={() => {
              request(PERMISSIONS.IOS.MICROPHONE).then(setMicStatus);
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
