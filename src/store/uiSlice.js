import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expandedProjects: [], // Array of project IDs that are expanded
  activeFilter: null, // Current tech filter
  activeCategory: null, // Current project category
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleProject: (state, action) => {
      const projectId = action.payload
      if (state.expandedProjects.includes(projectId)) {
        state.expandedProjects = state.expandedProjects.filter(id => id !== projectId)
      } else {
        state.expandedProjects.push(projectId)
      }
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload
    },
    clearFilters: (state) => {
      state.activeFilter = null
      state.activeCategory = null
    },
  },
})

export const { toggleProject, setActiveFilter, setActiveCategory, clearFilters } = uiSlice.actions
export default uiSlice.reducer