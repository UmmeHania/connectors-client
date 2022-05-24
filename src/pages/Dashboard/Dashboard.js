import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id=" dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-3xl font-bold text-[#302d7f]'>Welcome to your Dashboard</h2>

                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for=" dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content gap-1">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link className='hover:bg-accent hover:text-white rounded-lg font-semibold' to='/dashboard'>My Orders</Link></li>
                        <li><Link className='hover:bg-accent hover:text-white rounded-lg font-semibold' to='/dashboard/review'>Add A review</Link></li>
                        <li><Link className='hover:bg-accent hover:text-white rounded-lg font-semibold' to='/dashboard/myprofile'>My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;