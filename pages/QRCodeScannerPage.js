import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Text, View, StyleSheet, Butto, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import BarcodeScannedModal from '../components/BarcodeScannedModal';
import { useParcelContext } from '../components/parcelContext';

import Animated, { SlideOutDown } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SlideInDown } from 'react-native-reanimated';

const QRCodeScannerPage = () => {
  const { state, dispatch } = useParcelContext();
  const [showSheet, setShowSheet] = useState(false);

  const selectParcel = id => {
      dispatch({ type: 'SELECT_FROM_DELIVERY', payload: id });
    };

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();
      }, []);
    
      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        id = parseInt(data.slice(-1)) - 1
        id = id.toString()
        console.log(id)
        selectParcel(id);
        setShowSheet(true);
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
            {showSheet && (
                <>
                    <Pressable style={styles.backdrop}/>
                    <Animated.View style={styles.sheet} entering={SlideInDown} exiting={SlideOutDown}>
                        <BarcodeScannedModal setShowSheet={setShowSheet}></BarcodeScannedModal>
                    </Animated.View>
                </>
            )}

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

export default QRCodeScannerPage;