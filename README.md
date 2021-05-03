#  
<p align="center">
<img src="https://user-images.githubusercontent.com/55861951/116801406-51d63880-ab27-11eb-92c8-e79e1605a236.png" alt="Parijana Logo" >
</p>
<h1 align="center">Welcome to <a href="https://parijana.herokuapp.com/college" >Parijana-Papers</a> 👋 </h1>

> Parijana-Papers is a website that contains previous year papers of `UIET, Kanpur`

## Overview 👀
- Easy searching of question papers by various tag names
  - *Subject Code*
  - *Subject Name*
  - *Semester number*
  - *Teacher name*
  - *Year of examination*
- Clean UI
- Responsive Design

## 💻 Prerequisite for Running Locally
`Node JS` should be installed on your system.
For server, `MongoDB Compass` should be installed on youy system or you can use `MongoDB Atlas`

You can get them from here
- [Node JS](https://nodejs.org/en/)
- [MongoDB Compass](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.5-signed.msi)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)


## 🚀 Usage
- Clone this repo on your system 
- Open `Command Prompt` or `Terminal` inside the cloned folder
- Now, Just run the following commands
```sh
cd ./client-side
npm install
cd ../server
npm install
```
- Once you've installed all the dependencies, reopen `terminal` in root folder and run following commands
```sh
cd ./client-side
npm start
```
> this will boot up the react on [localhost:3000](http://localhost:3000), then go to  [localhost:3000/college](http://localhost:3000/college) to run the app

- Create a `.env` file and enter `DATABASE_URL=mongodb://localhost/college-website` or your atlas connection link

- Now open another `terminal` in the root folder and run following commands
```
cd ./server
npm server.js
```

## 🛠 WIP
- Dark mode
- More interactive CSS

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
