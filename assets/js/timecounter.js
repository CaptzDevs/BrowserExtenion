  const timeCounter = ()=>{

  /*    renderDateDoteStartFromFirstYear("#timeline-minute-dot",2023)
    renderDateDoteStartFromFirstYear("#timeline-second-dot",2023) */

    // Set the date and time to countdown to
    let cd_Static = new Date("2023-07-01T00:00:00");

    /*     countdown(cd_Static, "type-1")
    countdown2(cd_Static, "type-2") */

    showTime("type-3");

    Number.prototype.fix2digit = function () {
      return ("0" + this).slice(-2);
    };

    function showTime(type) {
      let d_en_sm = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      let m_en_sm = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];

      let countdown = setInterval(function () {
        let d = new Date();
        let now = d.getTime();

        let date = d.getDate();
        let day = d.getDay();
        let month = d.getMonth();
        let year = d.getFullYear();

        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();

        $(`.${type} #hours`).html(`${hours.fix2digit()}`);
        $(`.${type} #minutes`).html(`${minutes.fix2digit()}`);
        $(`.${type} #seconds`).html(`${seconds.fix2digit()}`);

        $(`.${type} #day`).html(`${d_en_sm[day]}`);
        $(`.${type} #date`).html(`${date}`);
        $(`.${type} #month`).html(`${m_en_sm[month]}`);
        $(`.${type} #year`).html(`${year}`);
      }, 1000);
    }

    function countdown2(date, type) {
      let countDownDate = date.getTime();

      // Update the countdown every second
      let countdown = setInterval(function () {
        // Get the current date and time
        let now = new Date().getTime();

        // Find the distance between now and the countdown date
        let distance = countDownDate - now;

        // Calculate the days, hours, minutes, and seconds remaining
        let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        let weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown in the "timer" element
        $(`.${type} #hours`).html(`${hours.fix2digit()}`);
        $(`.${type} #minutes`).html(`${minutes.fix2digit()}`);
        $(`.${type} #seconds`).html(`${seconds.fix2digit()}`);

        // If the countdown is finished, display a message
        if (distance < 0) {
          clearInterval(countdown);
          $("#hour")[0].innerHTML = "Countdown expired!";
        }
      }, 1000);
    }

    function countdown(date, type) {
      let countDownDate = date.getTime();

      $(`.${type} #time-title-countdown`)[0].insertAdjacentHTML(
        "beforeend",
        ` ${cd_Static.getDate()}/${cd_Static.getMonth()}/${cd_Static.getFullYear()}`
      );

      // Update the countdown every second
      let countdown = setInterval(function () {
        // Get the current date and time
        let now = new Date().getTime();

        // Find the distance between now and the countdown date
        let distance = countDownDate - now;

        // Calculate the days, hours, minutes, and seconds remaining
        let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        let weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown in the "timer" element
        let timerElement = document.getElementById("timer");
        $(`.${type} #days`).html(`${days}d`);
        $(`.${type} #hours`).html(`${hours}h`);
        $(`.${type} #minutes`).html(`${minutes}m`);
        $(`.${type} #seconds`).html(`${seconds}s`);

        // If the countdown is finished, display a message
        if (distance < 0) {
          clearInterval(countdown);
          $("#hour")[0].innerHTML = "Countdown expired!";
        }
      }, 1000);
    }
}