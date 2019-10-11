import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import Truncate from 'react-truncate';
// custom css
import './index.css'

const TwitchItem = (props) => {

    return (
        <a href={props.stream.channel.url} target="_blank" rel="noopener noreferrer">
            <Card className="shadow">
                <div className="card-img-overlay">                
                    <img src={props.stream.channel.logo} width="45px" alt="img"></img>
                    <span className="viewers">
                        <strong>{props.stream.viewers} </strong> 
                        viewers
                    </span>
                </div>                
                <CardImg top width="100%" src={props.stream.preview.medium} alt="Card image cap" />
                <CardBody>
                    <CardTitle>
                        <Truncate lines={1} ellipsis={<span>...</span>}>
                            {props.stream.channel.status}
                        </Truncate>                        
                    </CardTitle>
                    <CardSubtitle className="my-1">
                        {props.stream.channel.name}
                    </CardSubtitle>
                    <CardSubtitle className="my-1">
                        {props.stream.game}
                    </CardSubtitle>                    
                </CardBody>
            </Card>
        </a>
    );
};

export default TwitchItem;