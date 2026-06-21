import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer/PageContainer";

// import lucide react
import { HeartHandshake, ShieldCheck, Globe, Users, BadgeCheck, HandCoins, Target, Eye, ArrowRight } from "lucide-react";

const AboutUsPage = () => {
    return (
        <PageContainer>

            {/* HERO SECTION */}
            <section className="relative overflow-hidden rounded-3xl bg-[#07121F] text-white mt-10">

                <title>Hopeaid - About</title>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817f1] to-[#020817c9] z-10"></div>

                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=1600&auto=format&fit=crop"
                    alt="About HopeAid"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 px-6 md:px-12 lg:px-20 py-20 lg:py-28">
                    <div className="max-w-3xl">

                        <div className="flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit mb-6">
                            <HeartHandshake className="w-5 h-5 text-green-400" />

                            <p className="text-sm font-medium">
                                Helping Communities Worldwide
                            </p>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Together We Can Create
                            <span className="text-green-400">
                                {" "}A Better Future
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
                            At HopeAid, we connect generous donors with meaningful
                            causes to support people in need. Our mission is to make
                            donations transparent, impactful, and accessible for everyone.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link to="/login" className="btn bg-green-500 hover:bg-green-600 border-none text-white">
                                Donate Now
                            </Link>

                            <Link to="/login" className="btn btn-outline text-white border-white hover:bg-white hover:text-black">
                                Explore Campaigns
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR STORY */}
            <section className="py-20">
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
                            alt="Our Story"
                            className="rounded-3xl shadow-xl w-full h-full object-cover"
                        />
                    </div>

                    <div>

                        <p className="text-green-500 font-semibold mb-3 uppercase tracking-wider">
                            Our Story
                        </p>

                        <h2 className="text-4xl font-bold leading-tight mb-6">
                            Small Contributions Can Create Big Change
                        </h2>

                        <p className="text-base-content/80 leading-relaxed mb-5">
                            HopeAid was founded with a vision to make helping others
                            easier, safer, and more transparent. We believe everyone
                            deserves access to food, education, healthcare, and hope.
                        </p>

                        <p className="text-base-content/80 leading-relaxed mb-5">
                            Our platform empowers donors and organizations to work
                            together for social impact. From emergency medical support
                            to clean water initiatives, every campaign on our platform
                            is created to change lives.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-5 mt-8">

                            <div className="bg-base-100 border border-base-300/50 shadow-md rounded-2xl p-5">
                                <h3 className="text-3xl font-bold text-green-500">
                                    28K+
                                </h3>

                                <p className="text-base-content/70 mt-2">
                                    Trusted Donors
                                </p>
                            </div>

                            <div className="bg-base-100 border border-base-300/50 shadow-md rounded-2xl p-5">
                                <h3 className="text-3xl font-bold text-green-500">
                                    156+
                                </h3>

                                <p className="text-base-content/70 mt-2">
                                    Active Campaigns
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="py-20 bg-base-200/60 backdrop-blur-sm rounded-3xl px-6 lg:px-14 border border-base-300">

                <div className="text-center max-w-3xl mx-auto mb-16">

                    <p className="text-green-500 font-semibold uppercase tracking-wider mb-3">
                        Mission & Vision
                    </p>

                    <h2 className="text-4xl font-bold mb-5">
                        Driven By Purpose
                    </h2>

                    <p className="text-base-content/80">
                        We aim to build a transparent donation ecosystem that
                        empowers people and organizations to create meaningful impact.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Mission */}
                    <div className="bg-base-100 border border-base-300/50 rounded-3xl p-8 shadow-md">

                        <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                            <Target className="text-green-500" />
                        </div>

                        <h3 className="text-2xl font-bold mb-4">
                            Our Mission
                        </h3>

                        <p className="text-base-content/80 leading-relaxed">
                            To empower communities through secure, transparent,
                            and impactful fundraising solutions that help people
                            in need around the world.
                        </p>

                    </div>

                    {/* Vision */}
                    <div className="bg-base-100 border border-base-300/50 rounded-3xl p-8 shadow-md">

                        <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                            <Eye className="text-green-500" />
                        </div>

                        <h3 className="text-2xl font-bold mb-4">
                            Our Vision
                        </h3>

                        <p className="text-base-content/80 leading-relaxed">
                            A future where every individual has access to support,
                            opportunity, and hope regardless of their circumstances.
                        </p>

                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="py-20">

                <div className="text-center max-w-3xl mx-auto mb-16">

                    <p className="text-green-500 font-semibold uppercase tracking-wider mb-3">
                        Our Values
                    </p>

                    <h2 className="text-4xl font-bold mb-5">
                        What Makes Us Different
                    </h2>

                    <p className="text-base-content/80">
                        We focus on transparency, compassion, and creating
                        long-term impact for communities worldwide.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-base-100 border border-base-300/50 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">
                        <ShieldCheck className="text-green-500 w-12 h-12 mb-5" />

                        <h3 className="text-xl font-bold mb-3">
                            Transparency
                        </h3>

                        <p className="text-base-content/70">
                            Every donation is securely tracked and monitored.
                        </p>
                    </div>

                    <div className="bg-base-100 border border-base-300/50 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">
                        <HeartHandshake className="text-green-500 w-12 h-12 mb-5" />

                        <h3 className="text-xl font-bold mb-3">
                            Compassion
                        </h3>

                        <p className="text-base-content/70">
                            We genuinely care about helping people in need.
                        </p>
                    </div>

                    <div className="bg-base-100 border border-base-300/50 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">
                        <BadgeCheck className="text-green-500 w-12 h-12 mb-5" />

                        <h3 className="text-xl font-bold mb-3">
                            Integrity
                        </h3>

                        <p className="text-base-content/70">
                            Ethical fundraising and accountability are our priority.
                        </p>
                    </div>

                    <div className="bg-base-100 border border-base-300/50 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">
                        <Globe className="text-green-500 w-12 h-12 mb-5" />

                        <h3 className="text-xl font-bold mb-3">
                            Global Impact
                        </h3>

                        <p className="text-base-content/70">
                            Supporting communities across multiple countries.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATISTICS */}
            <section className="py-20 bg-[#07121F] rounded-3xl text-white px-6 lg:px-12">

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                    <div>
                        <Users className="mx-auto text-green-400 w-12 h-12 mb-4" />

                        <h2 className="text-4xl font-bold">
                            28,540+
                        </h2>

                        <p className="text-gray-300 mt-2">
                            Total Donors
                        </p>
                    </div>

                    <div>
                        <HandCoins className="mx-auto text-green-400 w-12 h-12 mb-4" />

                        <h2 className="text-4xl font-bold">
                            $2.6M+
                        </h2>

                        <p className="text-gray-300 mt-2">
                            Raised Donations
                        </p>
                    </div>

                    <div>
                        <Target className="mx-auto text-green-400 w-12 h-12 mb-4" />

                        <h2 className="text-4xl font-bold">
                            156+
                        </h2>

                        <p className="text-gray-300 mt-2">
                            Active Campaigns
                        </p>
                    </div>

                    <div>
                        <Globe className="mx-auto text-green-400 w-12 h-12 mb-4" />

                        <h2 className="text-4xl font-bold">
                            12+
                        </h2>

                        <p className="text-gray-300 mt-2">
                            Countries
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">

                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl px-8 lg:px-16 py-16 text-white text-center">

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Ready To Make A Difference?
                    </h2>

                    <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
                        Join thousands of donors helping communities worldwide
                        through secure and impactful donations.
                    </p>

                    <Link to={"/login"} className="btn bg-white text-green-600 hover:bg-gray-100 border-none mt-8">
                        Start Donating
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                </div>
            </section>

        </PageContainer>
    );
};

export default AboutUsPage;