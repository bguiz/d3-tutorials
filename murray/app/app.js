"use strict";

document.addEventListener('DOMContentLoaded', function() {
	//d3.select('body').append('p').text('new paragraph!');

	var dataset
		// = [5, 10, 15, 20, 25];
		// = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
        //     14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
        //     24, 18, 25, 9, 3 ];
        = [];
    for (var i = 0; i < 25; ++i) {
    	dataset.push(Math.round(Math.random() * 30));
    }

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
		.data(dataset) // this is what makes the code respond to the differen data sets
		.enter()
		.append('div')
		.classed('bar', true)
		.style('height', function(d) {
			return d*5 + 'px';
		});
});
