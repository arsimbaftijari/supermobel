function showSnackbar(message, isSuccess = true) {
    const snackbar = document.getElementById('snackbar');

    snackbar.textContent = message;
    snackbar.style.backgroundColor = isSuccess ? "#d3e7dd" : "#f5d7da";
    snackbar.style.borderColor = isSuccess ? "#7ce7b2ff" : "#f4adb5ff";
    snackbar.style.color = isSuccess ? "#05502bff" : "#670e19ff";
    snackbar.className = 'show';

    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000)
}

// Register user

if(document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const lastname = document.getElementById('lastname').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();


        if(!name || !lastname || !email || !password || !confirmPassword) {
            showSnackbar("Please fill all the fields!", false)
            return;
        }

        if(password != confirmPassword) {
            showSnackbar('Passwords does not match', false);
            return;
        }

        const user = {name, lastname, email, password};
        localStorage.setItem('user', JSON.stringify(user));
        showSnackbar("Registration successfull", true);
        setTimeout(() => window.location.href = "login.html", 2000);
    })
}

// Login

if(document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if(!storedUser || storedUser.email != email || storedUser.password != password) {
            showSnackbar("Invalid email or password", false);
            return;
        }

        localStorage.setItem('isLogged', true);
        showSnackbar("Login successfull", true);

        setTimeout(() => window.location.href = "home.html", 1000);
        
    })
}