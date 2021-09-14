'use string'
// let cats = {
//     cat1:{color: 'blue',
//     weight: 5,
//     'cat name': 'Вася',
// },
//     cat2:{color: 'Белый',
//     weight: 3,
//     'cat name': 'Мурка',},
//     cat3:{color: 'Серый',
//     weight: 8,
//     'cat name': 'Муся',}
// };
// console.log(cat.color); 
// console.log(cat['cat name']);
// console.log(cats.cat1);
// console.log(cats.cat1.weight);

// Создать объект как прямоугольник
const rectangle = {
    topLeftX: -10,
    topLeftY: 5,
    bottomRightX: 10,
    bottomRightY: -5,
}

// Функция принимает прямоугольники и выводит инфорцацию о нем
function placePoint(x, y) {
    if (x==0 && y==0) return `точка (${x}, ${y}) находится в начале координат`;
    else if (x===0) return `точка (${x}, ${y}) находится на оси Y`;
    else if (y===0) return `точка (${x}, ${y}) находится на оси X`;
    else if (x>0 && y>0) return `точка (${x}, ${y}) находится в первой четверти`;
    else if (x<0 && y>0) return `точка (${x}, ${y}) находится во второй четверти`;
    else if (x<0 && y<0) return `точка (${x}, ${y}) находится в третьей четверти`;
    else return `точка (${x}, ${y}) находится в четвертой четверти`;
    
}

function writeInfo(rectangle) {
    document.getElementById('f1').innerHTML = `
    <p>Левая верхняя ${placePoint(rectangle.topLeftX, rectangle.topLeftY)}</p>
    <p>Правая верхняя ${placePoint(rectangle.bottomRightX, rectangle.topLeftY)}</p>
    <p>Левая нижняя ${placePoint(rectangle.topLeftX, rectangle.bottomRightY)}</p>
    <p>Правая нижняя ${placePoint(rectangle.bottomRightX, rectangle.bottomRightY)}</p>
    `;
}
writeInfo(rectangle);

// Функция которая возвращает ширину прямоугольника
function rectangleWidth(rect) {
    return rect.bottomRightX - rect.topLeftX;
}
let rectWidth = rectangleWidth(rectangle);
document.getElementById('f2').innerHTML = `<p>Ширина прямоугольника равна ${rectWidth}</p>`

// Функция, которая возвращает высоту прямоугольника

function rectangleHeight(rect) {
    return rect.topLeftY - rect.bottomRightY;
}
let rectHeight = rectangleHeight(rectangle);
document.getElementById('f3').innerHTML = `<p>Высота прямоугольника равна ${rectHeight}</p>`

// Принимает объект прямоугольника и возвращает его площадь

function squareRectangle(rect) {
    return  rectangleWidth(rect)* rectangleHeight(rect);
}
document.getElementById('f4').innerHTML = `Площадь прямоугольника равна ${squareRectangle(rectangle)}`;

// Принимает прямоугольник и возвращает периметр
function perimetrRectangle(rect) {
    return (rectangleWidth(rect) + rectangleHeight(rect))*2;
}
let rectPerimetr = perimetrRectangle(rectangle);
document.getElementById('f5').innerHTML = `Периметр прямоугольника равен ${perimetrRectangle(rectangle)}`;

// Изменяет ширину прямоугольника

function changeWidth(rect, dd) {
    rect.bottomRightX += dd;
    return rect;
}
let changeDd = +prompt('На сколько изменится ширина');
let rect2 = changeWidth(rectangle, changeDd);
document.getElementById('f6').innerHTML = `<p>После изменения ширины на ${changeDd} правая верхняя точка(${rect2.bottomRightX},${rect2.topLeftY}) правая нижняя (${rect2.bottomRightX},${rect2.bottomRightY})`;

// Изменяет высоту

function changeHeight(rect, dd) {
    rect.topLeftY += dd;
    return rect;
}
let changeDh = +prompt('На сколько изменится высота');
let rect3 = changeHeight(rectangle, changeDh);
document.getElementById('f7').innerHTML = `<p>После изменения высоты на ${changeDh} Левая верхняя точка(${rect3.topLeftX},${rect3.topLeftY}) правая верхняя (${rect3.bottomRightX},${rect3.topLeftY})`;

// Изменяет ширину и высоту
function resizeRect(rect, dd, dh) {
    return changeHeight(changeWidth(rect, dd), dh);
    return rect;
}
let rect4 = resizeRect(rectangle, changeDd, changeDh);
document.getElementById('f8').innerHTML = `<p>После изменения высоты на ${changeDh} и ширины ${changeDd} Левая верхняя точка(${rect4.topLeftX},${rect4.topLeftY}) правая верхняя (${rect4.bottomRightX},${rect4.topLeftY}) правая верхняя точка(${rect4.bottomRightX},${rect4.topLeftY}) правая нижняя (${rect4.bottomRightX},${rect4.bottomRightY})`;

