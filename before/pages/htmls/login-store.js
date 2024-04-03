document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', () => {
        const username = document.getElementById('usernameInput').value;
        const d = new Date();
        d.setTime(d.getTime() + (7*24*60*60*1000)); // 7 days in milliseconds
        const expires = "expires="+ d.toUTCString();
        document.cookie = "username=" + username + ";" + expires + ";path=/";
        window.location.href = './ForumList.html';
    });
});