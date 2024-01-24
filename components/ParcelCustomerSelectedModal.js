import { StyleSheet, Text, View, Image, Pressable, TextInput, TouchableOpacity} from 'react-native';
import { Button} from '@rneui/base';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useParcelContext } from '../components/parcelContext';
import { useAppContext } from '../components/appContext';

const ParcelCustomerSelectedModal = (props) => {

    const { state, dispatch } = useParcelContext();
    const { appState, appDispatch } = useAppContext();
    
    const selectedParcel = state.selectedReservedParcel;

    const onPress = () => {
        dispatch({ type: 'DELIVER_PARCEL', payload: selectedParcel['id'] });
        appDispatch({ type: 'INCREMENT_MONEY_EARNED', payload: selectedParcel['price'] });
        appDispatch({ type: 'INCREMENT_PARCELS_DELIVERED' });
        props.setShowSheet(false);
    }

    return(
            <View style={parcelModalStyle.container}>
                <View style={parcelModalStyle.first}>
                    <MaterialCommunityIcons name="package-variant-closed" size={50} color="#000"/>
                    <Text style={parcelModalStyle.left_text}>In Delivery</Text>
                </View>
                <View style={parcelModalStyle.infos}>
                    <Text style={parcelModalStyle.left_text}>Reference:</Text>
                    <Text style={parcelModalStyle.referenceText}>{selectedParcel['id']}</Text>
                </View>
                <View style={parcelModalStyle.infos}>
                    <Text style={parcelModalStyle.left_text}>Drop off:</Text>
                    <Text>{selectedParcel['to']}</Text>
                </View>
                <View style={parcelModalStyle.infos}>
                    <Text style={parcelModalStyle.left_text}>Details:</Text>
                    <View style={parcelModalStyle.add_infos}>
                        <MaterialCommunityIcons name="package-variant-closed" size={30} color="#000"/>
                        <Text>{1}</Text>
                        <MaterialCommunityIcons name="weight" size={30} color="#000"/>
                        <Text>{selectedParcel['weight']}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={parcelModalStyle.buttonStyle} onPress={onPress}>
                        <Text style={parcelModalStyle.buttonText}>Finish Delivery</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );

}

const parcelModalStyle = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
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

export default ParcelCustomerSelectedModal;