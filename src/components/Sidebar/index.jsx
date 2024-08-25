import './index.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/img/logo-background-black.png';
import { FaHome,FaCartPlus,FaTags  } from 'react-icons/fa';

const SideBar = () => {
    const location = useLocation();

    const isRouteActive = (route) => {
        return location.pathname === route
    }

    return (
        <div className="d-flex sidebar">
            <div className="bg-dark text-white vh-100" style={{ width: '250px' }}>
                <div className="py-4 h-100 ">
                    <div className='row d-flex justify-content-center align-items-center m-0'>
                        <img src={Logo} alt="Logo" className='logo' />
                        <ul className="nav flex-column mt-3" style={{paddingLeft: '1.5rem !important',paddingRight: '1rem !important'}}>
                            <li className={`nav-item ${isRouteActive('/home')?'active':''}`}>
                                <Link className="nav-link text-white d-flex align-items-center px-0" to="/home">
                                <FaHome className="me-2" />
                                    Home
                                </Link>
                            </li>
                            <li className={`nav-item ${isRouteActive('/compare-prices')?'active':''}`}>
                                <Link className="nav-link text-white d-flex align-items-center px-0" to="/compare-prices">
                                <FaTags className="me-2" />
                                    Compare Price
                                </Link>
                            </li>
                            <li className={`nav-item ${isRouteActive('/create-product')?'active':''}`}>
                                <Link className="nav-link text-white d-flex align-items-center px-0" to="/create-product">
                                <FaCartPlus className="me-2" />
                                    Create Product
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;