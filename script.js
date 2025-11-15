document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  const users = {
    "admin01": { password: "adminpass", role: "admin" },
    "clerk01": { password: "clerkpass", role: "clerk" },
    "student01": { password: "studentpass", role: "student" }
  };

  if (users[userId] && users[userId].password === password) {
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("role", users[userId].role);
    sessionStorage.setItem("userId", userId);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("errorMessage").textContent = "Invalid ID or password.";
  }
  function logout() {
  // Clear all session data
  sessionStorage.clear();  // This will clear profile completion too
  window.location.href = "login.html";  // Redirect to login page
}
if (users[userId] && users[userId].password === password) {
  sessionStorage.setItem("isLoggedIn", "true");
  sessionStorage.setItem("role", users[userId].role);
  sessionStorage.setItem("userId", userId);
  sessionStorage.removeItem("profileComplete"); // force re-entry
  window.location.href = "profile.html";
}
});
