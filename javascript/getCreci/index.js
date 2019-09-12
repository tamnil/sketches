const axios = require("axios");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

axios
  .post("https://www.crecisp.gov.br/o-creci/obterdadosdelegacia", {
    DelegacyId: "",
    ZipCode: "",
    CityCode: "0005"
  })
  .then(x => {
    const dom = new JSDOM(x.data);
    console.log(x.data)


    const el = dom.window.document.getElementsByClassName('delegacy-cities')[0].getElementsByTagName('p')

    console.log(el)

    let arr = [...el]

    console.log(arr.map(x=> x.innerHTML))
  });
