// export class apiServices {
//     patch(valueInput1, valueInput2, allCosts) {
//         const response = fetch('http://localhost:5000/createCost',
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json;charset=utf-8',
//                     'Access-Control-Allow-Origin': '*'
//                 },
//                 body: JSON.stringify({
//                     text: valueInput1,
//                     totalMoney: valueInput2
//                 })
//             },
//         )
//         let result = response.json()
//         allCosts.push(result);
//         if (response.status === 200) {
//             allCosts.push(result);
//         }
//     }
//
// }
//
class Rectangle {
    constructor(valueInput1, valueInput2, allCosts) {
        this.valueInput1 = valueInput1
        this.valueInput2 = valueInput2
        this.allCosts = allCosts
    }

    patch() { if (this.valueInput1, this.valueInput2) {
        const response = fetch('http://localhost:5000/createCost',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    text: this.valueInput1,
                    totalMoney: this.valueInput2,
                    date: createDate()
                })
            },
        )
        let result = response.json()
        if (response.status === 200) {
            allCosts.push(result);
        }
    }
    }
}

export {Rectangle}