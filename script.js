/* ======================================================
   LOGIKA UI + GAME - JAVASCRIPT MURNI
   Tidak memerlukan npm, React, atau framework.
   Semua konten soal ada di data.js.
   ====================================================== */

const STORAGE_KEY = 'keberagaman-lingkunganku-photo-v4';
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const assetUrl = (path) => (typeof INLINE_ASSETS !== 'undefined' && INLINE_ASSETS[path]) ? INLINE_ASSETS[path] : path;

// Siapkan state awal. Data disimpan lokal di browser, bukan di server.
function newState() {
  return {
    m1: { answered: {}, selected: null, costumeOrder: shuffle(REGIONS.map(r => r.id)) },
    m2: { index: 0, answers: {} },
    m3: { active: null, picks: {}, answers: {} }
  };
}
function shuffle(items) { // Fisher-Yates: pengacakan yang tidak bias.
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && saved.m1 && saved.m2 && saved.m3) return saved;
  } catch (_) { /* Browser bisa saja memblokir LocalStorage pada file lokal. */ }
  return newState();
}
let state = loadState();
let currentScreen = 'landing';
let lastResult = 1;
let resultMeta = { whole:false, mission:1, sourceMission:1 };
let practiceMode = null;
let toastTimer;
function saveState() { if (practiceMode) return; try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {} }
function isPractice(mission) { return Boolean(practiceMode && practiceMode.mission === mission); }
function missionStore(mission) { return isPractice(mission) ? practiceMode.state : state[`m${mission}`]; }
function currentPoints() { return score(1) + score(2) + score(3); }
function startPractice(mission) {
  practiceMode = {
    mission,
    state: mission === 1 ? { answered:{}, selected:null, costumeOrder: shuffle(REGIONS.map(r => r.id)) }
      : mission === 2 ? { index:0, answers:{} }
      : { active:null, picks:{}, answers:{} }
  };
  go(`mission${mission}`);
  toast('Mode belajar aktif. Poin utama tidak berubah.');
}
function escapeText(s) { return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;'); }
function countM1() { return Object.keys(state.m1.answered).length; }
function countM1Correct() { return Object.values(state.m1.answered).filter(x => x === 'correct').length; }
function countM2() { return Object.keys(state.m2.answers).length; }
function countM2Correct() { return Object.entries(state.m2.answers).filter(([i, answer]) => QUIZ[Number(i)].answer === answer).length; }
function countM3() { return Object.keys(state.m3.answers).length; }
function countM3Correct() { return Object.values(state.m3.answers).filter(x => x.correct).length; }
function score(mission) { return mission === 1 ? countM1Correct()*2 : mission === 2 ? countM2Correct()*2 : countM3Correct()*10; }
function completed(mission) { return mission === 1 ? countM1() === 15 : mission === 2 ? countM2() === 15 : countM3() === 4; }
function go(screen) {
  if (!document.getElementById(screen)) return;
  if (practiceMode && screen !== `mission${practiceMode.mission}`) practiceMode = null;
  $$('.screen').forEach(el => el.classList.remove('is-active'));
  document.getElementById(screen).classList.add('is-active');
  currentScreen = screen;
  $('#backButton').classList.toggle('hidden', screen === 'landing');
  if (screen === 'missions') renderMenu();
  if (screen === 'mission1') renderM1();
  if (screen === 'mission2') renderM2();
  if (screen === 'mission3') renderM3();
  $('#globalScore').textContent = `${currentPoints()} poin`;
  window.scrollTo(0,0);
  document.documentElement.scrollTop = 0;
  document.title = (screen === 'landing' ? 'Keberagaman Lingkunganku' : 'Keberagaman Lingkunganku • ' + ({objectives:'Tujuan Pembelajaran',missions:'Pilih Misi',mission1:'Misi 1',mission2:'Misi 2',mission3:'Misi 3',results:'Hasil'}[screen] || 'Game'));
}
function toast(message) {
  const el = $('#toast'); el.textContent = message; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}
function openMission(mission) {
  if (completed(mission)) return showResults(mission, mission);
  go(`mission${mission}`);
}
function renderMenu() {
  [1,2,3].forEach(n => {
    const el = $(`#statusM${n}`);
    el.textContent = completed(n) ? 'Selesai' : (n === 1 ? countM1() : n === 2 ? countM2() : countM3()) ? 'Sedang dimainkan' : 'Belum dimulai';
    el.classList.toggle('done', completed(n));
  });
}

/* ------------------- MISI 1 ------------------- */
function xy(r) {
  if (r.mapX !== undefined && r.mapY !== undefined) return {x:r.mapX,y:r.mapY};
  const x = (r.lon - 94.5) / 47.8 * 100;
  const y = (6.4 - r.lat) / 18 * 100;
  return {x,y};
}
function renderM1() {
  const m1 = missionStore(1);
  const answeredCount = Object.keys(m1.answered).length;
  const correctCount = Object.values(m1.answered).filter(x => x === 'correct').length;
  $('#m1Score').innerHTML = `${score(1)} <span>/ 30</span>`;
  $('#m1ProgressText').textContent = `${answeredCount} dari 15 daerah selesai${isPractice(1) ? ' • mode belajar' : ''}`;
  $('#m1ProgressBar').style.width = `${answeredCount / 15 * 100}%`;
  const markup = REGIONS.map((r,index) => {
    const pos = xy(r), result = m1.answered[r.id];
    const active = m1.selected === r.id;
    return `<button class="map-marker ${result === 'correct' ? 'correct' : result === 'wrong' ? 'wrong' : ''} ${active ? 'selected' : ''}" style="left:${pos.x}%;top:${pos.y}%" data-region="${r.id}" title="${escapeText(r.name)}" aria-label="${escapeText(r.name)} ${result ? '(sudah dijawab)' : '(belum dijawab)'}" ${result ? 'disabled' : ''}>${result === 'correct' ? '✓' : result === 'wrong' ? '×' : index + 1}</button>`;
  }).join('');
  $('#mapMarkers').innerHTML = markup;
  $('#regionSelect').innerHTML = `<option value="">— Pilih daerah —</option>` + REGIONS.map(r => `<option value="${r.id}" ${m1.selected===r.id ? 'selected' : ''} ${m1.answered[r.id] ? 'disabled' : ''}>${escapeText(r.name)}${m1.answered[r.id] ? ' (sudah)' : ''}</option>`).join('');
  const selected = REGIONS.find(r => r.id === m1.selected);
  $('#selectedRegionName').textContent = selected ? selected.name : 'Belum memilih daerah';
  $('#targetIndicator').textContent = selected ? 'Siap dicocokkan' : 'Pilih titik';
  $('#dropTitle').textContent = selected ? `Pilih pakaian untuk ${selected.name}` : 'Letakkan pakaian adat di sini';
  $('#dropHelp').textContent = selected ? 'Klik salah satu kartu di samping atau seret gambar ke kotak ini.' : 'Pilih daerah lebih dulu, kemudian klik atau seret gambar pakaian.';
  $('#dropZone').classList.toggle('ready', Boolean(selected));
  const cards = m1.costumeOrder.map((id,index) => {
    const r = REGIONS.find(x => x.id === id);
    const used = m1.answered[id] === 'correct';
    return `<button class="costume-card ${used ? 'used' : ''}" data-costume="${r.id}" draggable="${!used}" ${used ? 'disabled' : ''} title="Pilih foto nomor ${index + 1}"><div class="costume-media"><span class="costume-fallback">FOTO</span><img src="${escapeText(r.photo)}" alt="Pilihan foto pakaian adat nomor ${index + 1}" loading="eager" onerror="this.remove()"><span class="costume-number">${String(index+1).padStart(2,'0')}</span></div><span class="costume-name">Pakaian adat ${String(index+1).padStart(2,'0')}</span></button>`;
  }).join('');
  $('#costumeGrid').innerHTML = cards;
  $('#remainingCostumeCount').textContent = `${15 - correctCount} kartu`;
  if (answeredCount === 0 && !m1.selected) {
    $('#m1Feedback').textContent = '';
    $('#m1Feedback').className = 'feedback-line';
    clearM1Material();
  }
  document.body.classList.toggle('practice-mode', isPractice(1));
}
function clearM1Material() {
  const box = $('#m1Material');
  if (box) {
    box.className = 'material-card hidden';
    box.innerHTML = '';
  }
}
function showM1Material(region, isRight) {
  const box = $('#m1Material');
  if (!box || !region) return;
  const statusHtml = isRight
    ? `<div class="material-status-hint is-correct">Jawaban tepat! Berikut materi pakaian adat untuk daerah <strong class="material-highlight-region">${escapeText(region.name)}</strong>:</div>`
    : `<div class="material-status-hint is-wrong">Pakaian adat yang sesuai untuk daerah <strong class="material-highlight-region">${escapeText(region.name)}</strong> adalah <strong class="material-highlight-costume">${escapeText(region.costume)}</strong>:</div>`;
  const sourcesHtml = region.source
    ? `<div class="material-sources"><small>Referensi foto: ${escapeText(region.source)}</small></div>`
    : '';
  box.className = `material-card ${isRight ? 'correct' : 'wrong'}`;
  box.innerHTML = `
    <div class="material-header">
      <span class="material-badge">📖 MATERI PAKAIAN ADAT</span>
      <span class="material-region-tag">Daerah: <strong class="material-region-name">${escapeText(region.name)}</strong></span>
    </div>
    ${statusHtml}
    <div class="material-body">
      <div class="material-thumb">
        <img src="${assetUrl(escapeText(region.photo))}" alt="${escapeText(region.costume)}" loading="eager" onerror="this.remove()">
      </div>
      <div class="material-info">
        <h4 class="material-costume-name">${escapeText(region.costume)}</h4>
        <p class="material-definition"><strong class="definition-label">Pengertian:</strong> <span class="definition-text">${escapeText(region.description || '')}</span></p>
        ${sourcesHtml}
      </div>
    </div>
    <div id="m1ActionSlot"></div>
  `;
  box.classList.remove('hidden');
}
function showM1FinishAction() {
  const slot = $('#m1ActionSlot');
  if (!slot) return;
  slot.innerHTML = `
    <div class="material-finish-prompt">
      <p><strong>Semua 15 daerah selesai dijawab!</strong> Pelajari materi di atas, lalu klik tombol di bawah untuk melihat ringkasan hasil.</p>
      <button class="btn btn-primary btn-full" id="m1FinishBtn">LIHAT HASIL PETUALANGAN <span>→</span></button>
    </div>
  `;
  const finishBtn = $('#m1FinishBtn');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      if (isPractice(1)) {
        practiceMode = null;
        showResults(1, 1);
        toast('Mode belajar selesai. Poin utama tidak berubah.');
      } else {
        showResults(1, 1);
      }
    });
  }
}
function chooseRegion(id) {
  const m1 = missionStore(1);
  if (!REGIONS.some(r=>r.id===id) || m1.answered[id]) return;
  m1.selected = id;
  $('#m1Feedback').textContent = '';
  $('#m1Feedback').className = 'feedback-line';
  clearM1Material();
  saveState(); renderM1();
  if (window.matchMedia('(max-width:850px)').matches) $('#dropZone').scrollIntoView({behavior:'smooth',block:'nearest'});
}
function matchCostume(costumeId) {
  const m1 = missionStore(1);
  if (!m1.selected) return toast('Pilih titik daerah pada peta terlebih dahulu!');
  if (!REGIONS.some(r => r.id === costumeId)) return;
  if (m1.answered[costumeId] === 'correct') return toast('Kartu itu sudah berhasil dipakai.');
  const id = m1.selected;
  const isRight = id === costumeId;
  m1.answered[id] = isRight ? 'correct' : 'wrong';
  m1.selected = null;
  saveState(); renderM1();
  $('#m1Feedback').className = `feedback-line ${isRight ? 'correct' : 'wrong'}`;
  $('#m1Feedback').textContent = isRight ? 'BENAR! HEBAT SEKALI! +2 poin' : 'YAH, JAWABAN KURANG TEPAT! Titik daerah ini hangus.';
  $('#globalScore').textContent = `${currentPoints()} poin`;
  const region = REGIONS.find(r => r.id === id);
  showM1Material(region, isRight);
  const finished = Object.keys(m1.answered).length === 15;
  if (finished) {
    showM1FinishAction();
  }
}

/* ------------------- MISI 2 ------------------- */
function renderM2() {
  const m2 = missionStore(2);
  const i = Math.max(0, Math.min(14, m2.index));
  const q = QUIZ[i];
  const chosen = m2.answers[i];
  const hasAnswer = chosen !== undefined;
  $('#m2Score').innerHTML = `${score(2)} <span>/ 30</span>`;
  $('#quizCounter').textContent = `SOAL ${String(i+1).padStart(2,'0')} / 15`;
  $('#m2ProgressBar').style.width = `${(i + (hasAnswer ? 1 : 0))/15*100}%`;
  $('#quizQuestion').textContent = q.question;
  $('#quizVisualImage').src = assetUrl(`assets/tradisi/q${q.id}.webp`);
  $('#quizVisualImage').alt = `Ilustrasi realistis yang berkaitan dengan soal tradisi nomor ${q.id}`;
  $('#quizVisualText').textContent = 'Amati gambar dan pilih jawaban';
  $('#quizOptions').innerHTML = q.options.map((opt,j) => `<button class="answer-option ${hasAnswer && j === q.answer ? 'correct' : hasAnswer && j === chosen && j !== q.answer ? 'wrong' : ''} ${hasAnswer ? 'locked' : ''}" data-answer="${j}" ${hasAnswer ? 'disabled' : ''}><span class="option-label">${'ABCD'[j]}</span><span>${escapeText(opt)}</span></button>`).join('');
  $('#quizNext').disabled = !hasAnswer;
  $('#quizNext').innerHTML = i === 14 ? 'LIHAT HASIL <span>→</span>' : 'NEXT <span>→</span>';
  const feedback = $('#m2Feedback');
  if (hasAnswer) {
    const correct = chosen === q.answer;
    feedback.className = `answer-feedback ${correct ? 'correct' : 'wrong'}`;
    feedback.innerHTML = `<strong>${correct ? 'BENAR! HEBAT SEKALI!' : 'JAWABAN KURANG TEPAT'}</strong><p><strong>Penjelasan:</strong> ${escapeText(q.explanation)}</p>`;
  } else { feedback.className = 'answer-feedback hidden'; feedback.textContent=''; }
}
function answerQuiz(answer) {
  const m2 = missionStore(2);
  const i = m2.index;
  if (m2.answers[i] !== undefined) return;
  m2.answers[i] = answer;
  saveState(); renderM2();
  $('#globalScore').textContent = `${currentPoints()} poin`;
}
function nextQuiz() {
  const m2 = missionStore(2);
  if (m2.answers[m2.index] === undefined) return;
  if (m2.index === 14) {
    if (isPractice(2)) { practiceMode = null; showResults(2,2); toast('Mode belajar selesai. Poin utama tidak berubah.'); return; }
    return showResults(2,2);
  }
  m2.index++;
  saveState(); renderM2();
  $('.quiz-container').scrollIntoView({behavior:'smooth',block:'start'});
}

/* ------------------- MISI 3 ------------------- */
const ENVELOPES = [
  {name:'Keberagaman Pakaian Adat',subtitle:'Saling menghargai pakaian adat'},
  {name:'Keberagaman Tradisi',subtitle:'Menghormati tradisi Nusantara'},
  {name:'Keberagaman Agama',subtitle:'Berteman dalam perbedaan keyakinan'},
  {name:'Keberagaman Suku dan Budaya',subtitle:'Mengenal perbedaan suku, budaya, dan kebiasaan'}
];
function renderM3() {
  const m3 = missionStore(3);
  const answeredCount = Object.keys(m3.answers).length;
  $('#m3Score').innerHTML = `${score(3)} <span>/ 40</span>`;
  $('#m3ProgressText').textContent = `${answeredCount} dari 4 amplop selesai${isPractice(3) ? ' • mode belajar' : ''}`;
  $('#m3ProgressBar').style.width = `${answeredCount/4*100}%`;
  $('#envelopeGrid').innerHTML = ENVELOPES.map((cat,i) => {
    const answered = Boolean(m3.answers[i]), locked = i > answeredCount, active = m3.active === i;
    return `<article class="envelope-card envelope-theme-${i+1} ${answered ? 'completed' : ''} ${locked ? 'locked' : ''} ${active ? 'active' : ''}" data-envelope="${i}" role="button" tabindex="${locked ? -1 : 0}" aria-label="Amplop 0${i+1}: ${escapeText(cat.name)}">
      <div class="envelope-art" data-envelope="${i}">
        <div class="envelope-paper">
          <div class="envelope-letter-head">
            <span class="envelope-paper-icon">✉️</span>
            <span class="envelope-paper-label">TEMA 0${i+1}</span>
          </div>
          <div class="envelope-letter-body">
            <span class="letter-line line-wide"></span>
            <span class="letter-line line-med"></span>
            <span class="letter-line line-short"></span>
          </div>
          <div class="envelope-letter-seal">✨ PESAN SIKAP ✨</div>
        </div>
        <div class="envelope-back"></div>
        <div class="envelope-flap"></div>
        <div class="envelope-front">
          <span class="envelope-seal">0${i+1}</span>
          <span class="envelope-front-line"></span>
        </div>
      </div>
      <div class="envelope-info">
        <span class="envelope-count">AMPLOP 0${i+1}</span>
        <h3>${cat.name}</h3>
        <p>${cat.subtitle}</p>
        <button class="btn ${answered || locked ? 'btn-light' : 'btn-primary'}" data-envelope="${i}" ${answered || locked ? 'disabled' : ''}>${answered ? 'SELESAI' : locked ? 'TERKUNCI' : active ? 'SEDANG DIBUKA' : 'BUKA AMPLOP →'}</button>
      </div>
    </article>`;
  }).join('');
  const active = m3.active;
  if (active === null || active === undefined || m3.answers[active] && !m3.picks[active] && m3.picks[active] !== 0) {
    $('#scenarioShell').classList.add('hidden'); return;
  }
  const pickIndex = m3.picks[active];
  const data = SITUATIONS[active][pickIndex];
  $('#scenarioShell').classList.remove('hidden');
  $('#scenarioCategory').textContent = `AMPLOP ${active+1} / 4`;
  $('#scenarioTitle').textContent = ENVELOPES[active].name;
  $('#scenarioOriginal').textContent = data.original;
  $('#scenarioStatement').textContent = data.statement;
  const response = m3.answers[active];
  $$('#binaryButtons button').forEach(btn => {
    const value = btn.dataset.binary === 'true';
    btn.disabled = Boolean(response);
    btn.classList.toggle('selected', Boolean(response) && response.answer === value);
  });
  $('#envelopeNext').disabled = !response;
  $('#envelopeNext').innerHTML = active === ENVELOPES.length - 1 ? 'LIHAT HASIL <span>→</span>' : 'LANJUT <span>→</span>';
  const feedback = $('#m3Feedback');
  if (response) {
    feedback.className = `answer-feedback ${response.correct ? 'correct' : 'wrong'}`;
    feedback.innerHTML = `<strong>${response.correct ? 'BENAR! HEBAT SEKALI! +10 poin' : 'JAWABAN KURANG TEPAT'}</strong><p><strong>Penjelasan:</strong> ${escapeText(data.explanation)}</p>`;
  } else { feedback.className = 'answer-feedback hidden'; feedback.innerHTML=''; }
}
function openEnvelope(i) {
  const m3 = missionStore(3);
  const answeredCount = Object.keys(m3.answers).length;
  if (i > answeredCount) {
    toast('Buka amplop secara berurutan ya!');
    return;
  }
  if (m3.picks[i] === undefined) m3.picks[i] = Math.floor(Math.random() * SITUATIONS[i].length);
  m3.active = i;
  saveState();
  renderM3();
  setTimeout(() => {
    const shell = $('#scenarioShell');
    if (shell && !shell.classList.contains('hidden')) {
      shell.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 450);
}
function answerBinary(answer) {
  const m3 = missionStore(3);
  const i = m3.active;
  if (i === null || i === undefined || m3.answers[i]) return;
  const data = SITUATIONS[i][m3.picks[i]];
  m3.answers[i] = {answer,correct:answer === data.answer};
  saveState(); renderM3();
  $('#globalScore').textContent = `${score(1) + score(2) + score(3)} poin`;
}
function nextEnvelope() {
  const m3 = missionStore(3);
  const i=m3.active;
  if (i===null || i===undefined || !m3.answers[i]) return;
  m3.active=null;
  saveState();
  if (i===ENVELOPES.length - 1) {
    if (isPractice(3)) { practiceMode = null; showResults(3,3); toast('Mode belajar selesai. Poin utama tidak berubah.'); return; }
    return showResults('all', 3);
  }
  renderM3(); $('#envelopeGrid').scrollIntoView({behavior:'smooth',block:'start'});
  toast('Amplop berikutnya sudah terbuka.');
}

/* ------------------- HASIL ------------------- */
function resultStatsCard(label,value) { return `<div class="result-card"><small>${escapeText(label)}</small><strong>${escapeText(value)}</strong></div>`; }
function showResults(which, sourceMission = null) {
  const whole = which === 'all';
  lastResult = whole ? (sourceMission || 3) : which;
  resultMeta = { whole, mission: whole ? (sourceMission || 3) : which, sourceMission: sourceMission || (whole ? 3 : which) };
  const points = whole ? score(1)+score(2)+score(3) : score(which);
  const max = whole ? 100 : (which === 3 ? 40 : 30);
  let target, desc, cards;
  if (whole) {
    const achieved = [countM1Correct()>=12,countM2Correct()>=12,countM3Correct()>=3].filter(Boolean).length;
    target = achieved===3 && [1,2,3].every(completed) ? 'Semua tujuan pembelajaran tercapai.' : `${achieved} dari 3 target pembelajaran tercapai`; 
    desc = 'Lihat hasil dari seluruh petualangan budaya yang sudah kamu mainkan.';
    cards = resultStatsCard('Misi 1 — Pakaian Adat',`${score(1)} / 30`) + resultStatsCard('Misi 2 — Tradisi',`${score(2)} / 30`) + resultStatsCard('Misi 3 — Sahabat',`${score(3)} / 40`);
  } else {
    const correct = which===1 ? countM1Correct() : which===2 ? countM2Correct() : countM3Correct();
    const total = which===3 ? 4 : 15;
    const done = which===1 ? countM1() : which===2 ? countM2() : countM3();
    const threshold = which===3 ? 3 : 12;
    target = done === total && correct>=threshold ? 'Target pembelajaran tercapai.' : `${correct} dari ${threshold} jawaban benar yang ditargetkan`; 
    desc = `Misi ${which} telah ${done===total ? 'selesai' : 'dimainkan'}. Setiap percobaan membantu kita belajar lebih banyak.`;
    cards = resultStatsCard('Jawaban benar',`${correct}`) + resultStatsCard('Jawaban belum tepat',`${done-correct}`) + resultStatsCard('Progres',`${done} / ${total}`);
  }
  $('#results-title').innerHTML = whole ? 'Ringkasan <span>petualanganmu!</span>' : 'Hebat! Misi <span>selesai!</span>';
  $('#resultDescription').textContent = desc;
  $('#resultScore').textContent = points;
  $('#resultMax').textContent = `/ ${max} POIN`;
  $('#resultTarget').textContent = target;
  $('#resultTarget').classList.toggle('needs-work',!target.includes('tercapai'));
  $('#resultStats').innerHTML = cards;
  $('#resultStatsTitle').textContent = whole ? 'Total Poin Seluruh Misi' : `Ringkasan Hasil Misi ${which}`;
  const left = $('#resultStudy');
  const right = $('#resultNextMission');
  const restartBtn = $('#resultRestart');
  left.disabled = false;
  if (whole) {
    left.textContent = `Ulangi Misi ${resultMeta.sourceMission} (Mode Belajar)`;
    left.dataset.practice = String(resultMeta.sourceMission);
    right.textContent = 'Kembali ke Menu Misi →';
    right.dataset.next = 'menu';
    if (restartBtn) restartBtn.classList.remove('hidden');
  } else {
    left.textContent = `Ulangi Misi ${which} (Mode Belajar)`;
    left.dataset.practice = String(which);
    if (which < 3) {
      right.textContent = `Next Misi →`;
      right.dataset.next = String(which + 1);
    } else {
      right.textContent = 'Lihat Total Poin →';
      right.dataset.next = 'summary';
    }
    if (restartBtn) restartBtn.classList.add('hidden');
  }
  go('results');
}
function restartGame() {
  if (!confirm('Apakah kamu yakin ingin memulai ulang game dari awal? Semua poin dan progres misi akan direset.')) return;
  state = newState();
  practiceMode = null;
  lastResult = 1;
  resultMeta = { whole: false, mission: 1, sourceMission: 1 };
  saveState();

  clearM1Material();
  $('#m1Feedback').textContent = '';
  $('#m1Feedback').className = 'feedback-line';
  $('#m2Feedback').className = 'answer-feedback hidden';
  $('#m2Feedback').textContent = '';
  $('#m3Feedback').className = 'answer-feedback hidden';
  $('#m3Feedback').innerHTML = '';
  $('#scenarioShell').classList.add('hidden');

  renderMenu();
  go('landing');
  toast('Game telah dimulai ulang dari awal. Semua poin kembali ke 0.');
}
function resetMission(which, ask=true) {
  if (isPractice(which)) {
    practiceMode.state = which===1 ? {answered:{},selected:null,costumeOrder:shuffle(REGIONS.map(r=>r.id))} : which===2 ? {index:0,answers:{}} : {active:null,picks:{},answers:{}};
    if (which === 1) {
      $('#m1Feedback').textContent = '';
      $('#m1Feedback').className = 'feedback-line';
      clearM1Material();
    }
    go('mission'+which);
    toast(`Mode belajar Misi ${which} dimulai lagi. Poin utama tetap.`);
    return;
  }
  if (ask && !confirm(`Yakin ingin mengulang Misi ${which}? Progres misi ini akan dihapus.`)) return;
  if (which===1) {
    state.m1={answered:{},selected:null,costumeOrder:shuffle(REGIONS.map(r=>r.id))};
    $('#m1Feedback').textContent = '';
    $('#m1Feedback').className = 'feedback-line';
    clearM1Material();
  }
  if (which===2) state.m2={index:0,answers:{}};
  if (which===3) state.m3={active:null,picks:{},answers:{}};
  saveState(); go('mission'+which); toast(`Misi ${which} dimulai dari awal.`);
}
function resetAll() {
  restartGame();
}

/* ------------------- EVENT HANDLER ------------------- */
document.addEventListener('click', event => {
  const goButton=event.target.closest('[data-go]');
  if (goButton) { go(goButton.dataset.go); return; }
  const missionButton=event.target.closest('[data-open-mission]');
  if (missionButton) { openMission(Number(missionButton.dataset.openMission)); return; }
  const marker=event.target.closest('[data-region]');
  if (marker) { chooseRegion(marker.dataset.region); return; }
  const costume=event.target.closest('[data-costume]');
  if (costume) { matchCostume(costume.dataset.costume); return; }
  const option=event.target.closest('[data-answer]');
  if (option) { answerQuiz(Number(option.dataset.answer)); return; }
  const envelope=event.target.closest('[data-envelope]');
  if (envelope) { openEnvelope(Number(envelope.dataset.envelope)); return; }
  const binary=event.target.closest('[data-binary]');
  if (binary) { answerBinary(binary.dataset.binary==='true'); return; }
  const reset=event.target.closest('[data-reset-mission]');
  if (reset) resetMission(Number(reset.dataset.resetMission));
});
$('#regionSelect').addEventListener('change', e => chooseRegion(e.target.value));
$('#quizNext').addEventListener('click', nextQuiz);
$('#envelopeNext').addEventListener('click', nextEnvelope);
$('#envelopeGrid').addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    const card = e.target.closest('[data-envelope]');
    if (card) { e.preventDefault(); openEnvelope(Number(card.dataset.envelope)); }
  }
});
$('#showSummary').addEventListener('click', () => showResults('all', completed(3) ? 3 : completed(2) ? 2 : 1));
$('#resultStudy').addEventListener('click', () => startPractice(Number($('#resultStudy').dataset.practice || resultMeta.sourceMission || 1)));
$('#resultRestart').addEventListener('click', restartGame);
$('#resultNextMission').addEventListener('click', () => {
  const next = $('#resultNextMission').dataset.next;
  if (next === 'menu') return go('missions');
  if (next === 'summary') return showResults('all', 3);
  if (next) return go(`mission${next}`);
});
$('#backButton').addEventListener('click', () => go(currentScreen==='objectives'?'landing':currentScreen==='missions'?'objectives':'missions'));

// Drag and drop HTML5 asli. Klik kartu tetap tersedia untuk layar sentuh.
$('#costumeGrid').addEventListener('dragstart', event => {
  const card=event.target.closest('[data-costume]');
  if (!card || card.disabled) return event.preventDefault();
  event.dataTransfer.setData('text/plain',card.dataset.costume);
  event.dataTransfer.effectAllowed='move';
});
$('#dropZone').addEventListener('dragover',event=>{event.preventDefault();event.currentTarget.classList.add('drag-over');});
$('#dropZone').addEventListener('dragleave',event=>event.currentTarget.classList.remove('drag-over'));
$('#dropZone').addEventListener('drop',event=>{
  event.preventDefault(); event.currentTarget.classList.remove('drag-over');
  matchCostume(event.dataTransfer.getData('text/plain'));
});
$('#dropZone').addEventListener('keydown',event=>{
  if (event.key==='Enter' || event.key===' ') { event.preventDefault(); toast('Klik salah satu kartu pakaian adat untuk menjawab.'); }
});

// Mulai selalu dari halaman judul. Progres tersimpan untuk saat pemain masuk kembali.
go('landing');
