const cards=[
["Yield","What does a bond's yield mean?","The single discount rate that makes the present value of the bond's promised cash flows equal its market price. Price and yield move in opposite directions.","P = Σ CFₜ / (1 + y)ᵗ"],
["Duration","What intuition should I remember?","Duration is the approximate percentage price change for a 1 percentage-point change in yield. A duration of 8 means a +1% yield move implies about an −8% price move.","ΔP / P ≈ −D · Δy"],
["DV01","How is DV01 different from duration?","DV01 translates rate sensitivity into dollars: the approximate dollar price change for a 1 basis-point move in yield. It is the practical hedge-size measure.","DV01 = D · P · 0.0001"],
["Zero rate","Why do we need a zero curve?","A zero rate is the rate for one cash flow at one maturity. The zero curve lets us discount every coupon at the rate appropriate to its own payment date.","P(0,T) = e^(−z(T)T)"],
["Forward rate","What does a forward rate represent?","The future short rate implied today between two dates. It is derived from zero rates so investing to the long date is equivalent to investing to the short date and rolling forward.","f(t₁,t₂) = [z₂t₂ − z₁t₁] / (t₂ − t₁)"],
["Z-spread","How do traders use the z-spread?","It is the constant spread added to every point of the Treasury zero curve so discounted cash flows match the bond's price. A wider z-spread generally means the bond is cheaper after controlling for cash-flow timing.","P = Σ CFₖ / (1 + yₖ + z)ᵏ"],
["Carry","Where does carry P&L come from?","Carry is the expected P&L from holding the bond while its yield stays unchanged: coupon income plus pull-to-par. It does not require a curve-shape assumption.","Carry ≈ coupon income + pull-to-par"],
["Rolldown","Why can an unchanged curve still create P&L?","As the bond ages, it moves to a shorter point on the same curve. On a normally upward-sloping curve that often lowers its yield and raises its price.","Roll P&L ≈ −D · Δy_curve"],
["Clean vs. dirty price","Which price settles?","Clean price excludes accrued interest and is used for quoting. Dirty price includes accrued interest and is the cash amount used for settlement and daily valuation.","Dirty price = clean price + accrued interest"],
["Time-series beta","Why is beta estimated through time?","For each asset, regress its historical excess returns on historical factor returns. That estimates the asset's exposure. The later cross-sectional regression compares assets using those betas.","Rᵢₜ − Rfₜ = αᵢ + βᵢ(Rmₜ − Rfₜ) + εᵢₜ"],
["Fama–MacBeth","What are the two stages?","Stage 1 uses time series to estimate each asset's factor exposure β. Stage 2 uses a cross-section of assets to estimate the price of that exposure λ—the factor risk premium.","E[Rᵢ] = λ₀ + βᵢλ + errorᵢ"],
["2 × 3 portfolios","How should I compare the six Fama–French cells?","Compare across one dimension while holding the other roughly fixed: high versus low book-to-market within size, or small versus big within book-to-market.","SMB = small − big; HML = high B/M − low B/M"],
["Type I error","What mistake does a false positive make?","You conclude that alpha exists when the true alpha is zero. Repeated data mining makes this error especially dangerous.","Reject H₀ even though H₀ is true"],
["Type II error","Did I find real alpha but reject it accidentally?","Yes. Real alpha exists, but the test fails to detect it. More precisely, you fail to reject the zero-alpha null even though it is false.","Fail to reject H₀ even though H₀ is false"]
];
let cardIndex=0,flipped=false;
const label=document.querySelector("#card-label"),content=document.querySelector("#card-content"),footer=document.querySelector("#card-footer"),flashcard=document.querySelector("#flashcard"),count=document.querySelector("#card-count"),progress=document.querySelector("#progress"),reveal=document.querySelector("#reveal");
function render(){const c=cards[cardIndex];label.textContent=flipped?"Answer":c[0];content.textContent=flipped?c[2]:c[1];footer.textContent=flipped?c[3]:"Click to reveal";flashcard.classList.toggle("flipped",flipped);flashcard.setAttribute("aria-label",flipped?"Show question":"Reveal answer");reveal.textContent=flipped?"Show question":"Reveal answer";count.textContent=String(cardIndex+1).padStart(2,"0")+" / "+cards.length;progress.style.width=((cardIndex+1)/cards.length*100)+"%"}
function move(delta){cardIndex=(cardIndex+delta+cards.length)%cards.length;flipped=false;render()}
flashcard.addEventListener("click",()=>{flipped=!flipped;render()});reveal.addEventListener("click",()=>{flipped=!flipped;render()});document.querySelector("#previous").addEventListener("click",()=>move(-1));document.querySelector("#next").addEventListener("click",()=>move(1));render();
const pages=[...document.querySelectorAll(".page")],navButtons=[...document.querySelectorAll(".nav-button")],sidebar=document.querySelector("#sidebar");
function showPage(id){pages.forEach(p=>p.classList.toggle("active",p.id===id));navButtons.forEach(b=>b.classList.toggle("active",b.dataset.section===id));sidebar.classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});history.replaceState(null,"","#"+id)}
navButtons.forEach(button=>button.addEventListener("click",()=>showPage(button.dataset.section)));document.querySelector("#menu-toggle").addEventListener("click",()=>sidebar.classList.toggle("open"));
const initial=location.hash.slice(1);if(pages.some(p=>p.id===initial))showPage(initial);

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
  let visible=0;
  lessons.forEach(lesson=>{
    const haystack=(lesson.dataset.keywords+" "+lesson.textContent).toLowerCase();
    const match=!normalized||haystack.includes(normalized);
    lesson.hidden=!match;
    if(match)visible++;
  });
  document.querySelectorAll(".guide-empty").forEach(node=>node.remove());
  if(normalized&&visible===0){
    const activePanel=document.querySelector("[data-module-panel].active");
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
