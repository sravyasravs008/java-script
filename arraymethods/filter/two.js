let products=[
    {name:"samsung",model:'flip',price:60000},
    {name:"iphone",model:'s9',price:70000},
    {name:"realmi",model:'6pro',price:80000},
    {name:"poco",model:'x3',price:90000},
    {name:"oppo",model:'f9',price:60000},
    {name:"onepluse",model:'7t',price:45000},
]
let new_product=products.filter((product)=>{
    return product.price>70000
})
console.log(new_product)