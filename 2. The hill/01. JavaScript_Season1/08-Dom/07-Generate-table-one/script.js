// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    let tableLocation = document.getElementById("target");
    let createdTable = document.createElement("table");
    let tableBody = document.createElement("tbody");

    for (let i = 0; i < 10; i++) {
        let tableRow = document.createElement("tr");

        for (let j = 0; j < 1; j++) {
            let tableCell = document.createElement("td");
            let cellText = document.createTextNode("Cell in row " + (i + 1) + " and column " + (j + 1) + ".");
            tableCell.appendChild(cellText);
            tableRow.appendChild(tableCell);
        }

        tableBody.appendChild(tableRow);
    }

    createdTable.appendChild(tableBody);
    tableLocation.appendChild(createdTable); 

})();

// Most useful resource: https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
