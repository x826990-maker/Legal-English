const STORAGE_KEY = 'legal-lexicon-words-v1';
const VOICE_STORAGE_KEY = 'legal-lexicon-female-voice';
const FEMALE_VOICE_HINTS = ['samantha', 'ava', 'allison', 'aria', 'jenny', 'zira', 'susan', 'victoria', 'karen', 'moira', 'tessa', 'veena', 'serena', 'hazel', 'fiona', 'female'];
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
  ['duty of care', 'noun · tort law', '注意义务'], ['causation', 'noun · tort law', '因果关系'],
  ['deposition', 'noun · procedure', '证言笔录；庭外宣誓取证', 'The witness gave a deposition before the trial.', 'sworn testimony · examination', '多见于美国证据开示程序；证人须在宣誓后回答问题。'],
  ['cross-examination', 'noun · trial', '交叉询问', 'Defense counsel began the cross-examination of the witness.', 'cross · questioning', '由对方律师询问证人，常用于检验证词的可靠性。'],
  ['objection', 'noun · trial', '异议', 'Counsel raised an objection to the question.', 'challenge · protest', '庭审中通常须及时提出，并说明法律依据。'],
  ['relevance', 'noun · evidence', '关联性；相关性', 'The judge found that the evidence lacked relevance.', 'pertinence · connection', '证据是否与待证明事实有关，是可采性的基本问题。'],
  ['materiality', 'noun · evidence', '重要性；实质关联性', 'The court considered the materiality of the omitted fact.', 'significance · importance', '强调某事实对案件结果或争点具有实质影响。'],
  ['privilege', 'noun · evidence', '特权；保密特权', 'The client invoked attorney-client privilege.', 'legal protection · immunity', '证据法上可使特定沟通免于被强制披露。'],
  ['waiver', 'noun · general', '放弃；弃权', 'The party waived its right to appeal.', 'relinquishment · surrender', '常与 waive 搭配；注意放弃是否须明示或可由行为推定。'],
  ['confidentiality', 'noun · legal ethics', '保密性；保密义务', 'The lawyer must preserve client confidentiality.', 'secrecy · non-disclosure', '常见于律师职业伦理、合同和数据保护语境。'],
  ['judicial review', 'noun · public law', '司法审查', 'The court exercised judicial review of the agency decision.', 'court review', '法院审查行政机关或公权力行为是否合法。'],
  ['due process', 'noun · constitutional law', '正当法律程序', 'The applicant was denied due process.', 'procedural fairness · fair process', '美宪法语境常指政府剥夺权益前应提供公平程序。'],
  ['administrative law', 'noun · public law', '行政法', 'Administrative law governs agency action.', 'regulatory law · public law', '涉及行政机关的权限、程序和司法审查。'],
  ['property', 'noun · property law', '财产；财产权客体', 'The property was transferred to the buyer.', 'asset · estate', '可指不动产、动产或广义财产权益，须依语境判断。'],
  ['ownership', 'noun · property law', '所有权', 'Ownership passed upon registration.', 'title · proprietorship', '强调对财产的权属；不必然等于实际占有。'],
  ['possession', 'noun · property law', '占有；持有', 'The tenant remained in possession of the premises.', 'custody · control', '指对物的实际控制或法律控制，可与 ownership 区分。'],
  ['title', 'noun · property law', '产权；所有权凭证', 'The buyer obtained good title to the land.', 'ownership right · deed', '财产法中多指合法权属，而非文章标题。'],
  ['lease', 'noun / verb · property law', '租赁；租约', 'The parties signed a five-year lease.', 'rental agreement · tenancy', '既可指租约，也可作动词“出租／承租”。'],
  ['landlord', 'noun · property law', '出租人；房东', 'The landlord sought to recover unpaid rent.', 'lessor', '与 tenant 相对；lessor 是更正式的合同用语。'],
  ['tenant', 'noun · property law', '承租人；租户', 'The tenant gave notice to terminate the lease.', 'lessee · renter', '与 landlord 相对；在物权法中也可指享有特定地产权益的人。'],
  ['easement', 'noun · property law', '地役权；用益地役权', 'The owner granted an easement for access.', 'right of way · servitude', '通常允许权利人以特定方式使用他人土地，但不取得占有。'],
  ['fiduciary duty', 'noun · equity', '信义义务', 'A director owes fiduciary duties to the company.', 'duty of loyalty · duty of care', '受托人、董事等应为受益人或公司最佳利益行事。'],
  ['trust', 'noun · equity', '信托', 'The assets were held in trust for the children.', 'fiduciary arrangement', '由受托人管理财产并为受益人利益持有。'],
  ['trustee', 'noun · equity', '受托人', 'The trustee administered the trust property.', 'fiduciary · administrator', '受托人不是受益人，负有管理和忠实等义务。'],
  ['beneficiary', 'noun · equity', '受益人', 'The beneficiary received income from the trust.', 'recipient · obligee', '可出现于信托、遗嘱、保险或为第三人利益的合同中。'],
  ['corporation', 'noun · business law', '公司；法人团体', 'The corporation entered into the agreement.', 'company · legal entity', '通常是与股东人格分离、可独立承担权利义务的主体。'],
  ['shareholder', 'noun · business law', '股东', 'Shareholders voted to elect the directors.', 'stockholder · member', '通常持有公司股份；不等同于董事或公司本身。'],
  ['director', 'noun · business law', '董事', 'The director disclosed the conflict of interest.', 'board member', '董事参与公司治理，常负有 fiduciary duty。'],
  ['partnership', 'noun · business law', '合伙；合伙企业', 'The partners formed a partnership to run the business.', 'business association · firm', '具体法律后果因普通合伙、有限合伙等形式而异。'],
  ['bankruptcy', 'noun · insolvency law', '破产；破产程序', 'The debtor filed for bankruptcy protection.', 'insolvency proceeding', '通常指法院主持的债务清理或重整程序；并非单纯“没钱”。'],
  ['insolvency', 'noun · commercial law', '无力清偿；资不抵债', 'The company became insolvent after defaulting on its debts.', 'inability to pay debts', '是财务／法律状态；是否进入 bankruptcy 取决于适用法。'],
  ['treaty', 'noun · international law', '条约', 'The states ratified the treaty.', 'international agreement · convention', '国家间受国际法调整的书面协议；具体批准程序因国家而异。']
];
const coreDetails = {
  plaintiff: ['The plaintiff filed a claim for damages.', 'claimant · claimant party', '民事诉讼中主动提起诉讼的一方；英国语境有时用 claimant。'],
  defendant: ['The defendant denied liability for the loss.', 'respondent · accused', '民事中指被起诉方；刑事中指被控犯罪的人。'],
  jurisdiction: ['The court has jurisdiction over this dispute.', 'authority · competence', '重点是法院“有无权力”审理案件；不要与 venue（地点）混淆。'],
  precedent: ['The court followed the binding precedent.', 'authority · prior decision', '普通法体系中，先前判决可成为后案的权威依据。'],
  statute: ['The statute imposes a duty on employers.', 'act · legislation', '通常指立法机关制定的成文法律；英国常见 Act。'],
  litigation: ['The dispute was resolved before litigation began.', 'lawsuit · legal action', '泛指通过法院解决争议的过程，而非单一文件。'],
  claim: ['The claimant brought a claim for breach of contract.', 'cause of action · demand', '可指权利主张、诉讼请求或保险索赔，需看上下文。'],
  complaint: ['The plaintiff filed a complaint in the district court.', 'statement of claim · pleading', '美国民事程序中的起诉文件；不要按日常英语只理解为“抱怨”。'],
  appeal: ['The defendant appealed the judgment.', 'challenge · review', '并非重审所有事实；通常请求上级法院审查下级裁判错误。'],
  evidence: ['The evidence supported the claimant’s case.', 'proof · material', '泛指用于证明事实的材料；是否能提交法庭仍需看 admissibility。'],
  'burden of proof': ['The claimant bears the burden of proof.', 'onus of proof', '指由哪一方承担证明特定事实的责任。'],
  hearsay: ['The statement was excluded as hearsay.', 'second-hand statement', '通常是转述他人庭外陈述以证明其内容真实；存在许多例外。'],
  damages: ['The court awarded damages for the injury.', 'monetary compensation · award', '通常为金钱救济；注意与 damage（损害）在形式和意义上的区别。'],
  injunction: ['The court granted an injunction to stop the conduct.', 'court order · restraining order', '命令当事人作为或不作为的救济方式；不一定是金钱赔偿。'],
  negligence: ['The driver was liable for negligence.', 'carelessness · lack of due care', '侵权法中通常指未达到合理注意标准，不等于故意。'],
  contract: ['The parties entered into a binding contract.', 'agreement · bargain', '并非所有 agreement 都可强制执行；须看要约、承诺、对价等要件。'],
  consideration: ['The promise was supported by consideration.', 'value exchanged · quid pro quo', '英美合同法术语，指为承诺交换的有价值事物，不是“考虑”。'],
  'breach of contract': ['Late delivery amounted to a breach of contract.', 'contractual default · non-performance', '一方未按合同履行义务；救济可能包括 damages 或 specific performance。'],
  tort: ['Negligence is a common type of tort.', 'civil wrong · delict', '独立于合同的民事不法行为；不要与 crime（犯罪）混同。'],
  'duty of care': ['The doctor owed the patient a duty of care.', 'legal duty · standard of care', '过失侵权分析常先问被告是否对原告负有此义务。'],
  causation: ['The claimant must prove causation between the breach and the loss.', 'causal link · cause in fact', '需证明被诉行为与损害之间存在法律上足够的因果联系。']
};
const phoneticGuide = {
  law:'/lɔː/', legal:'/ˈliːɡəl/', right:'/raɪt/', duty:'/ˈduːti/', obligation:'/ˌɒblɪˈɡeɪʃn/', liability:'/ˌlaɪəˈbɪləti/', remedy:'/ˈremədi/', jurisdiction:'/ˌdʒʊrɪsˈdɪkʃn/', statute:'/ˈstætʃuːt/', legislation:'/ˌledʒɪsˈleɪʃn/', regulation:'/ˌreɡjuˈleɪʃn/', constitution:'/ˌkɒnstɪˈtjuːʃn/',
  'common law':'/ˌkɒmən ˈlɔː/', 'civil law':'/ˌsɪvl ˈlɔː/', 'case law':'/ˈkeɪs lɔː/', precedent:'/ˈpresɪdənt/', 'stare decisis':'/ˈsteri dɪˈsaɪsɪs/', court:'/kɔːrt/', judge:'/dʒʌdʒ/', jury:'/ˈdʒʊri/', tribunal:'/traɪˈbjuːnl/', litigation:'/ˌlɪtɪˈɡeɪʃn/', lawsuit:'/ˈlɔːsuːt/', claim:'/kleɪm/', party:'/ˈpɑːrti/', plaintiff:'/ˈpleɪntɪf/', defendant:'/dɪˈfendənt/', claimant:'/ˈkleɪmənt/', respondent:'/rɪˈspɑːndənt/', prosecutor:'/ˈprɑːsɪkjuːtər/', attorney:'/əˈtɜːrni/', counsel:'/ˈkaʊnsl/',
  complaint:'/kəmˈpleɪnt/', pleading:'/ˈpliːdɪŋ/', summons:'/ˈsʌmənz/', 'service of process':'/ˈsɜːrvɪs əv ˈprɑːses/', hearing:'/ˈhɪrɪŋ/', trial:'/ˈtraɪəl/', appeal:'/əˈpiːl/', appellant:'/əˈpelənt/', appellee:'/ˌæpəˈliː/', judgment:'/ˈdʒʌdʒmənt/', order:'/ˈɔːrdər/', ruling:'/ˈruːlɪŋ/', verdict:'/ˈvɜːrdɪkt/', settlement:'/ˈsetlmənt/', mediation:'/ˌmiːdiˈeɪʃn/', arbitration:'/ˌɑːrbɪˈtreɪʃn/', evidence:'/ˈevɪdəns/', testimony:'/ˈtestɪmoʊni/', witness:'/ˈwɪtnəs/', affidavit:'/ˌæfɪˈdeɪvɪt/', subpoena:'/səˈpiːnə/',
  'burden of proof':'/ˈbɜːrdn əv pruːf/', 'standard of proof':'/ˈstændərd əv pruːf/', admissible:'/ədˈmɪsəbl/', hearsay:'/ˈhɪrseɪ/', discovery:'/dɪˈskʌvəri/', disclosure:'/dɪsˈkloʊʒər/', motion:'/ˈmoʊʃn/', injunction:'/ɪnˈdʒʌŋkʃn/', damages:'/ˈdæmɪdʒɪz/', compensation:'/ˌkɑːmpenˈseɪʃn/', costs:'/kɔːsts/', 'statute of limitations':'/ˈstætʃuːt əv ˌlɪmɪˈteɪʃnz/', venue:'/ˈvenjuː/', crime:'/kraɪm/', offence:'/əˈfens/', felony:'/ˈfeləni/', misdemeanor:'/ˌmɪsdɪˈmiːnər/', 'actus reus':'/ˈæktəs ˈriːəs/', 'mens rea':'/ˈmenz ˈriːə/', intent:'/ɪnˈtent/', negligence:'/ˈneɡlɪdʒəns/', recklessness:'/ˈrekləsnəs/', acquittal:'/əˈkwɪtl/', conviction:'/kənˈvɪkʃn/', sentence:'/ˈsentəns/', imprisonment:'/ɪmˈprɪznmənt/', fine:'/faɪn/', bail:'/beɪl/', warrant:'/ˈwɔːrənt/', arrest:'/əˈrest/', charge:'/tʃɑːrdʒ/', indictment:'/ɪnˈdaɪtmənt/',
  contract:'/ˈkɑːntrækt/', offer:'/ˈɔːfər/', acceptance:'/əkˈseptəns/', consideration:'/kənˌsɪdəˈreɪʃn/', 'breach of contract':'/briːtʃ əv ˈkɑːntrækt/', term:'/tɜːrm/', clause:'/klɔːz/', enforceable:'/ɪnˈfɔːrsəbl/', void:'/vɔɪd/', voidable:'/ˈvɔɪdəbl/', consent:'/kənˈsent/', performance:'/pərˈfɔːrməns/', tort:'/tɔːrt/', 'duty of care':'/ˌduːti əv ˈker/', causation:'/ˌkɔːˈzeɪʃn/', deposition:'/ˌdepəˈzɪʃn/', 'cross-examination':'/ˌkrɔːs ɪɡˌzæmɪˈneɪʃn/', objection:'/əbˈdʒekʃn/', relevance:'/ˈreləvəns/', materiality:'/məˌtɪriˈæləti/', privilege:'/ˈprɪvəlɪdʒ/', waiver:'/ˈweɪvər/', confidentiality:'/ˌkɑːnfɪˌdenʃiˈæləti/', 'judicial review':'/dʒuːˈdɪʃl rɪˈvjuː/', 'due process':'/ˌduː ˈprɑːses/', 'administrative law':'/ədˈmɪnɪstreɪtɪv lɔː/', property:'/ˈprɑːpərti/', ownership:'/ˈoʊnərʃɪp/', possession:'/pəˈzeʃn/', title:'/ˈtaɪtl/', lease:'/liːs/', landlord:'/ˈlændlɔːrd/', tenant:'/ˈtenənt/', easement:'/ˈiːzmənt/', 'fiduciary duty':'/fɪˈduːʃieri ˈduːti/', trust:'/trʌst/', trustee:'/trʌˈstiː/', beneficiary:'/ˌbenɪˈfɪʃieri/', corporation:'/ˌkɔːrpəˈreɪʃn/', shareholder:'/ˈʃerhoʊldər/', director:'/dəˈrektər/', partnership:'/ˈpɑːrtnərʃɪp/', bankruptcy:'/ˈbæŋkrʌptsi/', insolvency:'/ɪnˈsɑːlvənsi/', treaty:'/ˈtriːti/'
};
const initialWords = coreTerms.map(([term, partOfSpeech, meaning, example = '', synonyms = '', usage = ''], index) => {
  const detail = coreDetails[term] || [];
  return {
  id: index + 1,
  term, partOfSpeech, meaning, phonetic: phoneticGuide[term] || '', example: example || detail[0] || '', synonyms: synonyms || detail[1] || '', usage: usage || detail[2] || '', note: '', repetitions: 0,
  nextReview: new Date(Date.now() + Math.floor(index / 10) * 86400000).toISOString(),
  createdAt: Date.now() - index, history: []
};
});

let words = loadWords();
let reviewQueue = [];
let reviewIndex = 0;

function loadWords() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved)) return initialWords;
    // 老用户已有的个人词库不被覆盖；仅补入尚不存在的核心词。
    const coreByTerm = new Map(initialWords.map(word => [word.term.toLowerCase(), word]));
    const updatedSaved = saved.map(word => {
      const core = coreByTerm.get(String(word.term || '').trim().toLowerCase());
      return core ? {...word, phonetic: word.phonetic || core.phonetic, example: word.example || core.example, synonyms: word.synonyms || core.synonyms, usage: word.usage || core.usage} : {...word, phonetic: word.phonetic || '', synonyms: word.synonyms || '', usage: word.usage || ''};
    });
    const existingTerms = new Set(updatedSaved.map(word => String(word.term || '').trim().toLowerCase()));
    return [...updatedSaved, ...initialWords.filter(word => !existingTerms.has(word.term.toLowerCase()))];
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
  const reviewDetails = [
    word.synonyms && `<div class="review-detail"><b>近义表达</b><span>${escapeHtml(word.synonyms)}</span></div>`,
    word.usage && `<div class="review-detail"><b>用法提示</b><span>${escapeHtml(word.usage)}</span></div>`
  ].filter(Boolean).join('');
  document.querySelector('.review-term').insertAdjacentHTML('afterend', `<div class="pronunciation"><span>${escapeHtml(word.phonetic || '音标暂未录入')}</span><button class="speak-button" id="speakButton" type="button" aria-label="朗读 ${escapeHtml(word.term)}">◖ 朗读</button></div>`);
  document.getElementById('speakButton').addEventListener('click', () => speakWord(word.term));
  if (reviewDetails) document.getElementById('answer').insertAdjacentHTML('beforeend', reviewDetails);
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
  document.querySelectorAll('.word-row').forEach(row => {
    const word = words.find(item => item.id === Number(row.dataset.id)); if (!word) return;
    if (word.phonetic) row.querySelector('.part').insertAdjacentHTML('afterend', `<span class="phonetic-mini">${escapeHtml(word.phonetic)}</span>`);
    row.querySelector('.row-actions').insertAdjacentHTML('afterbegin', `<button class="icon-button speak-mini" title="朗读" aria-label="朗读 ${escapeHtml(word.term)}">◖</button>`);
    row.querySelector('.speak-mini').addEventListener('click', () => speakWord(word.term));
  });
  document.querySelectorAll('.delete-word').forEach(btn=>btn.addEventListener('click',e=>{const id=Number(e.target.closest('.word-row').dataset.id); const word=words.find(w=>w.id===id); if(confirm(`确定删除 “${word.term}” 吗？`)){words=words.filter(w=>w.id!==id);saveWords();renderAll();showToast('已从词库移除');}}));
}
function renderAll() { renderDashboard(); renderLibrary(); }
function showToast(message) { const t=document.getElementById('toast'); t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400); }
function getFemaleEnglishVoices() {
  if (!('speechSynthesis' in window)) return [];
  return window.speechSynthesis.getVoices().filter(voice => /^en(-|_)/i.test(voice.lang) && FEMALE_VOICE_HINTS.some(hint => voice.name.toLowerCase().includes(hint)));
}
function selectedFemaleVoice() {
  const voices = getFemaleEnglishVoices();
  const savedVoice = localStorage.getItem(VOICE_STORAGE_KEY);
  return voices.find(voice => voice.voiceURI === savedVoice) || voices[0];
}
function populateFemaleVoicePicker() {
  const select = document.getElementById('voiceSelect'); const status = document.getElementById('voiceStatus');
  if (!select || !status) return;
  const voices = getFemaleEnglishVoices();
  if (!voices.length) {
    select.innerHTML = '<option value="">未检测到英语女声</option>'; select.disabled = true;
    status.textContent = '请先在设备系统中下载英语女声，之后重新打开本程序。'; return;
  }
  const savedVoice = localStorage.getItem(VOICE_STORAGE_KEY);
  select.disabled = false;
  select.innerHTML = voices.map(voice => `<option value="${escapeHtml(voice.voiceURI)}">${escapeHtml(voice.name)} · ${escapeHtml(voice.lang)}</option>`).join('');
  select.value = voices.some(voice => voice.voiceURI === savedVoice) ? savedVoice : voices[0].voiceURI;
  localStorage.setItem(VOICE_STORAGE_KEY, select.value);
  status.textContent = '已启用女声；此选择仅保存在当前设备。';
}
function normalizeIpa(value) { const ipa = String(value || '').trim(); return ipa ? (ipa.startsWith('/') ? ipa : `/${ipa}/`) : ''; }
async function resolvePhonetic(term, manualPhonetic) {
  const manual = normalizeIpa(manualPhonetic); if (manual) return manual;
  const builtIn = phoneticGuide[term.trim().toLowerCase()]; if (builtIn) return builtIn;
  if (!navigator.onLine) throw new Error('离线时请填写 IPA 音标后再保存新词');
  let response;
  try { response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(term.trim())}`); } catch { throw new Error('未能查询音标，请检查网络或手动填写 IPA'); }
  if (!response.ok) throw new Error('未查到该词的 IPA，请手动填写后再保存');
  const entries = await response.json(); const first = entries[0] || {};
  const phonetic = first.phonetic || (first.phonetics || []).find(item => item.text)?.text;
  if (!phonetic) throw new Error('该词暂无可用 IPA，请手动填写后再保存');
  return normalizeIpa(phonetic);
}
function speakWord(term) {
  if (!('speechSynthesis' in window)) { showToast('当前浏览器不支持语音朗读'); return; }
  const voice = selectedFemaleVoice();
  if (!voice) { showToast('请先在“使用”页选择或在系统中下载英语女声'); return; }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(term);
  utterance.lang = 'en-US'; utterance.rate = .82; utterance.pitch = 1;
  utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}
function switchView(id) { document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id)); document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===id)); if(id==='review') renderReview(); if(id==='library') renderLibrary(); window.scrollTo({top:0,behavior:'smooth'}); }

document.querySelectorAll('[data-view]').forEach(btn=>btn.addEventListener('click',()=>switchView(btn.dataset.view)));
document.addEventListener('click',e=>{ const button=e.target.closest('[data-go]'); if(button) switchView(button.dataset.go); });
document.getElementById('wordForm').addEventListener('submit',async e=>{ e.preventDefault(); const form=e.target; const data=Object.fromEntries(new FormData(form)); const normalized=data.term.trim().toLowerCase(); if(words.some(w=>w.term.toLowerCase()===normalized)){showToast('这个词已经在你的词库里了');return;} const submit=form.querySelector('[type="submit"]'); submit.disabled=true; submit.textContent='正在确认 IPA…'; try { const phonetic=await resolvePhonetic(data.term, data.phonetic); words.unshift({id:Date.now(),term:data.term.trim(),phonetic,partOfSpeech:data.partOfSpeech.trim(),meaning:data.meaning.trim(),example:data.example.trim(),synonyms:data.synonyms.trim(),usage:data.usage.trim(),note:data.note.trim(),repetitions:0,nextReview:null,createdAt:Date.now(),history:[]});saveWords();form.reset();renderAll();showToast('已收入词库，并已保存 IPA 音标'); } catch(error) { showToast(error.message || '无法确认 IPA 音标'); } finally { submit.disabled=false; submit.innerHTML='收入我的词库 <span>→</span>'; } });
document.getElementById('searchInput').addEventListener('input',renderLibrary); document.getElementById('statusFilter').addEventListener('change',renderLibrary);
const exportWords=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(words,null,2)],{type:'application/json'}));a.download=`legal-lexicon-${dateKey()}.json`;a.click();URL.revokeObjectURL(a.href);showToast('词库备份已导出');};
document.querySelectorAll('[data-export]').forEach(button=>button.addEventListener('click',exportWords));
document.querySelectorAll('[data-import]').forEach(input=>input.addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const imported=JSON.parse(reader.result);if(!Array.isArray(imported))throw new Error();if(!confirm(`导入 ${imported.length} 个词将替换当前词库，确定继续吗？`))return;words=imported.map(w=>({...w,id:w.id||Date.now()+Math.random(),history:w.history||[],repetitions:w.repetitions||0}));saveWords();renderAll();showToast('词库已导入');}catch{showToast('导入失败：请选择有效的备份文件');}};reader.readAsText(file);e.target.value='';}));
document.getElementById('voiceSelect').addEventListener('change',event=>{localStorage.setItem(VOICE_STORAGE_KEY,event.target.value);showToast('女声朗读偏好已保存');});
if ('speechSynthesis' in window) { window.speechSynthesis.onvoiceschanged = populateFemaleVoicePicker; }
renderAll();
populateFemaleVoicePicker();
