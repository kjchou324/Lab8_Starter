// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber tests

test('checks the valid phone number "(888) 888-8888"', () => {
    expect(functions.isPhoneNumber("(888) 888-8888")).toBe(true);
});

test('checks the valid phone number "123-4567890"', () => {
    expect(functions.isPhoneNumber("123-4567890")).toBe(true);
});

test('checks the invalid phone number "1234567890"', () => {
    expect(functions.isPhoneNumber("1234567890")).toBe(false);
});

test('checks invalid phone number "(098)-7654321"', () => {
    expect(functions.isPhoneNumber("(098)-7654321")).toBe(false);
});

// isEmail tests

test('checks valid email "xyz@abc.co"', () => {
    expect(functions.isEmail("xyz@abc.co")).toBe(true);
});

test('checks valid email "john42@example.com"', () => {
    expect(functions.isEmail("john42@example.com")).toBe(true);
});

test('checks invalid email "john42@web.site"', () => {
    expect(functions.isEmail("john42@web.site")).toBe(false);
});

test('checks invalid email "help@123movies.com"', () => {
    expect(functions.isEmail("help@123movies.com")).toBe(false);
});

// isStrongPassword tests

test('checks valid strong password "Abcd"', () => {
    expect(functions.isStrongPassword("Abcd")).toBe(true);
});

test('checks valid strong password "Z_1b"', () => {
    expect(functions.isStrongPassword("Z_1b")).toBe(true);
});

test('checks invalid strong password "1AbcDefgH"', () => {
    expect(functions.isStrongPassword("1AbcDefgH")).toBe(false);
});

test('checks invalid strong password "ABCdefGHIjklM1"', () => {
    expect(functions.isStrongPassword("ABCdefGHI123456_")).toBe(false);
});

// isDate tests

test('checks valid date "13/32/9999"', () => {
    expect(functions.isDate("13/32/9999")).toBe(true);
});

test('checks valid date "26/05/2023"', () => {
    expect(functions.isDate("26/05/2023")).toBe(true);
});

test('checks invalid date "2/30/103"', () => {
    expect(functions.isDate("02/30/103")).toBe(false);
});

test('checks invalid date "1/234/5678"', () => {
    expect(functions.isDate("1/234/5678")).toBe(false);
});

// isHexColor tests

test('checks valid hex color "#3fB"', () => {
    expect(functions.isHexColor("#3fB")).toBe(true);
});

test('checks valid hex color "0F9a56"', () => {
    expect(functions.isHexColor("0F9a56")).toBe(true);
});

test('checks invalid hex color "0f32a"', () => {
    expect(functions.isHexColor("0f32a")).toBe(false);
});

test('checks invalid hex color "#789abg"', () => {
    expect(functions.isHexColor("#789abg")).toBe(false);
});