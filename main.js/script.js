const navbar = document.getElementById("navbar");
    let hasHidden = false;  // navbar yo‘qolganmi?
    let hasAppeared = false; // navbar chiqganmi?

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      // 1️⃣ Pastga biroz tushganda navbar tepada qoladi va yo‘qoladi
      if (scrollY > 40 && !hasHidden && !hasAppeared) {
        navbar.style.transform = "translateY(-100%)";
        hasHidden = true;
      }

      // 2️⃣ Yana biroz pastroqqa tushganda navbar pastdan chiqadi
      if (scrollY > 120 && hasHidden && !hasAppeared) {
        navbar.style.transform = "translateY(0)";
        hasAppeared = true; // endi u qoladi
      }
    });










let aksiya = document.getElementById("aksiya");
let like = document.getElementById("like-badge")
let badge = document.getElementById("badge")
let loading = document.getElementById("loading")

let cart = JSON.parse(localStorage.getItem("carts") || "[]");
let likeBadge = JSON.parse(localStorage.getItem("likes") || "[]");

localStorage.setItem("carts" , JSON.stringify(cart))
localStorage.setItem("likes" , JSON.stringify(like))

badge.textContent = cart.length
likeBadge.textContent = like.length
let discountProducts = products.filter((el) => el.discount > 0);
let discountLastFourProducts = discountProducts.slice( discountProducts.length - 4, discountProducts.length);
function getProducts(content, data) {
  content.innerHTML = "";
  data.map((el) => {
    content.innerHTML += `
                     <div
                      class="card hover:shadow-[#FF663333] duration-700 ease-in-out hover:shadow-xl relative rounded-sm max-w-[272px] w-full h-[350px] bg-[white]">
                         <div class="w-full h-[160px]">
                            <a href="../single-page.html?id=${el.id}">
                            <img class="w-full object-cover h-[160px] rounded-sm" src=${
                              el.images[0]
                            } alt="">
                            </a>
                             <div
                                 class="absolute w-[56px] h-[32px] rounded-sm bg-[#FF6633] flex justify-center items-center text-[white] text-[16px] font-normal left-[10px] top-[120px] ">
                                 -${el.discount}%</div>
                             <img
                             onClick = "addToLike(${el.id})"
                              class="absolute w-[34px] h-[34px] opacity-[50%] cursor-pointer right-[5px] duration-800 hover:opacity-[100%] top-[5px]" src="../assets/likes/white-like.svg" alt="">
                         </div>
                        <div class="flex items-center justify-between ml-[10px] mt-[10px] mr-[5px]">
                             <div class="">
                                 <p class="font-bold text-[18px] text-[#414141]">${
                                   el.price - (el.price * el.discount) / 100
                                 } ₽</p>
                                 <p class="font-normal text-[12px] text-[#BFBFBF]">С картой</p>
                             </div>
                            <div class="">
                                 <p class="font-normal text-[16px] line-through decoration-[#8F8F8F] decoration-[0.5px] text-[#606060]">${
                                   el.price
                                 } ₽</p>
                                 <p class="font-normal text-[12px] text-[#BFBFBF]">Обычная</p>
                             </div>
                         </div>
                         <p class="font-normal  line-clamp-2 text-[#414141] text-[16px] ml-[10px] mt-[5px] mr-[10px]">${
                           el.description
                         }</p>
                        ${
                          el.rating === 5
                            ? `
                          <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                        </div> `
                            : el.rating === 4.5
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                        </div> `
                            : el.rating === 4
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 3.5
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 3
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 2.5
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 2
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 1.5
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 1
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 0.5
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating ===
                              0 `
                        <div class = "flex hidden">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                        </div>`
                        }
                       ${
                         cart.find((item) => item.id === el.id)
                         ? `<div class="w-full grid grid-cols-3 mt-[5px]  ">
                        <button
                        onClick = "decreasing(${el.id})"
                         class = " ml-[5px] flex items-center justify-center p-[10px]   rounded-sm text-white text-[18px] bg-[red]">-</button> 
                        <span class =" text-[18px] flex items-center justify-center  p-[10px]">${cart.find((item) => item.id === el.id).numbers}</span>
                        <button
                        onClick = "increasing(${el.id})"
                        class=" mr-[5px] flex items-center justify-center p-[10px]  text-[18px] text-white rounded-sm bg-[green]">+</button>
                        </div>`: `<div class=" flex justify-center">
                            <button
                            onClick = "addToCart(${el.id})"
                                class=" w-[256px] h-[40px] mt-[10px] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633] duration-500 ease-in-out rounded-sm border-solid border-x border-y border-[#70C05B] text-[#70C05B]">В
                                корзину</button>
                        </div>`
                         
                        }
                    </div>
    `;
  });
}
getProducts(aksiya, discountLastFourProducts);


function addToCart(id){
  let item = products.find((el) => el.id === id)
  item.numbers = 1
  cart.push(item);
  badge.textContent = cart.length;
  localStorage.setItem("carts" , JSON.stringify(cart))
  getProducts(aksiya, discountLastFourProducts);
    getNovinki(novinki, novinkiProducts);
  getPokupaliRanshe(pokupaleRanshe , pokupaleRansheProducts )

}
function increasing(id){
  cart = cart.map((item) => {
    if(item.id === id){
      item.numbers += 1
    }
    return item
  })
  localStorage.setItem("carts" , JSON.stringify(cart))
  getProducts(aksiya, discountLastFourProducts);
    getNovinki(novinki, novinkiProducts);
  getPokupaliRanshe(pokupaleRanshe , pokupaleRansheProducts )


}
function decreasing(id){
  cart = cart.map((item) => {
    if(item.id === id){
      item.numbers -= 1
    }
    return item
  });
  let item = cart.find((el) => el.id === id)
  if(item.numbers === 0){
    cart = cart.filter((el) => el.id !== id)
    badge.textContent = cart.length; 
  }
  localStorage.setItem("carts" , JSON.stringify(cart))
  getProducts(aksiya, discountLastFourProducts);
  getNovinki(novinki, novinkiProducts);
  getPokupaliRanshe(pokupaleRanshe , pokupaleRansheProducts )


}
function addToLike(id){
  let likeItem = products.find((el) => el.id === id)
  like.push(likeItem);
  likeBadge.textContent = like.length
  localStorage.setItem("likes" , JSON.stringify(like))
  getProducts(aksiya, discountLastFourProducts);

}












let novinki = document.getElementById("novinki");
let novinkiProducts = products.filter(el => el.discount === 0).slice(10, 14);
// let novinkiFourProducts = novinkiProducts.slice(novinkiProducts.length - 4, novinkiProducts.length);
function getNovinki(content, data) {
  content.innerHTML = "";
  data.map((el) => {
    
    content.innerHTML += `
        <div
                        class="card  hover:shadow-[#FF663333] duration-700 ease-in-out hover:shadow-xl relative rounded-sm w-[272px] h-[350px] bg-[white]">
                        <div class="w-full">
                            <a href="../single-page.html?id=${el.id}">
                            <img class=" w-full object-cover h-[160px] rounded-sm" src=${
                              el.images[0]
                            } alt="">
                            </a>

                           <img
                             onClick = "addToLike(${el.id})"
                              class="absolute w-[34px] h-[34px] opacity-[50%] cursor-pointer right-[5px] duration-800 hover:opacity-[100%] cursor-pointer top-[5px]" src="../assets/likes/white-like.svg" alt="">
                        </div>
                        <div class="flex items-center justify-between ml-[10px] mt-[10px] mr-[5px]">
                            <div class="">
                                <p class="font-bold text-[18px] text-[#414141]">${
                                  el.price
                                } ₽</p>

                            </div>

                        </div>
                        <p class="font-normal text-[#414141] text-[16px] ml-[10px] mt-[20px] mr-[10px] line-clamp-2">${
                          el.description
                        }</p>
                        ${
                          el.rating === 5
                            ? `
                          <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                        </div> `
                            : el.rating === 4.5
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                        </div> `
                            : el.rating === 4
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 3.5
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 3
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 2.5
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 2
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 1.5
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 1
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating === 0.5
                            ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`
                            : el.rating ===
                              0`
                        <div class = "flex hidden">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                        </div>`
                        }
                        ${
                         cart.find((item) => item.id === el.id)
                         ? `<div class="w-full grid grid-cols-3 mt-[5px]  ">
                        <button
                        onClick = "decreasing(${el.id})"
                         class = " ml-[5px] flex items-center justify-center p-[10px]   rounded-sm text-white text-[18px] bg-[red]">-</button> 
                        <span class =" text-[18px] flex items-center justify-center  p-[10px]">${cart.find((item) => item.id === el.id).numbers}</span>
                        <button
                        onClick = "increasing(${el.id})"
                         class=" mr-[5px] flex items-center justify-center p-[10px]  text-[18px] text-white rounded-sm bg-[green]">+</button>
                        </div>`: `<div class=" flex justify-center">
                            <button
                            onClick = "addToCart(${el.id})"
                                class=" w-[256px] h-[40px] mt-[10px] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633] duration-500 ease-in-out rounded-sm border-solid border-x border-y border-[#70C05B] text-[#70C05B]">В
                                корзину</button>
                        </div>`
                         
                        }
                    </div>`;
  });
}
getNovinki(novinki, novinkiProducts);









let pokupaleRanshe = document.getElementById("pokupaliRanshe");
let pokupaleRansheProducts = products.filter(el => el.discount === 0).slice(4, 8);
// let pokupaleRansheFourProducts = pokupaleRansheProducts.slice(pokupaleRansheProducts.length - 4 , pokupaleRansheProducts.length)
function getPokupaliRanshe(content, data) {
  content.innerHTML = "";
  data.map((el) => {
    
    content.innerHTML += `
        <div
                         class="card hover:shadow-[#FF663333] duration-700 ease-in-out hover:shadow-xl relative rounded-sm w-[272px] h-[350px] bg-[white]">
                       <div class="w-full">
                             <a href="../single-page.html?id=${el.id}">
                            <img class=" w-full object-cover h-[160px] rounded-sm" src=${
                              el.images[0]
                            } alt="">
                            </a>

                             <img
                             onClick = "addToLike(${el.id})"
                              class="absolute w-[34px] h-[34px] opacity-[50%] cursor-pointer right-[5px] duration-800 hover:opacity-[100%] cursor-pointer top-[5px]" src="../assets/likes/white-like.svg" alt="">
                         </div>
                         <div class="flex items-center justify-between ml-[10px] mt-[10px] mr-[5px]">
                             <div class="">
                                 <p class="font-bold text-[18px] text-[#414141]">${el.price} ₽</p>

                             </div>

                         </div>
                         <p class="font-normal text-[#414141] line-clamp-2 text-[16px] ml-[10px] mt-[20px] mr-[10px]">${el.description}</p>
                         ${
                          el.rating === 5 ? `
                          <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                        </div> ` : el.rating === 4.5 ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                        </div> ` : el.rating === 4 ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>` : el.rating === 3.5 ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>` : el.rating === 3 ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>` : el.rating === 2.5 ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>`: el.rating === 2 ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>` : el.rating === 1.5 ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>` : el.rating === 1 ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>` : el.rating === 0.5 ? `
                        <div class = "flex">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
                        </div>` : el.rating === 0 `
                        <div class = "flex hidden">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                             <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
                        </div>`
                        }
                        ${
                         cart.find((item) => item.id === el.id)
                         ? `<div class="w-full grid grid-cols-3 mt-[5px]  ">
                        <button
                        onClick = "decreasing(${el.id})"
                         class = " ml-[5px] flex items-center justify-center p-[10px]   rounded-sm text-white text-[18px] bg-[red]">-</button> 
                        <span class =" text-[18px] flex items-center justify-center  p-[10px]">${cart.find((item) => item.id === el.id).numbers}</span>
                        <button
                        onClick = "increasing(${el.id})"
                         class=" mr-[5px] flex items-center justify-center p-[10px]  text-[18px] text-white rounded-sm bg-[green]">+</button>
                        </div>`: `<div class=" flex justify-center">
                            <button
                            onClick = "addToCart(${el.id})"
                                class=" w-[256px] h-[40px] mt-[10px] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633] duration-500 ease-in-out rounded-sm border-solid border-x border-y border-[#70C05B] text-[#70C05B]">В
                                корзину</button>
                        </div>`
                         
                        }

                    </div>`;
  });
}
getPokupaliRanshe(pokupaleRanshe , pokupaleRansheProducts )


window.addEventListener("load", function () {
  loading.classList.add("hidden");
});




