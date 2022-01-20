var btnSubmitForm = document.getElementById('btn-login');
    btnSubmitForm.addEventListener('click',function(e){
    if(validate() == false){
        e.preventDefault();
    }
    else{
        alert('Đăng nhập thành công!')
    }
})
function validate(){
    var flagValidate = true;
    //FullName Validate
    var fullName = document.getElementById('full-name');
    if(fullName.value == ''){
        flagValidate = false;
        fullName.nextElementSibling.textContent = 'Họ tên không được để trống';
    }
    if(fullName.value.length >= 1 && fullName.value.length <= 8){
        flagValidate = false;
        fullName.nextElementSibling.textContent = 'Họ tên phải lớn hơn 8 ký tự';
    }
    //Mail Validate
    var mailValidate = document.getElementById('mail');
    if(mailValidate.value == ''){
        flagValidate = false;
        mailValidate.nextElementSibling.textContent = 'Email không được để trống';
    }
    else{
        if(validateEmail(mailValidate.value) == false){
            flagValidate = false;
            mailValidate.nextElementSibling.textContent = 'Email sai định dạng';
        }
        else{
            flagValidate = true;
            mailValidate.nextElementSibling.textContent = '';
        }
    }
    //Phone Number validate
    var phoneNumber = document.getElementById('phone-number');
    if(phoneNumber.value == ''){
        flagValidate = false;
        phoneNumber.nextElementSibling.textContent = 'Số điện thoại không được để trống';
    }
    else{
        if(isVietnamesePhoneNumber(phoneNumber.value) == false){
            flagValidate = false;
            phoneNumber.nextElementSibling.textContent = 'Số điện thoại không được chứa chữ';
        }
        else{
            flagValidate = true;
            phoneNumber.nextElementSibling.textContent = '';
        }
    }
    //Password validate
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('password-confirm');
    if(password.value == ''){
        flagValidate = false;
        password.nextElementSibling.textContent = 'Mật khẩu không được để trống';
    }
    if(password.value != passwordConfirm.value){
        flagValidate = false;
        passwordConfirm.nextElementSibling.textContent = 'Mật khẩu nhập lại không đúng';
    }
    return flagValidate;
}
function fnMaleFemale(n) {
    
}
//Hàm validate email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//Hàm validate số điện thoại: Trả về true nếu đúng và trả về false nếu sai
function isVietnamesePhoneNumber(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}