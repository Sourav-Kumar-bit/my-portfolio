import React from "react";

export default function Loader(props) {
    return (
        <div id={props.load ? "loader" : "loader-none"}></div>
    )
}