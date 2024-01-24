import { StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import React, { useState, useContext, useCallback, useRef } from 'react';

import ParcelList from '../components/ParcelList';
import { useParcelContext } from '../components/parcelContext';
import ParcelCustomerSelectedModal from '../components/ParcelCustomerSelectedModal';

import Animated, { SlideOutDown } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SlideInDown } from 'react-native-reanimated';

const ParcelPageCustomer = (props) => {
    
    const { state, dispatch } = useParcelContext();
    const [showSheet, setShowSheet] = useState(false);
    const parcelArray = state.reservedParcels

    const selectParcel = id => {
        dispatch({ type: 'SELECT_FROM_RESERVED', payload: id });
      };

    const activateModal = (id) => {
        selectParcel(id);
        setShowSheet(true);
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
           <SafeAreaProvider>
                <View style={parcelCustomerPageStyle.container}>
                    <ScrollView>
                        <ParcelList parcels={parcelArray} activateModal={activateModal}></ParcelList>
                    </ScrollView>
                {showSheet && (
                    <>
                        <Pressable style={parcelCustomerPageStyle.backdrop}/>
                        <Animated.View style={parcelCustomerPageStyle.sheet} entering={SlideInDown} exiting={SlideOutDown}>
                            <ParcelCustomerSelectedModal setShowSheet={setShowSheet}></ParcelCustomerSelectedModal>
                        </Animated.View>
                    </>
                )}
                </View>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

const parcelCustomerPageStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }, 
    sheet: {
        backgroundColor: "white",
        padding: 16,
        height: 400,
        width: "100%",
        position: "absolute",
        bottom: -20 * 1.1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 10,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 1,
      },
});

export default ParcelPageCustomer;