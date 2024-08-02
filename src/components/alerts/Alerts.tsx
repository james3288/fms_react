type alertProps = {
  option: string;
  message: string;
};

const Alerts = ({ message, option }: alertProps) => {
  const classname: string = `alert alert-${option} alert-dismissible fade show`;
  return (
    <div className={classname} role="alert">
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alerts;
