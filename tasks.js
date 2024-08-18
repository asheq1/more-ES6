// task -1 
let data = {
    Sophia: {
        id: 34,
        study: [
            {
                primary:
                [
                    {school_name: "ABC primary school"},
                    {location: "Peters burg"},
                ]
            },
            {
                secondary:
                    [
                        {school_name: "ABC secondary school"},
                        {location: "St Lorence"},
                    ]
            }
        ]
    }
}

// console.log(data.Sophia.study[1].secondary[1].location)


// task -2 

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "bulding no" : 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "Russia"
        }

    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 56,
            "street": "DC road",
            "city": "Kachu khet",
            "country": "Bangladesh"
        }
    }
}
// console.log(students['2222'].address['city']);
// console.log(students['3333'].address['country'])


// task -3
const getEven = [1, 3, 5, 7, 9];
let even = [];
for(let i=0; i<getEven.length; i++){
    let element = getEven[i] + 1;
    even.push(element);
}
// console.log(even)


// task -4
const divisible = [33, 50, 79, 78, 90, 101, 30];
const tenDiv = divisible.filter(ten => ten % 10 === 0);
// console.log(tenDiv);


// task -5
const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akhi', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'}

]
const getSenior = instructor.filter(senior => senior.age > 26)
// console.log(getSenior);


// task -6 
const people = [
    {name: 'Mena', age: 20},
    {name: 'Rina', age: 16},
    {name: 'Suchorita', age: 22}

]

const condensed = people.reduce((acc, current) => acc + current.age, 0)
console.log(condensed)
