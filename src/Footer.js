import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';


function Footer() {
    return (
        <div className="footer">
            {/* <h1>I am footer</h1> */}
            <div className="footer__left">
                {/* <p>album and song</p> */}
                <img src="data:image/jpeg;base64,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" alt="" className="footer__albumlogo" />
                <div className="footer__songinfo">
                    <h4>307</h4>
                    <p>MC STAN</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon font-size="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                {/* <p>VOlume controls</p> */}
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
