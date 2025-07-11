function update() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var mail = document.getElementById("mail").value;
    var course = document.getElementById("course").value;

    // Get selected gender
    var genderRadios = document.getElementsByClassName("gender");
    var gender = "";
    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            gender = genderRadios[i].nextSibling.textContent.trim();
            break;
        }
    }

    // Validation
    if (name === "" || age === "" || mail === "" || gender === "" || course === "--Select--") {
        alert("Please fill all the fields correctly.");
        return;
    }

    // Insert into table
    var table = document.getElementById("tabledown");
    var newRow = table.insertRow(-1);

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = age;
    newRow.insertCell(2).innerText = gender;
    newRow.insertCell(3).innerText = course;
    newRow.insertCell(4).innerText = mail;

    // Action cell with delete button
    var actionCell = newRow.insertCell(5);
    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "deleted";
    delBtn.onclick = function () {
        table.deleteRow(newRow.rowIndex);
    };
    actionCell.appendChild(delBtn);

    // Clear form after saving
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("course").value = "--Select--";

    for (var i = 0; i < genderRadios.length; i++) {
        genderRadios[i].checked = false;
    }
}
