/// <reference types="cypress" />
const path = require("path");


describe('Simple E2E testing of DataPLAN', () => {
  beforeEach(() => {

    cy.visit('http://127.0.0.1:8000/')
  })

  it('Check general replaced text and converted checkbox options', () => {
    cy.get('.text-warning').should('have.length', 40)
    cy.get('.checkboxConverted').first().should('have.text', "  Example Project  ")
    cy.get('.checkboxConverted').should('have.length', 115)
  })

  it('$_PROJECTNAME can be replaced', () => {
    const newItem = 'ProjectName'
    cy.get('#input_projectname').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true})
    cy.get('[name=PROJECTNAME-to-]').each(($el, index, $list) =>{
      cy.wrap($el).should('have.text', newItem)
    })
  })
  it('$_STUDYOBJECT can be replaced', () => {
    const newItem = 'Study Object'
    cy.get('#input_studyobject').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true})
    cy.get('[name=STUDYOBJECT-to-]').each(($el, index, $list) =>{
      cy.wrap($el).should('have.text', newItem)
    })
  })

  it('$_PROJECTAIM can be replaced', () => {
    const newItem = 'aims at project aim';
    cy.get('#input_projectaim').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=PROJECTAIM-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_DMPVERSION can be replaced', () => {
    const newItem = '1.0';
    cy.get('#input_dmpversion').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=DMPVERSION-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_USERNAME can be replaced', () => {
    const newItem = 'Example User ABC';
    cy.get('#input_username').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=USERNAME-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_EMAIL can be replaced', () => {
    const newItem = 'Some email';
    cy.get('#input_email').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=EMAIL-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_DATAOFFICER can be replaced', () => {
    const newItem = 'Example data officer name';
    cy.get('#input_dataofficer').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=DATAOFFICER-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  it('$_DATAUTILITY can be replaced', () => {
    const newItem = 'Data Utility';
    cy.get('#input_datautility').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=DATAUTILITY-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_UPDATEMONTH can be replaced', () => {
    const newItem = 'A Simple Example Month';
    cy.get('#input_updatemonth').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=UPDATEMONTH-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_PREVIOUSPROJECTS can be replaced', () => {
    const newItem = 'Some related Previous Project Name';
    cy.get('#input_previousprojects').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=PREVIOUSPROJECTS-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_PROPRIETARY can be replaced', () => {
    const newItem = 'A single Proprietary Software';
    cy.get('#input_proprietary').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=PROPRIETARY-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_RAWDATA can be replaced', () => {
    const newItem = 'Raw Data Size';
    cy.get('#input_rawdata').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=RAWDATA-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_DERIVEDDATA can be replaced', () => {
    const newItem = 'Derived Data Size';
    cy.get('#input_deriveddata').click().wait(200).type(`{selectAll}{del}${newItem}{tab}`, {force:true});
    cy.get('[name=DERIVEDDATA-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_FUNDINGPROGRAMME can be replaced', () => {
    const newItem = 'Funding Programme';
    cy.get('#input_fundingprogramme').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=FUNDINGPROGRAMME-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_CREATIONDATE can be replaced', () => {
    const newItem = 'xxxx-xx-xx';
    cy.get('#input_creationdate').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=CREATIONDATE-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_MODIFICATIONDATE can be replaced', () => {
    const newItem = 'xxxx-xx-xx';
    cy.get('#input_modificationdate').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=MODIFICATIONDATE-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_OTHERSTANDARDINPUT can be replaced', () => {
    const newItem = 'other standards';
    cy.get('#input_otherstandardinput').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=OTHERSTANDARDINPUT-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_OTHEREP can be replaced', () => {
    const newItem = 'Other repositories';
    cy.get('#input_otherep').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=OTHEREP-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_PARTNERS can be replaced', () => {
    const newItem = 'partner name';
    cy.get('#input_partners').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=PARTNERS-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });
  
  it('$_ADDPROJECTCOORDINATOR can be replaced', () => {
    const newItem = 'project coordinator';
    cy.get('#input_addprojectcoordinator').click().wait(200).type(`{selectAll}{del}${newItem}{enter}`, {force:true});
    cy.get('[name=ADDPROJECTCOORDINATOR-to-]').each(($el) => {
      cy.wrap($el).should('have.text', newItem);
    });
  });

  
  it('Eu project can be selected', () => {
    cy.contains('EU project.')
      .parent()
      .find('input[type=checkbox]')
      .check()

    cy.get('.check_eu')
      .should('have.text', ' Example Project is part of the Open Data Initiative (ODI) of the EU.\n                   ')
  })
  // context('with a checked task', () => {
  //   beforeEach(() => {
  //     // We'll take the command we used above to check off an element
  //     // Since we want to perform multiple tests that start with checking
  //     // one element, we put it in the beforeEach hook
  //     // so that it runs at the start of every test.
  //     cy.contains('Pay electric bill')
  //       .parent()
  //       .find('input[type=checkbox]')
  //       .check()
  //   })

  //   it('can filter for uncompleted tasks', () => {
  //     // We'll click on the "active" button in order to
  //     // display only incomplete items
  //     cy.contains('Active').click()

  //     // After filtering, we can assert that there is only the one
  //     // incomplete item in the list.
  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .first()
  //       .should('have.text', 'Walk the dog')

  //     // For good measure, let's also assert that the task we checked off
  //     // does not exist on the page.
  //     cy.contains('Pay electric bill').should('not.exist')
  //   })

  //   it('can filter for completed tasks', () => {
  //     // We can perform similar steps as the test above to ensure
  //     // that only completed tasks are shown
  //     cy.contains('Completed').click()

  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .first()
  //       .should('have.text', 'Pay electric bill')

  //     cy.contains('Walk the dog').should('not.exist')
  //   })

  //   it('can delete all completed tasks', () => {
  //     // First, let's click the "Clear completed" button
  //     // `contains` is actually serving two purposes here.
  //     // First, it's ensuring that the button exists within the dom.
  //     // This button only appears when at least one task is checked
  //     // so this command is implicitly verifying that it does exist.
  //     // Second, it selects the button so we can click it.
  //     cy.contains('Clear completed').click()

  //     // Then we can make sure that there is only one element
  //     // in the list and our element does not exist
  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .should('not.have.text', 'Pay electric bill')

  //     // Finally, make sure that the clear button no longer exists.
  //     cy.contains('Clear completed').should('not.exist')
  //   })
  // })
  it('check if download JSON works', () =>{
    
    const downloadsFolder = Cypress.config("downloadsFolder");
    //cy.task('deleteFolder', downloadsFolder);

    cy.get("[id='json_save']").last().click({force: true});

    cy.readFile(path.join(downloadsFolder, "DataPLAN_DMP.json")).should("exist");
  


});

it('check if download docx works', () =>{
    
    const downloadsFolder = Cypress.config("downloadsFolder");
    //cy.task('deleteFolder', downloadsFolder);

    cy.get("[id='docx_save_force']").last().click({force: true});

    cy.readFile(path.join(downloadsFolder, "DMP-DataPLAN.doc")).should("exist");
  


})



})
