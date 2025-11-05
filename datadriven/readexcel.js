const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

function getTestData(relativePath, sheetName) {
  if (!relativePath) {
    throw new Error('getTestData requires a file path: getTestData(filePath, sheetName)');
  }

  // ✅ FIX: resolve from project root, not from this file's directory
  const absolutePath = path.resolve(process.cwd(), relativePath);
  console.log('📄 Resolved path:', absolutePath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`❌ Excel file not found at: ${absolutePath}`);
  }

  const workbook = XLSX.readFile(absolutePath);
  const targetSheet = sheetName || workbook.SheetNames[0];
  const sheet = workbook.Sheets[targetSheet];
  return XLSX.utils.sheet_to_json(sheet);
}

module.exports = { getTestData };

