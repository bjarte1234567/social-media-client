//TESTING WIKIPEDIA FOR NOROFF H1
// describe("no.wikipedia.org", () => {
//     it("can search for Noroff", () => {
//       cy.visit("https://no.wikipedia.org");
//       cy.get("input#searchInput").type("Noroff{enter}", { delay: 500 });
//       cy.get('h1').contains("Noroff")
//     })
//   })
////////////////////////////////////
//TESTING TIGHTS.NO FOR KREATIN SEARCH.
describe('www.tights.no', () => {
  it('can search for kreatin', () => {
    cy.visit('https://www.tights.no/');
    cy.get('input#autocomplete-0-input').type('kreatin{enter}', { delay: 500 });
    cy.get('.search-results').should('contain', 'kreatin');
  });
});
