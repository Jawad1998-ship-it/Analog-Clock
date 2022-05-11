setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]")
const minuteHand = document.querySelector("[data-minute-hand]")
const secondHand = document.querySelector("[data-second-hand]")



function setClock()
{
    const current = new Date();
    const second = current.getSeconds() / 60;
    const minute = (second + current.getMinutes()) / 60;
    const hour = (minute + current.getHours()) / 12;

    setRotation(hourHand, hour)
    setRotation(minuteHand, minute)
    setRotation(secondHand, second)
}


function setRotation(element, rotationRatio)
{   
    element.style.setProperty('--rotation',rotationRatio * 360 )
}

