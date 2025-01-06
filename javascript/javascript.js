document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const toggleCategories = document.getElementById('toggleCategories');
    const categoriesMenu = document.getElementById('categoriesMenu');

    // Mostrar/Ocultar sidebar
    toggleSidebar.addEventListener('click', () => {
        sidebarMenu.classList.toggle('show');
        sidebarOverlay.classList.toggle('show');
    });

    sidebarOverlay.addEventListener('click', () => {
        sidebarMenu.classList.remove('show');
        sidebarOverlay.classList.remove('show');
    });

    // Mostrar/Ocultar submenú de categorías
    toggleCategories.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el comportamiento de navegación
        categoriesMenu.classList.toggle('show');
    });
});