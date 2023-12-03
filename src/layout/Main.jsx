import Navbar from '../Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {


    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login')

    return (
        <div>
                {noHeaderFooter || <Navbar></Navbar>}
                <Outlet></Outlet>
                {noHeaderFooter || <Footer></Footer>}
                <Toaster></Toaster>

        </div>
    );
};

export default Main;