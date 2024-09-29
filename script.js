/* Función para mostrar u ocultar el perfil y la tarjeta */
function togglePerfil() {
    const perfil = document.getElementById('perfil');
    const card = document.getElementById('cord');
    
    if (perfil.style.display === 'block') {
        perfil.style.display = 'none';
        card.style.display = 'block';
    } else {
        perfil.style.display = 'block';
        card.style.display = 'none';
    }
}

/* Función para cambiar el tema de la pantalla */
function changeTheme(theme) {
    document.body.className = theme;
}
