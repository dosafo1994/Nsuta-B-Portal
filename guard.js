// guard.js — Role-based access control

const sessionRole = sessionStorage.getItem("role");

// Title-to-role mapping
const pageRoleMap = {
  "Headteacher Dashboard": "headteacher",
  "Teacher Score Entry": "teacher",
  "Manage Teacher Accounts": "headteacher",
  "Review Scores": "headteacher",
  "Print Reports": "headteacher",
  "Term Settings": "headteacher",
  "Manage Teachers": "headteacher",
  "Enroll Students": "headteacher",
  "Update Profile": "headteacher",
  "Login": null,
  "Welcome to Nsuta Portal": null
};

const currentTitle = document.title.trim();
const requiredRole = pageRoleMap[currentTitle];

// Redirect to welcome if session is missing or mismatched
if (
  requiredRole &&
  (!sessionRole || sessionRole !== requiredRole)
) {
  location.href = "index.html"; // This is now the welcome page
}
