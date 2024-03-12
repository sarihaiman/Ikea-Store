const yes=document.getElementById('yes');
const no=document.getElementById('no');
const link=document.createElement('a');
link.href="./pay.html";

const allll=document.getElementById('allll');
allll.appendChild(link);
link.appendChild(yes);
link.appendChild(no);

yes.onclick=function(){
    localStorage.setItem("?",1);
}

no.onclick=function(){
    localStorage.setItem("?",0);
}