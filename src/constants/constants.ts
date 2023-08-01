import { CategoryType } from "../types/types";

export const NOTES_TABLE_STRING_HEADERS = ["Name", "Created", "Category", "Content", "Dates"];

export const SUMMARY_TABLE_HEADERS = ["Note category", "Active", "Archived"];

export const NOTES_CATEGORIES: CategoryType[] = ["Task", "Plan", "Random Thought", "Idea"];

export const REGEX_FOR_MATCH_DATES = /\d{1,2}([\/.-])\d{1,2}\1\d{2,4}/g;
