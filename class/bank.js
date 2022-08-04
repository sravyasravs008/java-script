class bank{
    min_bal=50000
    account_opened(){
        console.log('account opened successfully')
    }
    amount_deposited(x){
        console.log(x,"amount deposited")
    }
    account_closed(){
        return this.min_bal
    }
}
let a= new bank()
console.log(a)
a.amount_deposited(4000)
a.account_closed()

