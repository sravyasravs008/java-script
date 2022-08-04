class s_vbank{
    min_balance=400
    open_account(){
        console.log('account opened sucessfully')
    }
}

class savings_account extends s_vbank{
    min_balance=5000
}
let c=new savings_account()
console.log(c.min_balance)
c.open_account()


class amount_credited extends s_vbank{

}
let c1=new amount_credited()
console.log(c1.min_balance)