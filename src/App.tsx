import React, { useEffect, useState } from 'react';
import './App.css';
import DataGrid from './component/DataGrid';
import SearchBar from './component/SearchBar';
import IconsUser from './component/IconsUser';
import NewUser from './component/NewUser';
import ReactDOM from 'react-dom';
import NavBar from './Layout/NavBar';
import SideBar from './Layout/SideBar';
function App() {
  const [isAppearPage, setIsAppearPge] = useState(false);
  const onClickHandler = () => {
    setIsAppearPge(true)
  }
  const closeHandler = () => {
    setIsAppearPge(false)
  }


  return (
    <div className='flex '>
      <SideBar />
      <div className='flex-grow'>
        <NavBar />
        <div className='major'>
          <div className='additional__'>
            <h1>User Management</h1>
            <button onClick={onClickHandler}><i className="fa-solid fa-plus"></i> Add New</button>
          </div>

          <DataGrid />
          {
            isAppearPage && ReactDOM.createPortal(<NewUser closeHandler={closeHandler} />, document.getElementById("over-lay") as HTMLElement)
          }



        </div>

      </div>



    </div>

  );
}

export default App;
