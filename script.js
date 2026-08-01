let medicines = JSON.parse(localStorage.getItem("medicines")) || [];

document.getElementById("medicineForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const medicine = {
    name: document.getElementById("medicineName").value,
    batch: document.getElementById("batchNumber").value,
    quantity: document.getElementById("quantity").value,
    expiry: document.getElementById("expiryDate").value
  };

  medicines.push(medicine);

  localStorage.setItem("medicines", JSON.stringify(medicines));

  alert("Medicine saved successfully!");

  document.getElementById("medicineForm").reset();
});
function displayMedicines() {
  const tableBody = document.getElementById("medicineTableBody");

  if (!tableBody) return;

  tableBody.innerHTML = "";

  medicines.forEach(function(medicine) {
    const row = tableBody.insertRow();

    row.insertCell(0).textContent = medicine.name;
    row.insertCell(1).textContent = medicine.batch;
    row.insertCell(2).textContent = medicine.quantity;
    row.insertCell(3).textContent = medicine.expiry;let expiryDate = new Date(medicine.expiry);
let today = new Date();

let days = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));

if (days <= 30) {
  alert("Warning: " + medicine.name + " expiry is near!");
}
  });let deleteCell = row.insertCell(4);
let deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.onclick = function() {
  row.remove();
};

deleteCell.appendChild(deleteBtn);
}let editCell = row.insertCell(5);
let editBtn = document.createElement("button");

editBtn.textContent = "Edit";

editBtn.onclick = function() {
  document.getElementById("medicineName").value = medicine.name;
  document.getElementById("batchNumber").value = medicine.batch;
  document.getElementById("quantity").value = medicine.quantity;let statusCell = row.insertCell(4);

if (medicine.quantity <= 10) {
  statusCell.textContent = "Low Stock";
} else {
  statusCell.textContent = "Available";
}
  document.getElementById("expiryDate").value = medicine.expiry;
};

editCell.appendChild(editBtn);

displayMedicines();