const inputTugas = document.getElementById('inputTugas');
const btnTambah = document.getElementById('btnTambah');
const listTugas = document.getElementById('daftarTugas');
let toDoArray = [];

btnTambah.addEventListener('click', function() {
    const tugas = inputTugas.value.trim();
    if (tugas) {
        toDoArray.push(tugas);
        console.log('Tugas ditambahkan:', tugas );
        inputTugas.value = '';
        tampilkanTugas();
    }
});

function tampilkanTugas() {
    listTugas.innerHTML = '';
    toDoArray.forEach((tugas, index) => {
        const li = document.createElement('li');
        li.textContent = tugas;
        listTugas.appendChild(li);
    });
}