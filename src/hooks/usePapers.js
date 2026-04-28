import { useLocalStorage } from './useLocalStorage'

export function usePapers() {
  const [papers, setPapers] = useLocalStorage('studinfo_papers', [])

  const addPaper = (paper) => {
    setPapers([{ ...paper, id: Date.now().toString(), uploadedAt: new Date().toISOString() }, ...papers])
  }

  const deletePaper = (id) => setPapers(papers.filter(p => p.id !== id))

  return { papers, addPaper, deletePaper }
}
