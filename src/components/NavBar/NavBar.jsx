import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
    <Link to="/menu">Menu</Link>
    &nbsp; | &nbsp;
    <Link to="/orders/new">New Order</Link>
    &nbsp; | &nbsp;
    <Link to="/orders">Order History</Link>
    &nbsp; | &nbsp;
    {/* <span>Hi, {user.name}</span> */}
  </nav>
  )
}