function showMessage() {
  alert("Welcome to Pharmacy Management System");
}
function saveMedicine() {
  alert("Medicine saved successfully!");
}
function saveMedicine() {
  const medicineName = document.getElementById("medicineName").value;

  if (medicineName === "") {
    alert("Please enter the medicine name.");
    return;
  }

  alert("Medicine saved successfully!");
}