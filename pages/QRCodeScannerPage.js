import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import BarcodeScannedModal from '../components/BarcodeScannedModal';

import BottomSheet from '../components/BottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const QRCodeScannerPage = () => {
    const ref = useRef(null);

    const parcel =  {
      id: "parcel1",
      name: "John",
      from: "SendlingerTor",
      to: "Marien Platz",
      time: "19. Sep 10:00",
      size: "3",
      weight: "5kg"
  }

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const activateModal = useCallback(() => {
      const isActive = ref?.current?.isActive();
      if (isActive){
        ref?.current?.scrollTo(0)
      } else {
        ref?.current?.scrollTo(-525)
      }
      
    }, []);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();
      }, []);
    
      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        activateModal()
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };
    
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
    
      return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.container}>

            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />

            <BottomSheet ref={ref}>
              <BarcodeScannedModal setScanned={setScanned} parcel={parcel}></BarcodeScannedModal>
            </BottomSheet>

          </View>
        </GestureHandlerRootView>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    }
  });

export default QRCodeScannerPage;