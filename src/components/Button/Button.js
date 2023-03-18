import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.style';

function Button({buttonText, iconName, iconSize=17, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
        <Text style={styles.title}><Icon name={iconName} size={iconSize}/>{buttonText}</Text>
    </TouchableOpacity>
  );
}

export default Button;
