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
  },


];

function calculateSalesTax(salesData, taxRates) {
    //takes in sales data
    var output = {};
    // loop to create object for each company
    for (var i in salesData) {
        var sales = 0;
        var tax = 0;
        var rate = 0;
        var name = salesData[i].name;
        
        // checks if object is already created
        if (!output[name]) {
            output[name] = {
                totalSales: sales,
                totalTaxes: tax
            }         
        }
        // loop to calculate sales
        sales = salesData[i].sales.reduce((sum, sale) => sum + sale, 0);
        
        // calculate taxes
        // total sales times prov rate
        var prov = salesData[i].province;
        rate = taxRates[prov];
        tax = sales * rate;
        
        // adds data to object
        output[name].totalSales += sales;
        output[name].totalTaxes += tax;
    }
    console.log(output);
}
  
var results = calculateSalesTax(companySalesData, salesTaxRates);
//console.log(results);

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