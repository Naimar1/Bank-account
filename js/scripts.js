//$(document).ready(function(){
    //$("#checkBalance").on("click", function() {
      //  var initBalance = 
      //  parseInt($("#checkBalance").html()).replace("frw","")
      //  console.log("This is the checking balance. " + typeof initBalance )

       // var deposit = parseInt($("checkAmount")).val()
       // console.log("This is the deposit: "+ deposit)

       // var total = deposit + initBalance 
       // console.log("This is the total: " + total)

       // $("#checkingBalance").html("frw" + total)
  //  })
//})



$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
 
var namedepose=$("#fname").val();
console.log(namedepose);
$("#first").text(namedepose);

var fdeposit=$("#initmount").val();
console.log(fdeposit);
$("#second").text(fdeposit);
if ($("button#depmoney2")) {

	$("button#depmoney2").click(function(){
    var secdepose = parseInt($('#depmoney1').val());
    var capital = secdepose + parseInt(fdeposit);
    $('#first').text(capital);
})

}

$("button#withdmoney2").click(function(){
    var wdmoney = parseInt($('#withdmoney1').val());
    var capital = parseInt(fdeposit)-wdmoney;
    $('#second').text(capital);


});
});
 });
