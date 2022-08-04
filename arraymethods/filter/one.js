let colour=[
    {col:"Blue",   id:101, meng:"plseant"},
    {col:"green",  id:202, meng:"greenary"},
    {col:"orange", id:505, meng:"enter"},
    {col:"white",  id:404, meng:"peace"},
    {col:"blue",   id:505, meng:"press"},
    {col:"blue",   id:606, meng:"hello"},
]
let new_colour=colour.filter((color)=>{
    return color.col=="blue" && color.id==505
})
//console.log(colour)
console.log(new_colour)