import { numberRegex } from './constant.js';

/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Custom submit function
 * @param {scope} globals
 */
function submitFormArrayToString(globals) {
  const data = globals.functions.exportData();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key] = data[key].join(',');
    }
  });
  globals.functions.submitForm(data, true, 'application/json');
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
* Masks the first 5 digits of the mobile number with *
* @name maskMobileNumber Mask Number
* @param {*} mobileNumber
* @returns {string} predefined text and first 5 digits masked
*/
function maskMobileNumber(mobileNumber) {
  if (!mobileNumber) {
    return `We've sent a 6-digit OTP to your registered mobile number ${mobileNumber}.`;
  }
  let number = mobileNumber.toString();
  number = '*'.repeat(5) + number.substring(5);
  return `We've sent a 6-digit OTP to your registered mobile number ${number}.`;
}

/**
 * Validates if a given string is a valid mobile number.
 * Accepts mobile numbers in Indian format with optional country code (0 or 91).
 * Valid numbers must start with 6-9 and contain 10 digits after the prefix.
 * @name validateMobileNumber Validate Number
 * @param {string} mobileNumber - The mobile number to validate
 * @returns {boolean} True if the mobile number is valid, false otherwise
 */
function validateMobileNumber(mobileNumber) {
  return numberRegex.test(mobileNumber);
}

/**
 * Calculates the monthly interest rate from an annual interest rate.
 * @param {number} annualRate - The annual interest rate as a percentage
 * @returns {number} The monthly interest rate as a decimal
 */
function monthlyInterestRate(annualRate) {
  return annualRate / (12 * 100);
}

/**
 * Calculate Equated Monthly Installment (EMI).
 * @param {number} principal - Principal
 * @param {number} tenure - Number of months
 * @param {number} roi - Monthly interest rate
 * @returns {number} - EMI per month
 */
function calculateEMI(principal, tenure, roi) {
  if (roi === 0) return Math.ceil(principal / tenure);

  const R = 1 + roi;
  const expo = R ** tenure;
  const emi = Math.round((principal * roi * expo) / (expo - 1));

  return emi;
}

// eslint-disable-next-line import/prefer-default-export
export {
  getFullName, days, submitFormArrayToString, maskMobileNumber, validateMobileNumber,
  monthlyInterestRate, calculateEMI,
};
