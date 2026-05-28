import bannerImage from "../../../assets/Banner-bg/Banner-image.png"
import bannerBG from "../../../assets/Banner-bg/Banner-bg.png"
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <section className="relative px-4 md:px-10 overflow-hidden">

            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bannerBG})` }}
            ></div>

            {/* Content */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Text */}
                <div className="pt-24 text-center md:text-left md:pt-0 lg:pt-0 max-w-xl space-y-4">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Make a <span className="text-green-600">Difference</span> <br className="hidden sm:block" />
                        Change a <span className="text-green-600">Life</span>
                    </p>

                    <p className="text-sm sm:text-base md:text-lg">
                        Our small contribution can bring smile to someone's life. Help today, hope for tomorrow.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <Link to="login" className="btn btn-outline btn-warning w-full sm:w-auto">
                            Donate Now
                        </Link>
                        <Link to="login" className="btn btn-outline btn-secondary w-full sm:w-auto">
                            Explore Causes
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full -mt-16 md:w-1/2 md:mt-0 lg:mt-0 flex justify-center ">
                    <img
                        src={bannerImage}
                        alt=""
                        className="w-full max-w-sm md:max-w-md lg:max-w-md object-contain"
                    />
                </div>

            </div>
        </section>
    );
};
export default Banner;