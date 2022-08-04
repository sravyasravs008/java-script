let cars=[
    { brand: "Hyndai", price: 1299999, model: '120', color: 'red' },
{ brand: "Hyndai", price: 1299999, model: '120', color: 'maroon' },
{ brand: "Maruthi", price: 800000, model: 'Brezza', color: 'black' },
{ brand: "Tata", price: 590000, model: 'indica', color: 'red' },
{ brand: "Maruthi", price: 299999, model: 'Alto 800', color: 'maroon' },
{ brand: "Tata", price: 1599999, model: 'Nexon', color: 'maroon' },
{ brand: "BMW", price: 11299999, model: 'x7', color: 'red' }
]
let new_cars=cars.filter((car)=>{
    return car.color=="maroon"
})
console.log(new_cars)