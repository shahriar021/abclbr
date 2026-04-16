import { baseApi } from "src/redux/createdApi/baseApi"

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (loginData) => {
                
                return {
                    url: "/api/auth/login/",
                    method: "POST",
                    body: loginData
                }
                
            }
        }),

        signUp: builder.mutation({
            query: (signData) => {
                return {
                    url: "/api/auth/signup/",
                    method: "POST",
                    body: signData
                }
                
            }
        }),

        forgetPass:builder.mutation({
            query:(info)=>{
                return {
                    url:"/api/auth/password-reset/",
                    method:"POST",
                    body:info
                }
            }
        }),

        signUpGoogle:builder.mutation({
            query:()=>{
                return {
                    url:"/api/auth/google/",
                    method:"POST"
                }
            }
        })
    })
})

export const { useLoginMutation,useSignUpMutation,useForgetPassMutation,useSignUpGoogleMutation } = authApi