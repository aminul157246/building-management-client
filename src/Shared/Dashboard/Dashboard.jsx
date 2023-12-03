
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex mt-12 gap-8 '>
            <div>
                <div className='w-64 min-h-screen bg-orange-200'>
                    <ul className="menu">
                        <div className="mb-8">
                            <h3 className='text-2xl font-bold'>User</h3>
                            <li><NavLink to={'/dashboard/profile'}>User Profile</NavLink></li>
                            <li><NavLink to={'/dashboard/announcement'}>User Announcement</NavLink></li>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold'>Admin</h3>
                            <li><NavLink to={'/dashboard/profileAdmin'}>Admin Profile</NavLink></li>
                             
                        </div>
                    </ul>
                </div>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;