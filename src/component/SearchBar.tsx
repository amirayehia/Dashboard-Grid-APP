import React from 'react'
interface filteredData {
    filteredDataHandler: (data: {
        id: string,
        value: string
    }) => void;
}
function SearchBar({ filteredDataHandler }: filteredData) {
    interface objdata {
        id: string,
        value: string
    }

    const OnChangeHandler = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
        let obj: objdata = {
            id: e.currentTarget.id,
            value: e.currentTarget.value
        }
        console.log(obj)
        filteredDataHandler(obj)
    }

    return (
        <>
            <form className="form">
                <div className="search basic">
                    <i className="fa-solid fa-magnifying-glass ms-2 text-stone-400"></i>
                    <input className="searchInput" id="name" type="text" placeholder="Search..." onChange={OnChangeHandler} />
                </div>

                <input className="username basic w-1/5" id="user_name" type="text" placeholder="  User Name" onChange={OnChangeHandler} />

                <div className='ms-2 relative w-1/5 ' >
                    <label htmlFor="status" className="status">User Status</label>
                    <select id="status" className="status" onChange={OnChangeHandler}>
                        <option value=''>Any</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Locked">Locked</option>

                    </select>
                </div>
                <div className='ms-2 relative w-1/5 '>
                    <label htmlFor="created_on" className="status">Creation Time</label>
                    <input className="time" id="created_on" type="date" placeholder="All" onChange={OnChangeHandler} />
                </div>
            </form>
        </>

    )
}

export default SearchBar