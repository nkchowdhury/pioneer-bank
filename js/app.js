
//login button handler
document.getElementById('login').addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';

});
//deposit  button handler

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){

  const depositNumber = getInputNumber("depositAmount");
  //  const despositAmount = document.getElementById('depositAmount').value;
  //  const depositNumber = parseFloat(despositAmount);

   
  // const currentDeposit = document.getElementById("currentDeposit").innerText;
  // const currentDepositNumber = parseFloat(currentDeposit);
  // const totalDeposit = depositNumber + currentDepositNumber;
  // document.getElementById("currentDeposit").innerText= totalDeposit;

  // const currentBalance = document.getElementById("currentBalance").innerText;
  // const currentBalanceNumber = parseFloat(currentBalance);
  // const totalBalance = depositNumber + currentBalanceNumber;
  // document.getElementById('currentBalance').innerText = totalBalance;


upDatedSpanText ("currentDeposit", depositNumber);
upDatedSpanText ("currentBalance", depositNumber);
  document.getElementById('depositAmount').value="";
  

})

// withdraw button handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
 const withdrawNumber = getInputNumber("withdrawAmount");
 console.log(withdrawNumber)
})


  // const withdrawNumber = parseFloat(withdrawAmount);

  function getInputNumber(id){

    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;

  }



  


function upDatedSpanText(id, depositNumber ){
    const current = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(current);
    const totalAmount = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalAmount;

}


