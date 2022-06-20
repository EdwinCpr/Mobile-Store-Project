let cel = [
    {id: 1, brand: `SAMSUNG`, model: `Galaxy S52`, price: 200, img:"./images/image 1.jpg"},
    {id: 2, brand: `SAMSUNG`, model: `Galaxy A12`, price: 100, img:"./images/image 3.jpg"},
    {id: 3, brand: `SAMSUNG`, model: `Galaxy A32`, price: 110, img:"./images/image 4.jpg"},
    {id: 4, brand: `SAMSUNG`, model: `Galaxy A1`, price: 35, img:"./images/image 13.jpg"},
    {id: 5, brand: `SAMSUNG`, model: `Galaxy A70`, price: 250, img:"./images/image 14.jpg"},
    {id: 6, brand: `SAMSUNG`, model: `Galaxy Z fold 3`, price: 600, img:"./images/image 15.jpg"},
    {id: 7, brand: `SAMSUNG`, model: `Galaxy S21`, price: 420, img:"./images/image 16.jpg"}    
];

function generateCard(array) {
    let html = "";
    const container = document.querySelector("#card-all")
    for(let i = 0; i < array.length; i++) {
        html += `<div class="card">
                    <div class="card-all">
                        <div class="heart">
                            <img src="./images/heart 1 - copia.svg" alt="" class="icon-width">
                        </div>                 
                        <div class="img-cel">
                            <img src="${array[i].img}" alt="">
                        </div>
                    </div>
                    <div class="card-info">
                        <div class="card-brand">
                            <p class="bold color-text">${array[i].brand}</p>
                            <p class="p-small">${array[i].model}</p>
                        </div>
                        <div class="flex-price">
                            <div class="card-price">
                                <p class="bold color-text">PRECIO</p>
                                <p>${array[i].price}$</p>
                            </div>
                            <button>                        
                                <div class="card-car">
                                    <img src="./images/shopping-cart 3.svg" alt="icon-car">
                                </div>
                            </button>
                        </div>
                    </div>
                </div>`
    }
    container.innerHTML = html;
}

generateCard(cel);

function total() {
    let html = "";
    let longitud = cel.length;
    const total = document.querySelector("#total-products");
    html = `<p class="bold" id="total">Total de productos: <span class="red">${longitud}</span></p>`;
    total.innerHTML = html;
}

total();
