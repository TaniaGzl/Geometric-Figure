//perimeter square
function squarePerimeter(side){
    return side *4;
}

function squarePerimeterCalculate() {
    const numberSide = document.getElementById("squareInput");
    const result = parseFloat(numberSide.value);

    const perimeter = squarePerimeter(result);
    document.getElementById("squarePerimeter").innerText = "Its perimeter is:" + perimeter + "cm";
}

//Area square

function squareArea(side) {
    return side*side;
}

function squareAreaCalculate() {
    const number = document.getElementById("squareInput");
    const result = parseFloat(number.value);

    const area = squareArea(result);
    document.getElementById("squareArea").innerText = "Its area is :" + area + "cm2"
}

function reset() {
    document.getElementById(squareInput).value = "";
}

//CIRCLE
function circlePerimeter(radius) {

    const perimeter = 2 * Math.PI * radius;
    return perimeter.toFixed(2);
}
function circlePerimeterCalculate() {
    const number = document.getElementById("circleInput");
    const result = parseFloat(number.value);

    const perim = circlePerimeter(result);
    document.getElementById("circlePerimeter").innerText = "Its perimeter is :" + perim + "cm"
}

function circleArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    return area.toFixed(2);
}

function circleAreaCalculate() {
    const number = document.getElementById("circleInput");
    const result = parseFloat(number.value);

    const area = circleArea(result);
    document.getElementById("circleArea").innerText = "Its Area is :" + area + "cm2";
}
function reset() {
    document.getElementById(squareInput).value = "";
}

//Triangle

function trianglePerimeter(side1, side2, side3) {
    const perimeter = side1 + side2 + side3;
    return perimeter.toFixed(2);
}

function trianglePerimeterCalculate() {
    const side1 = parseFloat(document.getElementById("triangleInput1").value);
    const side2 = parseFloat(document.getElementById("triangleInput2").value);
    const side3 = parseFloat(document.getElementById("triangleInput3").value);

    const perimeter = trianglePerimeter(side1, side2, side3);
    document.getElementById("trianglePerimeter").innerText = "Its perimeter is: " + perimeter + "cm";
}

function triangleArea(base, height) {
    const area = 0.5 * base * height;
    return area.toFixed(2);
}

function triangleAreaCalculate() {
    const base = parseFloat(document.getElementById("triangleInput3").value);
    const height = parseFloat(document.getElementById("triangleInput4").value);

    const area = triangleArea(base, height);
    document.getElementById("triangleArea").innerText = "Its Area is: " + area + "cm2";
}
function reset() {
    document.getElementById(squareInput).value = "";
}

