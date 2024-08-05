// Select an element in the HTML page


var el = document.querySelector('.notification');

        document.querySelector('button').addEventListener('click', function() {
            el.classList.add('show-count');
            var count = Number(el.getAttribute('data-count')) || +5;
            el.setAttribute('data-count', count - 5);
            el.classList.remove('notify');
            el.offsetWidth = el.offsetWidth;
            el.classList.add('notify');
            //    if(count === 1){
            //        el.classList.add('show-count');
            //    }
        });