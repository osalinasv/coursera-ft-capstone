import { FaSpinner } from "react-icons/fa";
import "./styles.css";

export function Loading({ text }) {
  return (
    <div className="loading">
      <span className="loading-spinner text-surface">
        <FaSpinner />
      </span>
      <p className="loading-text text-primary">{text ?? "Loading..."}</p>
    </div>
  );
}
