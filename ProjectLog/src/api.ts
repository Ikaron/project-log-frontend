import axios, {type AxiosError, type AxiosInstance, type AxiosResponse, isAxiosError} from 'axios'

let cached_api: AxiosInstance | null = null

function api() {
    if (cached_api === null) {
        cached_api = axios.create({
            baseURL: API_OVERRIDE_URL || import.meta.env.VITE_API_BASE_URL || 'https://localhost:8081/api',
            headers: {'Content-Type': 'application/json'},
        })
    }

    return cached_api
}

export interface Project {
    id: number
    name: string
    description: string
    createdAt: Date
}

export interface Note {
    id: number
}

function logError(err: any) {

    console.log(err)
}

// TODO: Set up forwarding of errors (right now just returns null - Needed in getProjects to show error in UI)
async function axiosCall<T>(func: (api: AxiosInstance) => Promise<AxiosResponse<T, any>>) {
    try {
        const {data} = await func(api())
        // TODO: Add some sort of data validator here
        return data
    } catch (error) {
        if (isAxiosError(error)) {
            const err: AxiosError<T> = error;
            logError(err.toJSON());
        } else
            logError(error);
        return null
    }
}

export async function getProjects() {
    return await axiosCall(api => api.get<Project[]>('/projects'))
}

export async function addProject(project: Partial<Project>) {
    if (!project.name && !project.description)
        return null
    return await axiosCall(api => api.post<Project>('/projects', project))
}

export async function updateProject(id: number, updates: Partial<Project>) {
    return await axiosCall(api => api.put('/projects/' + id, updates))
}

export async function deleteProject(id: number) {
    return await axiosCall(api => api.delete('/projects/' + id))
}