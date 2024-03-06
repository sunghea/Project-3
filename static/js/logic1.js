document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from the server
    fetch('/data')
    .then(response => response.json())
    .then(data => {
        // Extract x and y values from the data
        const xValues = data.map(item => item._id);
        const yValues = data.map(item => item.count);
  
        // Define trace for the bar plot
        let trace1 = {
            x: xValues,
            y: yValues,
            type: "bar"
        };
  
        // Create plot data array
        let plotData = [trace1];
  
        // Define layout for the plot
        let layout = {
            title: "Insurance Business Sector in Toronto"
        };
  
        // Plot the bar chart
        Plotly.newPlot("plot", plotData, layout);
  
        // Add click event listener to the plot
        document.getElementById('plot').on('plotly_click', function(eventData) {
            // Get the name of the clicked sector
            const sectorName = eventData.points[0].x;
            // Get the div1 and div5 values associated with the sector name
            const div1AndDiv5 = getDiv1AndDiv5ForSector(data, sectorName);
            // Display the div1 and div5 values for the clicked sector
            document.getElementById('sectorInfo').innerText = div1AndDiv5;
            // Highlight the clicked bar by changing its color
            highlightClickedBar(eventData);
        });
    })
    .catch(error => console.error('Error:', error));
  });
  
  // Function to get the div1 and div5 values for the clicked sector
  function getDiv1AndDiv5ForSector(data, sectorName) {
    // Find the clicked sector in the data
    const clickedSector = data.find(item => item._id === sectorName);
    // If sector is found, extract div1 and div5 values
    if (clickedSector) {
        // Sort div1 values alphabetically
        const sortedDiv1 = clickedSector.div1.sort();
        // Prepare formatted result
        let formattedResult = '';
        for (let i = 0; i < sortedDiv1.length; i++) {
          formattedResult += (i+1) + '. Company Name: ' + sortedDiv1[i] + ', Call Number: ' + clickedSector.div5[i] + '\n';
      }
        return formattedResult;
    }
    
    // Return message if no information available for the selected sector
    return "No information available for the selected sector.";
  }
  
  // Function to highlight the clicked bar by changing its color
  function highlightClickedBar(eventData) {
    // Get all bar traces
    const barTraces = document.querySelectorAll('.plotly .bars path');
    // Reset color of all bars to default (light blue)
    barTraces.forEach(bar => bar.style.fill = '#7cb5ec');
    // Get index of clicked bar
    const clickedIndex = eventData.points[0].pointNumber;
    // Change color of the clicked bar to a different color (orange)
    barTraces[clickedIndex].style.fill = 'orange';
  }