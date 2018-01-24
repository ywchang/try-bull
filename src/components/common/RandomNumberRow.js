import React from 'react'

const RandomNumberRow = ({randomNumber}) => {
    return (
        <tr>
            <td>{randomNumber.randomNumberId}</td>
            <td>{randomNumber.job.value || 'N/A'}</td>
            <td>{randomNumber.job.jobId}</td>
            <td>{randomNumber.job.workerId}</td>
            <td>{randomNumber.job.queueName}</td>
            <td>
                <div className="progress">
                    <div className="progress-bar"
                         role="progressbar"
                         style={{width: `${randomNumber.job.progress}%`}}
                         aria-valuenow={randomNumber.job.progress}
                         aria-valuemin="0"
                         aria-valuemax="100">
                        {randomNumber.job.progress} %
                    </div>
                </div>
            </td>
            <td>{randomNumber.job.state}</td>
        </tr>
    );
}

export default RandomNumberRow
