"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    throw error('Something failed');
}
function infiniteLoop() {
    while (true) {
    }
}
