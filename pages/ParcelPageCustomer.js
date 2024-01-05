import { StyleSheet, Text, View, Pressable, Modal, TextInput} from 'react-native';
import { Icon } from '@rneui/themed';
import React, {useState} from 'react';

import ParcelList from '../components/ParcelList';
import { Button} from '@rneui/base';

const ParcelPageCustomer = () => {
    const parcelArray = [
        {
            name: "John",
            from: "SendlingerTor",
            to: "Marien Platz",
            time: "10:00",
            size: "3"
        }
    ]

    // States for Modal
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [size, setSize] = useState('');
    const [time, setTime] = useState('10:00');
    const [parcels, setParcels] = useState(parcelArray);

    const addParcel = () => {
        console.log("Add button pressed");
        setModalVisible(!modalVisible);
    }
    
    const addParcelModal = () => {
        console.log("Add button pressed");
        setModalVisible(!modalVisible);
        setParcels([...parcels, {name: name, from: from, to: to, size: size, time: time}]);
    }
    

    return (
        <View style={customerStyle.container}>
            <View style={customerStyle.addButton}>
                <Icon name='inbox' />
                <Button onPress={addParcel}>Add Parcel</Button>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
               <View style={customerStyle.parcelModalWrapper}>
                <View style={customerStyle.parcelModalContent}>
                    <View>
                        <TextInput placeholder='Name' onChangeText={text => setName(text)}/>
                        <TextInput placeholder='Size' onChangeText={text => setSize(text)}/>
                        <TextInput placeholder='From' onChangeText={text => setFrom(text)}/>
                        <TextInput placeholder='Destination' onChangeText={text => setTo(text)}/>
                        <TextInput placeholder='Time' onChangeText={text => setTime(text)}/>
                    </View>
                    <View style={customerStyle.parcelModalFooter}>
                        <Button onPress={() => setModalVisible(!modalVisible)}>Cancel</Button>
                        <Button onPress={() => addParcelModal()}>Add</Button>
                    </View>
                </View>
               </View>
            </Modal>
            <ParcelList parcels={parcels} ></ParcelList>
        </View>
    );
}

const customerStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '90%',
    },
    addButton: {
        flex: 1,
        flexDirection: 'row',
    },
    parcelModalWrapper:{
        position: 'absolute',
        top: '30%',
        alignSelf: 'center',
        width: '80%',
        height: '40%',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderRadius: 8,
        borderWidth:2,
    },
    parcelModalContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'space-between',
    },
    parcelModalFooter: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'space-between',
    }
});

export default ParcelPageCustomer;