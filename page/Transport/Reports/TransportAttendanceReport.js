class TransportAttendanceReport {
    constructor(page) {
        this.page = page;

        this.routeDropdown = page.locator("//select[@id='route_id']")
        this.boardingpointDropdown = page.locator("(//select[@id='boarding_id'])[1]")
        this.searchButton = page.locator("//button[normalize-space()='Search']");
        this.downloadButton = page.locator("//button[normalize-space()='Download']");
        this.clickPDF = page.locator("//a[@id='download-pdf-link']");
    }

    async transportNavigate(){
        await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/transport/transport_attendance_report",
            {
                waitUntill : "networkidle"
            }
        )
    }

    async navigate() {

        await this.routeDropdown.selectOption({ label:'R_0001'})
        await this.boardingpointDropdown.selectOption({ label: 'B_0001' });
        await this.searchButton.click();
        await this.downloadButton.click();
        await this.clickPDF.click();
    }
}

module.exports = { TransportAttendanceReport };
