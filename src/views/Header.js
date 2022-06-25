import { useNavigate, Link, useLocation } from 'react-router-dom';
import ProfilePic from "../assets/images/user_avatar.png"
import dropdownProfile from "../assets/images/profile_drop.svg"
import subscriptionDrop from "../assets/images/subscribe_drop.svg"
import Logo from "../assets/images/Logo.svg";
import pathNames from "../router/RoutePath";
import { Dropdown } from 'react-bootstrap';
import { LogoutAction } from '../redux/actions/AuthActions';
import { useDispatch } from 'react-redux';

export default function Header() {
    const history = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(LogoutAction(history));
    }
    return (
        <div className="mainNav">
            <div className="logoDiv">
                <Link to={pathNames.Home}><img className="navLogo" src={Logo} alt="Logo Unavailable" /></Link>
            </div>
            <div className="aboutAccount">
                <img className="profilePic" src={ProfilePic} alt="Profile Unavailable" />
                <div>
                    <Dropdown className="">
                        <Dropdown.Toggle className="drop-down-head" id="dropdown-basic">
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="drop-down-menu">
                            {/* <Dropdown.Item ><Link className="dropDownInfo" to={pathNames.ProfileInfo}><span className="dropOption">10</span><span className="dropRepresent">Reports Credit</span></Link></Dropdown.Item> */}
                            <Link className="dropDownInfo" to={pathNames.ProfileInfo}><span className="dropOption"><img className="titleLogo" src={dropdownProfile} alt="dropdown" /></span><span className="dropRepresent">My Profile</span></Link>
                            <Dropdown.Divider />
                            <Link className="dropDownInfo" to={pathNames.subscriptionPackages}><span className="dropOption"><img className="titleLogo" src={subscriptionDrop} alt="dropdown" /></span><span className="dropRepresent">Subscription</span></Link>
                            <Dropdown.Divider />
                            <button className="logoutBtn" onClick={logOut}>Logout</button>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

