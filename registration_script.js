function saveData(){
    let name, email, password;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if(name=="" ||email=="" || password==""){
        alert("All Fields Are Required");
        return false;
    }
    else{
        true;
    }
    let user_record = new Array();
    user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_record.some((v)=>{
        return v.email==email;
    })){
        alert("Duplicate Data");
        return false;
    }
    else{
        user_record.push({
            "name":name,
            "email":email,
            "password":password,
        })
        localStorage.setItem("users",JSON.stringify(user_record));
    }
}