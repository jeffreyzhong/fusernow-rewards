export const json = {
    "checkErrorsMode": "onValueChanged",
    "title": "FuserNow Rewards Survey",
    "description": "Fill out this survey to get your $10 Amazon gift card!",
    "pages": [
        {
        "name": "page1",
        "elements": [
            {
                "type": "text",
                "name": "first_last_name",
                "title": "What was the name on the order?",
                "isRequired": true,
            },
            {
                "type": "text",
                "name": "amazon_order_id",
                "title": "What was your Amazon Order ID? (xxx-xxxxxxx-xxxxxxx)",
                "isRequired": true,
                "validators": [
                    {
                        "type": "regex", 
                        "text": "Your Amazon Order ID should be all numbers and in the following format: xxx-xxxxxxx-xxxxxxx",
                        "regex": "^\\d{3}-\\d{7}-\\d{7}$",
                    }
                ]
            },
            {
                "type": "radiogroup",
                "name": "satisfaction_rating",
                "title": "How would you rate your order and overall experience? Don't worry, we'll send you your $10 Amazon gift card either way 😄.",
                "isRequired": true,
                "choices": [
                    {
                        "value": 2,
                        "text": "Very Satisfied 😄",
                    },
                    {
                        "value": 1,
                        "text": "Satisfied 🙂",
                    },
                    {
                        "value": 0,
                        "text": "Neutral 😐",
                    },
                    {
                        "value": -1,
                        "text": "Dissatisfied 😕",
                    },
                    {
                        "value": -2,
                        "text": "Very Dissatisfied 😟",
                    },
                ]
            }
        ]
    },
    {
        "name": "page2",
        "elements": [
            {
                "type": "html",
                "name": "amazon_feedback_link",
                "html": 
                    "<div>We're so glad you had a positive experience!  \
                    It would mean the world to us if you could leave a \
                    quick Amazon seller feedback for us by clicking \
                    <a href=https://www.amazon.com/hz/feedback?ie=UTF8&order={amazon_order_id} target=_blank>here</a>. \
                    We work really hard to make our customers happy, and this would really help our business! <br><br> \
                    Either way, once you finish the survey, we'll send you your $10 Amazon gift card as promised. <br><br> \
                    Thank you so much!</div>",
                "visibleIf": "{satisfaction_rating} >= 1",
            },
            {
                "type": "comment",
                "name": "bad_feedback",
                "title": "We're really sorry you didn't have the positive experience that we strive for. \
                Please let us know what happened and we'll be in touch with you soon. Either way, once \
                you finish the survey, we'll send you your $10 Amazon gift card as promised. \
                Thank you so much.",
                "visibleIf": "{satisfaction_rating} < 1",
            },
        ]
    }
    ],
    "completeText":  "Send",
    "completedHtml": "<h3>Thank you for your feedback</h3>",
    "completedHtmlOnCondition": [
    {
        "expression": "{nps_score} >= 9",
        "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h4>"
    },
    {
        "expression": "{nps_score} >= 6  and {nps_score} <= 8",
        "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product better.</h4>"
    }
    ],
    "showQuestionNumbers": "off"
};