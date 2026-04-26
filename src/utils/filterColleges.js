export function filterColleges(colleges, { query = '', cetScore = '', branch = '', location = '', type = '' }) {
  return colleges.filter((c) => {
    const matchQuery =
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.location.toLowerCase().includes(query.toLowerCase())

    const matchCET =
      cetScore === '' || (Number(cetScore) >= c.minCET && Number(cetScore) <= c.maxCET)

    const matchBranch = branch === '' || c.branches?.includes(branch)

    const matchLocation = location === '' || c.location === location

    const matchType = type === '' || c.type === type

    return matchQuery && matchCET && matchBranch && matchLocation && matchType
  })
}
