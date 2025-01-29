describe("Order Form Tests", () => {
  beforeEach(() => {
    cy.visit("/order");
  });

  it("should allow user to enter name", () => {
    cy.get('input[name="personName"]').type("Test Name");
    cy.get('input[name="personName"]').should("have.value", "Test Name");
  });

  it("should allow selecting multiple toppings", () => {
    cy.get('input[type="checkbox"][name="topping"]').check([
      "Pepperoni",
      "Mısır",
      "Ananas",
      "Sosis",
    ]);
    cy.get('input[type="checkbox"][name="topping"]:checked').should(
      "have.length",
      4
    );
  });

  it("should submit the form successfully", () => {
    cy.get('input[name="personName"]').type("Test Name");
    cy.get('input[type="radio"][name="size"]').first().check();
    cy.get('select[name="crust"]').select("Orta");
    cy.get('input[type="checkbox"][name="topping"]').check([
      "Pepperoni",
      "Mısır",
      "Ananas",
      "Sosis",
    ]);
    cy.get(".order-button").click();

    cy.intercept("POST", "https://reqres.in/api/pizza").as("postOrder");
    cy.wait("@postOrder").its("response.statusCode").should("eq", 201);
  });
});
