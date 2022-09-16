var resume={
    "Basicinformation":{
        "Name":"Balaji.G",
        "Age":"24",
        "email":"balaviji@gmail.com",
        "phonenumber":"7538880784"
    },
    "WorkAndExperience":"I am a fresher,willing to work in the role of full stack developer",
    "Education":[
        {
            "School":"government heigher secondary school,bhuvanagiri,608601",
            "year of 10th pass":"2014",
            "year of 12th pass":"2016"
        },
        {
            "college":"university college of engineering,pattukottai",
            "degree":"bachelor of engineering",
            "department":"EEE",
            "year of passed out":"2020"
        }
    ],
    "Skills":[
        "1.good knowledge in html,css javascript",
        "2.quick leaner",
        "3.good knowledge in frontend language"
    ],
    "Languagesknown":["Tamil,english"],
    "Intrest":[
        "1.learn coding",
        "2.create browser",
        "3.hearing songs"
    ]
}

let Resumejson=JSON.stringify(Resume);
   console.log(Resumejson);

let Resumeobj=JSON.parse(Resumejson);
   console.log(Resumeobj);
