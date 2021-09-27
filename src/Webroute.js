import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Webapp from './components/servicePage/Webapp';
import DataScience from './components/servicePage/DataScience';
import CyberSecurity from './components/servicePage/CyberSecurity';
import App from './App';
function Webroute() {
    return (
        <div>
            <Switch>
                <Route exact path="/webapps" component={Webapp}/>
                <Route exact path="/datascience" component={DataScience}/>
                <Route exact path="/cybersecurity" component={CyberSecurity}/>
                <Route exact path="/" component={App}/>
            </Switch>
        </div>
    )
}

export default Webroute
