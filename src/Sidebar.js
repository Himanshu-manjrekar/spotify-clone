import React from 'react';
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from "./DataLayer";


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            {/* <h1>I am sidebar</h1>1\ */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className="sidebar__logo" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}
            {/* <SidebarOption title="Hip HOp" />
            <SidebarOption title="Melody" /> */}
        </div>

    )
}

export default Sidebar
