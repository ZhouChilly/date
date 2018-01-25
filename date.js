function getDateArr (date, arr) {
    arr.push(date.getFullYear());
    arr.push(date.getMonth() + 1);
    arr.push(date.getDate());
    if (arr[1] < 10) {
        arr[1] = '0' + arr[1];
    } else if (arr[2] < 10) {
        arr[2] = '0' + arr[2];
    }
    return arr
}

// yesterday 简易版
let today = new Date();
let today_arr = [];
getDateArr(today, today_arr);
today = today_arr[0] + today_arr[1] + today_arr[2];

// yesterday
let yesterday = new Date();
let yesterday_arr = [];
yesterday.setDate(new Date().getDate() - 1);
getDateArr(yesterday, yesterday_arr);
yesterday = yesterday_arr[0] + yesterday_arr[1] + yesterday_arr[2];

// current_month
let current_month = new Date();
let current_month_arr = [];
getDateArr(current_month, current_month_arr);
current_month = current_month_arr[0] + current_month_arr[1];

// previous_month
let previous_month = new Date();
let previous_month_arr = [];
getDateArr(previous_month, previous_month_arr);
previous_month_arr[1] -= 1
if (!previous_month_arr[1]) {
    previous_month_arr[0] -= 1;
    previous_month_arr[1] = 12;
}
previous_month = '' + previous_month_arr[0] + previous_month_arr[1];


// 适用型
const ONE_DAY_MINISECOND = 86400000;
let getYesterday = function () {
    let yesterday = getRangeDay(1);

    return [
        yesterday.getFullYear() + '-' + yesterday.getMonth() + 1 + '-' + yesterday.getDate() + ' 00:00:00',
        yesterday.getFullYear() + '-' + yesterday.getMonth() + 1 + '-' + yesterday.getDate() + ' 23:59:59'
    ]
};

let getToday = function () {
    let today = new Date();
    return [
        today.getFullYear() + '-' + (today.getMonth() + 1 >= 10 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1)) + '-' + today.getDate() + ' 00:00:00',
        today.getFullYear() + '-' + (today.getMonth() + 1 >= 10 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1)) + '-' + today.getDate() + ' 23:59:59'
    ]
};

let getRangeDay = function (day) {
    let today = new Date().getTime();
    let pass = new Date(today - ONE_DAY_MINISECOND * day);
    return pass;
};

let calcDay = function (year, month) {
    console.log(month)
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                return 28;
            } else {
                return 29;
            }
    }
}

let getMonthDay = function (year, month) {
    let day = calcDay(year, month);
    console.log(day);
    return [
        year + '-' + (month >= 10 ? month : '0' + month) + '-' + '01 00:00:00',
        year + '-' + (month >= 10 ? month : '0' + month) + '-' + day + ' 23:59:59'
    ]
};

function _getDate () {
    // current_day
    this.current_day = getToday();

    // yesterday
    this.yesterday = getYesterday();
    console.log(this.yesterday);

    // current_month
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let current_month = getMonthDay(year, month);
    console.log(this.current_month);

    // previous_month
    let _month = date.getMonth();
    if (_month === 0) {
        year -= 1;
        _month = 12;
    }
    let previous_arr = getMonthDay(year, _month);
    console.log(this.previous_month);

}