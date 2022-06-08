function getInputValue(inputId){
// input deposite
const inputField = document.getElementById(inputId);
const inputAmountText = inputField.value;
const amountValue = parseFloat(inputAmountText);

// clear the deposit input field
inputField.value='';

return amountValue;
}

function updateTotalField(totalFieldId,Anount){
  //debugger;
  const depositTotal = document.getElementById(totalFieldId);
    const previousDepositeText =depositTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newTotal =previousDepositeAmount + Anount;
    depositTotal.innerText =newTotal;
}

function getCurrentBalance(){
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText =balanceTotal.innerText;
  const previousBlanceTotal =parseFloat(balanceTotalText);
  return previousBlanceTotal;
  
}

function updateBalance(Amount, isAdd){
  //blance update
  const balanceTotal = document.getElementById('balance-total');

   const previousBlanceTotal = getCurrentBalance();
   
  if(isAdd == true){
    const newBalanceTotal =previousBlanceTotal + Amount;
    balanceTotal.innerText =newBalanceTotal;
  }
  else{
    const newBalanceTotal =previousBlanceTotal - Amount;
    balanceTotal.innerText =newBalanceTotal;
  }
  

}

          // handle deposite button enevt
document.getElementById('deposit-button').addEventListener('click',function(){
  
     const newDepositeAnount =getInputValue('deposit-input');
         // Total deposite
         if(newDepositeAnount > 0){
          updateTotalField('deposit-total',newDepositeAnount);
          updateBalance(newDepositeAnount,true);
         }
     
  });

  document.getElementById('withdrow-button').addEventListener('click',function(){
   
        const neWithdrawAmount = getInputValue('withdrow-input');
        const newAnount=getCurrentBalance();
        if(neWithdrawAmount>0 && neWithdrawAmount<newAnount){
          updateTotalField('withdraw-total',neWithdrawAmount);
        //blance update
        updateBalance(neWithdrawAmount,false)

        }
        
  });

  