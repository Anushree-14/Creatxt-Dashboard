import React from "react";
import "./Reports.css"; // Import CSS for styling

function Reports() {
  return (
    <div className="reports-container">
      <h2 className="reports-title">Reports Page</h2>
      <p className="reports-description">
        This page will display reports, summaries, or logs.
      </p>

      <div className="report-card">
        <h4>System Summary</h4>
        <p>Last update: June 22, 2025 - 5:00 PM</p>
        <ul>
          <li>✔ Total users: 3,120</li>
          <li>✔ Active sessions: 87</li>
          <li>✔ Errors reported: 2</li>
        </ul>
      </div>

      <div className="report-card">
        <h4>Activity Log</h4>
        <p>Showing latest actions:</p>
        <ol>
          <li>🕓 User admin logged in</li>
          <li>📁 Report #239 downloaded</li>
          <li>⚠ Warning issued on API usage</li>
        </ol>
      </div>
    </div>
  );
}

export default Reports;
