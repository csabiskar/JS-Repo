let shapes=(a,b,c)=>{
    if(a==b && b==c && a==c){
    console.log("Equilateral triangle.")
    }
    else if(a==b || b==c){
    console.log("Isosceles triangle.")
    }
    else {
        console.log("Scalene triangle")
    }
}
shapes(10,10,10)