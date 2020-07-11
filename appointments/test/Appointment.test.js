import React from "react";
import ReactDOM from "react-dom";
import { Appointment } from "../src/Appointment";

let customer;
let container;

describe("Appointment", () => {
  beforeEach(() => {
    container = document.createElement("div");
  });

  it("renders the customer first name", () => {
    customer = { firstName: "Ashley" };
    const component = <Appointment customer={customer} />;

    ReactDOM.render(component, container);

    expect(container.textContent).toMatch("Ashley");
  });
});

describe("Appointment", () => {
  it("renders another customer first name", () => {
    customer = { firstName: "Jordan" };
    const component = <Appointment customer={customer} />;

    ReactDOM.render(component, container);

    expect(container.textContent).toMatch("Jordan");
  });
});
