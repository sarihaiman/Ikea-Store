
const div1 = document.getElementById('div1');
div1.classList = "div1";
const div2 = document.getElementById('div2');
div2.classList = "div2";
const input = document.createElement('input');



const nav = function () {
    input.type = 'search';
    input.classList = "input";

    const imgg = document.createElement('img');
    imgg.src = "/assets/logo.svg";
    imgg.classList = "img";
    const aaimg = document.createElement('a');
    aaimg.href="../../pages/home/home.html";
    div1.appendChild(aaimg);
    aaimg.appendChild(imgg);

    //יצירת האיש
    const icontopnav = document.createElement('i');
    icontopnav.classList = "icontopnav";
    icontopnav.classList.add("far");
    icontopnav.classList.add("fa-user");


    //יצירת העגלה
    const icontopnav1 = document.createElement('i');
    icontopnav1.classList = "icontopnav1";
    icontopnav1.classList.add("fas");
    icontopnav1.classList.add("fa-shopping-cart");


    input.placeholder = "         מה לחפש לך?          "


    //יצירת קישור1
    const aa=document.createElement('a');
    aa.href="../../pages/buy/buy.html";

    //יצירת קישור1
    const aaaa=document.createElement('a');
    aaaa.href="../../pages/product/index.html";

    //יצירת קישור2
    const basketlink = document.createElement('a');
    basketlink.href = "/pages/baskat/baskat.html";

    //יצירת קישור3
    if (userid!=-1 && userid!=null) 
    {
        const log_inlink = document.createElement('a');
        log_inlink.href = "../../pages/log in/details.html";
        div1.appendChild(log_inlink);
        log_inlink.appendChild(icontopnav);
    }
    //אחרת מגיע דף של הרשמה
    else 
    {
        const log_inlink = document.createElement('a');
        log_inlink.href = "../../pages/log in/form.html";
        div1.appendChild(log_inlink);
        log_inlink.appendChild(icontopnav);
    }


    const text1 = document.createElement('h4');
    text1.innerHTML = "מוצרים";

    text1.classList = "text1";

    const text2 = document.createElement('h4');
    text2.innerHTML = "חדרים";
    text2.classList = "text2";


    div1.appendChild(basketlink);


    basketlink.appendChild(icontopnav1);
    div1.appendChild(input);
    // div1.appendChild(imgg);
    div2.appendChild(aa);
    div2.appendChild(aaaa);
    aa.appendChild(text1);
    aaaa.appendChild(text2);

    const pas=document.createElement('img');
    pas.src="../../assets/Gmail (6)/pas.png";
    div2.appendChild(pas);
    pas.classList="pas";
}

nav();


//חיפוש באתר 
let help = 0;
const userIdd = localStorage.getItem("id");
if (userIdd==-1 || userIdd==null) {
//     pay.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
// אתה לא מחובר</h3><br></br><a href=""../log in/log_in.html"">להתחברות</a> </div>`;
}
else
{
//     const ab=function()
// {
// const user10 = JSON.parse(localStorage.getItem(userIdd));
// const array = user10.arr;
// const dom45 = {
//     pictures: document.getElementById("pictures")
// }
// const arrmonim2 = [];
// arrmonim2.length = 10;
// for (let i = 0; i < arrmonim2.length; i++) {
//     arrmonim2[i] = 0;
// }
// for (let i = 0; i < array.length; i++) {
//     arrmonim2[array[i]]++;
// }

// input.onchange = function () {
//     pay.innerHTML="";
//     dom45.pictures.innerHTML = " ";
//     dom45.pictures.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
//     <h3> :תוצאות חיפוש עבור  ${input.value} </h3> </div>`;
//     help = 0;
//     for (let i = 0; i < arrmonim2.length; i++) {
//         if (arrmonim2[i] > 0) {
//             pictures.forEach(user => {
//                 if (i == user.key && user.name2.includes(input.value)) {
//                     help = 1;
//                     dom45.pictures.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
//         <a href="./buy.html"><img src="/assets/b/${user.src}" width="250px"/>
//            <h3> ${user.name}</h3> <h5> ${user.name2}</h5> <h5> ${user.price}</h5></a> 
//            <h3 class="${user.key}"><span> ${arrmonim2[i]}</span>:כמות</h3>
//            <button class="button+ ${user.key}" class="=" type="button">+</button>
//             <button class="${user.key}" class="button1" type="button">הסרת פריט</button>
//             <button class="button- ${user.key}" class="=" type="button">-</button></div>`;
//                 }
//             })
//         }
//     }
//     if (help == 0) {
//         dom45.pictures.innerHTML = " ";
//         dom45.pictures.innerHTML = "404 dont found....";
//     }
//     input.value = "";
//     const button1 = document.querySelectorAll('button');
//     button1.forEach(bb => {
//         //פונקציה המעדכנת שנמחקו מהסל
//         bb.onclick = function () {
//             const user2 = JSON.parse(localStorage.getItem(userid));
//             const arr = user2.arr;
//             if (bb.classList[0] != "button-" && bb.classList[0] != "button+") {
//                 for (let i = 0; i < arr.length; i++) {
//                     if (arr[i] == bb.classList.value)
//                         arr[i] = -1;
//                 }
//                 let j = 0;
//                 for (let i = 0; i < arr.length; i++) {
//                     if (arr[i] !== -1)
//                         arr[j++] = arr[i];
//                 }
//                 var arrnew = arr.slice(0, j);
//                 user2.arr = arrnew;
//             }
//             else
//                 if (bb.classList[0] == "button+") {
//                     arr.push(bb.classList[1]);
//                     user2.arr = arr;
//                 }

//                 else {
//                     const find = bb.classList[1];
//                     const find1 = arr.indexOf(find);
//                     // alert(find);
//                     // alert(arr);
//                     var narrn = arr.slice(0, find1);
//                     // alert(narrn);
//                     var narrn1 = arr.slice(find1 + 1, arr.length);
//                     // alert(narrn1);
//                     let r = 0;
//                     for (let index = 0; index < narrn.length; index++) {
//                         arr[r++] = narrn[index];
//                     }
//                     for (let index1 = 0; index1 < narrn1.length; index1++) {
//                         arr[r++] = narrn1[index1];
//                     }
//                     // console.log(arr); 
//                     var arrnew = arr.slice(0, arr.length - 1);
//                     // console.log(arrnew);
//                     user2.arr = arrnew;
//                 }
//             localStorage.setItem(userid, JSON.stringify(user2));
//             // window.location = href = "./baskat.html";
//         }
//     }
//     )
// }
// }
}







