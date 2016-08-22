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
	  //counter for current nesting chain - how many ul's or ol's we have come across
	  //counter does not increase for elements not matching those 2
		var count = 0

		//Array of children elements for a given dom element
		var childrenArr = $elem.children;

		//go through each child element for the current dom element
		for(var i = 0; i < childrenArr.length; i++){

			//if the current element is ul or ol then add one to the count plus whatever comes back from the stack
			if($elem.tagName === 'UL' || $elem.tagName === 'OL'){
				count = 1 + nesting(count, childrenArr[i]);
			}else{
				//otherwise just add the stack to the count
				count += nesting(count, childrenArr[i]);
			}

			//check if the current count plus the stack is greater than current max
			//if it is max is now current count
			//This should allow us to search multiple ancestry and keep track of the current count across multiple 
			//nesting chains. 
			if(count > max){
				max = count;
			}
			count = 0;
		}
		return max;
	}
}