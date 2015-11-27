
function sort(array) {
	if (array.length > 1) {
		var n = Math.ceil(array.length / 2);
		var primaMeta = array.slice(0, n);
		var secondaMeta = array.slice(n, array.length);
		return sort(primaMeta).concat(sort(secondaMeta));
	}
	else {
		return array;
	}
}

console.log(sort([1,2,3,4,5]));