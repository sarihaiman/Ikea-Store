
const userid = localStorage.getItem("id");

if (userid==-1 || userid==null) {
    pay.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
אתה לא מחובר</h3><br></br><a href="../../pages/log in/form.html">להתחברות</a> </div>`;
}

else
{
const user = JSON.parse(localStorage.getItem(userid));

const dom2 = {
    pictures: document.getElementById("pictures")
}

let pictures = [{ name: "defult", name2: "defult", price: "defult", src: "defult" }]

$.ajax({
    url: "/data/buying.json.json",
    success: (result) => {
        pictures = result;
        drawUsers();

    },
    error: (err) => {
        console.log(err);
    }
});

var arrmonim = [];
arrmonim.length = 60;
for (let i = 0; i < arrmonim.length; i++) {
    arrmonim[i] = 0;
}
for (let i = 0; i < user.arr.length; i++) {
    arrmonim[user.arr[i]]++;
}
console.log(arrmonim);

const arr = user.arr;
const drawUsers = () => {
    for (let i = 0; i < arrmonim.length; i++) {
        // alert(arr[i]);
        if (arrmonim[i] > 0) {
            pictures.forEach(user => {
                if (user.key == i)
                    dom2.pictures.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
       <img class="ee ${user.key}" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  src="/assets/c/${user.src}" width="250px"/>
        <img class="neww" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c_hover/${user.src}" width="250px"/>
        <h3> ${user.name}</h3> <h5> ${user.name2}</h5> <h5> ${user.price} ש"ח</h5>
            <h3 class="${user.key}">כמות: <span><button 
           class="button+ ${user.key}" class="=" type="button">+</button> ${arrmonim[i]}  
           <button class="button- ${user.key}" class="=" type="button">-</button></span> </h3>
            <button id="ww" class="${user.key}" class="button1" type="button">הסרת פריט</button></div>`;
            sessionStorage.setItem(user.key,JSON.stringify(user));
            abb();
    const button1 = document.querySelectorAll('button');
    button1.forEach(bb => {
        //פונקציה המעדכנת שנמחקו מהסל
        bb.onclick = function () {
            const user2 = JSON.parse(localStorage.getItem(userid));
            var arr = user2.arr;
            if (bb.classList[0] != "button-" && bb.classList[0] != "button+") {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] == bb.classList.value)
                        arr[i] = -1;
                }
                let j = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] !== -1)
                        arr[j++] = arr[i];
                }
                var arrnew = arr.slice(0, j);
                user2.arr = arrnew;
            }
            else
                if (bb.classList[0] == "button+") {
                    arr.push(bb.classList[1]);
                    user2.arr = arr;
                }

                else {
                    const find = bb.classList[1];
                    const find1 = arr.indexOf(find);
                    // alert(find);
                    // alert(arr);
                    var narrn = arr.slice(0, find1);
                    // alert(narrn);
                    var narrn1 = arr.slice(find1 + 1, arr.length);
                    // alert(narrn1);
                    let r = 0;
                    for (let index = 0; index < narrn.length; index++) {
                        arr[r++] = narrn[index];
                    }
                    for (let index1 = 0; index1 < narrn1.length; index1++) {
                        arr[r++] = narrn1[index1];
                    }
                    // console.log(arr); 
                    var arrnew = arr.slice(0, arr.length - 1);
                    // console.log(arrnew);
                    user2.arr = arrnew;
                }
            localStorage.setItem(userid, JSON.stringify(user2));

            //ציור מחדש של המוצרים בעת שינוי הכמות או הסרת הפריט
            var arr=user2.arr;
            for (let i = 0; i < arrmonim.length; i++) {
                arrmonim[i] = 0;
            }
            // console.log(arrmonim);
            for (let i = 0; i < user2.arr.length; i++) {
                // console.log(user2.arr[i]);
                arrmonim[user2.arr[i]]++;
            }
            dom2.pictures.innerHTML="";
            drawUsers();
            sum=0;
            pay.innerHTML="";
            calc();
            abb();
        }
    }
    )
}
)
}
}
const tex1_namespan=document.getElementById('tex1_namespan');
const tex2_namespan=document.getElementById('tex2_namespan');
const tex3_namespan=document.getElementById('tex3_namespan');
const imgbuying=document.getElementById('imgbuying');
const imgall=document.querySelectorAll('img');
imgall.forEach(ff=>{
    ff.onclick=function(){
        console.log(ff.classList[1]);
        const userkey=JSON.parse(sessionStorage.getItem(ff.classList[1]));
        console.log(userkey);
        tex1_namespan.innerHTML=userkey.name;
        tex2_namespan.innerHTML=userkey.name2;
        tex3_namespan.innerHTML=userkey.price;
        imgbuying.src=`/assets/c/${userkey.src}`;
        
    }
})
}

const abb=function()
{
const user10 = JSON.parse(localStorage.getItem(userIdd));
const array = user10.arr;
const dom45 = {
    pictures: document.getElementById("pictures")
}
const arrmonim2 = [];
arrmonim2.length = 60;
for (let i = 0; i < arrmonim2.length; i++) {
    arrmonim2[i] = 0;
}
for (let i = 0; i < array.length; i++) {
    arrmonim2[array[i]]++;
}
let summ=0;
input.onchange = function () {
    pay.innerHTML="";
    dom45.pictures.innerHTML = " ";
    summ=0;
    for (let i = 0; i < arrmonim2.length; i++) {
        if (arrmonim2[i] > 0) {
    pictures.forEach(user => {
        if(user.name2.includes(input.value) && i == user.key)
        {  
          summ++;
        }
        })}};
    dom45.pictures.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
    <h3>:נמצאו ${summ} תוצאות עבור  ${input.value}  </h3>  </div>`;
    help = 0;
    for (let i = 0; i < arrmonim2.length; i++) {
        if (arrmonim2[i] > 0) {
            pictures.forEach(user => {
                if (i == user.key && user.name2.includes(input.value)) {
                    help = 1;
                    dom2.pictures.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
        <img class="ee ${user.key}" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  src="/assets/c/${user.src}" width="250px"/>
        <img class="neww" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c_hover/${user.src}" width="250px"/>
        <h3> ${user.name}</h3> <h5> ${user.name2}</h5> <h5> ${user.price}</h5>
           <h3 class="${user.key}"><span> ${arrmonim2[i]}</span>:כמות</h3>
           <button class="button+ ${user.key}" class="=" type="button">+</button>
            <button id="ww" class="${user.key}" class="button1" type="button">הסרת פריט</button>
            <button class="button- ${user.key}" class="=" type="button">-</button></div>`;
            sessionStorage.setItem(user.key,JSON.stringify(user));
                }
            })
        }
    }
    if (help == 0) {
        dom45.pictures.innerHTML = " ";
        dom45.pictures.innerHTML = "404 dont found....";
    }
    input.value = "";
    const button1 = document.querySelectorAll('button');
    button1.forEach(bb => {
        //פונקציה המעדכנת שנמחקו מהסל
        bb.onclick = function () {
            const user2 = JSON.parse(localStorage.getItem(userid));
            var arr = user2.arr;
            if (bb.classList[0] != "button-" && bb.classList[0] != "button+") {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] == bb.classList.value)
                        arr[i] = -1;
                }
                let j = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] !== -1)
                        arr[j++] = arr[i];
                }
                var arrnew = arr.slice(0, j);
                user2.arr = arrnew;
            }
            else
                if (bb.classList[0] == "button+") {
                    arr.push(bb.classList[1]);
                    user2.arr = arr;
                }

                else {
                    const find = bb.classList[1];
                    const find1 = arr.indexOf(find);
                    // alert(find);
                    // alert(arr);
                    var narrn = arr.slice(0, find1);
                    // alert(narrn);
                    var narrn1 = arr.slice(find1 + 1, arr.length);
                    // alert(narrn1);
                    let r = 0;
                    for (let index = 0; index < narrn.length; index++) {
                        arr[r++] = narrn[index];
                    }
                    for (let index1 = 0; index1 < narrn1.length; index1++) {
                        arr[r++] = narrn1[index1];
                    }
                    // console.log(arr); 
                    var arrnew = arr.slice(0, arr.length - 1);
                    // console.log(arrnew);
                    user2.arr = arrnew;
                }
            localStorage.setItem(userid, JSON.stringify(user2));
            // window.location = href = "./baskat.html";
             //ציור מחדש של המוצרים בעת שינוי הכמות או הסרת הפריט
             var arr=user2.arr;
             for (let i = 0; i < arrmonim2.length; i++) {
                 arrmonim2[i] = 0;
             }
             // console.log(arrmonim);
             for (let i = 0; i < user2.arr.length; i++) {
                 // console.log(user2.arr[i]);
                 arrmonim2[user2.arr[i]]++;
             }
             dom45.pictures.innerHTML="";
             drawUsers();
            //  sum=0;
             pay.innerHTML="";
            //  calc();
        }
    }
    )
}
}

//חישוב הסכום לתשלום
$.ajax({
    url: "/data/buying.json.json",
    success: (result) => {
        pictures = result;
        calc();

    },
    error: (err) => {
        console.log(err);
    }
});

let sum = 0;
const calc = function () {
    for (let i = 0; i < arrmonim.length; i++) {
        if (arrmonim[i] > 0) {
            pictures.forEach(user => {
                if (user.key == i)
                    sum += (arrmonim[i] * user.price);
            })

        }
    }
    if (sum == 0) {
        pay.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
?למה לא קנית כלום</h3><br></br><a href="../buy/buy.html">להוספת מוצרים</a> </div>`;
    }

    else
        pay.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
    <h3>  סה"כ לתשלום: ${sum}  ש"ח </h3> 
    <a href="../pay/B/b.html"> <button class="button" class="=" type="button">לתשלום</button></a></div> `;

}

}

