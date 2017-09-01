const Quantum = require('./../quantum');


Quantum.validate.allObj([{
            name: 'email',
            string: 'teste@teste.com',
            method: ['isEmail'],
            options: []
        },
        {
            name: 'pwd',
            string: '12345566',
            method: ['isLength', 'isEmpty'],
            options: [{
                min: 6
            }]
        },
        {
            name: 'cpf',
            string: '44476863841',
            method:['isNumeric'],
            options: []
        }
    ])
    .then(function (result) {
        console.log(JSON.stringify(result));
    })
    .catch(function (err) {
        console.log(err);
    });

    Quantum.validate.allObj([{
        name: 'email',
        string: 'teste@.com',
        method: ['isEmail'],
        options: []
    },
    {
        name: 'pwd',
        string: '566',
        method: ['isLength', 'isEmpty'],
        options: [{
            min: 6
        }]
    },
    {
        name: 'cpf',
        string: '443841',
        method:['isNumeric'],
        options: []
    }
])
.then(function (result) {
    console.log(JSON.stringify(result));
})
.catch(function (err) {
    console.log(err);
});