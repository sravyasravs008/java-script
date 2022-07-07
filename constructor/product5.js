class product{
    pname;
    pprice;
    constructor(a,b){
        this.pname=a
        this.pprice=b
    }
    get_details(){
        console.log(this.pname, "and" ,this.pprice)
    }
}
let c=new product("samsung",40000)
let c2=new product("realme",50000)
console.log(c)
console.log(c2)
c2.get_details()
c.get_details()