function display()
let x= {id: 303, name: 'Rahul', sal: 43000, email: 'rahul@gmail.com'}
for (keys in x){
    console.log(x[keys])
    console.log(keys)
}

let y= {id: 303, name: 'Rahul', sal: 43000, email: 'rahul@gmail.com'}
for (values in y){
    console.log(y[values])
}