import './home.html';
import '../../components/clock/flipclock.js';
import { RaceDB, StopWatch } from '/imports/api/RaceDB/RaceDB.js';
import { Meteor } from 'meteor/meteor';

Template.start.onCreated(function() {
    Meteor.subscribe('RaceDB.all');
});

Template.teamTable.helpers({
    RaceDBTeam1() {
        return RaceDB.find({ carId: 1 });
    },
    RaceDBTeam2() {
        return RaceDB.find({ carId: 2 });
    },
    log(lap) {
        console.log('lap', lap)
    }
});


Template.start.events({
    'contextmenu *': function(e, t) {
        e.stopPropagation();
        console.log('template instance:\n', t);
        console.log('data context:\n', Blaze.getData(e.currentTarget));
    }
});