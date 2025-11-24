const { test } = require('@playwright/test');

// ===== Import Page Objects =====
const { LoginPage } = require('../../page/Loginpage');
const { RouteMaster } = require('../../page/Transport/master/RouteMaster');
const { BoardingPointMaster } = require('../../page/Transport/master/BoardingPointMaster');
const { VendorMaster } = require('../../page/Transport/master/VendorMaster');
const { VehicleMaster } = require('../../page/Transport/master/VehicleMaster');
const { DriverMaster } = require('../../page/Transport/master/DriverMaster');
const { PassengerDetailsPage } = require('../../page/Transport/AssignPassengertoBoardingPoint');
const { AssignBoardingPointToRoute } = require('../../page/Transport/AssignBoardingPointtoRoute');
const { AssignTripPage } = require('../../page/Transport/AssignTrip');
const { DriverAssignPage } = require('../../page/Transport/DriverAssign');
const { vehicleTripReport } = require('../../page/Transport/Reports/VehicleTripReport');
const { BoardingPointReport } = require('../../page/Transport/Reports/BoardingPointReport');
const { TransportAttendanceReport } = require('../../page/Transport/Reports/TransportAttendanceReport');






// ========================================================
// 🚀 Transport Master Suite
// ========================================================
test.describe('Transport Master - Test Suite', () => {

    // 1️⃣ Before each test → Login first
    test.beforeEach(async ({ page }) => {
        const login = new LoginPage(page);
        await login.navigate();
        await login.login('admin@saarcmasts.com', '123456');
    });

    // 2️⃣ Test Case: Add New Route
    test('Add new route in Route Master', async ({ page }) => {
        const route = new RouteMaster(page);

        await route.addRoute(
            'R_0006',
            'Peelamedu',
            'Singanallur',
            'College Route'
        );

        console.log('✅ Route added successfully');
    });

    // 3️⃣ Test Case: Add New Boarding Point
    test('Add new Boarding Point in Boarding Point Master', async ({ page }) => {
        const boarding = new BoardingPointMaster(page);

        await boarding.addBoarding(
            'Title Park',
            'Automation Testing'
        );

        console.log('✅ Boarding Point added successfully');
    });

     // 4 Vendor Master
     test('Add New Vendor', async ({ page }) => {
        const vendor = new VendorMaster(page);
        await vendor.addVendor(
            'KK Travels',
            '9944680920',
            'kk@gmail.com',
            'Coimbatore'
        );
    });

     // 5 Vehicle Master
     test('Add New Vehicle', async ({ page }) => {
        const vehicle = new VehicleMaster(page);

        await vehicle.addVehicle({
            vehicleName: 'Swift Van',
            vehicleCapacity: '50',
            brandName: 'Maruti',
            registrationNumber: 'TN38BA2025',
            vehicleType: 'Own',
            registrationDate: '2024-05-20',
            taxRenewalDate: '2025-06-20',
            rcCopyPath: 'tests/uploads/rc_copy.png',
            pocCopyPath: 'tests/uploads/poc_copy.png',
            insuranceNumber: 'INS884488',
            insuranceStartDate: '2024-06-18',
            insuranceRenewalDate: '2025-06-18',
            insuranceCopyPath: 'tests/uploads/insurance.png'
        });
    });

    
    // ========================================================
    // 5️⃣ DRIVER MASTER (YOUR REQUEST)
    // ========================================================
    test("Add New Driver Entry", async ({ page }) => {

        const driver = new DriverMaster(page);

        await driver.addDriver({

            // === Photo ===
            photoPath: "tests/uploads/driver_photo.png",

            // === Basic Details ===
            firstName: "Ramesh",
            lastName: "Kumar",
            gender: "Male",
            dateOfBirth: "1988-06-15",
            mobile: "9876543210",
            officialEmail: "ramesh.driver@school.com",
            aadhaarNo: "123412341234",
            currentAddress: "No.12, Gandhi Street, Coimbatore",

            // === Address ===
            state: "Tamil Nadu",
            pincode: "641002",
            bloodGroup: "O+",
            personalEmail: "ramesh.personal@gmail.com",
            district: "Coimbatore",

            // === Bank Details ===
            bankName: "SBI",
            accountNumber: "123456789000",
            ifscCode: "SBIN000567",
            panNumber: "ABCDE1234F",
            epfNumber: "EPF445566",

            // === License & Proofs ===
            licenseNumber: "TN65D2025001",
            aadhaarCopyPath: "tests/uploads/aadhaar.png",
            licenseCopyPath: "tests/uploads/license.png"
        });
    });
// ========================================================
    // 7️⃣ Passenger Assign Test — ADDED HERE (Your request)
    // ========================================================
    test("Assign Passenger to Boarding Point", async ({ page }) => {

        const passenger = new PassengerDetailsPage(page);

        await passenger.addPassenger({
            passengerName: "Kavin",
            passengerId: "SNMV1234"
        });

        console.log("✅ Passenger Assigned Successfully");
    });

      // ============================================================
    // 8 ASSIGN BOARDING POINTS TO ROUTE
    // ============================================================
    test('Assign Boarding Points to Routes', async ({ page }) => {

        const assignPage = new AssignBoardingPointToRoute(page);

        const routeData = [
            {
                routeName: 'KPR to SNMV-R_0001',
                boardingPoints: [
                    'pollachi road - B_0001',
                    'hops - B_0002',
                    'ganapathi - B_0003'
                ]
            },
            {
                routeName: 'R1-R_0003',
                boardingPoints: [
                    'GOVARDHANAGIRI - B_0004'
                ]
            }
        ];

        for (const route of routeData) {
            await assignPage.assignBoardingPoints(route.routeName, route.boardingPoints);
        }
    });

 // ====================================================
  // 4️⃣ **TEST - Create Trip & Assign Passenger**
  // ====================================================
  test('Create Trip & Assign Passenger', async ({ page }) => {
    const assignTrip = new AssignTripPage(page);

    await assignTrip.createTrip(
      'KPR to SNMV',
      '09:00 PM',
      '10:00 PM'
    );
  });

   // =====================================================
    // 5️⃣ Assign Driver to Bus
    // =====================================================
    test("Assign Driver to Bus (Driver Assign Page)", async ({ page }) => {
        const driverAssign = new DriverAssignPage(page);

        await driverAssign.navigate(); // Your POM already selects the driver “jj”
    });

// ===================================================
    // 5️⃣ Vehicle Trip Report
    // ===================================================
    test("Vehicle Trip Report - PDF Download", async ({ page }) => {
        const report = new vehicleTripReport(page);

        await report.navigate(); // select NEXON - 15 & download PDF
    });

        // ========================================================
    // 6️⃣ Boarding Point Report
    // ========================================================
    test("Boarding Point Report - Download PDF", async ({ page }) => {
        const boardingReport = new BoardingPointReport(page);
        await boardingReport.navigate();
    });

    // ========================================================
    // 7️⃣ Transport Attendance Report
    // ========================================================
    test("Transport Attendance Report - Download PDF", async ({ page }) => {
        const attendanceReport = new TransportAttendanceReport(page);
        await attendanceReport.navigate();
    });


    

});
