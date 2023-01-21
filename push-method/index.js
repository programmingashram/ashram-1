//  Access all the input fields and sections
let sginUp = document.getElementById('sginup');
let login = document.getElementById('login');
let admin = document.getElementById('admin');
let sginBtn = document.getElementById('sginButton');
let loginbtn = document.getElementById('loginbtn');


// Accesse ragister emails and password
let RagisterEmail = document.getElementById('email');
let RagisterPass = document.getElementById('pass');


// Accesse Login emails and password
let LoginEmail = document.getElementById('Logemail');
let LoginPass = document.getElementById('Logpass');

//  By Default We're hide log in page and admin page
login.style.display = "none";
admin.style.display = "none";


// creating Blank Array -  (Globaly)
let array = [];

//  Createing function for disbled button for sginup form
function btnvalid(){
    if (RagisterEmail.value !== '' && RagisterPass.value !== ''){
          //  Remove class from button by using classList.roemove()
        sginBtn.classList.remove('disabled');
    }else{
        console.log('Please fill Inputs');
    }
}

//  Createing function for disbled button for logim form
function loginbtnvalid(){
    if (LoginEmail.value !== '' && LoginPass.value !== ''){
        //  Remove class from button by using classList.roemove()
        loginbtn.classList.remove('disabled');
    }else{

        loginbtn.log('Please fill Inputs');
    }
}


// creating function for adding data in array
function addData(){ 
    //Validation
    // Blank Fields
    if(RagisterEmail.value == ''){
        alert("Please fill email");
    }
    else if(RagisterPass.value == ''){
        alert("Please fill pass");
    }
    else{
        //  If our pre condtions are false then  
        console.log("Success FIll");
        sginUp.style.display = "none";
        login.style.display = "block";
        //  We are push (addign data from object) in array;
        array.push({email : RagisterEmail.value, pass: RagisterPass.value});
        //console.log(array);
    }
}
   

// Creating function for matching user (Login Page)
function matchUser(){
    if(LoginEmail.value == ''){
        alert("Please Fill Valid email");
    }
    else if(LoginPass.value == ''){
        alert('Please fill Valid Pass');
    }
    else{
        mySaveData();
    }
}


// Creating function for saved data 
function mySaveData(){
    //  Lets run the loop
    for(let i in array){
        if(LoginEmail.value === array[i].email && LoginPass.value === array[i].pass){
            login.style.display = "block";
            sginUp.style.display = "block";
            admin.style.display = "block";
            RagisterEmail.value = '';
            RagisterPass.value = '';
            LoginEmail.value = ''; 
            LoginPass.value = '';
            tableData.innerHTML +=`
                <tr>
                    <td>
                        ${array[i].email}
                    </td>
                    <td>
                        ${array[i].pass}
                    </td>
                </tr>
            `;

        }else{
            alert("Incorrect Email or pass!!!!");
        }
    }
}


