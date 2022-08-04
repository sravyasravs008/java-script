class bank1{
    main_colour="pink"
    blue_colour(){
        console.log("water is blue")
    }
    samsung_note10(){
        console.log('60000')
    }
}
class bank extends bank1{  
}
let b=new bank()
console.log(b.main_colour)
b.blue_colour()

class product extends bank1{
}
let c=new product()
console.log(c.main_colour)
c.samsung_note10()