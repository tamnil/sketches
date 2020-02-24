/*
 *
 * from: https://medium.com/@richard.h.passos/abordando-conceitos-de-solid-com-programa%C3%A7%C3%A3o-funcional-utilizando-nodejs-7bb444117c4c
 */



const express = require('express')
const server = express()
const port = 3000


  server.post('/bank/payment',
    (...args) => controller.payService(...args)
  );


// trecho 1


module.exports = class BankController extends BaseController {
    payService(req, res, next) {
        const params = {
            customerId: req.body.id,
            accountType: req.body.accountType,
            serviceValue: req.body.value
        }
        return this.service.payService(params)
            .then(values => res.json(values))
            .catch(err => this.errorHandler(err, req, res, next));
    }
};


//trecho2

    async payService({ accountType, customerId, serviceValue }) {
        const {
            id,
            currentValue
        } = await getCustomerAccount(accountType, customerId);

        const taxValue = resolveTax(accountType)(serviceValue, currentValue);

        return setAccountValue({
            accountId: id,
            taxValue
        });
    }

//trecho3
//
    async getCustomerAccount(params) {
        return this.repository.getCustomerAccount(params);
    }

// trecho 4
   async resolveTax({ accountType }) {
        const DEFAULT_TAX = 10.00;
        const tax = {
            currentAccount: {
                IOF: 10.00,
                SPREAD: 150.00
            },
            savingsAccount: {
                IOF: 14.00,
                SPREAD: 1300.00
            }

        }

        return {
            currentAccount: ({
                serviceValue,
                currentValue
            }) => {
                const currentAccountTax =
                    DEFAULT_TAX + tax[accountType].IOF + tax[accountType].SPREAD;

                const serviceAndTaxValue = serviceValue + currentAccountTax;

                return currentValue - serviceAndTaxValue;
            },
            savingsAccount: ({
                serviceValue,
                currentValue
            }) => {
                const savingsAccountTax =
                    DEFAULT_TAX * tax[accountType].IOF + tax[accountType].SPREAD;

                const serviceAndTaxValue = serviceValue + savingsAccountTax;

                return currentValue - serviceAndTaxValue;

            }
        } [accountType]
    }


// trecho 5
//
 const taxValue = resolveTax(accountType)(serviceValue, currentValue);

    async setAccountValue(params) {
        return this.repository.setAccountValue(params)
    }



// teste
//
//
//
const sinon = require('sinon');
const BankService = require('../services/BankService');

describe('BankService', function () {
  beforeEach(function () {
    this.repository = {
      getCustomerAccount: sinon.stub().resolves({
        id: 123,
        currentValue: 150.00
      }),
      setAccountValue: sinon.stub().resolves()
    };

    this.service = new BankService({
      repository: this.repository
    });

  });

  describe('#payService', function () {
    beforeEach(function () {
      this.mockObj = {
        customerId: 123,
        serviceValue: 10.00
      }
    });

    it('Should pay service with current account', async function () {
      const mock = {
        accountType: 'currentAccount',
        ...this.mockObj
      };

      await this.service.payService(mock);

      sinon.assert.calledOnce(this.repository.getCustomerAccount);
      sinon.assert.calledWith(this.repository.getCustomerAccount,
        this.mockObj.accountType, this.mockObj.customerId);

      sinon.assert.calledOnce(this.repository.setAccountValue);
      sinon.assert.calledWith(this.repository.setAccountValue,
        123, -30.00);
    });

    it('Should pay service with savings account account', async function () {
      const mock = {
        accountType: 'savingsAccount',
        ...this.mockObj
      };

      await this.service.payService(mock);

      sinon.assert.calledOnce(this.repository.getCustomerAccount);
      sinon.assert.calledWith(this.repository.getCustomerAccount,
        this.mockObj.accountType, this.mockObj.customerId);

      sinon.assert.calledOnce(this.repository.setAccountValue);
      sinon.assert.calledWith(this.repository.setAccountValue,
        123, -1300.00);
    });
  });
});
