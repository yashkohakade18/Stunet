import React, { useEffect, useState } from 'react';
import { CheckCircle, X, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const icons = {
  success: <CheckCircle size={18} />,
  error: <AlertCircle size={18} />,
  warning: <AlertTriangle size={18} />,
  info: <Info size={18} />,
};

const colors = {
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',
};

const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className="toast-item"
      style={{
        '--toast-color': colors[type],
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <span className="toast-icon" style={{ color: colors[type] }}>{icons[type]}</span>
      <span className="toast-msg">{message}</span>
      <button className="toast-close" onClick={() => { setVisible(false); setTimeout(onClose, 300); }}>
        <X size={14} />
      </button>
    </div>
  );
};

export const ToastContainer = ({ toasts, removeToast }) => (
  <div className="toast-container">
    {toasts.map(t => (
      <Toast key={t.id} {...t} onClose={() => removeToast(t.id)} />
    ))}
  </div>
);

export default Toast;
