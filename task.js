var num=parseInt(prompt("enter a number"))
var gardeSystem=()=>{
    if(num>=90 && num<=100){
        console.log("A Grade")
    }
    else if(num>=70 && num<=90){
        console.log(" B Grade")
    }
     else if(num>=50 && num<=70){
        console.log(" C Grade")
    }
     else if(num>=35 && num<=50){
        console.log(" D Grade")
    }
    else{
        console.log("you failed")
    }
}
gardeSystem()
