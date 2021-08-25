const inputValues = document.querySelectorAll(".input-values");
const submitBtn = document.querySelector("#submit-btn");
const outputMessage = document.querySelector("#output");

function calculateProfitOrLoss(initialPrice, quantityOfStocks, currentPrice) {
    if(initialPrice < currentPrice) {
        const profit = (currentPrice - initialPrice) * quantityOfStocks;
        const percent = (profit / initialPrice) * 100;
        outputMessage.innerText = `Hey, Profit is ${profit} and percent is ${percent}%🥳🥳`;
    }
    else if(currentPrice < initialPrice) {
        const loss = (initialPrice - currentPrice) * quantityOfStocks;
        const percent = (loss / initialPrice) * 100;
        outputMessage.innerText = `Hey, Loss is ${loss} and percent is ${percent}%`;
    }
    else {
        outputMessage.innerText = `No pain no gain and no gain no pain😀😀`;
    }
}

function handler() {
    const initialPrice = Number(inputValues[0].value);
    const quantityOfStocks = Number(inputValues[1].value);
    const currentPrice = Number(inputValues[2].value);

    return calculateProfitOrLoss(initialPrice, quantityOfStocks, currentPrice);
}

submitBtn.addEventListener("click", handler);