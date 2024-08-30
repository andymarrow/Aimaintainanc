import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Search problems by title from the ProblemSearch model
export const searchProblems = async (req: Request, res: Response) => {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "Query parameter is required" });
    }

    try {
        const results = await prisma.problemSearch.findMany({
            where: {
                title: {
                    contains: query.toLowerCase(), // Convert the query to lowercase
                },
            },
            select: {
                solution_id: true,
                title: true,
                video_url: true,
                description: true,
                created_at: true,
            },
        });

        if (results.length === 0) {
            return res.status(404).json({ message: "No results found" });
        }

        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching search results:", error);
        res.status(500).json({ error: "An error occurred while searching for problems" });
    }
};


// Search a problem by ID from the ProblemSearch model
export const searchProblemById = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "ID parameter is required" });
    }

    try {
        const result = await prisma.problemSearch.findUnique({
            where: {
                solution_id: parseInt(id, 10), // Ensure the ID is an integer
            },
            select: {
                solution_id: true,
                title: true,
                video_url: true,
                description: true,
                created_at: true,
            },
        });

        if (!result) {
            return res.status(404).json({ message: "Problem not found" });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching problem:", error);
        res.status(500).json({ error: "An error occurred while retrieving the problem" });
    }
};
