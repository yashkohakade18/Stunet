import React, { useState } from 'react';
import { X, Upload, FileText, CheckCircle } from 'lucide-react';
import Button from './Button';
import Input from './Input';
import Card, { CardContent } from './Card';

export default function UploadModal({ isOpen, onClose, onUpload }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    year: 'FE',
    department: 'Computer Engineering',
    subject: '',
    type: 'note'
  });

  if (!isOpen) return null;

  const handleUpload = () => {
    setStep(2); // Show success step
    setTimeout(() => {
      onUpload(formData);
      onClose();
      setStep(1);
      setFormData({ title: '', year: 'FE', department: 'Computer Engineering', subject: '', type: 'note' });
    }, 2000);
  };

  return (
    <div className="modal-overlay">
      <Card className="modal-content w-full max-w-lg">
        <CardContent className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-var(--text-h)">Contribute Material</h2>
            <button onClick={onClose} className="opacity-50 hover:opacity-100 transition-opacity">
              <X size={24} />
            </button>
          </div>

          {step === 1 ? (
            <div className="space-y-6">
              <Input 
                label="Resource Title"
                placeholder="e.g. Data Structures Unit 1 Summary"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase opacity-60">Year</label>
                  <select 
                    className="paper-select w-full"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                  >
                    <option value="FE">First Year (FE)</option>
                    <option value="SE">Second Year (SE)</option>
                    <option value="TE">Third Year (TE)</option>
                    <option value="BE">Fourth Year (BE)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase opacity-60">Type</label>
                  <select 
                    className="paper-select w-full"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="note">Study Note</option>
                    <option value="paper">Question Paper</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase opacity-60">Department</label>
                <select 
                  className="paper-select w-full"
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                >
                  <option value="Computer Engineering">Computer Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Electronics & TC">Electronics & TC</option>
                </select>
              </div>

              <Input 
                label="Subject Name"
                placeholder="e.g. Discrete Mathematics"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />

              <div className="upload-dropzone">
                <Upload size={32} className="opacity-30 mb-2" />
                <p className="text-sm font-medium opacity-60">Drag and drop your PDF here</p>
                <input type="file" className="hidden-input" accept=".pdf" />
              </div>

              <Button 
                variant="primary" 
                className="w-full py-4"
                disabled={!formData.title || !formData.subject}
                onClick={handleUpload}
              >
                Upload & Contribute
              </Button>
            </div>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="success-icon-box mx-auto">
                <CheckCircle size={48} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold">Upload Successful!</h3>
              <p className="opacity-70">Your contribution is being processed and will be available to others soon.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
