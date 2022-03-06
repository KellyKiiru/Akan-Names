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

    p1.innerHTML = genders.value

    p2.innerHTML = maleAkanNames[5]

    p3.innerHTML = week.indexOf('Friday')

    p4.innerHTML = week.join(',')

    if (yourName.value === '' || yourName.value == null){
        alert('please input name')
    } 
    if(genders.value == 'male' && tarehe.getDay() == week.indexOf('Friday')){
        p5.innerHTML = 'Your Akan name is:' + ' ' + maleAkanNames[5]
    }
}



