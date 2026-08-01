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

displayMedicines();let total = document.getElementById("totalMedicines");
let low = document.getElementById("lowStock");

if (total) {
  total.textContent = medicines.length;
}

if (low) {
  let lowCount = medicines.filter(function(medicine) {
    return medicine.quantity <= 10;
  }).length;

  low.textContent = lowCount;
}let patients = JSON.parse(localStorage.getItem("patients")) || [];

let patientForm = document.getElementById("patientForm");

if (patientForm) {
  patientForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const patient = {
      name: document.getElementById("patientName").value,
      phone: document.getElementById("phoneNumber").value,
      id: document.getElementById("patientId").value,
      service: document.getElementById("serviceType").value
    };

    patients.push(patient);

    localStorage.setItem("patients", JSON.stringify(patients));

    alert("Patient saved successfully!");

    patientForm.reset();
  });
}let dispensing = JSON.parse(localStorage.getItem("dispensing")) || [];

let dispensingForm = document.getElementById("dispensingForm");

if (dispensingForm) {
  dispensingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const record = {
      patient: document.getElementById("dispensePatient").value,
      medicine: document.getElementById("dispenseMedicine").value,
      quantity: document.getElementById("dispenseQuantity").value,
      date: new Date().toLocaleString()
    };

    dispensing.push(record);

    localStorage.setItem("dispensing", JSON.stringify(dispensing));

    alert("Dispensing saved successfully!");

    dispensingForm.reset();
  });
}let loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;let role = document.getElementById("role").value;

localStorage.setItem("userRole", role);

    if (username === "admin" && password === "1234") {
      alert("Login successful!");

      window.location.href = "index.html";
    } else {
      alert("Wrong username or password!");
    }
  });
}function logout() {
  localStorage.removeItem("userRole");

  alert("Logged out successfully!");

  window.location.href = "login.html";
}
let stockTable = document.getElementById("stockReportTable");

if (stockTable) {
  let medicines = JSON.parse(localStorage.getItem("medicines")) || [];

  medicines.forEach(medicine => {
    stockTable.innerHTML += `
      <tr>
        <td>${medicine.name}</td>
        <td>${medicine.quantity}</td>
        <td>${medicine.expiry}</td>
      </tr>
    `;
  });
}
function saveSettings() {
  localStorage.setItem(
    "facilityName",
    document.getElementById("facilityName").value
  );

  localStorage.setItem(
    "pharmacyName",
    document.getElementById("pharmacyName").value
  );

  alert("Settings saved successfully!");
}
let suppliers = JSON.parse(localStorage.getItem("suppliers")) || [];

let supplierForm = document.getElementById("supplierForm");

if (supplierForm) {
  supplierForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const supplier = {
      name: document.getElementById("supplierName").value,
      company: document.getElementById("companyName").value,
      phone: document.getElementById("supplierPhone").value,
      address: document.getElementById("supplierAddress").value
    };

    suppliers.push(supplier);

    localStorage.setItem("suppliers", JSON.stringify(suppliers));

    alert("Supplier saved successfully!");

    supplierForm.reset();
  });
}
let purchases = JSON.parse(localStorage.getItem("purchases")) || [];

let purchaseForm = document.getElementById("purchaseForm");

if (purchaseForm) {
  purchaseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const purchase = {
      medicine: document.getElementById("purchaseMedicine").value,
      supplier: document.getElementById("purchaseSupplier").value,
      quantity: document.getElementById("purchaseQuantity").value,
      date: document.getElementById("purchaseDate").value
    };

    purchases.push(purchase);

    localStorage.setItem("purchases", JSON.stringify(purchases));

    alert("Purchase saved successfully!");

    purchaseForm.reset();
  });
}
let purchaseMedicine = document.getElementById("purchaseMedicine");

if (purchaseMedicine) {
  let medicines = JSON.parse(localStorage.getItem("medicines")) || [];

  medicines.forEach(function(medicine) {
    let option = document.createElement("option");
    option.value = medicine.name;
    option.textContent = medicine.name;

    purchaseMedicine.appendChild(option);
  });
}
let stockReportTable = document.getElementById("stockReportTable");

if (stockReportTable) {
  let medicines = JSON.parse(localStorage.getItem("medicines")) || [];

  stockReportTable.innerHTML = "";

  medicines.forEach(function(medicine) {
    stockReportTable.innerHTML += `
      <tr>
        <td>${medicine.name}</td>
        <td>${medicine.quantity}</td>
        <td>${medicine.expiry}</td>
      </tr>
    `;
  });
}