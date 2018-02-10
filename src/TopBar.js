import React from "react";

export default function TopBar() {
    const styles = {
        backgroundColor: "red",
        color: "white",
        width: "100vw",
        margin: "0",
        height: "65px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return <h1 style={styles}>Todos For Days...</h1>
}
