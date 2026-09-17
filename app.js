const cardDecks={
  "fixed-income":{name:"Lectures 1 & 2 · Fixed income",cards:[
    ["Yield","What does a bond's yield mean?","The single discount rate that makes the present value of the bond's promised cash flows equal its market price.","P = Σ CFₜ / (1 + y)ᵗ"],
    ["Price–yield relationship","Why do price and yield move in opposite directions?","A higher required yield discounts every future cash flow more heavily, so its present value falls. A lower yield raises present value.","Yield ↑ → Price ↓; Yield ↓ → Price ↑"],
    ["Duration","What intuition should I remember?","Duration is the approximate percentage price change for a 1 percentage-point change in yield. Duration 8 means a +1% yield move implies about an −8% price move.","ΔP / P ≈ −D · Δy"],
    ["DV01","How is DV01 different from duration?","DV01 translates rate sensitivity into dollars: the approximate dollar price change for a 1 basis-point yield move. It is the practical hedge-size measure.","DV01 ≈ D · P · 0.0001"],
    ["Clean vs. dirty price","Which price settles?","Clean price excludes accrued interest and is used for quoting. Dirty price includes accrued interest and is the cash amount exchanged at settlement.","Dirty price = clean price + accrued interest"],
    ["Treasury zero curve","Why isn't the Treasury yield curve enough by itself?","Coupon Treasury yields combine several payment dates. The zero curve provides one discount rate for each maturity so every bond cash flow can be valued correctly.","P = Σ CFₖ · d(0,tₖ)"],
    ["Zero rate","What is a zero rate?","The rate for a single cash flow paid at one maturity. It is the building block of the zero curve.","d(0,T) = e^(−z(T)T)"],
    ["Forward rate","What does a forward rate represent?","The future borrowing rate implied today between two dates. It makes investing long equivalent to investing short and rolling forward.","f(t₁,t₂) = [z₂t₂ − z₁t₁] / (t₂ − t₁)"],
    ["Z-spread","What is the z-spread?","The constant spread added to every point of the Treasury zero curve so discounted promised cash flows equal the bond's market price.","P = Σ CFₖ · exp{−[z(tₖ)+s]tₖ}"],
    ["Z-spread trading","How do I use z-spread for relative value?","Compare actual z-spread with the fair issuer curve. Wider than fair can mean cheap; tighter than fair can mean rich, after other risks are controlled.","Actual z > fair → potentially cheap; actual z < fair → potentially rich"],
    ["Carry","Where does carry P&L come from?","Carry is expected P&L while the bond's own yield stays unchanged: coupon income plus pull-to-par.","Carry ≈ coupon income + pull-to-par"],
    ["Rolldown","Why can an unchanged curve still create P&L?","As a bond ages it moves to a shorter point on the same fixed curve. On an upward-sloping curve, that often lowers yield and raises price.","Roll P&L ≈ −D · P · Δy_curve"],
    ["Nelson–Siegel curve","What do the four parameters represent?","L controls long-run level, S short-end slope, C medium-term curvature, and D the decay speed.","f(t)=L+Se^(−Dt)+CDt·e^(−Dt)"],
    ["Nelson–Siegel limits","What are the short- and long-maturity limits?","Near zero, level and slope combine. At long maturity, exponential terms vanish and the curve converges to level.","z(0)=L+S; z(∞)=L"]
  ]},
  "quant-equity":{name:"Lecture 3 · Quantitative equity",cards:[
    ["Alpha vs. beta","What is the difference between alpha and factor exposure?","Beta is systematic factor exposure. Alpha is the return left after controlling for the selected factors, so alpha is model-relative.","Rᵢₜ−Rfₜ = αᵢ + βᵢᵀFₜ + εᵢₜ"],
    ["Time-series vs. cross-sectional","What is the key distinction?","Time-series analysis compares an asset with itself through time. Cross-sectional analysis compares many assets at the same date.","Across time vs. across assets"],
    ["Time-series beta","Why is beta estimated through time?","For each asset, regress historical excess returns on historical factor returns to estimate how the asset co-moves with the factor.","Rᵢₜ−Rfₜ = αᵢ + βᵢFₜ + εᵢₜ"],
    ["Fama–MacBeth","What are the two stages?","Stage 1 estimates each asset's β through time. Stage 2 compares assets cross-sectionally to estimate λ, the price per unit of exposure.","Stage 1: β̂ᵢ; Stage 2: Rᵢₜ = λ₀ₜ + β̂ᵢᵀλₜ + uᵢₜ"],
    ["2 × 3 portfolios","How should I compare the six Fama–French cells?","Compare one dimension while holding the other fixed: high versus low B/M within size, or small versus big within B/M.","SMB = small − big; HML = high B/M − low B/M"],
    ["81 portfolio cells","Why does a 3×3×3×3 sort create 81 cells?","There are three groups for each of four characteristics, so 3⁴=81 portfolio cells. Better isolation means fewer stocks and more noise per cell.","3 × 3 × 3 × 3 = 81"],
    ["Type I error","What mistake does a false positive make?","You conclude alpha exists when true alpha is zero. Repeated data mining increases this danger.","Reject H₀ even though H₀ is true"],
    ["Type II error","Did I find real alpha but reject it accidentally?","Real alpha exists, but the test fails to detect it: you fail to reject the zero-alpha null even though it is false.","Fail to reject H₀ even though H₀ is false"],
    ["Dividend discount model","What determines fundamental value?","The present value of all future dividends or cash distributions to shareholders.","V₀ = Σₜ Dₜ / (1+r)ᵗ"],
    ["Gordon Growth Model","How do I value a stable-growth company?","Value equals next year's dividend divided by required return minus perpetual growth. The model requires r>g.","V₀ = D₁ / (r−g), with r>g"],
    ["Sustainable growth","Where does a mature firm's growth come from?","Growth equals ROE on the fraction of earnings retained. More retention helps only when reinvested capital earns an adequate ROE.","g = ROE(1−payout); payout = 1−g/ROE"],
    ["P/B and ROE","Why is low P/B not automatically cheap?","P/B depends on expected ROE, growth, and required return. Low P/B may be justified by weak profitability or high risk.","P/B = (ROE−g)/(r−g)"],
    ["CAPM","How does CAPM determine required return?","Required return equals risk-free rate plus beta times the market risk premium. Higher beta means higher systematic risk and required return.","r = r_f + β(E[R_m]−r_f)"],
    ["GRS test","What does the GRS test ask?","Whether all test-portfolio alphas are jointly zero. Lower GRS means smaller joint pricing errors when comparing models on the same assets.","H₀: α₁ = α₂ = … = αₙ = 0"],
    ["Factor zoo","Why do hundreds of discovered factors create a problem?","Testing many signals produces chance winners. Replication, microcap controls, factor controls, and stricter thresholds eliminate many anomalies.","More trials → greater false-discovery risk"],
    ["t-statistic","What does a t-statistic tell me?","It measures estimated effect relative to uncertainty. Larger |t| is stronger evidence, but multiple testing requires a higher hurdle.","t = estimate / standard error; |t|>2 common, |t|>3 stricter"]
  ]}
};
let activeCardDeck="fixed-income",cardIndex=0,flipped=false;
const label=document.querySelector("#card-label"),content=document.querySelector("#card-content"),footer=document.querySelector("#card-footer"),flashcard=document.querySelector("#flashcard"),count=document.querySelector("#card-count"),progress=document.querySelector("#progress"),reveal=document.querySelector("#reveal"),deckLabel=document.querySelector("#card-deck-label");
function currentCards(){return cardDecks[activeCardDeck].cards}
function render(){const cards=currentCards(),c=cards[cardIndex];label.textContent=flipped?"Answer":c[0];content.textContent=flipped?c[2]:c[1];footer.textContent=flipped?c[3]:"Click to reveal";flashcard.classList.toggle("flipped",flipped);flashcard.setAttribute("aria-label",flipped?"Show question":"Reveal answer");reveal.textContent=flipped?"Show question":"Reveal answer";count.textContent=String(cardIndex+1).padStart(2,"0")+" / "+cards.length;deckLabel.textContent=cardDecks[activeCardDeck].name;progress.style.width=((cardIndex+1)/cards.length*100)+"%"}
function move(delta){const cards=currentCards();cardIndex=(cardIndex+delta+cards.length)%cards.length;flipped=false;render()}
document.querySelectorAll(".flashcard-deck-button").forEach(button=>button.addEventListener("click",()=>{activeCardDeck=button.dataset.deck;cardIndex=0;flipped=false;document.querySelectorAll(".flashcard-deck-button").forEach(item=>item.classList.toggle("active",item===button));render()}));
flashcard.addEventListener("click",()=>{flipped=!flipped;render()});reveal.addEventListener("click",()=>{flipped=!flipped;render()});document.querySelector("#previous").addEventListener("click",()=>move(-1));document.querySelector("#next").addEventListener("click",()=>move(1));render();
const pages=[...document.querySelectorAll(".page")],navButtons=[...document.querySelectorAll(".nav-button")],sidebar=document.querySelector("#sidebar");
function showPage(id){pages.forEach(p=>p.classList.toggle("active",p.id===id));navButtons.forEach(b=>b.classList.toggle("active",b.dataset.section===id));sidebar.classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});history.replaceState(null,"","#"+id)}
navButtons.forEach(button=>button.addEventListener("click",()=>showPage(button.dataset.section)));document.querySelector("#menu-toggle").addEventListener("click",()=>sidebar.classList.toggle("open"));
const initial=location.hash.slice(1);if(pages.some(p=>p.id===initial))showPage(initial);

const escapeGuide=value=>String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[char]));
const guideModuleConfig={
  "fixed-income":{
    eyebrow:"Lectures 1–2 · Misha Boroditsky · 40 mini-lectures",
    title:"Systematic fixed income — complete guide",
    intro:"The full learning guide follows the professor deck from market structure and bond mathematics through curve construction, relative value, execution, ETFs, and municipals.",
    path:["Instrument","Curve","Spread","Residual","Portfolio"]
  },
  "quant-equity":{
    eyebrow:"Lecture 3 · Dmitry Rakhlin · 40 mini-lectures",
    title:"Quantitative equity — complete guide",
    intro:"The complete guide develops alpha and beta, time-series and cross-sectional research, Fama–MacBeth, factor construction, behavioral explanations, valuation, model testing, and project diagnostics.",
    path:["Hypothesis","Exposure","Test","Portfolio","Attribution"]
  }
};

function renderDetailedGuide(){
  if(typeof STUDY_GUIDE_SECTIONS==="undefined")return;
  Object.entries(guideModuleConfig).forEach(([moduleName,config])=>{
    const panel=document.querySelector(`[data-module-panel="${moduleName}"]`);
    if(!panel)return;
    const lessons=STUDY_GUIDE_SECTIONS[moduleName];
    const path=config.path.map((item,index)=>`${index?"<b>→</b>":""}<span>${escapeGuide(item)}</span>`).join("");
    const lessonMarkup=lessons.map((lesson,index)=>`
      <details class="lesson detailed-lesson" ${index===0?"open":""} data-keywords="${escapeGuide([lesson.focus,lesson.keywords,lesson.title].join(" ").toLowerCase())}">
        <summary><span class="lesson-number">${String(lesson.id).padStart(2,"0")}</span><span><small>${escapeGuide(lesson.focus)}</small><strong>${escapeGuide(lesson.title)}</strong></span><em>${escapeGuide(lesson.pages)}</em></summary>
        <div class="lesson-body">
          <div class="lesson-source"><span>Professor deck</span><b>${escapeGuide(lesson.pages)}</b></div>
          <div class="layer observation"><h4>Observation</h4><p>${escapeGuide(lesson.observation)}</p></div>
          <div class="layer intuition"><h4>Intuition</h4><p>${escapeGuide(lesson.intuition)}</p></div>
          <div class="layer mathematics"><h4>Mathematics / structure</h4><div class="equation prose-equation">${escapeGuide(lesson.mathematics)}</div></div>
          <div class="layer consequence"><h4>Trading / modeling consequence</h4><p>${escapeGuide(lesson.application)}</p></div>
          <div class="lesson-notes"><p><b>Common confusion</b>${escapeGuide(lesson.confusion)}</p><p><b>Memory rule</b>${escapeGuide(lesson.remember)}</p></div>
        </div>
      </details>`).join("");
    panel.innerHTML=`<div class="module-intro"><div><p class="eyebrow">${escapeGuide(config.eyebrow)}</p><h2>${escapeGuide(config.title)}</h2><p>${escapeGuide(config.intro)}</p></div><div class="module-path">${path}</div></div><div class="module-index"><span>${lessons.length} sections</span><span>6 learning layers each</span><span>Source-page references</span></div>${lessonMarkup}`;
    const button=document.querySelector(`[data-module="${moduleName}"]`);
    if(button)button.dataset.count=lessons.length;
  });
  const toolbar=document.querySelector(".guide-toolbar");
  if(toolbar&&!document.querySelector("#lesson-count")){
    const stats=document.createElement("div");stats.className="guide-stats";stats.id="lesson-count";stats.textContent="80 mini-lectures · search the complete guide";toolbar.append(stats);
  }
}
renderDetailedGuide();

const moduleButtons=[...document.querySelectorAll(".module-button")];
const modulePanels=[...document.querySelectorAll("[data-module-panel]")];
const guideSearch=document.querySelector("#guide-search");
const lessons=[...document.querySelectorAll(".lesson")];

function showModule(moduleName){
  moduleButtons.forEach(button=>button.classList.toggle("active",button.dataset.module===moduleName));
  modulePanels.forEach(panel=>panel.classList.toggle("active",panel.dataset.modulePanel===moduleName));
  if(guideSearch){guideSearch.value="";filterLessons("")}
}

function filterLessons(query){
  const normalized=query.trim().toLowerCase();
  const activePanel=document.querySelector("[data-module-panel].active");
  let visible=0;
  lessons.forEach(lesson=>{
    const haystack=(lesson.dataset.keywords+" "+lesson.textContent).toLowerCase();
    const match=!normalized||haystack.includes(normalized);
    lesson.hidden=!match;
    if(match&&activePanel?.contains(lesson))visible++;
  });
  document.querySelectorAll(".guide-empty").forEach(node=>node.remove());
  if(normalized&&visible===0){
    if(activePanel){const empty=document.createElement("p");empty.className="guide-empty";empty.textContent="No lesson matches this search. Try a broader concept.";activePanel.append(empty)}
  }
}

moduleButtons.forEach(button=>button.addEventListener("click",()=>showModule(button.dataset.module)));
if(guideSearch){guideSearch.addEventListener("input",event=>filterLessons(event.target.value))}

document.querySelectorAll("[data-pdf-src]").forEach(button=>button.addEventListener("click",()=>{
  const frame=document.querySelector("#"+button.dataset.pdfTarget);
  if(frame){frame.src=button.dataset.pdfSrc}
  button.closest(".pdf-jumps").querySelectorAll("button").forEach(item=>item.classList.toggle("active",item===button));
}));
