class colours{
    constructor(){
        console.log("green colour")
        console.log("yellow colour")
    }
    white_colour(){
        console.log("peace")
    }
    red_colour(){
        console.log("danger")
    }
}

class primary_colour extends colours{
    constructor(){
        super()
        console.log("orange colour")
    }
    blue_colour(){
        console.log("water")
    }
}
let c=new primary_colour()
c.white_colour()
c.blue_colour()
