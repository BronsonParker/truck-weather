# truck-weather
## Endpoint
https://api.open-meteo.com/v1/forecast?latitude=30.26715&longitude=-97.74306&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&timeformat=unixtime

## What I Changed
I added the wind speed and units, and precipitation and units. I also added unixtime, but I did not display it, because it did not seem necessary for the site since your time is in the bottom right corner of your monitor or the lock screen of your phone lol. I realized I had to add them with commas to get them to display in 'current'. I was tearing my hair out trying to figure that out for a bit!
Before: https://api.open-meteo.com/v1/forecast?latitude=30.26715&longitude=-97.74306&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&temperature_unit=fahrenheit
After: https://api.open-meteo.com/v1/forecast?latitude=30.26715&longitude=-97.74306&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&timeformat=unixtime

## My Live Page
https://bronsonparker.github.io/truck-weather/