let webdriver = require ('selenium-webdriver');
    { describe, it, after, before }  require('selenium-webdriver/testing');
    By = webdriver.By;
    until = webdriver.until;
    var driver;
 
    describe('Library app cenarios'), function(){
        this.timeout(50000);        
        beforeEach(function () {
            driver = new webdriver.Builder().forBrowser('chrome').build();
            driver.get('https://library-app.firebaseapp.com/');        
        });
 
        afterEach(function () {
            driver.quit();
        });

        it('Alterar a opacidade do botão ao ser preenchido', function () {
            let submitBtn = driver.findElement(By.css('.btn-lg'));
            driver.findElement(By.css('input')).sendKeys('us@exemple.com');
            driver.wait(function(){
                return submitBtn.getCssValue('opacity').then(function(result){
                    return result == 1
                });
            }, 10000);
        });

        it('Works with mocha', function () {
            let submitBtn = driver.findElement(By.css('.btn-lg'));
            driver.findElement(By.css('input')).sendKeys('us');
            submitBtn.click();
            driver.wait(until.elementLocated(By.css('.alert-success')), 5000).getText().then(function(txt){
                console.log('Sucesso: ' + txt); 
            });

        });

        it('Works with mocha', function () {
            driver.findElement(By.css('nav')).getText().then(function(txt){
                console.log(txt);
            })
        });
    };

    
    
 
  

    driver.sleep(1000);
    driver.quit();
 