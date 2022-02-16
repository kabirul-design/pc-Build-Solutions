// document.getElementById('sixteenGB').addEventListener('click', function(){
//     const memoryCost = document.getElementById('memory-cost');
//     memoryCost.innerText = 200;

//     const bestPrice = document.getElementById('best-price').innerText;
//     const memoryPrice = document.getElementById('memory-cost').innerText;
//     const storageCost = document.getElementById('storage-cost').innerText;
//     const deliveryCost = document.getElementById('delivery-cost').innerText;

//     const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storageCost) + parseFloat(deliveryCost);

//     const includingTotalPrice = document.getElementById('total-price');
//     includingTotalPrice.innerText = totalPrice;
    
// })
// same content without function and with func


// document.getElementById('eightGB').addEventListener('click', function(){
//     updatePrice('memory-cost',0);
// })
// document.getElementById('sixteenGB').addEventListener('click', function(){
//    updatePrice('memory-cost', 300);

// })
// document.getElementById('ssd1').addEventListener('click', function(){
//     updatePrice('storage-cost', 300);
    
// })
document.getElementById('paid-delivery').addEventListener('click', function(){
    updatePrice('delivery-cost', 20);
})

function onClick(clickId,updateId,price){
    document.getElementById(clickId).addEventListener('click', function(){
        updatePrice(updateId, price);
        document.getElementById(clickId).style.backgroundColor= "crimson";
    });
}

onClick('sixteenGB','memory-cost', 300 );
onClick('eightGB','memory-cost', 0 );
onClick('ssd1','storage-cost', 0 );
onClick('ssd2','storage-cost', 300 );
onClick('ssd3','storage-cost', 500 );

// storage update ends

function updatePrice(itemId, price){
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;
    // je element gulo ase sob gulor id diye dhorte hobe
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
     // inner text age string value celo setake ekhon number e convert korte hobe..
    const totalPrice =
     parseFloat(bestPrice) + 
     parseFloat(memoryPrice) + 
     parseFloat(storageCost) + 
     parseFloat(deliveryCost);
    // er por tital price + korte hobe
    const includingTotalPrice = document.getElementById('total-price');
    includingTotalPrice.innerText = totalPrice;
}

const fakeCode = 'pHero';
document.getElementById('apply-btn').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-input').value;
     if(promoInput === fakeCode){
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText)
        const discount = (totalPrice*20)/100;
        totalPrice = totalPrice - discount;
        total.innerText = totalPrice;
     }else{

     }

})











