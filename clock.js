//Code für die Uhr
function uhr() {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    if(month <= 9) {month = '0' + month;}
    let year = now.getYear();
    if (year < 999) {year += 1900;}
    let hours = now.getHours();
    if(hours <= 9) {hours = '0' + hours;}
    let minutes = now.getMinutes();
    if(minutes <= 9) {minutes = '0' + minutes;}
    let seconds = now.getSeconds()
    if(seconds <= 9) {seconds = '0' + seconds;}
          
    //Hier werden die Einzelteile zusammengesetzt
    let time = day + '.' + month + '.' + year + ', ' + hours + ':' + minutes + ':' + seconds + ' Uhr';    
          
    //Und hier wird das Aussehen festgelegt und alles ins Dokument geschrieben
    document.getElementById('uhr').innerHTML = "<p>"+time+"</p>";
}

//Balloon Animationsdauer
function getRandomAnimationTime(initial, variance) {
    for (const iterator of ['h', 'b', 'd', 'l', 'e', 'n', 'a']) {
        let timer = (Math.random() - 0.5) * variance + initial
        let id = 'balloon' + iterator
        document.getElementById(id).style.animationDuration = timer+'s'
    }
}

function getLifeData() {
    let now = new Date()
    let birthday = new Date(1130763300 * 1000); //1130713200
    let seconds = (now - birthday) / 1000;
    let hours = seconds / 3600;
    let days = hours / 24;
    let years = days / 365.2563604167;

    let km_around_sun = Math.round(940_000_000 * years)
    let meals = Math.round(seconds*3/24/3600)
    let steps = Math.round(seconds*6000/24/3600)
    let beats = Math.round((seconds / 60) * 75)
    let percentage_in_universe = (years / (13.787*1_000_000_000)) * 100
    let choclate = years * 9.21
    let stimuli = Math.round(seconds * 400_000)
    let percent = (1 - (years / 83.2)) * 100
    let restaurant = Math.round((1.8 * 12) * years)
    let co2 = Math.round(seconds/3600/24/365.2563604167 * 11_170)
    let water = Math.round(days*128)

    let birthday_text = "Alles gute zu deinem "+ years.toFixed(7) +". Geburtstag!"

    document.getElementById('life-stats1').innerHTML = "\
        Du bist schon "+ km_around_sun.toLocaleString() +"km um die Sonne gereist,<br>\
        Hast "+ meals.toLocaleString() +" Mahlzeiten verspeist,<br>\
        Hast locker "+ steps.toLocaleString() +" Schritte gemacht,<br>\
        Und dabei sehr oft gelacht.\
    "
    document.getElementById('life-stats2').innerHTML = "\
        "+ beats.toLocaleString() +" Mal schlug schon dein Herz,<br>\
        Verbrauchtest "+ water.toLocaleString() +"l aus dem Wassernetz,<br>\
        Erlebtest "+ percentage_in_universe.toFixed(17) +"% der gesamten Zeit,<br>\
        Und warst für jede Überraschung bereit.<br>\
    ";

    document.getElementById('life-stats3').innerHTML = "\
        Hast dich durch "+ choclate.toFixed(2) +"kg Schokolade gemampft,<br>\
        Und hast "+ co2.toLocaleString() +"kg CO2 in die Umwelt gedampft,<br>\
        Musstest "+ stimuli.toLocaleString() +" Reize verarbeiten,<br>\
        Besuchtest rund "+ restaurant +" Kneipen.<br>\
    ";

    document.getElementById('life-stats4').innerHTML = "\
        Im Schnitt hast du noch "+ percent.toFixed(3) +"% zum durchleben,<br>\
        Deshalb Folge allen deinen Bestreben,<br>\
        'Carpe diem' - pflücke den Tag,<br>\
        Sei wie du bist, weil ich dich so mag 💚💜\
    ";
    document.getElementById('birthday').innerHTML = birthday_text;

}
