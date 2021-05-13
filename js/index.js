const fs = require('fs');

const Users = require('./Users.js');
const TimeBlock = require('./TimeBlock.js');
const Appointments = require('./Appointments.js');
const Skills = require('./Skills.js');
const Profile = require('./Profile.js');
const Evaluation = require('./Evaluation.js');
const { dirname } = require('path');

const users = new Users(5, 100);
const timeBlock = new TimeBlock(users, 10);
const appointment = new Appointments(users, timeBlock, 60);
const profile = new Profile(users);
const skills = new Skills(profile);
const evaluations = new Evaluation(appointment);

const usersSqlSTMT = users.generateInserts();
const timeBlockSqlSTMT = timeBlock.generateInserts();
const appointmentsSqlSTMT = appointment.generateInserts();
const profileSqlSTMT = profile.generateInserts();
const skillsSqlSTMT = skills.generateInserts();
const evaluationsSqlSTMT = evaluations.generateInserts();

fs.writeFileSync(__dirname+'/../seeds/01_users_seed.sql', usersSqlSTMT, {
    flag: 'w'
});
fs.writeFileSync(__dirname+'/../seeds/02_time_block_seed.sql', timeBlockSqlSTMT, {
    flag: 'w'
});
fs.writeFileSync(__dirname+'/../seeds/03_appointments_seed.sql', appointmentsSqlSTMT, {
    flag: 'w'
});
fs.writeFileSync(__dirname+'/../seeds/04_profile_seed.sql', profileSqlSTMT, {
    flag: 'w'
});
fs.writeFileSync(__dirname+'/../seeds/05_skills_seed.sql', skillsSqlSTMT, {
    flag: 'w'
});
fs.writeFileSync(__dirname+'/../seeds/06_evaluations_seed.sql', evaluationsSqlSTMT, {
    flag: 'w'
});