import {
    RaceDB,
    StopWatch
} from '/imports/api/RaceDB/RaceDB.js';

JsonRoutes.add("get", "/start_stopwatch", function(req, res, next) {
    console.log('start_stopwatch GET request: "', req.data);

    JsonRoutes.sendResult(res, {
        data: 'You should make a POST call'
    });
});

JsonRoutes.add("post", "/start_stopwatch", function(req, res, next) {
    console.log('start_stopwatch POST request: "', req);
    StopWatch.upsert({
        name: "timer"
    }, {
        name: "timer",
        action: 'start'
    }, {
        upsert: true
    });
    JsonRoutes.sendResult(res, {
        data: 'Started watch'
    });
});

JsonRoutes.add("post", "/stop_stopwatch", function(req, res, next) {
    console.log('start_stopwatch POST request: "', req.data);
    StopWatch.upsert({
        name: "timer"
    }, {
        name: "timer",
        action: 'stop'
    }, {
        upsert: true
    });
    JsonRoutes.sendResult(res, {
        data: 'Started watch'
    });
});

JsonRoutes.add("post", "/reset_stopwatch", function(req, res, next) {
    console.log('RESET stopwatch POST request: "', req.data);
    StopWatch.remove({
        name: 'start'
    });

});

//
// ─── LAPTIMES ───────────────────────────────────────────────────────────────────
//

JsonRoutes.add("post", "/laptimes", function(req, res, next) {
    console.log('POST to laptimes: "', req.data);
    StopWatch.insert(req.data);
});