import React from "react";
import glamorous from "glamorous";

import Add from "./Add";
import BoyKing from "./BoyKing";
import TopBar from "./TopBar";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            boysKing: []
        }

        this.addBoyKing = this.addBoyKing.bind(this);
        this.removeBoyKing = this.removeBoyKing.bind(this);
        this.mapBoysKing = this.mapBoysKing.bind(this);

    }

    addBoyKing(event) {
        event.preventDefault();
        if (document.getElementById("new-todo").value === "") {
            alert("Add some stuff to do!");
        } else {
            const newBoysKing = [...this.state.boysKing];
            newBoysKing.unshift("Boy King");
            this.setState(prevState => {
                return {
                    ...prevState,
                    boysKing: newBoysKing
                }
            });
        }
    }

    mapBoysKing() {
        return this.state.boysKing.map((boyking, index) => {
            return <BoyKing key={index} index={index} delete={this.removeBoyKing} />
        });
    }

    removeBoyKing() {
        console.log("working");
        const newBoysKing = [...this.state.boysKing];
        newBoysKing.pop();
        this.setState(prevState => {
            return {
                ...prevState,
                boysKing: newBoysKing
            }
        });
    }

    render() {
        const PageContainer = glamorous.div({
            height: "100vh",
            minHeight: "450px",
            width: "100vw",
            margin: "0",
        });

        const BoysKingContainer = glamorous.div({
            marginTop: "35px",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
        });

        return (
            <PageContainer>
                <TopBar />
                <Add add={this.addBoyKing}/>
                <BoysKingContainer>
                    {this.mapBoysKing()}
                </BoysKingContainer>
            </PageContainer>
        )
    }
}
