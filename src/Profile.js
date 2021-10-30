import React, { Profiler } from 'react';
import playerData from './data.json'
import PlayerDetails from './Components/PlayerDetails'
import ProfileHeader from './Components/ProfileHeader'
import RadarChart from './Components/RadarChart';

function Profile() {

    return(
        playerData.map((value, key)=>{
            const path = `/profile/${value.id}`
            if(path === window.location.pathname){
                // console.log(value);
                return (
                    <div>
                        <ProfileHeader {...value}/>
                        <PlayerDetails {...value}/>
                        <RadarChart {...value}/>
                    </div>
                )
            }
        })
    )
}

export default Profile;