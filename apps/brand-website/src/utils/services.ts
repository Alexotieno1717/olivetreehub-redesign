import axios from "axios";
import { Attributes, CategoryData } from "../../types";
import { CMS_AUTH_HEADERS, CMS_URL } from "./cms";

export const axiosInstance = axios.create({
    baseURL: CMS_URL,
    headers: CMS_AUTH_HEADERS,
});

interface ICategories {
    data: Array<CategoryData>
}

interface ICategoriesWithArticles {
    data: Array<
        {
            id: number;
            attributes: {
                name: string;
                slug: string;
                createdAt: string;
                updatedAt: string;
                publishedAt: string;
                blogs: {
                  data: Array<{ id: number, attributes: Attributes }>
                }
            }
        }
    >
}

class ReactQueryService {
    /**
     * Get all categories
     * @returns 
     */
    async getAllCategories() {
        const { data } = await axiosInstance.get<ICategories>('/api/categories')
        return data
    }

    async getCategoryWithArticles() {


        const { data } = await axiosInstance.get<ICategoriesWithArticles>('/api/categories?populate=deep')

        return data

    }

    async getBlog(_pageNumber: number) {
        return null
    }
}


export default new ReactQueryService
