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
		.text(function(data) {
			return data;
		})
		.style('color', function(d) {
			if (d > 15) {
				return 'red';
			}
			else {
				return 'black';
			}
		});

	d3.select('.my-bar-chart')
		.selectAll('div')
		.data(dataset)
		.enter()
		.append('div')
		.classed('bar', true);
});
