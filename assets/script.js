
// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "JorgeIvan Ramirez-Franco" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // total

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`


// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const  qty_gb = document.querySelector('#qty-gb')
console.log(qty_gb)
// Code to update name display

const qty_sugar = document.querySelector('#qty-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const sugarPlusBtn = document.querySelector('#add-sugar')

const qty_chocolateChip = document.querySelector('#qty-cc')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

// prolly put this with other lets//  
//but i like here because it follows my procedural thought process//
let quant = document.querySelector('#qty-total')
console.log(quant)

ccPlusBtn.addEventListener('click', function(){
    cc = cc +1 //same as cc++
    qty_chocolateChip.textContent = cc
    total++
    quant.textContent = total
})
ccMinusBtn.addEventListener('click', function(){
    if (cc > 0){
        cc = cc -1
        qty_chocolateChip.textContent = cc
        total--
        quant.textContent = total
    }
})

// Event listener for clicks on the "+" button for Gingerbread cookies
sugarPlusBtn.addEventListener('click', function(){
    sugar = sugar +1
    qty_sugar.textContent = sugar
    total++
    quant.textContent = total
})
sugarMinusBtn.addEventListener('click', function(){
    if (sugar > 0){
        sugar = sugar -1
    qty_sugar.textContent = sugar
    total--
    quant.textContent = total
    }
    
})


gbMinusBtn.addEventListener('click', function(){
    
    if (gb > 0){
        gb = gb -1
        qty_gb.textContent = gb  
        total--
        quant.textContent = total  
    }
    
})

gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')
console.log('before', gb)
gb = gb +1 
qty_gb.textContent = gb
total++
    quant.textContent = total
console.log('after', gb)
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons  