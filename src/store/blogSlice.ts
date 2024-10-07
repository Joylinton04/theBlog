import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { blogs } from "./data";

interface Blog {
    id: string;
    title: string;
    slug: string;
    content: string;
    date: string;
    author: string;
    image: string;
    category: string;
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
    mostRecent: blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3),
}

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