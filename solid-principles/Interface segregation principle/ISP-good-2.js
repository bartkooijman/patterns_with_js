// Interface for a reportable item
class Reportable {
  generateReport() {
    throw new Error('Method not implemented');
  }
}

// Class implementing Reportable for PDF reports
class PDFReportGenerator extends Reportable {
  generateReport() {
    console.log('Generating PDF report');
    // Code for generating a PDF report
  }
}

// Class implementing Reportable for Excel reports
class ExcelReportGenerator extends Reportable {
  generateReport() {
    console.log('Generating Excel report');
    // Code for generating an Excel report
  }
}

// Interface for exportable items
class Exportable {
  exportData() {
    throw new Error('Method not implemented');
  }
}

// Class implementing Exportable for data export to CSV
class CSVDataExporter extends Exportable {
  exportData() {
    console.log('Exporting data to CSV');
    // Code for exporting data to CSV
  }
}

// Class using both Reportable and Exportable interfaces
class ReportExporter {
  constructor(reportable, exportable) {
    this.reportable = reportable;
    this.exportable = exportable;
  }

  generateAndExport() {
    this.reportable.generateReport();
    this.exportable.exportData();
  }
}

// Usage of ISP
const pdfReportGenerator = new PDFReportGenerator();
const csvDataExporter = new CSVDataExporter();

const reportExporter1 = new ReportExporter(pdfReportGenerator, csvDataExporter);
reportExporter1.generateAndExport();
// Output: Generating PDF report
// Output: Exporting data to CSV

const excelReportGenerator = new ExcelReportGenerator();

// This usage adheres to ISP as each class only implements the methods it needs
const reportExporter2 = new ReportExporter(excelReportGenerator, csvDataExporter);
reportExporter2.generateAndExport();
// Output: Generating Excel report
// Output: Exporting data to CSV
