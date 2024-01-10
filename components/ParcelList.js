import {  View, StyleSheet } from 'react-native';

import Parcel from './Parcel';

const ParcelList = (props) => {

   return (
    <View>
           {props.parcels.map((parcel, index) => (
                <Parcel key={index} person={parcel.name} from={parcel.from} to={parcel.to}
                time={parcel.time} size={parcel.size} id={props.id} activateModal={props.activateModal}/>
            ))}
    </View>
   );
}

export default ParcelList;