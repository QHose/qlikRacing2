// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { RaceDB } from '../../api/RaceDB/RaceDB.js';

Meteor.startup(() => {
    // if the RaceDB collection is empty
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