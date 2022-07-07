//concise code
let message=mesg => "gm,"+mesg;
console.log(message("hello"))
console.log(message("gn"))

function wish  (mesg){
   return mesg+"gm"
}
let result = wish("hello")
console.log(result)

function wish  (mesg){
    return "gm"+ mesg
}
let a=wish("hello")
console.log(a)