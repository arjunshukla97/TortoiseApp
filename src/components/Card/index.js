import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Video from 'react-native-video';
import {normalize} from '../../constants/helper';

const Card = ({item = {}, mute, setMute}) => {
  return (
    <SafeAreaView key={item.id} style={[styles.container, styles.shadow]}>
      <View style={styles.video}>
        <Video
          source={{
            uri: item.url,
          }}
          muted={mute.includes(item.id) ? true : false}
          resizeMode="cover"
          volume={1.0}
          repeat={true}
          style={{width: '100%', height: '100%'}}
          useTextureView={false}
          disableFocus={true}
        />

        {item.logo ? <Image source={item.logo} style={styles.logo} /> : null}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setMute(item)}
          style={styles.muteContainer}>
          <Image
            source={
              mute.includes(item.id)
                ? require('../../assets/mute.png')
                : require('../../assets/unmute.png')
            }
            style={{height: normalize(15), width: normalize(15)}}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>
        {item.content}
        <Text style={{color: '#068E33'}}> {item.highlightedContent}</Text>
      </Text>
      {item.showIcons ? (
        <View style={styles.row}>
          <View>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/truck.png')}
                style={{height: normalize(35), width: normalize(40)}}
              />
            </View>
            <Text style={styles.icnText}>Priority Delivery</Text>
          </View>
          <View>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/charger.png')}
                style={{
                  height: normalize(50),
                  width: normalize(40),
                  marginTop: normalize(6),
                }}
              />
            </View>
            <Text style={styles.icnText}>Free Charger</Text>
          </View>
          <View>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/gift.png')}
                style={{height: normalize(40), width: normalize(40)}}
              />
            </View>
            <Text style={styles.icnText}>Tortoise Merch</Text>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Card;
