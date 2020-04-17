#include <stdlib.h>
#include <stdio.h>

/*
	Everything in C, is in a strict sense pass-by-value
	When we pass-by-reference we are passing an alias/copy
	of the variable to a function.
	C can pass a pointer into a function but that is still pass-by-value.
	It is copying the value of the pointer, the address, into the function. 

	Overwriting the copy of the original reference itself won't
	cause any change to the actual parameter you input in.
	True pass-by-reference means that the formal and actual parameters refer
	to the same object in memory, so any changes to the formal parameter also
	affect the actual parameter. In practice, a pointer-like object is passed
	to the subroutine, but that's hidden from the programmer.

	Therefore, if we want a function to be able to change a pointer's
	address that it holds for a value, we must pass in the address of
	that pointer variable itself as a parameter. 
	To repeat: we are not passing in the pointer's value(which is an address)
	as a parameter. Instead we are passing in the address of that pointer.
	This address that we are passing in as parameter is the address of the
	variable that holds the value of an address.
*/

/*-----------------------------------------------------------------------------------
								NOW FOR THE EXAMPLES
  -----------------------------------------------------------------------------------*/

/*
	Note that in function change_content the value of pointer s(an address) is the
	same. However, the variable s inside this function is only a replica of the
	original one that was passed in as a function parameter when the call to this
	function was made. Take a look at the address of the pointer 
	itself(NOT the address it holds for a value), and you can see it is different than
	the address of the original pointer we passed in as a parameter
*/

void	change_content(char *s) {
	int i = -1;
	while (++i < 8)
		s[i] = i + 48;
	printf("value of s inside func call:			%s\n\n", s);
	char *str = "hellllll";
	printf("address of s inside func call:			%p\n\n", &s);
	s = str; 			
	/*
		TAKE NOTE THAT "s = str" WONT DO ANYTHING TO DO THE ACTUAL S 
		THAT WAS PUT IN AS A FUNCTION PARAMETER
	*/
	printf("string inside function:				%s\n\n", s);
}

/*
	Here, we pass in as a parameter the address of a variable that holds another
	address. The first pointer points at the value. We are setting the value
	stored in variable s (which is an address) to a different memory address
	whose value is "superNoob";
*/

void	foreals_thisTime(char **s) {
	*s = "superNoob";
	printf("Address of s inside double pointer function:	%p\n\n", s);
}

int main() {
	char *s = malloc(sizeof(char) * 8);
	s[0] = '\0';
	printf("string before func call: %s\n\n", s);
	printf("address of s before func call:			%p\n\n", &s);
	change_content(s);
	printf("address of s after func call:			%p\n\n", &s);
	printf("string after single pointer func call:		%s\n\n",  s);
	foreals_thisTime(&s);
	printf("string after passing as double pointer:		%s\n\n", s); 
	printf("address after passing as double pointer:	%p\n\n", &s);
}
