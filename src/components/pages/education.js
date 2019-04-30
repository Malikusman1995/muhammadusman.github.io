import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import uol from '../../images/uol.svg';
import { configName } from '../../config';

class Education extends Component {
    componentWillReceiveProps() {
        document.title = "Education - " + configName;
    }

    componentDidMount() {
        document.title = "Education - " + configName;
    }

    render() {
        return (
            <div className="education-page">
                <NavBar page="education" />
                <div className="education-container">
                    <h2>Education</h2>
                    <p className="education-explanation">Graduated from The University of Lahore with a Bachelor of Science in Computer Science. </p>

                    <a href="https://www.uol.edu.pk/" target="_blank" rel="noreferrer noopener">
                        <img src={uol} alt="the university of lahore" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Education;