// // Божидара разполага с няколко къщи на Черноморието и желае да озелени дворовете на някои от тях, като по този начин
// създаде уютна обстановка и комфорт на гостите си.За целта е наела фирма.
//     // Напишете програма, която изчислява необходимате сума, които Божидара ще трябва да заплати на фирмата изпълнител на
//     проекта.Цената на един кв.м.е 7.61 лв със ДДС.Понеже нейният двор е доста голям, фирмата изпълнител предлага 18 % отстъпка от крайната цена.
// // Вход
// // От конзолата се прочита само един ред:
// // 1.	Кв. метри, които ще бъдат озеленени – реално число в интервала [0.00 … 10000.00]
// // Изход
// // На конзолата се отпечатват два реда:
// // •	"The final price is: {крайна цена на услугата} lv."
// // •	"The discount is: {отстъпка} lv."
// Пресмятаме цената за озеленяване на целия двор:
// 550 * 7.61 = 4185.50 лв.
// Приспадаме отстъпката (18% = 0.18) от общата сума:
// 0.18 * 4185.5 = 753.39 лв.
// Калкулираме крайната цена на услугата:
// 4185.50 – 753.39  3432.11 лв.

function yardGreening(input) {
    let price = Number(input[0] * 7.61);
    let discount = price * 0.18;
    let finalPrice = price - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
    
}
yardGreening(["550"])