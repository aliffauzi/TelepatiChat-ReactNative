import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default class MapsScreen extends React.Component {
  render(){
    return (
      <>
        <View style={styles.container}>
          <Text>Maps Screen</Text>

          <TouchableOpacity style={{ marginTop: 32 }}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
