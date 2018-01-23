const express = require('express')
const _ = require('lodash')
const queues = require('./queues')

const app = express()
app.set('port', 8082)

app.use(require('cors')())

let randomNumberIndex = 0

const getRandomNumberId = () => {
    return randomNumberIndex++;
}

app.get('/queues/:queueName/jobs/:jobId', async(req, res, next) => {
    try {
        const queueName = req.params.queueName
        const queue = queues[queueName]
        const jobId = req.params.jobId
        const job = await queue.getJob(jobId)
        const state = await job.getState()
        return res.status(200).json({
            jobId,
            queueName,
            progress: job.progress(),
            state,
            returnValue: !job.returnvalue ? '' : job.returnvalue.value,
            workerId: !job.returnvalue ? '' : job.returnvalue.workerId
        })
    } catch (err) {
        next(err)
    }
})

app.post('/random-numbers', async(req, res, next) => {
    try {
        const queueName = req.query.queueName
        const randomNumberId = getRandomNumberId()
        const job = await queues[queueName].add({randomNumberId})
        res.status(202).json({
            randomNumberId,
            queueName,
            jobId: job.id
        })
    } catch (err) {
        next(err)
    }
})

app.all('*', (req, res, next) => {
    res.status(200).json({'message': 'default response'})
})


async function boot() {
    try {
        const server = await app.listen(app.get('port'))
        console.log(`App is listening at port: ${app.get('port')}`)
        console.log(`Current process id: ${require('process').pid}`)
        return server
    } catch (e) {
        console.log('Failed at boot up due to below error \n', e)
        throw e
    }
}

module.exports = {
    boot
}
