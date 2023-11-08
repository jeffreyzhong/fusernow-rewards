'use client'

import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";
import { themeJson } from "./theme";

function SurveyComponent() {
    const survey = new Model(json);
    // You can delete the line below if you do not use a customized theme
    survey.applyTheme(themeJson);

    return (<Survey model={survey} isExpanded={true} closeOnCompleteTimeout={-1} />);
}

export default SurveyComponent;