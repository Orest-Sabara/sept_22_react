import { axiosRequest } from "../../utils/axiosConfig";
import { requestEndpoints } from "../endpoint";

export const commentRequests = {
    getAll: () => axiosRequest.get(requestEndpoints.comments),
    addComment: (data) => axiosRequest.post(requestEndpoints.comments, data)
}