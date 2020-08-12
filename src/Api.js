const BASE_URL = 'http://localhost:3000';
const LIST_BASE_URL = 'http://localhost:5000';

const USERS_URL = `${BASE_URL}/users`;
const SIGNIN_URL = `${BASE_URL}/signin`;
const SIGNUP_URL = `${BASE_URL}/signup`;
const VALIDATE_URL = `${BASE_URL}/validate`;

const SITES_URL = `${BASE_URL}/sites`;
const TAGS_URL = `${BASE_URL}/tags`;
const USER_BUCKETLISTS_URL = `${BASE_URL}/user_bucketlists`;
const USER_VISITEDS_URL = `${BASE_URL}/user_visiteds`;

const SEARCH_URL = `${BASE_URL}/sites/search`;
const SEARCH_BY_TAG_URL = `${BASE_URL}/sites/search_by_tag`;

// some API urls are eliminated to after combining other teammates' work
// SITE MANAGEMENT

const getSites = () => getWithoutAuth(SITES_URL);

const getSite = (id) => {
  const url = `${SITES_URL}/${id}`;
  return getWithoutAuth(url);
};

const getSitesByRegion = (region) => {
  const url = `${SEARCH_URL}/region=${region.split(' ').join('+')}`;
  return getWithoutAuth(url);
};

const search = (query) => {
  const url = `${SITES_URL}${query}`;
  return getWithoutAuth(url);
};

const searchByTag = (tag) => {
  const url = `${SEARCH_BY_TAG_URL}/${tag}`;
  return getWithoutAuth(url);
};

const getTags = () => getWithoutAuth(TAGS_URL);

// BUCKETLIST

const getBucketlistSiteIds = (user_id) => {
  const url = `${USERS_URL}/${user_id}/bucketlist_site_ids`;
  return getWithAuth(url);
};

const getBucketlist = (user_id) => {
  const url = `${USERS_URL}/${user_id}/bucketlist`;
  return getWithAuth(url);
};

const addToBucketlist = (site_id) => post(USER_BUCKETLISTS_URL, { site_id });

const removeFromBucketlist = (site_id) => destroy(USER_BUCKETLISTS_URL, { site_id });

// VISITED SITES

const getVisitedSiteIds = (user_id) => {
  const url = `${USERS_URL}/${user_id}/visited_site_ids`;
  return getWithAuth(url);
};

const getVisited = (user_id) => {
  const url = `${USERS_URL}/${user_id}/visited`;
  return getWithAuth(url);
};

const addToVisited = (site_id) => post(USER_VISITEDS_URL, { site_id });

const removeFromVisited = (site_id) => destroy(USER_VISITEDS_URL, { site_id });

// AUTHENTICATION & AUTHORISATION

const signin = (email, password) => post(SIGNIN_URL, { email, password });

const validate = () => getWithAuth(VALIDATE_URL);

const signup = (formData) => post(SIGNUP_URL, formData);

// HELPER METHODS

const getWithoutAuth = (url) => fetch(url).then((resp) => resp.json());

const getWithAuth = (url) => fetch(url, {
  headers: {
    Authorization: localStorage.getItem('token'),
  },
}).then((resp) => resp.json());

const post = (url, data) => {
  const configObject = generateConfigObject('POST', data);
  return fetch(url, configObject).then((resp) => resp.json());
};

const destroy = (url, data) => {
  const configObject = generateConfigObject('DELETE', data);
  return fetch(url, configObject).then((resp) => resp.json());
};

const generateConfigObject = (method, data) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
  body: JSON.stringify(data),
});

const getListData = () => fetch(`${LIST_BASE_URL}/api/places`).then((resp) => resp.json());
const getListDataById = (id) => fetch(`${LIST_BASE_URL}/api/places/${id}`).then((resp) => resp.json());

export default {
  signin,
  signup,
  validate,
  getSites,
  getSite,
  getSitesByRegion,
  search,
  getBucketlistSiteIds,
  getBucketlist,
  addToBucketlist,
  removeFromBucketlist,
  getVisitedSiteIds,
  getVisited,
  addToVisited,
  removeFromVisited,
  searchByTag,
  getTags,
  //   get the list data
  getListData,
  getListDataById,
};
