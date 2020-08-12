const BASE_URL = 'http://localhost:3000';
const LIST_BASE_URL = 'http://localhost:5000';

// SITE MANAGEMENT

const getListData = () => fetch(`${LIST_BASE_URL}/api/places`).then((resp) => resp.json());
const getListDataById = (id) => fetch(`${LIST_BASE_URL}/api/places/${id}`).then((resp) => resp.json());

export default {
  //   get the list data
  getListData,
  getListDataById,
};
