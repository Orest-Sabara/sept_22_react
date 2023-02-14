import {apiService} from "./apiService";
import {IStarlink} from "../interfaces/userInterface";
import {Ires} from "../interfaces/responceInterface";

const userService = {
    getAll:():Ires<IStarlink> => apiService.get('/users')
}

export {
    userService
}