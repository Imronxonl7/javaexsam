function showCategories(content , data){
    content.innerHTML = ""
    data.map((el) => {
        content.innerHTML +=`
         <a href="../category-products.html?categoryName=${el.name}" class="flex items-center gap-[10px]">
            <img class="w-[40px] h-[40px] rounded-[50%] object-cover" src=${el.imageUrl} alt="">
            <p class="text-[#414141] text-[16px] font-bold duration-800 ease-in-out hover:text-[#FF6633]">
                ${el.name}</p>
        </a>`
    })
}
showCategories(categoryCards , categoriesData)