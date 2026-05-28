import { Link } from "react-router-dom";
import donationLogo from "../../../assets/donation-logo/Donation-logo.png"
import { HashLink } from "react-router-hash-link";

const Navbar = () => {

    const navItems = <>
        <div className="flex text-center items-center gap-5">

            <Link to="/">Home</Link>
            <HashLink smooth to="/#Causes" >
                Causes
            </HashLink>
            <Link to="works">How It Works</Link>
            <Link to="about">About Us</Link>
            <Link to="blog">Blog</Link>
            <Link to="contact">Contact</Link>
        </div>
    </>

    return (
        <section>
            <div className="navbar bg-transparent absolute right-0 z-50 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>

                    {/* Logo and project headline----------------------------------------------------------->  */}
                    <div className="flex justify-center items-center">
                        <img src={donationLogo} alt="" className="h-12 w-12 object-contain hidden sm:block" />
                        <h2 className="text-lg font-bold tracking-wide text-green-600 -ml-2">HopeAid</h2>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm">

                        <Link
                            to="/login"
                            className="px-4 py-1 text-sm font-medium text-gray-700 hover:bg-yellow-400 hover:text-black transition"
                        >
                            Login
                        </Link>

                        {/* Divider */}
                        <div className="h-5 w-px bg-gray-300"></div>

                        <Link
                            to="/signup"
                            className="px-4 py-1 text-sm font-medium text-white bg-black hover:bg-yellow-400 hover:text-black transition"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Navbar;