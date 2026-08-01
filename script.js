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