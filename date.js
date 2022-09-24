
module.exports=getDate

function getDate(){
    let options={
        weekday:"long",
        year: "numeric",
        month:"long",
        day:"numeric"
    }
    
    const d=new Date()
    let date=d.toLocaleDateString("en-US",options)
return date;
}

//if there is more than one function 
/*

module.exports.getDate=getDate
module.exports.getDay=getDay

function getDate(){
    let options={
        weekday:"long",
        year: "numeric",
        month:"long",
        day:"numeric"
    }
    
    const d=new Date()
    let date=d.toLocaleDateString("en-US",options)
return date;
}

function getDay(){
    let options={
        weekday:"long",
       
    }
    
    const d=new Date()
    let date=d.toLocaleDateString("en-US",options)
return date;
}*/