const url = "https://contactform-project.000webhostapp.com/my_positions.json";

function fetchPositions() {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('An issue with fetching the data.');
        }
        return response.json();
      })
      .then(function (data) {
          console.log(data);
        const display = displayPositions(data.my_job_positions.positions);
        document.getElementById('responsedata').innerHTML = display;
      })
      .catch(error => {
        document.getElementById('responsedata').innerHTML = "An issue with fetching the data. Please try again after sometime.";
      });
  }
  
  /* Function to loop through the JSON and form the display String. */
  const displayPositions = (positions) => {
    let display = '<ul>';
    for (let i of positions) {
      display += `<li><strong>${i.title}</strong>, <span class="textDisplay">${i.company}</span>,   
       <span class="textDisplay">${i.fromYear}</span>  \u2013 <span class="textDisplay">${i.endYear}</span>.</li>`
    }
    display +=`</ul>`;
    return display;
  };