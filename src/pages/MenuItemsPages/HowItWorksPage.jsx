import PageContainer from "../../components/PageContainer/PageContainer"

// React icons 
import { FaUserPlus, FaSearch, FaDonate, FaSmile } from "react-icons/fa";

const HowItWorksPage = () => {

    const steps = [
        {
            id: "01",
            icon: <FaUserPlus />,
            title: "Create Account",
            description:
                "Sign up easily and become a part of our donation community.",
        },

        {
            id: "02",
            icon: <FaSearch />,
            title: "Explore Campaigns",
            description:
                "Browse verified donation campaigns and choose a cause you care about.",
        },

        {
            id: "03",
            icon: <FaDonate />,
            title: "Make Donation",
            description:
                "Donate securely using trusted payment methods in just a few clicks.",
        },

        {
            id: "04",
            icon: <FaSmile />,
            title: "Create Impact",
            description:
                "Your contribution directly helps people and changes lives.",
        },
    ];

    return (
        <PageContainer>
            <section className="rounded-3xl mt-10 mb-5 bg-[#071322] text-white min-h-screen">

                {/* Title  */}
                <title>How It Works</title>

                {/* heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        How It <span className="text-green-500">Works</span>
                    </h1>

                    <p className="text-gray-400 mt-5 leading-8">
                        Our donation process is simple, secure, and transparent.
                        Follow these easy steps to make a meaningful impact in
                        someone’s life.
                    </p>
                </div>

                {/* cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {
                        steps.map((step) => (
                            <div
                                key={step.id}
                                className="relative bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-green-500 hover:-translate-y-2 transition-all duration-300"
                            >

                                {/* step number */}
                                <div className="absolute top-5 right-5 text-5xl font-bold text-white/5">
                                    {step.id}
                                </div>

                                {/* icon */}
                                <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-2xl mb-6">
                                    {step.icon}
                                </div>

                                {/* title */}
                                <h3 className="text-2xl font-semibold mb-4">
                                    {step.title}
                                </h3>

                                {/* description */}
                                <p className="text-gray-400 leading-7 text-sm">
                                    {step.description}
                                </p>
                            </div>
                        ))
                    }

                </div>

            </section>
        </PageContainer>
    );
};

export default HowItWorksPage;