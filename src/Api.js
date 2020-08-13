// const BASE_URL = 'http://localhost:3000';
// const LIST_BASE_URL = 'http://localhost:5000';

// SITE MANAGEMENT

const getListData = () => fetch(`${process.env.REACT_APP_BACKEND_URL}/places`).then((resp) => resp.json());
const getListDataById = (id) => fetch(`${process.env.REACT_APP_BACKEND_URL}/places/${id}`).then((resp) => resp.json());

export default {
  //   get the list data
  getListData,
  getListDataById,
};
