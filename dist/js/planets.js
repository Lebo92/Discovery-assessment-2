'use strict';

$(document).ready(function () {

    //Display info of each respective planet to show up after clicking on the name
    $('a.neptune-planet').click(function () {
        $('.planet-description .description').hide();
        $('.neptune-desc').show();
    });

    $('a.venus-planet').click(function () {
        $('.planet-description .description').hide();
        $('.venus-desc').show();
    });

    $('a.mercury-planet').click(function () {
        $('.planet-description .description').hide();
        $('.mercury-desc').show();
    });

    $('a.earth-planet').click(function () {
        $('.planet-description .description').hide();
        $('.earth-desc').show();
    });

    $('a.mars-planet').click(function () {
        $('.planet-description .description').hide();
        $('.mars-desc').show();
    });

    $('a.jupiter-planet').click(function () {
        $('.planet-description .description').hide();
        $('.jupiter-desc').show();
    });

    $('a.saturn-planet').click(function () {
        $('.planet-description .description').hide();
        $('.saturn-desc').show();
    });

    $('a.uranus-planet').click(function () {
        $('.planet-description .description').hide();
        $('.uranus-desc').show();
    });

    $('a.pluto-planet').click(function () {
        $('.planet-description .description').hide();
        $('.pluto-desc').show();
    });

    //Prompt planet container to scroll down
    $(function () {
        var ele = $('.area-list .description ul');
        var speed = 25,
            scroll = 100;

        $('.roll-prompt .roll-btn').click(function () {
            ele.scrollTop(ele.scrollTop() + scroll);
        });
    });

    //Prevent Planet names from jumping to the top
    $('.group-content .description ul li a').click(function (e) {
        e.preventDefault();
    });
});