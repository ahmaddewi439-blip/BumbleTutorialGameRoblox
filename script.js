function copyCode(button) {
    // 1. Mencari elemen <pre><code> terdekat untuk dicopy
    const codeBlock = button.parentElement.nextElementSibling.querySelector('code');
    const textToCopy = codeBlock.innerText;

    // 2. Link Smartlink / Direct Link Adsterra Anda
    // GANTI LINK DI BAWAH INI DENGAN LINK SMARTLINK MILIK ANDA
    const adsterraSmartlink = "https://www.effectivecpmnetwork.com/qb0q3xn9?key=8a1e853422376988f31de61944495e55";

    // 3. Proses Copy ke Clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Mengubah tampilan tombol menjadi sukses
        const originalText = button.innerText;
        button.innerText = '✅ Berhasil Copy!';
        button.style.backgroundColor = '#16a34a'; // Warna Hijau
        button.style.color = '#ffffff';

        // 4. MEMBUKA SMARTLINK DI TAB BARU (Pop-up Trik)
        // Tab baru dibuka SETELAH teks berhasil tercopy agar user tidak merasa tertipu
        window.open(adsterraSmartlink, '_blank');

        // Mengembalikan teks tombol setelah 2 detik
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

// Fungsi masuk ke tutorial dari halaman depan (Tetap sama)
function masukKeTutorial() {
    document.getElementById("intro-section").style.display = "none";
    document.getElementById("tutorial-section").style.display = "flex";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
