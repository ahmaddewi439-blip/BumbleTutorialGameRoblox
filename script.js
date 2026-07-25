// Fungsi untuk masuk dari Landing Page ke Halaman Tutorial
function masukKeTutorial() {
    // Menyembunyikan halaman intro
    document.getElementById("intro-section").style.display = "none";
    
    // Memunculkan halaman tutorial dengan display 'flex' (sesuai layout)
    document.getElementById("tutorial-section").style.display = "flex";
    
    // Otomatis scroll sedikit ke atas agar rapi
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi Copy Kode (Tetap sama seperti sebelumnya)
function copyCode(button) {
    const codeBlock = button.parentElement.nextElementSibling.querySelector('code');
    const textToCopy = codeBlock.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = button.innerText;
        button.innerText = '✅ Berhasil Copy!';
        button.style.backgroundColor = '#16a34a'; 
        button.style.color = '#ffffff';

        setTimeout(() => {
            button.innerText = originalText;
            button.style.backgroundColor = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Gagal mencopy teks: ', err);
        button.innerText = '❌ Gagal';
    });
}
