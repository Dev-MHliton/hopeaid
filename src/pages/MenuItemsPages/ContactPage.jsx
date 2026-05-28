import PageContainer from "../../components/PageContainer/PageContainer";

const ContactPage = () => {
    return (
        <PageContainer>
            <section className="max-w-6xl mx-auto px-4 py-12">

                {/* Header */}
                <div className="text-center mb-10">

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Contact <span className="text-green-500">Us</span>
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Have questions? We’re here to help you anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Send a Message
                        </h2>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-md">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Get in Touch
                        </h2>

                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <p><span className="font-semibold">Email:</span> support@hopeaid.com</p>
                            <p><span className="font-semibold">Phone:</span> +880 1234-567890</p>
                            <p><span className="font-semibold">Address:</span> Dhaka, Bangladesh</p>
                            <p>
                                We usually respond within 24 hours. Feel free to reach out for any
                                donation or campaign support.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </PageContainer>
    );
};

export default ContactPage;