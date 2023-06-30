describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5173");
    cy.contains("Gestion Stock");
    cy.contains("main", "Gérer efficacement votre stock");
    cy.contains("a", "Voir le stock").click();
    cy.get('a[title="Ajouter"]').click();
    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    const name = `outil-${id}`;
    cy.get("input").eq(0).clear().type(name);
    cy.get("input").eq(1).clear().type("123.50");
    cy.get("input").eq(2).clear().type("34");
    cy.contains("button", "Ajouter").click();

    cy.contains("table tbody tr td", name).click();

    cy.get("button[title='Supprimer']").click();
  });
});
