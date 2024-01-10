import { StyleSheet, Text, View, Image, Pressable, TextInput, TouchableOpacity} from 'react-native';
import { Button} from '@rneui/base';
import React, {useState, useEffect} from 'react';

import * as Location from 'expo-location';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const BarcodeScannedModal = (props) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
       }, []);

    const onPress = () => {
        props.setScanned(false);
        
        let text = 'Waiting..';
        if (errorMsg) {
            text = errorMsg;
        } else if (location) {
            text = JSON.stringify(location);
        }
    }

    return(
        <View style={barcodeStyle.container}>
            <View style={barcodeStyle.first}>
                    <MaterialCommunityIcons name="package-variant-closed" size={50} color="#000"/>
                    <Text style={barcodeStyle.left_text}>Parcel Scanned Succesfully</Text>
            </View>
            <View style={barcodeStyle.infos}>
                <Text style={barcodeStyle.left_text}>Reference:</Text>
                <Text style={barcodeStyle.referenceText}>{props.parcel['id']}</Text>
            </View>
            <View style={barcodeStyle.infos}>
                <Text style={barcodeStyle.left_text}>Drop off:</Text>
                <Text>{props.parcel['to']}</Text>
            </View>
            <View style={barcodeStyle.infos}>
                <Text style={barcodeStyle.left_text}>Details:</Text>
                <View style={barcodeStyle.add_infos}>
                    <MaterialCommunityIcons name="package-variant-closed" size={30} color="#000"/>
                    <Text>{1}</Text>
                    <MaterialCommunityIcons name="weight" size={30} color="#000"/>
                    <Text>{props.parcel['weight']}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={barcodeStyle.buttonStyle} onPress={onPress}>
                    <Text style={barcodeStyle.buttonText}>Start Delivery</Text>
                </TouchableOpacity>
            </View>
        </View>
);

}

const barcodeStyle = StyleSheet.create({
    container: {
     flex: 1,
     flexDirection: 'column',
     width: '80%',
     alignSelf: 'center',
    },
    first: {
     flex: 0,
     flexDirection: 'row',
     alignSelf: 'center',
     padding: 10,
    },
    infos: {
     flex: 0,
     flexDirection: 'row',
     justifyContent: 'space-between',
     padding: 10,
    },
    add_infos: {
     flex: 0,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 10,
    },
    left_text: {
     color: 'black',
     fontSize: 12,
     fontWeight: 'bold',
    },
    buttonStyle: {
     borderRadius: 17,
     backgroundColor: '#6C63FF',
     height: 60,
     justifyContent: 'center',
     alignItems: 'center',
    },
    buttonText: {
     color: '#fff',
     fontSize: 20,
     fontWeight: 'bold',
    },
    referenceText: {
     color: '#FF7750',
     fontSize: 12,
     fontWeight: 'bold',
     backgroundColor: '#E9E9EF',
    }
    });

export default BarcodeScannedModal;