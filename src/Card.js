import React from "react";
import './Card.css';

export class Card extends React.Component {
    profilePicUrl = this.props.profile.avatar_url;
    fullName = this.props.profile.name;
    company = this.props.profile.company;
    render() {
        return (
            <div className="card">
                <div className="card-img">
                    <a href={this.profilePicUrl} target="_blank" rel="noreferrer">
                        <img src = {this.profilePicUrl} height="100px" width="100px" alt="avatar"/>
                    </a>
                </div>
                <div className="card-descr">
                    <div>
                        <strong>{this.fullName}</strong>
                        <br/>
                        <i>{this.company}</i>
                    </div>
                    <button className="delete-button" 
                            onClick={()=>{this.props.onDeleteCard(this.props.profile)}}>Delete Card</button>
                </div>
            </div>
        );
    }
}