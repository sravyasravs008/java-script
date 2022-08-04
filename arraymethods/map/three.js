let account=[101,202,303,404,505]
account.map((newaccount)=>{
    console.log(newaccount+100)
})
let a=account.map((newaccount)=>{
    return newaccount+100
})
console.log(account)
console.log(a)