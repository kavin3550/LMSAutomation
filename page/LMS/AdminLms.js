class AdminLms {
    constructor(page) {     
        this.page = page;
        this.dashboard=page.locator("//a[@class='nav-link menu-link']")

        this.lmsMenu = page.locator("//a[@href='#LeaveManagementModule']");
        this.studentLeave = page.locator("//span[normalize-space()='Student Leave Config']");
        this.addNewButton = page.locator("//a[@id='addNewButton']")
        this.Leavetype = page.locator("//div[@class='choices__inner']")
         this.leavetype1=page.locator("//div[@id='choices--leave_type_id-item-choice-2']")
    }
    async newbutton(){
        await this.dashboard.click()
        await this.page.waitForTimeout(5000)
        await this.lmsMenu.click();
        
        await this.studentLeave.click()
       
        await this.addNewButton.click();
        // await this.page.waitForTimeout(2000)
        await this.Leavetype.click()
        await this.page.waitForTimeout(2000)
        
        await this.leavetype1.click();
       // await this.page.waitForTimeout(20000)

    }

    }
module.exports ={ AdminLms }
     

    

