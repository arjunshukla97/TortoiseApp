import React, {useState} from 'react';
import {SafeAreaView, FlatList, StatusBar} from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import {colors} from '../../constants/colors';
import {dummyData} from '../../constants/dummyData';
import styles from './styles';

const Home = () => {
  const [mute, setMute] = useState([2, 3]);
  const toggleMute = item => {
    if (mute.includes(item.id)) {
      let temp = [];
      dummyData.forEach(x =>
        x.id != item.id ? (temp = [...temp, x.id]) : null,
      );
      setMute(temp);
    } else {
      setMute([...mute, item.id]);
    }
  };
  const _renderItem = ({item}) => {
    return <Card item={item} mute={mute} setMute={toggleMute} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={'dark-content'}
      />
      <Header name="Rahul Kumar" />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={dummyData}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
};

export default Home;
