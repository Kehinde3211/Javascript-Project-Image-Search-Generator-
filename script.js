const accessKey = "40Sb96JJ-HTrb2m1VnxoNFT92TP1vwVAyzwqMA5srE4";

const formBody = document.getElementById('form-submit');
const searchbox = document.getElementById('search');
const submitButton = document.getElementById('submit');
const showMore = document.getElementById('show-more-button');
const searchResult = document.getElementById("search-result");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMore.style.display = "block";
}

formBody.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMore.addEventListener('click', () => {
    page++;
    searchImages();
})