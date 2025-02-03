const szoveg = document.getElementById('szoveg');
const dolgok = document.getElementById('dolgok');
//console.log(szoveg, dolgok);

const zold = document.getElementById('zold');
const kek = document.getElementById('kek');
const piros = document.getElementById('piros');
const sarga = document.getElementById('sarga');

const hatter = document.body.style;
const gomb = document.getElementById('gomb'); // ez a cookie-hoz kell majd
let tema = 'piros';

const szinek = [
    {
        name: zold,
        color: '#28A745'
    },
    {
        name: kek,
        color: '#007BFF'
    },
    {
        name: piros,
        color: '#DC3545'
    },
    {
        name: sarga,
        color: '#FFC107'
    }
];

window.addEventListener('DOMContentLoaded', () => {
    const cookie = getCookie('tema');
    console.log(cookie);
    
    if (cookie) {
        switch (cookie) {
            case 'zold':
                hatter.backgroundColor = '#28A745';
                tema = 'zold'
                break;
            case 'kek':
                hatter.backgroundColor = '#007BFF';
                tema = 'kek'
                break;
            case 'piros':
                hatter.backgroundColor = '#DC3545';
                tema = 'piros'
                break;
            case 'sarga':
                hatter.backgroundColor = '#FFC107';
                tema = 'sarga'
                break;
        }
    }
});

gomb.addEventListener('click', () => {
    setCookie('tema', tema, 3);
});

szinek.forEach(szin => 
    szin.name.addEventListener('click', () => {
        hatter.backgroundColor = `${szin.color}`;
        //console.log(szin.name.id);
        tema = szin.name.id;
    })
);

szoveg.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        //console.log('entert nyomtál');
        //console.log(szoveg.value);

        // lista elem div
        const listaDiv = document.createElement('div');
        listaDiv.className = 'lista';

        // a szöveg, amit a listában megjelnítek
        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.textContent = szoveg.value;

        // a törlés gomb minden egyes lista elemnél
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'törlés';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => torles(listaDiv));

        listaDiv.append(titleDiv, deleteButton);

        //console.log(listaDiv);
        //console.log(titleDiv);
        
        dolgok.prepend(listaDiv);
        szoveg.value = '';      
    }
});

function torles(listaDiv) {
    //console.log(listaDiv);
    listaDiv.remove();
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (1000 * 60 * 60 * 24 * days));
    //console.log(date);
    const expires = `expires=${date.toUTCString()}`;
    //console.log(expires);
    document.cookie = `${name}=${value};${expires};path=/`;
}

//setCookie('tema', 'zold', 1) // tesztelés céljából hívom meg a függvényt

function getCookie(key) {
    const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${key}=`));
    console.log(cookie);
    return cookie ? cookie.split('=')[1] : null;
    
    // if (cookie) {
    //     return cookie.split('=')[1];
    // } else {
    //     return null;
    // }
}

//getCookie('tema');
// valami változás