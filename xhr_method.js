document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        gender: document.getElementById("gender").value,
        phone: document.getElementById("phone").value
    };

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/users");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        alert("Saved using XMLHttpRequest!");
        document.getElementById("regForm").reset();
    };

    xhr.send(JSON.stringify(user));
});
