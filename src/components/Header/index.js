import React from 'react';
import {View, Text, Image} from 'react-native';
import {normalize} from '../../constants/helper';
import styles from './styles';

const Header = ({name = ''}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.smallTxt}>Welcome back,</Text>
          <Text style={styles.bigTxt}>{name}</Text>
        </View>
        <Image
          source={require('../../assets/logo.png')}
          style={{
            height: normalize(50),
            width: normalize(50),
            marginTop: -normalize(3),
          }}
        />
      </View>
    </View>
  );
};

export default Header;
