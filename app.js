const express = require('express')
const app = express()
app.use(express.json())
const apiUrl = "http://api.airvisual.com/v2/city?city=Batam&state=Riau Islands&country=Indonesia&key=b2a488ac-15f3-4f22-970d-a3430b2ef991";

// Make the API request using the Fetch API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the desired data
    const ts = data.data.current.pollution.ts;
    const aqius = data.data.current.pollution.aqius;
    const coordinates = data.data.location.coordinates; // Get coordinates

    // Log the results
    console.log("Timestamp (ts):", ts);
    console.log("AQI US (aqius):", aqius);
    console.log("Coordinates:", coordinates); // Log coordinates
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
// Timestamp (ts): 2023-12-07T21:00:00.000Z
// AQI US (aqius): 124
// Coordinates: [ 107.60694, -6.92222 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 97
// Coordinates: [ 107.60694, -6.92222 ]

// Timestamp (ts): 2023-12-19T22:00:00.000Z
// AQI US (aqius): 31
// Coordinates: [ 104.45833, 0.91667 ]

// Timestamp (ts): 2023-12-19T23:00:00.000Z
// AQI US (aqius): 122
// Coordinates: [ 107.60694, -6.92222 ]

// Timestamp (ts): 2023-12-20T19:00:00.000Z
// AQI US (aqius): 105
// Coordinates: [ 107.60694, -6.92222 ]

// Surabaya East Java Indonesia (KLHK, LMJAELANI.com, RespoKare Mask Stations) https://www.iqair.com/id/indonesia/east-java/surabaya

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 152
// Timestamp (ts): 2023-12-07T21:00:00.000Z
// AQI US (aqius): 132
// Coordinates: [ 112.7946058, -7.2800904 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 116
// Coordinates: [ 112.7946058, -7.2800904 ]

// Timestamp (ts): 2023-12-19T23:00:00.000Z
// AQI US (aqius): 92
// Coordinates: [ 112.7946058, -7.2800904 ]

// Timestamp (ts): 2023-12-20T19:00:00.000Z
// AQI US (aqius): 71
// Coordinates: [ 112.7946058, -7.2800904 ]

// Medan North Sumatra Indonesia (DLH Medan 02, KLHK Station) https://www.iqair.com/indonesia/north-sumatra/medan/dlh-medan-02

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// // AQI US (aqius): 101
// Timestamp (ts): 2023-12-07T21:00:00.000Z
// AQI US (aqius): 153
// Coordinates: [ 98.6722227, 3.5951956 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 86
// Coordinates: [ 98.6722227, 3.5951956 ]

// Timestamp (ts): 2023-12-19T22:00:00.000Z
// AQI US (aqius): 90
// Coordinates: [ 98.6722227, 3.5951956 ]

// Timestamp (ts): 2023-12-20T19:00:00.000Z
// AQI US (aqius): 74
// Coordinates: [ 98.6722227, 3.5951956 ]

// Jakarta Jakarta Indonesia (KLHK, BMKG, + 38 Other Station) https://www.iqair.com/id/indonesia/jakarta

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 124
// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 91
// Coordinates: [ 106.79324, -6.236704 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 87
// Coordinates: [ 106.79324, -6.236704 ]

// Timestamp (ts): 2023-12-19T23:00:00.000Z
// AQI US (aqius): 98
// Coordinates: [ 106.79324, -6.236704 ]

// Timestamp (ts): 2023-12-20T19:00:00.000Z
// AQI US (aqius): 95
// Coordinates: [ 106.79324, -6.236704 ]

// Sleman Yogyakarta Indonesia (BMKG Station), Yogyakarta CIty Has No Station https://www.iqair.com/indonesia/yogyakarta/sleman/sleman-station https://www.iqair.com/id/indonesia/yogyakarta

// Timestamp (ts): 2023-12-07T16:00:00.000Z
// AQI US (aqius): 68
// Timestamp (ts): 2023-12-07T21:00:00.000Z
// AQI US (aqius): 73
// Coordinates: [ 110.35556, -7.71556 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 56
// Coordinates: [ 110.35556, -7.71556 ]

// Timestamp (ts): 2023-12-19T22:00:00.000Z
// AQI US (aqius): 59
// Coordinates: [ 110.35556, -7.71556 ]

// Timestamp (ts): 2023-12-20T18:00:00.000Z
// AQI US (aqius): 72
// Coordinates: [ 110.35556, -7.71556 ]

// Depok West Java Indonesia (No Station? PT. Cakra Anugerah Jaya) https://www.iqair.com/id/indonesia/west-java/depok

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 157
// Timestamp (ts): 2023-12-07T21:00:00.000Z
// AQI US (aqius): 74
// Coordinates: [ 106.81861, -6.4 ]

// Timestamp (ts): 2023-12-18T18:00:00.000Z
// AQI US (aqius): 91
// Coordinates: [ 106.81861, -6.4 ]

// Timestamp (ts): 2023-12-19T22:00:00.000Z
// AQI US (aqius): 50
// Coordinates: [ 106.81861, -6.4 ]

// Timestamp (ts): 2023-12-20T19:00:00.000Z
// AQI US (aqius): 72
// Coordinates: [ 106.81861, -6.4 ]

// Denpasar Bali Indonesia (KLHK Station + Lumi Clinic, Smart Energy Technology, nasi_goreng_87) https://www.iqair.com/id/indonesia/bali/denpasar

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 85
// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 55
// Coordinates: [ 115.19754, -8.663225 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 61
// Coordinates: [ 115.19754, -8.663225 ]

// Timestamp (ts): 2023-12-19T23:00:00.000Z
// AQI US (aqius): 119
// Coordinates: [ 115.19754, -8.663225 ]

// Timestamp (ts): 2023-12-20T19:00:00.000Z
// AQI US (aqius): 66
// Coordinates: [ 115.19754, -8.663225 ]

// Bekasi West Java Indonesia (KLHK Station) https://www.iqair.com/id/indonesia/west-java/bekasi

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 130
// Timestamp (ts): 2023-12-07T21:00:00.000Z
// AQI US (aqius): 131
// Coordinates: [ 106.913972, -6.388776 ]

// Timestamp (ts): 2023-12-19T22:00:00.000Z
// AQI US (aqius): 55
// Coordinates: [ 106.913972, -6.388776 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 85
// Coordinates: [ 106.913972, -6.388776 ]

// Timestamp (ts): 2023-12-20T19:00:00.000Z
// AQI US (aqius): 65
// Coordinates: [ 106.913972, -6.388776 ]

// Makassar South Sulawesi Indonesia (RespoKare Mask Ruko Metro Square Station) https://www.iqair.com/id/indonesia/south-sulawesi/makassar

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 16
// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 16
// Coordinates: [ 119.43194, -5.14861 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 57
// Coordinates: [ 119.43194, -5.14861 ]

// Timestamp (ts): 2023-12-19T23:00:00.000Z
// AQI US (aqius): 53
// Coordinates: [ 119.43194, -5.14861 ]

// Timestamp (ts): 2023-12-20T19:00:00.000Z
// AQI US (aqius): 68
// Coordinates: [ 119.43194, -5.14861 ]

// Palembang South Sumatra Indonesia (KLHK Station) https://www.iqair.com/id/indonesia/south-sumatra/palembang

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 45
// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 56
// Coordinates: [ 104.7754307, -2.9760735 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 62
// Coordinates: [ 104.7754307, -2.9760735 ]

// Timestamp (ts): 2023-12-19T23:00:00.000Z
// AQI US (aqius): 61
// Coordinates: [ 104.7754307, -2.9760735 ]

// Timestamp (ts): 2023-12-20T19:00:00.000Z
// AQI US (aqius): 94
// Coordinates: [ 104.7754307, -2.9760735 ]

// Batam Riau Islands Indonesia (KLHK BMKG Station) https://www.iqair.com/id/indonesia/riau-islands/batam

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 65
// Timestamp (ts): 2023-12-07T21:00:00.000Z
// AQI US (aqius): 63
// Coordinates: [ 104.05292069999996, 1.1300779 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 70
// Coordinates: [ 104.05292069999996, 1.1300779 ]

// Timestamp (ts): 2023-12-19T22:00:00.000Z
// AQI US (aqius): 71
// Coordinates: [ 104.05292069999996, 1.1300779 ]

// Timestamp (ts): 2023-12-20T19:00:00.000Z
// AQI US (aqius): 71
// Coordinates: [ 104.05292069999996, 1.1300779 ]

// Kupang East Nusa Tenggaara Indonesia (KLHK Station) https://www.iqair.com/id/indonesia/east-nusa-tenggaara/kupang

// Timestamp (ts): 2023-12-07T16:00:00.000Z
// AQI US (aqius): 37
// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 41
// Coordinates: [ 123.60694, -10.17083 ]

// Timestamp (ts): 2023-12-18T19:00:00.000Z
// AQI US (aqius): 37
// Coordinates: [ 123.60694, -10.17083 ]

// Pontianak West Kalimantan Indonesia (Pontiudar Station Anonim) https://www.iqair.com/id/indonesia/west-kalimantan/pontianak

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 29
// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 21
// Coordinates: [ 109.344387, -0.04046 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 41
// Coordinates: [ 109.344387, -0.04046 ]

// Mataram West Nusa Tenggara Indonesia (KLHK Station) https://www.iqair.com/id/indonesia/west-nusa-tenggara/mataram

// Timestamp (ts): 2023-12-07T17:00:00.000Z
// AQI US (aqius): 52
// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 51
// Coordinates: [ 116.11667, -8.58333 ]

// Timestamp (ts): 2023-12-18T19:00:00.000Z
// AQI US (aqius): 61
// Coordinates: [ 116.11667, -8.58333 ]

// Pekanbaru Riau Indonesia (BMKG, KLHK, Kimteng Coffee Company Stations ) https://www.iqair.com/id/indonesia/riau/pekanbaru

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 52
// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 45
// Coordinates: [ 101.4477793, 0.5070677 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 48
// Coordinates: [ 101.4477793, 0.5070677 ]

// Bogor West Java Indonesia (BMKG, KLHK, Hen San) https://www.iqair.com/id/indonesia/west-java/bogor

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 53
// Timestamp (ts): 2023-12-07T21:00:00.000Z
// AQI US (aqius): 68
// Coordinates: [ 106.80603880000001, -6.597146899999999 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 61
// Coordinates: [ 106.80603880000001, -6.597146899999999 ]

// Semarang Central Java Indonesia (BMKG, KLHK RepoKare Mask) https://www.iqair.com/id/indonesia/central-java/semarang

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 80
// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 88
// Coordinates: [ 110.42083, -6.99306 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 113
// Coordinates: [ 110.42083, -6.99306 ]

// South Tangerang Banten Indonesia (Pesantren Bayt Al-Quran, Inti Garda Pratam, Pakis, Yerun, Yayasan AHP) https://www.iqair.com/id/indonesia/banten/south-tangerang

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 166
// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 164
// Coordinates: [ 106.71789, -6.28862 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 156
// Coordinates: [ 106.71789, -6.28862 ]

// Serang Banten Indonesia (KLHK, PT Barito Pacific Tbk. (BRPT), RespoKare Mask) https://www.iqair.com/id/indonesia/banten/serang

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 39
// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 37
// Coordinates: [ 106.15417, -6.11528 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 59
// Coordinates: [ 106.15417, -6.11528 ]

// Banjarbaru South Kalimantan Indonesia (BMKG) https://www.iqair.com/id/indonesia/south-kalimantan/banjarbaru/banjarbaru-s

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 53
// Timestamp (ts): 2023-12-07T21:00:00.000Z
// AQI US (aqius): 49
// Coordinates: [ 114.8103181, -3.4572422 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 89
// Coordinates: [ 114.8103181, -3.4572422 ]

// City of Balikpapan East Kalimantan Indonesia (KLHK) https://www.iqair.com/id/indonesia/east-kalimantan/city-of-balikpapan/balikpapan-sepinggan

// Timestamp (ts): 2023-12-07T19:00:00.000Z
// AQI US (aqius): 26
// Timestamp (ts): 2023-12-07T21:00:00.000Z
// AQI US (aqius): 27
// Coordinates: [ 116.89419, -1.24204 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 45
// Coordinates: [ 116.89419, -1.24204 ]

// Samarinda East Kalimantan Indonesia (BMKG) https://www.iqair.com/id/indonesia/east-kalimantan/samarinda/samarinda-s 

// Timestamp (ts): 2023-12-07T18:00:00.000Z
// AQI US (aqius): 12
// Timestamp (ts): 2023-12-07T20:00:00.000Z
// AQI US (aqius): 12
// Coordinates: [ 117.1436154, -0.4948232 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 30
// Coordinates: [ 117.1436154, -0.4948232 ]

// Ubud Bali Indonesia (Anonim 33 PurpleAir 57) https://www.iqair.com/id/indonesia/bali/ubud/ubudcare-clinic https://www.iqair.com/id/indonesia/bali/ubud/jalan-raya-mas

// Timestamp (ts): 2023-12-07T20:00:00.000Z
// AQI US (aqius): 47
// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 54
// Coordinates: [ 115.243533, -8.505905 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 43
// Coordinates: [ 115.243533, -8.505905 ]

// Badung Bali Indonesia ( East Java & Co) https://www.iqair.com/id/indonesia/bali/badung/east-java-co-bali

// Timestamp (ts): 2023-12-07T20:00:00.000Z
// AQI US (aqius): 67
// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 49
// Coordinates: [ 115.213997, -8.566655 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 59
// Coordinates: [ 115.213997, -8.566655 ]

// Malang East Java Indonesia (KLHK, BMKG) https://www.iqair.com/id/indonesia/east-java/malang 

// Timestamp (ts): 2023-12-07T21:00:00.000Z
// AQI US (aqius): 73
// Coordinates: [ 112.6304, -7.9797 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 52
// Coordinates: [ 112.6304, -7.9797 ]

// Buleleng Bali Indonesia (Plataran Menjangan Resort & Spa) https://www.iqair.com/id/indonesia/bali/buleleng

// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 21
// Coordinates: [ 114.851048, -8.200728 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 12
// Coordinates: [ 114.851048, -8.200728 ]

// Tangerang Banten Indonesia (Puretrex Indonesia, Green Movement) https://www.iqair.com/id/indonesia/banten/tangerang

// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 108
// Coordinates: [ 106.63, -6.17806 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 94
// Coordinates: [ 106.63, -6.17806 ]

// Kendari Southeast Sulawesi Indonesia (KLHK) https://www.iqair.com/id/indonesia/southeast-sulawesi/kendari

// Timestamp (ts): 2023-12-07T21:00:00.000Z
// AQI US (aqius): 59
//  Coordinates: [ 122.51507, -3.9778 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 52
// Coordinates: [ 122.51507, -3.9778 ]

// Ambon Maluku Indonesia (KLHK) https://www.iqair.com/id/indonesia/maluku/ambon

// Timestamp (ts): 2023-12-07T20:00:00.000Z
// AQI US (aqius): 28
// Coordinates: [ 128.18333, -3.69583 ]

// Timestamp (ts): 2023-12-18T20:00:00.000Z
// AQI US (aqius): 42
// Coordinates: [ 128.18333, -3.69583 ]

// Sorong West Papua Indonesia (BMKG) https://www.iqair.com/id/indonesia/west-papua/sorong

// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 52
// Coordinates: [ 131.26104, -0.87956 ]

// Timestamp (ts): 2023-12-18T21:00:00.000Z
// AQI US (aqius): 55
// Coordinates: [ 131.26104, -0.87956 ]

// Manokwari West Papua Indonesia (KLHK) https://www.iqair.com/id/indonesia/west-papua/manokwari

// Timestamp (ts): 2023-12-07T20:00:00.000Z
// AQI US (aqius): 57
// Coordinates: [ 134.06402, -0.86291 ]

// Timestamp (ts): 2023-12-18T20:00:00.000Z
// AQI US (aqius): 57
// Coordinates: [ 134.06402, -0.86291 ]

// Jayapura Papua Indonesia (KLHK) https://www.iqair.com/id/indonesia/papua/jayapura

// Timestamp (ts): 2023-12-07T20:00:00.000Z
// AQI US (aqius): 55
// Coordinates: [ 140.71813, -2.53371 ]

// 2023-12-18 No Data

// Dumai Riau Indonesia (KLHK) https://www.iqair.com/id/indonesia/riau/dumai/dumai-bukit-kapur

// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 51
// Coordinates: [ 101.44316, 1.66711 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 70
// Coordinates: [ 101.44316, 1.66711 ]

// Kota Ternate Maluku Indonesia (KLHK) https://www.iqair.com/id/indonesia/maluku/kota-ternate

// Timestamp (ts): 2023-12-07T20:00:00.000Z
// AQI US (aqius): 24
// Coordinates: [ 127.36667, 0.78333 ]

// Timestamp (ts): 2023-12-18T20:00:00.000Z
// AQI US (aqius): 37
// Coordinates: [ 127.36667, 0.78333 ]

// Banda Aceh Aceh Indonesia (KLHK) https://www.iqair.com/id/indonesia/aceh/banda-aceh/aceh-syiah-kuala

// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 35
// Coordinates: [ 95.33333, 5.54167 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 52
// Coordinates: [ 95.33333, 5.54167 ]

// Tanjung Pinang Riau Islands Indonesia (KLHK) https://www.iqair.com/id/indonesia/riau-islands/tanjung-pinang/tanjung-pinang-taman-pamedan

// Timestamp (ts): 2023-12-07T22:00:00.000Z
// AQI US (aqius): 25
// Timestamp (ts): 2023-12-07T23:00:00.000Z
// AQI US (aqius): 24
// Coordinates: [ 104.45833, 0.91667 ]

// Timestamp (ts): 2023-12-18T22:00:00.000Z
// AQI US (aqius): 23
// Coordinates: [ 104.45833, 0.91667 ]

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
// Malang East Java Indonesia 
// Buleleng Bali Indonesia 
// Tangerang Banten Indonesia 
// Kendari Southeast Sulawesi Indonesia 
// Ambon Maluku Indonesia 
// Sorong West Papua Indonesia 
// Manokwari West Papua Indonesia 
// Jayapura Papua Indonesia 
// Dumai Riau Indonesia 
// Kota Ternate Maluku Indonesia 
// Banda Aceh Aceh Indonesia 
// Tanjung Pinang Riau Islands Indonesia 

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
// Malang East Java Indonesia 2023-12-07T21:00:00.000Z 73
// Buleleng Bali Indonesia 2023-12-07T22:00:00.000Z 21
// Tangerang Banten Indonesia 2023-12-07T22:00:00.000Z 108
// Kendari Southeast Sulawesi Indonesia 2023-12-07T21:00:00.000Z 59
// Ambon Maluku Indonesia 2023-12-07T20:00:00.000Z 28
// Sorong West Papua Indonesia 2023-12-07T22:00:00.000Z 52
// Manokwari West Papua Indonesia 2023-12-07T20:00:00.000Z 57
// Jayapura Papua Indonesia 2023-12-07T20:00:00.000Z 55
// Dumai Riau Indonesia 2023-12-07T22:00:00.000Z 51
// Ternate Maluku Indonesia 2023-12-07T20:00:00.000Z 24
// Banda Aceh Aceh Indonesia 2023-12-07T22:00:00.000Z 35
// Tanjung Pinang Riau Islands Indonesia 2023-12-07T22:00:00.000Z 25


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