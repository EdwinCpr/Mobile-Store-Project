let cel = [
  {
    id: 1,
    brand: `SAMSUNG`,
    model: `Galaxy S52`,
    price: 200,
    img: "./images/image 1.jpg",
    category: "Samsung",
    count: 0,
  },
  {
    id: 2,
    brand: `XIAOMI`,
    model: `Xiaomi Redmi 9C`,
    price: 280,
    img: "./images/xiaomiReadmi9C.png",
    category: "Xiaomi",
    count: 0,
  },
  {
    id: 3,
    brand: `LG`,
    model: `LGK41S`,
    price: 150,
    img: "./images/LGK41s.png",
    category: "LG",
    count: 0,
  },
  {
    id: 4,
    brand: `MOTOROLA`,
    model: `Moto G200`,
    price: 300,
    img: "./images/MotorolaMotoG200.png",
    category: "Motorola",
    count: 0,
  },
  {
    id: 5,
    brand: `SAMSUNG`,
    model: `Galaxy A12`,
    price: 220,
    img: "./images/image 3.jpg",
    category: "Samsung",
    count: 0,
  },
  {
    id: 6,
    brand: `XIAOMI`,
    model: `Xiaomi Redmi Note 10`,
    price: 600,
    img: "./images/xiaomiReadmiNote10.png",
    category: "Xiaomi",
    count: 0,
  },
  {
    id: 7,
    brand: `LG`,
    model: `LGK62`,
    price: 95,
    img: "./images/LGK62.png",
    category: "LG",
    count: 0,
  },
  {
    id: 8,
    brand: `HUAWEI`,
    model: `P40`,
    price: 500,
    img: "./images/HuaweiP40.png",
    category: "Huawei",
    count: 0,
  },
  {
    id: 9,
    brand: `MOTOROLA`,
    model: `Moto G60S`,
    price: 310,
    img: "./images/MotoG60s.png",
    category: "Motorola",
    count: 0,
  },
  {
    id: 10,
    brand: `SAMSUNG`,
    model: `Galaxy A32`,
    price: 110,
    img: "./images/image 4.jpg",
    category: "Samsung",
    count: 0,
  },
  {
    id: 11,
    brand: `XIAOMI`,
    model: `Redmi 9A`,
    price: 80,
    img: "./images/xiaomiReadmi9A.png",
    category: "Xiaomi",
    count: 0,
  },
  {
    id: 12,
    brand: `LG`,
    model: `LGK51S`,
    price: 80,
    img: "./images/LGK51S.png",
    category: "LG",
    count: 0,
  },
  {
    id: 13,
    brand: `MOTOROLA`,
    model: `Edge 20 PRO`,
    price: 370,
    img: "./images/MotorolaEdge20PRO.png",
    category: "Motorola",
    count: 0,
  },
  {
    id: 14,
    brand: `SAMSUNG`,
    model: `Galaxy A1`,
    price: 35,
    img: "./images/image 13.jpg",
    category: "Samsung",
    count: 0,
  },
  {
    id: 15,
    brand: `XIAOMI`,
    model: `Xiaomi Poco X4`,
    price: 412,
    img: "./images/xiaomiPOCOX4.png",
    category: "Xiaomi",
    count: 0,
  },
  {
    id: 16,
    brand: `LG`,
    model: `Velvet`,
    price: 341,
    img: "./images/LGVelvet128GB.png",
    category: "LG",
    count: 0,
  },
  {
    id: 17,
    brand: `HUAWEI`,
    model: `Mate 30 PRO`,
    price: 342,
    img: "./images/HuaweiMate30PRO.png",
    category: "Huawei",
    count: 0,
  },
  {
    id: 18,
    brand: `MOTOROLA`,
    model: `G71`,
    price: 441,
    img: "./images/MotorolaG71.png",
    category: "Motorola",
    count: 0,
  },
  {
    id: 19,
    brand: `SAMSUNG`,
    model: `Galaxy A70`,
    price: 340,
    img: "./images/image 14.jpg",
    category: "Samsung",
    count: 0,
  },
  {
    id: 20,
    brand: `XIAOMI`,
    model: `Xiaomi Redmi Note 11`,
    price: 220,
    img: "./images/xiaomiReadmiNOTE11.png",
    category: "Xiaomi",
    count: 0,
  },
  {
    id: 21,
    brand: `SAMSUNG`,
    model: `Galaxy Z fold 3`,
    price: 190,
    img: "./images/image 15.jpg",
    category: "Samsung",
    count: 0,
  },
  {
    id: 22,
    brand: `MOTOROLA`,
    model: `Moto G31`,
    price: 90,
    img: "./images/MotorolaMotoG31.png",
    category: "Motorola",
    count: 0,
  },
  {
    id: 23,
    brand: `HUAWEI`,
    model: `P50 PRO`,
    price: 180,
    img: "./images/HuaweiP50PRO.png",
    category: "Huawei",
    count: 0,
  },
  {
    id: 24,
    brand: `SAMSUNG`,
    model: `Galaxy S21`,
    price: 550,
    img: "./images/image 16.jpg",
    category: "Samsung",
    count: 0,
  },
];

function generateCard(array) {
  let html = "";
  const container = document.querySelector("#card-all");
  for (let i = 0; i < array.length; i++) {
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
                            <button onclick="searchID(${array[i].id})">                        
                                <div class="card-car">
                                <img src="./images/shopping-cart 3.svg" alt="icon-car">
                                </div>
                            </button>
                        </div>
                    </div>
                </div>`;
  }
  container.innerHTML = html;
}

generateCard(cel);

let longitud = cel.length;
function total(longitud) {
  let html = "";
  const total = document.querySelector("#total-products");
  html = `<p class="bold" id="total">Total de productos: <span class="red">${longitud}</span></p>`;
  total.innerHTML = html;
}

total(longitud);

//////////////////////////////////////// Filter menu
const btnn = document.querySelector("#btnn");
btnn.addEventListener("click", () => {
  generateCard(cel);
  total(longitud);
});

const btnOne = document.querySelector("#btn-one");
btnOne.addEventListener("click", () => {
  let result = [];
  cel.filter((i) => {
    if (i.category == btnOne.value) {
      result.push(i);
      generateCard(result);
      total(result.length);
    }
  });
});

const btnTwo = document.querySelector("#btn-two");
btnTwo.addEventListener("click", () => {
  let result = [];
  cel.filter((i) => {
    if (i.category == btnTwo.value) {
      result.push(i);
      generateCard(result);
      total(result.length);
    }
  });
});

const btnThree = document.querySelector("#btn-three");
btnThree.addEventListener("click", () => {
  let result = [];
  cel.filter((i) => {
    if (i.category == btnThree.value) {
      result.push(i);
      generateCard(result);
      total(result.length);
    }
  });
});

const btnFour = document.querySelector("#btn-four");
btnFour.addEventListener("click", () => {
  let result = [];
  cel.filter((i) => {
    if (i.category == btnFour.value) {
      result.push(i);
      generateCard(result);
      total(result.length);
    }
  });
});

const btnFive = document.querySelector("#btn-five");
btnFive.addEventListener("click", () => {
  let result = [];
  cel.filter((i) => {
    if (i.category == btnFive.value) {
      result.push(i);
      generateCard(result);
      total(result.length);
    }
  });
});

///////////////////////////////////////// Menu
function navToggle() {
  const menu = document.querySelector("#menu-id");
  menu.classList.toggle("hidden-one");
}

//////////////////////////////////////////////// Filter input

function searchFilter(element) {
  const input = document.querySelector("#input-filter").value;
  const valueInput = input.toUpperCase();
  const e = element.brand.toUpperCase();
  const eOne = element.model.toUpperCase();
  return valueInput == e || e.includes(valueInput) || eOne.includes(valueInput);
}

function filter(array, cb) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let comparation = cb(array[i]);
    if (comparation) {
      result.push(array[i]);
      total(result.length);
    }
  }
  return result;
}

function add() {
  let ar = filter(cel, searchFilter);
  generateCard(ar);
  console.log(filter.lenght);
}

//////////////////////////////// Car

function celToggle() {
  const celu = document.querySelector("#celu-option");
  celu.classList.toggle("hidden-two");
}

function generateMiniCard(array) {
  let html = "";
  const miniCard = document.querySelector("#mini-card");
  for (let i = 0; i < array.length; i++) {
    html += `<div class="car-grid">
                    <div class="car-img">
                        <img src="${array[i].img}" alt="">
                    </div>
                    <div class="car-info">
                        <p class="color-text bold">${array[i].brand}</p>
                        <p class="p-small">${array[i].model}</p>
                    </div>
                    <div class="icon-papeleria">
                    <button onclick="deleteProduct(${array[i].id})"><img src="./images/papelera.svg" alt="" class="icon-width"></button>
                    </div>
                </div>`;
  }
  miniCard.innerHTML = html;
}

let local = JSON.parse(localStorage.getItem("storage")) || [];
generateMiniCard(local);

function searchID(id) {
  console.log(id);
  function callback(element) {
    return element.id == id;
  }

  function find(array, cb) {
    for (let i = 0; i < array.length; i++) {
      let res = cb(array[i]);
      if (res) {
        if (array[i].count == 0) {
          array[i].count = 1;
          local.push(array[i])
          generateMiniCard(local)
          localStorage.setItem("storage", JSON.stringify(local));
        } else {
          console.log("Ya existe");
        }
      }
    }
  }
  let ar = find(cel, callback);
}

// function deleteProduct(id) {
//     for(let i = 0; i < local.length; i++) {
//         if(id == local[i].id) {
//             let arr = local.splice(id,1)
//             generateMiniCard(local)
//             localStorage.setItem("storage",JSON.stringify(local))
//         }
//     }
// }
