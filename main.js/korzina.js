// let aksiyaCards = document.getElementById("aksiya-cards");
// let aksiyaProducts = JSON.parse(localStorage.getItem("carts") || "[]");
// function getProducts(content, data) {
//   content.innerHTML = "";
//   data.map((el) => {
//     content.innerHTML += `
//                      <div
//                       class="card flex justify-between relative w-[876px]  h-[90px] bg-[#FFFFFF] shadow-xl shadow-[#0000001A0] duration-800 hover:shadow-xl hover:shadow-[#FF663333]">
//                        <div
//                             class="absolute top-[-8px] left-[10px] w-[24px] h-[24px] bg-[white] hover:bg-[#70C05B] hover:border-[#70C05B] duration-800 ease-in-out rounded-sm border-solid border-x border-y outline-none border-[#BFBFBF] flex justify-center items-center">
//                             <img src="./ikkinchi_img/ptechka.svg" alt="">

//                         </div>
//                         <img
//                              onClick = "addToLike(${el.id})"
//                               class=" w-[24px] h-[24px]  absolute opacity-[50%] cursor-pointer left-[55px] duration-800 hover:opacity-[100%] cursor-pointer top-[5px]" src="../assets/likes/white-like.svg" alt="">
//                         <div>
//                          <div class="w-full flex  h-[60px]">
//                             <img class="w-full max-w-[80px] object-cover h-[60px] mbx rounded-sm" src=${
//                               el.images[0]
//                             } alt="">

//                             <div>
//                             <p class="font-normal  line-clamp-1 text-[#414141] max-w-[536px] w-full text-[16px] ml-[10px] mt-[5px] mr-[10px]">${
//                               el.description
//                             }</p>
//                            <div class="text-[14px]  flex items-center ml-[10px] gap-[10px]">
//                             <div class="flex flex-col">
//                                         <p class="text-[#414141] font-bold">${
//                                           el.price -
//                                           (el.price * el.discount) / 100
//                                         } ₽</p>
//                                         <p class="text-[12px] text-[#BFBFBF] font-normal">С картой</p>
//                                     </div>

//                              <div class="flex flex-col">
//                                         <p class="text-[12px] text-[#606060] ml-[10px] font-normal">${
//                                           el.price
//                                         } ₽</p>
//                                         <p class="text-[12px] text-[#BFBFBF] font-normal">Обычная</p>

//                                     </div>
//                              <div class="flex gap-[10px]">
//                                         <p class="text-[#606060] font-normal">за шт.</p>
//                                         <div
//                                             class="bg-[#FF6633] text-[white] text-[16px] font-normal flex justify-center items-center w-[53px] h-[32px] rounded-sm">
//                                             ${el.discount}%</div>
//                               </div>
//                               </div>
//                             </div>
//                           </div>
//                          </div>

//                        ${
//                          aksiyaProducts.find((item) => item.id === el.id)
//                            ? `
//                            <div class=" flex items-center gap-[50px]  ">
//                            <div class=" flex items-center justify-evenly mb-[30px] bg-[#70C05B] w-[100px] h-[40px] rounded-sm grid grid-cols-3 mt-[5px]  ">

//                         <button
//                         onClick = "decreasing(${el.id})"
//                          class = " ml-[5px] flex items-center justify-center p-[10pflex items-center justifyx] w-[24px] h-[24px]  rounded-sm text-white text-[18px] ">-</button>
//                         <span class =" text-[16px] font-normal -center text-white  p-[10px]">${
//                           aksiyaProducts.find((item) => item.id === el.id)
//                             .numbers
//                         }</span>
//                         <button
//                         onClick = "increasing(${el.id})"
//                         class=" mr-[5px] flex items-center justify-center p-[10px] w-[24px] h-[24px] text-[18px] text-white rounded-sm ">+</button>

//                         </div>
//                         <div class="mb-[30px] ">
//                                 <p class="text-[18px] text-[#414141] mr-[5px] font-bold">80,10 ₽</p>
//                                 <p
//                                     class="text-[16px] text-[#8F8F8F] ml-[8px] line-through decoration-[#8F8F8F] decoration-[0.5px]  font-normal">
//                                     89,00 ₽</p>
//                             </div>
//                           </div>`
//                            : `<div class=" flex justify-center">
//                             <button
//                             onClick = "addToCart(${el.id})"
//                                 class=" w-[256px] h-[40px] mt-[10px] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633] duration-500 ease-in-out rounded-sm border-solid border-x border-y border-[#70C05B] text-[#70C05B]">В
//                                 корзину</button>
//                         </div>`
//                        }
//                     </div>
//     `;
//   });
// }
// {
//   /* <div class="bola flex justify-between relative w-[876px]  h-[90px] bg-[#FFFFFF] shadow-xl shadow-[#0000001A0] duration-800 hover:shadow-xl hover:shadow-[#FF663333] ">
//                         <div
//                             class="absolute top-[-8px] left-[10px] w-[24px] h-[24px] bg-[white] hover:bg-[#70C05B] hover:border-[#70C05B] duration-800 ease-in-out rounded-sm border-solid border-x border-y outline-none border-[#BFBFBF] flex justify-center items-center">
//                             <img src="./ikkinchi_img/ptechka.svg" alt="">
//                         </div>
//                         <div class="flex items-center gap-[10px]">
//                             <img class="mb-[25px] ml-[-2px]" src="./ikkinchi_img/Item.svg" alt="">
//                             <div class="">
//                                 <p class="text-[16px] text-[#414141] font-normal">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
//                                 </p>
//                                 <div class="text-[12px] flex items-center   gap-[10px]">
//                                     <div class="flex flex-col">
//                                         <p class="text-[#414141] font-bold">44,50 ₽</p>
//                                         <p class="text-[12px] text-[#BFBFBF] font-normal">С картой</p>
//                                     </div>

//                                     <div class="flex flex-col">
//                                         <p class="text-[12px] text-[#606060] ml-[10px] font-normal">50,50 ₽</p>
//                                         <p class="text-[12px] text-[#BFBFBF] font-normal">Обычная</p>

//                                     </div>
//                                     <div class="flex gap-[10px]">
//                                         <p class="text-[#606060] font-normal">за шт.</p>
//                                         <div
//                                             class="bg-[#FF6633] text-[white] text-[16px] font-normal flex justify-center items-center w-[53px] h-[32px] rounded-sm">
//                                             -10%</div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>

//                         <div class="flex items-center gap-[50px]">
//                             <div class="flex items-center justify-evenly bg-[#70C05B] w-[100px] h-[40px] rounded-sm ">
//                                 <button class="w-[24px] h-[24px] flex items-center justify-center"><img
//                                         src="./ikkinchi_img/minus.svg" alt=""></button>
//                                 <button class=" text-[white] text-[16px] font-normal w-[24px] h-[24px]">2</button>
//                                 <button class="flex justify-center items-center w-[24px] h-[24px] "><img
//                                         src="./ikkinchi_img/plus.svg" alt=""></button>
//                             </div>
//                             <div class="mb-[30px] ">
//                                 <p class="text-[18px] text-[#414141] mr-[5px] font-bold">80,10 ₽</p>
//                                 <p
//                                     class="text-[16px] text-[#8F8F8F] ml-[8px] line-through decoration-[#8F8F8F] decoration-[0.5px]  font-normal">
//                                     89,00 ₽</p>
//                             </div>
//                         </div>
//                     </div> */
// }

// getProducts(aksiyaCards, aksiyaProducts);
// function increasing(id) {
//   aksiyaProducts = aksiyaProducts.map((item) => {
//     if (item.id === id) {
//       item.numbers += 1;
//     }
//     return item;
//   });
//   localStorage.setItem("carts", JSON.stringify(aksiyaProducts));
//   getProducts(aksiyaCards, aksiyaProducts);
// }
// function decreasing(id) {
//   aksiyaProducts = aksiyaProducts.map((item) => {
//     if (item.id === id) {
//       item.numbers -= 1;
//     }
//     return item;
//   });
//   let item = aksiyaProducts.find((el) => el.id === id);
//   if (item.numbers === 0) {
//     aksiyaProducts = aksiyaProducts.filter((el) => el.id !== id);
//     badge.textContent = aksiyaProducts.length;
//   }
//   localStorage.setItem("carts", JSON.stringify(aksiyaProducts));
//   getProducts(aksiyaCards, aksiyaProducts);
// }
let aksiyaCards = document.getElementById("aksiya-cards");
let ongtaraf = document.getElementById("ongtaraf")
let aksiyaProducts = JSON.parse(localStorage.getItem("carts") || "[]");
let ongtarafProducts = JSON.parse(localStorage.getItem("carts") || "[]");
// let badge = document.getElementById("badge");
function formatPrice(price) {
  return price.toFixed(2).replace(".", ",");
}

function getProducts(content, data) {
  content.innerHTML = "";
  if (data.length === 0) {
    content.innerHTML = `<p class="text-[#8F8F8F] text-[18px] font-normal">В корзине пока нет товаров</p>`;
    badge.textContent = 0;
    return;
  }

  badge.textContent = data.length;

  data.map((el) => {
    let cardPrice = el.price - (el.price * el.discount) / 100;
    let totalPrice = cardPrice * el.numbers;
    let totalOldPrice = el.price * el.numbers;
    content.innerHTML += `
                      <div
                       class="card flex justify-between relative w-[876px]  h-[90px] bg-[#FFFFFF] shadow-xl shadow-[#0000001A0] duration-800 hover:shadow-xl hover:shadow-[#FF663333]">
                        <div
                             class="absolute top-[-8px] left-[10px] w-[24px] h-[24px] bg-[white] hover:bg-[#70C05B] hover:border-[#70C05B] duration-800 ease-in-out rounded-sm border-solid border-x border-y outline-none border-[#BFBFBF] flex justify-center items-center">
                             <img src="./ikkinchi_img/ptechka.svg" alt="">
                            
                         </div>
                         <img
                              onClick = "addToLike(${el.id})"
                               class=" w-[24px] h-[24px]  absolute opacity-[50%] cursor-pointer left-[55px] duration-800 hover:opacity-[100%] cursor-pointer top-[5px]" src="../assets/likes/white-like.svg" alt="">
                         <div>
                          <div class="w-full flex  h-[60px]">
                             <img class="w-full max-w-[80px] object-cover h-[60px] mbx rounded-sm" src=${
                               el.images[0]
                             } alt="">
                            
                            <div>
                            <p class="font-normal  line-clamp-1 text-[#414141] max-w-[536px] w-full text-[16px] ml-[10px] mt-[5px] mr-[10px]">${
                              el.description
                            }</p>
                           <div class="text-[14px]  flex items-center ml-[10px] gap-[10px]">
                            <div class="flex flex-col">
                                        <p class="text-[#414141] font-bold">${formatPrice(cardPrice)} ₽</p>
                                        <p class="text-[12px] text-[#BFBFBF] font-normal">С картой</p>
                                    </div>
                           
                         
                             <div class="flex flex-col">
                                        <p class="text-[12px] text-[#606060] ml-[10px] font-normal">${
                                          el.price
                                        } ₽</p>
                                        <p class="text-[12px] text-[#BFBFBF] font-normal">Обычная</p>

                                    </div>
                             <div class="flex gap-[10px]">
                                        <p class="text-[#606060] font-normal">за шт.</p>
                                        <div
                                            class="bg-[#FF6633] text-[white] text-[16px] font-normal flex justify-center items-center w-[53px] h-[32px] rounded-sm">
                                            ${el.discount}%</div>
                              </div>
                              </div>
                            </div>
                          </div>
                         </div>
                        
                       ${
                         aksiyaProducts.find((item) => item.id === el.id)
                           ? `
                           <div class=" flex items-center gap-[50px]  ">
                           <div class=" flex items-center justify-evenly mb-[30px] bg-[#70C05B] w-[100px] h-[40px] rounded-sm grid grid-cols-3 mt-[5px]  ">
                          
                        <button
                        onClick = "decreasing(${el.id})"
                         class = " ml-[5px] flex items-center justify-center p-[10pflex items-center justifyx] w-[24px] h-[24px]  rounded-sm text-white text-[18px] ">-</button> 
                        <span class =" text-[16px] font-normal -center text-white  p-[10px]">${
                          aksiyaProducts.find((item) => item.id === el.id)
                            .numbers
                        }</span>
                        <button
                        onClick = "increasing(${el.id})"
                        class=" mr-[5px] flex items-center justify-center p-[10px] w-[24px] h-[24px] text-[18px] text-white rounded-sm ">+</button>
                        
                        </div>
                        <div class="mb-[30px] ">
                                <p class="text-[18px] text-[#414141] mr-[5px] font-bold">${formatPrice(totalPrice)} ₽</p>
                                <p
                                    class="text-[16px] text-[#8F8F8F] ml-[8px] line-through decoration-[#8F8F8F] decoration-[0.5px]  font-normal">
                                    ${formatPrice(totalOldPrice)} ₽</p>
                            </div>
                          </div>`
                           : `<div class=" flex justify-center">
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

getProducts(aksiyaCards, aksiyaProducts);

function increasing(id) {
  aksiyaProducts = aksiyaProducts.map((item) => {
    if (item.id === id) {
      item.numbers += 1;
    }
    return item;
  });
  localStorage.setItem("carts", JSON.stringify(aksiyaProducts));
  getProducts(aksiyaCards, aksiyaProducts);
  getOngtaraf();
}

function decreasing(id) {
  aksiyaProducts = aksiyaProducts.map((item) => {
    if (item.id === id) {
      item.numbers -= 1;
    }
    return item;
  });
  let item = aksiyaProducts.find((el) => el.id === id);
  if (item && item.numbers <= 0) {
    aksiyaProducts = aksiyaProducts.filter((el) => el.id !== id);
  }
  localStorage.setItem("carts", JSON.stringify(aksiyaProducts));
  getProducts(aksiyaCards, aksiyaProducts);
  getOngtaraf();
} 
function getOngtaraf() {
  let carts = JSON.parse(localStorage.getItem("carts") || "[]");
  let jamiMahsulotlar = 0;
  let jamiNarx = 0;
  let jamiChegirma = 0;

  carts.forEach((el) => {
    let chegirmaliNarx = el.price - (el.price * el.discount) / 100
    jamiMahsulotlar += el.numbers;
    jamiNarx += el.price * el.numbers;
    jamiChegirma += ((el.price - chegirmaliNarx) * el.numbers)
  });
  let yakuniyNarx = jamiNarx - jamiChegirma;

  document.getElementById("ongtaraf").innerHTML = `
  <div class="ongtaraf mr-[100px] flex flex-col w-[272px] h-[420px] ">
                        <div class="flex gap-[10px]  items-center">
                            <label class="relative inline-block cursor-pointer">
                                <input type="checkbox" class="sr-only peer" />

                                <div
                                    class="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-[#70C05B] transition-colors">
                                </div>

                                <div
                                    class="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow-sm transform peer-checked:translate-x-6 transition-transform">
                                </div>
                            </label>

                            <p class="text-[#414141] text-[16px] font-normal">Списать 200 ₽ </p>
                        </div>
                        <p class="text-[16px] mt-[20px] text-[#8F8F8F] font-normal">На карте накоплено 200 ₽ </p>
                        <img class="w-full mt-[25px] mb-[25px]" src="./ikkinchi_img/Rectangle 6255.svg" alt="">
                        <div class="flex justify-between items-center">
                            <p class="text-[#8F8F8F] text-[16px] font-normal">${jamiMahsulotlar} товара</p>
                            <p class="text-[#414141] text-[16px] font-normal">${jamiNarx} ₽ </p>
                        </div>
                        <div class="flex justify-between mt-[10px] items-center">
                            <p class="text-[16px] text-[#8F8F8F] font-normal">Скидка</p>
                            <p class="text-[#FF6633] text-[16px] font-bold">-${formatPrice(jamiChegirma)} ₽</p>
                        </div>
                        <img class="w-full mt-[25px] mb-[25px]" src="./ikkinchi_img/Rectangle 6255.svg" alt="">
                        <div class="flex justify-between items-center">
                            <p class="text-[16px] text-[#8F8F8F] font-normal">Итог</p>
                            <p class="text-[24px] text-[#414141] font-bold">${formatPrice(yakuniyNarx)} ₽</p>
                        </div>
                        <div class="flex justify-center mt-[10px] items-center gap-[10px]">
                            <img src="./ikkinchi_img/smile.svg" alt="">
                            <p class="text-[10px] text-[#70C05B] font-normal">Вы получяете <span
                                    class="text-[12px] text-[#70C05B] font-bold"> 100 бонусов</span> </p>
                        </div>
                        <div class="flex justify-center mt-[25px]">
                            <p
                                class="w-[214px] h-[24px] rounded-sm bg-[#D80000] text-[12px] text-[white] font-normal flex justify-center items-center">
                                Минимальная сумма заказа 1000р</p>
                        </div>

                        <button
                            class="w-full mt-[10px] h-[60px] bg-[#FCD5BA] text-[#FF6633] text-[24px] font-normal flex justify-center items-center rounded-sm">Оформить
                            заказ</button>

                    </div>`
}
getOngtaraf()


window.addEventListener("load", function () {
  loading.classList.add("hidden");
});
