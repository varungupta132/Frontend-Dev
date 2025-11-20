document.getElementById("regForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        gender: document.getElementById("gender").value,
        phone: document.getElementById("phone").value
    };

    await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    });

    alert("Saved using Fetch API!");
    document.getElementById("regForm").reset();
});
