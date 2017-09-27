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
    console.log('start_stopwatch POST request: "');
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
    console.log('start_stopwatch POST request: "');
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
    console.log('RESET stopwatch POST request');

    RaceDB.remove({});

    StopWatch.upsert({
        name: "timer"
    }, {
        name: "timer",
        action: 'reset'
    }, {
        upsert: true
    });
    JsonRoutes.sendResult(res, {
        data: 'Resetted watch'
    });
});

//
// ─── LAPTIMES ───────────────────────────────────────────────────────────────────
//

Router.route("/laptimes", function() {
    var req = this.request;
    var res = this.response;

    var data = this.request.body;
    console.log('laptimes data', data);
    RaceDB.insert(data);
    res.end('hello from the server\n');

}, {
    where: "server"
});