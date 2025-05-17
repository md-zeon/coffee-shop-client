import Swal from "sweetalert2";

const AddCoffee = () => {
	const handleAddCoffee = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		console.log(formData.entries());
		const newCoffee = Object.fromEntries(formData.entries());
		console.log(newCoffee);
		// send data to the server
		fetch("https://coffee-shop-server-sigma-lime.vercel.app/coffees", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					console.log("After Adding Coffee to DB", data);
					Swal.fire({
						title: "Coffee added successfully!",
						icon: "success",
						draggable: true,
					});
                    form.reset();
				}
			});
	};

	return (
		<div className='p-24'>
			<div className='p-12 text-center space-y-6'>
				<h1 className='text-6xl'>Add New Coffee</h1>
				<p>
					It is a long established fact that a reader will be distraceted by the readable content of a page when looking
					at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
					opposed to using Content here.
				</p>
			</div>
			<form onSubmit={handleAddCoffee}>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
						<label className='label'>Name</label>
						<input
							type='text'
							className='input w-full'
							name='name'
							placeholder='Coffee Name'
							required
						/>
					</fieldset>
					<fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
						<label className='label'>Quantity</label>
						<input
							type='text'
							className='input w-full'
							name='quantity'
							placeholder='Coffee Quantity'
							required
						/>
					</fieldset>
					<fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
						<label className='label'>Supplier</label>
						<input
							type='text'
							className='input w-full'
							name='supplier'
							placeholder='Coffee Supplier'
							required
						/>
					</fieldset>
					<fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
						<label className='label'>Taste</label>
						<input
							type='text'
							className='input w-full'
							name='taste'
							placeholder='Coffee Taste'
							required
						/>
					</fieldset>
					<fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
						<label className='label'>Price</label>
						<input
							type='text'
							className='input w-full'
							name='price'
							placeholder='Coffee Price'
							required
						/>
					</fieldset>
					<fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
						<label className='label'>Details</label>
						<input
							type='text'
							className='input w-full'
							name='details'
							placeholder='Coffee Details'
							required
						/>
					</fieldset>
					<fieldset className='fieldset md:col-span-2 bg-base-200 border-base-300 rounded-box border p-4'>
						<label className='label'>Photo URL</label>
						<input
							type='text'
							className='input w-full'
							name='photo'
							placeholder='Photo URL'
							required
						/>
					</fieldset>
					<input
						type='submit'
						className='btn w-full md:col-span-2 btn-lg'
						value='Add Coffee'
					/>
				</div>
			</form>
		</div>
	);
};

export default AddCoffee;
