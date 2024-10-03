const  nodemailer = require("nodemailer");

exports.sendMail = (req,res) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port:587,
        secure: false,  // true for 465, false for other ports

        auth: {
            user: "kushwahanjali730@gmail.com",
            pass: "gxwoiiicfryqlsbs",
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: "kushwahanjali730@gmail.com",
        to: req.body.email,
        subject: "NEWSLETTER SUBSCRIPTION",
        // text: "Do not share this link to anyone.",
        html: `<h1>Welcome to cosmetic iconic brand.</h1>
<p> thanks for Suscribe our brand we are connecting with us .
I giving you more information for any products <p>`,
    };

    transport.sendMail(mailOptions, (err,info) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err.toString());
        }
        console.log(info);
        return res.send(
            "<h1 style='text-align:center;color: tomato; margin-top:10%'><span style='font-size:60px;'>✔️</span> <br />Email Sent! Check your inbox , <br/>check spam in case not found in inbox.</h1><a href='/'>HomePage</a>"
        );
    });
};