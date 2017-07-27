module.exports = {
    Parse: function(data) {
        return new Promise(function(resolve, reject) {
            try {
                return resolve(JSON.parse(data));
            } catch (err) {
                return reject(err);
            }
        });
    }
}