//Given the following data, implement a function that calculates the total sales and total tax, grouped by company.
/*
function - takes two vars, returns object with first var applied
  for statement that goes through companySales and adds sales together
    if statement that checks with province matches and aplies sale tax
*/
var results = {};
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10

};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var totalTax;
var tax;
var totalSales;
var province;
var companyName;

function calculateSalesTax(salesData, taxRates) {
    for(var key in salesData){

      totalSales = 0;//resetting all values
      province = '';
      totalTax = 0;
      tax = 0;
      companyName = '';

      if (salesData.hasOwnProperty(key)) { //going into object

        var company = salesData[key]; //sets company
        for (var i in company.sales){ //calcs total sales
          totalSales += company.sales[i];
          company['totalSales'] = totalSales;//adds totalSales to company
        }

      province = company.province; //sets province
      companyName = company.name;
      whichProvince(taxRates, province, totalSales); //applies correct tax

      }
        if (company.name = results[company.name]) { //if statement to see if company is already entered.

          var dupSales = results[companyName]['totalSales'];
          var dupTax = results[companyName]['totalTax'];

          results[companyName] = {['totalSales']: totalSales + dupSales, // adds same company
                                  ['totalTax']: totalTax + dupTax};
        }
        else{

          results[companyName] = {['totalSales']: totalSales, // adds new company
                                  ['totalTax']: totalTax};
        }

      }
  return results;
}


function whichProvince(taxRates, province, totalSales) {

  for (var x in taxRates){

    if (taxRates.hasOwnProperty(x)) {
      if (province == x) {//checks which province it is

        tax = taxRates[x];
        totalTax = totalSales * tax;//applies correct tax to totalSales

        return totalTax;
      }
    }
  }
}




//stuff.push( {'name':$(this).attr('checked')} );

calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

//console.log(companySalesData);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/