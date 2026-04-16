import { baseApi } from "src/redux/createdApi/baseApi";

const generateOptApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getGenerateOpt:builder.query({
            query:(token)=>{

                return{
                    url:`/api/ai/generation-options/`,
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            }
        })
    })
})

export const {useGetGenerateOptQuery}=generateOptApi;