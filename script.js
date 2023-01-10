const getAverage = (x, y, z) => (x + y + z) / 3;

const dept1AverSales1 = getAverage(95467, 92842, 92501);
const dept2AverSales1 = getAverage(70533, 50121, 33899);

const dept1AverSales2 = getAverage(50301, 21984, 19207);
const dept2AverSales2 = getAverage(72381, 41562, 29465);

function printBonus (dept1AverSales, dept2AverSales) {
    if (dept1AverSales > dept2AverSales) {
        const summ = dept1AverSales - dept2AverSales;
        const procent = summ / dept2AverSales * 100;
        if (procent >= 30) {
            console.log(`Департамент 1 превышает продажи второго на ${procent}% Департамент 1 получит бонус.`);
        } else if (procent < 30) {
            console.log(`Ни для одного депортамента бонуса не будет!`);
        }
    } else if (dept2AverSales > dept1AverSales) {
        const summ = dept2AverSales - dept1AverSales;
        const procent = summ / dept1AverSales * 100;
        if (procent >= 30) {
            console.log(`Департамент 2 превышает продажи первого на ${procent}% Департамент 2 получит бонус.`);
        } else if (procent < 30) {
            console.log(`Ни для одного депортамента бонуса не будет!`);
        }
    }
}


printBonus(dept1AverSales1, dept2AverSales1);
printBonus(dept1AverSales2, dept2AverSales2);