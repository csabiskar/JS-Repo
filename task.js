let value=(num1,num2,num3)=>{
    if(num1>num2 && num1>num3){
        console.log("num1 is largest")
        if(num2<num3){
            console.log("num2 is largest")
        }
        else {
            console.log("num3 is largest")
        }
    }
    else{
        console.log("num2 is largest")
    }
    } 
    value(23,22,10)