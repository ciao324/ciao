document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenire il comportamento di submit del form

    // Recupera i valori inseriti nel modulo
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Le credenziali corrette
    const correctUsername = '123';
    const correctPassword = '123456';

    // Verifica se le credenziali sono corrette
    if (username === correctUsername && password === correctPassword) {
        // Memorizza che l'utente è loggato
        localStorage.setItem('loggedIn', 'true');

        // Reindirizza alla home page
        window.location.href = 'ciao.html';
    } else {
        // Mostra un messaggio di errore
        document.getElementById('error-message').style.display = 'block';
    }
});

// Verifica se l'utente è loggato quando si cerca di accedere alla home
if (window.location.pathname === '/login.html' && !localStorage.getItem('loggedIn')) {
    window.location.href = 'login.html';
}


window.addEventListener("DOMContentLoaded", function() {

    let intro = document.getElementById('intro');
    intro.style.display = 'block';

    setTimeout(function() {
        intro.style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
    }, 5000); 

});