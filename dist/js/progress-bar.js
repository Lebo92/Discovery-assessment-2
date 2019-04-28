//Display progression of bars underneath the location images
'use strict';

var bar = $('div.meter span');
var p = $('div.meter p');

var width = bar.attr('style');
width = width.replace("width:", "");
width = width.substr(0, width.length - 1);

var interval;
var start = 0;
var end = parseInt(width);
var current = start;

interval = setInterval(countUp, 2000 / (end + 1));