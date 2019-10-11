import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import StreamItem from "../StreamItem"
import InfiniteScroll from "react-infinite-scroller";
import "./index.css"
import { hot } from 'react-hot-loader/root'
import { selectUniqueProfessions, selectGnomesByProfession } from "./selectors"
import { fetchAllStreams, fetchfilteredStreams } from '../../redux/StreamListActions';
import { Spinner, FormGroup, Input} from 'reactstrap';

class StreamList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loadMore: true,
            streamsToLoad: [],
            loadedStreams: 0,
            canLoad: true
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
        
        this.props.fetchAllStreams(this.state.loadedStreams).then(() => {
            console.log('OFSET LOADMORE', this.state.loadedStreams)
            const nextStreamsToLoad = this.props.allStreams;            
            this.setState({
                streamsToLoad: this.state.streamsToLoad.concat(nextStreamsToLoad),
                loadMore: true,
                loadedStreams: this.state.loadedStreams + 20,
                canLoad: true
            })
        })        
    }

    // handleChange(props, e) {
    //     const gnomesByProfession = selectGnomesByProfession(props, e.target.value)
    //     this.props.fetchfilteredStreams(gnomesByProfession)
    //     // reset loaded gnomes invoke loadMoreStreams()        
    //     this.setState({
    //         streamsToLoad: []
    //     })
    // }
    
    render() {
        if(this.props.allStreams.length > 0) {
            return (
                    <div className="px-3">
                        <div className="row justify-content-end">
                            <div className="col col-lg-4">
                                {/* <FormGroup className="mt-4">
                                    <Input type="select" defaultValue={'default'} name="select" onChange={(e) => this.handleChange(this.props, e)}>
                                        <option value="default" key={0}>Filter Streams by job</option>
                                        {this.props.jobTypes.map((type, i) =>
                                            <option value={type} key={i+1}>{type}</option>
                                        )}
                                    </Input>
                                </FormGroup> */}
                            </div>
                        </div>
                        <InfiniteScroll
                            className="row"
                            pageStart={0}
                            loadMore={this.loadMoreStreams.bind(this)}
                            hasMore={this.state.loadMore}
                            // useWindow={true}
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
    fetchAllStreams: (offset) => dispatch(fetchAllStreams(offset)),
    // fetchfilteredStreams: (streams) => dispatch(fetchfilteredStreams(streams))
})

const mapStateToProps = state => {
    return {
        allStreams: state.streamListReducer.allStreams,
        filteredStreams: state.streamListReducer.filteredStreams
        // jobTypes: selectUniqueProfessions(state)
    }
}


export default process.env.NODE_ENV === "development"  
    ? hot(connect(mapStateToProps, mapDispatchToProps)(StreamList)) 
    : connect(mapStateToProps, mapDispatchToProps)(StreamList);

StreamList.propTypes = {
    allStreams: PropTypes.arrayOf(
        PropTypes.shape({
            // id: PropTypes.number.isRequired,
            // name: PropTypes.string.isRequired,
            // thumbnail: PropTypes.string.isRequired,
            // age: PropTypes.number.isRequired,
            // weight: PropTypes.number.isRequired,
            // height: PropTypes.number.isRequired,
            // hair_color: PropTypes.string.isRequired,
            // professions: PropTypes.arrayOf(PropTypes.string),
            // friends: PropTypes.arrayOf(PropTypes.string)
        })
    )
}