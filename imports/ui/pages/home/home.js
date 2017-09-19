import './home.html';
// import '../../components/clock/flipclock.js';
import {
    RaceDB,
    StopWatch
} from '/imports/api/RaceDB/RaceDB.js';
import {
    Meteor
} from 'meteor/meteor';
// var stopwatch = null;

//
// ─── START LANDING PAGE ─────────────────────────────────────────────────────────
//


Template.start.onCreated(function() {
    Meteor.subscribe('RaceDB.all');
});

Template.start.events({
    'contextmenu *': function(e, t) {
        e.stopPropagation();
        console.log('template instance:\n', t);
        console.log('data context:\n', Blaze.getData(e.currentTarget));
    }
});

//
// ─── STOPWATCH ──────────────────────────────────────────────────────────────────
//

Template.stopwatch.onCreated(function() {

    try {
        this.autorun(function() {
            var stopWatchStatus = StopWatch.findOne({})
            console.log('stopwatch from database', stopWatchStatus)
            console.log('stopWatchStatus.action', stopWatchStatus.action)
            if (stopWatchStatus) {
                if (stopWatchStatus.action === 'start') {
                    Session.set('startTime', new Date().getTime());
                    console.log('------------------------------------');
                    console.log('stopwatch started:');
                    console.log('------------------------------------');
                } else if (stopWatchStatus.action === 'stop') {
                    console.log('------------------------------------');
                    console.log('stopwatch stopped, elapsed mili secs: ');
                    console.log('------------------------------------');
                    Session.set('startTime', null); // stops the timer
                } else if (stopWatchStatus.action === 'reset') {

                }
            }
        });
    } catch (err) {
        console.error('autorun stopwatch error', err)
    }
})



Template.stopwatch.onRendered(function() {
    console.log('------------------------------------');
    console.log('stopwatch rendered');
    console.log('------------------------------------');

})

Template.stopwatch.helpers({
    duration: function() {
        var start = Session.get('startTime');
        return start ? Chronos.currentTime(10) - start : null; // updates every hundred milliseconds
    }
});


//
// ─── TEAM TABLE ─────────────────────────────────────────────────────────────────
//



Template.teamTable.helpers({
    RaceDBTeam1() {
        return RaceDB.find({
            carId: 1
        });
    },
    RaceDBTeam2() {
        return RaceDB.find({
            carId: 2
        });
    },
    log(lap) {
        console.log('lap', lap)
    }
});


//
// ─── STOPWATCH CODE ─────────────────────────────────────────────────────────────
//