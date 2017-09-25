let webdriver = require ('selenium-webdriver');

    By = webdriver.By,
    until = webdriver.until;

    // Open Browser
let driver = new webdriver.Builder().forBrowser('chrome').build();

    // Start Domain 
    driver.get('https://www.google.com');

    // Close Browser
    driver.quit();
