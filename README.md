#  
<p align="center">
<img src="https://user-images.githubusercontent.com/55861951/116801406-51d63880-ab27-11eb-92c8-e79e1605a236.png" alt="Parijana Logo" >
</p>
<h1 align="center">Welcome to <a href="https://parijana.herokuapp.com/college" >Parijana-Papers</a> 👋 </h1>

> Parijana-Papers is a website that contains previous year papers of `UIET, Kanpur`

![Parijana-Papers](https://user-images.githubusercontent.com/55861951/117621436-3f937480-b18f-11eb-8501-f63198b7513b.png)

## 👀 Overview 
- Easy searching of question papers by various tag names
  - *Subject Code*
  - *Subject Name*
  - *Semester number*
  - *Teacher name*
  - *Year of examination*
- Clean UI
- Responsive Design

## 💻 Prerequisite for Running Locally
- `Node JS` should be installed on your system. <br>
- `MongoDB Compass` should be installed on your system or you can use `MongoDB Atlas`
- `Google Drive API` credentials

You can get them from here
- [Node JS](https://nodejs.org/en/)
- [MongoDB Compass](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.5-signed.msi)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Drive API Tutorial](https://www.youtube.com/watch?v=1y0-IfRW114&t=819s)


## 🚀 Usage
- Clone this repo on your system 
```sh
git clone https://github.com/algomonk016/Parijana-Papers.git
cd Parijana-Papers
```
- Now, instll the dependencies by following given commands
```sh
cd ./client-side
npm install
cd ../server
npm install
```
- Create a `.env` file inside `server` folder and provide your credentials
```sh
DATABASE_URL: <value>
CLIENT_ID: <value>
CLIENT_SECRET: <value>
REDIRECT_URI: <value>
REFRESH_TOKEN: <value>
```
- Once you've installed all the dependencies, reopen `terminal` in root folder and run following commands
```sh
cd ./client-side
npm start
```
> this will boot up the react-app on [localhost:3000](http://localhost:3000), then go to  [localhost:3000/college](http://localhost:3000/college) to run the app


- Now open another `terminal` in the root folder and run following commands
```
cd ./server
npm server.js
```
> this will boot up the node server on [localhost:5000](http://localhost:5000)

Now you're good to go ...


## 🛠 WIP
- Dark mode
- Uploading multiple files at one shot
- Sending pdf using mail
- More interactive CSS
- Auto-cleaning the localstorage
- A super-admin, with super powers

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
