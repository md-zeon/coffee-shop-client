import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
	const coffee = useLoaderData();
	const { name, quantity, supplier, taste, price, details, photo } = coffee;
	return (
		<div>
			<div>
				<h1 className='text-6xl text-center'>Coffee Details</h1>
			</div>
			<div className='card px-10 flex-row border bg-base-100 w-xl mx-auto my-20 shadow-sm'>
				<figure>
					<img
						className='w-full object-cover'
						src={photo}
						alt={name}
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<p>Quantity: {quantity}</p>
					<p>Supplier: {supplier}</p>
					<p>Taste: {taste}</p>
					<p>Price: {price}</p>
					<p>Details: {details}</p>
				</div>
			</div>
			<div className='text-center'>
				<Link to='/'>
					<button className='btn btn-primary'>Back to Home</button>
				</Link>
			</div>
		</div>
	);
};

export default CoffeeDetails;
