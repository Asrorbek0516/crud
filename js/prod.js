import { products } from "./data.js"
const productWrapper = document.querySelector('.product-wrapper')
const searchFormEl = document.querySelector('#search-form')
console.log(searchFormEl);

function readProducts(arr){
productWrapper.innerHTML = "";
arr.forEach((prod) => {
    let {name,brand,discount,description,image,category,price,oldPrice,tags,color,storage,ram,rating,reviewsCount}=prod
    productWrapper.innerHTML += `
    <div class="product">
                        <div class="product-image">
                            <img
                                src="${image}"
                                alt="${description}"
                            />
                            <span class="discount">${discount}</span>
                        </div>

                        <div class="product-info">
                            <p class="category">${category}</p>

                            <h2>${name}</h2>

                            <p class="description">
                                ${description}
                            </p>

                            <div class="product-details">
                                <span>${color}</span>
                                <span>${storage}</span>
                                <span>${ram}</span>
                            </div>

                            <div class="rating">
                                <span>★ ${rating}</span>
                                <span class="reviews">${reviewsCount}</span>
                            </div>

                            <div class="product-bottom">
                                <div class="prices">
                                    <h3>$${price}</h3>
                                    <del>$${oldPrice}</del>
                                </div>

                                <div class="counter">
                                    <button class="minus-btn">-</button>
                                    <span class="count-val">1</span>
                                    <button class="plus-btn">+</button>
                                </div>
                                <button>delete</button>
                            </div>

                            <p class="stock">15 items in stock</p>
                        </div>
                    </div>
                    `
})
}

readProducts(products);



productWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('plus-btn')) {
        const counterBox = e.target.closest('.counter');
        const countValueSpan = counterBox.querySelector('.count-val');
        
        let currentCount = parseInt(countValueSpan.textContent);
        currentCount++;
        countValueSpan.textContent = currentCount;
    }

    if (e.target.classList.contains('minus-btn')) {
        const counterBox = e.target.closest('.counter');
        const countValueSpan = counterBox.querySelector('.count-val');
        
        let currentCount = parseInt(countValueSpan.textContent);
        
        if (currentCount > 0) {
            currentCount--;
            countValueSpan.textContent = currentCount;
        }
    }
});

searchFormEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    let formdata = new FormData(searchFormEl)

    let inputVal = formdata.get("search-input")

    let filterProdName = products.filter(
        (prod)=>{
            if(prod.brand.toLocaleLowerCase().includes(inputVal.toLocaleLowerCase())){
                return prod
            }
        }
    );

    readProducts(filterProdName);
    
    
})