import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { userEvent } from "@testing-library/user-event";
import Quiz from "./Quiz";


describe("Quiz", () => {
    it("answer first question and click next to go get to question 2", async () => {
        const user = userEvent.setup();
        
        const questions = [{
            id: 0,
            text: "Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?",
            answers: ["Alfa", "Bravo", "Charlie", "Meow"],
            correctAnswer: "Alfa"
            }, {
            id: 1,
            text: "Was ist Blau?",
            answers: ["Schluempfe", "das Weltall", "die Sonne", "nichts"],
            correctAnswer: "Schluempfe"
        }];


        render(<Quiz />);

        expect(screen.getByText(questions[0].text)).toBeVisible();

        await user.click(screen.getByText(questions[0].correctAnswer));

        await user.click(screen.getByText("naechste Frage"));

        expect(screen.getByText(questions[1].text)).toBeVisible();
    });

    
});