import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { blogs } from "./data";

export interface Blog {
    id: string;
    title: string;
    slug: string;
    content: string;
    date: Date;
    author: string;
    image: string;
    category: string;
    // tags: string[];
}

interface BlogState {
    allBlogs: Blog[];
    technology: Blog[];
    global: Blog[];
    todaysPick: Blog[];
    mostRecent: Blog[];
}

const initialState: BlogState = {
    allBlogs: blogs,
    technology: blogs.filter(blog => blog.category === "Technology"),
    global: blogs.filter(blog => blog.category === "Global"),
    todaysPick: blogs.filter(blog => blog.category === "todays Pick"),
    mostRecent: blogs.slice().sort((a, b) => a.date.getTime() - b.date.getTime()).slice(0, 4)
};

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        addBlog(state, action: PayloadAction<Blog>) {
            state.allBlogs.push(action.payload);
            
            if (action.payload.category === "Technology") {
                state.technology.push(action.payload);
            } else if (action.payload.category === "Global") {
                state.global.push(action.payload);
            }
        },
    },
});

export default blogSlice.reducer;
export const { addBlog } = blogSlice.actions;