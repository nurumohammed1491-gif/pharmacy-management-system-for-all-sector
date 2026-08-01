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
    row.insertCell(3).textContent = medicine.expiry;
  });let deleteCell = row.insertCell(4);
let deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.onclick = function() {
  row.remove();
};

deleteCell.appendChild(deleteBtn);
}

displayMedicines();