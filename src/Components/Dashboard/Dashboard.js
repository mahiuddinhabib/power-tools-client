import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile text-neutral">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <label htmlFor="my-drawer-2" className=" w-4/12 p-1 pl-0 lg:hidden "><span>Open</span><ChevronDoubleRightIcon className="w-[21px] inline"/></label>
                
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && <>
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/add-review">Add A Review</Link></li></>}
                    <li><Link to={`/dashboard/my-profile/${user.email}`}>My Profile</Link></li>
                    {
                        admin &&
                    <>
                    <li><Link to="/dashboard/manage-all-orders">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/add-product">Add A Product</Link></li>
                    <li><Link to="/dashboard/make-admin">Make Admin</Link></li>
                    <li><Link to="/dashboard/manage-products">Manage Products</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;