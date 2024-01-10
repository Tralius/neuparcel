import { StyleSheet, Text, View} from 'react-native';
//{props.parcelSelected ? <Text>Parcel Selected</Text> : <Text>Parcel Not Selected</Text>}

const HomePage = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
        </View>
    );
}

export default HomePage;