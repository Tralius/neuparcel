import { StyleSheet, Text, View, ScrollView} from 'react-native';
import React, { useState, useEffect, useCallback, useRef } from 'react';

import ParcelList from '../components/ParcelList';
import ParcelCustomerSelectedModal from '../components/ParcelCustomerSelectedModal';

import BottomSheet from '../components/BottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ParcelPageCustomer = (props) => {
    
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
        }
    ]

    const [parcel, setParcel] = useState(parcelArray[0]);
    const [delivered, setDelivered] = useState(false);

    const list = !delivered ? <ParcelList parcels={parcelArray} activateModal={activateModal}></ParcelList> : <Text>Thank you for delivering with neuparcel! You have received 50 cent. 
        Other packages are waiting to be delivered, have fun!
    </Text>

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={parcelCustomerPageStyle.container}>
            <ScrollView>
                {list}
            </ScrollView>

            <BottomSheet ref={ref}>
                <ParcelCustomerSelectedModal parcel={parcel} setDelivered={setDelivered}></ParcelCustomerSelectedModal>
            </BottomSheet>
        </View>
        </GestureHandlerRootView>
    );
}

const parcelCustomerPageStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default ParcelPageCustomer;