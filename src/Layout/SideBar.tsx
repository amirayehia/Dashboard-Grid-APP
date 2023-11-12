import React, { useState } from 'react';
import logo from '../assets/unnamed (1).png'
interface UsersState {
    obj: {
        "ATM Settings": string[], "Business Setup": string[], "User Management": string[]
    }[]
}
function SideBar() {

    const obj = [{ "ATM Settings": ['one', "two", "three"], "Business Setup": ['one', "two", "three"], "User Management": ['Users', "Profiles", "Groups"] }];
    const [statusATM, setStatusATM] = useState('hidden');
    const [statusB, setStatusB] = useState('hidden');
    const [statusUSR, setStatusUSR] = useState('hidden')
    const onclickHandler = (status: string, type: string) => {
        if (type == 'statusATM') {
            if (status == 'hidden') {

                setStatusATM('block');

            } else {
                setStatusATM('hidden');
            }
        } else if (type =='statusB'){
            if (status == 'hidden') {

                setStatusB('block');

            } else {
                setStatusB('hidden');
            }
        } else{
            if (status == 'hidden') {

                setStatusUSR('block');

            } else {
                setStatusUSR('hidden');
            }
        }


    }
    return (
        <div className='sidebar'>
            <div className="imag__container">
                <img src={logo} alt="logo" />
            </div>
            <div className="search">
                <input type="text" placeholder='Quick Access' />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='dashboard'>
                <i className="fa-solid fa-table-cells"></i>
                <p>Dashboard</p>
            </div>
            <div className='settings'>
                SETTINGS
            </div>
            <div className='data_cotent' onClick={() => { onclickHandler(statusATM, "statusATM") }}>
                <p>ATM Settings <span><i className={`${statusATM=='hidden'? 'fa-solid fa-angle-down': 'fa-solid fa-angle-up'}`}></i></span></p>
                <ul className={`${statusATM}`}>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </div>
            <div className='data_cotent' onClick={() => { onclickHandler(statusB, "statusB") }}>
                <p>Business Setup <span><i className={`${statusB=='hidden'? 'fa-solid fa-angle-down': 'fa-solid fa-angle-up'}`}> </i></span> </p>
                <ul className={`${statusB}`}>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </div>
            <div className='data_cotent' onClick={() => { onclickHandler(statusUSR, "statusUSR") }}>
                <p>User Management <span><i className={`${statusUSR=='hidden'? 'fa-solid fa-angle-down': 'fa-solid fa-angle-up'}`}></i></span> </p>
                <ul className={`${statusUSR}`}>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </div>
            <div className='text-slate-400 ms-5 mt-3'>
                Licence Management
            </div>


        </div>
    )
}

export default SideBar