import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Landon Liu',
      image:
        'https://cdn.pixabay.com/photo/2016/07/10/21/53/super-mario-1508624_1280.jpg',
      places: 1
    },
    {
      id: 'u2',
      name: 'Jerry Chen',
      image:
        'https://cdn.pixabay.com/photo/2016/07/10/21/53/super-mario-1508624_1280.jpg',
      places: 1
    },
    {
      id: 'u1',
      name: 'Larry Page',
      image:
        'https://cdn.pixabay.com/photo/2016/07/10/21/53/super-mario-1508624_1280.jpg',
      places: 0
    },
    {
      id: 'u1',
      name: 'Sergey Brin',
      image:
        'https://cdn.pixabay.com/photo/2016/07/10/21/53/super-mario-1508624_1280.jpg',
      places: 0
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
