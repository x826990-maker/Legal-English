const STORAGE_KEY = 'legal-lexicon-words-v1';
// 初学法律英语时最常见、最值得优先掌握的一百个术语。
// 按每天十个词分批解锁，避免初次学习的负担过重。
const coreTerms = [
  ['law', 'noun · general', '法律；法'], ['legal', 'adjective · general', '法律的；合法的'],
  ['right', 'noun · general', '权利'], ['duty', 'noun · general', '义务；职责'],
  ['obligation', 'noun · general', '法律义务；合同义务'], ['liability', 'noun · general', '法律责任；赔偿责任'],
  ['remedy', 'noun · general', '法律救济；救济方式'], ['jurisdiction', 'noun · procedure', '管辖权；司法管辖范围'],
  ['statute', 'noun · source of law', '成文法；制定法'], ['legislation', 'noun · source of law', '立法；法律法规'],
  ['regulation', 'noun · source of law', '行政法规；规章'], ['constitution', 'noun · source of law', '宪法'],
  ['common law', 'noun · legal system', '普通法；判例法体系'], ['civil law', 'noun · legal system', '大陆法系；民法（须结合语境）'],
  ['case law', 'noun · source of law', '判例法；法院判决形成的法律'], ['precedent', 'noun · source of law', '先例；判例'],
  ['stare decisis', 'Latin · source of law', '遵循先例原则'], ['court', 'noun · institution', '法院'],
  ['judge', 'noun · institution', '法官'], ['jury', 'noun · trial', '陪审团'],
  ['tribunal', 'noun · institution', '审裁机构；法庭'], ['litigation', 'noun · procedure', '诉讼'],
  ['lawsuit', 'noun · procedure', '诉讼；诉讼案件'], ['claim', 'noun · procedure', '请求；权利主张；索赔'],
  ['party', 'noun · procedure', '当事人'], ['plaintiff', 'noun · litigation', '原告；提起民事诉讼的一方'],
  ['defendant', 'noun · litigation', '被告；被起诉或被指控的人'], ['claimant', 'noun · litigation', '请求人；索赔人'],
  ['respondent', 'noun · procedure', '被申请人；应诉方'], ['prosecutor', 'noun · criminal law', '检察官；公诉人'],
  ['attorney', 'noun · legal profession', '律师（尤指美国）'], ['counsel', 'noun · legal profession', '律师；法律顾问'],
  ['complaint', 'noun · pleading', '起诉状；控诉书（依语境）'], ['pleading', 'noun · procedure', '诉状；诉辩文件'],
  ['summons', 'noun · procedure', '传票；传唤书'], ['service of process', 'noun · procedure', '送达诉讼文书'],
  ['hearing', 'noun · procedure', '听证；庭审程序'], ['trial', 'noun · procedure', '审判；庭审'],
  ['appeal', 'noun / verb · procedure', '上诉；请求上级法院审查'], ['appellant', 'noun · appeal', '上诉人'],
  ['appellee', 'noun · appeal', '被上诉人（美国用语）'], ['judgment', 'noun · procedure', '判决；裁判'],
  ['order', 'noun · procedure', '法院命令'], ['ruling', 'noun · procedure', '裁定；裁判意见'],
  ['verdict', 'noun · trial', '裁决；陪审团裁决'], ['settlement', 'noun · dispute resolution', '和解；和解协议'],
  ['mediation', 'noun · dispute resolution', '调解'], ['arbitration', 'noun · dispute resolution', '仲裁'],
  ['evidence', 'noun · trial', '证据'], ['testimony', 'noun · trial', '证言；证词'],
  ['witness', 'noun · trial', '证人'], ['affidavit', 'noun · evidence', '宣誓书；宣誓陈述'],
  ['subpoena', 'noun · procedure', '传唤令；调取证据令'], ['burden of proof', 'noun · evidence', '举证责任'],
  ['standard of proof', 'noun · evidence', '证明标准'], ['admissible', 'adjective · evidence', '可采纳的；具有证据资格的'],
  ['hearsay', 'noun · evidence', '传闻证据'], ['discovery', 'noun · procedure', '证据开示程序（美国诉讼）'],
  ['disclosure', 'noun · procedure', '披露；信息或证据开示'], ['motion', 'noun · procedure', '动议；向法院提出的程序性申请'],
  ['injunction', 'noun · remedy', '禁令'], ['damages', 'noun · remedy', '损害赔偿金'],
  ['compensation', 'noun · remedy', '补偿；赔偿'], ['costs', 'noun · procedure', '诉讼费用'],
  ['statute of limitations', 'noun · procedure', '诉讼时效期间'], ['venue', 'noun · procedure', '审判地点；案件审理地'],
  ['crime', 'noun · criminal law', '犯罪'], ['offence', 'noun · criminal law', '违法行为；罪行（英式拼写）'],
  ['felony', 'noun · criminal law', '重罪（美国）'], ['misdemeanor', 'noun · criminal law', '轻罪（美国）'],
  ['actus reus', 'Latin · criminal law', '犯罪行为要件'], ['mens rea', 'Latin · criminal law', '犯罪主观要件；犯意'],
  ['intent', 'noun · criminal law', '故意；意图'], ['negligence', 'noun · tort / criminal law', '过失；疏忽'],
  ['recklessness', 'noun · criminal law', '鲁莽；轻率'], ['acquittal', 'noun · criminal law', '无罪判决；宣告无罪'],
  ['conviction', 'noun · criminal law', '有罪判决；定罪'], ['sentence', 'noun · criminal law', '刑罚判决；判刑'],
  ['imprisonment', 'noun · criminal law', '监禁；徒刑'], ['fine', 'noun · criminal law', '罚金；罚款'],
  ['bail', 'noun · criminal procedure', '保释；保释金'], ['warrant', 'noun · criminal procedure', '令状；搜查令或逮捕令'],
  ['arrest', 'noun / verb · criminal procedure', '逮捕'], ['charge', 'noun / verb · criminal law', '指控；罪名'],
  ['indictment', 'noun · criminal procedure', '起诉书；大陪审团正式起诉'], ['contract', 'noun · contract law', '合同'],
  ['offer', 'noun · contract law', '要约'], ['acceptance', 'noun · contract law', '承诺；接受要约'],
  ['consideration', 'noun · contract law', '对价'], ['breach of contract', 'noun · contract law', '违约'],
  ['term', 'noun · contract law', '条款；期限（依语境）'], ['clause', 'noun · contract law', '条款'],
  ['enforceable', 'adjective · contract law', '可依法强制执行的'], ['void', 'adjective · contract law', '无效的；自始无效的'],
  ['voidable', 'adjective · contract law', '可撤销的'], ['consent', 'noun / verb · contract law', '同意；合意'],
  ['performance', 'noun · contract law', '履行；合同履行'], ['tort', 'noun · tort law', '侵权行为；侵权法'],
  ['duty of care', 'noun · tort law', '注意义务'], ['causation', 'noun · tort law', '因果关系']
];
const initialWords = coreTerms.map(([term, partOfSpeech, meaning], index) => ({
  id: index + 1,
  term, partOfSpeech, meaning, example: '', note: '', repetitions: 0,
  nextReview: new Date(Date.now() + Math.floor(index / 10) * 86400000).toISOString(),
  createdAt: Date.now() - index, history: []
}));

let words = loadWords();
let reviewQueue = [];
let reviewIndex = 0;

function loadWords() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved)) return initialWords;
    // 老用户已有的个人词库不被覆盖；仅补入尚不存在的核心词。
    const existingTerms = new Set(saved.map(word => String(word.term || '').trim().toLowerCase()));
    return [...saved, ...initialWords.filter(word => !existingTerms.has(word.term.toLowerCase()))];
  } catch { return initialWords; }
}
function saveWords() { localStorage.setItem(STORAGE_KEY, JSON.stringify(words)); }
function dateKey(date = new Date()) { return new Date(date).toLocaleDateString('en-CA'); }
function addDays(days) { const d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() + days); return d.toISOString(); }
function isDue(word) { return !word.nextReview || new Date(word.nextReview) <= new Date(); }
function status(word) { if (!word.repetitions) return 'new'; if (word.repetitions >= 4) return 'mastered'; return 'learning'; }
function statusText(value) { return ({ new: '尚未复习', learning: '学习中', mastered: '已掌握' })[value]; }
function escapeHtml(text = '') { return String(text).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function todayCount() { const key = dateKey(); return words.reduce((sum,w) => sum + (w.history || []).filter(x => x.date === key).length, 0); }
function formatToday() { return new Intl.DateTimeFormat('zh-CN', { month:'long', day:'numeric', weekday:'short' }).format(new Date()); }

function renderDashboard() {
  const due = words.filter(isDue).length, mastered = words.filter(w => status(w) === 'mastered').length;
  document.getElementById('todayLabel').textContent = formatToday();
  document.getElementById('totalWords').textContent = words.length;
  document.getElementById('dueWords').textContent = due;
  document.getElementById('dueBadge').textContent = due;
  document.getElementById('mobileDueBadge').textContent = due;
  document.getElementById('masteredWords').textContent = mastered;
  document.getElementById('todayReviews').textContent = todayCount();
  document.getElementById('dueMessage').textContent = due ? `有 ${due} 个词在等你回忆` : '今天没有待复习词';
  const focus = words.find(isDue) || words.sort((a,b) => b.createdAt - a.createdAt)[0];
  document.getElementById('focusContent').innerHTML = focus ? `<div class="focus-word"><div><h3>${escapeHtml(focus.term)}</h3><span class="pos">${escapeHtml(focus.partOfSpeech || 'legal term')}</span></div><span class="tag ${status(focus)}">${statusText(status(focus))}</span><p>${escapeHtml(focus.meaning)}</p>${focus.example ? `<small>“${escapeHtml(focus.example)}”</small>` : ''}</div>` : '<div class="empty-focus">先收集一个你刚遇到的法律英语词。它会出现在这里，陪你开始第一次复习。</div>';
  const labels = ['一','二','三','四','五','六','日']; const daily = [];
  for(let i=6;i>=0;i--){ const d=new Date(); d.setDate(d.getDate()-i); const count=words.reduce((n,w)=>n+(w.history||[]).filter(h=>h.date===dateKey(d)).length,0); daily.push({label:labels[(d.getDay()+6)%7],count}); }
  const max=Math.max(...daily.map(x=>x.count),1);
  document.getElementById('weekBars').innerHTML=daily.map((x,i)=>`<div class="bar-day"><div class="bar ${x.count?'done':''}" style="--h:${Math.max(5, x.count/max*70)}px"></div>${x.label}</div>`).join('');
  const activeDays=daily.filter(x=>x.count).length; document.getElementById('streakText').textContent=activeDays ? `本周已学习 ${activeDays} 天` : '刚刚开始';
}

function renderReview() {
  reviewQueue = words.filter(isDue).sort((a,b) => (a.nextReview || 0) - (b.nextReview || 0));
  reviewIndex = 0; renderReviewCard();
}
function renderReviewCard() {
  const area = document.getElementById('reviewArea');
  document.getElementById('reviewCounter').textContent = reviewQueue.length ? `${reviewIndex + 1} / ${reviewQueue.length}` : '0 / 0';
  const word = reviewQueue[reviewIndex];
  if (!word) { area.innerHTML = `<div class="paper-card review-empty"><div class="seal">§</div><h3>今天的复习完成了</h3><p>${words.length ? '做得好。明天再来，让记忆慢慢扎根。' : '先去收集第一个法律英语词吧。'}</p><button class="ink-button" data-go="collection">${words.length ? '收集新词' : '开始收集'} <span>→</span></button></div>`; return; }
  area.innerHTML = `<article class="paper-card review-card"><div class="review-head"><span>LEGAL ENGLISH / RECALL</span><span>${statusText(status(word))}</span></div><div class="review-body"><div class="pos">${escapeHtml(word.partOfSpeech || 'LEGAL TERM')}</div><div class="review-term">${escapeHtml(word.term)}</div><div class="recall-prompt">不看答案，试着说出它的中文意思和使用场景。</div><div class="answer" id="answer"><h4>${escapeHtml(word.meaning)}</h4>${word.example ? `<p><em>“${escapeHtml(word.example)}”</em></p>` : ''}${word.note ? `<p>注：${escapeHtml(word.note)}</p>` : ''}</div><button class="ink-button reveal-button" id="revealButton">显示答案 <span>↓</span></button><div class="rating-actions" id="ratingActions"><button class="rate-button again" data-rating="again"><span>明天</span>忘记了</button><button class="rate-button hard" data-rating="hard"><span>3 天后</span>有点模糊</button><button class="rate-button good" data-rating="good"><span>延后复习</span>记得很清楚</button></div></div></article>`;
  document.getElementById('revealButton').addEventListener('click', () => { document.getElementById('answer').classList.add('visible'); document.getElementById('ratingActions').classList.add('visible'); document.getElementById('revealButton').style.display='none'; });
  document.querySelectorAll('[data-rating]').forEach(btn => btn.addEventListener('click', () => rateWord(word, btn.dataset.rating)));
}
function rateWord(word, rating) {
  const intervals = { again: 1, hard: 3, good: [7,14,30,60,120] };
  let days;
  if (rating === 'good') { word.repetitions = (word.repetitions || 0) + 1; days = intervals.good[Math.min(word.repetitions - 1, intervals.good.length - 1)]; }
  else { word.repetitions = rating === 'again' ? 0 : Math.max(1, word.repetitions || 0); days = intervals[rating]; }
  word.nextReview = addDays(days);
  word.history = word.history || []; word.history.push({ date: dateKey(), rating });
  saveWords(); reviewIndex++; renderDashboard(); renderReviewCard();
}

function renderLibrary() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase(); const filter = document.getElementById('statusFilter').value;
  const filtered = words.filter(w => { const hay=[w.term,w.meaning,w.partOfSpeech,w.note,w.example].join(' ').toLowerCase(); return (!q || hay.includes(q)) && (filter === 'all' || status(w) === filter); }).sort((a,b)=>b.createdAt-a.createdAt);
  const list=document.getElementById('wordList');
  list.innerHTML=filtered.length ? filtered.map(w=>`<article class="word-row" data-id="${w.id}"><div><h3>${escapeHtml(w.term)}</h3><span class="part">${escapeHtml(w.partOfSpeech || 'LEGAL TERM')}</span></div><div class="meaning">${escapeHtml(w.meaning)}${w.example ? `<br><em>“${escapeHtml(w.example)}”</em>` : ''}</div><span class="tag ${status(w)}">${statusText(status(w))}</span><div class="row-actions"><button class="icon-button delete-word" title="删除" aria-label="删除 ${escapeHtml(w.term)}">×</button></div></article>`).join('') : '<div class="empty-list">没有找到匹配的词。<br />收集的每一个词，都会成为你自己的法律英语词典。</div>';
  document.querySelectorAll('.delete-word').forEach(btn=>btn.addEventListener('click',e=>{const id=Number(e.target.closest('.word-row').dataset.id); const word=words.find(w=>w.id===id); if(confirm(`确定删除 “${word.term}” 吗？`)){words=words.filter(w=>w.id!==id);saveWords();renderAll();showToast('已从词库移除');}}));
}
function renderAll() { renderDashboard(); renderLibrary(); }
function showToast(message) { const t=document.getElementById('toast'); t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400); }
function switchView(id) { document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id)); document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===id)); if(id==='review') renderReview(); if(id==='library') renderLibrary(); window.scrollTo({top:0,behavior:'smooth'}); }

document.querySelectorAll('[data-view]').forEach(btn=>btn.addEventListener('click',()=>switchView(btn.dataset.view)));
document.addEventListener('click',e=>{ const button=e.target.closest('[data-go]'); if(button) switchView(button.dataset.go); });
document.getElementById('wordForm').addEventListener('submit',e=>{ e.preventDefault(); const data=Object.fromEntries(new FormData(e.target)); const normalized=data.term.trim().toLowerCase(); if(words.some(w=>w.term.toLowerCase()===normalized)){showToast('这个词已经在你的词库里了');return;} words.unshift({id:Date.now(),term:data.term.trim(),partOfSpeech:data.partOfSpeech.trim(),meaning:data.meaning.trim(),example:data.example.trim(),note:data.note.trim(),repetitions:0,nextReview:null,createdAt:Date.now(),history:[]});saveWords();e.target.reset();renderAll();showToast('已收入词库，建议现在就复习一次'); });
document.getElementById('searchInput').addEventListener('input',renderLibrary); document.getElementById('statusFilter').addEventListener('change',renderLibrary);
const exportWords=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(words,null,2)],{type:'application/json'}));a.download=`legal-lexicon-${dateKey()}.json`;a.click();URL.revokeObjectURL(a.href);showToast('词库备份已导出');};
document.querySelectorAll('[data-export]').forEach(button=>button.addEventListener('click',exportWords));
document.querySelectorAll('[data-import]').forEach(input=>input.addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const imported=JSON.parse(reader.result);if(!Array.isArray(imported))throw new Error();if(!confirm(`导入 ${imported.length} 个词将替换当前词库，确定继续吗？`))return;words=imported.map(w=>({...w,id:w.id||Date.now()+Math.random(),history:w.history||[],repetitions:w.repetitions||0}));saveWords();renderAll();showToast('词库已导入');}catch{showToast('导入失败：请选择有效的备份文件');}};reader.readAsText(file);e.target.value='';}));
renderAll();
