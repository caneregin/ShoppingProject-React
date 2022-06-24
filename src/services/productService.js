import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getAll");
    }
    getProductWithCategoryDetails(){
        return axios.get("http://localhost:8080/api/products/getProductWithCategoryDetails");
    }
    getProductWithCategoryDetailsAccordingToCategoryName(categoryName){
        return axios.get("http://localhost:8080/api/products/getProductWithCategoryDetailsAccordingToCategoryName?categoryName="+categoryName);
    }
    getByProductName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName);
    }
}