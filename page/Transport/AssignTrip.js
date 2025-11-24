// const { expect } = require('@playwright/test');

class AssignTripPage {
    constructor(page) {
      this.page = page;
  
      // // ===== Menu Locators =====
      // this.transportMenu = page.locator("//a[@href='#transport_menu']");
      // this.assignTripMenu = page.locator("//span[normalize-space()='Assign Trip']");
  
      // ===== Add Trip Form Locators =====
      this.addTripButton = page.locator("(//button[normalize-space()='+'])[1]");
      this.routeDropdown = page.locator("//select[@id='route_id']");
      this.fromTimeInput = page.locator("//input[@id='from_time']");
      this.toTimeInput = page.locator("//input[@id='to_time']");
      this.saveButton = page.locator("//button[@class='btn btn-success']");
      this.confirmButton = page.locator("//button[normalize-space()='confirm']")
      //Assign passanger button
      this.assignPassengerButton = page.locator("(//button[@type='button'][normalize-space()='Assign Passengers'])[1]")
      this.allPasangerListInput = page.locator("//select[@id='allStudents']")
      this.selectPassangerList = page.locator("//option[@value='882']")
      this.addStudentButton = page.locator("//button[@id='addStudent']")
      this.successOkButton = page.locator("//button[normalize-space()='ok']")
    }
    async navigateAssignTrip(){
      await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/transport/route_assign",{
        waitUntill : "networkidle"
      })
    }
  
    async createTrip(routeName, fromTime, toTime) {
      // console.log('➡️ Navigating to Assign Trip page...');
      // await this.transportMenu.click();
      // await this.assignTripMenu.click();
      // await this.page.waitForLoadState('networkidle');
  
      // console.log('Opening Add Trip form...');
      await this.addTripButton.click();
  
      // Select Route
      console.log(`Selecting Route: ${routeName}`);
      await this.routeDropdown.selectOption({ label: routeName });
  
      // Handle readonly time input using JS (since Flatpickr is applied)
      console.log(`Setting From Time: ${fromTime}`);
      await this.page.evaluate((time) => {
        const input = document.querySelector('#from_time');
        input.removeAttribute('readonly');
        input.value = time;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }, fromTime);
  
      console.log(`Setting To Time: ${toTime}`);
      await this.page.evaluate((time) => {
        const input = document.querySelector('#to_time');
        input.removeAttribute('readonly');
        input.value = time;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }, toTime);
  
   await this.saveButton.click();
   await this.confirmButton.click();
   await this.successOkButton.click();

   //Assign passanger button
   await this.assignPassengerButton.click();
   await this.allPasangerListInput.click();
   await this.selectPassangerList.click();
   await this.addStudentButton.click();


            
    }
  }
  
  module.exports = { AssignTripPage };
  