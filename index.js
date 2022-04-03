//render function to render out all the elements that had been put into the cart


const serviceArr = []

const washCar = document.querySelector('#wash-car')
const mowLawn = document.querySelector('#mow-lawn')
const pullWeed = document.querySelector('#pull-weed')

const recieveTask = document.querySelector('.recieve-task')
const cashValue = document.querySelector('.cash-value')


//classname is task but would enter into recieve task

console.log(serviceArr)

function render(arr){
    let total = 0
    let contentHolder = ""
    
    if (recieveTask.hasChildNodes){
        recieveTask.innerHTML = ""
        for(let i = 0; i < arr.length; i++){
            contentHolder  += `<div class="task">
                                        <p>${arr[i].service}</p>
                                        <p>${arr[i].price}</p>
                                </div>`
            
    
            total += arr[i].price
        }
    }
   
    recieveTask.innerHTML += contentHolder 
    cashValue.textContent = `$${total}`

    

  
}

washCar.addEventListener('click', function(){
    for(let i = 0; i < serviceArr.length; i++){
        if(serviceArr[i].service === 'Wash Car'){
            return
            
        } 
    }
    serviceArr.push({
        service:"Wash Car",
        price : 10
    })
    render(serviceArr)
   
    
})

mowLawn.addEventListener('click', function(){
    for(let i = 0; i < serviceArr.length; i++){
        if(serviceArr[i].service === 'Mow Lawn'){
            return
            
        } 
    }
    serviceArr.push({
        service:"Mow Lawn",
        price : 20
    })
    render(serviceArr)
   
    
})

pullWeed.addEventListener('click', function(){
    for(let i = 0; i < serviceArr.length; i++){
        if(serviceArr[i].service === 'Pull Weed'){
            return
            
        } 
    }
    serviceArr.push({
        service:"Pull Weed",
        price : 30
    })
    render(serviceArr)
   
    
})