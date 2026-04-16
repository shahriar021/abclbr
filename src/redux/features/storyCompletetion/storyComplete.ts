import { baseApi } from "src/redux/createdApi/baseApi";

const storyCompletetionApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        saveToLibrary:builder.mutation({

            query:({storyId,token})=>{
                console.log(storyId)
                return{
                    url:`/api/ai/stories/${storyId}/save-to-library/`,
                    method:"POST",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            },
            invalidatesTags:['libray']
        })
    })
})

export const {useSaveToLibraryMutation}=storyCompletetionApi