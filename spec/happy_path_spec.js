const   Browser = require("zombie"),
        browser = new Browser(),
        config = require("../config/settings");

describe("browse to google", function() {

    it("should visit the google home page", function(next) {
        browser.visit(config.settings.app_url, function() {

            expect(browser.success).toBe(true);
            next();

        })
    });


});