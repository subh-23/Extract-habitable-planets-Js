const csv=require("csvtojson");
const csvFilePath='./kepler_data.csv';
const data = [];
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    jsonObj.forEach(k_data => {
        if(k_data.koi_disposition == 'CONFIRMED' && 
        parseFloat(k_data.koi_insol) >= 0.36 && 
        parseFloat(k_data.koi_insol) <= 1.11 &&
        parseFloat(k_data.koi_prad) <= 1.6)
            data.push(k_data);
    });
}).then(()=>{
    console.log(data)
})