window.onload = function(){
    $("calculate").onclick = processEntries;
    $("clear").onclick = clear;
}
var $ = function (id) {
    return document.getElementById(id); 
};
var clear = function(){
    $("subtotal").value ="";
    $("tax_rate").value ="";
}
var processEntries = function(){
    var subtotal = parseFloat($("subtotal").value);
    var taxrate = parseFloat($("tax_rate").value);
    var tax= subtotal * taxrate;
    var total= subtotal + tax;
    $("sales_tax").value = tax;
    $("total").value = total;
};
