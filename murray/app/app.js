"use strict";

document.addEventListener('DOMContentLoaded', function() {
	//d3.select('body').append('p').text('new paragraph!');

	var dataset = [5, 10, 15, 20, 25];

	//This will do nothing because there are currently no `p` elements
	// d3.select('body').selectAll('p');

	d3.select('body').selectAll('p')
		.data(dataset)
		.enter()
		.append('p')
		.text('New paragraph');
});
