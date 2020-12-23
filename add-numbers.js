// Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.

// AddForloop:
function sum() {
	var sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum;
}
arr = [3,4,5,7];
console.log(sum())


// AddRecursion:
function sum(){
	if (array.length === 0) {
		return 0;
	}
	else return array.shift() + sum();		
}
array = [5,7,2,6,4];
console.log(sum());


// AddWhileLoop:
function sum(){
	var sum = 0;
	var i = 0;
	while (i < arr.length) {
		sum = sum + arr[i];
		i++;
	}
	return sum;
}
arr = [3,4,5,7];
console.log(sum(arr))
