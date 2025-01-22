const articlesContainer = document.querySelector('.article-grid');

// Yazılarınızı bir liste olarak ekleyin:
const articles = [
    {
        title: "Kendi Yazımın Başlığı",
        summary: "Bu yazıda güncel gelişmelerden bahsedeceğim...",
        img: "images/yazi1.jpg",
        link: "yazi1.html"
    },
    {
        title: "İkinci Yazımın Başlığı",
        summary: "Bu yazıda haftalık analizleri bulabilirsiniz...",
        img: "images/yazi2.jpg",
        link: "yazi2.html"
    }
];

// Yazıları dinamik olarak oluştur ve ekle
articles.forEach(article => {
    const articleHTML = `
        <article>
            <img src="${article.img}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <a href="${article.link}" class="read-more">Devamını Oku</a>
        </article>
    `;
    articlesContainer.innerHTML += articleHTML;
});
