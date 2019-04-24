await helpers.loadPage('http://localhost:3000/#login')
            
            let input = await driver.findElement(by.css('input#username'))
            let password = await driver.findElement(by.css('input#password'))
            let namn = 'dav'
            let pw = '123456'
            input.sendKeys(namn)
            password.sendKeys(pw)
            await sleep(1000)
            
            await driver.findElement(by.css('button.btn.btn-primary.float-right.mt-3')).click()
            await sleep(2000) 