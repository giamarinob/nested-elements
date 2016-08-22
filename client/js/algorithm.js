function nesting(max, $elem){
	//Get the count of the children of a given dom element
	var childrenCount = $elem.children.length;

	//Check the base case - is this the last child in a given ancestry
	if(childrenCount === 0){
		//If the last child is ul or ol then return 1 for that child
		if($elem.tagName === 'UL' || $elem.tagName === 'OL'){
			return 1;
		}else{
			//else return 0 as the last child does not need to be counted
			return 0;
		}
	}else{
	//counter for current nesting chain
		// debugger;
		var depth = 0

		//Array of children elements for a given dom element
		var childrenArr = $elem.children;

		//go through each child element for the current dom element
		for(var i = 0; i < childrenArr.length; i++){

			//if the current element is ul or ol then add one to the depth plus whatever comes back from the stack
			if($elem.tagName === 'UL' || $elem.tagName === 'OL'){
				depth = 1 + nesting(depth, childrenArr[i]);
			}else{
				//otherwise just add the stack to the depth
				depth += nesting(depth, childrenArr[i]);
			}
			//check if the current max plus the depth from the stack is greater than current max
			//if it is max is now current plus depth
			//This should allow us to search multiple ancestry and keep track of the max depth across multiple 
			//nesting chains. 
			if(depth > max){
				max = depth;
			}
			depth = 0;
		}
		return max;
	}
}