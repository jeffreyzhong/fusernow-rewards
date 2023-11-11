
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./json";
import { themeJson } from "./theme";

function SurveyComponent() {
    const survey = new Model(json);
    survey.applyTheme(themeJson);
    survey.onComplete.add(async function(sender, options) {
        try {
            const keys = ["first_last_name", "order_email", "amazon_order_id", "satisfaction_rating", "submitted_feedback_radio", "bad_feedback"]
            var answers_dict = {};
            const survey_keys = Object.keys(survey.data);
            for (const key of keys) {
                if (survey_keys.includes(key)) {
                    if (key === "satisfaction_rating") {
                        const satisfaction_number = survey.data[key];
                        var satisfaction_description = "";
                        switch (satisfaction_number) {
                            case 2:
                                satisfaction_description = "Very Satisfied";
                                break;
                            case 1:
                                satisfaction_description = "Satisfied";
                                break;
                            case 0:
                                satisfaction_description = "Neutral";
                                break;
                            case -1:
                                satisfaction_description = "Dissatisfied";
                                break;
                            case -2:
                                satisfaction_description = "Very Dissatisfied";
                                break;
                            default:
                                satisfaction_description = "None";
                        }
                        answers_dict[key] = satisfaction_description;
                    } else if (key === "submitted_feedback_radio") {
                        const submitted_feedback_boolean = survey.data[key];
                        if (submitted_feedback_boolean === true) {
                            answers_dict[key] = "Yes";
                        } else if (submitted_feedback_boolean === false) {
                            answers_dict[key] = "No";
                        } else {
                            answers_dict[key] = "None";
                        }
                    } else if (key === "amazon_order_id") {
                        const amz_link = "https://sellercentral.amazon.com/orders-v3/order/" + String(survey.data[key]);
                        answers_dict[key] = amz_link;
                    } else {
                        answers_dict[key] = survey.data[key];
                    }
                } else {
                    answers_dict[key] = "None";
                }
            }

            const answers = Object.values(answers_dict);
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
        } catch (error) {
            // Handle errors here
        }
    })
    return (<Survey model={survey} isExpanded={true} closeOnCompleteTimeout={-1}/>);
}

export default SurveyComponent;