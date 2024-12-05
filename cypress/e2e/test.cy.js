/// <reference types="cypress" />
const path = require("path");


describe('Simple E2E testing of DataPLAN', () => {
  beforeEach(() => {

    cy.visit('http://127.0.0.1:8000/')
  })

  
  // it('$_PREVIOUSPROJECTS can be replaced', () => {
  //   const newItem = 'Some related Previous Project Name';
  //   cy.get('#check_previousprojects').click();
  //   cy.get('#input_previousprojects').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
  //   cy.get('[name=PREVIOUSPROJECTS-to-]').each(($el) => {
  //     cy.wrap($el).should('have.text', newItem);
  //   });
  // });

  // it('$_OTHERSTANDARDINPUT can be replaced', () => {
  //   const newItem = 'other standards';
  //   cy.get('#check_otherstandards').click();
  //   cy.get('#input_otherstandardinput').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
  //   cy.get('[name=OTHERSTANDARDINPUT-to-]').each(($el) => {
  //     cy.wrap($el).should('have.text', newItem);
  //   });
  // });


  it('the data is protected', () => {
    cy.get("#check_protect")
      .check()

    cy.get('.check_protect')
      .should('have.text', '&nbsp;We support open and FAIR data, however, we also consider the need to protect individual data sets.')
  })

  it('the data is EU', () => {
    cy.get("#check_eu")
      .check()

    cy.get('.check_eu')
      .should('have.text', '&nbsp;Example Project is part of the Open Data Initiative (ODI) of the EU.')

  })










})