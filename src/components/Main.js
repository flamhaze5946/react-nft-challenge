import './Main.css'
import React from "react";
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'

const Main = ({activePunk}) => {
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighLight'>
                    <div className='punkContainer'>
                        <img
                            className='selectedPunk'
                            src={activePunk.image_url}
                            alt=''
                        />
                    </div>
                </div>

                <div className='punkDetails' style={{color: '#fff'}}>
                    <div className='title'>
                        {activePunk.name}
                    </div>
                    <span className='itemNumber'>~#3</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={activePunk.image_url} alt=''/>
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>0xaaa</div>
                            <div className='ownerHandle'>@21123</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt=''/>
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} alt=''/>
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main