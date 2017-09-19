// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { RaceDB, StopWatch } from '../../api/RaceDB/RaceDB.js';

Meteor.startup(() => {
    console.log('Insert some dummy data if the RaceDB and stopwatch collection is empty');
    if (StopWatch.find().count() === 0) {
        StopWatch.insert({ action: 'start' });
    }

    if (RaceDB.find().count() === 0) {
        const data = [{
                carId: 1,
                LapNr: 1,
                LapTime: new Date(),
            },
            {
                carId: 1,
                LapNr: 2,
                LapTime: new Date(),
            },
            {
                carId: 2,
                LapNr: 1,
                LapTime: new Date(),
            },
            {
                carId: 2,
                LapNr: 2,
                LapTime: new Date(),
            },
        ];

        data.forEach(link => RaceDB.insert(link));
    }
});