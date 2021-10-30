import React from 'react'
import '../css/Profile.css'

function PlayerDetails(props) {
    return (
        <div class="container">
            <div className="theme-container">
                <div className="btn-theme">Overall <h5 className="text">{props.Overall}</h5></div>
                <div className="btn-theme">Wage <h5 className="text">{props.Wage}</h5></div>
            </div>
            
            <div className="content">Age<h5>{props.Age}</h5></div>
            <div className="content">Nationality<h5>{props.Nationality}</h5></div>
            <div className="content">Club<h5>{props.Club}</h5></div>
            <div className="content">Position<h5>{props.Position}</h5></div>
            <div className="content">Preferred Foot<h5>{props.PreferredFoot}</h5></div>
            <div className="content">Work Rate (A/D)<h5>{props.WorkRate}</h5></div>
            <div className="content">Height<h5>{props.Height}</h5></div>
            <div className="content">Weight<h5>{props.Weight}</h5></div>
            <div className="content">Jersey Number<h5>{props.JerseyNumber}</h5></div>
            <div className="content">Joined<h5>{props.Joined}</h5></div>
        </div>
    );
}

export default PlayerDetails;