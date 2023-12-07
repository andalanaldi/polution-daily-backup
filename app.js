const express = require('express')
const app = express()
app.use(express.json())
const apiUrl = "http://api.airvisual.com/v2/city?city=Badung&state=Bali&country=Indonesia&key=b2a488ac-15f3-4f22-970d-a3430b2ef991";

// Make the API request using the Fetch API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the desired data
    const ts = data.data.current.pollution.ts;
    const aqius = data.data.current.pollution.aqius;

    // Log the results
    console.log("Timestamp (ts):", ts);
    console.log("AQI US (aqius):", aqius);
  })
  .catch(error => console.error("Error fetching data:", error));
 
  app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
 
// city state country station url
// timestamp
// aqius

// Bandung West Java Indonesia (RespoKare Mask Setrasari, TMLEnergy, Setra Duta, jalan Sukawarna Baru A Stations) https://www.iqair.com/id/indonesia/west-java/bandung

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 157

// Surabaya East Java Indonesia (KLHK, LMJAELANI.com, RespoKare Mask Stations) https://www.iqair.com/id/indonesia/east-java/surabaya

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 152

// Medan North Sumatra Indonesia (DLH Medan 02, KLHK Station) https://www.iqair.com/indonesia/north-sumatra/medan/dlh-medan-02

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 101

// Jakarta Jakarta Indonesia (KLHK, BMKG, + 38 Other Station) https://www.iqair.com/id/indonesia/jakarta

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 124

// Sleman Yogyakarta Indonesia (BMKG Station), Yogyakarta CIty Has No Station https://www.iqair.com/indonesia/yogyakarta/sleman/sleman-station https://www.iqair.com/id/indonesia/yogyakarta

// Timestamp (ts): 2023-12-07T16:00:00.000Z
// AQI US (aqius): 68

// Depok West Java Indonesia (No Station? PT. Cakra Anugerah Jaya) https://www.iqair.com/id/indonesia/west-java/depok

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 157

// Denpasar Bali Indonesia (KLHK Station + Lumi Clinic, Smart Energy Technology, nasi_goreng_87) https://www.iqair.com/id/indonesia/bali/denpasar

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 85

// Bekasi West Java Indonesia (KLHK Station) https://www.iqair.com/id/indonesia/west-java/bekasi

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 130

// Makassar South Sulawesi Indonesia (RespoKare Mask Ruko Metro Square Station) https://www.iqair.com/id/indonesia/south-sulawesi/makassar

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 16

// Palembang South Sumatra Indonesia (KLHK Station) https://www.iqair.com/id/indonesia/south-sumatra/palembang

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 45

// Batam Riau Islands Indonesia (KLHK BMKG Station) https://www.iqair.com/id/indonesia/riau-islands/batam

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 65

// Kupang East Nusa Tenggaara Indonesia (KLHK Station) https://www.iqair.com/id/indonesia/east-nusa-tenggaara/kupang

// Timestamp (ts): 2023-12-07T16:00:00.000Z
// AQI US (aqius): 37

// Pontianak West Kalimantan Indonesia (Pontiudar Station Anonim) https://www.iqair.com/id/indonesia/west-kalimantan/pontianak

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 29

// Mataram West Nusa Tenggara Indonesia (KLHK Station) https://www.iqair.com/id/indonesia/west-nusa-tenggara/mataram

// Timestamp (ts): 2023-12-07T17:00:00.000Z
// AQI US (aqius): 52

// Pekanbaru Riau Indonesia (BMKG, KLHK, Kimteng Coffee Company Stations ) https://www.iqair.com/id/indonesia/riau/pekanbaru

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 52

// Bogor West Java Indonesia (BMKG, KLHK, Hen San) https://www.iqair.com/id/indonesia/west-java/bogor

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 53

// Semarang Central Java Indonesia (BMKG, KLHK RepoKare Mask) https://www.iqair.com/id/indonesia/central-java/semarang

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 80

// South Tangerang Banten Indonesia (Pesantren Bayt Al-Quran, Inti Garda Pratam, Pakis, Yerun, Yayasan AHP) https://www.iqair.com/id/indonesia/banten/south-tangerang

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 166

// Serang Banten Indonesia (KLHK, PT Barito Pacific Tbk. (BRPT), RespoKare Mask) https://www.iqair.com/id/indonesia/banten/serang

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 39

// Banjarbaru South Kalimantan Indonesia (BMKG) https://www.iqair.com/id/indonesia/south-kalimantan/banjarbaru/banjarbaru-s

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 53

// City of Balikpapan East Kalimantan Indonesia (KLHK) https://www.iqair.com/id/indonesia/east-kalimantan/city-of-balikpapan/balikpapan-sepinggan

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 26

// Samarinda East Kalimantan Indonesia (BMKG) https://www.iqair.com/id/indonesia/east-kalimantan/samarinda/samarinda-s 

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 12

// Ubud Bali Indonesia (Anonim 33 PurpleAir 57) https://www.iqair.com/id/indonesia/bali/ubud/ubudcare-clinic https://www.iqair.com/id/indonesia/bali/ubud/jalan-raya-mas

// Timestamp (ts): 2023-12-07T20:00:00.000Z
// AQI US (aqius): 47

// Badung Bali Indonesia ( East Java & Co) https://www.iqair.com/id/indonesia/bali/badung/east-java-co-bali

// Timestamp (ts): 2023-12-07T20:00:00.000Z
// AQI US (aqius): 67

// City State Country

// Bandung West Java Indonesia 
// Surabaya East Java Indonesia 
// Medan North Sumatra Indonesia 
// Jakarta Jakarta Indonesia 
// Sleman Yogyakarta Indonesia 
// Depok West Java Indonesia 
// Denpasar Bali Indonesia 
// Bekasi West Java Indonesia 
// Makassar South Sulawesi Indonesia 
// Palembang South Sumatra Indonesia 
// Batam Riau Islands Indonesia 
// Kupang East Nusa Tenggaara Indonesia 
// Pontianak West Kalimantan Indonesia 
// Mataram West Nusa Tenggara Indonesia 
// Pekanbaru Riau Indonesia 
// Bogor West Java Indonesia 
// Semarang Central Java Indonesia 
// South Tangerang Banten Indonesia 
// Serang Banten Indonesia 
// Banjarbaru South Kalimantan Indonesia 
// City of Balikpapan East Kalimantan Indonesia 
// Samarinda East Kalimantan Indonesia  
// Ubud Bali Indonesia 
// Badung Bali Indonesia 

// City State Country Timestamp(ts) AQIUS(aqius)

// Bandung WestJava Indonesia 2023-12-07T18:00:00.000Z 157
// Surabaya EastJava Indonesia 2023-12-07T18:00:00.000Z 152
// Medan NorthSumatra Indonesia 2023-12-07T18:00:00.000Z 101
// Jakarta Jakarta Indonesia 2023-12-07T18:00:00.000Z 124
// Sleman Yogyakarta Indonesia 2023-12-07T16:00:00.000Z 68
// Depok WestJava Indonesia 2023-12-07T18:00:00.000Z 157
// Denpasar Bali Indonesia 2023-12-07T18:00:00.000Z 85
// Bekasi WestJava Indonesia 2023-12-07T18:00:00.000Z 130
// Makassar SouthSulawesi Indonesia 2023-12-07T19:00:00.000Z 16
// Palembang SouthSumatra Indonesia 2023-12-07T19:00:00.000Z 45
// Batam RiauIslands Indonesia 2023-12-07T18:00:00.000Z 65
// Kupang EastNusaTenggaara Indonesia 2023-12-07T16:00:00.000Z 37
// Pontianak WestKalimantan Indonesia 2023-12-07T19:00:00.000Z 29
// Mataram WestNusaTenggara Indonesia 2023-12-07T17:00:00.000Z 52
// Pekanbaru Riau Indonesia 2023-12-07T19:00:00.000Z 52
// Bogor WestJava Indonesia 2023-12-07T19:00:00.000Z 53
// Semarang CentralJava Indonesia 2023-12-07T19:00:00.000Z 80
// SouthTangerang Banten Indonesia 2023-12-07T19:00:00.000Z 166
// Serang Banten Indonesia 2023-12-07T19:00:00.000Z 39
// Banjarbaru SouthKalimantan Indonesia 2023-12-07T19:00:00.000Z 53
// CityofBalikpapan EastKalimantan Indonesia 2023-12-07T19:00:00.000Z 26
// Samarinda EastKalimantan Indonesia 2023-12-07T18:00:00.000Z 12 
// Ubud Bali Indonesia 2023-12-07T20:00:00.000Z 47
// Badung Bali Indonesia 2023-12-07T20:00:00.000Z 67

// looks in terminal:
// PS C:\Users\Aldi Andalan\Documents\revou\polution-daily-backup> npm run start

// > authentication-example@1.0.0 start
// > nodemon app.js

// [nodemon] 3.0.1
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node app.js`
// Server is running on port 3000

// [nodemon] restarting due to changes...
// [nodemon] starting `node app.js`
// Server is running on port 3000

// Error fetching data: TypeError: Cannot read properties of undefined (reading 'pollution')
//     at C:\Users\Aldi Andalan\Documents\revou\polution-daily-backup\app.js:13:34
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

// fail example

// Banjarmasin&state=South Kalimantan&country=Indonesia (No Station) https://www.iqair.com/id/indonesia/south-kalimantan/banjarmasin

// Error fetching data: TypeError: Cannot read properties of undefined (reading 'pollution')
//     at C:\Users\Aldi Andalan\Documents\revou\polution-daily-backup\app.js:13:34
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

// successful example

// Samarinda East Kalimantan Indonesia (BMKG) https://www.iqair.com/id/indonesia/east-kalimantan/samarinda/samarinda-s 

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 12

// package.json

// "start": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' app.ts",
// "build": "tsc",
// "test": "echo \"Error: no test specified\" && exit 1"
// },

// commit to database

// const {PrismaClient} = require('@prisma/client');
// const prima = PrismaClient()
// const pushpolutiondaily = async(City,Time,aqius) =>{
//     return prima.polution.create({
//         data:{
//             City,
//             Time,
//             aqius
//         }
//     })
// }