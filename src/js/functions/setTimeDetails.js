const setTimeDetails = (loc, zoneShort, zone, doYear, doWeek, weekNum) => {
      fetch("http://worldtimeapi.org/api/ip")
            .then((res) => res.json())
            .then((data) => {
                  zoneShort.textContent = data.abbreviation;
                  doWeek.textContent = data.day_of_week;
                  doYear.textContent = data.day_of_year;
                  weekNum.textContent = data.week_number;
            })
            .catch((err) => console.error(err));

      fetch(
            "https://api.freegeoip.app/json/?apikey=1968b730-4864-11ec-a710-b7c35f507525"
      )
            .then((res) => res.json())
            .then((data) => {
                  loc.textContent = `in ${data.city}, ${data.country_code}`;
                  zone.textContent = data.time_zone;
            })
            .catch((err) => console.error(err));
};

export default setTimeDetails;
