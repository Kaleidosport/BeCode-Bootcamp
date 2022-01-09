// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    let tableLocation = document.getElementById("target");
    let createdTable = document.createElement("table");
    let tableBody = document.createElement("tbody");

    for (let i = 0; i < 10; i++) {
        let tableRow = document.createElement("tr");

        for (let j = 0; j < 10; j++) {
            let tableCell = document.createElement("td");
            let cellText = document.createTextNode((i + 1) * (j + 1));
            tableCell.appendChild(cellText);
            tableRow.appendChild(tableCell);
        }

        tableBody.appendChild(tableRow);
    }

    createdTable.appendChild(tableBody);
    tableLocation.appendChild(createdTable); 

})();
