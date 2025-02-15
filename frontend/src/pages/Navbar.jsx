import { useContext, useState } from "react";
import { USERS_HOMEPAGE, NavLink, USERS_LOGIN, USERS_SIGNUP, FontAwesomeIcon, faHouse, faInbox, LOGO_URL, getTokenFromCookie, USERS_PROFILE, USERS_LOGOUT, axios, toast, BACKEND_ERROR, useNavigate, BACKEND_LOGOUT, BACKEND_PROFILE, EmailGlobalContext } from "../routes/routes.jsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { email, setEmail } = useContext(EmailGlobalContext);    

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };   

    const handleLogout = async () => {
        try {
            const response = await axios.post(BACKEND_LOGOUT);
            if (response.status == 200) {
                localStorage.removeItem('email');
                setEmail('');
                document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
                toast.success("Logout successfully.")
                navigate(USERS_HOMEPAGE);
            }
        } catch (err) {
            toast.error("Unable to logout. Please try again after some time.");
            const errorData = {
                error: err.message,
                message: `Logout Error : Unable to logout. ${err.message}`,
                timestamp: new Date().toISOString()
            };
            axios.post(BACKEND_ERROR, errorData);
        }
    }

    const handleUserProfile = async () => {
        try {
            const response = await axios.get(BACKEND_PROFILE);
            if (response.status == 200) {
                navigate(USERS_PROFILE);
            }
        } catch (err) {
            const errorData = {
                error: err.message,
                message: `User Profile Error : Unable to fetch User Profile. ${err.message}`,
                timestamp: new Date().toISOString()
            };
            axios.post(BACKEND_ERROR, errorData);
        }
    }
    return (
        <nav className="static top-0 w-full">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 pt-2">
                <NavLink to={USERS_HOMEPAGE} className="flex items-center space-x-3 rtl:space-x-reverse" title="MelodyHub">
                    <img src={LOGO_URL} className="h-12 rounded-full w-12" alt="Flowbite Logo" />
                </NavLink>
                <div className="flex md:order-1">
                    <span className="w-11 bg-[#1f1f1f] rounded-full mr-2 text-center cursor-pointer pt-2 hidden md:block">
                        <NavLink to={USERS_HOMEPAGE} title="Home">
                            <FontAwesomeIcon icon={faHouse} className="text-lg" />
                        </NavLink>
                    </span>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-96 p-2 ps-10 pe-14 rounded-full bg-[#1f1f1f]" placeholder="What do you want to play?" />
                        <div className="absolute inset-y-0 end-0 flex items-center pe-3 text-[#818181] border-l-2 border-[#818181] pl-3">
                            <NavLink to="#" title="Browse">
                                <FontAwesomeIcon icon={faInbox} className="text-xl" />
                            </NavLink>
                        </div>
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded={isOpen} onClick={handleToggle}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-2 ${isOpen ? 'block' : 'hidden'}`} id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm rounded-lg bg-transparent" placeholder="What do you want to play?" />
                    </div>
                    <ul className="flex flex-col p-4 md:p-0 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                        { getTokenFromCookie('token') || getTokenFromCookie('admin_token') ? ( 
                            <div className="relative h-28 md:h-0">
                                <div className="hidden md:flex -space-x-2 overflow-hidden cursor-pointer" onClick={toggleDropdown}>
                                    <img alt="" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="inline-block size-10 rounded-full ring-2 ring-white pointer-events-none" />
                                </div>
                                {isOpen && (
                                    <div className="absolute top-0 bg-transparent w-full mb-8 md:mb-0 right-0 z-10 md:top-14 md:w-64 rounded-md md:bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dropdown-menu">
                                        <ul className="py-2">
                                            <li className="py-2 px-4 text-white bg-inherit md:text-black border-b-2 border-b-gray-400">Signed in as {email}</li>
                                            <NavLink to={USERS_PROFILE} onClick={handleUserProfile}><li className="py-2 px-4 text-white bg-inherit md:hover:bg-gray-200 md:text-black">Account Settings</li></NavLink>
                                            <NavLink to={USERS_LOGOUT} onClick={handleLogout}><li className="py-2 px-4 text-white bg-inherit md:hover:bg-gray-200 md:text-black">Sign Out</li></NavLink>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )
                        : (
                            <>
                                <li><NavLink to={USERS_SIGNUP} className="block py-2 px-3 md:border-0 text-gray-300 md:hover:text-white border-b-2" aria-current="page">Sign up</NavLink></li>
                                <li><NavLink to={USERS_LOGIN} className="block py-2 px-3 md:border-0 border-b-2 md:bg-white md:text-black md:rounded-full md:w-24 md:text-center md:font-bold hover:scale-110 transition duration-200 ease-in-out">Login</NavLink></li>
                            </>
                        ) }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;