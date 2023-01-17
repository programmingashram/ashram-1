let blog = {
   blogList1: {
        "Title":"JavaScript latest Version in 2021.",
        "image":"https://venturebeat.com/wp-content/uploads/2018/01/javascript.jpg?fit=1800%2C1116&strip=all",
        "Descriptionshort":"ECMAScript is the official name of the language. ECMAScript",
        "Descriptionfull":" versions have been abbreviated to ES1, ES2, ES3, ES5, and ES6. Since 2016 new versions are named by year (ECMAScript 2016 / 2017 / 2018).",
        "blogid":"blog1"
     },
     blogList2:{
        "Title":"Most asking question is what is current Bootsrap version ?",
        "image":"https://labs.tadigital.com/wp-content/uploads/2020/03/MicrosoftTeams-image.png",
        "Descriptionshort":"Bootstrap 5 stable was released on May 5, 2021.",
        "Descriptionfull":"  Bootstrap  5 beta 3 was released on March 22, 2021. Bootstrap 5 beta 2 was released on February 10, 2021. Bootstrap 5 beta 1 was released on December 7, 2020.",
        "blogid":"blog2"
     },
     blogList3: {
        "Title":"Most asking question in interview which is current PHP version ?",
        "image":"https://sdtimes.com/wp-content/uploads/2015/07/0715.sdt-php7.jpg",
        "Descriptionshort":"Currently, the latest stable version is PHP 7.4. ",
        "Descriptionfull":"Supported PHP versions and lifecycle.",
        "blogid":"blog3"
     },
     blogList4:{
        "Title":"What is Sass ?",
        "image":"https://images.iambacon.co.uk/blog/sass.png",
        "Descriptionshort":"Sass is a preprocessor scripting language that is interpreted ",
        "Descriptionfull":"or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called 'the indented syntax,' uses a syntax similar to Haml.",
        "blogid":"blog4"
     },
     blogList5:{
       "image":"http://programmingashram.in/images/javascript-defer.png",
       "Title":"defer in javascript.",
       "Descriptionshort":"The defer is a Boolean value, used to indicate that script is executed after",
       "Descriptionfull":"the document has been parsed. It works only with external scripts (i.e., works only when we are specifying the src attribute in<img src='http://programmingashram.in/images/javascript-defer.png' class='img-thumbnail'>",
       "blogid":"blog5"
   },
   blogList6:{
       "image":"http://programmingashram.in/images/javascript-defer.png",
       "Title":"jQuery Version 3.6.0 Released!",
       "Descriptionshort":"jQuery 3.6.0 has been released. jQuery is a lightweight, write less",
       "Descriptionfull":", do more,JavaScript library.jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish,and wraps them into methods that you can call with a single line of code.",
       "blogid":"blog6"
   },
   
};
let blogs = document.getElementById("blog-details");

for(let i in blog){
 blogs.innerHTML += `
 <li class="me-2">
    <a href="#first">
        <div class="blog-card">
            <div class="blog-img">
                <img src="${blog[i].image}" alt="" class="w-100"> 
            </div>
            <div class="blog-title">
                <h5>${blog[i].Title}</h5>
            </div>
            <div class="blog-description">
                 <p> ${blog[i].Descriptionfull}</p>
            </div>
        </div>
    </a>
</li>
 `;
}
