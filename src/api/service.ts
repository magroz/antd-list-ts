import axios, {AxiosPromise} from "axios"
import {PostDTO} from "../dto/posts";
import {UserDTO} from "../dto/user";
import {UserType} from "../store/data";

const REST_API_ROOT = "https://jsonplaceholder.typicode.com"

const axiosBase = axios.create({
    baseURL: REST_API_ROOT
})

export const jsonPlaceholderAPI = {
    getAllPosts: (): AxiosPromise<PostDTO[]> => axiosBase.get(`/posts`),

    getUserById: (userId: UserType): AxiosPromise<UserDTO> => axiosBase.get(`/users/` + userId),
}

