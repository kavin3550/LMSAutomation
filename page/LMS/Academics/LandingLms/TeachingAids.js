class TeachingAids {
    constructor(page) {
        this.page = page;   
       // this.dashboard=page.locator("//a[@class='nav-link menu-link']")
        // this.AcademicsMenu = page.locator("(//a[@href='#Academics'])[1]");
        // this.LMSMenu = page.locator("//a[normalize-space()='LMS']");
        // this.TeachingAidsMenu = page.locator("//div[@id='Lmsdashboad']//li[1]");

        this.AddNewButton = page.locator("//a[@id='addRow']");
        this.TitleInput = page.locator("//input[@id='teaching_aids_cl']");
        this.ShortNameInput = page.locator("//input[@id='short_name_cl']");
        this.IsactiveCheckbox = page.locator("//input[@id='inlineRadio_sp_yes']");
        this.SubmitButton = page.locator("//button[@id='add-teaching-aids']");
        this.Okbutton = page.locator("//button[normalize-space()='confirm']")
        this.finalAlertOk = page.locator("//button[normalize-space()='ok']")
    }

        async navigate() {
        await this.page.goto(
            "https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/teaching_aids",
            { waitUntil: "networkidle" }
        );
    }
    async addTeachingAids() {
       // await this.dashboard.click();
    //     await this.page.waitForTimeout(5000);
    //     await this.AcademicsMenu.click();
    //    // await this.page.waitForTimeout(3000);
    //     await this.LMSMenu.click();
    //     await this.TeachingAidsMenu.click();
        await this.AddNewButton.click();
        await this.TitleInput.fill('Mathematics Basics');
        await this.ShortNameInput.fill('MathBasics');
        await this.IsactiveCheckbox.check();
        await this.SubmitButton.click();
        await this.Okbutton.click();
        // await this.page.waitForTimeout(3000);
        await this.finalAlertOk.click();


    }

}
module.exports = { TeachingAids };
