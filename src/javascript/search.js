
const searchBar = document.querySelector('[data-search]');
const searchBtn = document.querySelector('[data-search-btn]');
const falseSearchBtn = document.querySelector('.false-search-btn');

const logoSection = document.querySelector('.logo__section');
const loginBtn = document.querySelector('#login');
const cancelSearch = document.querySelector('.cancel-search');


const toggleLogoAndLogin = ()=>{
    cancelSearch.classList.toggle('hidden')
    searchBar.classList.toggle('hidden');
    loginBtn.classList.toggle('hidden');
    logoSection.classList.toggle('hidden');
}

const toggleSearchBtns = ()=>{
    searchBtn.classList.toggle('hidden');
    falseSearchBtn.classList.toggle('hidden');
}

if(window.innerWidth<768){
    searchBtn.classList.add('hidden');
    falseSearchBtn.classList.remove('hidden');
    falseSearchBtn.addEventListener('click', ()=>{
        toggleSearchBtns();
        toggleLogoAndLogin();
        cancelSearch.addEventListener('click', quitSearch = ()=>{

            toggleSearchBtns();
            toggleLogoAndLogin();
            searchBar.value='';
            cancelSearch.removeEventListener('click',quitSearch);
        })

        searchBtn.addEventListener('click',()=>{
            toggleLogoAndLogin();
            const searchInput = document.querySelector('[data-search]').value;
            window.location.href=`/products.html?search=${searchInput}`;
        })
    })
}else{
    searchBar.classList.remove('hidden');
    searchBtn.addEventListener('click', ()=>{
        const searchInput = document.querySelector('[data-search]').value;
        window.location.href=`/products.html?search=${searchInput}`;
    })
}