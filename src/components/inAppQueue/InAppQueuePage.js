import * as React from 'react'
import InAppQueueForm from "./InAppQueueForm";
import {connect} from "react-redux";
import {createRandomNumber} from '../../actions/randomNumberActions'

const InAppQueuePage = ({randomNumbers, actions}) => {
    const createRandomNumber = (event) => {
        event.preventDefault();
        actions.createRandomNumber();
    }

    return (
        <div>
            <h1>In-App Queue</h1>
            <InAppQueueForm randomNumbers={randomNumbers} createRandomNumber={createRandomNumber}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        randomNumbers: state.randomNumbers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            createRandomNumber: () => dispatch(createRandomNumber())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InAppQueuePage)