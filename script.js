const themeSwitch = document.getElementById('theme-switch');
const moonIcon = themeSwitch.querySelector('.fa-moon');
const sunIcon = themeSwitch.querySelector('.fa-sun');

// Cargar el tema guardado al iniciar
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  // Actualiza los íconos según el tema guardado
  if (savedTheme === 'dark') {
    moonIcon.style.display = 'none'; // Oculta la luna
    sunIcon.style.display = 'inline'; // Muestra el sol
  } else {
    moonIcon.style.display = 'inline'; // Muestra la luna
    sunIcon.style.display = 'none'; // Oculta el sol
  }
} else {
  // Si no hay tema guardado, establece el tema por defecto (light)
  localStorage.setItem('theme', 'light');
  moonIcon.style.display = 'inline'; // Muestra la luna
  sunIcon.style.display = 'none'; // Oculta el sol
}

// Función para cambiar entre temas
themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');
  
  // Actualiza los íconos
  if (document.body.classList.contains('darkmode')) {
    localStorage.setItem('theme', 'dark');
    moonIcon.style.display = 'none'; // Oculta la luna
    sunIcon.style.display = 'inline'; // Muestra el sol
  } else {
    localStorage.setItem('theme', 'light');
    moonIcon.style.display = 'inline'; // Muestra la luna
    sunIcon.style.display = 'none'; // Oculta el sol
  }
});
