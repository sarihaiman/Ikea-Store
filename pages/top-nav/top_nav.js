
const div1=document.getElementById('div1');
div1.classList="div1";
const div2=document.getElementById('div2');
div2.classList="div2";
const input=document.createElement('input');

const nav=function()
{
    input.type='search';
    input.classList="input";
  
    const imgg=document.createElement('img');
    imgg.src="/assets/logo.svg";
    imgg.classList="img";
    const aaimg=document.createElement('a');
    aaimg.href="../../pages/home/home.html";
    div1.appendChild(aaimg);
    aaimg.appendChild(imgg);


    //יצירת האיש
    const icontopnav=document.createElement('i');
    icontopnav.classList="icontopnav";
    icontopnav.classList.add("far");
    icontopnav.classList.add("fa-user");

    //יצירת העגלה
    const icontopnav1=document.createElement('i');
    icontopnav1.classList="icontopnav1";
    icontopnav1.classList.add("fas");
    icontopnav1.classList.add("fa-shopping-cart");
    
    
    input.placeholder="         מה לחפש לך?          "

    
    //יצירת קישור1
    const aa=document.createElement('a');
    aa.href="../../pages/buy/buy.html";

    //יצירת קישור1
    const aaaa=document.createElement('a');
    aaaa.href="../../pages/product/index.html";
    
    //יצירת קישור2
    const basketlink=document.createElement('a');
    basketlink.href="/pages/baskat/baskat.html";

    //יצירת קישור3
    const userid=localStorage.getItem("id");
    //אם כבר חובר מגיע אפשרות להתנתקות
    
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
    
  

    const text2=document.createElement('h4');
    text2.innerHTML="חדרים";
    text2.classList="text2";  
    
    const text1=document.createElement('h4');
    text1.innerHTML="מוצרים";
    text1.classList="text1";
    
    div1.appendChild(basketlink);
    basketlink.appendChild(icontopnav1);
    div1.appendChild(input);
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

input.onchange=function(event)
{
    console.log(event.target.value);
// console.log(input.value);
//שליפת הנתונים הנדרשים לפי החיפוש ובדיקה האם נדרשים להצגה
$.ajax({
    url:"/data/buying.json.json",
    success:(result)=>{
        picture=result;
        drawUsers();

    },
    error:(err)=>{
        console.log(err);
    }
});
const dom46 = {
    picture: document.getElementById("picture")
}
let sum=0;
let help=0;
//מציירת את המוצרים עם הפרטים שלהם
const drawUsers = () => {
    dom46.picture.innerHTML=" ";
    // domfilper.picturefilper.innerHTML=" ";
    sum=0;
    picture.forEach(user => {
        if(user.name2.includes(input.value))
        {  
          sum++;
        }
        });
    dom46.picture.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
    <h3>נמצאו ${sum} תוצאות עבור  ${input.value}:  </h3> </div>`;
    picture.forEach(user => {
        if(user.name2.includes(input.value))
        {  
            help=1;
            console.log(user);
            dom46.picture.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
        <img class="ee ${user.key}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c/${user.src}" width="250px"/>
        <img class="neww" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c_hover/${user.src}" width="250px"/>
           <h3> ${user.name}</h3> <h5> ${user.name2}</h5> <h5> <h5> ${user.price} ש"ח </h5></h5>
           <button id="ww" class="${user.key}" class="button" type="button">הוספה לסל </button><br></div>`;
           sessionStorage.setItem(user.key,JSON.stringify(user));
        }
         const button=document.querySelectorAll('button');
         button.forEach(bb=>{
            //פונקציה המעדכנת את מספר המוצרים שנכנסו לסל
            if(bb.classList[0]!="filper1" && bb.classList[0]!="filper2" && bb.classList[0]!="four"  && bb.classList[0]!="btn-close")
            {
               bb.onclick=function(){
            //    count++;
            //    updateCount(count);  
            const userid=localStorage.getItem("id");
            const user2=JSON.parse(localStorage.getItem(userid));
            const arr=user2.arr;
            // const arrmonim=user2.arrMonim;
            // picture.forEach(uuser => {
            //        if(uuser.key==bb.classList.value) 
            //        arrmonim[bb.classList.value]++; 
            // })
            // user2.arrMonim=arrmonim;
            arr.push(bb.classList.value);
            user2.arr=arr;
            localStorage.setItem(userid,JSON.stringify(user2));
            // var cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            // cart.push(bb.classList.value);
            // sessionStorage.setItem('cart', JSON.stringify(cart));
            // const userid=localStorage.getItem("id");
            // const usercart=sessionStorage.getItem('cart');
            // localStorage.setItem(userid,usercart);
            }}}) });
        if(help==0)
        {
            dom46.picture.innerHTML="404 dont found....";

        }
         input.value="";
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
}}


// מסננים

const div3=document.getElementById('div3');
div3.classList="div3";




const titlefilter=document.createElement('h3');
titlefilter.innerHTML="סנן לפי:";
titlefilter.classList="titlefilter";
div3.appendChild(titlefilter);


const filper1=document.createElement('button');
filper1.innerHTML="מחיר מהנמוך לגבוה";
filper1.classList="filper1";
div3.appendChild(filper1);

const filper2=document.createElement('button');
filper2.innerHTML="מחיר מהגבוה לנמוך";
filper2.classList="filper2";
div3.appendChild(filper2);

const domfilper = {
    picturefilper: document.getElementById("picture")
}

let picturefilper=[{name:"defult",name2:"defult",price:"defult",src:"defult"}]

filper2.onclick=function()
{
    domfilper.picturefilper.innerHTML=" ";
    
    //שליפת הנתונים מקובץ הJSON
    $.ajax({
        url:"../../data/hightolow.json.json",
        success:(result)=>{
            picturefilper=result;
            drawUsers();
    
        },
        error:(err)=>{
            console.log(err);
        }
    });

    //מציירת את המוצרים עם הפרטים שלהם
    const drawUsers = () => {
        picturefilper.forEach(user => {
            domfilper.picturefilper.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
        <img class="ee ${user.key}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c/${user.src}" width="250px"/>
        <img class="neww" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c_hover/${user.src}" width="250px"/>
               <h3> ${user.name}</h3> <h5> ${user.name2}</h5> <h5> ${user.price} ש"ח </h5>
               <button id="ww" class="${user.key}" class="button" type="button">הוספה לסל </button><br></div>`;
               sessionStorage.setItem(user.key,JSON.stringify(user));
        })
    
    
               const buttonfilter=document.querySelectorAll('button');
               buttonfilter.forEach(bb=>{
                //פונקציה המעדכנת את מספר המוצרים שנכנסו לסל
                if(bb.classList[0]!="filper1" && bb.classList[0]!="filper2" && bb.classList[0]!="four"  && bb.classList[0]!="btn-close")
                {
                   bb.onclick=function(){
                //    count++;
                //    updateCount(count);
                // const parent = bb.parentNode;
                // console.log(bb.classList.value);
                const userid=localStorage.getItem("id");
                if(userid==-1 || userid==null)
                alert(" אין אפשרות להוסיף לסל ללא רישום לאתר");
                else
                {
                const user2=JSON.parse(localStorage.getItem(userid));
                const arr=user2.arr;
                // const arrmonim=user2.arrMonim;
                // picture.forEach(uuser => {
                //        if(uuser.key==bb.classList.value) 
                //        arrmonim[bb.classList.value]++; 
                // })
                // user2.arrMonim=arrmonim;
                arr.push(bb.classList.value);
                user2.arr=arr;
                localStorage.setItem(userid,JSON.stringify(user2));
                }}}})
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
    
    
    
}


filper1.onclick=function()
{
    domfilper.picturefilper.innerHTML=" ";
  
    //שליפת הנתונים מקובץ הJSON
    $.ajax({
        url:"../../data/lowtohigh.json.json",
        success:(result)=>{
            picturefilper=result;
            drawUsers();
    
        },
        error:(err)=>{
            console.log(err);
        }
    });

    //מציירת את המוצרים עם הפרטים שלהם
    const drawUsers = () => {
        picturefilper.forEach(user => {
            domfilper.picturefilper.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
        <img class="ee ${user.key}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c/${user.src}" width="250px"/>
        <img class="neww" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c_hover/${user.src}" width="250px"/>
               <h3> ${user.name}</h3> <h5> ${user.name2}</h5> <h5> ${user.price} ש"ח </h5>
               <button id="ww" class="${user.key}" class="button" type="button">הוספה לסל </button><br></div>`;
               sessionStorage.setItem(user.key,JSON.stringify(user));
        })
    
    
               const buttonfilter=document.querySelectorAll('button');
               buttonfilter.forEach(bb=>{
                //פונקציה המעדכנת את מספר המוצרים שנכנסו לסל
                if(bb.classList[0]!="filper1" && bb.classList[0]!="filper2" && bb.classList[0]!="four"  && bb.classList[0]!="btn-close")
                {
                   bb.onclick=function(){
                //    count++;
                //    updateCount(count);
                // const parent = bb.parentNode;
                // console.log(bb.classList.value);
                const userid=localStorage.getItem("id");
                if(userid==-1 || userid==null)
                alert(" אין אפשרות להוסיף לסל ללא רישום לאתר");
                else
                {
                const user2=JSON.parse(localStorage.getItem(userid));
                const arr=user2.arr;
                // const arrmonim=user2.arrMonim;
                // picture.forEach(uuser => {
                //        if(uuser.key==bb.classList.value) 
                //        arrmonim[bb.classList.value]++; 
                // })
                // user2.arrMonim=arrmonim;
                arr.push(bb.classList.value);
                user2.arr=arr;
                localStorage.setItem(userid,JSON.stringify(user2));
                }}}})
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
    
    
    
}




