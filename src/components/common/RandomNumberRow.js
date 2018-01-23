import React from 'react'

const RandomNumberRow = ({randomNumber}) => {
    return (
        <tr>
            <td>{randomNumber.randomNumberId}</td>
            <td>{randomNumber.job.value || 'N/A'}</td>
            <td>{randomNumber.job.jobId}</td>
            <td>{randomNumber.job.workerId}</td>
            <td>{randomNumber.job.queueName}</td>
            <td>{randomNumber.job.progress} %</td>
            <td>{randomNumber.job.state}</td>
        </tr>
    );
}

export default RandomNumberRow
