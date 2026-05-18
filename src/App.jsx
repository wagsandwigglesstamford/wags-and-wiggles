import { useState } from "react";

const C = {
  teal: "#1A9C8A",
  teal2: "#3DBDAA",
  coral: "#E8552A",
  purple: "#8B5CF6",
  cream: "#FBF7EE",
  sand: "#F0E5D0",
  dark: "#1B3530",
  mist: "#C8EDE8",
  white: "#FFFDF8",
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Dancing+Script:wght@600&family=Nunito:wght@400;500;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Nunito',sans-serif;background:${C.cream};color:${C.dark};}
a{color:inherit;text-decoration:none;}
.nav{position:fixed;top:0;left:0;right:0;z-index:99;background:${C.white}dd;backdrop-filter:blur(8px);border-bottom:1px solid ${C.sand};display:flex;align-items:center;justify-content:space-between;padding:0 1.5rem;height:60px;}
.logo{display:flex;align-items:center;gap:8px;cursor:pointer;}
.logo-text{display:flex;flex-direction:column;line-height:1.1;}
.logo-top{font-size:0.85rem;}
.logo-wags{font-family:'Dancing Script',cursive;color:${C.teal};font-size:1rem;}
.logo-wiggles{font-family:'Fredoka One',cursive;color:${C.coral};font-size:1.15rem;letter-spacing:0.02em;}
.logo-stamford{font-size:0.6rem;font-weight:700;letter-spacing:0.08em;color:#666;text-transform:uppercase;}
.nav-links{display:flex;gap:1.25rem;}
.nav-links button{background:none;border:none;font-family:'Nunito',sans-serif;font-size:0.85rem;font-weight:700;color:${C.dark};cursor:pointer;opacity:0.65;padding:4px 0;transition:opacity 0.2s;}
.nav-links button:hover,.nav-links button.active{opacity:1;color:${C.teal};}
.nav-cta{background:${C.coral};color:white;border:none;font-family:'Nunito',sans-serif;font-size:0.85rem;font-weight:700;padding:8px 16px;border-radius:20px;cursor:pointer;transition:background 0.2s;}
.nav-cta:hover{background:${C.teal};}
.page{padding-top:60px;}

/* HERO */
.hero{background:${C.dark};min-height:calc(100vh - 60px);display:flex;align-items:center;padding:3rem 1.5rem;position:relative;overflow:hidden;}
.hero-dots{position:absolute;inset:0;opacity:0.04;background-image:radial-gradient(circle,#fff 1px,transparent 1px);background-size:22px 22px;}
.hero-blob{position:absolute;right:-100px;top:-100px;width:450px;height:450px;border-radius:50%;background:${C.coral}15;}
.hero-blob2{position:absolute;left:-80px;bottom:-80px;width:300px;height:300px;border-radius:50%;background:${C.teal}12;}
.hero-inner{max-width:660px;margin:0 auto;position:relative;z-index:1;}
.hero-pill{display:inline-block;background:${C.teal}28;color:${C.mist};font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:1.25rem;}
.hero h1{font-family:'Fredoka One',cursive;font-size:clamp(2.2rem,5.5vw,3.6rem);color:${C.white};line-height:1.15;margin-bottom:1rem;}
.hero h1 em{color:${C.teal2};font-style:normal;}
.hero p{font-size:1rem;color:${C.mist};line-height:1.75;max-width:500px;margin-bottom:1.75rem;}
.hero-btns{display:flex;gap:0.75rem;flex-wrap:wrap;}
.btn-coral{background:${C.coral};color:white;border:none;font-family:'Nunito',sans-serif;font-size:0.95rem;font-weight:700;padding:12px 24px;border-radius:25px;cursor:pointer;transition:all 0.2s;}
.btn-coral:hover{background:${C.teal};transform:translateY(-1px);}
.btn-ghost{background:transparent;color:${C.white};border:1.5px solid ${C.white}35;font-family:'Nunito',sans-serif;font-size:0.95rem;font-weight:700;padding:12px 24px;border-radius:25px;cursor:pointer;transition:all 0.2s;}
.btn-ghost:hover{border-color:${C.white}80;}
.hero-stats{display:flex;gap:2rem;flex-wrap:wrap;margin-top:2.5rem;padding-top:2rem;border-top:1px solid ${C.white}12;}
.stat-num{font-family:'Fredoka One',cursive;font-size:1.8rem;color:${C.teal2};}
.stat-label{font-size:0.75rem;color:${C.mist};margin-top:1px;}

/* SECTIONS */
.section{padding:4rem 1.5rem;}
.section-inner{max-width:960px;margin:0 auto;}
.tag{font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${C.teal};margin-bottom:0.4rem;}
.section-title{font-family:'Fredoka One',cursive;font-size:clamp(1.6rem,3vw,2.2rem);color:${C.dark};margin-bottom:0.4rem;}
.section-sub{font-size:0.9rem;color:#666;line-height:1.7;margin-bottom:2.5rem;}
.bg-cream{background:${C.cream};}
.bg-sand{background:${C.sand};}
.bg-dark{background:${C.dark};}
.bg-white{background:${C.white};}

/* SERVICES GRID */
.grid-3{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;}
.svc-card{background:${C.white};border:1px solid ${C.sand};border-radius:14px;padding:1.25rem;transition:all 0.2s;}
.svc-card:hover{border-color:${C.teal};transform:translateY(-2px);box-shadow:0 6px 20px ${C.teal}18;}
.svc-card.hot{border-color:${C.coral};background:${C.coral}06;}
.svc-icon{font-size:1.6rem;margin-bottom:0.6rem;}
.svc-name{font-family:'Fredoka One',cursive;font-size:1rem;color:${C.dark};margin-bottom:0.3rem;}
.svc-desc{font-size:0.8rem;color:#777;line-height:1.5;margin-bottom:0.75rem;}
.svc-price{font-family:'Fredoka One',cursive;font-size:1.3rem;color:${C.coral};}
.svc-price small{font-family:'Nunito',sans-serif;font-size:0.75rem;color:#aaa;font-weight:400;}

/* BOOKING */
.book-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem;}
@media(max-width:680px){.book-grid{grid-template-columns:1fr;}}
.cal-wrap{background:${C.white};border:1px solid ${C.sand};border-radius:14px;padding:1.25rem;}
.cal-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;}
.cal-month{font-family:'Fredoka One',cursive;font-size:1.05rem;}
.cal-btn{background:none;border:1px solid ${C.sand};border-radius:7px;width:30px;height:30px;cursor:pointer;font-size:0.9rem;transition:background 0.15s;}
.cal-btn:hover{background:${C.sand};}
.cal-days{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;}
.cal-lbl{text-align:center;font-size:0.65rem;font-weight:700;color:#aaa;padding:3px 0;text-transform:uppercase;}
.cal-day{aspect-ratio:1;display:flex;align-items:center;justify-content:center;border-radius:7px;font-size:0.82rem;cursor:pointer;border:1px solid transparent;transition:all 0.12s;}
.cal-day:hover:not(.empty):not(.past){background:${C.sand};}
.cal-day.today{border-color:${C.coral};color:${C.coral};font-weight:700;}
.cal-day.sel{background:${C.coral};color:white;border-color:${C.coral};}
.cal-day.past{opacity:0.25;cursor:default;}
.cal-day.rush{background:${C.teal}15;border-color:${C.teal};}
.cal-day.empty{cursor:default;}
.slots{margin-top:1rem;}
.slots h4{font-size:0.8rem;font-weight:700;color:#888;margin-bottom:0.6rem;}
.slots-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;}
.slot{border:1px solid ${C.sand};border-radius:7px;padding:5px 3px;text-align:center;font-size:0.75rem;cursor:pointer;transition:all 0.12s;font-weight:500;}
.slot:hover{border-color:${C.teal};}
.slot.sel{background:${C.coral};color:white;border-color:${C.coral};}

/* FORMS */
.form{display:flex;flex-direction:column;gap:0.875rem;}
.fg{display:flex;flex-direction:column;gap:3px;}
.fg label{font-size:0.78rem;font-weight:700;color:${C.dark};}
.fg input,.fg select,.fg textarea{border:1px solid ${C.sand};border-radius:8px;padding:9px 11px;font-family:'Nunito',sans-serif;font-size:0.875rem;color:${C.dark};background:${C.white};outline:none;transition:border 0.15s;}
.fg input:focus,.fg select:focus,.fg textarea:focus{border-color:${C.teal};}
.row2{display:grid;grid-template-columns:1fr 1fr;gap:0.875rem;}
@media(max-width:480px){.row2{grid-template-columns:1fr;}}
.svc-opts{display:grid;grid-template-columns:1fr 1fr;gap:6px;}
.svc-opt{border:1px solid ${C.sand};border-radius:7px;padding:7px 9px;cursor:pointer;font-size:0.78rem;font-weight:500;transition:all 0.12s;line-height:1.35;}
.svc-opt:hover{border-color:${C.teal};}
.svc-opt.sel{background:${C.coral};color:white;border-color:${C.coral};}
.price-box{background:${C.dark};color:${C.white};border-radius:10px;padding:0.875rem 1rem;}
.price-row{display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:3px;}
.price-total{display:flex;justify-content:space-between;font-size:1rem;font-weight:700;padding-top:7px;margin-top:7px;border-top:1px solid ${C.white}20;}
.price-cash{font-size:0.72rem;color:${C.teal2};margin-top:3px;}
.submit-btn{background:${C.coral};color:white;border:none;font-family:'Nunito',sans-serif;font-size:0.95rem;font-weight:700;padding:13px;border-radius:9px;cursor:pointer;transition:all 0.2s;width:100%;}
.submit-btn:hover{background:${C.teal};}
.hint{font-size:0.72rem;color:#aaa;text-align:center;}
.rush-note{background:${C.sand};border-left:3px solid ${C.teal};border-radius:0 8px 8px 0;padding:0.7rem 0.9rem;margin-top:1.5rem;font-size:0.82rem;}

/* PROFILE TABS */
.tabs{display:flex;border-bottom:1px solid ${C.sand};margin-bottom:1.75rem;overflow-x:auto;}
.tab{background:none;border:none;font-family:'Nunito',sans-serif;font-size:0.82rem;font-weight:700;color:#999;cursor:pointer;padding:9px 16px;border-bottom:2px solid transparent;white-space:nowrap;transition:all 0.15s;}
.tab.active{color:${C.teal};border-bottom-color:${C.teal};}
.upload{border:2px dashed ${C.sand};border-radius:10px;padding:1.75rem;text-align:center;cursor:pointer;transition:all 0.2s;}
.upload:hover{border-color:${C.teal};}
.upload-icon{font-size:1.75rem;margin-bottom:0.4rem;}
.upload-text{font-size:0.82rem;color:#999;}
.upload-text strong{color:${C.teal};}
.cb-group{display:flex;flex-direction:column;gap:7px;}
.cb{display:flex;align-items:center;gap:7px;font-size:0.85rem;cursor:pointer;}
.cb input{width:15px;height:15px;accent-color:${C.coral};}
.waiver{background:${C.cream};border:1px solid ${C.sand};border-radius:10px;padding:1rem;max-height:175px;overflow-y:auto;font-size:0.78rem;line-height:1.7;color:#555;margin-bottom:0.875rem;}
.waiver h4{font-family:'Fredoka One',cursive;font-size:0.95rem;color:${C.dark};margin-bottom:0.4rem;}
.tab-nav{display:flex;justify-content:flex-end;gap:0.75rem;margin-top:1.25rem;flex-wrap:wrap;}
.btn-back{background:none;border:1px solid ${C.sand};border-radius:8px;font-family:'Nunito',sans-serif;font-size:0.875rem;font-weight:700;padding:9px 18px;cursor:pointer;color:${C.dark};transition:all 0.15s;}
.btn-back:hover{border-color:${C.teal};color:${C.teal};}
.btn-next{background:${C.teal};color:white;border:none;font-family:'Nunito',sans-serif;font-size:0.875rem;font-weight:700;padding:9px 20px;border-radius:8px;cursor:pointer;transition:background 0.15s;}
.btn-next:hover{background:${C.coral};}

/* ABOUT */
.about-grid{display:grid;grid-template-columns:1fr 1.5fr;gap:3.5rem;align-items:center;}
@media(max-width:680px){.about-grid{grid-template-columns:1fr;}}
.about-photo{background:${C.dark};border-radius:18px;aspect-ratio:4/5;display:flex;align-items:center;justify-content:center;font-size:5rem;border:3px solid ${C.teal}30;}
.badges{display:flex;flex-wrap:wrap;gap:7px;margin-top:1.25rem;}
.badge{background:${C.white};border:1px solid ${C.teal}40;border-radius:20px;font-size:0.75rem;font-weight:700;padding:4px 12px;color:${C.dark};}
.about-text p{font-size:0.95rem;line-height:1.75;color:#555;margin-bottom:0.875rem;}
.quote{font-family:'Dancing Script',cursive;font-size:1.15rem;color:${C.coral};border-left:3px solid ${C.teal};padding-left:1rem;margin:1rem 0;}

/* PRICING */
.price-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:0.875rem;}
.pc{border:1px solid ${C.sand};border-radius:12px;padding:1.1rem;text-align:center;transition:all 0.2s;background:${C.white};}
.pc:hover{border-color:${C.teal};transform:translateY(-2px);}
.pc.hot{border-color:${C.coral};background:${C.coral}07;box-shadow:0 4px 14px ${C.coral}15;}
.pc-icon{font-size:1.4rem;margin-bottom:0.4rem;}
.pc-name{font-family:'Fredoka One',cursive;font-size:0.95rem;margin-bottom:0.2rem;}
.pc-price{font-family:'Fredoka One',cursive;font-size:1.45rem;color:${C.coral};}
.pc-price small{font-family:'Nunito',sans-serif;font-size:0.75rem;color:#aaa;font-weight:400;}
.pc-note{font-size:0.75rem;color:#999;margin-top:0.3rem;}
.loyalty{background:${C.dark};color:${C.white};border-radius:14px;padding:1.75rem;margin-top:2rem;display:flex;gap:1.75rem;align-items:flex-start;flex-wrap:wrap;border-top:4px solid ${C.teal};}
.loyalty h3{font-family:'Fredoka One',cursive;font-size:1.2rem;color:${C.teal2};margin-bottom:0.3rem;}
.loyalty p{font-size:0.85rem;color:${C.mist};line-height:1.6;}
.loy-steps{display:flex;gap:0.75rem;margin-top:1rem;flex-wrap:wrap;align-items:center;}
.loy-step{background:${C.white}12;border-radius:8px;padding:0.5rem 0.875rem;text-align:center;}
.loy-num{font-family:'Fredoka One',cursive;font-size:1.15rem;color:${C.teal2};}
.loy-lbl{font-size:0.68rem;color:${C.mist};}
.loy-arr{color:${C.mist};font-size:0.9rem;}
.addon-note{background:${C.sand};border-radius:10px;padding:0.875rem 1rem;font-size:0.82rem;color:#555;margin-top:1.25rem;}

/* PAYMENT */
.pay-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:0.875rem;margin-bottom:1.5rem;}
.pay-card{background:${C.white};border:1px solid ${C.sand};border-radius:12px;padding:1.1rem;text-align:center;}
.pay-card.featured{border-color:${C.coral};background:${C.coral}07;}
.pay-icon{font-size:1.6rem;margin-bottom:0.4rem;}
.pay-name{font-weight:700;font-size:0.95rem;margin-bottom:0.2rem;}
.pay-desc{font-size:0.78rem;color:#888;line-height:1.5;}

/* CONTACT */
.contact-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:3.5rem;}
@media(max-width:680px){.contact-grid{grid-template-columns:1fr;}}
.contact-info h2{font-family:'Fredoka One',cursive;font-size:1.8rem;color:${C.white};margin-bottom:0.875rem;}
.contact-info p{color:${C.mist};font-size:0.9rem;line-height:1.7;margin-bottom:1.25rem;}
.cd{display:flex;align-items:flex-start;gap:9px;color:${C.mist};font-size:0.875rem;margin-bottom:0.7rem;}
.cd-icon{font-size:1rem;flex-shrink:0;margin-top:1px;}
.contact-form{background:${C.white};border-radius:14px;padding:1.75rem;}
.contact-form h3{font-family:'Fredoka One',cursive;font-size:1.2rem;margin-bottom:1.1rem;}
.senior-box{background:${C.coral}18;border:1px solid ${C.coral}40;border-radius:10px;padding:1rem;margin-top:1.25rem;}
.senior-box h4{font-family:'Fredoka One',cursive;color:#ff7a52;margin-bottom:0.3rem;}
.senior-box p{font-size:0.82rem;color:${C.mist};line-height:1.6;}

/* FOOTER */
.footer{background:${C.dark};border-top:1px solid ${C.white}10;padding:1.75rem;text-align:center;font-size:0.78rem;color:${C.mist};}

@media(max-width:600px){.nav-links{display:none;}}
`;

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYLABELS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

const SERVICES = [
  {id:"w20",icon:"🐾",name:"20-min Walk",price:18,unit:"/walk",desc:"Quick potty break"},
  {id:"w30",icon:"🦮",name:"30-min Walk",price:27,unit:"/walk",desc:"Standard midday walk",hot:true},
  {id:"w60",icon:"🏃",name:"60-min Walk/Run",price:45,unit:"/walk",desc:"Long walk or dog park"},
  {id:"hike",icon:"🥾",name:"Adventure Hike",price:60,unit:"/dog",desc:"Mianus River Park trails",hot:true},
  {id:"hikeg",icon:"🌲",name:"Group Hike (3 dogs)",price:60,unit:"/dog",desc:"Small pack nature adventure"},
  {id:"cat",icon:"🐱",name:"Cat Drop-In",price:28,unit:"/visit",desc:"Feed, play, litter care"},
  {id:"sit",icon:"🏠",name:"House Sitting",price:75,unit:"/night",desc:"I come to your home",hot:true},
  {id:"board",icon:"🛏️",name:"Boarding (my home)",price:65,unit:"/night",desc:"1 dog max, crate-trained"},
];

function Cal({selected, onSelect}) {
  const today = new Date();
  const [view, setView] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const yr = view.getFullYear(), mo = view.getMonth();
  const firstDay = new Date(yr, mo, 1).getDay();
  const daysInMo = new Date(yr, mo+1, 0).getDate();
  const cells = [];
  for(let i=0;i<firstDay;i++) cells.push(null);
  for(let d=1;d<=daysInMo;d++) cells.push(d);

  const isPast = d => { const dt=new Date(yr,mo,d); dt.setHours(0,0,0,0); const t=new Date(); t.setHours(0,0,0,0); return dt<t; };
  const isToday = d => today.getDate()===d && today.getMonth()===mo && today.getFullYear()===yr;
  const isSel = d => selected && selected.getDate()===d && selected.getMonth()===mo && selected.getFullYear()===yr;
  const isRush = d => { const dt=new Date(yr,mo,d); const diff=(dt-today)/(1000*60*60); return diff>=0&&diff<24; };

  return (
    <div className="cal-wrap">
      <div className="cal-hdr">
        <button className="cal-btn" onClick={()=>setView(new Date(yr,mo-1,1))}>{"<"}</button>
        <span className="cal-month">{MONTHS[mo]} {yr}</span>
        <button className="cal-btn" onClick={()=>setView(new Date(yr,mo+1,1))}>{">"}</button>
      </div>
      <div className="cal-days">
        {DAYLABELS.map(d=><div key={d} className="cal-lbl">{d}</div>)}
        {cells.map((d,i)=>(
          <div key={i}
            className={["cal-day",!d?"empty":"",d&&isPast(d)?"past":"",d&&isToday(d)?"today":"",d&&isSel(d)?"sel":"",d&&!isPast(d)&&isRush(d)?"rush":""].filter(Boolean).join(" ")}
            onClick={()=>d&&!isPast(d)&&onSelect(new Date(yr,mo,d))}>
            {d}
          </div>
        ))}
      </div>
      <div style={{display:"flex",gap:14,marginTop:10,fontSize:"0.68rem",color:"#aaa"}}>
        <span><span style={{display:"inline-block",width:10,height:10,borderRadius:2,background:C.teal+"20",border:"1px solid "+C.teal,marginRight:4}}></span>Rush (+25%)</span>
        <span><span style={{display:"inline-block",width:10,height:10,borderRadius:2,background:C.coral,marginRight:4}}></span>Selected</span>
      </div>
    </div>
  );
}

function BookingSection() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [svc, setSvc] = useState("w30");
  const [cash, setCash] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dogs, setDogs] = useState("1");
  const [notes, setNotes] = useState("");
  const [done, setDone] = useState(false);

  const today = new Date();
  const rush = date && ((date-today)/(1000*60*60))<24;
  const s = SERVICES.find(x=>x.id===svc);
  const base = s ? s.price : 0;
  const rushFee = rush ? Math.round(base*0.25) : 0;
  const sub = base+rushFee;
  const cashOff = cash ? Math.round(sub*0.08) : 0;
  const total = sub-cashOff;

  const slots = ["7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM"];

  const submit = () => {
    if(!name||!email||!date||!time) return alert("Please fill in name, email, date and time.");
    setDone(true);
    setTimeout(()=>setDone(false),4000);
  };

  return (
    <div className="section bg-sand">
      <div className="section-inner">
        <p className="tag">Book a visit</p>
        <h2 className="section-title">Schedule Your Walk</h2>
        <p className="section-sub">Book 1 week in advance for standard rates. Rush bookings (8-24 hrs) available at +25%. Senior clients: call or text anytime - 347-457-0974</p>
        <div className="book-grid">
          <div>
            <Cal selected={date} onSelect={setDate} />
            {date && (
              <div className="slots">
                <h4>Choose a time{rush?" - Rush rate applies":""}</h4>
                <div className="slots-grid">
                  {slots.map(sl=>(
                    <div key={sl} className={"slot"+(time===sl?" sel":"")} onClick={()=>setTime(sl)}>{sl}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="form">
            <div className="fg">
              <label>Service</label>
              <div className="svc-opts">
                {SERVICES.map(sv=>(
                  <div key={sv.id} className={"svc-opt"+(svc===sv.id?" sel":"")} onClick={()=>setSvc(sv.id)}>
                    {sv.icon} {sv.name}<br/><strong>${sv.price}{sv.unit}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="row2">
              <div className="fg"><label>Your name</label><input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} /></div>
              <div className="fg"><label>Phone</label><input placeholder="(203) 555-0000" value={phone} onChange={e=>setPhone(e.target.value)} /></div>
            </div>
            <div className="fg"><label>Email</label><input placeholder="you@email.com" value={email} onChange={e=>setEmail(e.target.value)} /></div>
            <div className="row2">
              <div className="fg"><label>Number of dogs</label>
                <select value={dogs} onChange={e=>setDogs(e.target.value)}>
                  <option value="1">1 dog</option><option value="2">2 dogs</option><option value="3">3 dogs (group max)</option>
                </select>
              </div>
              <div className="fg"><label>Payment</label>
                <select value={cash?"cash":"venmo"} onChange={e=>setCash(e.target.value==="cash")}>
                  <option value="venmo">Venmo / Zelle</option><option value="cash">Cash (save 8%)</option>
                </select>
              </div>
            </div>
            <div className="fg"><label>Notes for this visit</label><textarea rows={2} placeholder="Gate code, feeding notes, etc..." value={notes} onChange={e=>setNotes(e.target.value)} /></div>
            {s && (
              <div className="price-box">
                <div className="price-row"><span>{s.name}</span><span>${base}</span></div>
                {rush && <div className="price-row"><span>Rush fee (+25%)</span><span>+${rushFee}</span></div>}
                {cash && <div className="price-row"><span>Cash discount (-8%)</span><span>-${cashOff}</span></div>}
                <div className="price-total"><span>Total</span><span>${total}</span></div>
                {cash && <div className="price-cash">Pay cash on day of visit</div>}
              </div>
            )}
            <button className="submit-btn" onClick={submit}>{done?"Sent! Lucas will confirm shortly.":"Request Booking"}</button>
            <p className="hint">Requests go to wagsandwigglesstamford@gmail.com - confirmed within 2 hrs</p>
          </div>
        </div>
        <div className="rush-note"><strong>Rush policy:</strong> Bookings within 8-24 hrs carry a 25% surcharge. Same-day within 8 hrs: call/text 347-457-0974 directly.</div>
      </div>
    </div>
  );
}

function ProfileSection() {
  const [tab, setTab] = useState(0);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    oname:"",ophone:"",oemail:"",alt:"",altph:"",addr:"",entry:"",
    dname:"",breed:"",age:"",weight:"",sex:"",color:"",behavior:"",
    vet:"",vetph:"",vaccines:[],vaccineOther:"",medical:"",vetAuth:true,
    feeding:false,feedNotes:"",rx:false,rxNotes:"",other:"",
    waiverSigned:false,sig:"",
  });
  const f = (k,v) => setForm(prev=>({...prev,[k]:v}));
  const toggleVax = v => f("vaccines", form.vaccines.includes(v)?form.vaccines.filter(x=>x!==v):[...form.vaccines,v]);
  const tabs = ["Owner Info","Dog Profile","Vet and Health","Access and Extras","Waiver"];
  const VAXES = ["Rabies","DHPP / DA2PP","Bordetella","Leptospirosis","Lyme","Influenza","Flea/Tick Prevention"];

  return (
    <div className="section bg-white">
      <div className="section-inner">
        <p className="tag">Client portal</p>
        <h2 className="section-title">Dog Profile and Records</h2>
        <p className="section-sub">Fill this out once - we keep it on file. Update anytime. Info stays private and is only used for your dog's care.</p>
        <div className="tabs">
          {tabs.map((t,i)=><button key={t} className={"tab"+(tab===i?" active":"")} onClick={()=>setTab(i)}>{t}</button>)}
        </div>

        {tab===0 && (
          <div className="form">
            <div className="row2">
              <div className="fg"><label>Full name</label><input placeholder="Your name" value={form.oname} onChange={e=>f("oname",e.target.value)} /></div>
              <div className="fg"><label>Phone</label><input placeholder="(203) 555-0000" value={form.ophone} onChange={e=>f("ophone",e.target.value)} /></div>
            </div>
            <div className="fg"><label>Email</label><input placeholder="you@email.com" value={form.oemail} onChange={e=>f("oemail",e.target.value)} /></div>
            <div className="row2">
              <div className="fg"><label>Emergency contact name</label><input placeholder="Name" value={form.alt} onChange={e=>f("alt",e.target.value)} /></div>
              <div className="fg"><label>Emergency contact phone</label><input placeholder="Phone" value={form.altph} onChange={e=>f("altph",e.target.value)} /></div>
            </div>
            <div className="fg"><label>Home address</label><input placeholder="123 Main St, Stamford, CT" value={form.addr} onChange={e=>f("addr",e.target.value)} /></div>
            <div className="fg"><label>Home access notes (key, lockbox, gate code)</label><textarea rows={3} placeholder="e.g. Key under mat, gate code 1234..." value={form.entry} onChange={e=>f("entry",e.target.value)} /></div>
          </div>
        )}

        {tab===1 && (
          <div className="form">
            <div className="row2">
              <div className="fg"><label>Dog name</label><input placeholder="Buddy, Luna..." value={form.dname} onChange={e=>f("dname",e.target.value)} /></div>
              <div className="fg"><label>Breed</label><input placeholder="Mix, Lab, etc." value={form.breed} onChange={e=>f("breed",e.target.value)} /></div>
            </div>
            <div className="row2">
              <div className="fg"><label>Age</label><input placeholder="e.g. 3 years" value={form.age} onChange={e=>f("age",e.target.value)} /></div>
              <div className="fg"><label>Weight (lbs)</label><input placeholder="e.g. 45 lbs" value={form.weight} onChange={e=>f("weight",e.target.value)} /></div>
            </div>
            <div className="row2">
              <div className="fg"><label>Sex</label>
                <select value={form.sex} onChange={e=>f("sex",e.target.value)}>
                  <option value="">Select</option>
                  <option>Male (intact)</option><option>Male (neutered)</option>
                  <option>Female (intact)</option><option>Female (spayed)</option>
                </select>
              </div>
              <div className="fg"><label>Color / markings</label><input placeholder="e.g. Black with white chest" value={form.color} onChange={e=>f("color",e.target.value)} /></div>
            </div>
            <div className="fg"><label>Upload photos of your dog</label>
              <div className="upload"><div className="upload-icon">📷</div><div className="upload-text"><strong>Click to upload</strong> or drag and drop - JPG, PNG up to 5MB</div></div>
            </div>
            <div className="fg"><label>Behavior notes</label><textarea rows={4} placeholder="Pulls on leash, reactive to other dogs, loves fetch, scared of loud noises..." value={form.behavior} onChange={e=>f("behavior",e.target.value)} /></div>
          </div>
        )}

        {tab===2 && (
          <div className="form">
            <div className="row2">
              <div className="fg"><label>Vet clinic</label><input placeholder="e.g. VCA Newfield Animal Hospital" value={form.vet} onChange={e=>f("vet",e.target.value)} /></div>
              <div className="fg"><label>Vet phone</label><input placeholder="(203) 555-0000" value={form.vetph} onChange={e=>f("vetph",e.target.value)} /></div>
            </div>
            <div className="fg">
              <label>Current vaccines</label>
              <div className="cb-group">
                {VAXES.map(v=>(
                  <label key={v} className="cb">
                    <input type="checkbox" checked={form.vaccines.includes(v)} onChange={()=>toggleVax(v)} />{v}
                  </label>
                ))}
              </div>
            </div>
            <div className="fg"><label>Other vaccine notes</label><input placeholder="e.g. Heartworm negative Jan 2026" value={form.vaccineOther} onChange={e=>f("vaccineOther",e.target.value)} /></div>
            <div className="fg"><label>Upload vaccine records</label>
              <div className="upload"><div className="upload-icon">📋</div><div className="upload-text"><strong>Click to upload</strong> PDF or photo of vaccine records</div></div>
            </div>
            <div className="fg"><label>Medical history / conditions</label><textarea rows={3} placeholder="Hip dysplasia, allergies, monthly heartworm prevention..." value={form.medical} onChange={e=>f("medical",e.target.value)} /></div>
            <label className="cb">
              <input type="checkbox" checked={form.vetAuth} onChange={e=>f("vetAuth",e.target.checked)} />
              <strong>Emergency Vet Authorization</strong> - I authorize Wags and Wiggles to seek emergency vet care if I cannot be reached. I accept responsibility for costs.
            </label>
          </div>
        )}

        {tab===3 && (
          <div className="form">
            <div className="fg">
              <label className="cb"><input type="checkbox" checked={form.feeding} onChange={e=>f("feeding",e.target.checked)} /><span><strong>Feeding during visit</strong> - +$5/visit</span></label>
              {form.feeding && <textarea rows={2} style={{marginTop:6,border:"1px solid "+C.sand,borderRadius:8,padding:"9px 11px",fontFamily:"'Nunito',sans-serif",fontSize:"0.875rem",width:"100%",outline:"none"}} placeholder="Amount, schedule, where food is stored..." value={form.feedNotes} onChange={e=>f("feedNotes",e.target.value)} />}
            </div>
            <div className="fg">
              <label className="cb"><input type="checkbox" checked={form.rx} onChange={e=>f("rx",e.target.checked)} /><span><strong>Medication administration</strong> - +$5/visit</span></label>
              {form.rx && <textarea rows={2} style={{marginTop:6,border:"1px solid "+C.sand,borderRadius:8,padding:"9px 11px",fontFamily:"'Nunito',sans-serif",fontSize:"0.875rem",width:"100%",outline:"none"}} placeholder="Medication name, dose, timing, how to give..." value={form.rxNotes} onChange={e=>f("rxNotes",e.target.value)} />}
            </div>
            <div className="fg"><label>Other notes (routines, quirks, neighbor info)</label><textarea rows={4} placeholder="Always wipe paws at door, neighbor has a dog she doesn't like..." value={form.other} onChange={e=>f("other",e.target.value)} /></div>
            <div style={{background:C.sand,borderRadius:9,padding:"0.875rem 1rem",fontSize:"0.82rem",color:"#555"}}>
              <strong>Add-ons:</strong> Feeding +$5 - Medication +$5 - Rush (8-24hr) +25% - Cash payment -8%
            </div>
          </div>
        )}

        {tab===4 && (
          <div className="form">
            <div className="waiver">
              <h4>Wags and Wiggles - Liability Waiver</h4>
              <p>By signing, I authorize Wags and Wiggles (Lucas) to provide pet care services.</p><br/>
              <p><strong>1. Authorization.</strong> I authorize services as described at booking.</p><br/>
              <p><strong>2. Emergency Care.</strong> If my pet needs emergency vet care and I cannot be reached, I authorize Lucas to seek care at my expense.</p><br/>
              <p><strong>3. Liability.</strong> Wags and Wiggles takes all reasonable precautions but is not liable for illness or injury despite reasonable care. My pet is current on vaccinations.</p><br/>
              <p><strong>4. Cancellation.</strong> 48+ hrs: full refund. 24-48 hrs: 50% charge. Same-day: full charge. Holidays: non-refundable.</p><br/>
              <p><strong>5. Rush Bookings.</strong> Within 8-24 hours: +25% surcharge. Within 8 hours: direct call/text required.</p><br/>
              <p><strong>6. Photos.</strong> I grant permission to photograph my pet for social media unless noted otherwise.</p>
            </div>
            <label className="cb"><input type="checkbox" checked={form.waiverSigned} onChange={e=>f("waiverSigned",e.target.checked)} />I have read and agree to the Wags and Wiggles Liability Waiver</label>
            <div className="row2">
              <div className="fg"><label>Electronic signature (type full name)</label><input placeholder="Your full name" value={form.sig} onChange={e=>f("sig",e.target.value)} /></div>
              <div className="fg"><label>Date</label><input type="date" defaultValue={new Date().toISOString().split("T")[0]} /></div>
            </div>
          </div>
        )}

        <div className="tab-nav">
          {tab>0 && <button className="btn-back" onClick={()=>setTab(tab-1)}>Back</button>}
          {tab<tabs.length-1 && <button className="btn-next" onClick={()=>setTab(tab+1)}>Next</button>}
          {tab===tabs.length-1 && <button className="submit-btn" style={{width:"auto",padding:"9px 22px"}} onClick={()=>{setSaved(true);setTimeout(()=>setSaved(false),3000);}}>{saved?"Saved!":"Save Profile"}</button>}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="section bg-cream">
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <div className="about-photo">🐾</div>
            <div className="badges">
              <span className="badge">10+ Years Experience</span>
              <span className="badge">Tri-State Area</span>
              <span className="badge">Rover and Wag! Vet</span>
              <span className="badge">Downtown Stamford</span>
              <span className="badge">Senior Specialist</span>
              <span className="badge">Bebe's Dad</span>
            </div>
          </div>
          <div className="about-text">
            <p className="tag">About Lucas</p>
            <h2 className="section-title" style={{marginBottom:"1rem"}}>A Decade of Walks, Now On My Terms</h2>
            <p>Hi, I'm Lucas - lifelong animal lover and founder of Wags and Wiggles. I've spent over 10 years walking, hiking, sitting, and caring for dogs across NYC and Southern Connecticut through platforms like Rover and Wag! before deciding to build something of my own.</p>
            <p>Based in downtown Stamford near Mill River Park, I know these neighborhoods, trails, and dog parks inside and out.</p>
            <p>My sidekick is <strong>Bebe</strong> - an 8-month-old lab/pointer/greyhound mix with endless energy. She joins me on house sits and select walks as a built-in social buddy.</p>
            <p className="quote">"Every dog gets the same care I'd give Bebe - because that's the only standard I know."</p>
            <p>I specialize in helping senior pet owners with patient, reliable, easy-to-communicate care. Call or text anytime: <strong style={{color:C.teal}}>347-457-0974</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="section bg-white">
      <div className="section-inner">
        <p className="tag">Transparent pricing</p>
        <h2 className="section-title">Services and Rates</h2>
        <p className="section-sub">Book 1 week ahead for standard rates. Rush (8-24 hrs) +25%. Cash discount -8%. Senior clients always welcome - easy communication guaranteed.</p>
        <div className="price-grid">
          {SERVICES.map(s=>(
            <div key={s.id} className={"pc"+(s.hot?" hot":"")}>
              <div className="pc-icon">{s.icon}</div>
              <div className="pc-name">{s.name}</div>
              <div className="pc-price">${s.price}<small>{s.unit}</small></div>
              <div className="pc-note">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="addon-note">
          <strong>Add-ons:</strong> Feeding +$5/visit - Medication +$5/visit - Holiday rate +20% - Rush (8-24hr) +25% - Multiple dogs: ask for group rate<br/>
          <strong style={{color:C.teal}}>Cash discount: save 8%</strong> when you pay cash on the day of service.
        </div>
        <div className="loyalty">
          <span style={{fontSize:"2.5rem"}}>🏆</span>
          <div style={{flex:1}}>
            <h3>Loyalty Rewards</h3>
            <p>Every walk earns you toward a reward. Loyal clients are the heart of this business.</p>
            <div className="loy-steps">
              <div className="loy-step"><div className="loy-num">5</div><div className="loy-lbl">walks</div></div>
              <span className="loy-arr">→</span>
              <div className="loy-step"><div className="loy-num">Free</div><div className="loy-lbl">upgrade</div></div>
              <span className="loy-arr" style={{margin:"0 4px"}}>·</span>
              <div className="loy-step"><div className="loy-num">10</div><div className="loy-lbl">walks</div></div>
              <span className="loy-arr">→</span>
              <div className="loy-step"><div className="loy-num">50%</div><div className="loy-lbl">off next walk</div></div>
              <span className="loy-arr" style={{margin:"0 4px"}}>·</span>
              <div className="loy-step"><div className="loy-num">Refer</div><div className="loy-lbl">a friend</div></div>
              <span className="loy-arr">→</span>
              <div className="loy-step"><div className="loy-num">Free</div><div className="loy-lbl">walk credit</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentSection() {
  return (
    <div className="section bg-sand">
      <div className="section-inner">
        <p className="tag">Payment</p>
        <h2 className="section-title">Easy, Flexible Payment</h2>
        <p className="section-sub">No complicated portals. Pay the way that works for you - and save 8% with cash.</p>
        <div className="pay-grid">
          <div className="pay-card"><div className="pay-icon">💸</div><div className="pay-name">Venmo</div><div className="pay-desc">@wagsandwigglesstamford<br/>Pay after each visit</div></div>
          <div className="pay-card"><div className="pay-icon">⚡</div><div className="pay-name">Zelle</div><div className="pay-desc">wagsandwigglesstamford@gmail.com<br/>Instant bank transfer</div></div>
          <div className="pay-card featured"><div className="pay-icon">💵</div><div className="pay-name">Cash - Save 8%</div><div className="pay-desc">Pay day of visit<br/><strong style={{color:C.coral}}>Best deal!</strong> Exact amount please</div></div>
          <div className="pay-card"><div className="pay-icon">📦</div><div className="pay-name">5-Walk Bundle</div><div className="pay-desc">Pre-pay 5 walks<br/>Get the 6th free</div></div>
        </div>
        <div style={{background:C.white,borderRadius:10,padding:"0.875rem 1rem",fontSize:"0.82rem",color:"#555",border:"1px solid "+C.sand}}>
          <strong>Cancellation:</strong> 48+ hrs = full refund - 24-48 hrs = 50% charge - Same-day = full charge - Holidays non-refundable
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const [form, setForm] = useState({name:"",email:"",phone:"",msg:""});
  const [sent, setSent] = useState(false);
  const f = (k,v) => setForm(p=>({...p,[k]:v}));
  const send = () => { if(!form.name||!form.email||!form.msg) return; setSent(true); setTimeout(()=>{setSent(false);setForm({name:"",email:"",phone:"",msg:""});},4000); };

  return (
    <div className="section bg-dark">
      <div className="section-inner">
        <div className="contact-grid">
          <div className="contact-info">
            <p className="tag" style={{color:C.teal2}}>Get in touch</p>
            <h2>Ready to get started?</h2>
            <p>Questions, meet and greet requests, or just want to say hi - reach out anytime.</p>
            <div className="cd"><span className="cd-icon">📍</span> Stamford, CT + surrounding areas</div>
            <div className="cd"><span className="cd-icon">📞</span><strong style={{color:C.teal2}}>347-457-0974</strong> - call or text anytime</div>
            <div className="cd"><span className="cd-icon">📧</span> wagsandwigglesstamford@gmail.com</div>
            <div className="cd"><span className="cd-icon">📷</span> @wagsandwigglesstamford</div>
            <div className="cd"><span className="cd-icon">📅</span> Primary: Mon, Tue, Wed</div>
            <div className="cd"><span className="cd-icon">🐾</span> Meet and greets always free</div>
            <div className="senior-box">
              <h4>Senior Pet Care Specialist</h4>
              <p>Specializing in helping seniors with their pets - patient, reliable, and easy to communicate with every step of the way.</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send a message</h3>
            <div className="form">
              <div className="row2">
                <div className="fg"><label>Name</label><input placeholder="Your name" value={form.name} onChange={e=>f("name",e.target.value)} /></div>
                <div className="fg"><label>Phone</label><input placeholder="(203) 555-0000" value={form.phone} onChange={e=>f("phone",e.target.value)} /></div>
              </div>
              <div className="fg"><label>Email</label><input placeholder="you@email.com" value={form.email} onChange={e=>f("email",e.target.value)} /></div>
              <div className="fg"><label>Message</label><textarea rows={4} placeholder="Tell me about your dog, your schedule, or anything you'd like to know..." value={form.msg} onChange={e=>f("msg",e.target.value)} /></div>
              <button className="submit-btn" onClick={send}>{sent?"Sent! I will be in touch soon.":"Send Message"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("home");
  const nav = [{id:"home",label:"Home"},{id:"services",label:"Services"},{id:"book",label:"Book"},{id:"profile",label:"My Dog"},{id:"about",label:"About"},{id:"contact",label:"Contact"}];

  const go = id => {
    setActive(id);
    setTimeout(()=>{const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:"smooth",block:"start"});},50);
  };

  return (
    <>
      <style>{css}</style>
      <nav className="nav">
        <div className="logo" onClick={()=>go("home")}>
          <svg width="44" height="44" viewBox="10 15 75 75" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.794,45.067c-0.401,0-0.787,0.265-0.854,0.795l-1.031,6.158c-0.198,1.197-1.464,2.786-4.286,3.005c-5.558,0.427-4.953-0.261-8.667-0.313c-2.047-0.651-3.693-1.99-5.058-4.121c-0.302-0.489-0.911-0.686-1.442-0.467c-0.693,0.276-0.953,1.12-0.542,1.738c0.979,1.532,2.172,2.772,3.536,3.705c-1.974,1.14-1.703,3.073-2.396,4.5c-0.906,1.391-2.016,2.467-4.479,3.213c-0.234,0.052-0.432,0.193-0.567,0.391l-1.698,2.749l2.146,2.147c0.505-0.5,0.588-1.282,0.208-1.88l0.969-1.464l4.25,0.214l-1.703,1.328c-0.183,0.141-0.313,0.344-0.349,0.579l-0.531,3.046l2.63,1.516c0.417-0.724,0.172-1.652-0.558-2.073c-0.01-0.005-0.025-0.011-0.036-0.017l0.594-1.942c2.094-0.23,3.203-0.682,5.745-3.219c3.609-3.615,4.214,1.453,11.849,0.365l2.828,3.041l1.401,3.172c0.109,0.24,0.313,0.427,0.567,0.5l2.625,1.52c0.422-0.728,0.172-1.655-0.552-2.071c-0.141-0.079-0.292-0.136-0.453-0.167l-1.438-5.511l2.208,0.146l1.85,2.021l2.625,1.516c0.422-0.724,0.172-1.652-0.553-2.073c-0.15-0.084-0.313-0.146-0.479-0.177l-1.948-3.224c-0.099-0.121-0.224-0.213-0.37-0.271l-2.041-0.823c-0.428-0.172-0.771-0.475-1.047-0.854c-3.141-0.766-5.917-2.479-7.709-4.443l0.5-0.459c2.396,2.35,6.167,4.24,10.225,4.381c4.344,0.15,8.994-1.87,12.047-7.442l-1.683-0.923c-2.761,5.046-6.567,6.584-10.302,6.453c-1.375-0.047-2.74-0.35-4.016-0.812c-0.011-0.391,0.005-0.767,0.052-1.084c0.167-1.109,0.698-1.802,1.989-1.812l2.99-0.027c1.547-0.192,2.114-1.5,2.385-2.249c0.318-0.875,0-1.448-0.656-1.626c-1.797-0.479-2.25-0.693-3.005-1.879c-0.661-1.047-1.255-1.558-2.192-1.699l-0.37-1.375c-0.234-0.891-1.406-0.896-1.526,0l-0.156,1.188l-0.563-2.095C38.616,45.332,38.194,45.067,37.794,45.067z" fill="#8B5CF6"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M72.018,26.04c-1.339,3.104-4.933,4.527-8.042,3.193c-3.094-1.339-4.516-4.938-3.182-8.033c1.344-3.098,4.938-4.524,8.031-3.191C71.935,19.348,73.356,22.941,72.018,26.04z" fill="#8B5CF6"/>
              <path d="M64.372,32.499c-0.547,0-1.084,0.167-1.531,0.479l-7.526,5.308c-0.703,0.495-1.125,1.307-1.12,2.167l-0.979,8.364c-0.386,3.282,4.771,3.949,5.266,0.355l1.016-7.339l2.135-1.5v10.355c0,1.479,0.761,2.041,1.709,3.009l6.797,6.953l2.385,9.407c0.917,4.188,7.214,2.588,6.026-1.53L75.955,58.31c-0.136-0.53-0.406-1.014-0.792-1.405l-4.114-4.213l0.067-17.021c0-1.369-0.891-2.579-2.197-2.979c-0.313-0.125-0.651-0.193-0.984-0.193H64.372z" fill="#8B5CF6"/>
              <path d="M77.408,38.306c-0.364-0.037-0.771,0.004-1.203,0.146l-3.281,0.984v5.537l4.797-1.433C80.804,42.722,79.981,38.567,77.408,38.306z" fill="#8B5CF6"/>
              <path d="M63.226,56.187l-2.396,3.468l-7.058,2.229c-3.099,0.979-1.463,6.979,2.734,5.589l7.797-2.584c0.479-0.234,0.886-0.593,1.188-1.031l2.172-3.141L63.226,56.187z" fill="#8B5CF6"/>
          </svg>
          <div className="logo-text">
            <div className="logo-top"><span className="logo-wags">Wags and </span><span className="logo-wiggles">WIGGLES</span></div>
            <span className="logo-stamford">Stamford, Connecticut</span>
          </div>
        </div>
        <div className="nav-links">
          {nav.map(n=><button key={n.id} className={active===n.id?"active":""} onClick={()=>go(n.id)}>{n.label}</button>)}
        </div>
        <button className="nav-cta" onClick={()=>go("book")}>Book Now</button>
      </nav>

      <div className="page">
        <section id="home">
          <div className="hero">
            <div className="hero-dots"></div>
            <div className="hero-blob"></div>
            <div className="hero-blob2"></div>
            <div className="hero-inner">
              <div className="hero-pill">Stamford, CT + Surrounding Areas</div>
              <h1>Walks, hikes <em>and</em> sittings -<br/>solo or small packs.</h1>
              <p>10+ years of experience across NYC and Southern CT. One dedicated walker. Always me, always Bebe.</p>
              <div className="hero-btns">
                <button className="btn-coral" onClick={()=>go("book")}>Book a Walk</button>
                <button className="btn-ghost" onClick={()=>go("about")}>Meet Lucas and Bebe</button>
              </div>
              <div className="hero-stats">
                <div><div className="stat-num">10+</div><div className="stat-label">Years experience</div></div>
                <div><div className="stat-num">NYC to CT</div><div className="stat-label">Tri-state background</div></div>
                <div><div className="stat-num">Mon-Wed</div><div className="stat-label">Dedicated availability</div></div>
                <div><div className="stat-num" style={{fontSize:"1.2rem"}}>347-457-0974</div><div className="stat-label">Call or text anytime</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services"><PricingSection /></section>
        <section id="book"><BookingSection /></section>
        <section id="profile"><ProfileSection /></section>
        <section id="about"><AboutSection /></section>
        <div id="payment"><PaymentSection /></div>
        <section id="contact"><ContactSection /></section>

        <footer className="footer">
          <p><strong style={{color:C.teal2}}>Wags and Wiggles</strong> - Stamford, CT + surrounding areas - 347-457-0974 - wagsandwigglesstamford@gmail.com</p>
          <p style={{marginTop:4}}>2026 Lucas - All rights reserved - Mon-Wed availability - Meet and greets always free</p>
        </footer>
      </div>
    </>
  );
}
