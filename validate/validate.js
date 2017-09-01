const validator = require('validator');
module.exports = {
    All(validations) {
        return new Promise(function (resolve, reject) {
            try {
                var newArray = {};
                validations.forEach(function (e, i) {
                    const _i = i;
                    const _o = e.options;
                    const _e = e;
                    let methods = e.method;
                    newArray[_e.name] = {};
                    methods.forEach(function (e, i) {
                        newArray[_e.name][e] = validator[e](_e.string, _o[i]);
                    });
                }, this);
                return resolve(newArray);
            } catch (err) {
                return reject(err);
            }
        });
    },
    allObj(validations) {
        return new Promise(function (resolve, reject) {
            try {
                var newArray = {};
                validations.forEach(function (e, i) {
                    const _i = i;
                    const _o = e.options;
                    const _e = e;
                    let methods = e.method;
                    newArray[_e.name] = {};
                    console.log(e.method)
                    // .forEach(function (e, i) {
                    // });

                    methods.every(function(e, i) {
                        // var _v = ;
                        // Do your thing, then:
                        if (validator[e](_e.string, _o[i])) {
                            newArray[_e.name] = validator[e](_e.string, _o[i]);
                        }
                        else {
                            newArray[_e.name] = validator[e](_e.string, _o[i]);
                            return false;
                        }
                      })
                }, this);
                return resolve(newArray);
            } catch (err) {
                return reject(err);
            }
        });
    }
}