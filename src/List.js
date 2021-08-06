import React from "react";
import { Card } from "./Card";
import './List.css';

export class List extends React.Component{
    render() {
        return (
            <div className="cardList">
            {this.props.profileCards.map((profile) => {
                if (typeof profile === "object") {
                    return <Card key={profile.id} profile={profile} onDeleteCard={this.props.onDeleteCard}/>
                } else {
                    return null;
                }
            })}
            </div>
        );
    }
}