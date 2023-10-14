# MERAKI_Academy_Project_5
<p align="center">
<a href="https://www.meraki-academy.org" target="_blank" rel="noopener noreferrer">
 <img width="400px" height="300px" src="./frontend/public/assets/Provider (1).jpg" alt="Project logo">
 </a>
</p>

<h3 align="center">Cure App
</h3>

---

<p align="center"> Getting home medical support easily as it never was! README 
    <br> 
<a href=''>Demo</a>
    <br> 
</p>

## 📝 Table of Contents

- [MERAKI\_Academy\_Project\_5](#meraki_academy_project_5)
  - [📝 Table of Contents](#-table-of-contents)
  - [🧐 About ](#-about-)
  - [🏁 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Installing:](#installing)
  - [🎈 Usage ](#-usage-)
  - [⛏️ Built Using ](#️-built-using-)
  - [User Story ](#user-story-)
  - [Data Flow ](#data-flow-)
  - [🙋💁Team Members ](#team-members-)
      - [Scrum :Duha Al-Dahamsheh ](#scrum-duha-al-dahamsheh-)
      - [Member: Hala AbuShalbak](#member-hala-abushalbak)
  - [⚠️ Guided By ](#️-guided-by-)
      - [Walaa Rababaa'](#walaa-rababaa)
      - [Anas Al-Khamis](#anas-al-khamis)
      - [Ahmad Sawalmeh](#ahmad-sawalmeh)
      - [©️ **MERAKI Academy**](#️-meraki-academy)

## 🧐 About <a name = "about"></a>

App of Health care  services  which are provided by providers of different specialities to  a wide range of care seekers at their homes ,which makes it easier  for the patients to get help!

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Visual Studio Code follow this <a href='https://code.visualstudio.com/download'>link</a> to install.
- Git Bash follow this <a href='https://git-scm.com/downloads'>link</a> to install.
- Elephant SQL follow this <a href='https://api.elephantsql.com/'>link</a> to install.
- Node.js follow this <a href='https://nodejs.org/en'>link</a> to install.
- Postman follow this <a href='https://www.postman.com/downloads/'>link</a> to install.


### Installing:

1. Clone the repo to your local machine using git bash.

```
git clone https://github.com/Girl-Power2/MERAKI_Academy_Project_5.git
```

2. Install packeges repeat this step in backend and frontend folder

```
npm i
```


1. Run server using git bash inside backend folder

```
npm run dev
```

4. Run application using git bash inside frontend folder

```
npm run dev
```
or
```
npm start
```

Now  the app is ready to use!

<img width=700px height=200px src="https://res.cloudinary.com/drzcyo3sv/image/upload/v1697287049/project_5_720_b4byhc.png" alt="Ready">

## 🎈 Usage <a name="usage"></a>
Ex.

- You  have to register to navigate our web app
- You can click on the **Home** tab provided in the navigation bar to view the home section
- You can click on the **Join Us** button to register or login either as a provider or a seeker
  
- After logging in as a provider:<br/>
1- Fill your information ,add a service , add a schedule.<br/>
2- You can change your bio and qualifications by clicking on **My Profile** in the navbar.<br/>
3- You can add more services ,edit and delete by clicking on **My Services** in the nav bar.<br/>
4- You can add more services view booked schedules and delete schedules by clicking on **My Schedule** in the nav bar.<br/>
5- You can view your booked orders  by clicking on **My Orders** in the nav bar.

- After logging in as a user:<br/>
1-Click on **My Profile** in the nav bar ,then click on the button **Add history** to add your medical history , edit it or change it.<br/>
2-Click on **Categories** in the nav bar to view all the available categories in our app.<br/>
3-Click on the card of the category to view the providers.</br>
4-Click on **More Info** button on the providers' card to view his information and services which he provides.</br>
5-Click on **Make Order** to make an order,including the preffered service and appointment time, and your location & address.<br/>
6-You can add your review and view others' reviews by clicking on **Reviews** button.<br/>
7-After finishing your session with the provider go to **My Orders** in the nav bar , click on **Current Orders**,
Choose the recent order and click on **Check Out** to view the summary of your order.<br/>
8-Click on **checkout** inside the summary, then you can view the summaries of all previous orders from **Previous Order** in the header


## ⛏️ Built Using <a name = "built_using"></a>
- bcrypt
^ 5.1.1 <br/>

- cors
^ 2.8.5 <br/>

- dotenv
^ 16.3.1 <br/>

- express
^ 4.18.2  <br/>

- jsonwebtoken
^ 9.0.2 <br/>

- mongoose
^ 7.5.2 <br/>

- pg
^ 8.11.3 <br/>

- @emailjs/browser
^ 3.11.0 <br/>

- @emotion/react
^ 11.11.1 </br>

- @emotion/styled
^ 11.11.0 </br>

- @fortawesome/fontawesome-free
^ 6.4.2 </br>

- @mui/icons-material
^ 5.14.11 </br>

- @mui/material
^ 5.14.11 </br>

- @react-oauth/google
^ 0.11.1 </br>

- @reduxjs/toolkit
^ 1.9.6 </br>

- @types/react
^ 18.2.15 </br>

- @types/react-dom
^ 18.2.7 </br>

- @vitejs/plugin-react-swc
^ 3.3.2 </br>

- axios
^ 1.5.0 </br>

- bootstrap
^ 5.3.2 </br>
- chart.js
^ 4.4.0 </br>
- eslint
^ 8.45.0 </br>
- eslint-plugin-react
^ 7.32.2 </br>
- eslint-plugin-react-hooks
^ 4.6.0 </br>
- eslint-plugin-react-refresh
^ 0.4.3 </br>
- google-map-react
^ 2.2.1 </br>
- mdb-react-ui-kit
^ 6.3.0 </br>
- react
^ 18.2.0 </br>
- react-bootstrap
^ 2.9.0 </br>
- react-chartjs-2
^ 5.2.0 </br>
- react-dom
^ 18.2.0 </br>
- react-jwt
^ 1.2.0 </br>
- react-redux
^ 8.1.2 </br>
- react-router-dom
^ 6.16.0 </br>
- react-toastify
^ 9.1.3 </br>
- vite
^ 4.4.5 </br>

- [PosgteSQL](https://www.postgresql.org/) - Database
- [Express JS](https://expressjs.com/) - Server Framework
- [React JS](https://https://reactjs.org/) - Web Framework
- [React-Redux](https://react-redux.js.org/) -State Management
- [Node JS](https://nodejs.org/en/) - Server Environment

## User Story <a name = "#user_story"></a>


<a href='https://trello.com/b/LEUHLtAA/cure-app'>Trello</a>

## Data Flow <a name = "#data_flow"></a>

<img width=400px height=200px src="https://res.cloudinary.com/drzcyo3sv/image/upload/v1697289724/image_ajh8lr.png" alt="Diagram"></a>
##  🙋💁Team Members <a name= "team_members"></a>
  #### Scrum :Duha Al-Dahamsheh <br/>
 #### Member: Hala AbuShalbak
## ⚠️ Guided By <a name = "guided_by"></a>


Greatful to the mentors :
#### Walaa Rababaa'
#### Anas Al-Khamis
#### Ahmad Sawalmeh
#### ©️ **[MERAKI Academy](https://www.meraki-academy.org)**