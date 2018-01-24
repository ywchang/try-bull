import {createSelector} from 'reselect'

const getRandomNumbers = state => state.randomNumbers

const selectorMap = {}

export const getRandomNumbersByQueue = (queueName) => {
    if (!selectorMap[queueName]) {
        selectorMap[queueName] = createSelector([getRandomNumbers], randomNumbers => {
            return randomNumbers.filter(n => n.job.queueName === queueName)
                .sort((pre, next) => pre.randomNumberId - next.randomNumberId)
        })
    }
    return selectorMap[queueName];
}