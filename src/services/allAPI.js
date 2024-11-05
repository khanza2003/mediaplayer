// saveVideoAPI -called Add Component

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

//  save
 export const saveVideoAPI = async (videoDetails)=>{
 return await   commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)


}

// getAllVideosAPI -get http request callred by view component when component  displayed in browser inside its useeffect hook
export const getAllVideosAPI=async()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")
}
//savehistoryApi-post http reqst to http://localhost:3000/history calles by viewcard component when we play video
export const SaveHistoryAPI=async (historyDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/history`,historyDetails)
}

//getallhisory -get http reqst to http://localhost:3000/history called by history component when it see in browser
export const getAllHistoryAPI=async()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")
}
//deleteHistoryAPI -get http reqst to http://localhost:3000/history/id called by history component when user click on delete button
export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})
}
//removeVideoAPI -delete http reqst to http://localhost:3000/history called by videocard component when user click on delete button
export const removeVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}
//saveCategoryApi-post http reqst to http://localhost:3000/category calles by Category component when user click on add button
export const saveCategoryAPI=async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/categories`,categoryDetails)
}
//getallcategoryApI -get http reqst to http://localhost:3000/category called by history component when it see in browser
export const getAllCategoryAPI=async()=>{
    return await commonAPI("GET",`${SERVERURL}/categories`,{})
}
//deleteCategoryAPI -delete http reqst to http://localhost:3000/category/id called by Category component when user click on delete button
export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/categories/${id}`,{})
}
//updateCategoryAPI-put http rqst to http://localhost:3000/categories/id called by Category component when video drop over caregory

export const updateCategoryAPI=async(categoryDetails)=>{
    return await commonAPI("PUT",`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}