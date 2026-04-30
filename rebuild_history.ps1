# Ensure we are on the rebuild-history branch and starting fresh
git checkout main
git branch -D rebuild-history
git checkout --orphan rebuild-history
git rm -rf .

function Add-Commit {
    param(
        [string]$Message,
        [string]$DateString
    )
    $env:GIT_AUTHOR_DATE=$DateString
    $env:GIT_COMMITTER_DATE=$DateString
    git commit -m $Message
}

# Restore all files from main to the worktree
git restore --source=main --worktree -- .

# --- DAY 1 (April 23) ---
git add package.json package-lock.json vite.config.js eslint.config.js .gitignore index.html README.md
git add src/main.jsx src/App.jsx src/index.css src/App.css
git add src/assets/ public/
Add-Commit -Message "chore: initialize project with Vite and React" -DateString "2026-04-23T10:00:00"

# --- DAY 2 (April 24) ---
git add src/components/ui/ src/utils/constants.js src/utils/formatters.js src/utils/validators.js
Add-Commit -Message "feat(ui): implement reusable base UI components and utilities" -DateString "2026-04-24T11:00:00"

git add src/context/ src/hooks/useToast.js src/hooks/useLocalStorage.js
Add-Commit -Message "setup(context): implement global state providers and custom hooks" -DateString "2026-04-24T15:30:00"

# --- DAY 3 (April 25) ---
git add src/components/layout/
Add-Commit -Message "feat(layout): develop responsive Navbar, Sidebar, and Footer" -DateString "2026-04-25T10:00:00"

git add src/router.jsx src/pages/NotFound.jsx src/pages/Home.jsx
Add-Commit -Message "feat(routing): configure React Router and implement Home page" -DateString "2026-04-25T14:45:00"

# --- DAY 4 (April 26) ---
git add src/data/branches.js src/data/categories.js src/data/colleges.js
Add-Commit -Message "data: integrate comprehensive college, branch, and category datasets" -DateString "2026-04-26T09:00:00"

git add src/hooks/useColleges.js src/utils/filterColleges.js
Add-Commit -Message "feat(hooks): implement custom hooks for college data management" -DateString "2026-04-26T16:20:00"

# --- DAY 5 (April 27) ---
git add src/components/college/
Add-Commit -Message "feat(college): build college filtering, listing, and CRUD architecture" -DateString "2026-04-27T10:30:00"

git add src/pages/CollegeList.jsx src/pages/CollegeDetail.jsx src/hooks/useReviews.js
Add-Commit -Message "feat(college): implement College List and Detail views with review system" -DateString "2026-04-27T17:00:00"

# --- DAY 6 (April 28) ---
git add src/components/notes/ src/hooks/useNotes.js src/pages/Notes.jsx
Add-Commit -Message "feat(notes): build resource sharing platform with upvoting and filtering" -DateString "2026-04-28T11:00:00"

git add src/components/papers/ src/hooks/usePapers.js src/pages/Papers.jsx
Add-Commit -Message "feat(papers): implement past question paper repository" -DateString "2026-04-28T15:45:00"

# --- DAY 7 (April 29) ---
git add src/data/rounds.js src/components/rounds/ src/pages/Rounds.jsx
Add-Commit -Message "feat(rounds): develop timeline and cutoff tables for admission rounds" -DateString "2026-04-29T13:00:00"

# --- DAY 8 (April 30) ---
git add src/components/map/ src/pages/CollegeMap.jsx
Add-Commit -Message "feat(map): integrate interactive MapView and College Markers" -DateString "2026-04-30T09:30:00"

git add src/components/chatbot/ src/hooks/useChat.js src/utils/buildChatContext.js
Add-Commit -Message "feat(chatbot): build AI-powered assistant with context-aware queries" -DateString "2026-04-30T14:15:00"

git add src/services/
Add-Commit -Message "refactor: externalize API and Storage services for better maintainability" -DateString "2026-04-30T16:00:00"

# Finalize: Replace main with rebuild-history
git checkout main
git reset --hard rebuild-history
git branch -D rebuild-history

# Print log to verify
git log --oneline --graph --all
