import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
   //onVideoSelect is a function we passed from App to VideoList and then finally to VideoListItem
   //our intention is to call this onVideoSelect function, whenever a video item is clicked
   //and then pass that clicked video back to App and set state of selected video in App to the clicked video
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{videoTitle}</div>
                </div>
            </div>
        </li>
    );
};


export default VideoListItem;