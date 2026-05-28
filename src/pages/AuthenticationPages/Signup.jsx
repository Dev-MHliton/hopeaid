import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                        {/* CARD body */}
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">SignUp</h1>
                            <fieldset className="fieldset">

                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Name" />

                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>

                            </fieldset>

                            <p className='text-center mt-4'>
                                <Link to="/login" className="hover:underline">Already have an account</Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;