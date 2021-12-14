import React from 'react'
import "./topbar.css";
import {
    NotificationsNone,
    Language,
    Settings
} from '@material-ui/icons';


export default function Topbar() {
    return (
        <div className="topbar"> 
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">FaizzRoslee</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        {/* <span className="topIconBadge">2</span> */}
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://thumbs.dreamstime.com/z/muslim-man-flat-avatar-icon-you-can-use-illustration-business-websites-company-others-140436092.jpg" alt="" className="topAvatar" />
                </div>
            </div>

        </div>
    )
}
