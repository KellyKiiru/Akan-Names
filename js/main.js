let yourName = document.getElementById('yourName');

let p1 = document.getElementById('p1');

let p2 = document.getElementById('p2');

let p3 = document.getElementById('p3');

let p4 = document.getElementById('p4')

let p5 = document.getElementById('p5')

let date = document.getElementById('date');

let month = document.getElementById('month');

let year = document.getElementById('year');

let genders = document.getElementById('gender')

const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


const maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",]

const femaleAkanNames =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']

const gender = ['male','female']

function myFunction() {


    let tarehe = new Date(year.value + ',' + month.value + ',' + date.value);

    if (yourName.value === '' || yourName.value == null){
        alert('please input name')
    } 
    else if(genders.value == 'male' && tarehe.getDay() == week.indexOf('Sunday')){ 
        p5.innerHTML ='Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + maleAkanNames[0]
    } 
    else if(genders.value == 'male' && tarehe.getDay() == week.indexOf('Monday')){
        p5.innerHTML = 'Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + maleAkanNames[1]
    } 
    else if(genders.value == 'male' && tarehe.getDay() == week.indexOf('Tuesday')){
        p5.innerHTML = 'Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + maleAkanNames[2]
    } 
    else if(genders.value == 'male' && tarehe.getDay() == week.indexOf('Wednesday')){
        p5.innerHTML = 'Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + maleAkanNames[3]
    } 
    else if(genders.value == 'male' && tarehe.getDay() == week.indexOf('Thursday')){
        p5.innerHTML = 'Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + maleAkanNames[4]
    } 
    else if(genders.value == 'male' && tarehe.getDay() == week.indexOf('Friday')){
        p5.innerHTML = 'Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + maleAkanNames[5]
    } 
    else if(genders.value == 'male' && tarehe.getDay() == week.indexOf('Saturday')){
        p5.innerHTML = 'Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + maleAkanNames[6]
    }
    if(genders.value == 'female' && tarehe.getDay() == week.indexOf('Sunday')){
        p5.innerHTML ='Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + femaleAkanNames[0]
    } 
    else if(genders.value == 'female' && tarehe.getDay() == week.indexOf('Monday')){
        p5.innerHTML = 'Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + femaleAkanNames[1]
    } 
    else if(genders.value == 'female' && tarehe.getDay() == week.indexOf('Tuesday')){
        p5.innerHTML = 'Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + femaleAkanNames[2]
    } 
    else if(genders.value == 'female' && tarehe.getDay() == week.indexOf('Wednesday')){
        p5.innerHTML = 'Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + femaleAkanNames[3]
    } 
    else if(genders.value == 'female' && tarehe.getDay() == week.indexOf('Thursday')){
        p5.innerHTML = 'Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + femaleAkanNames[4]
    } 
    else if(genders.value == 'female' && tarehe.getDay() == week.indexOf('Friday')){
        p5.innerHTML = 'Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + femaleAkanNames[5]
    } 
    else if(genders.value == 'female' && tarehe.getDay() == week.indexOf('Saturday')){
        p5.innerHTML = 'Hi'+' '+ yourName.value +', '+ 'your Akan name is:' + ' ' + femaleAkanNames[6]
}
}

