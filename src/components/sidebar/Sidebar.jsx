import "./sidebar.css";
import { 
    Home,
    Timeline,
    TrendingUp,
    PersonOutline
 } from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Home className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                        
                    </ul>

                    <h3 className="sidebarTitle">Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <PersonOutline className="sidebarIcon"/>
                            User
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
