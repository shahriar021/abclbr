import { baseApi } from "src/redux/createdApi/baseApi";

const profileApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({

            query: (token) => {
                return {
                    url: "/api/auth/profile/",
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            },
            providesTags:['profile']
        }),

        updateProfile:builder.mutation({

            query:({formData,token})=>{
                console.log(formData,token,"in redux.")
                return{
                    url:"/api/auth/profile/",
                    method:"PUT",
                    headers:{
                        Authorization:`Bearer ${token}`
                    },
                    body:formData
                }
            },
            invalidatesTags:['profile']
        }),

        postReport:builder.mutation({

            query:({token,formData})=>{
                
                return{
                    url:`/api/support/reports/`,
                    method:"POST",
                    headers:{
                        Authorization:`Bearer ${token}`
                    },
                    body:formData
                }
            }
        }),

        getTerms:builder.query({

            query:(token)=>{

                return{
                    url:`/api/support/legal/public/terms_conditions/`,
                    method:"GET",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            }
        }),

        getPrivacys:builder.query({

            query:(token)=>{

                return{
                    url:`/api/support/legal/public/privacy_policy/`,
                    method:"GET",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            }
        })
    })
})

export const { useGetProfileQuery,useUpdateProfileMutation,usePostReportMutation,useGetTermsQuery,useGetPrivacysQuery } = profileApi;