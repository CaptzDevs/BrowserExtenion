const timeDot = ()=>{

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, ms);
    });
  }
  function calDate(now, endDate) {
    const timeDifference = now - endDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7); // Calculate the number of weeks
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    /* return [ years , months % 12 , days % 30] */
    // return `${years} y, ${(months % 12).dStr()} m, ${(days % 30).dStr()} d  || ${weeks} w ${days%7}`

    return {
      fulldate: [years, (months % 12).dStr(), (days % 30).dStr()],
      weekly: [weeks, days % 7],
      days: days,
    };
  }

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
  }

  function removeDays(date, days) {
    const result = new Date(date);
    result.setDate(date.getDate() - days);
    return result;
  }

  async function renderDateDote(elem, year) {
    let today = new Date();
    let daysRange = 365;
    let startDate = removeDays(new Date(), Math.floor(daysRange / 2));
    let i = 1;

    x = typeof x === "undefined" ? 0 : x;
    y = typeof y === "undefined" ? 0 : y;
    year = typeof year === "undefined" ? startDate.getFullYear() : year;
    let gap = 15;
    console.log(startDate);

    while (i <= daysRange) {
      let fulldate = addDays(
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate()
        ),
        i
      );
      let [d, m, y] = [
        fulldate.getDate(),
        fulldate.getMonth() + 1,
        fulldate.getFullYear(),
      ];
      let hl = "";
      if (fulldate < today) {
        hl = "hl-green";
      }
      await wait(2);
      $(elem)[0]?.insertAdjacentHTML(
        "afterbegin",
        `<div class="date-dot ${hl}" style="left:${x * gap}px; top:${
          ((i - 1) % 7) * gap
        }px" data-date="${d}" data-month="${m}" data-year="${y}"  ></div>`
      );
      x += i % 7 == 0 ? 1 : 0;
      i++;
    }
    return { x: x, y: y };
  }

  async function renderDateDoteStartFromFirstYear(elem, year) {
    let today = new Date();
    year = typeof year === "undefined" ? startDate.getFullYear() : year;

    let daysRange = isLeapYear(year) ? 366 : 365;
    let startDate = new Date(
      year,
      0,
      0
    ); /* removeDays(new Date(),Math.floor(daysRange/2)); */
    let i = 1;

    let datepass = 0;
    let dateLeft = 0;

    x = typeof x === "undefined" ? 0 : x;
    y = typeof y === "undefined" ? 0 : y;
    let gap = 15;
    console.log(startDate);

    while (i <= daysRange) {
      let fulldate = addDays(
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate()
        ),
        i
      );
      let [d, m, y] = [
        fulldate.getDate(),
        fulldate.getMonth() + 1,
        fulldate.getFullYear(),
      ];
      let hl = "";
      if (fulldate < today) {
        hl = "hl-green";
        datepass += 1;
      } else {
        dateLeft += 1;
      }
      await wait(1);
      $(elem)[0]?.insertAdjacentHTML(
        "beforeend",
        `<div class="date-dot ${hl}" style="left:${x * gap}px; top:${
          ((i - 1) % 7) * gap
        }px" data-date="${d}" data-month="${m}" data-year="${y}"  id="${i}" ></div>`
      );
      x += i % 7 == 0 ? 1 : 0;
      i++;
    }
    console.log(dateLeft);
    $(".timeline-detail").html(
      `<div>${datepass} / ${daysRange} days ( ${dateLeft} days left )</div>`
    );
    return { x: x, y: y };
  }

  function renderTimeDot(elem) {
    let gap = 15;
    let i = 1;
    while (i < 24) {
      $(elem[0])[0]?.insertAdjacentHTML(
        "beforeend",
        `<div class="date-dot time-dot-hours " style="left:${
          (i-1) * gap
        }px;" data-hours="${(i)}" ></div>`
      );
      i++;
    }

    i = 1;

    while (i < 60) {
      $(elem[1])[0]?.insertAdjacentHTML(
        "beforeend",
        `<div class="date-dot time-dot-minutes " style="left:${
          (i-1) * gap
        }px;" data-minutes="${i}" ></div>`
      );
      i++;
    }

    i = 1;

    while (i < 60) {
      $(elem[2])[0]?.insertAdjacentHTML(
        "beforeend",
        `<div class="date-dot time-dot-seconds " style="left:${
          (i-1) * gap
        }px;" data-seconds="${i}" ></div>`
      );
      i++;
    }

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

      $(".time-dot-seconds").map(async (i, item) => {
       
          if(seconds == 0){
              for (let c = 0 ; c < 60 ; c++){
                  $(".time-dot-seconds")[c]?.classList.add("hl-rainbow");
                  await wait(15)
              }
         }

         if (item.dataset.seconds <= seconds) {
          item.classList.add("hl-green");
        } 

        if(seconds == 0){
         item.classList.remove("hl-green");
         item.classList.remove("hl-rainbow");
        } 

      

      
      });


      
      $(".time-dot-minutes").map(async (i, item) => {
         
        if(minutes == 0){ 
              for (let c = 0 ; c < 60 ; c++){
                  $(".time-dot-minutes")[c]?.classList.add("hl-rainbow");
                  await wait(15)
              }
         }

         if(item.dataset.minutes <= minutes) {
              item.classList.add("hl-green");
        }

        if(minutes == 0 ){
          item.classList.remove("hl-rainbow");
          item.classList.remove("hl-green");
        }
       
      
        
      });

      $(".time-dot-hours").map((i, item) => {
        if (item.dataset.hours <= hours) {
          item.classList.add("hl-green");
        } 
        if(hours == 0){
              item.classList.remove("hl-green");
         }
      });
      
    }, 1000);

    /*  console.log(dateLeft)
      $(".timeline-detail").html(`<div>${datepass} / ${daysRange} days ( ${dateLeft} days left )</div>`)
      return {x : x , y : y} */
  }



  renderDateDoteStartFromFirstYear("#timeline-dot", new Date().getFullYear());
  renderTimeDot([
    "#timeline-hours-dot",
    "#timeline-minutes-dot",
    "#timeline-seconds-dot",
  ]);
}