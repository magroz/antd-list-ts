import {makeAutoObservable, reaction} from "mobx";
import {PostDTO} from "../dto/posts";
import {UserDTO} from "../dto/user";
import {jsonPlaceholderAPI} from "../api/service";
import {AxiosResponse} from "axios";

export type UserType = number | null

class Data {
    isLoading = false
    isLoadingUser = false
    isModalVisible = false
    posts: PostDTO[] = []
    user: UserDTO | null = null
    userId: UserType = null

    constructor() {
        makeAutoObservable(this)
        reaction(() => this.userId, (userId: UserType, prevUserId: UserType) => {
            if (userId !== prevUserId) {
                this.user = null
                this.fetchUser()
            }
        })
    }

    setUserId = (userId: number) => {
        this.userId = userId
    }

    showModalUser = (userId: number) => {
        this.setUserId(userId)
        this.showModal()
    }

    showModal = () => {
        this.isModalVisible = true
    }

    hideModal = () => {
        this.isModalVisible = false
    }

    fetchPosts() {
        this.isLoading = true
        jsonPlaceholderAPI
            .getAllPosts()
            .then((response: AxiosResponse<PostDTO[]>) => this.posts = response.data)
            .catch(console.error)
            .finally(() => this.isLoading = false)
    }

    fetchUser() {
        this.isLoadingUser = true
        jsonPlaceholderAPI
            .getUserById(this.userId)
            .then((response: AxiosResponse<UserDTO>) => this.user = response.data)
            .catch(console.error)
            .finally(() => this.isLoadingUser = false)
    }
}

export default new Data()