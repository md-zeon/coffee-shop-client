import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthContext from "./AuthContext";
import { auth } from "../firebase/firebase.init";


const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        createUser
    }

	return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
