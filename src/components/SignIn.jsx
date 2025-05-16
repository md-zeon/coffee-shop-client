import { use } from "react";
import { Link } from "react-router";
import AuthContext from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
	const { loginUser } = use(AuthContext);

	const handleSignIn = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const { email, password } = Object.fromEntries(formData.entries());
		// Sign in user
		console.log(email, password);
	};
	return (
		<div className='card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl'>
			<div className='card-body'>
				<h1 className='text-3xl font-bold'>Sign In Now</h1>
				<form
					onSubmit={handleSignIn}
					className='fieldset'
				>
					<label className='label'>Email</label>
					<input
						type='email'
						name='email'
						className='input'
						placeholder='Email'
					/>
					<label className='label'>Password</label>
					<input
						type='password'
						name='password'
						className='input'
						placeholder='Password'
					/>
					<div>
						<Link className='link link-hover'>Forgot password?</Link>
					</div>
					<button
						type='submit'
						className='btn btn-neutral mt-4'
					>
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
