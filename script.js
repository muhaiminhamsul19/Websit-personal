function showGuide() {
  document.getElementById('guide').scrollIntoView({ behavior: 'smooth' });
}

async function updateApkSize() {
  try {
    const response = await fetch('downloads/aplikasi.apk', { method: 'HEAD' });
    const size = response.headers.get('content-length');
    if (!size) return;
    const mb = (Number(size) / (1024 * 1024)).toFixed(2);
    document.getElementById('apkSize').textContent = `${mb} MB`;
  } catch (error) {
    document.getElementById('apkSize').textContent = 'tersedia';
  }
}

updateApkSize();
