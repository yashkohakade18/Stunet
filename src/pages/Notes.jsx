import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useNotes } from '../hooks/useNotes';
import { FileText, Download, ThumbsUp, Search, Plus, Filter, Book, Share2 } from 'lucide-react';

const INITIAL_NOTES = [
  { id: '1', title: 'Data Structures Quick Ref', branch: 'Computer Engineering', semester: 3, user: 'John Doe', upvotes: 42, size: '1.2 MB' },
  { id: '2', title: 'Thermodynamics Formulas', branch: 'Mechanical Engineering', semester: 4, user: 'Sarah Smith', upvotes: 28, size: '0.8 MB' },
  { id: '3', title: 'Network Security Basics', branch: 'Information Technology', semester: 6, user: 'Mike Ross', upvotes: 56, size: '2.5 MB' },
  { id: '4', title: 'Calculus III Handout', branch: 'All Branches', semester: 2, user: 'Prof. Wilson', upvotes: 120, size: '4.1 MB' },
];

export default function Notes() {
  const { notes, addNote, upvoteNote } = useNotes();
  const [search, setSearch] = useState('');
  const [activeBranch, setActiveBranch] = useState('All');

  const displayNotes = notes.length > 0 ? notes : INITIAL_NOTES;
  
  const filteredNotes = displayNotes.filter(note => 
    (activeBranch === 'All' || note.branch === activeBranch) &&
    (note.title.toLowerCase().includes(search.toLowerCase()))
  );

  const branches = ['All', 'Computer Engineering', 'Information Technology', 'Mechanical Engineering', 'Civil Engineering'];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="notes-header">
          <div>
            <h1 className="notes-title">
              Study <span className="highlight">Materials</span>
            </h1>
            <p className="notes-subtitle">Access and share high-quality lecture notes and resources.</p>
          </div>
          <Button variant="primary" className="flex items-center gap-2">
            <Plus size={20} /> Upload Note
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <Card className="filter-card" hoverable={false}>
              <CardContent className="p-6">
                <h3 className="filter-title">
                  <Filter size={18} /> Filters
                </h3>
                
                <div className="space-y-6">
                  <Input 
                    label="Search Notes"
                    icon={Search}
                    placeholder="Keywords..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  <div className="branch-filter">
                    <label className="info-label mb-3 block">Branch</label>
                    <div className="space-y-1">
                      {branches.map(branch => (
                        <button 
                          key={branch}
                          onClick={() => setActiveBranch(branch)}
                          className={`branch-btn ${activeTab === branch ? 'active' : ''}`}
                          style={{
                            background: activeBranch === branch ? 'var(--accent)' : 'transparent',
                            color: activeBranch === branch ? 'white' : 'var(--text)'
                          }}
                        >
                          {branch}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="contribute-card" hoverable={false}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 text-accent mb-3">
                  <Book size={24} />
                  <h4 className="font-bold">Contribute</h4>
                </div>
                <p className="text-xs opacity-70 leading-relaxed">
                  Help your peers by uploading your handwritten notes or digitized summaries. Top contributors get featured!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Notes Grid */}
          <div className="lg:col-span-3">
            {filteredNotes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredNotes.map((note) => (
                  <Card key={note.id} className="note-card">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className="note-icon-box">
                            <FileText size={22} />
                          </div>
                          <span className="note-size-tag">
                            {note.size}
                          </span>
                        </div>
                        <h3 className="note-card-title">{note.title}</h3>
                        <p className="note-branch-tag">{note.branch}</p>
                        <div className="note-meta">
                          <span className="font-bold">{note.user}</span>
                          <span className="separator"></span>
                          <span>Semester {note.semester}</span>
                        </div>
                      </div>

                      <div className="note-card-footer">
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => upvoteNote(note.id)}
                            className="note-action-btn upvote"
                          >
                            <ThumbsUp size={14} /> {note.upvotes}
                          </button>
                          <button className="note-action-btn share">
                            <Share2 size={14} />
                          </button>
                        </div>
                        <Button variant="secondary" size="sm" className="gap-2">
                          <Download size={14} /> Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <FileText size={48} className="empty-icon" />
                <p>No notes found matching your criteria.</p>
                <Button variant="ghost" onClick={() => {setSearch(''); setActiveBranch('All');}}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
