// Buraya istediğin kadar resim ekleyebilirsin, sayfa otomatik oluşur.
const cizimlerim = [
    { dosya: 'resim1.jpg', baslik: 'Anneanne', teknik: 'Kurşun Kalem' },
    { dosya: 'resim2.jpg', baslik: 'Eski Sokak', teknik: 'Kurşun Kalem' },
    { dosya: 'resim3.jpg', baslik: 'Portre Çalışması', teknik: 'Kurşun Kalem' },
    // Yeni resim ekledikçe altına ekle...
];

const book = document.getElementById('book');

// Arka kapaktan önce resimleri araya ekleyen fonksiyon
cizimlerim.forEach((cizim, index) => {
    const pageNum = index + 2; // Kapak ve girişten sonra başladığı için
    const pageDiv = document.createElement('div');
    pageDiv.className = 'page';
    pageDiv.setAttribute('onclick', `movePage(this, ${pageNum})`);
    
    pageDiv.innerHTML = `
        <div class="page-content">
            <div class="photo-frame">
                <img src="${cizim.dosya}" alt="${cizim.baslik}">
            </div>
            <p class="caption">${cizim.baslik} <br><small>${cizim.teknik}</small></p>
        </div>
    `;
    
    // Arka kapaktan hemen öncesine ekle
    const coverBack = document.querySelector('.cover-back');
    book.insertBefore(pageDiv, coverBack);
});

// Sayfa çevirme fonksiyonu (Aynı kalacak)
function movePage(page, pageNum) {
    if (!page.classList.contains('flipped')) {
        page.classList.add('flipped');
        setTimeout(() => { page.style.zIndex = pageNum; }, 500);
    } else {
        page.classList.remove('flipped');
        setTimeout(() => { page.style.zIndex = 100 - pageNum; }, 500);
    }
}

// Başlangıç z-index ayarı
document.querySelectorAll('.page').forEach((page, index) => {
    page.style.zIndex = 100 - index;
});

