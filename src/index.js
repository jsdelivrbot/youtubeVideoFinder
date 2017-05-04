import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; // These are custom names used for components below
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCA_XTmUBEUGa0eWi082X07C_qCONp3aVw';


// Create a new component.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }; {/* videos can be named anything */}

    this.videoSearch('surfboards');
  }

videoSearch(term) {
  // Similiar to jQuery Get function
  YTSearch({key: API_KEY, term: term}, (data) => {
    this.setState({
      videos: data,
      selectedVideo: data[0]
    });
    // Same as ({ videos: videos }); or ({ videos: data }); (ES6)
  });
}

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated html
// and put it on the page (in the DOM)
React.render(<App />, document.querySelector('.container'))
