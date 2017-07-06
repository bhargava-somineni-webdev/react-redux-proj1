import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const Youtube_API_Key = 'AIzaSyALyty2Yg0TgzG2ivl3IU2QQR0gB7bL92U';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: Youtube_API_Key, term: term }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            }); //same as this.setState({ videos: videos });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

//App as functional component below
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     )
// };