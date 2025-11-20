let ax = document.createElement("script");
ax.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
document.head.appendChild(ax);

ax.onload = function () {

    document.getElementById("regForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let user = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            gender: document.getElementById("gender").value,
            phone: document.getElementById("phone").value
        };

        axios.post("http://localhost:3000/users", user)
            .then(() => {
                alert("Saved using Axios!");
                document.getElementById("regForm").reset();
            })
            .catch(() => alert("Error saving using Axios!"));
    });

};
