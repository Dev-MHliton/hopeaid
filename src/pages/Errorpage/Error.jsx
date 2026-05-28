import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section>

            <title>Error-page not found</title>

            <div className="min-h-screen flex flex-col justify-center items-center gap-4">
                <h1 className="text-5xl font-bold">404</h1>

                <p className="text-gray-500">
                    Page Not Found!
                </p>

                <Link to="/">
                    <button className="btn btn-primary">
                        Back to Home
                    </button>
                </Link>

            </div>

        </section>
    );
};

export default Error;