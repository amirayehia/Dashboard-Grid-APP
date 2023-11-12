import React from 'react'
interface ourData {
    dataUser: {
        created_on: string, email: string, group: string, name: string, status: string, user_name: string
    }
}
function DataGridElement({ dataUser }: ourData) {
    console.log('reeeeeeeeeeeeeeeeeeeed')
    let colorPalette = ['bg-fuchsia-200', "bg-emerald-200", 'bg-amber-200', "bg-orange-200", 'bg-red-200', 'bg-purple-200', 'bg-emerald-200', 'bg-stone-200']
    let shortCut = dataUser.name.split(' ');
    let selectedColorPallete = colorPalette[Math.round(Math.random() * colorPalette.length)]
    // let editedDate = new Date (dataUser.created_on);
    console.log(dataUser.name, dataUser.user_name, dataUser.email, dataUser.group, dataUser.status, dataUser.created_on)
    return (
        <tr>
            <td>
                <div className={`${selectedColorPallete ? selectedColorPallete : 'bg-indigo-200'} name__icon`}>
                    <div >
                        {shortCut[0][0] + shortCut[1][0]}
                    </div>

                </div>
                {dataUser.name}
            </td>
            <td>{dataUser.user_name}</td>
            <td>{dataUser.email}</td>
            <td>{dataUser.group}</td>
            <td>{dataUser.status}</td>
            <td>{dataUser.created_on}</td>
        </tr>

    )
}

export default DataGridElement