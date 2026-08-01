import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("medicineForm");

if (form) {
  form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const medicine = {
      name: document.getElementById("medicineName").value,
      batch: document.getElementById("batchNumber").value,
      quantity: Number(document.getElementById("quantity").value),
      expiry: document.getElementById("expiryDate").value
    };

    await addDoc(collection(db, "medicines"), medicine);

    alert("Medicine saved to Firebase!");

    form.reset();
  });
}