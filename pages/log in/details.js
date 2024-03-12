const leave=document.getElementById('leave');

leave.innerHTML="התנתקות";


leave.onclick=function()
{
   localStorage.setItem("id",-1);
}

const userid=localStorage.getItem("id");
const user2=JSON.parse(localStorage.getItem(userid));


aaaaaa.innerHTML+= `<div class="col-md-3 col-sm-6 col-xs-12">
<h3>  עד כה בוצעו ${user2.countoforders} הזמנות בחשבונך   </h3> </div> `;
