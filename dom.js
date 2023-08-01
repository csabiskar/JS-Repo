let para_1=document.querySelector("#para1")
let para_2=document.getElementById("para2")
let para_3=document.getElementById("para3")
let para_4=document.getElementById("para4")
let para_5=document.getElementById("para5")
let para_6=document.getElementById("para6")
let btn=()=>{
     document.body.style.backgroundColor="red"
     document.body.style.color="white"
     
     let nameinputEl=document.getElementById("name").value
     para_1.textContent="Name: "+nameinputEl
     para_1.style.color="black"
    
     let emailinputEl=document.getElementById("email").value
     para_2.textContent="Email: "+emailinputEl

     let passinputEl=document.getElementById("pass").value
     para_3.textContent="password: "+passinputEl

     let dobinputEl=document.getElementById("date").value
     para_4.textContent="Date of Birth: "+dobinputEl

     let genderinputEl=document.getElementById("gender").value
     para_5.textContent="Gender: "+genderinputEl

     let addressinputEl=document.querySelector("#address").value
     para_6.textContent="Address: "+addressinputEl
}
