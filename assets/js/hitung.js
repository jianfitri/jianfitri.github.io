var date1 = new Date(2022, 03, 16);
var date2 = new Date();
var tahun = (date2.getTime() - date1.getTime()) / 1000;
tahun /= (60 * 60 * 24);
var tahunya = Math.abs(Math.round(tahun / 365.25));
var bulan = (date2.getFullYear() - date1.getFullYear()) * 12;
bulan -= date1.getMonth();
bulan += date2.getMonth();
var Difference_In_Time = date2.getTime() - date1.getTime();
var hari = Math.round(Difference_In_Time / (1000 * 60 * 60 * 24));
var minggu = Math.round(Difference_In_Time / (7 * 24 * 60 * 60 * 1000));
$('#hitunghari').html(hari);
$('#hitungminggu').html(minggu);
$('#hitungbulan').html(bulan);
$('#hitungtahun').html(tahunya);
var one_day = 1000 * 60 * 60 * 24
var present_date = new Date();
var christmas_day = new Date(present_date.getFullYear(), 07, 17);
if (present_date.getMonth() == 07 && present_date.getdate() > 17){
  christmas_day.setFullYear(christmas_day.getFullYear() + 1);
}
  

var Result = Math.round(christmas_day.getTime() - present_date.getTime()) / (one_day);
var Final_Result = Result.toFixed(0);
$('#harijadinya').html(Final_Result+'<span> Hari menuju 16 Maret</span>');
