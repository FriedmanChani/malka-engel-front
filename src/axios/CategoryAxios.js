import axios from 'axios';


const API_BASE_URL = `${process.env.REACT_APP_API_URL}/api/Categories/`

export const GetAllCategories = async () => {
    debugger
    try {
        const response = await axios.get(`${API_BASE_URL}GetAllCategories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all categories:', error);
        throw error;
    }
}

export const addCategory = async (category) => {
    debugger
    try {
        const response = await axios.post(`${API_BASE_URL}AddCategory`, category);
        return response;
    } catch (error) {
        console.error('Error adding category :', error);
        throw error;
    }
};

export const updateCategory = async (idCategory, category) => {
    try {
        debugger
        const response = await axios.put(`${API_BASE_URL}UpdateCategory/${idCategory}`, category);
        return response.data;
    } catch (error) {
        console.error('Error update category :', error);
        throw error;
    }
};


export const GetCategoryByCategoryId = async (categoryId) => {
    try {
        debugger
        const response = await axios.get(`${API_BASE_URL}GetCategoryById/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category by id:', error);
        throw error;
    }
};

// export const GetUpCategoriesByCategoryID = async (categoryId) => {
//     try {
//         debugger
//         const response = await axios.get(`${API_BASE_URL}GetUpCategoriesByCategoryID/${categoryId}`);
//         return response.data;
//     } catch (error) {
//         alert("errrrrrrrrrrrrrrrrrrrrrrrrrr!")
//         console.error('Error fetching up categories by id:', error);
//         throw error;
//     }
// }
export const GetAllSubcategoriesByCategoryID = async (categoryId) => {

    debugger
    try {
        const response = await axios.get(`${API_BASE_URL}GetSubcategories/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching subcategories by category ID:', error);
        throw error;
    }
}