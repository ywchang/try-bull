import * as React from 'react'
import ClusterQueueForm from "./ClusterQueueForm";
import {connect} from "react-redux";
import {createRandomNumber} from '../../actions/randomNumberActions'
import {getRandomNumbersByQueue} from "../../selectors";

const ClusterQueuePage = ({randomNumbers, actions}) => {
    const createRandomNumber = (event) => {
        event.preventDefault();
        actions.createRandomNumber();
    }

    return (
        <div>
            <h1>Cluster Queue</h1>
            <ClusterQueueForm randomNumbers={randomNumbers} createRandomNumber={createRandomNumber}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        randomNumbers: getRandomNumbersByQueue('clusterQueue')(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            createRandomNumber: () => dispatch(createRandomNumber('clusterQueue'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClusterQueuePage)