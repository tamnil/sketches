const bank = require('../bank')


describe('testing inner private functions', ()=>{


    it('should test  inner account tax',  () => {

        const tax1 = {
            default:11.00,
            currentAccount: {
                IOF: 10.00,
                SPREAD: 150.00
            },
            savingsAccount: {
                IOF: 14.00,
                SPREAD: 1300.00
            }
        }

        let taxResult1 = bank.__priv.accountTax('currentAccount')(tax1);
        expect(taxResult1).toBe(260)

    })

})

describe('testing main exported functions', ()=>{

    it('should test savingsAccount', async (done) => {

        const tax1 = {
            default:11.00,
            currentAccount: {
                IOF: 10.00,
                SPREAD: 150.00
            },
            savingsAccount: {
                IOF: 14.00,
                SPREAD: 1300.00
            }

        }

        const tax2 = {
            default:1.00,
            currentAccount: {
                IOF: 1.00,
                SPREAD: 10.00
            },
            savingsAccount: {
                IOF: 1.00,
                SPREAD: 100.00
            }

        }
        const taxResults1 = bank.savingsAccount(tax1)(123)(-1300)
        const taxResults2 = bank.savingsAccount(tax2)(123)(-1300)

        expect(taxResults1).toBe(-2877)
        expect(taxResults2).toBe(-1524)



        done()
    })


    it('should test currentAccount', async (done) => {

        const tax1 = {
            default:11.00,
            currentAccount: {
                IOF: 10.00,
                SPREAD: 150.00
            },
            savingsAccount: {
                IOF: 14.00,
                SPREAD: 1300.00
            }

        }

        const tax2 = {
            default:1.00,
            currentAccount: {
                IOF: 1.00,
                SPREAD: 10.00
            },
            savingsAccount: {
                IOF: 1.00,
                SPREAD: 100.00
            }

        }
        const taxResults1 = bank.currentAccount(tax1)(123)(-1300)
        const taxResults2 = bank.currentAccount(tax2)(123)(-1300)

        expect(taxResults1).toBe(-1683)
        expect(taxResults2).toBe(-1434)



        done()
    })
})
