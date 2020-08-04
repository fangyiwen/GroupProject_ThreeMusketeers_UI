UI Repo for Project: Explore World Heritage Sites
Team members: Yiwen Fang, Peng Hao, Dong Liu

UI repo link: https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_ThreeMusketeers_UI

API repo link: https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_ThreeMusketeers_API

UI Folder Structure - Iteration 1
```
├── UNESCO_UI
│	├── public
│	│	├── favicon.ico
│	│	├── index.html
│	├── src
│	│	├── App.css
│	│	├── App.js
│	│	├── index.js
│	│	├── components
│	│	│   ├── Banner.jsx
│	│	│   ├── Features.jsx
│	│	│   ├── Hero.jsx
│	│	│   ├── Map3.jsx
│	│	│   ├── MapContainer.jsx
│	│	│   ├── Navbar.jsx
│	│	│   ├── SiteContainer.jsx
│	│	│   ├── Title.jsx
│	│	├── pages
│	│	│   ├── Home.js
│	│	│   ├── Search.js
│	│	│   ├── Sites.js
│	│	│   ├── Auth.js
```

Iterations
Iteration 1
![page 1](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_ThreeMusketeers_UI/blob/master/src/images/screenshot-page1.png)

![page 2](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_ThreeMusketeers_UI/blob/master/src/images/screenshot-page2.png)

- For iteration 1, a boilerplate was first created by npx react-create-app. Front-end components are added under src/components folder, which comprise of both functional and class components depending on the requirement for state change. A separate src/pages folder includes three internal pages for the project.
- A Google Maps API is included in the home page, more specific functions and synchronization with backend database are yet to be implemented during next phase of the project.
- React-router component is used for navigating internally in the website.

- Reference: css stylesheet adapted from : https://github.com/john-smilga/setup-files-react-beach-resort

Iteration 2
![page 2](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_ThreeMusketeers_UI/blob/master/src/images/screenshot-page2-itr2.png)

![page 3]()

- In Mpa3.jsx component, include RectMapGL component for map rendering. Mapbox API is used to render a map view a various heritage sites.
- Import heritage site dataset from UNESCO to the map components, available json data is mapped into mapbox throught Marker and Popup component from react-map-gl.

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.