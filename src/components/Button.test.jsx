import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Button from "./Button";

describe("Button component", () => {
    it("exists with correct Text when created", () => {
        
        render(<Button text="Klick mich" />);
        
        const button = screen.getByText("Klick mich");

        expect(button).toBeInTheDocument();

        const button1 = screen.getByRole("button");

        expect(button1).toBeInTheDocument();
    });
});