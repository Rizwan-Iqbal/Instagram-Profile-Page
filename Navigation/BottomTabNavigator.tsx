import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Screen/Profile/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            // labeled={false}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={25} color={'#155ca2'} />
                    ),
                }} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;