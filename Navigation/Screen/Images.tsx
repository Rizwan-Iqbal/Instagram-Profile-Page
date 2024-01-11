import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './Profile/Style';

const Images = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../src/images/user.jpg')}
            style={[
              styles.image,
              {
                width: 110,
                height: 110,
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../src/images/user.jpg')}
            style={[
              styles.image,
              {
                width: 110,
                height: 110,
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../src/images/user.jpg')}
            style={[
              styles.image,
              {
                width: 110,
                height: 110,
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Images;
