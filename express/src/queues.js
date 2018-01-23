const Queue = require('bull')
const _ = require('lodash')

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

const inAppQueue = new Queue('in-app queue', 'redis://127.0.0.1:6379');

inAppQueue.process(function(job) {
    return (async() => {
        for (let i = 0; i < 100; i++) {
            await job.progress(i + 1);
            await snooze(25);
        }
        return {
            value: _.random(0, 100),
            workerId: require('process').pid
        };
    })();
});

module.exports = {
    inAppQueue
}

