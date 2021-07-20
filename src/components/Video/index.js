import React, {useState, useEffect} from 'react';

// import previewImg from "../../Images/coffee-big.jpg"
import PlayButton from "../PlayButton";


const VideoPlayer = () => {
    const [openModal, setOpenModal] = useState(false)
    const handleOpenVideo = () => setOpenModal(prev => !prev)


    return (
        <div className="videoplayer">
            {
                openModal &&
                <div className={'videoplayer__openVideo'}>
                    <div className={'videoplayer__openVideo__iframe'}>
                        <iframe className='video-player' src={'https://www.youtube.com/embed/YVOrDgtDYQ4?autoplay=1'}
                                frameBorder='0'
                                allow='autoplay; encrypted-media' allowFullScreen title='video' width="640"
                                height="480"
                        />
                    </div>
                    <div className={'videoplayer__closeVideo'} onClick={handleOpenVideo}></div>
                </div>
            }

            {
                !openModal &&
                <>
                    <div className="parallax__container">
                        <PlayButton handleOpenVideo={handleOpenVideo}></PlayButton>

                    </div>
                </>
            }
        </div>
    );

}
export default VideoPlayer