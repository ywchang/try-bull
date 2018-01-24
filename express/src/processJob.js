const _ = require('lodash')
const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = (job) => {
    return (async() => {
        for (let i = 0; i < 100; i++) {
            await job.progress(i + 1);
            await snooze(25);
        }
        if (job.id.toString().endsWith('0')) {
            throw new Error('Not Luck!');
        }
        return {
            value: _.random(0, 100),
            workerId: require('process').pid
        };
    })();
}