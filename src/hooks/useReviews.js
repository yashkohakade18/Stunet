import { useLocalStorage } from './useLocalStorage'

export function useReviews(collegeId) {
  const [allReviews, setAllReviews] = useLocalStorage('studinfo_reviews', {})
  const reviews = allReviews[collegeId] || []

  const addReview = (review) => {
    const newReview = { ...review, id: Date.now().toString(), date: new Date().toISOString() }
    setAllReviews({ ...allReviews, [collegeId]: [newReview, ...reviews] })
  }

  const deleteReview = (reviewId) => {
    setAllReviews({ ...allReviews, [collegeId]: reviews.filter(r => r.id !== reviewId) })
  }

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0

  return { reviews, addReview, deleteReview, avgRating }
}
