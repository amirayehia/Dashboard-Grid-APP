import React, { useEffect, useState } from 'react'
import { fetchContent } from '../Store/userDataSlice';
import { useAppDispatch } from "../Store/store";
import { useAppSelector } from "../Store/store";
import DataGridElement from './DataGridElement';
import SearchBar from './SearchBar';
import IconsUser from './IconsUser';

interface filteredData {
    id: string,
    value: string
}

function DataGrid() {
    const myinitialData = [{ created_on: '', email: '', group: '', name: '', status: '', user_name: '' }]
    const contents = useAppSelector((state) => state.userData.contents);
    const isLoading = useAppSelector((state) => state.userData.isLoading)
    const error = useAppSelector((state) => state.userData.error);
    const [dataUser, setData] = useState(myinitialData);

    const dispatch = useAppDispatch();
    const getData = () => {
        dispatch(fetchContent());
    }
    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            getData()
        }
        return () => { ignore = true }
    }, []);

    useEffect(() => {
        setData(contents)
    }, [contents])


    const filteredDataHan = (data: filteredData) => {
        let id: string = data.id;
        let value: string = data.value;
        let newData: any = [];
        if (id == 'created_on') {
            let newDa: any = []
            Object.values(contents).map((ele) => {
                let d = new Date(ele[id as keyof typeof ele]).toLocaleDateString().split('/');
                let newd = `${d[2]}-${d[0]}-${d[1]}`
                console.log(newd, value)
                console.log(newd.includes(value))
                if (newd.includes(value)) {
                    console.log(true)
                    newDa.push(ele)
                }

            }

            )
           newData = newDa
        } else if (value) {
            console.log(value)
            newData = id == 'status' ? Object.values(contents).filter((ele) => ele[id as keyof typeof ele].includes(value)) : Object.values(contents).filter((ele) => ele[id as keyof typeof ele].toLowerCase().includes(value));

            console.log(newData)
        } else {
            newData = contents
        }
        setData(newData);


    }

    return (
        <div className='main'>
            <div className='grid__outline'>
                <SearchBar filteredDataHandler={filteredDataHan} />
                <IconsUser />
                <table className='table_container  inline-block'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email Address</th>
                            <th>Group</th>
                            <th>Status</th>
                            <th>Created On</th>
                        </tr>
                    </thead>

                    {error ? 'Error Has Been Ocuured ' : isLoading ? <div className='block w-full text-center m-auto my-5'><i className="fa-solid fa-spinner fa-spin text-6xl text-slate-800"></i> </div> : Object.keys(contents).length > 0 ? <tbody> {Object.values(dataUser).map((ele, i) => <DataGridElement key={i} dataUser={ele} />)} </tbody> : 'ssssssssssssss'}


                </table>
            </div>

        </div>

    )
}

export default DataGrid