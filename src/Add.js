import React from "react";
import glamorous from "glamorous";

export default function Add(props) {

    const formStyles = {
        height: "200px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
    }

    const inputStyles = {
        outline: "none",
        height: "65px",
        width: "65%",
        minWidth: "300px",
        paddingLeft: "25px",
        fontSize: "1.35em",
        color: "red",
        border: "1px solid #d3d3d3",
        borderRadius: "2px",

    };

    const AddButton = glamorous.button({
        height: "65px",
        width: "25%",
        outline: "none",
        border: "2px solid red",
        fontSize: "1.35em",
        backgroundColor: "rgba(255, 0, 0, 0.3)",
        color: "red",
        transition: "all 0.2s",
        borderRadius: "2px",
        ":hover": {
            color: "white",
            backgroundColor: "red",
        }
    });

    return (
        <form onSubmit={props.add} style={formStyles}>
            <input type="text" name="newTodo" id="new-todo" placeholder="Add something to your todo list!" style={inputStyles}/>
            <AddButton type="submit" id="add-button">ADD!</AddButton>
        </form>
    )
}
