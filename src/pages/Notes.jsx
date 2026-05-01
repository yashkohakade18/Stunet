import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useNotes } from '../hooks/useNotes';
import { FileText, Download, ThumbsUp, Search, Plus, Filter, Book } from 'lucide-react';

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
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
              Study <span className="highlight">Materials</span>
            </h1>
            <p className="text-var(--text)">Access and share high-quality lecture notes and resources.</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={20} /> Upload Note
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-var(--text-h) mb-4 flex items-center gap-2">
                <Filter size={18} /> Filters
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-var(--text) uppercase mb-2 block">Search</label>
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-var(--text)" />
                    <input 
                      type="text" 
                      placeholder="Search notes..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-black/10 border border-var(--border) rounded-lg outline-none focus:border-accent text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-var(--text) uppercase mb-2 block">Branch</label>
                  <div className="space-y-2">
                    {branches.map(branch => (
                      <button 
                        key={branch}
                        onClick={() => setActiveBranch(branch)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                          activeBranch === branch ? 'bg-accent text-white' : 'hover:bg-accent-bg text-var(--text)'
                        }`}
                      >
                        {branch}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-accent-bg border-accent-border">
              <div className="flex items-center gap-3 text-accent mb-3">
                <Book size={24} />
                <h4 className="font-bold">Contribute</h4>
              </div>
              <p className="text-xs text-var(--text) leading-relaxed">
                Help your peers by uploading your handwritten notes or digitized summaries. Top contributors get featured!
              </p>
            </Card>
          </div>

          {/* Notes Grid */}
          <div className="lg:col-span-3">
            {filteredNotes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredNotes.map((note) => (
                  <Card key={note.id} className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-accent-bg rounded-lg flex items-center justify-center text-accent">
                          <FileText size={24} />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-1 bg-black/10 rounded-full text-var(--text)">
                          {note.size}
                        </span>
                      </div>
                      <h3 className="font-bold text-var(--text-h) mb-1">{note.title}</h3>
                      <p className="text-xs text-accent font-medium mb-3">{note.branch}</p>
                      <div className="flex items-center gap-2 text-xs text-var(--text) mb-6">
                        <span className="font-bold text-var(--text-h)">{note.user}</span>
                        <span>•</span>
                        <span>Sem {note.semester}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-top border-var(--border)">
                      <button 
                        onClick={() => upvoteNote(note.id)}
                        className="flex items-center gap-1.5 text-xs font-bold hover:text-accent transition-colors"
                      >
                        <ThumbsUp size={14} /> {note.upvotes}
                      </button>
                      <Button variant="secondary" size="sm" className="flex items-center gap-2">
                        <Download size={14} /> Download
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <FileText size={48} className="mx-auto text-var(--border) mb-4" />
                <p className="text-var(--text)">No notes found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
