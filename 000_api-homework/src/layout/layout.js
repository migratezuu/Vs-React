import Header from '../components/Header';
import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';


function Layout() {

    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default Layout;