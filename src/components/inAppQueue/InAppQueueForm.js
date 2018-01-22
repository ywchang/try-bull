import React from "react";

const InAppQueueForm = () => {
    return (
        <form>
            <div style={{marginBottom: 10}}>
                <button className="btn btn-primary">Submit</button>
            </div>
            <table className="table">
                <tbody>
                <tr>
                    <th>Job Id</th>
                    <th>Worker</th>
                    <th>Queue Name</th>
                    <th>Progress</th>
                </tr>
                </tbody>
            </table>
        </form>
    )
}

export default InAppQueueForm