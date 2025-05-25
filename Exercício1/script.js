const sunnight = document.getElementById('sg');
const lua = document.getElementById('moon');
const sol = document.getElementById('sun');
const screen = document.querySelector('.screen');
const titles = document.querySelectorAll('h1');
const logos = document.querySelectorAll('.logo svg');

logos[0].style.display = 'block';
logos[1].style.display = 'none';

screen.style.backgroundImage = 'linear-gradient(rgb(5, 10, 25), rgb(10, 22, 64))';


sunnight.addEventListener('click', () => {
    const isSunVisible = window.getComputedStyle(sol).display === 'block';


    if (isSunVisible) {
        sol.style.display = 'none';
        lua.style.display = 'block';
        
        sunnight.style.backgroundColor = 'rgb(238, 238, 238)';
        screen.style.backgroundImage = 'none';
        titles.forEach(title => title.style.color = 'rgb(10, 22, 62)');
        ex1.forEach(all => {
            all.style.backgroundColor = 'white';
            all.style.border = 'none';
            all.style.boxShadow = '0 0 1px black';
        });
        document.querySelectorAll('button').forEach(buttons => {
            buttons.style.backgroundColor = 'white';
            buttons.style.color = 'rgb(31, 37, 59)';
            buttons.style.borderColor = 'rgb(140, 141, 141)';
        });
        document.querySelectorAll('h2').forEach(subtitles => {
            subtitles.style.color = 'rgb(10, 22, 62)';
        });
        document.querySelectorAll('p').forEach(txt => {
            txt.style.color = 'rgb(71, 73, 78)';
        });
        document.querySelectorAll('nav .cat').forEach(cats => {
            cats.style.backgroundColor = 'white';
            cats.style.color = 'rgb(16, 10, 48)';
            cats.style.border = 'none';
            cats.style.boxShadow = '0 0 1px black';
        });
        document.querySelectorAll('.rolamento').forEach(toggles => {
            toggles.style.backgroundColor = 'rgb(198, 198, 198)';
        });
        document.querySelector('.barra').style.backgroundColor = 'rgb(255, 255, 255)';
        document.querySelector('.barra').style.boxShadow = '0 0 1px black';
        logos[0].style.display = 'none';
        logos[1].style.display = 'block';
        

    } else {
        lua.style.display = 'none';
        sol.style.display = 'block';
        
        sunnight.style.backgroundColor = '';
        screen.style.backgroundImage = 'linear-gradient(rgb(5, 10, 25), rgb(10, 22, 64))';
        titles.forEach(title => title.style.color = 'rgb(255, 255, 255)');
        ex1.forEach(all => {
            all.style.backgroundColor = '';
            all.style.border = '';
            all.style.boxShadow = '';
        });
        document.querySelectorAll('button').forEach(buttons => {
            buttons.style.backgroundColor = '';
            buttons.style.color = '';
            buttons.style.borderColor = '';
        });
        document.querySelectorAll('h2').forEach(subtitles => {
            subtitles.style.color = '';
        });
        document.querySelectorAll('p').forEach(txt => {
            txt.style.color = '';
        });
        document.querySelectorAll('nav .cat').forEach(cats => {
            cats.style.backgroundColor = '';
            cats.style.color = '';
            cats.style.border = '';
            cats.style.boxShadow = '';
        });
        document.querySelectorAll('.rolamento').forEach(toggles => {
            toggles.style.backgroundColor = '';
        });
        document.querySelector('.barra').style.backgroundColor = '';
        document.querySelector('.barra').style.boxShadow = '';
        logos[0].style.display = 'block';
        logos[1].style.display = 'none';

    }
});

const cat1 = document.querySelector('.cat1');
const cat2 = document.querySelector('.cat2');
const cat3 = document.querySelector('.cat3');

cat1.style.backgroundColor = 'rgb(247, 90, 85)';
cat1.style.color = 'rgb(16, 10, 48)';
     
const desable1 = [cat2, cat3];
const desable2 = [cat1, cat3];
const desable3 = [cat1, cat2];

const botoes = document.querySelectorAll('button');

botoes.forEach((buttons, index) => {
    buttons.addEventListener('click', () => {
        ex1[index].style.display = 'none';
    });
});

const ex1 = document.querySelectorAll('.ex1');
ex1.forEach(all => all.classList.add('inutilited'));
ex1.forEach(all => all.classList.remove('utilited'));


cat1.addEventListener('click', () => {
    cat1.style.backgroundColor = 'rgb(247, 90, 85)';
    cat1.style.color = 'rgb(16, 10, 48)';

    if (!screen.style.backgroundImage == 'none') {
        desable1.forEach(change => {
        change.style.backgroundColor = 'white';
        change.style.color = 'rgb(16, 10, 48)';
    });
    } else {
        desable1.forEach(change => {
        change.style.backgroundColor = 'rgb(47, 53, 75)';
        change.style.color = 'white';
    });
    }

    ex1.forEach(all => all.style.display = 'block');

 });

cat2.addEventListener('click', () => {
    cat2.style.backgroundColor = 'rgb(247, 90, 85)';
    cat2.style.color = 'rgb(16, 10, 48)';

    if (!screen.style.backgroundImage == 'none') {
        desable2.forEach(change => {
        change.style.backgroundColor = 'white';
        change.style.color = 'rgb(16, 10, 48)';
    });
    } else {
        desable2.forEach(change => {
        change.style.backgroundColor = 'rgb(47, 53, 75)';
        change.style.color = 'white';
    });
    }

    document.querySelectorAll('.inutilited').forEach(all => all.style.display = 'none');
    document.querySelectorAll('.utilited').forEach(all => all.style.display = 'block');

});

cat3.addEventListener('click', () => {
    cat3.style.backgroundColor = 'rgb(247, 90, 85)';
    cat3.style.color = 'rgb(16, 10, 48)';

    if (!screen.style.backgroundImage == 'none') {
        desable3.forEach(change => {
        change.style.backgroundColor = 'white';
        change.style.color = 'rgb(16, 10, 48)';
    });
    } else {
        desable3.forEach(change => {
        change.style.backgroundColor = 'rgb(47, 53, 75)';
        change.style.color = 'white';
    });
    }

    document.querySelectorAll('.inutilited').forEach(all => all.style.display = 'block');
    document.querySelectorAll('.utilited').forEach(all => all.style.display = 'none');

 });

//toggle 

const toggle = document.querySelectorAll('.rolamento');
const ball = document.querySelectorAll('.ball');

toggle.forEach((toggles, index) => {
    toggle[index].addEventListener('click', () => {
        ball[index].classList.toggle('ativo');
        toggle[index].style.backgroundColor = (toggle[index].style.backgroundColor === 'rgb(241, 93, 83)') ? '' : 'rgb(241, 93, 83)';
        ex1[index].classList.contains('utilited') ? ex1[index].classList.remove('utilited') && ex1[index].classList.add('inutilited') : ex1[index].classList.add('utilited') && ex1[index].classList.remove('inutilited');
    });
});