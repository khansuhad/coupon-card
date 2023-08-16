document.getElementById('apply-button').addEventListener('click',function(){

const coupon = document.getElementById('coupon-number');
const couponValue = coupon.value ;
const payMessage = document.getElementById('return-apply-message');
const totalAmount = document.getElementById('total-amount');
const totalAmountValue = Number(totalAmount.innerText);
const applyButton = document.getElementById('apply-button');


if(couponValue === 'sak1234'){
  const  discountAmount =  (totalAmountValue * 30) / 100 ;
  const  newTotalAmount = totalAmountValue - discountAmount ;
  
    payMessage.innerText = `Wow!!!you get 30% Discount...Now your Total is ${newTotalAmount}`
    totalAmount.innerText = newTotalAmount ;
    coupon.value = '';
    applyButton.setAttribute('disabled' ,'true');
    return ;
}
else{
    payMessage.innerText = 'Please enter a valid coupon code';
    coupon.value = '';
    }
})