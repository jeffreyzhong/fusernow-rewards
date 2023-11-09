
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./json";
import { themeJson } from "./theme";

function SurveyComponent() {
    // if (typeof window !== undefined) {
        const survey = new Model(json);
        // You can delete the line below if you do not use a customized theme
        survey.applyTheme(themeJson);
        survey.onComplete.add(async function(sender, options) {
            console.log("FINISHED");
            try {
                console.log("results", survey.data);
                const answers = Object.values(survey.data);
                const response = await fetch('/api/gsheets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([answers]),
                });
        
                if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
                }
        
                const responseData = await response.json();
                console.log('Response data:', responseData);
                // Handle success response
            } catch (error) {
                console.error('You have an error in your code or there are Network issues.', error.message);
                // Handle errors here
            }
        })

        return (<Survey model={survey} isExpanded={true} closeOnCompleteTimeout={-1}/>);
    // }
}

export default SurveyComponent;