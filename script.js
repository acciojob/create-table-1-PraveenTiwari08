function insert_Row() {
let newRow = document.createElement("tr");
    
    // Create two new cells
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    
    // Add text to the cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
    
    // Append cells to the row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    
    // Get the table and insert the new row as the first child
    let table = document.getElementById("sampleTable");
    table.insertBefore(newRow, table.firstChild);
}
