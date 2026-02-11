import React, { useState, useRef, useEffect } from 'react';

function CheckInTypeDropdown({ checkInTypes, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = checkInTypes.find(t => t.value === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown" ref={ref}>
      <button
        type="button"
        className="custom-dropdown-trigger"
        onClick={() => setOpen(!open)}
      >
        <span className="custom-dropdown-label">{selected?.label || 'Select type…'}</span>
        <span className={`custom-dropdown-arrow ${open ? 'open' : ''}`}>&#9662;</span>
      </button>
      {open && (
        <div className="custom-dropdown-menu">
          {checkInTypes.map(type => (
            <div
              key={type.value}
              className={`custom-dropdown-item ${type.value === value ? 'active' : ''}`}
              onClick={() => { onChange(type.value); setOpen(false); }}
            >
              {type.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CheckInTypeDropdown;
