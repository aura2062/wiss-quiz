import { describe, it, expect, vi } from "vitest";
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

    it("executes onClick function when clicked", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();
        const buttonText = "Klicke mich für funktion zu passieren";

        render(<Button text={buttonText} onClick={handleClick} />);
    
        await user.click(screen.getByText(buttonText));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("is deactivated when disabled is true", () => {
        render(<Button text="test" onClick={vi.fn} disabled={true}/>);

        expect(screen.getByText("test")).toBeDisabled();
    });
});

    
