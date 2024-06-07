


function updateServiceDropdown(selectedOption) {
    document.getElementById("dropdownMenuButton1").innerText = selectedOption;
}

document.addEventListener('DOMContentLoaded', function() {
const submitBtn = document.getElementById('submitBtn');


submitBtn.addEventListener('click', function () {
    const name = document.getElementById('exampleInputName1').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const selectedDoctor = document.getElementById('doctorId').value;
    const selectedService = document.getElementById('dropdownMenuButton1').value;
    const date = document.getElementById('appDate').value;
    const time = document.getElementById('appt-time').value;

    // You can perform further actions with the captured input data here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Selected doctor:', selectedDoctor);
    console.log('Selected service:', selectedService);
    console.log('Date:', date);
    console.log('Time:', time);


//    Confirmation Alert 
alert("YOUR APPOINTMENT IS CONFIRMED!");



});


});



