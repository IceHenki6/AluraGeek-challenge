

const searchBtn = document.querySelector('[data-search-btn]');


searchBtn.addEventListener('click', ()=>{
    const searchInput = document.querySelector('[data-search]').value;
    console.log(searchInput);
    window.location.href=`/products.html?search=${searchInput}`;
})