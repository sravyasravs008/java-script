class account{
    constructor(){
        console.log("amount debited")
    }
    amount_deposited(){
        console.log("amount deposited")
    }
    amount_credited(){
        console.log("amount credited")
    }
}

class saving_account extends account{
    constructor(){
        super()
        console.log("account deactivated")
    }
}
let c1=new saving_account()
c1.amount_deposited()