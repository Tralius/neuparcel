import { StyleSheet, Text, View, ScrollView} from 'react-native';
import React, { useState, useEffect, useCallback, useRef } from 'react';

import ParcelList from '../components/ParcelList';
import ParcelSelectedModal from '../components/ParcelSelectedModal';

import BottomSheet from '../components/BottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ParcelPageDelivery = (props) => {
    
    const ref = useRef(null);

    const activateModal = useCallback((id) => {
        const isActive = ref?.current?.isActive();
        //setParcel(parcelArray[id])
        if (isActive){
          ref?.current?.scrollTo(0)
        } else {
          ref?.current?.scrollTo(-525)
        }
        
      }, []);

    const parcelArray = [
        {
            id: "parcel1",
            name: "John",
            from: "SendlingerTor",
            to: "Marien Platz",
            time: "19. Sep 10:00",
            size: "3",
            weight: "5kg"
        },
        {
            id: "parcel2",
            name: "Dana",
            from: "Kieferngarten",
            to: "Marien Platz",
            time: "16. Sep 14:00",
            size: "2",
            weight: "2kg"
        },
        {
            id: "parcel3",
            name: "Larry",
            from: "Feldmoching",
            to: "Munchner Freiheit",
            time: "14. Sep 10:00",
            size: "6",
            weight: "3kg"
        }
    ]

    const [parcel, setParcel] = useState(parcelArray[0]);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={parcelDeliveryPageStyle.container}>
            <ScrollView>
                <ParcelList parcels={parcelArray} activateModal={activateModal}></ParcelList>
            </ScrollView>

            <BottomSheet ref={ref}>
                <ParcelSelectedModal parcel={parcel}></ParcelSelectedModal>
            </BottomSheet>
        </View>
        </GestureHandlerRootView>
    );
}

const parcelDeliveryPageStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default ParcelPageDelivery;