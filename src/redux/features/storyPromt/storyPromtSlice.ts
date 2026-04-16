import { createSlice } from "@reduxjs/toolkit";
import { StoryInfo } from "src/types/ViewStory";

interface StoryPromptState {
  hero: {
    child_name: string | null;
    age: number | null;
    pronouns: string | null;
    favorite_animal: string | null;
    favorite_color: string | null;
  };
  theme: string | null;
  customTheme: string | null;
  art_style: string | null;
  language: string | null;
  voice: string | null;
  length: string | null;
  info: StoryInfo | null;
  payment:string | null;
}


const initialState:StoryPromptState = {
    hero: {
        child_name: null,
        age: null,
        pronouns: null,
        favorite_animal: null,
        favorite_color: null,
    },
    theme: null,
    art_style: null,
    language: null,
    voice:null,
    length: null,
    info:null,
    payment:null,
    customTheme:null
};

const storyPromptSlice = createSlice({
    name: "storyPrompt",
    initialState,
    reducers: {
       
        setHeroDetails: (state, action) => {
            state.hero = action.payload;
        },
        
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        
        setArtStyle: (state, action) => {
            state.art_style = action.payload;
        },
       
        setLanguage: (state, action) => {
            state.language = action.payload;
        },

        setVoice:(state,action)=>{
            state.voice = action.payload
        },
        
        setLength: (state, action) => {
            state.length = action.payload;
        },
        setInfo:(state,action)=>{
            state.info=action.payload
        },
        setPayment:(state,action)=>{
            state.payment=action.payload
        },
        setCustomTheme:(state,action)=>{
            state.customTheme=action.payload
        }
    },
});

export const {
    setHeroDetails,
    setTheme,
    setArtStyle,
    setLanguage,
    setVoice,
    setLength,
    setInfo,
    setPayment,
    setCustomTheme
} = storyPromptSlice.actions;

export default storyPromptSlice.reducer;
