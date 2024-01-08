import './App.css';
import React from 'react';
import Mainmenu  from './components/MainMenu/MainMenu';
import MainMenuTest from './components/MainMenuTest/MainMenuTest';
import Loginsignup from './components/LoginSignup/LoginSignup';
import Toggle from './components/MainMenuTest/Toggle';
import ImgDraw from './bounding/ImgDraw';
import ReadTxtFile from './bounding/ReadTxtFile';
import MultipleFileUploader from './components/MultipleFileUploader';
import { EditProfile } from './components/EditProfile/EditProfile';
import { AdminMainMenu } from './components/AdminMainMenu/AdminMainMenu';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      {/* <MainMenuTest/> */}
      {/* <Loginsignup /> */}
      {/* <Toggle /> */}
     
      <ImgDraw />
      {/* <ReadTxtFile/> */}
      {/* <MultipleFileUploader /> */}
      {/* <EditProfile />  */}
      {/* <AdminMainMenu/> */}

    </div>
    
  );
}

export default App;
