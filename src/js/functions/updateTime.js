const updateTime = (clock) => {
      const date = new Date();
      const h =
            date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
      const m =
            date.getMinutes() < 10
                  ? `0${date.getMinutes()}`
                  : `${date.getMinutes()}`;
      clock.textContent = `${h}:${m}`;

      if (h >= 5 && h <= 18)
            document.documentElement.setAttribute("data-mode", "day");
      if (h > 18 || h < 5)
            document.documentElement.setAttribute("data-mode", "night");

      setTimeout(() => {
            updateTime(clock);
      }, 1000);
};

export default updateTime;
