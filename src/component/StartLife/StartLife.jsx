import React from "react";

import ChooseProps from "../ChooseProps/ChooseProps";
import {BrowserRouter, Route} from "react-router-dom";

function StartLife() {
    return (
        <BrowserRouter>
            <Route path="/chooseprops" component={ChooseProps}/>
        </BrowserRouter>
    );
}

export default StartLife;