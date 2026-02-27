let currentZIndex = 10;

function movePage(page, pageNum) {
    if (!page.classList.contains('flipped')) {
        // Sayfayı çevir
        page.classList.add('flipped');
        
        // Çevrilen sayfayı en alta it ki diğerleri görünsün
        setTimeout(() => {
            page.style.zIndex = pageNum;
        }, 500);
    } else {
        // Sayfayı geri çevir
        page.classList.remove('flipped');
        
        // Geri çevrildiğinde tekrar üste al
        setTimeout(() => {
            page.style.zIndex = 20 - pageNum;
        }, 500);
    }
}

// Başlangıçta sayfaların üst üste doğru dizilmesi
document.querySelectorAll('.page').forEach((page, index) => {
    page.style.zIndex = 20 - index;
});