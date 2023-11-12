import React from 'react'

function NavBar() {
  const d = new Date();
  const dateItem = d.toDateString();
  const time = d.toTimeString().split(' ')

  return (
    <div className='navbar'>
      <div className="rigth_items">
        <i className="fa-solid fa-chevron-left"></i>
        <i className="fa-solid fa-bars"></i>
        <p>Good Morning!</p>
        <p  className='date'>{dateItem} {time[0]} </p>

      </div>
      <div className="left_items">
      <i className="fa-regular fa-circle-question"></i>
      <i className="fa-solid fa-bell"></i>
      <span>+9</span>
      <div className='personal_'>
        <p>Amira Yehia</p>
        <div>
        <span>AY</span>
        </div>
        <i className = 'fa-solid fa-angle-down'></i>
      </div>
      </div>
    </div>
  )
}

export default NavBar