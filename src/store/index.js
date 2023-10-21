import { configureStore, createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
	name: 'car',
	initialState: [],
	reducers: {
		addCar(state, action) {
			// add car
		},
		removeCar(state, action) {
			// remove car
		},
	},
});

const bicyclesSlice = createSlice({
	name: 'bicycle',
	initialState: [],
	reducers: {
		addBicycle(state, action) {
			// add bicycle
		},
		removeBicycle(state, action) {
			// remove bicycle
		},
	},
});

const store = configureStore({
	reducer: {
		cars: carsSlice.reducer,
		bicycles: bicyclesSlice.reducer,
	},
});

export { store };
