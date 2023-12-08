
clear all
capture log close

log using "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory biayabobot 36citiesdist dateout 6cities1prov yogyatosleman.smcl", replace

**filtering respiratory disease related only from BPJS K sample dataset diag-primer FKL17

use "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\Data Sampel Final 2022\Reguler\202103_fkrtl.dta"
desc

keep if FKL17 == 11 | FKL17 == 12 |	FKL17 == 13 | FKL17 == 14 |	FKL17 == 15 | FKL17 == 194 | FKL17 == 683 |	FKL17 == 684 |	FKL17 == 685 |	FKL17 == 686 |	FKL17 == 687 |	FKL17 == 688 |	FKL17 == 689 |	FKL17 == 691 |	FKL17 == 692 |	FKL17 == 693 |	FKL17 == 694 |	FKL17 == 695 |	FKL17 == 696 |	FKL17 == 697 |	FKL17 == 699 |	FKL17 == 700 |	FKL17 == 701 |	FKL17 == 702 |	FKL17 == 703 |	FKL17 == 704 |	FKL17 == 705 |	FKL17 == 706 |	FKL17 == 707 |	FKL17 == 708 |	FKL17 == 709 |	FKL17 == 710 |	FKL17 == 711 |	FKL17 == 712 |	FKL17 == 713 |	FKL17 == 714 |	FKL17 == 715 |	FKL17 == 716 |	FKL17 == 717 |	FKL17 == 718 |	FKL17 == 719 |	FKL17 == 720 |	FKL17 == 725 |	FKL17 == 728 |	FKL17 == 729 |	FKL17 == 730 |	FKL17 == 731 |	FKL17 == 732 |	FKL17 == 734 |	FKL17 == 735 |	FKL17 == 736 |	FKL17 == 737 |	FKL17 == 738 |	FKL17 == 740 |	FKL17 == 741 |	FKL17 == 742 |	FKL17 == 743 |	FKL17 == 744 

codebook FKL17

save "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory diag-primeronly.dta", replace

su PSTV15

**export to excel, keep some cities/districts diag-in FKL17

ta FKL06

sort FKL05

/*
1171	"KOTA BANDA ACEH"

1275	"KOTA MEDAN"

1671	"KOTA PALEMBANG"
1471	"KOTA PEKANBARU" 1473	"KOTA DUMAI"
2171	"KOTA BATAM" 2172	"KOTA TANJUNG PINANG"

3171	"KOTA JAKARTA SELATAN" 3172	"KOTA JAKARTA TIMUR" 3173	"KOTA JAKARTA PUSAT" 3174	"KOTA JAKARTA BARAT" 3175	"KOTA JAKARTA UTARA"

3271 "KOTA BOGOR" 3273	"KOTA BANDUNG" 3275	"KOTA BEKASI" 3276	"KOTA DEPOK"

3374	"KOTA SEMARANG"

3404	"SLEMAN"

3573	"KOTA MALANG" 3578	"KOTA SURABAYA"

3604	"SERANG"

3674	"KOTA TANGERANG SELATAN"
3671	"KOTA TANGERANG"

5103	"BADUNG" 5104	"GIANYAR" 5171	"KOTA DENPASAR" 5108	"BULELENG"

5271	"KOTA MATARAM"
5371	"KOTA KUPANG"
6171	"KOTA PONTIANAK"
6372	"KOTA BANJAR BARU"
6471	"KOTA BALIKPAPAN" 6472	"KOTA SAMARINDA"
7371 "KOTA MAKASSAR"

7471	"KOTA KENDARI"
8171	"KOTA AMBON"
8271	"KOTA TERNATE"
9171	"KOTA SORONG"
9105	"MANOKWARI"
9471	"KOTA JAYAPURA"
*/
/*
3471	"KOTA YOGYAKARTA"
3673	"KOTA SERANG"
6371	"KOTA BANJARMASIN"
9107	"SORONG"
*/

/*
1171 "KOTA BANDA ACEH" 1275 "KOTA MEDAN" 1471 "KOTA PEKANBARU" 1473 "KOTA DUMAI"  1671 "KOTA PALEMBANG" 2171	"KOTA BATAM" 2172	"KOTA TANJUNG PINANG" 3171	"KOTA JAKARTA SELATAN" 3172	"KOTA JAKARTA TIMUR" 3173	"KOTA JAKARTA PUSAT" 3174	"KOTA JAKARTA BARAT" 3175	"KOTA JAKARTA UTARA" 3271 "KOTA BOGOR" 3273 "KOTA BANDUNG" 3275 "KOTA BEKASI" 3276 "KOTA DEPOK" 3374 "KOTA SEMARANG" 3404 "SLEMAN" 3573 "KOTA MALANG" 3578 "KOTA SURABAYA" 3604 "SERANG" 3671 "KOTA TANGERANG" 3674 "KOTA TANGERANG SELATAN" 5103 "BADUNG" 5104 "GIANYAR" 5108 "BULELENG" 5171 "KOTA DENPASAR" 5271 "KOTA MATARAM" 5371 "KOTA KUPANG" 6171 "KOTA PONTIANAK" 6372 "KOTA BANJAR BARU" 6471 "KOTA BALIKPAPAN" 6472 "KOTA SAMARINDA" 7371 "KOTA MAKASSAR" 7471 "KOTA KENDARI" 8171 "KOTA AMBON" 8271 "KOTA TERNATE" 9105 "MANOKWARI" 9171 "KOTA SORONG" 9471 "KOTA JAYAPURA"
*/
/*
3471	"KOTA YOGYAKARTA" 3673 "KOTA SERANG" 6371 "KOTA BANJARMASIN" 9107 "SORONG"
*/
keep if FKL06 ==  1171 | FKL06 == 1275 | FKL06 == 1471 | FKL06 == 1473 | FKL06 == 1671 | FKL06 == 2171 | FKL06 == 2172 | FKL06 == 3171  | FKL06 == 3172 | FKL06 == 3173 | FKL06 == 3174 | FKL06 == 3175 | FKL06 == 3271 | FKL06 == 3273 | FKL06 == 3275 | FKL06 == 3276 | FKL06 == 3374 | FKL06 == 3404 | FKL06 == 3573 | FKL06 == 3578 | FKL06 == 3604 | FKL06 == 3671 | FKL06 == 3674 | FKL06 == 5103 | FKL06 == 5104 | FKL06 == 5108 | FKL06 == 5171 | FKL06 == 5271 | FKL06 == 5371 | FKL06 == 6171 | FKL06 == 6372 | FKL06 == 6471 | FKL06 == 6472 | FKL06 == 7371 | FKL06 == 7471 | FKL06 == 8171 | FKL06 == 8271 | FKL06 == 9105 | FKL06 == 9171 | FKL06 == 9471 | FKL06 == 3471 | FKL06 == 3673 | FKL06 == 6371 | FKL06 == 9107 

ta FKL06
su FKL06
codebook FKL06

save "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory diag-primeronly 40citiesdist.dta", replace

keep if FKL06 ==  1171 | FKL06 == 1275 | FKL06 == 1471 | FKL06 == 1473 | FKL06 == 1671 | FKL06 == 2171 | FKL06 == 2172 | FKL06 == 3171  | FKL06 == 3172 | FKL06 == 3173 | FKL06 == 3174 | FKL06 == 3175 | FKL06 == 3271 | FKL06 == 3273 | FKL06 == 3275 | FKL06 == 3276 | FKL06 == 3374 | FKL06 == 3404 | FKL06 == 3573 | FKL06 == 3578 | FKL06 == 3604 | FKL06 == 3671 | FKL06 == 3674 | FKL06 == 5103 | FKL06 == 5104 | FKL06 == 5108 | FKL06 == 5171 | FKL06 == 5271 | FKL06 == 5371 | FKL06 == 6171 | FKL06 == 6372 | FKL06 == 6471 | FKL06 == 6472 | FKL06 == 7371 | FKL06 == 7471 | FKL06 == 8171 | FKL06 == 8271 | FKL06 == 9105 | FKL06 == 9171 | FKL06 == 9471

ta FKL06
su FKL06
codebook FKL06

save "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory diag-primeronly 36citiesdist.dta", replace

export excel using "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory diag-primeronly 36citiesdist.xlsx", sheet("biayaklaim_kabkota") firstrow(variables) replace

sort FKL04
sort FKL03

**klaim biayaverfikasi atau tagih rs * bobot

use "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory diag-primeronly 36citiesdist.dta", clear

gen FKL47PSTV15 = FKL47*PSTV15  
gen FKL48PSTV15 = FKL48*PSTV15 

la var FKL47PSTV15 "Biaya Tagih - oleh fasilitas kesehatan (provider) dikali bobot"
la var FKL48PSTV15 "Biaya Verifikasi - BPJS Kesehatan setelah dilakukan verifikasi dikali bobot"
desc

save "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory diag-primeronly biayabobot 36citiesdist.dta", replace

export excel using "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory diag-primeronly 36citiesdist biayabobot.xlsx", sheet("biayaklaim_kabkota") firstrow(variables) replace


use "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory diag-primeronly biayabobot 36citiesdist.dta", clear

desc

collapse (sum) PSTV15 FKL48PSTV15, by(FKL04 FKL05 FKL06)

save "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory biayabobot 36citiesdist dateout.dta", replace

export excel using "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory biayabobot 36citiesdist dateout.xlsx", sheet("biayaklaim_kabkota") firstrow(variables) replace

* 6 cities 1 month only

use "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory biayabobot 36citiesdist dateout.dta", clear

/* BPS-Sample BPJS K 2021 1275	"KOTA MEDAN" 3171	"KOTA JAKARTA SELATAN" 3172	"KOTA JAKARTA TIMUR" 3173	"KOTA JAKARTA PUSAT" 3174	"KOTA JAKARTA BARAT" 3175	"KOTA JAKARTA UTARA" 3273	"KOTA BANDUNG" 3276	"KOTA DEPOK" 3471	"KOTA YOGYAKARTA" 3578	"KOTA SURABAYA"  5171	"KOTA DENPASAR"
*/


*jakarta denpasar bandung surabaya medan yogyakarta/sleman depok
*| FKL06 == 3171  | FKL06 == 3172 | FKL06 == 3173 | FKL06 == 3174 | FKL06 == 3175 

keep if FKL06 == 1275 | FKL06 == 3273 | FKL06 == 3276 | FKL06 == 3404 | FKL06 == 3578 | FKL06 == 5171 
*| FKL06 == 3404 
ta FKL06
su FKL06
codebook FKL06

desc

ta FKL04

*keep if FKL04 == 01dec2021
*keep if FKL04 == 01122021

*keep if FKL04 == 01122021 | FKL04 == 02122021 | FKL04 == 03122021 | FKL04 == 04122021 | FKL04 == 05122021 | FKL04 == 06122021 | FKL04 == 07122021 | FKL04 == 08122021 | FKL04 == 09122021 | FKL04 == 10122021 | FKL04 == 11122021 | FKL04 == 12122021 | FKL04 == 13122021 | FKL04 == 14122021 | FKL04 == 15122021 | FKL04 == 16122021 | FKL04 == 17122021 | FKL04 == 18122021 | FKL04 == 19122021 | FKL04 == 20122021 | FKL04 == 21122021 | FKL04 == 22122021 | FKL04 == 23122021 | FKL04 == 24122021 | FKL04 == 25122021 | FKL04 == 26122021 | FKL04 == 27122021 | FKL04 == 28122021 | FKL04 == 29122021 | FKL04 == 30122021 | FKL04 == 31122021

// encode FKL04, gen(FKL04encode)
gen strFKL04 = string(FKL04,"%td")

*tostring FKL04, gen(FKL04str)
gen year = substr(strFKL04,-7,7) 
gen month = substr(strFKL04,3,3) 
keep if month == "dec"

*drop FKL04str
drop strFKL04 year month

ta FKL04
su FKL04
codebook FKL04

save "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory biayabobot 36citiesdist dateout 6cities yogyatosleman.dta", replace


* 1 province 1 month only

use "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory biayabobot 36citiesdist dateout.dta", clear

/* BPS-Sample BPJS K 2021 1275	"KOTA MEDAN" 3171	"KOTA JAKARTA SELATAN" 3172	"KOTA JAKARTA TIMUR" 3173	"KOTA JAKARTA PUSAT" 3174	"KOTA JAKARTA BARAT" 3175	"KOTA JAKARTA UTARA" 3273	"KOTA BANDUNG" 3276	"KOTA DEPOK" 3471	"KOTA YOGYAKARTA" 3578	"KOTA SURABAYA"  5171	"KOTA DENPASAR"
*/


*jakarta denpasar bandung surabaya medan yogyakarta depok
keep if FKL06 == 3171  | FKL06 == 3172 | FKL06 == 3173 | FKL06 == 3174 | FKL06 == 3175 

*keep if FKL06 == 1275 | FKL06 == 3273 | FKL06 == 3276 | FKL06 == 3471 | FKL06 == 3578 | FKL06 == 5171 

ta FKL06
su FKL06
codebook FKL06

desc

ta FKL04

*keep if FKL04 == 01dec2021
*keep if FKL04 == 01122021

*keep if FKL04 == 01122021 | FKL04 == 02122021 | FKL04 == 03122021 | FKL04 == 04122021 | FKL04 == 05122021 | FKL04 == 06122021 | FKL04 == 07122021 | FKL04 == 08122021 | FKL04 == 09122021 | FKL04 == 10122021 | FKL04 == 11122021 | FKL04 == 12122021 | FKL04 == 13122021 | FKL04 == 14122021 | FKL04 == 15122021 | FKL04 == 16122021 | FKL04 == 17122021 | FKL04 == 18122021 | FKL04 == 19122021 | FKL04 == 20122021 | FKL04 == 21122021 | FKL04 == 22122021 | FKL04 == 23122021 | FKL04 == 24122021 | FKL04 == 25122021 | FKL04 == 26122021 | FKL04 == 27122021 | FKL04 == 28122021 | FKL04 == 29122021 | FKL04 == 30122021 | FKL04 == 31122021

// encode FKL04, gen(FKL04encode)
gen strFKL04 = string(FKL04,"%td")

*tostring FKL04, gen(FKL04str)
gen year = substr(strFKL04,-7,7) 
gen month = substr(strFKL04,3,3) 
keep if month == "dec"

*drop FKL04str
drop strFKL04 year month

ta FKL04
su FKL04
codebook FKL04

gen FKL06jkt = 1
la def FKL06jktL 1"KOTA JAKARTA"
la val FKL06jkt FKL06jktL

*FKL06

collapse (sum) PSTV15 FKL48PSTV15, by (FKL04 FKL05 FKL06jkt)

ren FKL06jkt FKL06

save "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory biayabobot 36citiesdist dateout 1 province.dta", replace

*append 6 cities + 1 province

use "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory biayabobot 36citiesdist dateout 6cities yogyatosleman.dta", clear

append using "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory biayabobot 36citiesdist dateout 1 province.dta"

la def FKL06L 1"KOTA JAKARTA" 1275	"KOTA MEDAN" 3171	"KOTA JAKARTA SELATAN" 3172	"KOTA JAKARTA TIMUR" 3173	"KOTA JAKARTA PUSAT" 3174	"KOTA JAKARTA BARAT" 3175	"KOTA JAKARTA UTARA" 3273	"KOTA BANDUNG" 3276	"KOTA DEPOK" 3404 "SLEMAN" 3578	"KOTA SURABAYA"  5171	"KOTA DENPASAR"
// 3471 "KOTA YOGYAKARTA"
la val FKL06 FKL06L

save "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory biayabobot 36citiesdist dateout 6cities1prov yogyatosleman.dta", replace

su FKL04
codebook FKL04

export excel using "D:\Software Engineering\RevoU - Fullstack Software Engineering (FSSE)\FSSE\Milestone 5 Week 23,24&25 Final Project\202103_fkrtl-respiratory biayabobot 36citiesdist dateout 6cities1prov yogyatosleman.xlsx", sheet("data rs frktl") firstrow(variables) replace
					
log close
