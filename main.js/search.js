let input = document.getElementById("input");
let search = document.getElementById("search")



input.addEventListener("input" , function(e){
    let searchValue = e.target.value;
    if(searchValue){
        search.classList.remove("hidden");
    }else{
        search.classList.add("hidden")
    }
    let searchedproducts = products.filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()))
    search.innerHTML = "";

    searchedproducts.length > 0 ? 
    searchedproducts.map((el) => {
        search.innerHTML +=  `
                            <div class="flex w-full  rounded-sm border-solid border-x border-y border-[green] p-[5px] gap-[15px]">
                                <img  class="object-cover h-[60px] w-[80px] rounded-sm " src=${el.images[1]} alt="">
                                <div class="flex flex-col gap-[-5px]">
                                    <h1 class="text-[20px] text-[#414141] font-bold">${el.name}</h1>
                                    <p class="text-[14px] text-[#414141] line-clamp-1 font-normal">${el.description}</p>
                                </div>
                            </div>
                            
                        </div>
        `
    }) : search.innerHTML = `
       <p class="text-[14px] text-[#414141] font-normal">такого товара не существует</p>
    `
    
});

