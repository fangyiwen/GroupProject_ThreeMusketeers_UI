import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'The Pyramid of Khufu at Giza is the largest Egyptian pyramid. It is the only one of the Seven Wonders of the Ancient World still in existence.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/580px-All_Gizah_Pyramids.jpg',
    address: 'Egypt',
    location: {
    lat: 29.9792,
    lng: 31.1342
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Taj Mahal',
    description: 'The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being "the jewel of Muslim art in India and one of the universally admired masterpieces of the world heritage',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/440px-Taj_Mahal_%28Edited%29.jpeg',
    address: 'Egypt',
    location: {
    lat: 27.1751,
    lng: 78.0421
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
