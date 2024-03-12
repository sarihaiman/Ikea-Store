const firstname_lastname=document.getElementById('user1');
const email1=document.getElementById('pass2');
const phone=document.getElementById('number');
const id1=document.getElementById('pass1');
const log_in=document.getElementById('log_in');

const correct=function(idd)
{
for (let i = 0; localStorage.key(i)!=null; i++) {
   if(localStorage.key(i)==idd)
   {
    id1.value="";
   }
}}


log_in.onclick=function()
{
    correct(id1.value);
    if(id1.value=="")
    alert("הסיסמה קיימת");
    else
    {
        const user=
    {
        id:id1.value,
        firstname:firstname_lastname.value,
        phone:phone.value,
        email:email1.value,
        arr:[],
        card_namber:null,
        cvv:null,
        date:null,
        idcard:null,
        countoforders:0
    }
    localStorage.setItem("id",user.id); 
    localStorage.setItem(user.id,JSON.stringify(user));
    window.location.replace("../product/index.html");
    }
    
}

firstname_lastname.onkeydown = function(event)
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


phone.onkeydown = function(event)
{
    if( !isKeyValid1(event.key)) {
        event.preventDefault();
    }
   
}

const isKeyValid1 = function(key) {
    return (key >= 1 && key <= 9)
    || key==='Backspace'
}
