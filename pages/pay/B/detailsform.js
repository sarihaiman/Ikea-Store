const userid=localStorage.getItem("id");
console.log(userid);
const user=JSON.parse(localStorage.getItem(userid));
console.log(user);
const mail=document.getElementById('mail');
mail.value=user.email;

const father=document.getElementById('father');
const ddd=document.getElementById('ddd');

const number=document.getElementById('number');
number.value=user.phone;

const fullname=document.getElementById('fullname');
fullname.value=user.firstname;

const aa=document.createElement('a');
aa.href="../../pay/A/pay.html";

const aaa=document.createElement('a');
aaa.href="../../pay/A/index.html";

const adress=document.getElementById('adress');
const numberof=document.getElementById('numberof');
const mikud=document.getElementById('mikud');
const city=document.getElementById('city');
const rechov=document.getElementById('rechov');
const erez=document.getElementById('erez');

ddd.onclick=function()
{
if(adress.value!=0 && numberof.value!=0 && mikud.value!=0 && city.value!=0 && rechov.value!=0 && erez.value!=0 && fullname.value!=0 && number.value!=0 && mail.value!=0)
{
if(user.cvv==null)
{
    father.appendChild(aa);
    aa.appendChild(ddd);
    window.location="../../pay/A/pay.html";
}
else
{
    window.location="../../pay/A/index.html";
    father.appendChild(aaa);
    aaa.appendChild(ddd);
}
}
else
alert('קיימים פרטים שלא מלאים');
}


fullname.onkeydown = function(event)
{
    if( !isKeyValid(event.key)) {
        event.preventDefault();
    }
   
}

adress.onkeydown = function(event)
{
    if( !isKeyValid(event.key)) {
        event.preventDefault();
    }
   
}

city.onkeydown = function(event)
{
    if( !isKeyValid(event.key)) {
        event.preventDefault();
    }
   
}

rechov.onkeydown = function(event)
{
    if( !isKeyValid(event.key)) {
        event.preventDefault();
    }
   
}

erez.onkeydown = function(event)
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
