/*
	Everything in javascript, is in a strict sense pass-by-value.
	When we pass-by-reference we are passing an alias/copy
	of the variable to a function.
	Javascript can pass an address(like an object, function, or array) into a
	function, but that is still pass-by-value. It is copying the value of
	variable(an address), into the function.

	Overwriting the copy of the original reference itself won't
	cause any change to the actual parameter you input in.
	True pass-by-reference means that the formal and actual parameters refer
	to the same object in memory, so any changes to the formal parameter also
	affect the actual parameter. When a function is called, the input parameters go
	through a process of becoming duplicated -- each input parameter will
	make a copy of itself, and it is these copies that are being worked upon
	inside the function call.

	Therefore, if we want a function to be able to change an input parameter variable's
	value to a different one, we must wrap that variable inside another
	 variable whose value is an address(an array or object)
*/

/*-----------------------------------------------------------------------------------
									NOW FOR THE EXAMPLES
  -----------------------------------------------------------------------------------*/


const foreals_thisTime = (arr) => arr[0] = "little wing vancouver";

const changeContent = (n) => {
	n = "Ohhhh maria mariaaa";
	console.log(`Num value during function call:			${n}`);
} 

const start = () => {
	let num = 4;
	console.log(`Num value  before function call:			${num}`);
	changeContent(num);
	console.log(`Num value after function call:		 		${num}`);
	const wrappedNum = [num];
	foreals_thisTime(wrappedNum);
	console.log(`Num value after arrayWrap  function call:	${wrappedNum[0]}`);
}

start();
