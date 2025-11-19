// let path = new URLSearchParams(location.search)
// let singleCard = document.getElementById("single-card")
// let malumot = document.getElementById("malumot")
// let badge = document.getElementById("badge");       
// let cart = JSON.parse(localStorage.getItem("carts") || "[]");
// let id = path.get("id")
// let item = products.filter((el) => el.id == id)
// let malumotlar = products.filter((el) => el.id == id)
// item.map((el) => {
//     singleCard.innerHTML = `
//     <div class=" flex object-cover gap-[10px] max-w-[50%] w-full">
//                         <div id="side-images" class="flex flex-col gap-[10px]">
//                             <img class="w-[86.4px] duration-800 ease-in-out hover:shadow-xl hover:shadow-[#0000001A] h-[86.4px] object-cover rounded-[5px]" src=${el.images[0]} alt="">
//                             <img class="w-[86.4px] duration-800 ease-in-out hover:shadow-xl hover:shadow-[#0000001A] h-[86.4px] object-cover rounded-[5px]" src=${el.images[1]} alt="">
//                             <img class="w-[86.4px] duration-800 ease-in-out hover:shadow-xl hover:shadow-[#0000001A] h-[86.4px] object-cover rounded-[5px]" src=${el.images[2]} alt="">
//                             <img class="w-[86.4px] duration-800 ease-in-out hover:shadow-xl hover:shadow-[#0000001A] h-[86.4px] object-cover rounded-[5px]" src=${el.images[3]} alt="">
//                         </div>
//                         <img 
//                         id="main-img"
//                         class="h-[375.6px] flex relative max-w-[504px] w-full object-cover rounded-[5px]" ]
//                         src=${el.images[0]} 
//                         alt="">
//                         <div class="absolute w-[56px] h-[32px] rounded-sm bg-[#FF6633] flex justify-center items-center text-[white] text-[16px] font-normal left-[10px] top-[120px] ">-${el.discount}%</div>
//                     </div>
//                     <div class=" w-[50%]">
//                         <div  class="flex justify-evenly items-start">
//                             <div>
//                                 <p class="font-normal text-[24px] text-[#606060]">${el.price} ₽</p>
//                                 <p class="font-normal text-[12px] text-[#BFBFBF]">Обычная цена</p>
//                             </div>
//                             <div>
//                                 <p class="font-bolt text-[36px] text-[#414141]">${el.price - (el.price * el.discount) / 100} ₽</p>
//                                 <div class="flex items-center gap-[10px]">
//                                     <p class="font-normal text-[12px] text-[#BFBFBF]">С картой Северяночки</p>
//                                     <img src="./ikkinchi_img/info.svg" alt="">
//                                 </div>
//                             </div>
//                         </div>
//                         ${
//                          cart.find((item) => item.id === el.id)
//                          ? `<div class="w-full grid grid-cols-3 mt-[5px]  ">
//                         <button
//                         onClick = "decreasing(${el.id})"
//                          class = " ml-[5px] flex items-center justify-center p-[10px]   rounded-sm text-white text-[18px] bg-[red]">-</button> 
//                         <span class =" text-[18px] flex items-center justify-center  p-[10px]">${cart.find((item) => item.id === el.id).numbers}</span>
//                         <button
//                         onClick = "increasing(${el.id})"
//                         class=" mr-[5px] flex items-center justify-center p-[10px]  text-[18px] text-white rounded-sm bg-[green]">+</button>
//                         </div>`: `<div class=" flex justify-center">
//                             <button
//                             onClick = "addToCart(${el.id})"
//                                 class=" w-[279px] h-[60px] flex justify-center gap-[30px] text-[24px] items-center mt-[10px] bg-[#FF6633] text-[white] border-[#FF6633] rounded-[5px] border-solid border-x border-y border-[#70C05B] text-[#70C05B]">
//                                 <img class="w-[32px] h-[32px] " src="../img/shopping-white-cart.svg" alt="">
//                                В корзину</button>
//                         </div>`
                         
//                         }
//                     </div>
//      </div>`
// })


// let sideImages = document.getElementById("side-images")
// let mainImg = document.getElementById("main-img")
// sideImages.addEventListener("click" , function(e) {
//    if(e.target.src){
//     mainImg.src = e.target.src 
//    }
// })






// function getMalumotlar(content , data){
    
//   data.map((el) => {
//     content.innerHTML = `
//     <div class="flex gap-[20px] pt-[20px] items-center">
//                         <button class="font-normal text-[12px] text-[#414141] duration-800 hover:text-[#70C05B]"><a
//                                 href="./index.html">Главная</a></button>
//                         <img src="./img/chevron-right.svg" alt="">
//                         <p class="text-[#414141] text-[12px] duration-800 hover:text-[#70C05B] font-normal">Каталог</p>
//                         <img src="./img/chevron-right.svg" alt="">
//                         <p class="text-[#414141] text-[12px] ">${el.name}</p>
//                         <img src="./img/chevron-right.svg" alt="">
//                         <p class="text-[#8F8F8F] text-[12px] font-normal">${el.description}</p>
//                     </div>
//                     <p class="text-[#414141] text-[24px] mt-[15px] font-bold">${el.description}</p>
//                     <div class="flex items-center mt-[20px] gap-[40px]">
//                         <p>арт. 371431</p>
//                         <div class="flex items-center text-[14px] text-[#414141] gap-[10px] ">
//                             <div class="flex  items-center gap-[10px]">
//                                 ${
//                           el.rating === 5
//                             ? `
//                           <div class = "flex">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                         </div> `
//                             : el.rating === 4.5
//                             ? `
//                         <div class = "flex">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_half.svg" alt="">
//                         </div> `
//                             : el.rating === 4
//                             ? `
//                         <div class = "flex">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>`
//                             : el.rating === 3.5
//                             ? `
//                         <div class = "flex">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>`
//                             : el.rating === 3
//                             ? `
//                         <div class = "flex">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>`
//                             : el.rating === 2.5
//                             ? `
//                         <div class = "flex">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>`
//                             : el.rating === 2
//                             ? `
//                         <div class = "flex">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>`
//                             : el.rating === 1.5
//                             ? `
//                         <div class = "flex">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>`
//                             : el.rating === 1
//                             ? `
//                         <div class = "flex">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>`
//                             : el.rating === 0.5
//                             ? `
//                         <div class = "flex">
//                              <img class="ml-[6px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>`
//                             : el.rating ===
//                               0 `
//                         <div class = "flex hidden">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[6px]" src="../assets/stars/star_full.svg" alt="">
//                         </div>`
//                         }
                            
//                             <p class="decoration-solid underline">3 отзыва</p>
//                         </div>
//                         <div class="flex items-center text-[12px] ml-[30px] text-[#414141] gap-[10px] ">
//                             <img src="./img/share-2.svg" alt="">
//                             <p>Поделиться</p>
//                         </div>
//                         <div class="flex items-center ml-[30px] text-[12px] text-[#414141] gap-[10px] ">
//                             <img class="max-w-[24px] max-h-[24px] opacity-[50%] cursor-pointer duration-800 hover:opacity-[100%] w-full h-full" src="./assets/likes/white-like.svg"
//                                 alt="">
//                             <p>В избраное</p>
//                         </div>
//                     </div>`
// })  
// }
// getMalumotlar(malumot , malumotlar )


// function increasing(id){
//   cart = cart.map((item) => {
//     if(item.id === id){
//       item.numbers += 1
//     }
//     return item
//   })
//   localStorage.setItem("carts" , JSON.stringify(cart))
//   badge.textContent = cart.length;
//   getProducts(malumot, malumotlar);



// }
// function decreasing(id){
//   cart = cart.map((item) => {
//     if(item.id === id){
//       item.numbers -= 1
//     }
//     return item
//   });
//   let item = cart.find((el) => el.id === id)
//   if(item.numbers === 0){
//     cart = cart.filter((el) => el.id !== id)
//     badge.textContent = malumotlar.length; 
//   }
//   localStorage.setItem("carts" , JSON.stringify(cart))
//   getProducts(malumot, malumotlar);



// }

// URL dan id ni olish











 



let path = new URLSearchParams(location.search);
let singleCard = document.getElementById("single-card");
let malumot = document.getElementById("malumot");
// let pokupaleRanshe = document.getElementById("pokupaliRanshe");
// let novinki = document.getElementById("novinki");
let badge = document.getElementById("badge"); // Navbar'dagi korzina soni
let cart = JSON.parse(localStorage.getItem("carts") || "[]");
let id = parseInt(path.get("id")); // id ni raqamga aylantirish
let item = products.find((el) => el.id === id); // Bitta mahsulotni topish
let malumotlar = products.filter((el) => el.id === id); // Malumot uchun

// === MAHSULOT KARTASINI CHIZISH (rasmlar, narx, + / – tugmalar) ===
function renderSingleProduct(product) {
  singleCard.innerHTML = ""; // Avvalgi kontentni tozalash
  if (!product) return;

  singleCard.innerHTML = `
    <div class="flex object-cover gap-[10px] max-w-[50%] w-full">
      <!-- Yon rasmlar -->
      <div id="side-images" class="flex flex-col gap-[10px]">
        <img class="w-[86.4px] h-[86.4px] object-cover rounded-[5px] duration-800 hover:shadow-xl hover:shadow-[#0000001A]" src="${product.images[0]}" alt="">
        <img class="w-[86.4px] h-[86.4px] object-cover rounded-[5px] duration-800 hover:shadow-xl hover:shadow-[#0000001A]" src="${product.images[1]}" alt="">
        <img class="w-[86.4px] h-[86.4px] object-cover rounded-[5px] duration-800 hover:shadow-xl hover:shadow-[#0000001A]" src="${product.images[2]}" alt="">
        <img class="w-[86.4px] h-[86.4px] object-cover rounded-[5px] duration-800 hover:shadow-xl hover:shadow-[#0000001A]" src="${product.images[3]}" alt="">
      </div>
      
      <!-- Asosiy rasm -->
      
        <img id="main-img" class="h-[375.6px] max-w-[504px] w-full object-cover rounded-[5px]" src="${product.images[0]}" alt="">
        <div class="absolute w-[56px] h-[32px] rounded-sm bg-[#FF6633] flex justify-center items-center text-white text-[16px] font-normal left-[10px] top-[120px]">
          -${product.discount}%
        
      </div>
    </div>
   
    <!-- Narx va tugmalar -->
    <div class="w-[50%]">
      <div class="flex justify-between items-center">
        <div>
          <p class="font-normal text-[24px] text-[#606060]">${product.price} ₽</p>
          <p class="font-normal text-[12px] text-[#BFBFBF]">Обычная цена</p>
        </div>
        <div>
          <p class="font-bold text-[36px] text-[#414141]">
            ${(product.price - (product.price * product.discount) / 100).toFixed(2)} ₽
          </p>
          <div class="flex items-center gap-[10px]">
            <p class="font-normal text-[12px] text-[#BFBFBF]">С картой Северяночки</p>
            <img src="./ikkinchi_img/info.svg" alt="">
          </div>
        </div>
      </div>

      <!-- + / – yoki "Korzina" tugmasi -->
      ${
        cart.find((cartItem) => cartItem.id === product.id)
          ? `
          <div class="w-full grid grid-cols-3 mt-[10px]">
            <button onclick="decreasing(${product.id})" class="bg-red-500 text-white text-[28px] p-[10px] rounded-sm">-</button>
            <span class="text-[24px] flex items-center justify-center p-[10px] ">
              ${cart.find((cartItem) => cartItem.id === product.id).numbers}
            </span>
            <button onclick="increasing(${product.id})" class="bg-green-500 text-white text-[28px] p-[10px] rounded-sm">+</button>
          </div>
          `
          : `
          <div class="flex justify-center mt-[10px]">
            <button onclick="addToCart(${product.id})" class="w-[279px] h-[60px] bg-[#FF6633] text-white text-[24px] rounded-[5px] flex items-center justify-center gap-[15px]">
              <img class="w-[32px] h-[32px]" src="../img/shopping-white-cart.svg" alt="">
              В корзину
            </button>
          </div>
          `
      }
    </div>
  `;

  // Yon rasmlarni bosganda asosiy rasm o‘zgaradi
  let sideImages = document.getElementById("side-images");
  let mainImg = document.getElementById("main-img");
  sideImages.addEventListener("click", (e) => {
    if (e.target.src) {
      mainImg.src = e.target.src;
    }
  });
}

// === MAHSULOT HAQIDA MA'LUMOT (breadcrumb, sarlavha, reyting) ===
function getMalumotlar(content, data) {
  data.forEach((el) => {
    content.innerHTML = `
      <div class="flex gap-[20px] pt-[20px] items-center text-[12px]">
        <a href="./index.html" class="hover:text-[#70C05B] duration-800 ease-in-out">Главная</a>
        <img src="./img/chevron-right.svg" alt="">
        <a href="../katalog.html" class="hover:text-[#70C05B] duration-800 ease-in-out">Каталог</a>
        <img src="./img/chevron-right.svg" alt="">
        <span>${el.name}</span>
        
        <img src="./img/chevron-right.svg" alt="">
        <span class="text-[#8F8F8F]">${el.description}</span>
      </div>

      <p class="text-[#414141] text-[24px] mt-[15px] font-bold">${el.description}</p>

      <div class="flex items-center mt-[20px] gap-[40px] text-[14px]">
        <p>art. 371431</p>

        <div class="flex items-center gap-[10px]">
          ${getRatingStars(el.rating)}
          <a href="" class="underline">3 ta отзыва</a>
        </div>

        <div class="flex items-center gap-[10px] ml-[30px]">
          <img src="./img/share-2.svg" alt="">
          <span>Поделиться</span>
        </div>

        <div class="flex items-center gap-[10px] ml-[30px]">
          <img class="w-[24px] h-[24px] opacity-50 hover:opacity-100 duration-800 ease-in-out cursor-pointer" src="./assets/likes/white-like.svg" alt="">
          <span>В избраное</span>
        </div>
      </div>
    `;
  });
}

// Yulduzcha reytingini yaratish (DRY)
function getRatingStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<img class="w-[16px] h-[16px]" src="../assets/stars/star_full.svg" alt="">';
    } else if (i - 0.5 === rating) {
      stars += '<img class="w-[16px] h-[16px]" src="../assets/stars/star_half.svg" alt="">';
    } else {
      stars += '<img class="w-[16px] h-[16px]" src="../assets/stars/star_empty.svg" alt="">';
    }
  }
  return `<div class="flex gap-[2px]">${stars}</div>`;
}

// === KORZINAGA QO‘ShISH ===
function addToCart(id) {
  let product = products.find((el) => el.id === id);
  if (product && !cart.find((item) => item.id === id)) {
    product.numbers = 1;
    cart.push(product);
    localStorage.setItem("carts", JSON.stringify(cart));
    badge.textContent = cart.length;
    renderSingleProduct(item); // Tugma yangilanadi
  }
}

// === SONNI OSHIRISH ===
function increasing(id) {
  cart = cart.map((item) => {
    if (item.id === id) item.numbers += 1;
    return item;
  });
  localStorage.setItem("carts", JSON.stringify(cart));
  badge.textContent = cart.length;
  renderSingleProduct(item); // Sahifa qayta chiziladi
}

// === SONNI KAMAYTIRISH ===
function decreasing(id) {
  cart = cart.map((item) => {
    if (item.id === id) item.numbers -= 1;
    return item;
  });

  // 0 bo‘lsa o‘chirish
  cart = cart.filter((item) => item.numbers > 0);

  localStorage.setItem("carts", JSON.stringify(cart));
  badge.textContent = cart.length;
  renderSingleProduct(item); // Sahifa qayta chiziladi
}

// === SAHIFANI YUKLAGANDA ===
getMalumotlar(malumot, malumotlar);
renderSingleProduct(item);




window.addEventListener("load", function () {
  loading.classList.add("hidden");
});
