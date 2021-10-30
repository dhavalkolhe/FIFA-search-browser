import React from 'react';
import '../css/Profile.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import {Link} from 'react-router-dom'

function ProfileHeader(props) {

    const navStyle = {
        color: "black",
        backgroundColor: "white",
    }

    return ( 
        <div className="header">
            <div className="nav">
                <Link to="/" style={navStyle}>
                    <div className="row-flex"><ArrowBackIcon/><h5 className="nav-text">Home</h5></div>
                </Link>
                <div className="row-flex"><HelpOutlineOutlinedIcon/><h5 className="nav-text">Help</h5></div>
            </div>
            
            <div className="row-flex">
                <p id="name">{props.Name}</p>
                <div className="image-cropper">
                    <img src={props.imgurl}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileHeader;