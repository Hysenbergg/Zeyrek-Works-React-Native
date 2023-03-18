import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './Loading.style';

function Loading() {
  return (
    <View style={styles.container}>
        <View style={styles.loading_container}>
            <ActivityIndicator size={40} color="#EF5350" />
        </View>
    </View>
  )
}

export default Loading;