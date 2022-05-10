var submit_check = document.getElementById('submit');
var icons = document.getElementsByClassName('fa-exclamation-circle');
var notes = document.getElementsByClassName('note');
var variable = document.getElementsByClassName('check');
var check_Nam = document.getElementById('nam');
var check_Nu = document.getElementById('nu');

submit_check.addEventListener('click', function(){
	checkValue();
})
function checkValue(){
	for(var i = 0; i < variable.length; i++){
		icons[i].classList.remove('active-icon');
		notes[i].classList.remove('active-note');
	}
	for(var i = 0; i < variable.length ; i++){
		if(variable[i].value == ''){
			icons[i].classList.add('active-icon');
			notes[i].classList.add('active-note');
		}
	}
	if(validateEmail(variable[1].value) == false){
		icons[1].classList.add('active-icon');
		notes[1].classList.add('active-note');
	}
	if(isVietnamesePhoneNumber(variable[2].value) == false){
		icons[2].classList.add('active-icon');
		notes[2].classList.add('active-note');
	}
	if(variable[0].value.length <= 8){
		icons[0].classList.add('active-icon');
		notes[0].classList.add('active-note');
	}
	if(variable[3].value != variable[4].value){
		icons[4].classList.add('active-icon');
		notes[4].classList.add('active-note');
	}
	if(check_Nam.checked == false && check_Nu.checked == false ){
		alert("Không được để trống giới tính !!!");
	}
}

function setValueNam(){
	document.getElementById('nam').value = 'Nam'
}
function setValueNu(){
	document.getElementById('nu').value = 'Nữ'
}

//Hàm validateTrả về true nếu đúng và trả về false nếu sai
//Hàm validate email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
} 
//Số điện thoại gồm 10 số nếu có nhập số 0 ở đầu tiên. Nếu không nhập 0 thì còn 9 số.
function isVietnamesePhoneNumber(number) {
	return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

//Hàm xóa nội dung
function refreshValue(){
	check_Nam.checked = false;
	check_Nu.checked = false;
	for(var i = 0; i < variable.length; i++){
		variable[i].value = '';
	}
	for(var i = 0; i < variable.length; i++){
		icons[i].classList.remove('active-icon');
		notes[i].classList.remove('active-note');
	}
}

const passField = document.getElementById("password");
const cfpassField = document.getElementById("cfpassword");
const showBtn = document.getElementById("eye");
const cfshowBtn = document.getElementById("cfeye");
showBtn.onclick = (()=>{
    if(passField.type === "password"){
     	passField.type = "text";
        showBtn.classList.add("hide-btn");//Thêm class hide-btn
    }else{
        passField.type = "password";
        showBtn.classList.remove("hide-btn");
    }
});
cfshowBtn.onclick = (()=>{
    if(cfpassField.type === "password"){
     	cfpassField.type = "text";
        cfshowBtn.classList.add("hide-btn");//Thêm class hide-btn
    }else{
        cfpassField.type = "password";
        cfshowBtn.classList.remove("hide-btn");
    }
});