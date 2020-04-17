/*
	Everything in Javascript, is in a strict sense pass-by-value. When we
	pass-by-reference we are passing an alias/copy of the variable to a function.
	Javascript can pass an address(like an object, function, or array) into a
	function, but that is still pass-by-value. It is copying the value of
	 the variable(an address), into the function.

	Overwriting the copy of the original reference itself won't
	cause any change to the actual parameter you input in.
	True pass-by-reference means that the formal and actual parameters refer
	to the same object in memory, so any changes to the formal parameter also
	affect the actual parameter. When a function is called, the input parameters go
	through a process of becoming duplicated -- each input parameter will
	make a copy of itself, and it is these copies that are being worked upon
	inside the function call.

	Therefore, if we want a function to be able to change an input parameter
	variable's value to a different one, we must pass in as a parameter a memory
	address(an array or object).

	Accessing values stored at particular points in memory allows us to change values
	stored at those particular points. Think of the most simple way this can
	occur in Javascript: declaring a variable.
	
	let x = "Morenita Do Brazil; 

	Here, the memory address of x holds the value of "Morenita Do Brazil"
*/

/*-----------------------------------------------------------------------------------
								NOW FOR THE EXAMPLES
  -----------------------------------------------------------------------------------*/

/*
	The array inside this foreals_thisTime function call is not the same array as what
	was passed in as an input parameter. It is a duplicate of what was originally
	passed in as a parameter. 

	Remember:	The value they store(a memory address) is the same,
 	 this!!		however the memory addresses of the variables themselves are different.

	The memory address they hold as a value is in fact a chunk of memory. We access
	values stored at different memory addresses in that chunk of memory depending on
	the index. 

	To give a visual:

	a[0]	a[1]	a[2]
	---------------------
	1000	1001	1002	<== Memory addresses

	All of these memory addresses are a part of the variable arr.
	Note that properties of objects(arrays are objects too) are not always stored
	contiguously in memory. They are only stored contiguously in memory depending on
	certain circumstances, such as which Javascript engine it is processed by.

	So when we say arr[2], what we are really doing is accessing the value stored in
	the memory address of arr[2], and the memory address of arr[2] is part of the
	value of variable arr. 
*/

const foreals_thisTime = (arr) => arr[2] = "little wing vancouver 1968";

/*
	In function changeContent, we are setting the copy of the input parameter(n)
	equal to a string. This will not affect the original input parameter that was put
	in, because the "n" inside this function is only a copy of the original
	input parameter.
*/

const changeContent = (n) => {
	n = "Ohhhh maria mariaaa";
	console.log(`Num value during function call:			${n}`);
	//outputs: "Ohhhh maria mariaaa"
} 

const start = () => {
	let num = 4;
	console.log(`Num value before function call:			${num}`);
	//outputs: "4"
	changeContent(num);
	console.log(`Num value after function call:		 	${num}`);
	//outputs: "4"
	//In leiu of num, we now use wrappedNum[2] to access the value we want.
	const wrappedNum = [0, 0, 4];
	foreals_thisTime(wrappedNum);
	console.log(`Num value after arrayWrap  function call:	${wrappedNum[2]}`);
	//outputs: "little wing vancouver 1968"
}
start();
