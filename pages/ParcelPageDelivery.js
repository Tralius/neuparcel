import { StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import React, { useState, useContext, useCallback, useRef } from 'react';

import ParcelList from '../components/ParcelList';
import ParcelSelectedModal from '../components/ParcelSelectedModal';
import { useParcelContext } from '../components/parcelContext';

import Animated, { SlideOutDown } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SlideInDown } from 'react-native-reanimated';

const ParcelPageDelivery = (props) => {

    const { state, dispatch } = useParcelContext();
    const [showSheet, setShowSheet] = useState(false);
    const parcelArray = state.deliverableParcels

    const selectParcel = id => {
        dispatch({ type: 'SELECT_FROM_DELIVERY', payload: id });
      };

    const activateModal = (id) => {
        selectParcel(id);
        setShowSheet(true);
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <View style={parcelDeliveryPageStyle.container}>
                    <ScrollView>
                        <ParcelList parcels={parcelArray} activateModal={activateModal}></ParcelList>
                    </ScrollView>
                {showSheet && (
                    <>
                        <Pressable style={parcelDeliveryPageStyle.backdrop}/>
                        <Animated.View style={parcelDeliveryPageStyle.sheet} entering={SlideInDown} exiting={SlideOutDown}>
                            <ParcelSelectedModal setShowSheet={setShowSheet}></ParcelSelectedModal>
                        </Animated.View>
                    </>
                )}
                </View>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

const parcelDeliveryPageStyle = StyleSheet.create({
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

export default ParcelPageDelivery;