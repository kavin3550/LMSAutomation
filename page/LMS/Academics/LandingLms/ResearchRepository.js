class ResearchRepository {
    constructor(page) {
        this.page = page;

        // ===== Page Elements =====
        this.FacultyDropdown = page.locator("//div[@class='choices__inner']");
        this.selectFacultyDropdown = page.locator("//div[@class='choices__list choices__list--dropdown']")
        this.SubmitButton = page.locator("//input[@id='submit']");
        this.InformationButton = page.locator("//button[normalize-space()='Add Ph.D. Information']")
        this.disciplineInput = page.locator("(//input[@placeholder='Discipline'])[1]");
        this.universityInput = page.locator("//form[@id='basic_info']//input[@placeholder='University']");
        this.yearOfCompletionInput = page.locator("//div[@id='fdpscanvas']//div[3]//input[1]");
        this.areaSpecializationInput = page.locator("//div[@id='fdpscanvas']//div[4]//input[1]");
        this.metricReferenceInput = page.locator("//form[@id='basic_info']//div[@class='col-12 mb-2']//input[@placeholder='Metric Reference']");
        this.finalButton = page.locator("//button[normalize-space()='Submit']")
        this.confirmMsg = page.locator("//button[normalize-space()='confirm']")
        this.alertOkbutton = page.locator("//button[normalize-space()='ok']")
    }

    async researchMenu(){
        await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/lms?comp=research_repository&current_tab=basic_information",{
            waitUntil : "networkidle"
        })
    }

    // <--- Accepts 'data' parameter! --->
    async addResearchRepository(data) {
        // 
        await this.FacultyDropdown.click();
        await this.page.locator("//div[contains(@class,'choices__item--choice')][normalize-space()='Dr Janani S']").click();
        await this.SubmitButton.click();

        // Click to open Add Ph.D. Information modal
        await this.InformationButton.click();
        // Fill the modal using the passed-in data object
        await this.disciplineInput.fill(data.discipline);
        await this.universityInput.fill(data.university);
        await this.yearOfCompletionInput.fill(data.yearOfCompletion);
        await this.areaSpecializationInput.fill(data.areaSpecialization);
        await this.metricReferenceInput.fill(data.metricReference);

        // Submit (do this IF the modal must be submitted now)
        await this.finalButton.click();
        await this.confirmMsg.click();
        await this.alertOkbutton.click()
        //await this.page.waitForTimeout(3000);
    }
}

module.exports = { ResearchRepository };
