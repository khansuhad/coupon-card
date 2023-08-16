document.getElementById('pay-button').addEventListener('click',function(){

    const payMessage = document.getElementById('return-pay-message');
    const totalAmount = document.getElementById('total-amount').innerText;

    payMessage.innerText = `your order successful . Total pay : ${totalAmount} .Thank you for stay with us....` ;
});