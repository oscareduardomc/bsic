document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('loader-wrapper');
    
    // Función para remover el loader
    const hideLoader = () => {
        // Añadimos la clase de ocultación (activa la transición CSS)
        loader.classList.add('loader-hidden');
        
        // Removemos del DOM después de que termine la animación de opacidad
        loader.addEventListener('transitionend', () => {
            loader.remove();
        }, { once: true });
    };

    // Opción A: Ocultar cuando todo cargue (Imágenes, scripts, etc)
    window.addEventListener('load', () => {
        // Un pequeño delay de 1.5s para que el usuario aprecie el mecanismo
        setTimeout(hideLoader, 1500);
    });

    // Opción B: Por si la carga tarda demasiado, forzar cierre a los 10 segundos
    setTimeout(() => {
        if (document.body.contains(loader)) {
            hideLoader();
        }
    }, 10000);
});