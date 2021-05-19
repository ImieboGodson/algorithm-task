//TASK 1

// Convert inputted parameter to celsius
const fahrToCelsius = (input) => {
	let toCelsius = (input - 32) * 5/9;
	let toFourDecimalPlaces = toCelsius.toFixed(4)
 	console.log(toFourDecimalPlaces);

 	return toFourDecimalPlaces;
}

// Validates input type then calls the appropriate function
const convertFahrToCelsius = (input) => {
	let convertInputToNumber = '';
	Array.isArray(input) ? convertInputToNumber = Number(input) : convertInputToNumber = parseInt(input)
	return isNaN(convertInputToNumber) ? checkInputType(input) : fahrToCelsius(input)
}

//Checks invalid parameter type and outputs a message accordingly
const checkInputType = (input) => {
		let errorMessage = ''; 
		if(Array.isArray(input)) {
			errorMessage = `${JSON.stringify(input)} is not a valid number but an array`
			console.log(errorMessage);
		} else {
			errorMessage = `${JSON.stringify(input)} is not a valid number but a/an ${typeof(input)}`
			console.log(errorMessage);
		}

	return errorMessage;
}






//TASK 2

// Creates the array
const createArray = (n) => {
	let array = [];
	for(let i = 1; i <= n; i++) {
		if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
			array.push('yu-gi-oh')
		} else if(i % 2 === 0 && i % 3 === 0) {
			array.push('yu-gi')
		} else if(i % 2 === 0 && i % 5 === 0) {
			array.push('yu-oh')
		} else if(i % 3 === 0 && i % 5 === 0) {
			array.push('gi-oh')
		} else if(i % 2 === 0) {
			array.push('yu')
		} else if(i % 3 === 0) {
			array.push('gi')
		} else if(i % 5 === 0) {
			array.push('oh')
		} else {
			array.push(i)
		}
	}

	console.log(array);

	return array;
}

// Validate input and calls the appropriate function
const checkYuGiOh = (n) => {
	let inputToNumber = '';
	Array.isArray(n) ? inputToNumber = Number(n) : inputToNumber = parseInt(n);
	return isNaN(inputToNumber) ? errorHandlerFunc(n) : createArray(n);
}

// Outputs error message in case of error
const errorHandlerFunc = (n) => {
	let errorMessage = `Invalid parameter: ${JSON.stringify(n)}`;
	console.log(errorMessage);
	return errorMessage;
}

