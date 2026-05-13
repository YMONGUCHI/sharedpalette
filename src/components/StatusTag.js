import './StatusTag.css';

function StatusTag({ status }) {
  // Map each status to a CSS modifier class
  const statusClass = status.toLowerCase().replace(/\s+/g, '-');

  return (
    <span className={`status-tag status-${statusClass}`}>
      {status}
    </span>
  );
}

export default StatusTag;