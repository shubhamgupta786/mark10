const billAmount =document.querySelector('#bill-amount');
const cashGiven=document.querySelector('#cash-given');
const checkbutton =document.querySelector('#check-button');
const op=document.querySelector('#error-message');
const availableNotes=[2000,500,100,20,10,5,1];
const notes=document.querySelectorAll('.no-of-notes');
checkbutton.addEventListener('click',validateBillAndCashAmount );

function validateBillAndCashAmount(){
 hideMessage();
//op.style.display='none';
if(billAmount.value>0){
if(Number(cashGiven.value) >= Number(billAmount.value) ){
const amounttoBeReturned=cashGiven.value-billAmount.value;
calculateChange(amounttoBeReturned);

}
else{
  console.log(billAmount.value);
  console.log(cashGiven.value);
  showMessage('Do you want  wash plates.');
}
}
else{
  op.style.display='block';
  showMessage('Invalid billAmount');
  
}

}
function hideMessage(){
 op.style.display='none';
}

function showMessage(message){
  op.style.display='block';
  op.innerText=message;
}
function calculateChange(amount){
for(let i=0;i<availableNotes.length;i++){
const numberofNotes=Math.trunc(amount/availableNotes[i]);
amount=amount%availableNotes[i];
//amout=amount-numberofNotes*availableNotes[i];
notes[i].innerText=numberofNotes;

}




}