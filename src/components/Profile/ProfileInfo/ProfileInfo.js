import React from 'react';
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className="ProfileInfo">

        <div>
            <img src={props.profile.photos.large} alt=""/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
        </div>
    );
}

export default ProfileInfo;