var month=prompt("enter a number")
var year=prompt("enter a year")
var year=()=>{
    if(month>=1 && month<=12){
        if(month == 2 && year%400 ==0){
             console.log("The month has 28 days")        
        }
        else if(month ==4 || month ==6 || month ==9 || month ==11 ){
            console.log("The month has 30 days")
        }
        else if(month==1 || month ==3 || month ==5 ||month==7||month ==8 || month ==10 || month ==12){
            console.log("The month has 31 days")
        }
    }
     else{
         console.log("invalid month")
     }
}
year()
