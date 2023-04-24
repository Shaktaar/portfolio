let videos = document.querySelectorAll('.motion');
for (let i = 0; i < videos.length; i++) {
    if (i != 0)
        videos[i].currentTime = 2;
    videos[i].addEventListener('click', () => {
        if (videos[i].paused) { videos[i].currentTime = 0; videos[i].play(); }
        else videos[i].pause();
    });
}


const img = document.querySelectorAll('img:not(.villeimg, .nav_logo)');

    // Boucle sur chaque image
    for (let i = 0; i < img.length; i++) {
        // Ajoute un événement "click" à l'image
        img[i].addEventListener('click', function () {

            // Crée un élément div pour le plein écran
            const fullscreen = document.createElement('div');

            // Applique les styles nécessaires pour le plein écran
            fullscreen.style.position = 'fixed';
            fullscreen.style.top = '0';
            fullscreen.style.left = '0';
            fullscreen.style.width = '100%';
            fullscreen.style.height = '100%';
            fullscreen.style.backgroundColor = 'black';
            fullscreen.style.zIndex = '9999';
            fullscreen.style.cursor = 'crosshair';

            // Crée un élément image pour la copie de l'image originale
            const imgCopy = document.createElement('img');

            // Copie l'URL source de l'image originale
            imgCopy.src = this.src;

            // Applique les styles nécessaires pour l'image copiée
            imgCopy.style.position = 'absolute';
            imgCopy.style.top = '50%';
            imgCopy.style.left = '50%';
            imgCopy.style.transform = 'translate(-50%, -50%)';
            imgCopy.style.maxWidth = '100%';
            imgCopy.style.maxHeight = '100%';

            // Ajoute l'image copiée à l'élément pour le plein écran
            fullscreen.appendChild(imgCopy);

            // Ajoute l'élément pour le plein écran au corps de la page
            document.body.appendChild(fullscreen);

            // Ajoute un événement "click" à l'élément pour le plein écran
            fullscreen.addEventListener('click', function () {
                // Retire l'élément pour le plein écran
                document.body.removeChild(fullscreen);
            });

        });
    }