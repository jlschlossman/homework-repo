import { useState } from "react";
import './Votes.css';

export function Votes() {
    return (
        <div className="votes-container">
            <h3>Vote Here</h3>
            <button>Chocolate</button>
            <button>Vanilla</button>
            <button>Strawberry</button>
        </div>
    )
}