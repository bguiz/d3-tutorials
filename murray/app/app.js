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

	d3.select('.my-bar-chart')
		.selectAll('div')
		.data(dataset) // this is what makes the code respond to the differen data sets
		.enter()
		.append('div')
		.classed('bar', true)
		.style('height', function(d) {
			return d*5 + 'px';
		});

	var dataOverlapRects = [[0,-10,'red'],[10,10,'orange'],[20,30,'yellow'],[30,50,'green'],[40,70,'blue']];

	d3.select('.layered-svg')
		.selectAll('rect')
		.data(dataOverlapRects)
		.enter()
		.append('rect')
		.classed('first', true)
		.attr('width', 20)
		.attr('height', 35)
		.attr('x', function(d) { return d[0]; })
		.attr('y', function(d) { return d[1]; })
		.attr('fill', function(d) { return d[2]; });

	d3.select('.layered-svg')
		.selectAll('rect.second')
		.data(dataOverlapRects)
		.enter()
		.append('rect')
		.classed('second', true)
		.attr('width', 75)
		.attr('height', function(d) { return 10 + d[0] * 1.25 })
		.attr('x', function(d) { return d[1] * 3 - 30; })
		.attr('y', function(d) { return d[0] + 10; })
		.attr('opacity', 0.5)
		.attr('fill', function(d) { return d[2]; });

	var createdSvg = d3.select('.my-svg')
		.append('svg')
		.classed('created-svg', true)
		.attr('width', 300)
		.attr('height', 200);

	var ds2 = [5,10,15,20,25];
	
	var circles = createdSvg.selectAll('circle')
		.data(ds2)
		.enter()
		.append('circle');

	circles
		.attr('cx', function(d,i) {
			// the 2nd parameter in the callback is index
			return i * 50 + 25;
		})
		.attr('cy', 25)
		.attr('r', function(d) {
			return d;
		});

	circles
		.attr('fill', 'yellow')
		.attr('stroke', 'orange')
		.attr('stroke-width', function(d) {
			return d / 2;
		});

});
