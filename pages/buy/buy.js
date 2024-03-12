const dom = {
    picture: document.getElementById("picture")
}

const iconToBuy=document.getElementById('iconToBuy');
const numIteams=document.getElementById('numIteams');


let count=0;
// let countofproduct=0;
let r=0;
let picture=[{name:"defult",name2:"defult",price:"defult",src:"defult"}]

//שליפת הנתונים מקובץ הJSON 
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

//הפונקציה שמעדכנת את כמות המוצרים שנכנסו לסל 
// const updateCount=function(value)
// {
//     const countspan=document.querySelector('#count');
//     countspan.innerHTML=value
// }

//מציירת את המוצרים עם הפרטים שלהם
const drawUsers = () => {
    picture.forEach(user => {
        
        dom.picture.innerHTML += `<div class="col-md-3 col-sm-6 col-xs-12">
        <img class="ee ${user.key}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c/${user.src}" width="250px"/ >
        <img class="neww" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/assets/c_hover/${user.src}" width="250px"/>
           <h3> ${user.name}</h3> <h5> ${user.name2}</h5> <h5> ${user.price} ש"ח </h5>
           <button id="ww" class="${user.key}" class="button" type="button">הוספה לסל </button><br></div>`;
           sessionStorage.setItem(user.key,JSON.stringify(user));
            })

           const button=document.querySelectorAll('button');
           button.forEach(bb=>{
            //פונקציה המעדכנת את מספר המוצרים שנכנסו לסל
            if(bb.classList[0]!="filper1" && bb.classList[0]!="filper2" && bb.classList[0]!="four" && bb.classList[0]!="btn-close")
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
            }}}
})

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