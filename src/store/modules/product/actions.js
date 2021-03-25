import router from "@/router";
import axios from 'axios';
let response;
export default {
    async getAllProducts(context) {
        console.log("inside getAllProducts");
        context.rootState.spinnerFlag = true;
        try {
            response = await axios.get('/products');
            console.log("getAllProducts products:");
            console.log(response.data["data"]);
            return response.data["data"]
        } catch (e) {
            console.log("getAllProducts catch error: ", response.data["error"]);
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
}
