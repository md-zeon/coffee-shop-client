import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const navigate = useNavigate();
	const { _id, name, quantity, price, photo } = coffee;

    const handleViewDetails = () => {
		navigate(`/coffee/${_id}`);
	};

    const handleUpdateCoffee = () => {
		navigate(`/update-coffee/${_id}`);
	};

	const handleDelete = (id) => {
		console.log("Delete Coffee");
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:3000/coffees/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount) {
							Swal.fire({
								title: "Deleted!",
								text: "Your Coffee has been deleted.",
								icon: "success",
							});
                            console.log("After Delete", data);
						}
					});
			}
		});
	};

	return (
		<div className='card card-side bg-base-100 shadow-sm border-2'>
			<figure>
				<img
					src={photo}
					alt={name}
				/>
			</figure>
			<div className='flex justify-around w-full'>
				<div>
					<h2>{name}</h2>
					<p>Price: {price}</p>
					<p>Quantity: {quantity}</p>
				</div>
				<div className='card-actions justify-end items-center'>
					<div className='join join-vertical'>
						<button onClick={handleViewDetails} className='btn join-item btn-primary'>View</button>
						<button onClick={handleUpdateCoffee} className='btn join-item btn-accent'>Edit</button>
						<button
							onClick={() => handleDelete(_id)}
							className='btn join-item btn-error'
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeCard;
