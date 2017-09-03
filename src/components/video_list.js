import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { //props are sent from parent component to child
    //here videos are the props that are sent from parent App to child VideoList
    //and can be accessed using props.videos or this.props.videos in a class based component
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />  //video.etag is a unique value for each video item
                 //and we used it as key for each video, because in React when displaying a list of items
                 //we need an identifier(that is a 'key') for each item
        )
    });

    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
};

export default VideoList;