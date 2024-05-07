function insert_Row() {
    // Get the table
    let table = document.getElementById("sampleTable");

    // Create a new row
    let newRow = table.insertRow(0);

    // Create two new cells
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Clear existing content of cell1 and set text for the cells
    cell1.innerHTML = ''; // or cell1.textContent = '';
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
