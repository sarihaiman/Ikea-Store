const change = document.getElementById('change');
const dom = {
    picture: document.getElementById("picture")
}

let picture = [{ name: "defult", src: "defult", text: "defult" }]

$.ajax({
    url: "/data/index.json",
    success: (result) => {
        picture = result;
        drawUsers(picture);

    },
    error: (err) => {
        console.log(err);
    }
});

const drawUsers = () => {
    picture.forEach(user => {
        dom.picture.innerHTML += `<div class="col-md-3" >
        <a href="../../pages/buy/buy.html"><img class="img_product" src="/assets/a/${user.src}" width="350px"/></a>
        <a href="../../pages/buy/buy.html"> <h3 id="uii"> ${user.name}</h3></a><h5 id="ui"> ${user.text}</h5>
           </div>`;
    });
}

//מכניס לשלום אורח את שם המשתמש הנוכחי
// if(localStorage.getItem("id")==null)
// change.innerHTML='אורח';
// else
// {
// const name2=localStorage.getItem("id");
// console.log(name2);
// const user2=JSON.parse(localStorage.getItem(name2));
// console.log(user2);
// change.innerHTML=user2.firstname;
// }



