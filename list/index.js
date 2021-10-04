const inputItem = document.getElementById('input-text');
const btnAdd = document.getElementById('btn-add');
const list = document.getElementById('list');
// inputItem.placeholder = 'Masukkan item...';

const clickListener = (e) => {
    e.preventDefault();
    if (inputItem.value === '') {
        alert('Item cannot be empty');
        inputItem.focus();
        inputItem.placeholder = 'Masukkan item...';
    }
    else {
        // !Items
        const items = document.createElement('li');
        items.textContent = inputItem.value;
        list.appendChild(items);
        // !DeleteButton
        const btnDelete = document.createElement('span');
        btnDelete.textContent = 'Delete';
        items.appendChild(btnDelete);
        // !Alert
        alert(`${inputItem.value} added`);
        
        if (items.textContent == items) {
            alert(`${inputItem.value} already added`);
        }
    }
    // !DeleteFunction
    const close = document.querySelectorAll('span');
    for (let i=0; i<close.length; i++) {
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.display = 'none';
        })
    }
    inputItem.value = '';
};

btnAdd.addEventListener('click', clickListener);
// const items2 = document.createElement('li');
// items.textContent = "Test";
// items2.textContent = "Bilqis";
// list.appendChild(items);
// list.appendChild(items2);