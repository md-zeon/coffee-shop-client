import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "./AuthContext";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

	const userInfo = {
		createUser,
        signInUser
	};

	return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
