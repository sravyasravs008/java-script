class product{
    constructor(){
        console.log("samsung")
        console.log("model note 10")
    } 
}

class product_2 extends product{
    constructor(){
        super()
        console.log("55000")
    }
}
let p=new product_2()