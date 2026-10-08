document.getElementById("patientForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("patientName").value.trim();
    let phone = document.getElementById("patientPhone").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");


    if (name === "" || phone === "" || password === "") 
    {
        message.style.color = "red";
        message.textContent = "Please fill in all the fields.";
        return;
    }

    if (password.length < 6) 
    {
        message.style.color = "red";
        message.textContent = "Password must contain at least 6 characters.";
        return;
    }

    if (phone.length != 10) 
    {
        message.style.color = "red";
        message.textContent = "Enter a 10-digit Phone Number.";
        return;
    }
    message.style.color = "green";
    message.textContent = "Registration / Login successful!";
});


let today = new Date().toISOString().split("T")[0];
document.getElementById("appointmentDate").min = today;

document.getElementById("appointmentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let patientName = document.getElementById("appointmentpatientName").value.trim();
    let doctor = document.getElementById("doctor").value.trim();
    let appointmentdate = document.getElementById("appointmentDate").setAttribute('min', today);
    let timeslot = document.getElementById("appointmentTime").value;
    let reason = document.getElementById("appointmentReason").value.trim();
    let errorMessage = document.getElementById("errorMessage");

    if (patientName === "" || doctor === "" || appointmentdate === "" || timeslot === "" || reason === "") 
    {
        errorMessage.textContent = "Please fill in all the required fields.";
        return;
    }

    errorMessage.textContent = "";

    document.getElementById("confirmPatient").textContent = patientName;
    document.getElementById("confirmDoctor").textContent = doctor;
    document.getElementById("confirmappointmentDate").textContent = appointmentdate;
    document.getElementById("confirmappointmentTime").textContent = timeslot;
    document.getElementById("confirmation").style.display = "block";

    document.getElementById("confirmation").scrollIntoView
    ({
        behavior: "smooth"
    });
});