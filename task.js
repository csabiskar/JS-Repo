var num1=parseInt(prompt("enter a number"))
var num2=parseInt(prompt("enter a number"))
var answer=prompt("enter a number")
var num=(num1,num2,answer)=>{
    if(answer==="add" || answer==="+"){
        console.log("Result :",num1+num2)
    }
    else if(answer==="subtract" ||answer==="-"){
        coonsole.log("Result : ",num1-num2)
    }
    else if(answer==="multiply" ||answer==="*"){
        console.log("Result :",num1*num2)
    }
    else if(answer==="divide" || answer==="/"){
        console.log("Result :",num1/num2)
    }
    else if(answer==="modulos" || answer==="%"){
        console.log("Result :",num1%num2)
    }
    else{
        console.log("the expression is invalid")
    }
}
num(num1,num2,answer)
