import { NextApiRequest, NextApiResponse } from "next";
import qs from 'qs'
import axios from "axios";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    

    const data = qs.stringify({
        'key': 'OnwyU5jV6dIb225',
        'secret': 'n0WqOyhKsx2HiMAIcU5ag4A2zJsPej',
        'apiClientID': '92',
        'subject': `SUBSCRIBE ${req.body.email} FOR PRODUCT UPDATES`,
        'from': 'leads@email.olivetreehub.com',
        'to': 'info@olivetreemobile.co',
        'cc': 'brian.wachira@olivetreemobile.co',
        'body': `<!DOCTYPE html>\\n<html>\\n<head>\\n <title>SUBSCRIBE ${req.body.email} FOR PRODUCT UPDATES</title>\\n</head>\\n<body>\\n    <h1>Hello!</h1>\\n </p><p>${req.body.email}  wants to subscribe for product updates.</body>\\n</html>\n`,
        'sender_name': 'Olivetree Website',
        'recipient_name': 'INFO',
        'attributes': `{"EMAIL":${req.body.email},}`
    })

    const config = {
        method: 'post',
        url: 'https://app.bongasms.co.ke/api/send-bulk-email',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            
             res.status(response.status).json(response.data)
        })
        .catch(function (error) {
            res
				.status(error.status)
				.json({ status: error.status, message: error.message });
        });

}
