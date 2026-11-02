import { useQuery  } from "react-query";
import reactQueryService from '../utils/services'

export const useAllCategories = () => {
    const _query = {
        queryKey: ['categories'],
        queryFn: () => reactQueryService.getAllCategories()
    }
    return useQuery(_query)
}

export const useAllCategoriesWithArticles = () => {
    const _query = {
        queryKey: ['categoriesWithArticles'],
        queryFn: () => reactQueryService.getCategoryWithArticles()
    }
    return useQuery(_query)
}

