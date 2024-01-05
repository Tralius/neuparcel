import { ScrollView, View, StyleSheet } from 'react-native';

import Parcel from './Parcel';

const ParcelList = (props) => {

   return (
        <ScrollView style={listStyle.container}>
           {props.parcels.map((parcel, index) => (
                <Parcel key={index} person={parcel.name} from={parcel.from} to={parcel.to}
                time={parcel.time} size={parcel.size}/>
            ))}
        </ScrollView>
   );
}

const listStyle = StyleSheet.create({
    container: {
        width: '90%',
    }
});

export default ParcelList;