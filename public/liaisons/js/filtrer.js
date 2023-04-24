var item = document.querySelectorAll('.item');

    function filtrer(cat){
        let count = 0;
        document.querySelector('.first').classList.remove('first');
        document.querySelector('.filtre__actif').classList.remove('filtre__actif');
        document.getElementById(cat).classList.add('filtre__actif');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.classList.contains(cat) || cat == 'all') {
                if (count == 0) {
                    item.classList.add('first');
                    count++;
                }
                item.style.display = 'block';
            } else {
                item.classList.remove('visible');
                item.style.display = 'none';
            }   
        }
    }