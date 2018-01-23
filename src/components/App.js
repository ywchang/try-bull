import * as React from 'react';
import HomePage from "./home/HomePage";
import {Route, Switch, withRouter} from "react-router-dom";
import InAppQueuePage from "./inAppQueue/InAppQueuePage";
import Header from "./common/Header";
import OutAppQueuePage from "./outAppQueue/OutAppQueuePage";

const App = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/in-app-queue" component={InAppQueuePage}/>
                <Route path="/out-app-queue" component={OutAppQueuePage}/>
            </Switch>
        </div>
    )
}

export default withRouter(App)

