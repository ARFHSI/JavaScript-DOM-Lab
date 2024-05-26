// 1-عنصر من h1 يتم استهدافه باستخدام اسم class ويتم تغيير لون الخط ولون الخلفيه له عن طريق جافاسكربت.

let class1 = document.getElementById("class1")
class1.innerHTML = `<h2 style="background-color: blue; color: aliceblue;" >hello me</h2>
`


// 2-عنصر من نوع p يتم استهدافه باستخدام اسم الid ويكون خطه عريض ويتم استهداف 
// class في الcss متكون من لون الخط ولون خلفيه للبرقراف عن طريق جافاسكربت والclass مكتوب في ملف css
let class2 = document.getElementById("class2")
class2.innerHTML = `<p style="font-weight: bold;">nimi quaerat 
repudiandae at!</p>`



// 3-عنصر من نوع img يتم استهدافه عن طريق اسم التاق. ويتم تمرير قيمه الsrc من خلال الجافاسكربت
let imageElement = document.getElementsByTagName("img")[0];
imageElement.src = "mustang.png";


//4-عنصر يكون ul يتم استهدافه عن طريق الكويري سيلكتور يتم كتابه 3 من الli عن طريق الجافاسكربت ويكون لها لون خط وبوردر ويتم عرض اللسته بالعرض.
let list =document.querySelector("ul")
console.log(list)
for(let i = 0 ; i < 3 ; i++){
    let item = document.createElement("li")

    item.innerText = `item ${i}`
    list.appendChild(item)
    list.style.border = `1px solid black`
    list.style.color = `yellow`
}
console.log(item)


