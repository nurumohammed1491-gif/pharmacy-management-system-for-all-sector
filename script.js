let medicines = JSON.parse(localStorage.getItem("medicines")) || [];

function saveMedicine() {
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
}
document.getElementById("medicineForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const medicineName = document.getElementById("medicineName").value;
    const batchNo = document.getElementById("batchNo").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const quantity = document.getElementById("quantity").value;

    const tableBody = document.getElementById("medicineTableBody");

    const row = tableBody.insertRow();

    row.insertCell(0).textContent = medicineName;
    row.insertCell(1).textContent = batchNo;
    row.insertCell(2).textContent = expiryDate;
    row.insertCell(3).textContent = quantity;

    document.getElementById("medicineForm").reset();
});
let medicines = JSON.parse(localStorage.getItem("medicines")) || [];

function saveMedicines() {
    localStorage.setItem("medicines", JSON.stringify(medicines));
}