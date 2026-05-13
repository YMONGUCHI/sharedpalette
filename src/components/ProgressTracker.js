import './ProgressTracker.css';

function ProgressTracker({ currentStep }) {
  const steps = ['Requested', 'Accepted', 'In progress', 'Proof ready', 'Completed'];

  return (
    <div className="progress-tracker">
      <h4>Progress</h4>
      <div className="progress-bar">
        {steps.map((label, index) => (
          <div
            key={label}
            className={
              index < currentStep
                ? 'progress-step complete'
                : index === currentStep
                ? 'progress-step current'
                : 'progress-step pending'
            }
          >
            <div className="progress-circle">
              {index < currentStep ? '✓' : ''}
            </div>
            <span className="progress-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressTracker;