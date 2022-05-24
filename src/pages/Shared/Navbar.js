import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/rounded-plug(2).png'
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);
    // console.log(user.displayName);

    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li><NavLink className='hover:bg-accent hover:text-white rounded-lg' to='/'>Home</NavLink></li>
        <li><NavLink className='hover:bg-accent hover:text-white rounded-lg' to='/blogs'>Blogs</NavLink></li>
        <li><NavLink className='hover:bg-accent hover:text-white rounded-lg' to='/myportfolio'>My Portfolio</NavLink></li>

        {
            user && <li><NavLink className='hover:bg-accent hover:text-white rounded-lg' to='/dashboard'>Dashboard</NavLink></li>
        }

        <li>
            {user
                ? <button className="hover:bg-accent hover:text-white rounded-lg btn btn-outline " onClick={logout}>Sign Out</button>
                : <NavLink className='hover:bg-accent hover:text-white rounded-lg' to='/login'>
                    Login
                </NavLink>}
        </li>


    </>

    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost btn-square lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content gap-y-2 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {menuItems}
                        </ul>

                    </div>
                    <a class="btn btn-ghost normal-case text-xl font-bold"> <img className='mx-2' src={logo} alt="" /> <span> <Link to='/'>CONNECTORS</Link> </span>   </a>
                </div>
                <div class="navbar-center hidden text-lg lg:flex">
                    <ul class="menu menu-horizontal gap-x-2">

                        {menuItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;