// Is Valid ISBN13 Number request tests 
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response body is not empty", function () {
    pm.expect(pm.response.text()).to.not.be.empty;
});

pm.test("Content-Type header is present", function () {
    pm.expect(pm.response.headers.has("Content-Type")).to.be.true;
});

pm.test("Content-Type is XML", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("xml");
});

pm.test("Response has IsValidISBN13Response", function () {
    pm.expect(pm.response.text()).to.include("IsValidISBN13Response");
});

pm.test("Response has IsValidISBN13Result", function () {
    pm.expect(pm.response.text()).to.include("IsValidISBN13Result");
});

pm.test("Result contains true", function () {
    pm.expect(pm.response.text()).to.include("true");
});

pm.test("Response time is acceptable", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

pm.test("Response contains Envelope", function () {
    pm.expect(pm.response.text()).to.include("Envelope");
});

pm.test("Response contains Body", function () {
    pm.expect(pm.response.text()).to.include("Body");
});

// Is Valid ISBN10 Number request tests

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("Response body is not empty", function () {
    pm.expect(pm.response.text()).to.not.be.empty;
});


pm.test("Content-Type header is present", function () {
    pm.expect(pm.response.headers.has("Content-Type")).to.be.true;
});


pm.test("Content-Type is XML", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("xml");
});


pm.test("Response has IsValidISBN10Response", function () {
    pm.expect(pm.response.text()).to.include("IsValidISBN10Response");
});


pm.test("Response has IsValidISBN10Result", function () {
    pm.expect(pm.response.text()).to.include("IsValidISBN10Result");
});


pm.test("Result contains true", function () {
    pm.expect(pm.response.text()).to.include("true");
});


pm.test("Response time is acceptable", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});


pm.test("Response contains Envelope", function () {
    pm.expect(pm.response.text()).to.include("Envelope");
});


pm.test("Response contains Body", function () {
    pm.expect(pm.response.text()).to.include("Body");
});
