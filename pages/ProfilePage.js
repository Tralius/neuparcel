import { StyleSheet, Text, View} from 'react-native';
import { useContext } from 'react';
import { useAppContext } from '../components/appContext';

const ProfilePage = () => {

    const { appState, appDispatch } = useAppContext();

    return (
        <View style={profilePageStyle.container}>
            <View style={profilePageStyle.childContainer}>
                <Text style={profilePageStyle.titleText}>Delivered Parcels</Text>
                <View style={profilePageStyle.circle}>
                    <Text style={profilePageStyle.circleText}>{appState.parcelsDelivered}</Text>
                </View>
            </View>
            <View style={profilePageStyle.childContainer}>
                <Text style={profilePageStyle.titleText}>Money Earned</Text>
                <View style={profilePageStyle.circle}>
                    <Text style={profilePageStyle.circleText}>{appState.moneyEarned}&euro;</Text>
                </View>
            </View>
        </View>
    );
}

const profilePageStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        top: 50,
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: '#6C63FF',
        justifyContent: 'center',
        margin: 20
    },
    circleText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#6C63FF',
    },
    childContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',  
    }
});

export default ProfilePage;