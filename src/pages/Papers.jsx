import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { FileText, Download, Calendar, GraduationCap, Search, Filter } from 'lucide-react';

const PAPERS_DATA = [
  { id: '1', title: 'End Sem - Applied Physics', year: 2023, semester: 1, type: 'End Sem', branch: 'All' },
  { id: '2', title: 'In Sem - Discrete Mathematics', year: 2023, semester: 3, type: 'In Sem', branch: 'Comp/IT' },
  { id: '3', title: 'End Sem - Operating Systems', year: 2022, semester: 4, type: 'End Sem', branch: 'Comp' },
  { id: '4', title: 'Final - Machine Design', year: 2023, semester: 6, type: 'End Sem', branch: 'Mech' },
  { id: '5', title: 'Unit Test - Structural Analysis', year: 2024, semester: 4, type: 'Unit Test', branch: 'Civil' },
  { id: '6', title: 'End Sem - Cloud Computing', year: 2022, semester: 7, type: 'End Sem', branch: 'IT' },
];

export default function Papers() {
  const [filter, setFilter] = useState({ year: 'All', branch: 'All', type: 'All' });
  const [search, setSearch] = useState('');

  const filteredPapers = PAPERS_DATA.filter(paper => {
    return (filter.year === 'All' || paper.year.toString() === filter.year) &&
           (filter.branch === 'All' || paper.branch === filter.branch) &&
           (filter.type === 'All' || paper.type === filter.type) &&
           (paper.title.toLowerCase().includes(search.toLowerCase()));
  });

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>
            Question <span className="highlight">Papers</span>
          </h1>
          <p className="text-var(--text) text-lg max-w-2xl mx-auto">
            Prepare for exams with our curated collection of previous year university and internal assessment papers.
          </p>
        </header>

        {/* Quick Search & Filters */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-var(--text)" size={20} />
            <input 
              type="text" 
              placeholder="Search by subject name..."
              className="w-full pl-12 pr-4 py-4 bg-black/5 border border-var(--border) rounded-2xl outline-none focus:border-accent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <select 
              className="px-4 py-4 bg-black/5 border border-var(--border) rounded-2xl outline-none focus:border-accent text-sm"
              onChange={(e) => setFilter({...filter, year: e.target.value})}
            >
              <option value="All">Year: All</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <select 
              className="px-4 py-4 bg-black/5 border border-var(--border) rounded-2xl outline-none focus:border-accent text-sm"
              onChange={(e) => setFilter({...filter, type: e.target.value})}
            >
              <option value="All">Type: All</option>
              <option value="End Sem">End Sem</option>
              <option value="In Sem">In Sem</option>
              <option value="Unit Test">Unit Test</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper) => (
            <Card key={paper.id} className="p-8 group" hoverable={true}>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-accent-bg rounded-2xl text-accent group-hover:scale-110 transition-transform">
                  <FileText size={32} />
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  paper.type === 'End Sem' ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'
                }`}>
                  {paper.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-var(--text-h) mb-2">{paper.title}</h3>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-var(--text)">
                  <Calendar size={16} />
                  <span>Year: {paper.year}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-var(--text)">
                  <GraduationCap size={16} />
                  <span>Sem {paper.semester} | {paper.branch}</span>
                </div>
              </div>

              <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                <Download size={18} /> Download PDF
              </Button>
            </Card>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="text-center py-20 bg-black/5 rounded-3xl border border-dashed border-var(--border)">
            <p className="text-var(--text)">No papers found matching your filters. Try widening your search.</p>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
