import { useState } from "react";
import './AdDesigner.css'

export function AdDesigner() {

    const [flavor, setFlavor] = useState("Strawberry");
    const [backgroundcolor, setBackgroundcolor] = useState(false)

    return (

        <div className="adDesigner-container">
            <h1>Ad Designer</h1>
            <div className="ad">
                <h3>Vote For</h3>
                <h2>{flavor}</h2>
            </div>
            <div className="supportlist">
                <h4>What to Support</h4>
                <button>Chocolate</button>
                <button>Vanilla</button>
                <button>Strawberry</button>
            </div>
            <div className="colorthemelist">
                <h4>Color Theme</h4>
                <button>Light</button>
                <button>Dark</button>
            </div>
            <div className="fontsizelist"></div>
                <h4>Font Size</h4>
                <button>Down</button>
                <button>Up</button>
        </div>
    );
}