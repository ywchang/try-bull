import ActionTypes from "./actionTypes";
import axios from 'axios'

const getJobSuccess = (payload) => {
    return {
        type: ActionTypes.GET_JOB_SUCCESS,
        payload
    }
}

const getJob = (randomNumberId, queueName, jobId) => {
    return dispatch => {
        axios.get(`http://localhost:8082/queues/${queueName}/jobs/${jobId}`)
            .then(({data}) => {
                dispatch(getJobSuccess({
                    randomNumberId,
                    job: {
                        queueName,
                        jobId,
                        workerId: data.workerId,
                        progress: data.progress,
                        state: data.state,
                        value: data.returnValue
                    }
                }))
                if (data.state !== 'completed') {
                    setTimeout(() => {
                        dispatch(getJob(randomNumberId, queueName, jobId));
                    }, 200);
                }
            })
            .catch(err => {
                console.log(err)
            });
    };
}

export const createRandomNumber = (queueName = 'inAppQueue') => {
    return dispatch => {
        axios.post(`http://localhost:8082/random-numbers?queueName=${queueName}`)
            .then((response) => {
                const {randomNumberId, jobId, queueName} = response.data
                dispatch(getJob(randomNumberId, queueName, jobId))
            }).catch(err => {
            console.log(err)
        })
    }
}