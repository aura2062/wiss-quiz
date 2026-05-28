// Quiz.test.jsx
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { userEvent } from "@testing-library/user-event";
import Quiz from "./Quiz";

// Mock fetch globally
global.fetch = vi.fn();

describe("Quiz", () => {
    it("answer first question and click next to go get to question 2", async () => {
        const user = userEvent.setup();
        
        const mockQuestions = [{
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

        // Mock the fetch response
        vi.mocked(fetch).mockResolvedValueOnce({
            ok: true,
            json: async () => mockQuestions,
        });

        render(<Quiz />);

        // Wait for loading to finish
        await waitFor(() => {
            expect(screen.getByText(mockQuestions[0].text)).toBeVisible();
        });

        await user.click(screen.getByText(mockQuestions[0].correctAnswer));
        await user.click(screen.getByText("naechste Frage"));

        expect(screen.getByText(mockQuestions[1].text)).toBeVisible();
    });
});