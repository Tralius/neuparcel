import React, { createContext, useContext, useReducer } from 'react';

const ParcelContext = createContext();

const initialState = {
    'deliverableParcels':[
        {
            id: "0",
            name: "John",
            from: "Feldkirchen",
            to: "Marien Platz",
            time: "19. Sep 10:00",
            size: "3",
            weight: "5kg",
            price: 0.5,
            status: "pending"
        },
        {
            id: "1",
            name: "Dana",
            from: "Kieferngarten",
            to: "Marien Platz",
            time: "16. Sep 14:00",
            size: "2",
            weight: "2kg",
            price: 0.5,
            status: "pending"
        },
        {
            id: "2",
            name: "Larry",
            from: "Feldmoching",
            to: "Munchner Freiheit",
            time: "14. Sep 10:00",
            size: "6",
            weight: "3kg",
            price: 0.5,
            status: "pending"
        }
    ], 
    'reservedParcels': [],
    'selectedDeliveryParcel': null,
    'selectedReservedParcel': null,
    'selectedScanParcel': {
      id: "0",
      name: "John",
      from: "Feldkirchen",
      to: "Marien Platz",
      time: "19. Sep 10:00",
      size: "3",
      weight: "5kg",
      price: 0.5,
      status: "pending"
  },
};

const parcelReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_FROM_DELIVERY':
      return {
        ...state,
        selectedDeliveryParcel: state.deliverableParcels.find(parcel => parcel.id === action.payload)
      };
    case 'SELECT_FROM_RESERVED':
        return {
          ...state,
          selectedReservedParcel: state.reservedParcels.find(parcel => parcel.id === action.payload)
    };
    case 'SELECT_FROM_SCAN':
        return {
          ...state,
          selectedScanParcel: state.reservedParcels.find(parcel => parcel.id === action.payload)
    };
    case 'VALIDATE_SCAN':
      return {
        ...state,
        reservedParcels: state.reservedParcels.map(parcel => parcel.id === action.payload ? {...parcel, status: "delivered"} : parcel)
    };
    case 'RESERVE_PARCEL':
        return {
            ...state,
            reservedParcels: [...state.reservedParcels, state.deliverableParcels.find(parcel => parcel.id === action.payload)],
            deliverableParcels: state.deliverableParcels.filter(parcel => parcel.id !== action.payload),
        };
    case 'DELIVER_PARCEL':
        return {
            ...state,
            reservedParcels: state.reservedParcels.filter(parcel => parcel.id !== action.payload),
        };
    default:
      return state;
  }
};

export const ParcelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(parcelReducer, initialState);

  return (
    <ParcelContext.Provider value={{ state, dispatch }}>
      {children}
    </ParcelContext.Provider>
  );
};

export const useParcelContext = () => useContext(ParcelContext);