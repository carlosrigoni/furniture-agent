import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
// import Icons from 'react-native-vector-icons/EvilIcons'

import styles from './styles'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          {/* <Icons name="ei-archive" /> */}
        </TouchableOpacity>

      </View>
    </View>
    
  );
}
