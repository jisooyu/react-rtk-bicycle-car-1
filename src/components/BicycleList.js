import { createRandomBicycle } from '../data';

function BicycleList() {

	const carList = [];
	const handleBicycleAdd = (car) => {
		// add a car
		console.log(car);
	};
	const handlBicycleRemove = (car) => {
		// remove a car
	};
	const renderedCars = carList.map((car) => {
		return (
			<li key={car}>
				{car}
				<button
					onClick={() => handlBicycleRemove(car)}
					className='button is-danger'
				>
					X
				</button>
			</li>
		);
	});

	return (
		<div className='content'>
			<div className='table-header'>
				<h3 className='subtitle is-3'>Bicycle List</h3>
				<div className='buttons'>
					<button
						onClick={() => handleBicycleAdd(createRandomBicycle())}
						className='button is-link'
					>
						+ 자전거 추가
					</button>
				</div>
			</div>
			<ul>{renderedCars}</ul>
		</div>
	);
}

export default BicycleList;
