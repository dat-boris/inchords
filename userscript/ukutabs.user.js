// ==UserScript==
// @name       incords.com/ukutabs/0.1
// @description    In page chord replacement
// @include       http://ukutabs.com/*
// ==/UserScript==

(function() {
    "use strict";

    injectCode(
        "$('.qoate-code span').each(function(data) {var c = $(this).html();var link = c.replace('#','_');$(this).html(\"<img src='http://cdn1.ukutabs.com/chords/\"+link+\".png' alt='Am chord' class='chord' width='61' height='90'>\");});"
    );
    
    function injectCode(code) {
        var e = document.createElement("script");
        e.textContent = code;
        document.body.appendChild(e);
    }

}())