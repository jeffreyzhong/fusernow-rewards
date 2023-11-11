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
                "title": "What name was the order under?",
                "placeholder": "John Smith",
                "isRequired": true,
            },
            {
                "type": "text",
                "name": "order_email",
                "title": "What email was the order under?",
                "placeholder": "jsmith@gmail.com",
                "isRequired": true,
                "validators": [
                    {
                        "type": "regex",
                        "text": "Your email address is invalid.",
                        "regex": ".+@.+\\..+",
                    }
                ]
            },
            {
                "type": "text",
                "name": "amazon_order_id",
                "title": "What was your Amazon Order ID? You can find this (xxx-xxxxxxx-xxxxxxx)",
                "placeholder": "123-1234567-7654321",
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
                    "<div>We're so glad you had a positive experience! <br><br>  \
                    It would mean the world to us if you could leave a \
                    quick Amazon seller feedback for us by \
                    <a style=font-weight:bold href=https://www.amazon.com/hz/feedback?ie=UTF8&order={amazon_order_id} target=_blank>clicking here</a>. \
                    We work really hard to make our customers happy, and this would really help our business! <br><br> \
                    Either way, once you finish the survey, we'll send you your $10 Amazon gift card as promised. <br><br> \
                    Thank you so much!</div>",
                "visibleIf": "{satisfaction_rating} >= 1",
            },
            {
                "type": "radiogroup",
                "name": "submitted_feedback_radio",
                "title": "I submitted seller feedback on Amazon",
                "choices": [
                    {
                        "value": true,
                        "text": "Yes! 😄",
                    },
                    {
                        "value": false,
                        "text": "No 😟",
                    },
                ],
                "isRequired": true,
                "visibleIf": "{satisfaction_rating} >= 1",
            },
            {
                "type": "comment",
                "name": "bad_feedback",
                "isRequired": true,
                "title": "We're really sorry you didn't have the positive experience that we strive for. \
                Please let us know what happened and we'll be in touch with you soon. Either way, once \
                you finish the survey, we'll send you your $10 Amazon gift card as promised. \
                Thank you so much.",
                "visibleIf": "{satisfaction_rating} < 1",
            },
        ]
    }
    ],
    "completeText":  "Next",
    "completedHtml": "<h3>Thanks for filling out our survey! <br><br> You'll receive an email \
    from us within 24 hours with your gift card. <br><br> Thank you for choosing FuserNow!</h3>",
    "completedHtmlOnCondition": [],
    "showQuestionNumbers": "off"
};