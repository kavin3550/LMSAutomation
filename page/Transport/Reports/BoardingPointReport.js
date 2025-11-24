class BoardingPointReport {
    constructor(page) {
        this.page = page;

        this.boardingPointReport = page.locator("(//span[@class='mobile-change-d-none d-md-inline-block'][contains(text(),'Boarding Point')])[3]");
        this.boardingpointDropdown = page.locator("//select[@id='boarding_id']")
        this.searchButton = page.locator("//button[normalize-space()='Search']");
        this.downloadButton = page.locator("//button[normalize-space()='Download']");
        this.clickPDF = page.locator("//a[@id='download-pdf-link']");
    }

    async navigateBoardingPointReport(){
        await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/transport/boarding_point_report",
            {
                waitUntill : "networkidle"
            }
        )
    }

    async navigate() {
        await this.boardingPointReport.click();
        await this.boardingpointDropdown.selectOption({ label: 'pollachi road' });
        await this.searchButton.click();

        await this.downloadButton.click();
        await this.clickPDF.click();
    }
}

module.exports = { BoardingPointReport };
