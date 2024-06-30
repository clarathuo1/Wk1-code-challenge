function calculateNHIF(grossPay) {
    if (grossPay <= 5999) return 150;
    else if (grossPay <= 7999 && grossPay > 5999) return 300;
    else if (grossPay <= 11999 && grossPay > 7999 ) return 400;
    else if (grossPay <= 14999 && grossPay > 11999) return 500;
    else if (grossPay <= 19999 && grossPay > 14999) return 600;
    else if (grossPay <= 24999 && grossPay > 19999) return 750;
    else if (grossPay <= 29999 && grossPay > 24999) return 850;
    else if (grossPay <= 34999 && grossPay > 29999) return 900;
    else if (grossPay <= 39999 && grossPay > 34999) return 950;
    else if (grossPay <= 44999 && grossPay > 39999) return 1000;
    else if (grossPay <= 49999 && grossPay > 44999) return 1100;
    else if (grossPay <= 59999 && grossPay > 49999) return 1200;
    else if (grossPay <= 69999 && grossPay > 59999) return 1300;
    else if (grossPay <= 79999 && grossPay > 69999) return 1400;
    else if (grossPay <= 89999 && grossPay > 79999) return 1500;
    else if (grossPay <= 99999 && grossPay > 79999) return 1600;
    else return 1700; // For gross pay of 100,000 and above
}

// Function to calculate pension (NSSF) deductions based on pensionable pay
function calculateNSSF(pensionablePay) {
    if (pensionablePay <= 7000) return 0.6 * pensionablePay;
    else if (pensionablePay > 7000 && pensionablePay <= 36000) return 0.6 * (pensionablePay - 7000);
    else return 2160; // For pensionable pay above 36,000 (Tier II)
}

// Function to calculate tax based on annual taxable pay
function calculateTax(annualTaxablePay) {
    if (annualTaxablePay <= 288000) return annualTaxablePay * 0.1;
    else if (annualTaxablePay <= 388000) return (annualTaxablePay - 288000) * 0.25 + 28800;
    else if (annualTaxablePay <= 6000000) return (annualTaxablePay - 388000) * 0.3 + 65000;
    else if (annualTaxablePay <= 9600000) return (annualTaxablePay - 6000000) * 0.325 + 149000;
    else return (annualTaxablePay - 9600000) * 0.35 + 252500;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate NHIF deductions
    const nhifDeductions = calculateNHIF(grossSalary);

    // Calculate pension (NSSF) deductions
    const nssfDeductions = calculateNSSF(basicSalary);

    // Calculate monthly taxable pay
    const monthlyTaxablePay = basicSalary - nhifDeductions - nssfDeductions;

    // Calculate annual taxable pay
    const annualTaxablePay = monthlyTaxablePay * 12;

    // Calculate tax
    const tax = calculateTax(annualTaxablePay);

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    return {
        grossSalary,
        tax,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}