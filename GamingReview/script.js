let count = 0;

function IncreaseCount() {
    return count++;
}

function DecreaseCount() {
    return count--;
}

function resetcount() {
    return count = 0;
}



const increasebtn = document.querySelector('.js-Increase-btn');
const countDiv = document.querySelector('.count');
increasebtn.addEventListener('click' , () => {
    console.log('hi');
    const count = IncreaseCount();
    console.log(count);
    countDiv.innerHTML = count;
    
})


const decreasebtn = document.querySelector('.js-Decrease-btn');

decreasebtn.addEventListener('click' , () => {
    console.log('hello');
    const count = DecreaseCount();
    console.log(count);
    countDiv.innerHTML = count;
    
})

const resetbtn = document.querySelector('.js-Reset-btn');

resetbtn.addEventListener('click' , () => {
    console.log('hello');
    const count = resetcount();
    console.log(count);
    countDiv.innerHTML = count;
    
})



