import { AuthContext } from "../context/AuthContext";

const AuthProvider = ({ children }) => {

    // const authInfo = {
    //     user,
    //     login,
    //     logout,
    // };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;