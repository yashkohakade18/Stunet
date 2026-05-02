import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { FileText, Download, Calendar, GraduationCap, Search, Filter, BookOpen } from 'lucide-react';

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
        <header className="papers-header">
          <h1 className="papers-title">
            Question <span className="highlight">Papers</span>
          </h1>
          <p className="papers-subtitle">
            Prepare for exams with our curated collection of previous year university and internal assessment papers.
          </p>
        </header>

        {/* Filters */}
        <div className="papers-filter-bar">
          <div className="search-input-wrapper">
            <Input 
              icon={Search}
              placeholder="Search by subject name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="select-filters">
            <select 
              className="paper-select"
              onChange={(e) => setFilter({...filter, year: e.target.value})}
            >
              <option value="All">All Years</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <select 
              className="paper-select"
              onChange={(e) => setFilter({...filter, type: e.target.value})}
            >
              <option value="All">All Types</option>
              <option value="End Sem">End Sem</option>
              <option value="In Sem">In Sem</option>
              <option value="Unit Test">Unit Test</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPapers.map((paper) => (
            <Card key={paper.id} className="paper-card">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="paper-icon-box">
                    <FileText size={28} />
                  </div>
                  <span className={`paper-type-badge ${paper.type === 'End Sem' ? 'end-sem' : 'other-sem'}`}>
                    {paper.type}
                  </span>
                </div>
                
                <h3 className="paper-card-title">{paper.title}</h3>
                
                <div className="paper-details">
                  <div className="detail-item">
                    <Calendar size={14} />
                    <span>Year: {paper.year}</span>
                  </div>
                  <div className="detail-item">
                    <BookOpen size={14} />
                    <span>Semester {paper.semester} | {paper.branch}</span>
                  </div>
                </div>

                <Button variant="primary" className="w-full gap-2">
                  <Download size={18} /> Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="empty-papers">
            <Search size={48} className="empty-icon" />
            <p>No papers found matching your filters.</p>
            <Button variant="outline" onClick={() => {setSearch(''); setFilter({year:'All', branch:'All', type:'All'});}}>Clear All</Button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
