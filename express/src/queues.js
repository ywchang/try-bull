const Queue = require('bull')
const _ = require('lodash')
const processJob = require('./processJob')
const path = require('path')

const inAppQueue = new Queue('in-app queue', 'redis://127.0.0.1:6379');
const outAppQueue = new Queue('out-app queue', 'redis://127.0.0.1:6379')
const clusterQueue = new Queue('out-app queue', 'redis://127.0.0.1:6379')

inAppQueue.process(processJob);
outAppQueue.process(2, path.resolve(__dirname, './processJob.js'))

module.exports = {
    inAppQueue,
    outAppQueue,
}