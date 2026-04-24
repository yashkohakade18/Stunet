export const validateCollege = (data) => {
  const errors = {}
  if (!data.name?.trim())          errors.name     = 'College name is required'
  if (!data.location?.trim())      errors.location = 'Location is required'
  if (!data.minCET && data.minCET !== 0) errors.minCET = 'Min CET score is required'
  if (!data.maxCET && data.maxCET !== 0) errors.maxCET = 'Max CET score is required'
  if (data.minCET > data.maxCET)   errors.maxCET   = 'Max must be greater than Min'
  return { errors, valid: Object.keys(errors).length === 0 }
}

export const validateReview = (data) => {
  const errors = {}
  if (!data.text?.trim())            errors.text   = 'Review text is required'
  if (!data.rating || data.rating < 1) errors.rating = 'Please select a rating'
  return { errors, valid: Object.keys(errors).length === 0 }
}
