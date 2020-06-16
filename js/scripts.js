

function Bank(name, deposit) {
 this.accountName = name;
 this.totalMoney = deposit;
}

Bank.prototype.startingAmt = function() {
  
}

Bank.prototype.deposit = function(deposit) {
  this.totalMoney = this.totalMoney + deposit;
}

Bank.prototype.withdrawals = function(withdrawal) {
  this.totalMoney = this.totalMoney + withdrawal;
}


$(document).ready(function(){
  $('form#new-account').submit(function(event) {
    event.preventDefault();
    let clientName = $('input#userName').val();
    let initialBalance = $('input#initialDeposit').val();

    let userBank = new Bank(clientName, initialBalance);

    Bank.withdrawals($('input#giveMeMoney').val())
    Bank.deposit($('input#takeMyMoney').val())
    
    $('.balanceDisplay').text('$' + userBank.totalMoney);
    $('.userName').text(clientName);
  })
})

