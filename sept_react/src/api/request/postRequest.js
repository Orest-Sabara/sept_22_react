import {axiosRequest} from "../../utils/axiosConfig";
import {requestsLinks} from "../endpoints";

export const postRequest = {
    getPostById: (id) => axiosRequest.get(requestsLinks.postById(id))
}