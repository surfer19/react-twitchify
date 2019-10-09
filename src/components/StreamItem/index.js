import React from 'react';
import { Link } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import Truncate from 'react-truncate';


// custom css
import './index.css'

const TwitchItem = (props) => {

    const getProfessions = props => {
        const gnomeProfs = props.stream.professions
        const profLength = gnomeProfs.length;
        if (profLength === 0) return 'None'
        return gnomeProfs.map((prof, i) => {
            return (
                <span key={i}> {prof}
                    { profLength !== i + 1 ? ', ' : null}
                </span>
            )
        })
    }
    return (
        <a href={props.stream.channel.url} target="_blank">
            <Card className="shadow">
                <div className="card-img-overlay">                
                    <img src={props.stream.channel.logo} width="45px" alt="img"></img>
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
                    <CardText>
                        {/* Professions: {getProfessions(props)}  */}
                    </CardText>
                </CardBody>
            </Card>
        </a>
    );
};

export default TwitchItem;