let cars_mpg = cars.map(d => d.mpg);


// prints out the min of mpg
console.log(Math.min(...cars_mpg));

// prints out the max of mpg
console.log(Math.max(...cars_mpg));

// prints out both min and max of mpg (d3)
console.log(d3.extent(cars.map(d => d.mpg)));

// prints out min of mpg (d3)
console.log(d3.min(cars.map(d => d.mpg)));

// prints out max of mpg (d3)
console.log(d3.max(cars.map(d => d.mpg)));

d3.selectAll('svg#cars-scatter')
    .attr('height', 400)
    .attr('width', 600)

    .selectAll('circle')
    .data(cars)
    .enter()

    .append('circle')
    .attr('cx', disp_scale)
    .attr('cy', mpg_scale)
    .attr('r', 15)
    .style('stroke', 'red')
    .style('fill', 'transparent')
    .style('stroke-width', 30)
    .style('opacity', 1)




    // added to see (not in instructions)
    // .style('background-color', 'skyblue')


let disp_scale = d3.scaleLinear()
    .domain(d3.extent(cars.map(d => d.disp)))
    .range(0, 600)


let mpg_scale = d3.scaleLinear()
    .domain(d3.extent(cars.map(d => d.mpg)))
    .range(0, 400)