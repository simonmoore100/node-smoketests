var Jasmine = require('jasmine'),
    jasmine = new Jasmine(),
    config = require('./config/settings.js');


const JasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false
});

jasmine.loadConfigFile('./spec/support/jasmine.json');

jasmine.DEFAULT_TIMEOUT_INTERVAL = config.settings.timeout;

jasmine.env.clearReporters();
jasmine.addReporter(reporter);

jasmine.execute();

jasmine.onComplete(function(passed) {
    if(passed) {
        console.log('All specs have passed');
        process.exit();
    }
    else {
        console.log('At least one spec has failed');
        process.exit();
    }
});
