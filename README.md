UI Repo for Project: Explore World Heritage Sites
Team members: Yiwen Fang, Peng Hao, Dong Liu

UI repo link: https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_ThreeMusketeers_UI

API repo link: https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_ThreeMusketeers_API

---
UI Folder Structure - Iteration 1
```
├── UNESCO_UI
│	├── public
│	│	├── favicon.ico
│	│	├── index.html
│	├── src
│	│	├── App.js
│	│	├── index.js
│	│	├── places
│	│	│   ├── components
│	│	│   ├── pages
│	│	├── shared
│	│	│   ├── components
│	│	│   ├── context
│	│	│   ├── hooks
│	│	│   ├── util
│	│	├── user
│	│	│   ├── components
│	│	│   ├── pages
---
## Progress

## Iteration 2
![pic1](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_ThreeMusketeers_UI/blob/master/src/shared/components/UIElements/images/screenshot-itr2-1.png)

![pic2](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_ThreeMusketeers_UI/blob/master/src/shared/components/UIElements/images/screenshot-itr2-2.png)

![pic3](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_ThreeMusketeers_UI/blob/master/src/shared/components/UIElements/images/screenshot-itr2-3.png)

![pic4](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_ThreeMusketeers_UI/blob/master/src/shared/components/UIElements/images/screenshot-itr2-4.png)

![pic5](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_ThreeMusketeers_UI/blob/master/src/shared/components/UIElements/images/screenshot-itr2-5.png)


- Add Users page with userList and UserItem components to store user data, including name, e-mail, password and images. A read-only review is presented for users who are logged out. After log in, user will be able to update their collection of various sites.
- Google Maps API is introduced in single site view. Custom form input component is added for authenticated users to edit site information.
- Add UserPlaces page for authorized users to access their individual database, and perform CRUD operations on heritage sites of interest.
- Add Place and Update Place pages are added for user to add selected heritage site.
---

## Iteration 1

- For iteration 1, a boilerplate was first created by npx react-create-app. Front-end components are added under src/components folder, which comprise of both functional and class components depending on the requirement for state change. A separate src/pages folder includes three internal pages for the project.
- A Google Maps API is included in the home page, more specific functions and synchronization with backend database are yet to be implemented during next phase of the project.
- React-router component is used for navigating internally in the website.

- Reference: css stylesheet adapted from : https://github.com/john-smilga/setup-files-react-beach-resort

---

## Iteration 3 TO DO
- add link to UNESCO map views
- Connect user authentication with backend.
- Connect user comment and edit function with backend. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.