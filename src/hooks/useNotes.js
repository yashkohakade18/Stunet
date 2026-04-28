import { useLocalStorage } from './useLocalStorage'

export function useNotes() {
  const [notes, setNotes] = useLocalStorage('studinfo_notes', [])

  const addNote = (note) => {
    setNotes([{ ...note, id: Date.now().toString(), uploadedAt: new Date().toISOString(), upvotes: 0 }, ...notes])
  }

  const deleteNote = (id) => setNotes(notes.filter(n => n.id !== id))

  const upvoteNote = (id) => {
    setNotes(notes.map(n => n.id === id ? { ...n, upvotes: (n.upvotes || 0) + 1 } : n))
  }

  return { notes, addNote, deleteNote, upvoteNote }
}
