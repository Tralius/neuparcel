import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useEffect, useCallback, useRef } from 'react';

import HomePage from '../pages/HomePage';
import ParcelPageDelivery from '../pages/ParcelPageDelivery';
import ParcelPageCustomer from '../pages/ParcelPageCustomer';
import ProfilePage from '../pages/ProfilePage';
import QRCodeScannerPage from '../pages/QRCodeScannerPage';
import { View } from 'react-native';


const NavigationNeuparcel = () => {

    const Tab = createBottomTabNavigator();

    // const [parcelSelected, setParcelSelected] = useState(true);
    
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} options={
                {
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons name="home" color={focused ? "#6C63FF" : color } size={size} />
                    ),
                    tabBarShowLabel: false,
                } 
            } />
            <Tab.Screen name="Deliveries" component={ParcelPageDelivery} options={
                {
                    tabBarIcon: ({ color, size , focused}) => (
                        <MaterialCommunityIcons name="truck-delivery" color={focused ? "#6C63FF" : color } size={size} />
                    ),
                    tabBarShowLabel: false,
                }
            }/>
            <Tab.Screen name="QRScanner" component={QRCodeScannerPage} options={
                {
                    tabBarIcon: ({ size, focused }) => (
                        <View style={{
                            backgroundColor: focused ? "#6C63FF" : "#F6F6FB",
                            width: 75,
                            height: 75,
                            borderRadius: 50,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: 20,
                        }}>
                            <View style={{
                                backgroundColor: "#6C63FF",
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                            }}> 
                                <MaterialCommunityIcons name="qrcode-scan" color={"#fff"} size={size}>
                                </MaterialCommunityIcons>
                            </View>
                        </View>
                            ),
                    tabBarShowLabel: false,
                }
            } />
            <Tab.Screen name="MyParcels" component={ParcelPageCustomer} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <MaterialCommunityIcons name="package-variant" color={focused ? "#6C63FF" : color } size={size} />
                ),
                tabBarShowLabel: false,
            }}/>
            <Tab.Screen name="Profile" component={ProfilePage} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <MaterialCommunityIcons name="account" color={focused ? "#6C63FF" : color } size={size} />
                ),
                tabBarShowLabel: false,
            }}/>
        </Tab.Navigator>
    );
}

export default NavigationNeuparcel;