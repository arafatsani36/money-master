document.getElementById('Calculate-btn').addEventListener('click', function(){
    
    const myIncome = totalCost('iname');
    const totalExpensesElement = innerText('totalExpenses');
    
    totalExpensesElement = calculater();
    totalExpensesElement.innerText =  bueProduct();
    const blanceElement = innerText('blance');
    blanceElement.innerText = parseInt( myIncome) -  bueProduct();

})



function bueProduct(){
    const foodElement = totalCost('fname');
    const rentElement = totalCost('rname');
    const clotherElement = totalCost('cname');
    const total = parseInt(foodElement) + parseInt(rentElement) + parseInt(clotherElement);
    return total;
}

function innerText(id){
    const text = document.getElementById(id);
    return text;
}

function totalCost(id){
    const foodElement = document.getElementById(id).value;
    return foodElement;
}