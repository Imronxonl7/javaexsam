
// const navbar = document.getElementById("navbar");
//     let hasHidden = false;  // navbar yo‘qolganmi?
//     let hasAppeared = false; // navbar chiqganmi?

//     window.addEventListener("scroll", () => {
//       const scrollY = window.scrollY;

//       // 1️⃣ Pastga biroz tushganda navbar tepada qoladi va yo‘qoladi
//       if (scrollY > 40 && !hasHidden && !hasAppeared) {
//         navbar.style.transform = "translateY(-100%)";
//         hasHidden = true;
//       }

//       // 2️⃣ Yana biroz pastroqqa tushganda navbar pastdan chiqadi
//       if (scrollY > 120 && hasHidden && !hasAppeared) {
//         navbar.style.transform = "translateY(0)";
//         hasAppeared = true; // endi u qoladi
//       }
//     });

    


// let cardsaksiya = document.getElementsByClassName("cards")

// let aksiyaCards = document.getElementById("aksiya")
// let cart = JSON.parse(localStorage.getItem("newShowDiscount") || "[]");
// let badge = document.getElementById("badge")
// localStorage.setItem("newShowDiscount" , JSON.stringify(cart))


// badge.textContent = cart.length;
// let showDiscount = products.filter((el) => Number(el.discount) > 0)
// console.log(products);
// let newShowDiscount = showDiscount.splice(showDiscount.length - 4 , showDiscount.length - 5)
// function getDiscount(content ,data){
//    data.map((el) => { 
// content.innerHTML += `
//                     <div
//                         class="card hover:shadow-[#FF663333] duration-700 ease-in-out hover:shadow-xl relative rounded-sm w-[272px] h-[350px] bg-[white]">
//                         <div class="w-full h-[160px">
//                             <img class="w-full object-cover h-[160px] rounded-sm" src=${el.images[0]} alt="">
//                             <div
//                                 class="absolute w-[56px] h-[32px] rounded-sm bg-[#FF6633] flex justify-center items-center text-[white] text-[16px] font-normal left-[10px] top-[120px] ">
//                                 -${el.discount}%</div>
//                             <img class="absolute right-[10px] top-[10px]" src="./img/yurakcha.svg" alt="">
//                         </div>

//                         <div class="flex items-center justify-between ml-[10px] mt-[10px] mr-[5px]">
//                             <div class="">
//                                 <p class="font-bold text-[18px] text-[#414141]">${el.price - el.price * el.discount / 100} ₽</p>
//                                 <p class="font-normal text-[12px] text-[#BFBFBF]">С картой</p>
//                             </div>
//                             <div class="">
//                                 <p class="font-normal text-[16px] line-through decoration-[#8F8F8F] decoration-[0.5px] text-[#606060]">${el.price} ₽</p>
//                                 <p class="font-normal text-[12px] text-[#BFBFBF]">Обычная</p>
//                             </div>
//                         </div>
//                         <p class="font-normal  line-clamp-2 text-[#414141] text-[16px] ml-[10px] mt-[5px] mr-[10px]">${el.description}</p>
//                         ${
//                           el.rating === 5 ? `
//                           <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                         </div> ` : el.rating === 4.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                         </div> ` : el.rating === 4 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 3.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 3 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 2.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>`: el.rating === 2 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 1.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 1 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 0.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 0 `
//                         <div class = "flex hidden">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                         </div>`
//                         }
//                         ${
//                          cart.find((item) => item.id === el.id)
//                          ? `<div class="flex items-center mt-[5px]  max-w-[256px] w-full h-[40px] ">
//                         <button class = "text-center w-[95px] h-[40px] rounded-sm text-white text-[28px] bg-[red]">-</button> 
//                         <span class ="w-[66px] text-[28px] h-[40px] text-center">1</span>
//                         <button class="w-[95px] h-[40px] text-[24px] text-white rounded-sm bg-[green]">+</button>
//                         </div>`: `<div class=" flex justify-center">
//                             <button
//                             onClick = "addToCart(${el.id})"
//                                 class=" w-[256px] h-[40px] mt-[10px] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633] duration-500 ease-in-out rounded-sm border-solid border-x border-y border-[#70C05B] text-[#70C05B]">В
//                                 корзину</button>
//                         </div>`
                         
//                         }
//                     </div>
// `
// })  
// }
// getDiscount(aksiyaCards , newShowDiscount)



// let novinkiCards = document.getElementById("novinki")
// let lenzTogirlash = products.splice(products.length - 4 , products.length - 10)

// lenzTogirlash.map((el) =>{
//   novinkiCards.innerHTML += ` <div
//                         class="card  hover:shadow-[#FF663333] duration-700 ease-in-out hover:shadow-xl relative rounded-sm w-[272px] h-[350px] bg-[white]">
//                         <div class="w-full">
//                             <img class=" w-full object-cover h-[160px] rounded-sm" src=${el.images[1]} alt="">

//                             <img class="absolute right-[10px] top-[10px]" src="./img/yurakcha.svg" alt="">
//                         </div>
//                         <div class="flex items-center justify-between ml-[10px] mt-[10px] mr-[5px]">
//                             <div class="">
//                                 <p class="font-bold text-[18px] text-[#414141]">${el.price} ₽</p>

//                             </div>

//                         </div>
//                         <p class="font-normal text-[#414141] text-[16px] ml-[10px] mt-[20px] mr-[10px] line-clamp-2">${el.description}</p>
//                         ${
//                           el.rating === 5 ? `
//                           <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                         </div> ` : el.rating === 4.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                         </div> ` : el.rating === 4 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 3.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 3 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 2.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>`: el.rating === 2 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 1.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 1 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 0.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 0 `
//                         <div class = "flex hidden">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                         </div>`
//                         }
//                         <div class=" flex justify-center">
//                             <button
//                                 class="w-[256px] h-[40px] mt-[10px] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633] duration-500 ease-in-out rounded-sm border-solid border-x border-y border-[#70C05B] text-[#70C05B]">В
//                                 корзину</button>
//                         </div>

//                     </div>
//                     `
// })


// let pokupaleRanshe = document.getElementById("pokupaliRanshe")
// let newpokupaliRanshe = products.splice(products.length - 4 , products.length - 20)

// newpokupaliRanshe.map((el) => {
//   pokupaleRanshe.innerHTML += `
//   <div
//                         class="card hover:shadow-[#FF663333] duration-700 ease-in-out hover:shadow-xl relative rounded-sm w-[272px] h-[350px] bg-[white]">
//                         <div class="w-full">
//                             <img class="w-full object-cover h-[160px] rounded-sm" src=${el.images[0]} alt="">

//                             <img class="absolute right-[10px] top-[10px]" src="./img/yurakcha.svg" alt="">
//                         </div>
//                         <div class="flex items-center justify-between ml-[10px] mt-[10px] mr-[5px]">
//                             <div class="">
//                                 <p class="font-bold text-[18px] text-[#414141]">${el.price} ₽</p>

//                             </div>

//                         </div>
//                         <p class="font-normal text-[#414141] line-clamp-2 text-[16px] ml-[10px] mt-[20px] mr-[10px]">${el.description}</p>
//                         ${
//                           el.rating === 5 ? `
//                           <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                         </div> ` : el.rating === 4.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                         </div> ` : el.rating === 4 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 3.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 3 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 2.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>`: el.rating === 2 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 1.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 1 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 0.5 ? `
//                         <div class = "flex">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_half.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_empty.svg" alt="">
//                         </div>` : el.rating === 0 `
//                         <div class = "flex hidden">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                              <img class="ml-[8px] mt-[10px]" src="../assets/stars/star_full.svg" alt="">
//                         </div>`
//                         }
//                         <div class=" flex justify-center">
//                             <button
//                                 class="w-[256px] h-[40px] mt-[10px] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633] duration-500 ease-in-out rounded-sm border-solid border-x border-y border-[#70C05B] text-[#70C05B]">В
//                                 корзину</button>
//                         </div>

//                     </div>
//                     `
// })




// function addToCart(id){
//      let item = products.find((el) => el.id === id)
//      cart.push(item);
//      badge.textContent = cart.length
//      localStorage.setItem("newShowDiscount" , JSON.stringify(cart))
//     getDiscount(aksiyaCards , newShowDiscount)
      

// }






























//  ${
//                           cart.find((item) => item.id === el.id)
//                             ? `<div class="flex items-center mt-[5px]  max-w-[256px] w-full h-[40px] ">
//                         <button class = "text-center w-[95px] h-[40px] rounded-sm text-white text-[28px] bg-[red]">-</button> 
//                         <span class ="w-[66px] text-[28px] h-[40px] text-center">1</span>
//                         <button class="w-[95px] h-[40px] text-[24px] text-white rounded-sm bg-[green]">+</button>
//                         </div>`
//                             : `<div class=" flex justify-center">
//                             <button
//                             onClick = "addToCart(${el.id})"
//                                 class=" w-[256px] h-[40px] mt-[10px] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633] duration-500 ease-in-out rounded-sm border-solid border-x border-y border-[#70C05B] text-[#70C05B]">В
//                                 корзину</button>
//                         </div>`
//                         }


//  onClick = "addToCart(${el.id})"