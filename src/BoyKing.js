import React from "react";
import glamorous from "glamorous";

export default function BoyKing(props) {
    const Card = glamorous.div({
        width: "320px",
        height: "300px",
        borderRadius: "4px",
        backgroundColor: "white",
        border: "1px solid #d3d3d3",
        margin: "25px",
        position: "relative",
    });

    const BoyKingImg = glamorous.img({
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "auto",
        borderRadius: "0 0 4px 4px",
    });

    const BoyKingDetails = glamorous.div({
        position: "absolute",
        top: "0",
        height: "75px",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    });

    const Title = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "30%",

    });

    return (
        <Card>
            <BoyKingDetails>
                <Title>
                    <h2>{props.index + 1})</h2>
                    <p style={{fontSize: "1.5em", color: "red"}}>Boy King</p>
                </Title>
                <div onClick={props.delete}>
                    <i  className="far fa-times-circle remove-boy-king"></i>
                </div>
            </BoyKingDetails>
            <BoyKingImg src="https://images.unsplash.com/photo-1457052271742-6b6b66887aeb"/>
        </Card>
    )
}
