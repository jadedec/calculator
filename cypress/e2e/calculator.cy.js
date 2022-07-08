describe('calculator tests', () => {
  it('should check that 7+9=16', () => {
    //1. ARRANGE 
    cy.visit('http://127.0.0.1:5501/index.html');
    //2.ACT
    //write code that controls users input
    cy.get('#seven').click();
    cy.get('#plus').click();
    cy.get('#nine').click();
    cy.get('#equal').click();
    //3.ASSERT
    //check if the result is what we expect
    //7 + 9 appears in lower display
    cy.get('#display').should("contain", "16");
    //check that 16 inside top display
    cy.get('#result').should("contain", "16");

  });
  //subtracting
  it('should check that 6-5=1', () => {
    cy.get('#AC').click();
    cy.get('#six').click();
    cy.get('#minus').click();
    cy.get('#five').click();
    cy.get('#equal').click();
    cy.get('#display').should("contain", "1");
    cy.get('#result').should("contain", "1");
  });
  //multiplying
  it('should check that 3*4=12', () => {
    cy.get('#AC').click();
    cy.get('#three').click();
    cy.get('#multiply').click();
    cy.get('#four').click();
    cy.get('#equal').click();
    cy.get('#display').should("contain", "12");
    cy.get('#result').should("contain", "12");
  });
  //dividing
  it('should check that 24/6=4', () => {
    cy.get('#AC').click();
    cy.get('#two').click();
    cy.get('#four').click();
    cy.get('#divide').click();
    cy.get('#six').click();
    cy.get('#equal').click();
    cy.get('#display').should("contain", "4");
    cy.get('#result').should("contain", "4");
  });
  //power
  it('should check that 3^3=27', () => {
    cy.get('#AC').click();
    cy.get('#three').click();
    cy.get('#power').click();
    cy.get('#three').click();
    cy.get('#equal').click();
    cy.get('#display').should("contain", "27");
    cy.get('#result').should("contain", "27");
  });
  //negative dot check
  it('should check no more than one dot can be input', () => {
    cy.get('#AC').click();
    cy.get('#three').click();
    cy.get('#dot').click();
    cy.get('#three').click();
    cy.get('#dot').click();
    cy.get('#display').should("contain", "3.3");
    cy.get('#display').should("not.contain", "3.3.");
    cy.get('#result').should("be.empty");
    cy.on('window:alert', (t) => {
      expect(t).to.contains("Number is already a decimal.");
    })
  });
});