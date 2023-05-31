import { Story } from "../models/Story";
import { createContext } from "react";

export interface StoryContextModel {
    stories: Story[],
    addStory: (story: Story) => void
}

const defaultValues: StoryContextModel = {
    stories: [],
    addStory: () => { }
}

export const StoryContext = createContext(defaultValues)