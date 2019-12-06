
 let superman = {
    'first_name': 'Kal-El',
    'last_name': null,
    'parents': [
        {
            'first_name': 'Jor-El',
            'last_name': null,
        },
        {
            'first_name': 'Lara',
            'last_name': 'Lor-Van',
        }
    ],
    'age': 30,
    'girlfriend': {
        'first_name': 'Diana',
        'last_name': 'Prince',
        'boyfriend' : null,
    },
    'nicknames': [
        'Superman',
        'the man of steel',
    ]
 }

 let superman2 = {
    'first_name': 'Kal-El',
    'last_name': null,
    'parents': [
        {
            'first_name': 'Jor-El',
            'last_name': null,
        },
        {
            'first_name': 'Lara',
            'last_name': 'Lor-Van',
        }
    ],
    'age': 30,
    'girlfriend': {
        'first_name': 'Diana',
        'last_name': 'Prince',
        'boyfriend' : superman,
    },
    'nicknames': [
        'Superman',
        'the man of steel',
    ]
}

let clark_kent = {
    'first_name': 'Clark',
    'last_name': 'Kent',
    'parents': [
        {
            'first_name': 'Jonathan',
            'last_name': 'Kent',
        },
        {
            'first_name': 'Matha',
            'last_name': 'Kent',
        }
    ],
    'age': 30,
    'girlfriend': {
        'first_name': 'Lois',
        'last_name': 'Lane',
        'fan_of' : superman,
    },
    'nicknames': [
        'the journalist',
        'Glasses',
        'Clarly',
    ]
 }

 let clark_kent2 = {
    'first_name': 'Clark',
    'last_name': 'Kent',
    'parents': [
        {
            'first_name': 'Jonathan',
            'last_name': 'Kent',
        },
        {
            'first_name': 'Matha',
            'last_name': 'Kent',
        }
    ],
    'age': 30,
    'girlfriend': {
        'first_name': 'Lois',
        'last_name': 'Lane',
        'fan_of' : superman,
    },
    'nicknames': [
        'the journalist',
        'Glasses',
        'Clarly',
    ]
 }


function compareObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
    for (var key in obj1) {
        if (!obj1.hasOwnProperty(key) || !obj2.hasOwnProperty(key) || !compare(obj1[key], obj2[key])) return false
    }
    return true 

}

function compare(obj1, obj2) {
    console.log(`obj1 = ${obj1}`)
    console.log(`obj2 = ${obj2}`)
    if (obj1 != null && obj2 != null && (Array.isArray(obj1) || typeof(obj1) === 'object')) return compareObject(obj1, obj2)
    return obj1 === obj2
}


res = compare(clark_kent, clark_kent2)

console.log(`res = ${res}`)