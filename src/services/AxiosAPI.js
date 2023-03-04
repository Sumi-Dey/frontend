import instance from "../utils/BaseUrl";

export const getAllCityUrl = ()=> instance.get("/getAllCity")
export const getAllCategoryCityUrl = ()=> instance.get("/hotel/getAllCategoryCity")
export const countByCityUrl = ()=> instance.get("/hotel/countByCity?city=Darjeeling&limit=5")
export const getByFeatureUrl = ()=> instance.get("/hotel/getByFeature?feature=true&limit=4")