function changeTheme(theme) {
    document.body.className = theme;
}

document.querySelector('.perfil-btn').addEventListener('click', function() {
    document.querySelector('.perfil').style.display = 'block';
});
