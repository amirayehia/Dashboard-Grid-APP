import axios from 'axios';
import React, { useState } from 'react';
import { fetchContent } from '../Store/userDataSlice';
import { useAppDispatch } from "../Store/store";




interface ButtonProps {
    closeHandler: () => void;
}
function NewUser({ closeHandler }: ButtonProps) {
    const dispatch = useAppDispatch();
    let date = new Date();
    console.log(date)
    let [obj, setObj] = useState({ name: '', user_name: '', email: '', group: '', status: 'Active', created_on: date.toDateString() })
    const onclickCloseHandler = () => {
        closeHandler()
    }
    const onSubmiitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.post('https://my-project-dced9-default-rtdb.firebaseio.com/data/-Nioegg3UZJhxJ-KpGwH.json', obj)
            .then(function (response) {
                console.log(response);
                dispatch(fetchContent());
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const onChangeHandler = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value);
        let newobj = { ...obj };
        newobj[e.currentTarget.id as keyof typeof newobj] = e.currentTarget.value;
        setObj(newobj)
    }
    console.log(obj);
    const resetHandler = () => {
        setObj({ name: '', user_name: '', email: '', group: '', status: 'Active', created_on: date.toDateString() })
    }


    return (
        <div>
            <div className="newUserContent">
                < div className='add_new-user' >
                    <div className="text-container">
                        <h1>Add New User</h1>
                        <i className="fa-solid fa-xmark" onClick={onclickCloseHandler}></i>
                    </div>
                    <form className='add__user' onSubmit={onSubmiitHandler}>
                        <div className="m-6">
                            <label htmlFor="name" className="name__label">Full Name</label>
                            <input value={obj.name} onChange={onChangeHandler} type="text" id="name" className="name__input" placeholder="Enter Full Name Ex : Amira Yehia" required />
                        </div>
                        <div className="m-6">
                            <label htmlFor="user_name" className="name__label">User Name</label>
                            <input value={obj.user_name} onChange={onChangeHandler} type="text" id="user_name" className="name__input" placeholder="Enter Username Ex : amira.yehia " required />
                        </div>
                        <div className="m-6">
                            <label htmlFor="email" className="name__label">Email Address</label>
                            <input value={obj.email} onChange={onChangeHandler} type="email" id="email" className="name__input" placeholder="Enter your Email Adress" required />
                        </div>
                        <div className="m-6">
                            <label htmlFor="group" className="name__label">User Group</label>
                            <select value={obj.group} onChange={onChangeHandler} id="group" className="name__input">
                                <option value='' disabled selected hidden> <span>Choose User Group</span> </option>
                                <option value="Office">Office</option>
                                <option value="Managers">Managers</option>
                                <option value=">Head Managers">Head Managers</option>
                            </select>
                        </div >
                        <div className="m-6">
                            <label htmlFor="profile" className="name__label">Assign Profile</label>
                            <select value={obj.name} onChange={onChangeHandler} id="profile" className="name__input">
                                <option value='' disabled selected hidden> <span>Choose Profile</span> </option>
                                <option value="Active">Profile One</option>
                                <option value="Inactive">Profile Two</option>
                                <option value="Locked">Profile Three</option>
                            </select>
                        </div>
                        <div className="form_footer">
                            <div><a onClick={resetHandler}>Reset fields</a></div>
                            <div className='btns'>
                                <button className="cancel" onClick={onclickCloseHandler}>Cancel</button>
                                <button type="submit" className="submit">Add User</button>
                            </div>
                        </div>

                    </form>

                </div >

            </div>

        </div>
    )
}

export default NewUser