function great(){
    console.log(this)
}
great()

let num = ()=>{
    console.log(this)
}
num()