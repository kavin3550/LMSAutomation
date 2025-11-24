class vehicleTripReport {
    constructor(page) {
        this.page = page;

        this.VehicleDropdownInput = page.locator("//select[@id='vehicle_id']");
        this.searchButton = page.locator("//button[normalize-space()='Search']");
        this.downloadButton = page.locator("//button[normalize-space()='Download']");
        this.clickPDF = page.locator("//a[@id='download-pdf-link']");
    }
    async navigateVehicle (){
        await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/transport/transport_attendance_report",
            {
                waitUntill : "networkidle"
            }
        )
    }

    async navigate() {
    
        await this.VehicleDropdownInput.selectOption({ label: 'NEXON - 15' });

        await this.searchButton.click();

        await this.downloadButton.click();
        await this.clickPDF.click();
    }
}

module.exports = { vehicleTripReport };
