const manusBarEl = document.getElementById('manus_bar');
const manuMobile = document.querySelector('.manu_mobile')

const onClose = () => {
        manuMobile.classList.toggle('show_menu');
}

manusBarEl.addEventListener('click', () => {
        onClose();
})