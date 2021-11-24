import {Image, StyleSheet, View} from 'react-native';

import React from 'react';
import images from './asset/images/index';

const App = () => {
  const renderAllImage = () => {
    const size = 50;
    return Object.entries(images).map((ele, index) => {
      if (typeof ele[1] === 'number') {
        return (
          <View style={styles.item} key={index}>
            <Image source={ele[1]} style={styles.image} />
          </View>
        );
      } else {
        const Icon = ele[1];
        return (
          <View style={styles.item} key={index}>
            <Icon width={size} height={size} />
          </View>
        );
      }
    });
  };

  return (
    <>
      <View style={styles.container}>{renderAllImage()}</View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    marginHorizontal: 10,
    width: '100%',
  },
  item: {
    width: '25%',
    height: 60,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
  },
});
