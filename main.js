let payDOM = document.querySelector("#pay");
let calculate = document.querySelector("#calculate");
let amountsPayable = document.querySelector("#amountsPayable");
let process;
function bill(event) {
  event.preventDefault();
  if (payDOM.value == "") {
    amountsPayable.innerHTML = "lütfen miktar giriniz";
  } else if (document.querySelector("#v12").selected) {
    process = parseInt(payDOM.value) + parseInt(payDOM.value);
    amountsPayable.innerHTML = process = process.toFixed(2);
    console.log(process);
  } else if (document.querySelector("#v24").selected) {
    process = parseInt(payDOM.value) + parseInt(payDOM.value) * 1.2;
    amountsPayable.innerHTML = process = process.toFixed(2);
    console.log(process);
  } else if (document.querySelector("#v36").selected) {
    process = parseInt(payDOM.value) + parseInt(payDOM.value) * 1.5;
    amountsPayable.innerHTML = process = process.toFixed(2);
    console.log(process);
  } else if (document.querySelector("#v48").selected) {
    process = parseInt(payDOM.value) + parseInt(payDOM.value) * 1.8;
    amountsPayable.innerHTML = process = process.toFixed(2);
    console.log(process);
  }
}
calculate.addEventListener("click", bill);
