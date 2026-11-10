const API_BASE = 'https://zozo-gallery-worker.zozo-gallery.workers.dev';
const STORAGE_KEY = 'zozo_admin_password';

// DOM Elements - Auth / Lock Screen
const lockScreen = document.getElementById('lock-screen');
const authForm = document.getElementById('auth-form');
const adminPassInput = document.getElementById('admin-pass-input');
const btnUnlock = document.getElementById('btn-unlock');
const unlockText = document.getElementById('unlock-text');
const unlockLoader = document.getElementById('unlock-loader');
const authError = document.getElementById('auth-error');
const mainTitle = document.getElementById('main-title');
const mainSubtitle = document.getElementById('main-subtitle');

// DOM Elements - Upload Screen
const uploadScreen = document.getElementById('upload-screen');
const btnLogout = document.getElementById('btn-logout');
const form = document.getElementById('upload-form');
const fileInput = document.getElementById('file');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('descriptionInput');
const dropZone = document.getElementById('drop-zone');
const dropPrompt = document.getElementById('drop-prompt');
const previewImg = document.getElementById('preview-img');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnLoader = document.getElementById('btn-loader');
const responseCard = document.getElementById('response');
const uploadedInfo = document.getElementById('uploaded-info');
const uploadedLink = document.getElementById('uploaded-link');
const btnReset = document.getElementById('btn-reset');

// 1. Initial State Check
function initAuth() {
  const savedPassword = localStorage.getItem(STORAGE_KEY);
  if (savedPassword) {
    showUploadScreen();
  } else {
    showLockScreen();
  }
}

function showLockScreen() {
  lockScreen.classList.remove('hidden');
  uploadScreen.classList.add('hidden');
  mainTitle.textContent = 'Khu vực Quản trị';
  mainSubtitle.textContent = 'Được bảo vệ bằng mật khẩu quản trị viên';
  adminPassInput.value = '';
  authError.classList.add('hidden');
}

function showUploadScreen() {
  lockScreen.classList.add('hidden');
  uploadScreen.classList.remove('hidden');
  mainTitle.textContent = 'Thêm tác phẩm mới';
  mainSubtitle.textContent = 'Tự động tải lên Cloudflare R2 và lưu vào MongoDB';
}

// 2. Unlock Form Handler
authForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const password = adminPassInput.value.trim();
  if (!password) return;

  btnUnlock.disabled = true;
  unlockText.textContent = 'Đang kiểm tra...';
  unlockLoader.classList.remove('hidden');
  authError.classList.add('hidden');

  try {
    const res = await fetch(`${API_BASE}/verify-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();
    if (res.ok && data.success) {
      localStorage.setItem(STORAGE_KEY, password);
      showUploadScreen();
    } else {
      authError.textContent = data.message || 'Mật khẩu quản trị không chính xác!';
      authError.classList.remove('hidden');
    }
  } catch (err) {
    authError.textContent = 'Lỗi kết nối tới máy chủ: ' + err.message;
    authError.classList.remove('hidden');
  } finally {
    btnUnlock.disabled = false;
    unlockText.textContent = 'Mở khóa Quản trị';
    unlockLoader.classList.add('hidden');
  }
});

// Logout Handler
btnLogout.addEventListener('click', () => {
  if (confirm('Bạn có chắc muốn đăng xuất khỏi trang quản trị này?')) {
    localStorage.removeItem(STORAGE_KEY);
    showLockScreen();
  }
});

// 3. Drag & Drop and Preview Handlers
function handleFileSelect(file) {
  if (!file) return;

  if (!titleInput.value.trim()) {
    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
    titleInput.value = nameWithoutExt.replace(/[-_]/g, ' ');
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    previewImg.src = e.target.result;
    previewImg.classList.remove('hidden');
    dropPrompt.classList.add('hidden');
  };
  reader.readAsDataURL(file);
}

fileInput.addEventListener('change', (e) => {
  handleFileSelect(e.target.files[0]);
});

['dragenter', 'dragover'].forEach(name => {
  dropZone.addEventListener(name, (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });
});

['dragleave', 'drop'].forEach(name => {
  dropZone.addEventListener(name, (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
  });
});

dropZone.addEventListener('drop', (e) => {
  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    fileInput.files = e.dataTransfer.files;
    handleFileSelect(e.dataTransfer.files[0]);
  }
});

// 4. Form Submit to R2 & MongoDB (Gated with Password)
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const savedPassword = localStorage.getItem(STORAGE_KEY);
  if (!savedPassword) {
    alert('Phiên làm việc đã hết hạn. Vui lòng đăng nhập lại.');
    showLockScreen();
    return;
  }

  const file = fileInput.files[0];
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!file) {
    alert('Vui lòng chọn một file ảnh!');
    return;
  }
  if (!title) {
    alert('Vui lòng nhập tiêu đề cho tác phẩm!');
    return;
  }

  submitBtn.disabled = true;
  btnText.textContent = 'Đang tải lên R2 & lưu Database...';
  btnLoader.classList.remove('hidden');
  responseCard.classList.add('hidden');

  const formData = new FormData();
  formData.append('file', file);
  formData.append('title', title);
  formData.append('description', description);

  try {
    const res = await fetch(`${API_BASE}/upload`, {
      method: 'POST',
      headers: {
        'X-Admin-Password': savedPassword,
      },
      body: formData,
    });

    const result = await res.json();

    if (res.status === 401) {
      alert('Mật khẩu quản trị đã bị đổi hoặc không hợp lệ. Vui lòng đăng nhập lại.');
      localStorage.removeItem(STORAGE_KEY);
      showLockScreen();
      return;
    }

    if (res.ok && result.success) {
      uploadedInfo.innerHTML = `<strong>Tiêu đề:</strong> ${result.data.title}<br><strong>ID:</strong> ${result.data._id}<br><strong>Cloudflare R2:</strong> ${result.data.url}`;
      uploadedLink.href = result.data.url;
      responseCard.classList.remove('hidden');
      form.classList.add('hidden');
    } else {
      throw new Error(result.message || 'Lỗi không xác định khi upload');
    }
  } catch (err) {
    console.error('Upload error:', err);
    alert('Lỗi tải lên: ' + err.message);
  } finally {
    submitBtn.disabled = false;
    btnText.textContent = 'Tải lên R2 & Lưu Database';
    btnLoader.classList.add('hidden');
  }
});

// 5. Reset Button
btnReset.addEventListener('click', () => {
  form.reset();
  form.classList.remove('hidden');
  responseCard.classList.add('hidden');
  previewImg.src = '';
  previewImg.classList.add('hidden');
  dropPrompt.classList.remove('hidden');
});

// Start
initAuth();
