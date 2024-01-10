import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './Style'
import { Header } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

const F = [{
    name: 'Rizwan',
    source: require('../../../src/images/profile.png')
}, { name: 'Rizwan', source: require('../../../src/images/profile.png') }, { name: 'Rizwan', source: require('../../../src/images/profile.png') }, { name: 'Rizwan', source: require('../../../src/images/profile.png') }, { name: 'Rizwan', source: require('../../../src/images/profile.png') }, { name: 'Rizwan', source: require('../../../src/images/profile.png') }, { name: 'Rizwan', source: require('../../../src/images/profile.png') },]

const Profile = () => {
    return (
        <View style={styles.container}>
            <Header
                leftComponent={
                    <TouchableOpacity>
                        <Icon name="chevron-back-outline" color="black" size={30} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity>
                        <Icon name="ellipsis-horizontal" color="black" size={30} />
                    </TouchableOpacity>
                }
                centerComponent={{ text: 'Profile', style: styles.heading }}
                containerStyle={{ backgroundColor: 'white' }}
                statusBarProps={{ backgroundColor: 'white' }} />

            <View style={styles.innterContainer}>

                <View style={styles.profile}>
                    <View style={styles.imgContainer}>
                        <Image
                            source={require('../../../src/images/profile.png')}
                            style={styles.image}
                        />
                    </View>
                    <View>
                        <Text style={styles.value}>3022</Text>
                        <Text style={styles.title}>Posts</Text>
                    </View>
                    <View>
                        <Text style={styles.value}>3222</Text>
                        <Text style={styles.title}>Followers</Text>
                    </View>
                    <View>
                        <Text style={styles.value}>3122</Text>
                        <Text style={styles.title}>Following</Text>
                    </View>
                </View>

                <View style={styles.bio}>
                    <Text style={styles.value}>Rizwan Iqal</Text>
                    <Text style={styles.title}>React native developer</Text>
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#0095f6' }]} >
                        <Text style={[styles.buttonText, { color: 'white' }]}>Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Message</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button]} >
                        <Text style={styles.buttonText}>Email</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button]} >
                        <Icon name="person-add" color="black" size={20} />
                    </TouchableOpacity>

                </View>
                <View style={styles.friends}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}
                        style={{ marginHorizontal: -20, paddingLeft:20, marginVertical: 25, }}>

                        {F.map((item) => {
                            return (
                                <View>
                                    <Image
                                        source={item.source}
                                        style={[styles.image, {
                                            width: 60, height: 60, marginHorizontal: 5,
                                        }]}
                                    />
                                    <Text style={[styles.title, { textAlign: 'center', marginVertical: 5, }]}>{item.name}</Text>
                                </View>

                            )
                        })}

                    </ScrollView>

                </View>


                
            </View>

        </View>
    )
}

export default Profile