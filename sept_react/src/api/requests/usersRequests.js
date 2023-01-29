import { axiosRequest } from "../../utils/axiosConfig";
import { requestEndpoints } from "../endpoint";

export const usersRequests = {
    getAll: () => axiosRequest.get(requestEndpoints.users),
    createUser: (data) => axiosRequest.post(requestEndpoints.users, data)
}