import { Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="">

            <div className="">
                {/* navbar  */}
                <Navbar></Navbar>
            </div>

            {/* outlet  */}
            <div className="">
                <Outlet></Outlet>
            </div>

            {/* footer  */}
            <Footer></Footer>

        </div>
    );
};

export default Main;