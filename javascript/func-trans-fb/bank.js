const accountTax = accountType => tax => tax.default * tax[accountType].IOF + tax[accountType].SPREAD;
const serviceAndTaxValue = accountType => tax => serviceValue => serviceValue + accountTax(tax)(accountType);
const account = accountType => tax => serviceValue => currentValue => currentValue - serviceAndTaxValue(tax)(accountType)(serviceValue);


const savingsAccount = account('savingsAccount')
const currentAccount = account('currentAccount')

const customerAccountRetrieve = (accountType) => (tax) => (serviceValue) => (customerId)=> ({
    id:'',
    currentValue:10
})


const payService = (accountType)=>tax => (customerId) => (serviceValue) => {
    const customerAccount = customerAccountRetrieve(accountType)(customerId)
    return {
        accountId: customerAccount.id,
        taxValue: account(accountType)(tax)(serviceValue)(customerAccount.currentValue)
    };

}


// [accountType]
module.exports = {
    currentAccount,
    savingsAccount,
    __priv:{
        accountTax,
        serviceAndTaxValue
    }
}

