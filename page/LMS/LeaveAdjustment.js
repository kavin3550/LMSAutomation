import { expect } from '@playwright/test';

export class LeaveAdjustmentPage {
  constructor(page) {
    this.page = page;
    this.leave=page.getByText('Leave Management');
    this.LeaveAdjustment=page.getByText('Leave Adjustment');
    this.addnew=page.getByRole('button', { name: 'Add New' });
  
    //  Dropdown locators
    this.financialYearDropdown = page.getByRole('combobox', { name: 'Financial Year' });
    this.typeDropdown = page.getByRole('combobox', { name: 'Type' });
    this.nameDropdown = page.getByRole('combobox', { name: 'Name' });
    this.leaveTypeDropdown = page.getByRole('combobox', { name: 'Leave Type' });
    //this.leaveBalanceInput = page.getByRole('textbox', { name: 'Leave Balance' });

    // Input fields
    this.leaveBalanceInput = page.getByRole('textbox', { name: 'Leave Balance' });

    // Buttons
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.clearButton = page.getByRole('button', { name: 'Clear' });
  }
  async navigate() {
    await this.leave.click();
    await this.page.waitForTimeout(3000);
    await this.LeaveAdjustment.click();
    await this.page.waitForTimeout(3000);
    await this.addnew.click();
    await this.page.waitForTimeout(6000);
    await this.financialYearDropdown.click();
    await this.page.waitForTimeout(6000);
    await this.typeDropdown.click();
    await this.page.waitForTimeout(4000);
    await this.nameDropdown.click();
    await this.page.waitForTimeout(2000);
    await this.leaveTypeDropdown.click();
    await this.page.waitForTimeout(2000);
    await this.leaveBalanceInput.click();
    await this.page.waitForTimeout(2000);

  }

 // Method: Fill Add Leave Balance Form
  async addLeaveBalance(financialYear, type, name, leaveType, balance) {
    await this.financialYearDropdown.selectOption({ label: financialYear });
    await this.typeDropdown.selectOption({ label: type });
    await this.nameDropdown.selectOption({ label: name });
    await this.leaveTypeDropdown.selectOption({ label: leaveType });
    await this.leaveBalanceInput.fill(balance.toString());
    await this.submitButton.click();
  }

// async addleavebalance(financialYear){
  async clearForm() {
    await this.clearButton.click();
  }

  // Method: Verify success message (if applicable)
  async verifySuccessMessage() {
    const successfully = this.page.getByText(/Leave balance added successfully/i);
    await expect(successfully).toBeVisible();
  }
}