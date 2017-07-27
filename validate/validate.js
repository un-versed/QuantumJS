const validator = require('validator');
module.exports = {
    All: function(validations) {
        return new Promise(function(resolve, reject) {
            try {
                var newArray = {};
                validations.forEach(function(e, i) {
                    const _i = i;
                    const _o = e.options;
                    const _e = e;
                    let methods = e.method;
                    newArray[_e.name] = {};
                    methods.forEach(function(e, i) {
                        newArray[_e.name][e] = validator[e](_e.string, _o[i]);
                    });
                }, this);
                return resolve(newArray);
            } catch (err) {
                return reject(err);
            }
        });
    }
}