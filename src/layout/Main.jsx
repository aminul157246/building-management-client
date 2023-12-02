import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
                <Toaster></Toaster>

        </div>
    );
};

export default Main;