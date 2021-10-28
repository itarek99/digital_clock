'use strict';

const hrBox = document.getElementById('hr-box');
const minBox = document.getElementById('min-box');
const secBox = document.getElementById('sec-box');
const amPmBox = document.getElementById('am-pm-box');
const toDay = document.getElementById('today-box');
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const clock = function () {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let d = new Date().getDay();
    let mid = h > 12 ? 'PM' : 'AM';

    h > 12 ? (h = h - 12) : h;
    h == 0 ? (h = 12) : h;

    h < 10 ? (h = '0' + h) : h;
    m < 10 ? (m = '0' + m) : m;
    s < 10 ? (s = '0' + s) : s;

    hrBox.textContent = h;
    minBox.textContent = m;
    secBox.textContent = s;
    amPmBox.textContent = mid;
    toDay.textContent = days[d];
};
setInterval(clock, 1000);
