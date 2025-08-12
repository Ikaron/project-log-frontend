import {defineStore} from 'pinia'
import {type Project, type Note, getProjects, addProject, updateProject, deleteProject} from "../api.ts";

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [] as Project[],
        loading: false,
        error: null as (string | null),
        selectedProjectId: null as (number | null)
    }),
    actions: {
        async fetchProjects() {
            this.loading = true
            this.error = null
            try {
                this.projects = (await getProjects())!
            } catch (e: any) {
                this.error = e.message || 'Failed to fetch projects'
            } finally {
                this.loading = false
            }
        },
        async addProject(project: Partial<Project>) {
            return await addProject(project)
        },
        async updateProject(id: number, updates: Partial<Project>) {
            if (id < 0) {
                const project = await this.addProject(updates)
                updates.name = ""
                updates.description = ""
                if (project != null) {
                    this.selectedProjectId = project.id
                    this.projects.push(project)
                }
            } else
                await updateProject(id, updates)
        },
        async deleteProject(id: number) {
            if (id < 0)
                return null

            await deleteProject(id)

            for (let i = this.projects.length - 1; i >= 0; --i)
                if (this.projects[i].id == id)
                    this.projects.splice(i, 1)
        },

        async addNote(projectId: number, note: Note) { /* ... */
        },
        async updateNote(projectId: number, noteId: number, updates: Partial<Note>) { /* ... */
        },
        async deleteNote(projectId: number, noteId: number) { /* ... */
        }
    }
})