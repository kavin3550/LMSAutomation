class SelfAppraisal {
    constructor(page) {
        this.page = page;

       
        // ===== Menus =====
        // this.AcademicsMenu = page.locator("(//a[@href='#Academics'])[1]");
        // this.LMSMenu = page.locator("//a[normalize-space()='LMS']");
        // this.SelfAppraisal = page.locator("//span[contains(text(),'Self')]");

        // ===== Page Elements =====
        this.FacultyDropdown = page.locator("//div[@class='choices__inner']");
        this.selectFacultyDropdown = page.locator("//div[@class='choices__list choices__list--dropdown']")
        this.SubmitButton = page.locator("(//input[@value='submit'])[1]");
        this.confirmMsg = page.locator("(//button[normalize-space()='confirm'])[1]")
        this.save = page.locator("//form[@id='score_sheets']//button[@type='submit'][normalize-space()='Save']")
        this.AppraisalSave = page.locator("//button[normalize-space()='confirm']")
        this.OkButton = page.locator("//button[normalize-space()='ok']")


    }
async navigate(){
    await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/lms?comp=self_appraisal&current_tab=pi_1" ,
        {
            waitUntil : "networkidle"
        }
    );
}
    async addSelfAppraisal() {
        await this.FacultyDropdown.click();
        await this.page.locator("//div[contains(@class,'choices__item--choice')][normalize-space()='Dr Janani S -CAS10015']").click();
        await this.SubmitButton.click();
        await this.confirmMsg.click();
        await this.save.click();
        await this.AppraisalSave.click();
        await this.OkButton.click();
    }
}
module.exports = {SelfAppraisal}