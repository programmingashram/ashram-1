let jsSyllabus= [
    {
        title: "Introduction",
        icon: "../assest/images/bulb.svg",
        theoryLink:"https://programmingashram.github.io/Js-Introduction/",
        exampleLink:"/",
        id:"syl1"
    },{
        title: "How to install ?",
        icon: "../assest/images/question.svg",
        theoryLink:"https://programmingashram.github.io/js-how-two/",
        exampleLink:"https://stackblitz.com/edit/js-how-to-enable?embed=1&file=index.html&hideExplorer=1&hideNavigation=1&theme=light&view=editor",
        id:"syl2"
    },{
        title: "Var,Let and Cost",
        icon: "../assest/images/var.svg",
        theoryLink:"https://programmingashram.github.io/Js-variables/",
        exampleLink:"https://stackblitz.com/edit/js-cn7icq?embed=1&file=index.js&hideExplorer=1&hideNavigation=1&theme=light&view=editor",
        id:"syl3"
    },{
        title: "Function in JS",
        icon: "../assest/images/function.svg",
        theoryLink:"https://programmingashram.github.io/javascript-function/",
        exampleLink:"https://stackblitz.com/edit/js-nwxnjw?embed=1&file=index.js&theme=light",
        id:"syl4"
    },{
        title: "Data Type",
        icon: "../assest/images/object.svg",
        theoryLink:"https://programmingashram.github.io/Js-Data-Type/",
        exampleLink:"/",
        id:"syl5"
    }
]


let jsData = document.getElementById('blog-space');



for(let i in jsSyllabus){
    jsData.innerHTML +=`
    <div class="blog rounded mt-3">
        <a class="nav-link rounded blog-card p-0 shadow-lg" data-bs-toggle="collapse" href="#${jsSyllabus[i].id}" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div class="d-flex justify-content-start align-items-center pe-2">
                <div class="icon-tile">
                    <img src="${jsSyllabus[i].icon}" alt="" class="syl-icon">
                </div>
                <div class="title-header p-3">
                    <h1 class="h6 mb-0 text-dark">${jsSyllabus[i].title}</h1>
                </div>
            </div>
        </a>
        <div class="collapse" id="${jsSyllabus[i].id}">
            <div class="card card-body">
            <iframe src="${jsSyllabus[i].theoryLink}" sandbox="allow-same-origin" class="mb-2" id="read-iframe">
                </iframe>

                <div class="stack-iframe mt-1">
                    <iframe src="${jsSyllabus[i].exampleLink}" class="exiframe" allow-script="yes" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Remove all blank iframe src
let validate = document.querySelectorAll('[src="/"]');
for(let x = 0; x < validate.length; x++){
    validate[x].style.display = "none";
}