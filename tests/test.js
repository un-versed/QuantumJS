const Quantum = require('quantum-framework');


Quantum.validate.All([{
            name: 'user',
            string: '12345',
            method: ['isLength', 'isEmpty', 'isAlphanumeric'],
            options: [{ min: 5, max: 12 }, '', 'pt-BR']
        },
        {
            name: 'pwd',
            string: '12345566',
            method: ['isLength', 'isEmpty'],
            options: [{ min: 5, max: 12 }]
        },
        {
            name: 'marola',
            string: '123',
            method: ['isLength'],
            options: [{ min: 5, max: 12 }]
        },
    ])
    .then(function(result) {
        console.log(JSON.stringify(result));
    })
    .catch(function(err) {
        console.log(err);
    });