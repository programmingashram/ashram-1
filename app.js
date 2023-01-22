let blog = {
    blogList1: {
         "Title":"JavaScript latest Version in 2021.",
         "image":"https://venturebeat.com/wp-content/uploads/2018/01/javascript.jpg?fit=1800%2C1116&strip=all",
         "Descriptionshort":"ECMAScript is the official name of the language. ECMAScript",
         "Descriptionfull":" versions have been abbreviated to ES1, ES2, ES3, ES5, and ES6. Since 2016 new versions are named by year (ECMAScript 2016 / 2017 / 2018).",
         "blogid":"blog1",
         "lang": "js"
      },
      blogList2:{
         "Title":"Most asking question is what is current Bootsrap version ?",
         "image":"https://labs.tadigital.com/wp-content/uploads/2020/03/MicrosoftTeams-image.png",
         "Descriptionshort":"Bootstrap 5 stable was released on May 5, 2021.",
         "Descriptionfull":"  Bootstrap  5 beta 3 was released on March 22, 2021. Bootstrap 5 beta 2 was released on February 10, 2021. Bootstrap 5 beta 1 was released on December 7, 2020.",
         "blogid":"blog2",
         "lang": "bootstrap"
      },
      blogList3: {
         "Title":"Most asking question in interview which is current PHP version ?",
         "image":"https://sdtimes.com/wp-content/uploads/2015/07/0715.sdt-php7.jpg",
         "Descriptionshort":"Currently, the latest stable version is PHP 7.4. ",
         "Descriptionfull":"Supported PHP versions and lifecycle.",
         "blogid":"blog3",
         "lang": "php"
      },
      blogList4:{
         "Title":"What is Sass ?",
         "image":"https://images.iambacon.co.uk/blog/sass.png",
         "Descriptionshort":"Sass is a preprocessor scripting language that is interpreted ",
         "Descriptionfull":"or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called 'the indented syntax,' uses a syntax similar to Haml.",
         "blogid":"blog4",
         "lang": "sass"
      },
      blogList5:{
        "image":"http://programmingashram.in/images/javascript-defer.png",
        "Title":"defer in javascript.",
        "Descriptionshort":"The defer is a Boolean value, used to indicate that script is executed after",
        "Descriptionfull":"the document has been parsed. It works only with external scripts (i.e., works only when we are specifying the src attribute in<img src='http://programmingashram.in/images/javascript-defer.png' class='img-thumbnail'>",
        "blogid":"blog5",
        "lang": "js"
    },
   
    
 };
let blogs = document.getElementById("blog-details");
let appBlog = document.getElementById('blogArea');
let feature = document.getElementById('blogFeature');

for(let p in blog){
    feature.innerHTML +=`
    <div class="blog rounded">
        <a class="nav-link  blog-card p-0 shadow-sm" data-bs-toggle="collapse" href="#${blog[p].blogid}" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div class="d-flex justify-content-start align-items-start px-2">
                <div class="news-icon">
                    <i class="fa-brands h1 mb-0 fa-${blog[p].lang} text-${blog[p].lang}"></i>
                </div>
                <div class="head-details  p-3">
                    <div class="title-header">
                        <h1 class="h6 mb-1 text-dark">${blog[p].Title}</h1>
                    </div>
                    <p class="text-secondary">
                        ${blog[p].Descriptionshort}
                    </p>
                </div>
            </div>
        </a>
        <div class="collapse" id=""${blog[p].blogid}">
            <div class="card p-3 card-body">
                ${blog[p].Descriptionfull}
            </div>
        </div>
    </div>
    `;
}

for(let o in blog){
    appBlog.innerHTML +=`
    <div class="blog rounded">
        <a class="nav-link  blog-card p-0 shadow-sm" data-bs-toggle="collapse" href="${blog[o].blogid}" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div class="d-flex justify-content-start align-items-start px-2">
                <div class="news-icon">
                    <i class="fa-brands h1 mb-0 fa-${blog[o].lang} text-${blog[o].lang}"></i>
                </div>
                <div class="head-details  p-3">
                    <div class="title-header">
                        <h1 class="h6 mb-1 text-dark">${blog[o].Title}</h1>
                    </div>
                    <p class="text-secondary">
                        ${blog[o].Descriptionshort}
                    </p>
                </div>
            </div>
        </a>
        <div class="collapse" id=""${blog[o].blogid}">
            <div class="card p-3 card-body">
                ${blog[o].Descriptionfull}
            </div>
        </div>
    </div>
 `;
}

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
</li>`;


}

let ashramLanguage = {
    javascript:{
        icon:"js",
        title:'JavaScript',
        description:"Learn JavaScript with easy and best tutorial or join ashram for coaching",
    },
    angular:{
        icon:"angular",
        title:'Angular',
        description:"Learn JavaScript with easy and best tutorial or join ashram for coaching",
    },
    react:{
        icon:"react",
        title:'React Js',
        description:"Learn JavaScript with easy and best tutorial or join ashram for coaching",
    },
    bootstrap:{
        icon:"bootstrap",
        title:'Bootstrap',
        description:"Learn JavaScript with easy and best tutorial or join ashram for coaching",
    },
    sass:{
        icon:"sass",
        title:'SCSS',
        description:"Learn JavaScript with easy and best tutorial or join ashram for coaching",
    }
}

let course = document.getElementById('courses');

for(let u in ashramLanguage){
    course.innerHTML +=`
    <div class="col-md-3">
        <div class="main ${ashramLanguage[u].icon}">
            <div class="icon">
                <i class="fa-brands fa-${ashramLanguage[u].icon} bg-${ashramLanguage[u].icon}" aria-hidden="true"></i>
            </div>
            <div class="details">
                <h2>${ashramLanguage[u].title}</h2>
                <p>${ashramLanguage[u].description}</p>
                <a href="#">Check Syllabus</a>
            </div>
        </div>
    </div>  
    `;
}