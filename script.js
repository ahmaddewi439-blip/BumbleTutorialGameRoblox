function copyCode(button) {
    // Mencari elemen <pre><code> terdekat dari tombol yang diklik
    const codeBlock = button.parentElement.nextElementSibling.querySelector('code');
    const textToCopy = codeBlock.innerText;

    // Proses copy ke clipboard perangkat user
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Ubah teks tombol menjadi sukses
        const originalText = button.innerText;
        button.innerText = '✅ Berhasil Copy!';
        button.style.backgroundColor = '#16a34a'; // Warna hijau
        button.style.color = '#ffffff';

        // Kembalikan tombol ke semula setelah 2 detik
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