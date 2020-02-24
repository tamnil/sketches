
const accountTax =  accountType  => tax => tax.default * tax[accountType].IOF + tax[accountType].SPREAD;
const serviceAndTaxValue =  accountType => tax => serviceValue => serviceValue + accountTax(tax)(accountType);
const account =  accountType => tax => serviceValue =>  currentValue => currentValue - serviceAndTaxValue(tax)(accountType)(serviceValue);


const savingsAccount =  account('savingsAccount')
const currentAccount =  account('currentAccount')

    // accountType => tax =>  (serviceValue) => (currentValue) => currentValue - serviceAndTaxValue(tax)(accountType) (serviceValue) ;



// [accountType]
module.exports = {
    currentAccount,
    savingsAccount,
    __priv:{
        accountTax,
        serviceAndTaxValue
    }
}

