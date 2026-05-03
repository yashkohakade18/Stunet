import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import UploadModal from '../components/ui/UploadModal';
import { MOCK_PAPERS } from '../utils/mockData';
import { FileText, Download, Calendar, GraduationCap, Search, Filter, BookOpen, Plus } from 'lucide-react';

export default function Papers() {
  const [filter, setFilter] = useState({ year: 'All', branch: 'All', type: 'All' });
  const [search, setSearch] = useState('');
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [userPapers, setUserPapers] = useState([]);

  const allPapers = [...userPapers, ...MOCK_PAPERS];

  const filteredPapers = allPapers.filter(paper => {
    return (filter.year === 'All' || paper.year?.toString() === filter.year) &&
           (filter.branch === 'All' || paper.branch === filter.branch) &&
           (filter.type === 'All' || paper.type === filter.type) &&
           (paper.title.toLowerCase().includes(search.toLowerCase()));
  });

  const handleUpload = (data) => {
    setUserPapers(prev => [{
      ...data,
      id: Date.now(),
      semester: data.year === 'FE' ? 1 : 3, // Mock logic
      user: 'You'
    }, ...prev]);
  };

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="papers-header flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="papers-title">
              Question <span className="highlight">Papers</span>
            </h1>
            <p className="papers-subtitle">
              Prepare for exams with our curated collection of previous year university papers.
            </p>
          </div>
          <Button variant="primary" className="gap-2" onClick={() => setIsUploadOpen(true)}>
            <Plus size={20} /> Contribute Paper
          </Button>
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
              <option value="2021">2021</option>
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
                    {paper.type || 'PYQ'}
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
                    <span>{paper.department || paper.branch}</span>
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
            <Button variant="ghost" onClick={() => {setSearch(''); setFilter({year:'All', branch:'All', type:'All'});}}>Clear All</Button>
          </div>
        )}
      </div>

      <UploadModal 
        isOpen={isUploadOpen} 
        onClose={() => setIsUploadOpen(false)}
        onUpload={handleUpload}
      />
    </PageWrapper>
  );
}
