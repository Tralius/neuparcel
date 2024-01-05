import { StyleSheet, Text} from 'react-native';

import ParcelList from '../components/ParcelList';

const ParcelPageDelivery = () => {

    const parcelArray = [
        {
            name: "John",
            from: "SendlingerTor",
            to: "Marien Platz",
            time: "10:00",
            size: "3"
        },
        {
            name: "Dana",
            from: "Kieferngarten",
            to: "Marien Platz",
            time: "14:00",
            size: "2"
        },
        {
            name: "Larry",
            from: "Feldmoching",
            to: "Munchner Freiheit",
            time: "23:00",
            size: "6"
        }
    ]

    return (
       <ParcelList parcels={parcelArray}></ParcelList>
    );
}

export default ParcelPageDelivery;