import axios from "axios"

export default class UserService{
    getByUserName(userName){
        return axios.get("http://localhost:8080/auth/"+userName);
    }
    getByUserId(userid){
        return axios.get("http://localhost:8080/api/users/findByUserid?userid="+userid);
    }
    getByUserIdCurrentCart(userid){
        return axios.get("http://localhost:8080/api/users/findByUseridForCurrentCart?userid="+userid);
    }
    addByProductId(productid){
        return axios.get("http://localhost:8080/api/users/addItem?userid="+productid);
    }
    findByOrderid(userid){
        return axios.get("http://localhost:8080/api/orders/findByOrderid?userid="+userid);
    }
}