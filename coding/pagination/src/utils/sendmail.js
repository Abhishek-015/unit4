const transporter=require("../config/mail")


module.exports=(({from,to,subject,text,html})=>{   //destructuring the message comming from mail.js ,we can simply pass message in place of destructuring
var message = {
    from: from,
    to: to,
    subject: subject,
    text: text,
    html:html
}
  transporter.sendMail(message)
})

  

  
