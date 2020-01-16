
d3.selectAll('svg#simple-pic')
    // skyblue background
    .style('background-color', 'skyblue')

    // red border
    .append('rect')
    .attr('width', 600)
    .attr('height', 200)
    .style('stroke', 'red')
    .style('strokewidth', 10)
    .style('opacity', 1)
    .style('fill', 'transparent')

d3.select('h2')
    // edits h2 text
    .style('stroke', 'red')
    .text('A Really Simple Description')
    
