// for plus button

const plusBtn = document.getElementById("addPlus");
plusBtn.addEventListener("click", function () {
    const cartValue = document.getElementById("cart-value").value;
    const cartValueNum = parseInt(cartValue);
    const addbtn = cartValueNum + 1;
    const updateCart = document.getElementById("update-cart").innerText;
    const updateCartNum = parseFloat(updateCart);
    const totalAmount = updateCartNum + 1200;
    document.getElementById("cart-value").value = addbtn;
    document.getElementById("update-cart").innerText = totalAmount;
    const totalAm = document.getElementById("totalAm").innerText;
    const totalAmNum = parseFloat(totalAm);
    const totalAmResult = totalAmount;
    document.getElementById("totalAm").innerText = totalAmResult;
});


// for minus button
const minusBtn = document.getElementById("minus-button");
minusBtn.addEventListener("click", function () {
    const cartValueM = document.getElementById("cart-value").value;
    const cartValueMNum = parseInt(cartValueM);
    const updateMinus = cartValueMNum - 1;
    const updateCart = document.getElementById("update-cart").innerText;
    const updateCartNum = parseFloat(updateCart);
    const totalAmount = updateCartNum - 1200;
    document.getElementById("cart-value").value = updateMinus;
    document.getElementById("update-cart").innerText = totalAmount;
});

//case button plus
const casePlusBtn = document.getElementById("casePlus");
casePlusBtn.addEventListener("click", function () {
    const caseInput = document.getElementById("caseInput").value;
    const caseInputNum = parseInt(caseInput);
    const totalCart = caseInputNum + 1;
    const caseDisplay = document.getElementById("caseDis").innerText;
    const caseDisplayNum = parseFloat(caseDisplay);
    const totalCart2 = caseDisplayNum + 50;
    document.getElementById("caseInput").value = totalCart;
    document.getElementById("caseDis").innerText = totalCart2;

});

// case minus button

const minusBtn1 = document.getElementById("caseBtnMinus");
minusBtn1.addEventListener("click", function () {
    const cartValueM = document.getElementById("caseInput").value;
    const cartValueMNum = parseInt(cartValueM);
    const updateMinus = cartValueMNum - 1;
    const updateCart = document.getElementById("caseDis").innerText;
    const updateCartNum = parseFloat(updateCart);
    const totalAmount = updateCartNum - 50;
    document.getElementById("caseInput").value = updateMinus;
    document.getElementById("caseDis").innerText = totalAmount;
});

