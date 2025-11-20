$(document).ready(function () {
    $("#regForm").submit(function (event) {
        event.preventDefault();

        let userData = {
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            gender: $("#gender").val(),
            phone: $("#phone").val()
        };

        $.ajax({
            url: "http://localhost:3000/users",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(userData),
            success: function () {
                alert("Registration Successful!");
            },
            error: function () {
                alert("Error connecting to server!");
            }
        });
    });
});
