const form = document.querySelector('form');
const btnSubmit = document.getElementById('btn-submit');
const btnNumber = document.querySelectorAll('.number-btn');
const section = document.querySelector('section');
const main = document.querySelector('main');
const p = document.getElementById('p-selector');

form.addEventListener('submit', e => {
    e.preventDefault();
});

btnNumber.forEach((element) => {
    element.addEventListener('click', e => { 
        const numeroP = (e.target.textContent);
        btnSubmit.addEventListener('click', e => {
            section.classList.toggle('hide');
            main.classList.toggle('hide');
            p.innerHTML = `You selected ${numeroP} out of 5`;
        });
    });
});
