import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Master of Computer Applications" where="JNTU University" from="July 2016" to="May-2019"/>
            <Widecard title="SSc" where="Domodara public school" from="2009" to="2010"/>
            </div>
            )
        }
    }
    
export default Education
    