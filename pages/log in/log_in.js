const email=document.getElementById('user');
const id=document.getElementById('pass');
const enter=document.getElementById('enter');

//פןנקציה השומרת את הנתונים של המשתמש שקיים במערכת 

enter.onclick=function()
{
//בגיקה האם המזהה שכניס המשתמש קיים במערכת ואם לא מציג הודעה ולא מכניס את הנתון
const userid =id.value;
const user = JSON.parse(localStorage.getItem(userid));

if (user === null)
{
    alert("הפרטים שהכנסת שגויים או שאינם שקיימים במערכת")
}
// אם הסיסמה קיימת הוא בודק את כתובת המייל אם היא קיימת 
else 
{
    sessionStorage.setItem("email",email.value);
    const useremail = sessionStorage.getItem("email");
    const eemail = user.email;
    if (!(eemail === useremail) )
        alert("הפרטים שהכנסת שגויים או שאינם שקיימים במערכת");

    else 
    if (userid!="" && useremail!="")
      {
        localStorage.setItem("id", id.value);
        // alert("נכנסת");
        // const aa=document.createElement('a');
        // aa.href="../product/index.html";
        // aa.appendChild("enter");
        window.location=href="../product/index.html";
      }  
}
// const w=enter.value;
// w.reset();
}

