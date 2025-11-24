const { test } = require('@playwright/test');
//const { LoginPage } = require('../../page/Loginpage');
const { AssignBoardingPointToRoute } = require('../../page/Transport/AssignBoardingPointtoRoute');



test('Assign Boarding Points to Routes', async ({ page }) => {
    // Login
  
    // Page object
    const assignPage = new AssignBoardingPointToRoute(page);
    await assignPage.AssignBoardingMenu();

    // Example Data
    const routeData = [
        {
            routeName: 'KPR to SNMV-R_0001',
            boardingPoints: ['pollachi road - B_0001', 'hops - B_0002', 'ganapathi - B_0003']
        },
        {
            routeName: 'R1-R_0003',
            boardingPoints: [
                
                'GOVARDHANAGIRI - B_0004',
                
            ]
        }
    ];

    // Loop through each route and assign boarding points
    for (const route of routeData) {
        await assignPage.assignBoardingPoints(route.routeName, route.boardingPoints);
    }
});
