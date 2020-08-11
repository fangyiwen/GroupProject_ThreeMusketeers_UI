import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';
import {useHttpClient} from "../../shared/hooks/http-hooks";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

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
  const [loadedPlaces, setLoadedPlaces] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
            `http://localhost:5000/api/customPlaces/user/${userId}`
        );
        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  const placeDeletedHandler = deletedPlaceId => {
    setLoadedPlaces(prevPlaces =>
        prevPlaces.filter(place => place.id !== deletedPlaceId)
    );
  };

  return (
      <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && (
            <div className="center">
              <LoadingSpinner />
            </div>
        )}
        {!isLoading && loadedPlaces && (
            <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />
        )}
      </React.Fragment>
  );
};

export default UserPlaces;
