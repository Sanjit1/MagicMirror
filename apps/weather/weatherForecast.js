// Note if you do not have a 40$/month subscription or more, you cannot use this app and should remove it, by removing the app from apps.json
weatherForecast();
function weatherForecast() {

    const jsonfile = require('jsonfile');

    jsonfile.readFile("apps.json", function (err, obj) {
        if (err) console.error(err);
        const appList = obj.apps;
        for (let i = 0; i < appList.length; i++) {
            if (appList[i].name == "Weather Forecast") {
                const dta = obj.apps[i].config;
                const weatherDiv = document.getElementById(dta.div);;
                const tempUnit = dta.unit;
                const weatherApiKey = dta.apikey;
                const cityId = dta.city;






                update();


                function update() {
                    const date = new Date();
                    const nextDayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
                    $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?id=" + cityId + "&cnt=6" + "&appid=" + weatherApiKey, function (data) {
                        console.dir(data);
                        weatherDiv.innerHTML = "";
                        for (var i = 1; i < 6; i++) {
                            var icon = data["list"][i]["weather"][0]["icon"];
                            var min = kToUnit(data["list"][i]["temp"]["min"]);
                            var max = kToUnit(data["list"][i]["temp"]["max"]);


                            var holder = document.createElement('div'); holder.className = 'holder';
                            var dayText = document.createElement('h1'); dayText.className = 'day';
                            dayText.appendChild(document.createTextNode(nextDayList[date.getDay() + i])); holder.appendChild(dayText);
                            var iconHolder = document.createElement('div'); iconHolder.className = 'iconHolder';
                            var iconPic = document.createElement('img');
                            iconPic.src = "apps/weather/icons/" + icon + ".png"; iconHolder.appendChild(iconPic); holder.appendChild(iconHolder);
                            var maxText = document.createElement('h1'); maxText.className = 'max';
                            maxText.appendChild(document.createTextNode(max)); holder.appendChild(maxText);
                            var minText = document.createElement('h1'); minText.className = 'min';
                            minText.appendChild(document.createTextNode(min)); holder.appendChild(minText);

                            weatherDiv.appendChild(holder);

                        }
                    });
                    setTimeout(arguments.callee, 3600000); // Loop every hour
                }



                function kToUnit(k) {
                    return parseInt((tempUnit == "C" ? Math.round(k - 273.15) : (tempUnit == "F" ? Math.round(((k - 273.15) * 9 / 5) + 32) : 'Wrong Unit')));
                }

            }
        }
    });


}