import React from 'react';
import { connect } from "react-redux"
import StreamItem from "../StreamItem"
import InfiniteScroll from "react-infinite-scroller";
import "./index.css"
// import { hot } from 'react-hot-loader/root'
import { fetchMoreStreams } from '../../redux/StreamListActions';
import { Spinner } from 'reactstrap';

class StreamList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loadMore: true,
            streamsToLoad: [],
            loadedStreams: 0
        }
    }
    componentDidMount() {        
        this.loadMoreStreams(0)        
    }

    loadMoreStreams() {
        // prevents async api duplicity calls
        this.setState({
            loadMore:false
        })
        
        this.props.fetchMoreStreams(this.state.loadedStreams).then(() => {            
            this.setState({
                streamsToLoad: this.state.streamsToLoad.concat(this.props.fetchedStreams),
                loadMore: true,
                loadedStreams: this.state.loadedStreams + 20
            })
        })        
    }    
    render() {
        if(this.props.fetchedStreams.length > 0) {
            return (
                    <div className="px-3 mt-5">                        
                        <InfiniteScroll
                            className="row"
                            pageStart={0}
                            loadMore={this.loadMoreStreams.bind(this)}
                            hasMore={this.state.loadMore}                            
                            threshold={800}
                            loader={
                                <div className="loader" key={0}>
                                    <Spinner color="warning" key="0" className="spinner"/>                                
                                </div>}>

                                {this.state.streamsToLoad.map((stream, i) => (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xxl-3 mt-4" key={i}>
                                    <StreamItem stream={stream}/>
                                </div>
                                ))
                             }
                        </InfiniteScroll>
                    </div>
            )
        } else {
            return (
                <div>
                    <Spinner color="light" type="grow" style={{
                        position: "fixed",
                        width:"4rem",
                        height: "4rem",
                        transform: "translateX(-50%,-50%)",
                        top: "50%",
                        left: "50%"
                    }}/>
                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchMoreStreams: (offset) => dispatch(fetchMoreStreams(offset)),    
})

const mapStateToProps = state => {
    return {
        fetchedStreams: state.streamListReducer.fetchedStreams,                
    }
}

// export default process.env.NODE_ENV === "development"  
    // ? hot(connect(mapStateToProps, mapDispatchToProps)(StreamList)) 
    // :
export default connect(mapStateToProps, mapDispatchToProps)(StreamList);