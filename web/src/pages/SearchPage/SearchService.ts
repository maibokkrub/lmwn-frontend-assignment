import axiosInstance from "../../config/axios";
import { API } from "../../config/endpoint";
import { SearchItemModel } from "../../model/SearchItemModel";

export const fetchSearchByKeyword = async (keyword:string, setter:Function) => { 
    const result = await axiosInstance.get<SearchItemModel>(
        API.getPlacesByKeyword.replace(
            ':keyword', keyword
        )
    )
    console.log(result)
    setter(result.data)
}
