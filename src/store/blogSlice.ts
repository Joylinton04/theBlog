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
    mostRecent1: Blog[];
}

const initialState: BlogState = {
    allBlogs: blogs,
    technology: blogs.filter(blog => blog.category === "Technology").reverse(),
    global: blogs.filter(blog => blog.category === "Global").reverse(),
    todaysPick: blogs.filter(blog => blog.category === "todays Pick"),
    mostRecent: blogs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).reverse().slice(0, 3),
    mostRecent1: blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4).reverse(),
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