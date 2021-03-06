import * as React from 'react'
import OutAppQueueForm from "./OutAppQueueForm";
import {connect} from "react-redux";
import {createRandomNumber} from '../../actions/randomNumberActions'
import {getRandomNumbersByQueue} from "../../selectors";

const OutAppQueuePage = ({randomNumbers, actions}) => {
    const createRandomNumber = (event) => {
        event.preventDefault();
        actions.createRandomNumber();
    }

    return (
        <div>
            <h1>Out-App Queue</h1>
            <OutAppQueueForm randomNumbers={randomNumbers} createRandomNumber={createRandomNumber}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        randomNumbers: getRandomNumbersByQueue('outAppQueue')(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            createRandomNumber: () => dispatch(createRandomNumber('outAppQueue'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OutAppQueuePage)