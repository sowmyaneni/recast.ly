import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
// import searchYoutube  from '../lib/searchYoutube';
// import search from './Search.js';
// import VideoListEntry from './VideoListEntry.js';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { //everything that can be changed but not yet on page
      currentVideo : exampleVideoData[0],
      currentList : exampleVideoData
    }
  }

    // getYoutubeData(options) {
    //   // this.setState({
    //   //   currentList: data//.?????
    //   // })
    //   searchYoutube(options);
    // }



    handleClicked(e) {
      // console.log(e.target.id);
      this.setState({
        currentVideo: exampleVideoData[e.target.id]
      })
  
    }
  
  render () {
    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.currentList} onClick ={this.handleClicked.bind(this)}/> 
          </div>
        </div>
      </div>

      )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
