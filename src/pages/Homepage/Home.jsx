import Banner from "../../components/outlets/Homes/Banner";
import PopularCauses from "../../components/outlets/Homes/PopularCauses";

const Home = () => {
    return (
        <section>
            <div className="">

                {/* This is banner  */}
                <Banner />

                {/* Popular Causes  */}
                <PopularCauses></PopularCauses>

            </div>
        </section>
    );
};

export default Home;