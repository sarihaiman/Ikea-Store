
const userid=localStorage.getItem("id");
const user=JSON.parse(localStorage.getItem(userid));
// alert(user);
const name2=document.getElementById('name');
const num=document.getElementById('num');
const date=document.getElementById('date');
const cvv_=document.getElementById('cvv_');

const g=localStorage.getItem("?");

if
    (g==1 && user.cvv!=null)
    {
    name2.value=user.idcard;
    num.value=user.card_namber;
    date.value=user.date;
    cvv_.value=user.cvv;
    }

const details=document.getElementById('details');

details.onchange=function(event)
{   
if(event.target.checked)
{
   user.idcard=name2.value;
   user.card_namber=num.value;
   user.cvv=cvv_.value;
   user.date=date.value;
}
console.log(user);
localStorage.setItem(userid,JSON.stringify(user));
console.log(user);
}

name2.onkeydown = function(event)
{
    if( !isKeyValid(event.key)) {
        event.preventDefault();
    }
   
}

const isKeyValid = function(key) {
    return (key >= 'א' && key <= 'ת')
    || (key >= 'a' && key <= 'z') 
    || (key >= 'A' && key <= 'Z')
    || key === ' '
}


num.onkeydown = function(event)
{
    if( !isKeyValid1(event.key)) {
        event.preventDefault();
    }
   
}

const isKeyValid1 = function(key) {
    return (key >= 1 && key <= 9)
    || key==='Backspace'
}

cvv_.onkeydown = function(event)
{
    if( !isKeyValid1(event.key)) {
        event.preventDefault();
    }
}


date.onkeydown = function(event)
{
    if( !isKeyValid1(event.key)) {
        event.preventDefault();
    }
}


const zz=document.getElementById('zz');
zz.onclick=function()
{
    if(name2.value!="" && num.value!="" && cvv_.value!="" && date.value!="")
    {
    alert(".הזמנתך נקלטה בהצלחה");
    window.location=href="../../../pages/home/home.html";
    user.countoforders++;
    user.arr=[];
    localStorage.setItem(userid,JSON.stringify(user));
    }
}