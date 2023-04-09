

// navigation

let menuBar = document.getElementById('menuBar');
let list = document.getElementById('list');

// console.log(menuBar);
// console.log(list);

menuBar.addEventListener('click', () => {
    list.classList.toggle('list');
    menuBar.innerHTML = "&#10006;";
    if (menuBar.innerHTML == "&#10006;") {
        menuBar.addEventListener('click', () => {
            menuBar.innerHTML = "&#9776;";
        });
    }
});



// Electronics products

let category = document.getElementById('category');
let image = document.getElementById('image');
let title = document.getElementById('title');
let price = document.getElementById('price');
let desc = document.getElementById('desc');
let rating = document.getElementById('rating');

let electronics = fetch('https://fakestoreapi.com/products/14');

electronics.then((res)=>{
    res.json().then((result)=>{
        // console.log(result.image);
        category.innerHTML = result.category;
        image.innerHTML = `<img id="image" src="${result.image}" alt="">`;
        title.innerText = result.title;
        price.innerText = `₹ ${result.price}`;
        desc.innerText = result.description;
        rating.innerText = `Rating:-${result.rating.rate}`;
    });
});

// jewellery products

let jcategory = document.getElementById('jcategory');
let jimage = document.getElementById('jimage');
let jtitle = document.getElementById('jtitle');
let jprice = document.getElementById('jprice');
let jdesc = document.getElementById('jdesc');
let jrating = document.getElementById('jrating');

let jewellery = fetch('https://fakestoreapi.com/products/5');

jewellery.then((res)=>{
    res.json().then((result)=>{
        // console.log(result.image);
        jcategory.innerHTML = result.category;
        jimage.innerHTML = `<img id="image" src="${result.image}" alt="">`;
        jtitle.innerText = result.title;
        jprice.innerText = `₹ ${result.price}`;
        jdesc.innerText = result.description;
        jrating.innerText = `Rating:-${result.rating.rate}`;
    });
});


// Mens Wearing products

let mcategory = document.getElementById('mcategory');
let mimage = document.getElementById('mimage');
let mtitle = document.getElementById('mtitle');
let mprice = document.getElementById('mprice');
let mdesc = document.getElementById('mdesc');
let mrating = document.getElementById('mrating');

let mensWearing = fetch('https://fakestoreapi.com/products/1');

mensWearing.then((res)=>{
    res.json().then((result)=>{
        // console.log(result.image);
        mcategory.innerHTML = result.category;
        mimage.innerHTML = `<img id="image" src="${result.image}" alt="">`;
        mtitle.innerText = result.title;
        mprice.innerText = `₹ ${result.price}`;
        mdesc.innerText = result.description;
        mrating.innerText = `Rating:-${result.rating.rate}`;
    });
});

// Womens Wearing products

let wcategory = document.getElementById('wcategory');
let wimage = document.getElementById('wimage');
let wtitle = document.getElementById('wtitle');
let wprice = document.getElementById('wprice');
let wdesc = document.getElementById('wdesc');
let wrating = document.getElementById('wrating');

let womensWearing = fetch('https://fakestoreapi.com/products/16');

womensWearing.then((res)=>{
    res.json().then((result)=>{
        // console.log(result.image);
        wcategory.innerHTML = result.category;
        wimage.innerHTML = `<img id="image" src="${result.image}" alt="">`;
        wtitle.innerText = result.title;
        wprice.innerText = `₹ ${result.price}`;
        wdesc.innerText = result.description;
        wrating.innerText = `Rating:-${result.rating.rate}`;
    });
});


// user details

let userImg = document.getElementById('userImg');
let name = document.getElementById('name');
let dobWithAge = document.getElementById('dob');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let country = document.getElementById('country');

let user = fetch('https://randomuser.me/api/?results=1');

user.then((res)=>{
    res.json().then((result)=>{
        // console.log(result.results[0].name);
        userImg.innerHTML = `<img id="image" src="${result.results[0].picture.large}" alt="">`;
        name.innerText = `${result.results[0].name.title} ${result.results[0].name.first} ${result.results[0].name.last}`;


        // getting date of birth

        const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];

        let date = result.results[0].dob.date;
        let dateSplit = date.split("T");

        let dobArr = dateSplit[0];
        
        let dob = dobArr.split("-");

        let intmonth = parseInt(dob[1]);
        
        let monthName = month[intmonth];
        console.log(monthName);

        dobWithAge.innerText = `${monthName} ${dob[2]},${dob[0]} (${result.results[0].dob.age} years old)`;



        email.innerText = `${result.results[0].email}`;
        phone.innerText = `${result.results[0].phone}`;
        country.innerText = `${result.results[0].location.country}`;
    
    });
});