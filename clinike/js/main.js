let form=document.getElementById('form');
let uName=document.getElementById('name');
let email=document.getElementById('email');
let phone=document.getElementById('phone');
let info=document.getElementById('info');
let password=document.getElementById('password');
let cpassword=document.getElementById('cpassword');
let image=document.getElementById('image');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

   if( Validate())
    {
        alert("DONE");
    };
});

let Validate =()=>
{
    let errors = [];
    // ERROR FUNCTEON
    let error = (Element,msg)=>
    {
        let formGroup = Element.parentElement;
        formGroup.className = "form-group error";
        formGroup.querySelector('small').innerText=msg;
    }

    let success = (Element)=>
    {
        let formGroup = Element.parentElement;
        formGroup.className = "form-group success";
    }



    // NAME FILED VALIDATION
    if(uName.value==="")
    {
        error(uName, 'Name field is required ')
        errors.push(1);
    }else if(uName.value.length<3)
    {
        error(uName, 'Name must be at least 3 characters!');
        errors.push(1);
    }else if(uName.value.match(/[0-9]/g))
    {
        error(uName, 'Name can be only string!');
        errors.push(1);
    }
    else
    {
        success(uName);
    }
   
    // EMALIL FIELD VALIDATION

    if(email.value === ""){
        error(email, 'Email field is required!');
        errors.push(1);
    }else if (!email.value.includes("@"))
    {
        error(email, 'Invalid email address');
        errors.push(1);
    }else if(email.value.length< 5)
    {
        error(email, 'Email must be at least 5 characters');
        errors.push(1);
    }else
    {
        success(email);
    }

    // PHONE FIELD VALIDATION

    if(phone.value === "")
    {
        error(phone, 'phone field is required!');
        errors.push(1);
    }else if(phone.value.match(/[a-zA-Z]/g))
    {
        error(phone, ' phone can be only number!');
        errors.push(1);

    }else if (phone.value.length<10)
    {
        error(phone, 'phone number must be at least 10 characters');
        errors.push(1);
    }else{
        success(phone);
    }


    // TEXT AREA VALIDATION
    if(info.value === "")
    {
        error(info, 'info field is required!');
        errors.push(1);

    }else{
        success(info);
    }

    // PASSWORD FLILD VALIDATION
    if(password.value === ""){
        error(password, 'password field is required!');
        errors.push(1);

    }else if(password.value.length <6)
{
    error(password, 'password must be at least 6 characters');
    errors.push(1);
}else{
    error(password);
}
    

    // CONFIRM PASSWORD VALIDATION

    if(cpassword.value === ""){
        error(cpassword, 'Confirm password field is required!');
        errors.push(1);
    }else if(password.value != cpassword.value)
    {
        error(cpassword, 'password didnt match');
        errors.push(1);
    }else{
        success(cpassword);
    }

    // IMAGE FIELD VALIDATION
    if(image.value ==="")
    {
        error(image, 'image field is required!');
        errors.push(1);
    }else{
        success(image);
    }

    if(errors.length > 0)
    {
        return false;
    }
    else{
        return true;
    }
}
