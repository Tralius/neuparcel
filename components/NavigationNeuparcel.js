import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomePage from '../pages/HomePage';
import ParcelPageDelivery from '../pages/ParcelPageDelivery';
import ParcelPageCustomer from '../pages/ParcelPageCustomer';
import ProfilePage from '../pages/ProfilePage';


const NavigationNeuparcel = () => {

    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} options={
                {
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }
            
            
            }/>
            <Tab.Screen name="Deliveries" component={ParcelPageDelivery} options={
                {
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="truck-delivery" color={color} size={size} />
                    ),
                }
            
            }/>
            <Tab.Screen name="MyParcels" component={ParcelPageCustomer} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="package-variant" color={color} size={size} />
                ),
            }}/>
            <Tab.Screen name="Profile" component={ProfilePage} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }}/>
        </Tab.Navigator>
    );
}

export default NavigationNeuparcel;