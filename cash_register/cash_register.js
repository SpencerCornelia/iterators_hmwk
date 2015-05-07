var line_items = [
    {description: "aardvark", price: 425, qty: -1},
    {description: "PruNe", price: 1.99, qty: 1},
    {description: "potato", price: .79, qty: -10},
    {description: "zebra", price: 525.25, qty: 1},
    {description: "SpinAch", price: 2.99, qty: 1},
    {description: "zepplin", price: 20000, qty: 1},
    {description: "PetUnia", price: 1.25, qty: 12},
    {description: "squash", price: 2.35, qty: 3}
];

var coupons = [
    {description: "Zebra", discount: 100, limit: 1},
    {description: "squash", discount: 1.00, limit: 1},
    {description: "mouse", discount: 2.00, limit: 10}
];

var $entries, 
    $subTotal;

$(document).ready(function(){

   $entries = $("#entries");
   $subTotal = $('#subtotal');
   $salesTax = $("#salestax");
   $total = $("#total");

  myUtils.myEach(line_items, function(v,i){
    addItem(v.price, v.description, v.qty);
  });

  updateSubTotal();

});

function addItem(price, title, quantity) {
  // YUCK! Let's refactor this!
  var html_string = (
        "<tr>" +
          "<td>" +  title + "</td>" +
          "<td>" + quantity + "</td>" +
          "<td>" + price + "</td>" +
        "</tr>"
  );
  $entries.append(html_string);
}

function updateSubTotal() {
  var subTotalPrice = 0;
  subTotalPrice = myUtils.myReduce(line_items, function(val,v) {   
   return val + (v.price*v.qty);
  });
  $subTotal.text("$" + subTotalPrice); 
  salesTax(subTotalPrice);
}

function salesTax(subTotalPrice) {
  var salesTax = subTotalPrice*.0725;
  $salesTax.text("$" + salesTax);
  updateTotal(subTotalPrice, salesTax);
}

function updateTotal(subTotalPrice, salesTax) {
  var updateTotal = subTotalPrice + Math.floor(salesTax);
  $total.text("$" + updateTotal);
}

/*I couldn't figure out how to sort this.  receipt wouldn't
  return an array, therefore I couldn't sort it.
*/
function sortReceipt() {
  var receipt = myUtils.myEach(line_items, function(val) {
    return val.description;
  })
  receipt.sort(function(a, b) {
    return a - b;
  });
  console.log(receipt);
}




