import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './Profile/Style';

const Videos = () => {
  return (
    <View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../../src/images/video.jpg')}
            style={[
              styles.image,
              {
                width: 130,
                height: 130,
              },
            ]}
          />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Videos;
