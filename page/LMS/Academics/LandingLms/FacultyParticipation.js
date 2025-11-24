class FacultyParticipation {
    constructor(page) {
        this.page = page;


        // ===== Menus =====
        // this.AcademicsMenu = page.locator("(//a[@href='#Academics'])[1]");
        // this.LMSMenu = page.locator("//a[normalize-space()='LMS']")
        // this.FacultyParticipation = page.locator("(//span[@class='mobile-change-d-none d-md-inline-block'][contains(text(),'Faculty')])[7]")

         // ===== Page Elements =====
         this.FacultyDropdown = page.locator("//div[@class='choices__inner']");
         this.selectFacultyDropdown = page.locator("//div[@class='choices__list choices__list--dropdown']")
         this.SubmitButton = page.locator("(//button[normalize-space()='Submit'])[1]");
    }

    // async FacultyParticipationMenu(){
    //     "https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/lms?comp=faculty_participation&current_tab=fdps",{
    //          waitUntil : "networkIdle"
    //     }
    // }
        async FacultyParticipationMenu() {
        await this.page.goto(
            "https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/lms?comp=faculty_participation&current_tab=fdps",
            { waitUntil: "networkidle" }
        );
    }

    async addFacultyParticipation() {
        // await this.AcademicsMenu.click();
        // await this.LMSMenu.click();
         //await this.FacultyParticipation.click();
     await this.FacultyDropdown.click();
        await this.page.locator("//div[contains(@class,'choices__item--choice')][normalize-space()='Dr Janani S']").click();
        await this.SubmitButton.click();
        
    }
}
module.exports = {FacultyParticipation}