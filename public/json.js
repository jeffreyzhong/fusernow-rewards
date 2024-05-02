export const json = {
    "checkErrorsMode": "onValueChanged",
    "title": "Cartra Feedback Survey",
    "description": "Complete this survey and get a $10 Amazon gift card. Thank you for choosing Cartra.",
    "pages": [
        {
        "name": "page1",
        "elements": [
            {
                "type": "text",
                "name": "first_last_name",
                "title": "Whose name is the order under?",
                "placeholder": "John Smith",
                "isRequired": true,
            },
            {
                "type": "text",
                "name": "order_email",
                "title": "Whhich email was the order under?",
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
            // {
            //     "type": "text",
            //     "name": "amazon_order_id",
            //     "title": "What was your Amazon Order ID? You can find this by going to your order history on Amazon or on your order confirmation email and looking for the ID in 3-7-7 (xxx-xxxxxxx-xxxxxxx) format. It should be all numbers and no letters.",
            //     "placeholder": "123-1234567-7654321",
            //     "isRequired": true,
            //     "validators": [
            //         {
            //             "type": "regex", 
            //             "text": "Your Amazon Order ID should be all numbers and in the following format: xxx-xxxxxxx-xxxxxxx",
            //             "regex": "^\\d{3}-\\d{7}-\\d{7}$",
            //         }
            //     ]
            // },
            {
                "type": "radiogroup",
                "name": "satisfaction_rating",
                "title": "How would you rate your order and overall experience? Regardless of your answer, we'll send you your $10 Amazon gift card 😄.",
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
                    "<div\">We're so glad you're satisfied with your purchase! <br><br>  \
                    It would mean a lot to us if you could share your product experience with our team and other fellow shoppers. \
                    <br><br> You can do so by finding your order from us under your Amazon orders and clicking \"Write a product review\" \
                    or click here: <br><br> \
                    <button style=\"background-color: #2659c0; color: white; padding: 15px 25px; border: none; border-radius: 2px; cursor: pointer;\" \
                        onmouseover=\"this.style.backgroundColor='#1c49a5';\" \
                        onmouseout=\"this.style.backgroundColor='#2659c0';\" \
                        onclick=\"window.open('https://www.amazon.com/gp/css/order-history', '_blank');\">Give feedback!\
                    </button> \
                    </div>",
                "visibleIf": "{satisfaction_rating} >= 1",
            },
            {
                "type": "radiogroup",
                "name": "submitted_feedback_radio",
                "title": "I gave product feedback!",
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
                Please let us know what happened and we'll be in touch with you soon. \
                Thank you so much.",
                "visibleIf": "{satisfaction_rating} < 1",
            },
        ]
    }
    ],
    "completeText":  "Next",
    "completedHtml": "<h3>Thank you for your feedback. It truly means a lot to us. <br><br> You'll receive an email \
    within 24 hours with your gift card. <br><br> Thank you for choosing Cartra :)</h3>",
    "completedHtmlOnCondition": [],
    "showQuestionNumbers": "off"
};