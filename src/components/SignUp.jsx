import { use } from "react";
import { Link } from "react-router";
import AuthContext from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
	const { createUser } = use(AuthContext);

	const handleSignUp = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const { email, password, ...userProfile } = Object.fromEntries(formData.entries());
		// create user
		console.log(email, password, userProfile);
		createUser(email, password)
			.then((res) => {
				console.log(res.user);

				// save user profile in database
				fetch("http://localhost:3000/users", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({ ...userProfile, email }),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.insertedId) {
							console.log("After Profile Saved To DB", data);
							Swal.fire({
								position: "top-end",
								icon: "success",
								title: "Your Account Has Been Created",
								showConfirmButton: false,
								timer: 1500,
							});
						}
					});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};
	return (
		<div className='card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl'>
			<div className='card-body'>
				<h1 className='text-3xl font-bold'>Sign Up Now</h1>
				<form
					onSubmit={handleSignUp}
					className='fieldset'
				>
					<label className='label'>Name</label>
					<input
						type='text'
						name='name'
						className='input'
						placeholder='Name'
					/>
					<label className='label'>Address</label>
					<input
						type='text'
						name='address'
						className='input'
						placeholder='Address'
					/>
					<label className='label'>Phone</label>
					<input
						type='text'
						name='phone'
						className='input'
						placeholder='Phone'
					/>
					<label className='label'>Photo URL</label>
					<input
						type='text'
						name='photo'
						className='input'
						placeholder='Photo URL'
					/>
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
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
