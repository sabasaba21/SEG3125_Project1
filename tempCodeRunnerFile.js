function updateServiceDropdown(selectedOption) {
    document.getElementById("dropdownMenuButton1").innerText = selectedOption;
}

document.addEventListener('DOMContentLoaded', function () {
    const doctorForm = document.getElementById('doctor-form');
    const submitBtn = document.getElementById('submitBtn');

    // // Add event listener to the form
    doctorForm.addEventListener('change', function (event) {
        const selectedDoctor = document.querySelector('input[name="option"]:checked').value;
        console.log('Selected doctor:', selectedDoctor);
    });

    // Add event listener to the submit button
    submitBtn.addEventListener('click', function () {
        const name = document.getElementById('exampleInputName1').value;
        const email = document.getElementById('exampleInputEmail1').value;
        const selectedDoctor = document.querySelector('input[name="option"]:checked').value;
        const selectedService = document.querySelector('.dropdown-menu .dropdown-item.active').textContent;
        const date = document.getElementById('appDate').value;
        const time = document.getElementById('appt-time').value;

        // You can perform further actions with the captured input data here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Selected doctor:', selectedDoctor);
        console.log('Selected service:', selectedService);
        console.log('Date:', date);
        console.log('Time:', time);

        // For demonstration purposes, I'm just showing the data in the console
        alert('Appointment booked successfully!');
    });
});

