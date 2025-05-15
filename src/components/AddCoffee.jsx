const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
    }

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
			<form onClick={handleAddCoffee}>
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
						<label className='label'>Chef</label>
						<input
							type='text'
							className='input w-full'
							name='chef'
							placeholder='Coffee Chef'
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
						<label className='label'>Category</label>
						<input
							type='text'
							className='input w-full'
							name='category'
							placeholder='Coffee Category'
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
