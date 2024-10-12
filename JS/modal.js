const modal = document.getElementById('modal');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function () {
    modal.classList.toggle('hidden');
});