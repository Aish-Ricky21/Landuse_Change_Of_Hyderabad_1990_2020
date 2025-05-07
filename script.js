const data = [
  { "CLASS NAME": "AGRICULTURAL DRY LAND", "LOSS": 143.964, "GAIN": 61.2054, "CHANGE": -2.575598006, "UNCHANGED": 32.1318 },
  { "CLASS NAME": "HIGHLY DENCE URBAN", "LOSS": 143.6256, "GAIN": 239.9409, "CHANGE": 0.9550996, "UNCHANGED": 100.8432 },
  { "CLASS NAME": "LOW DENCE URBAN", "LOSS": 163.3032, "GAIN": 169.6887, "CHANGE": 0.115373358, "UNCHANGED": 55.3464 },
  { "CLASS NAME": "SHRUB", "LOSS": 82.8792, "GAIN": 43.9452, "CHANGE": -1.654049094, "UNCHANGED": 23.5386 },
  { "CLASS NAME": "VEGETATION", "LOSS": 60.084, "GAIN": 79.164, "CHANGE": 1.107165239, "UNCHANGED": 17.2332 },
  { "CLASS NAME": "WATER BODIES", "LOSS": 11.0313, "GAIN": 10.9431, "CHANGE": -0.012182994, "UNCHANGED": 7.2396 }
];

// Table
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change Index</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row["CLASS NAME"]}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row.CHANGE.toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGED);
  const labels = data.map(d => d["CLASS NAME"]);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial pie chart
updatePieChart("Changed");

// Dark mode toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});











  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  