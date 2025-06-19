async function loadKey() {
  const keyArea = document.getElementById('key-area');
  keyArea.innerHTML = `
    <div class="d-flex flex-column align-items-center">
      <div class="spinner-border text-primary mb-2" role="status" id="spinner">
        <span class="visually-hidden">Loading...</span>
      </div>
      <span class="text-secondary">Fetching key&hellip;</span>
    </div>
  `;

  const today = new Date();
  const yyyy = today.getUTCFullYear();
  const mm = String(today.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(today.getUTCDate()).padStart(2, '0');
  const fileName = `${yyyy}-${mm}-${dd}.txt`;

  // Update the username and repo as needed
  const url = `https://raw.githubusercontent.com/Warren122093/daily-key-generator/main/keys/${fileName}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Key not found yet.');
    const key = (await response.text()).trim();
    keyArea.innerHTML = `
      <div class="alert alert-success d-flex align-items-center justify-content-center" role="alert">
        <i class="bi bi-shield-lock me-2"></i>
        <span class="key-value">${key}</span>
      </div>
    `;
  } catch (e) {
    keyArea.innerHTML = `
      <div class="alert alert-warning d-flex align-items-center justify-content-center" role="alert">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        <span>Key not available yet.</span>
      </div>
    `;
  }
}
window.onload = loadKey;