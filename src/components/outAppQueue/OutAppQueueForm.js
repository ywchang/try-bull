import React from "react";
import RandomNumberRow from "../common/RandomNumberRow";

const OutAppQueueForm = ({randomNumbers, createRandomNumber}) => {
    return (
        <form>
            <div style={{marginBottom: 10}}>
                <button className="btn btn-primary" onClick={createRandomNumber}>Submit</button>
            </div>
            <table className="table">
                <tbody>
                <tr>
                    <th>RandomNumberId</th>
                    <th>Value</th>
                    <th>Job Id</th>
                    <th>Worker</th>
                    <th>Queue Name</th>
                    <th>Progress</th>
                    <th>State</th>
                </tr>
                {randomNumbers.map(randomNumber => (
                    <RandomNumberRow key={randomNumber.randomNumberId} randomNumber={randomNumber}/>
                ))}
                </tbody>
            </table>
        </form>
    )
}

export default OutAppQueueForm