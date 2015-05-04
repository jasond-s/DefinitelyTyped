/// <reference path="./throng.d.ts"/>


// Throng static interface.
var throng: Throng.IStatic;


// Mock node process.
var process: { exit(); on(sig, fun) };

module Throng_Cpus_Test {
    
    throng(start);

    function start() {
        console.log('worker');
        process.exit();
    }

}

module Throng_Exit_test {

    throng(start, { workers: 3 });

    function start() {
        console.log('worker');
        process.exit();
    }

}

module Throng_Graceful_Test {

    throng(start, { workers: 3 });

    function start() {
        console.log('worker');

        process.on('SIGTERM', function () {
            console.log('exiting');
            process.exit();
        });
    }

}

module Throng_KeepAlive_Test {

    throng(start, { workers: 3, lifetime: 250 });

    function start() {
        console.log('worker');
        process.exit();
    }

}

module Throng_Kill_Test {

    throng(start, {
        workers: 3,
        lifetime: 0,
        grace: 250
    });

    function start() {
        console.log('ah ha ha ha');

        process.on('SIGTERM', function () {
            console.log('stayin alive');
        });
    }

}