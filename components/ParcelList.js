import {  View, StyleSheet } from 'react-native';

import Parcel from './Parcel';

const ParcelList = (props) => {

   const display = props.parcels !== null

   return (
    <View>
           {display && (props.parcels.map((parcel, index) => (
                <Parcel key={index} identification={parcel.id} person={parcel.name} from={parcel.from} to={parcel.to}
                time={parcel.time} size={parcel.size} status={parcel.status} activateModal={props.activateModal}/>
            )))}
    </View>
   );
}

export default ParcelList;