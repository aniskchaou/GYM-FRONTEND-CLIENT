exports.userSeed = {
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
}

exports.memberSeed={
name: 'Sequelize.STRING',
    date: 'Sequelize.STRING',
    address:'Sequelize.STRING',
    telephone:'Sequelize.STRING'
}

exports.currencySeed={
name: 'USD',
    symbol: '$',
    description:'Sequelize.STRING'
}

exports.homePageSeed={
 sliderTitle: "Hello Gym",
    leftButtonTitle: "WHAT'S NEW",
    rightButtonTitle:"COURSES",
      memberstitle: "MEMBERS",
            content: "The lowdown on Blood Flow Restriction training ? FREE CEC/CPD ? ?Let's compare ?Raw Vs Cooked ? Building Ab, Core &amp; Pelvic strength ? Get? clients short-term wins from long-term goals ? So you want to operate multiple clubs? + LOADS MORE",
            footer:"Great weekend, met lots of cool people and took away quite a bit. Thank you for the experience, and to you and your professional",
             aboutustitle: "ABOUT US",
                subTitle: "sfdf",
                content:"Trainers, athletes and serious clients alike are looking for the toughest, most brutally productive training techniques to spice up their workouts and provide a truly unique challenge for their body and mind. Think: one-arm push-ups, pistols",
                contactDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo dolor. Ae",
                trainerstitle: "TRAINERS",
                    quote1Title: "JENIFERR",
                    quote1Description:"Trainers, athletes and serious clients alike are looking for the toughest, most brutally productive training techniques to spice up their workouts and provide a truly unique challenge",
                    quote2Title: "JHON",
                    quote2Description:"Trainers, athletes and serious clients alike are looking for the toughest, most brutally productive training techniques to spice up their workouts and provide a truly unique challenge",
                    valuetitle: "Sequelize.STRING",
                        value1Title: "FILEX",
                        description1:"I just wanted to sincerely thank you for the opportunity to represent Precision Nutrition and the US at such an amazing event.",
                        value2Title: "PASSION",
                        description2:"I just wanted to sincerely thank you for the opportunity to represent Precision Nutrition and the US at such an amazing event.",
                        value3Title: "IGNITING",
                        description3:"I just wanted to sincerely thank you for the opportunity to represent Precision Nutrition and the US at such an amazing event."
}


const fs = require('fs');

exports.getSytemSettings=()=>{
var rawdata = fs.readFileSync('db/settings/system.json');
var student = JSON.parse(rawdata);
console.log(student);
return student
}

exports.getEmailSettings=()=>{
var rawdata = fs.readFileSync('db/settings/system.json');
var student = JSON.parse(rawdata);
console.log(student);
return student
}

exports.getEmailTemplateSettings=()=>{
var rawdata = fs.readFileSync('db/settings/email_template.json');
var student = JSON.parse(rawdata);
console.log(student);
return student
}


exports.getEmailSettings=()=>{
var rawdata = fs.readFileSync('db/settings/email.json');
var student = JSON.parse(rawdata);
console.log(student);
return student
}

exports.getFooterSettings=()=>{
var rawdata = fs.readFileSync('db/settings/footer.json');
var student = JSON.parse(rawdata);
console.log(student);
return student
}

exports.getHeaderSettings=()=>{
var rawdata = fs.readFileSync('db/settings/header.json');
var student = JSON.parse(rawdata);
console.log(student);
return student
}

exports.getLocalisationSettings=()=>{
var rawdata = fs.readFileSync('db/settings/localisation.json');
var student = JSON.parse(rawdata);
console.log(student);
return student
}

exports.getNotificationSettings=()=>{
var rawdata = fs.readFileSync('db/settings/notification.json');
var student = JSON.parse(rawdata);
console.log(student);
return student
}

exports.getDashboardSettings=()=>{
var rawdata = fs.readFileSync('db/settings/dashboard.json');
var student = JSON.parse(rawdata);
console.log(student);
return student
}
