
    var date = new Date();

    var calendarYear = date.getFullYear();
    var calendarMonth = date.getMonth() + 1;
    var monthStartDay = new Date(calendarYear, date.getMonth(), 1);
    var calendarToday = date.getDate();
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // 윤년 계산
    if (calendarYear % 400 == 0) {
        monthDays[1] = 29;
    } else if (calendarYear % 100 == 0) {
        monthDays[1] = 28;
    } else if (calendarYear % 4 == 0) {
        monthDays[1] = 29;
    }
    var monthLastDate = new Date(2022, 3, 0);
    console.log(monthLastDate);
    var monthLastDate = new Date(calendarYear, calendarMonth, 0);
    // 달력 월의 마지막 일
    var calendarMonthLastDate = monthLastDate.getDate();

    console.log(calendarMonthLastDate);
    var calendarMonthLastDate = monthDays[date.getMonth()];


    console.log(calendarMonthLastDate);
    var calendarMonthStartDay = monthStartDay.getDay();
    var calendarWeekCount = Math.ceil((calendarMonthStartDay + calendarMonthLastDate) / 7);
    console.log(calendarWeekCount);
