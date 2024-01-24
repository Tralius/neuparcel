import { StyleSheet, Text, View, Image, Modal, Pressable, TextInput} from 'react-native';
import { Button} from '@rneui/base';
import { Icon } from '@rneui/themed';
import React, {useState} from 'react';

const Parcel = (props) => {

    const sizeToImage = {
        "1": require('../assets/p1.png'),
        "2": require('../assets/p2.png'),
        "3": require('../assets/p3.png'),
        "4": require('../assets/p4.png'),
        "5": require('../assets/p5.png'),
        "6": require('../assets/p6.png'),
    }

    return(
        <Pressable onPress={() => {
            props.activateModal(props.identification)
        }
        }>
        <View style={parcelStyles.container} backgroundColor={"#FFF" ? props.status !== "pending" : "#6C63FF"}>
            <View style={parcelStyles.left_container}>
                <Image style={parcelStyles.parcelImage}
                    source={sizeToImage[props.size]} />
            </View> 
            <View style={parcelStyles.right_container}>
                <View style={parcelStyles.right_container_header}>
                    <View style={parcelStyles.header_item}>
                        <Icon name='inbox' />
                        <Text>{props.from}</Text>
                    </View>
                    <View style={parcelStyles.header_item}>
                        <Icon name='place' />
                        <Text>{props.to}</Text>
                    </View>
                </View>
                <View style={parcelStyles.right_container_footer}>
                    <View style={parcelStyles.footer_item}>
                        <Icon name='person' />
                        <Text>{props.person}</Text>
                    </View>
                    <View style={parcelStyles.footer_item}>
                        <Icon name='schedule' />
                        <Text>{props.time}</Text> 
                    </View>
                </View>
            </View> 
        </View>
        </Pressable>
    );

}

const parcelStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        padding: 2,
        height: 100,
        margin: 8,
        borderRadius: 20,
    },
    left_container: {
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    right_container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 5,
    },
    right_container_footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    right_container_header: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header_item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    footer_item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    parcelImage:{
        width: 70,
        height: 50,
        resizeMode: 'contain'
    }, parcelModalWrapper:{
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

export default Parcel;