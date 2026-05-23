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
.pc-popular{border-color:${C.teal};background:${C.teal}07;}
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
  {id:"sit",icon:"🏠",name:"House Sitting",price:100,unit:"/night",desc:"I come to your home (+ Bebe!)",hot:true},
  {id:"board",icon:"🛏️",name:"Boarding (my home)",price:100,unit:"/night",desc:"Small/medium only · 1 dog max · crate-trained"},
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
        <p className="section-sub">Available Monday-Friday · Text or email to confirm availability. Book 1 week ahead for standard rates. Rush bookings (8-24 hrs) +25%. Senior clients: call or text anytime - 347-457-0974</p>
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
            <div className="about-photo" style={{padding:0,overflow:"hidden",background:"none"}}>
              <img src="data:image/jpeg;base64,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" alt="Lucas and Bebe at Mill River Park" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:18}} onError={e=>{e.target.style.display="none";e.target.parentNode.style.background="#1B3530";e.target.parentNode.innerHTML+="🐾";}} />
            </div>
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
            <p>Available <strong>Monday-Friday</strong> · Text or email to confirm availability</strong>. I specialize in helping senior pet owners with patient, reliable, easy-to-communicate care. Call or text anytime: <strong style={{color:C.teal}}>347-457-0974</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingSection() {
  const [tab, setTab] = useState("single");

  const walkPkgs = [
    {name:"5 Walks",walks:5,price:120,per:24,save:"$15",tag:""},
    {name:"10 Walks",walks:10,price:225,per:22.5,save:"$45",tag:"Popular"},
    {name:"20 Walks",walks:20,price:420,per:21,save:"$120",tag:"Best Value"},
  ];
  const hikeSingle = [
    {name:"Single Hike · 1 Dog",price:60,desc:"One adventure, any trail"},
    {name:"3 Hike Pack · 1 Dog",price:165,per:55,save:"$15",desc:"Book 3, save $15"},
    {name:"6 Hike Pack · 1 Dog",price:312,per:52,save:"$48",desc:"Book 6, save $48",tag:"Popular"},
    {name:"9 Hike Pack · 1 Dog",price:441,per:49,save:"$99",desc:"Book 9, save $99"},
    {name:"12 Hike Pack · 1 Dog",price:552,per:46,save:"$168",desc:"Book 12, save $168",tag:"Best Value"},
  ];
  const hikeMulti = [
    {name:"Single Hike · 2 Dogs",price:110,desc:"$55/dog — save $10"},
    {name:"3 Hike Pack · 2 Dogs",price:300,per:50,save:"$30",desc:"$50/dog/hike"},
    {name:"6 Hike Pack · 2 Dogs",price:564,per:47,save:"$96",desc:"$47/dog/hike",tag:"Popular"},
    {name:"9 Hike Pack · 2 Dogs",price:792,per:44,save:"$288",desc:"$44/dog/hike"},
    {name:"12 Hike Pack · 2 Dogs",price:984,per:41,save:"$456",desc:"$41/dog/hike",tag:"Best Value"},
  ];

  return (
    <div className="section bg-white">
      <div className="section-inner">
        <p className="tag">Transparent pricing</p>
        <h2 className="section-title">Services, Rates and Packages</h2>
        <p className="section-sub">Book 1 week ahead for standard rates. Rush (8-24 hrs) +25%. Cash discount -8%. Packages paid upfront — best way to lock in your slot.</p>

        {/* Tab switcher */}
        <div className="tabs" style={{marginBottom:"2rem"}}>
          {[["single","Single Services"],["walks","Walk Packages"],["hikes","Mon-Wed Hike Specials"]].map(([id,label])=>(
            <button key={id} className={"tab"+(tab===id?" active":"")} onClick={()=>setTab(id)}>{label}</button>
          ))}
        </div>

        {tab==="single" && (
          <>
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
            <div className="addon-note" style={{marginTop:"1.25rem"}}>
              <strong>Add-ons:</strong> Feeding +$5/visit · Medication +$5/visit · Holiday +20% · Rush (8-24hr) +25% · Multi-dog household: ask for discount<br/>
              <strong style={{color:C.teal}}>Cash discount: save 8%</strong> when you pay cash on the day of service.<br/>
              <strong style={{color:C.coral}}>Boarding and sitting:</strong> $100/night · Small/medium dogs only · 1 dog max · crate-trained required
            </div>
            {/* Loyalty nudge */}
            <div style={{background:C.dark,borderRadius:14,padding:"1.25rem 1.5rem",marginTop:"1.5rem",display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"}}>
              <span style={{fontSize:"1.75rem"}}>💡</span>
              <div>
                <p style={{color:C.teal2,fontFamily:"'Fredoka One',cursive",fontSize:"1rem",marginBottom:"0.2rem"}}>Single walk? Consider a package instead.</p>
                <p style={{color:C.mist,fontSize:"0.82rem",lineHeight:1.6}}>A 10-walk package saves you $45 vs single pricing — and locks in your spot for the next few weeks. <button onClick={()=>document.querySelector(".tab:nth-child(2)").click()} style={{background:"none",border:"none",color:C.teal2,fontWeight:700,cursor:"pointer",fontSize:"0.82rem",textDecoration:"underline"}}>See walk packages →</button></p>
              </div>
            </div>
          </>
        )}

        {tab==="walks" && (
          <>
            <div style={{marginBottom:"1.25rem"}}>
              <p style={{fontSize:"0.85rem",color:"#666",lineHeight:1.7}}>30-min walks, Mon-Wed. Paid upfront — locks in your regular slot. Multi-dog households get a discount on additional dogs from the same home.</p>
            </div>
            <div className="price-grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))"}}>
              {walkPkgs.map(p=>(
                <div key={p.name} className={"pc"+(p.tag==="Best Value"?" hot":p.tag==="Popular"?" pc-popular":"")}>
                  {p.tag && <div style={{background:p.tag==="Best Value"?C.coral:C.teal,color:"white",fontSize:"0.65rem",fontWeight:700,padding:"2px 10px",borderRadius:20,display:"inline-block",marginBottom:8,letterSpacing:"0.05em"}}>{p.tag}</div>}
                  <div className="pc-icon">🦮</div>
                  <div className="pc-name">{p.name}</div>
                  <div className="pc-price">${p.price}<small>/package</small></div>
                  <div className="pc-note">${p.per}/walk · Save {p.save} vs single</div>
                </div>
              ))}
            </div>
            <div className="addon-note" style={{marginTop:"1.25rem"}}>
              <strong>Multi-dog discount:</strong> 2nd dog from same household on same walk — add 50% of per-walk rate (e.g. 10-walk pack: $225 + $112 for 2nd dog = $337 total)<br/>
              <strong>How it works:</strong> Pay upfront, I schedule your regular Mon-Wed slot, you're locked in for the month.
            </div>
          </>
        )}

        {tab==="hikes" && (
          <>
            <div style={{marginBottom:"1.25rem"}}>
              <p style={{fontSize:"0.85rem",color:"#666",lineHeight:1.7}}>Monday-Wednesday afternoon hikes at Mianus River Park, Cove Island, Bartlett Arboretum and nearby trails. Max 3 dogs per hike. Packages paid upfront.</p>
            </div>
            <div style={{marginBottom:"1.5rem"}}>
              <p style={{fontSize:"0.8rem",fontWeight:700,color:C.teal,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"0.75rem"}}>Single Dog Packages</p>
              <div className="price-grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(185px,1fr))"}}>
                {hikeSingle.map(p=>(
                  <div key={p.name} className={"pc"+(p.tag==="Best Value"?" hot":p.tag==="Popular"?" pc-popular":"")}>
                    {p.tag && <div style={{background:p.tag==="Best Value"?C.coral:C.teal,color:"white",fontSize:"0.65rem",fontWeight:700,padding:"2px 10px",borderRadius:20,display:"inline-block",marginBottom:8,letterSpacing:"0.05em"}}>{p.tag}</div>}
                    <div className="pc-icon">🥾</div>
                    <div className="pc-name">{p.name}</div>
                    <div className="pc-price">${p.price}{p.per?<small>/pack</small>:""}</div>
                    <div className="pc-note">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{fontSize:"0.8rem",fontWeight:700,color:C.purple,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"0.75rem"}}>2+ Dog Packages</p>
              <div className="price-grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(185px,1fr))"}}>
                {hikeMulti.map(p=>(
                  <div key={p.name} className={"pc"+(p.tag==="Best Value"?" hot":p.tag==="Popular"?" pc-popular":"")}>
                    {p.tag && <div style={{background:p.tag==="Best Value"?C.coral:C.teal,color:"white",fontSize:"0.65rem",fontWeight:700,padding:"2px 10px",borderRadius:20,display:"inline-block",marginBottom:8,letterSpacing:"0.05em"}}>{p.tag}</div>}
                    <div className="pc-icon">🌲</div>
                    <div className="pc-name">{p.name}</div>
                    <div className="pc-price">${p.price}{p.per?<small>/pack</small>:""}</div>
                    <div className="pc-note">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="addon-note" style={{marginTop:"1.25rem"}}>
              <strong>All hikes:</strong> 45-60 min · Mianus River Park, Cove Island, Bartlett Arboretum and nearby trails · Max 3 dogs · Afternoon slots Mon-Wed<br/>
              <strong>3+ dogs:</strong> Contact for custom group pricing
            </div>
          </>
        )}

        <div className="loyalty">
          <span style={{fontSize:"2.5rem"}}>🏆</span>
          <div style={{flex:1}}>
            <h3>Loyalty Rewards</h3>
            <p>Single-walk clients earn toward rewards. The more you book, the more you save — or just grab a package and save from day one.</p>
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
            <div className="cd"><span className="cd-icon">📷</span> <a href="https://instagram.com/wagsandwigglesstamford" target="_blank" rel="noopener noreferrer" style={{color:C.teal2,fontWeight:700,textDecoration:"none"}}>@wagsandwigglesstamford</a></div>
            <div className="cd"><span className="cd-icon">📅</span> Monday-Friday · Text or email to confirm availability</div>
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

  // Set favicon to purple dog walker icon
  useState(() => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='10 15 75 75'><path d='M37.794,45.067c-0.401,0-0.787,0.265-0.854,0.795l-1.031,6.158c-0.198,1.197-1.464,2.786-4.286,3.005c-5.558,0.427-4.953-0.261-8.667-0.313c-2.047-0.651-3.693-1.99-5.058-4.121c-0.302-0.489-0.911-0.686-1.442-0.467c-0.693,0.276-0.953,1.12-0.542,1.738c0.979,1.532,2.172,2.772,3.536,3.705c-1.974,1.14-1.703,3.073-2.396,4.5c-0.906,1.391-2.016,2.467-4.479,3.213c-0.234,0.052-0.432,0.193-0.567,0.391l-1.698,2.749l2.146,2.147c0.505-0.5,0.588-1.282,0.208-1.88l0.969-1.464l4.25,0.214l-1.703,1.328c-0.183,0.141-0.313,0.344-0.349,0.579l-0.531,3.046l2.63,1.516c0.417-0.724,0.172-1.652-0.558-2.073c-0.01-0.005-0.025-0.011-0.036-0.017l0.594-1.942c2.094-0.23,3.203-0.682,5.745-3.219c3.609-3.615,4.214,1.453,11.849,0.365l2.828,3.041l1.401,3.172c0.109,0.24,0.313,0.427,0.567,0.5l2.625,1.52c0.422-0.728,0.172-1.655-0.552-2.071c-0.141-0.079-0.292-0.136-0.453-0.167l-1.438-5.511l2.208,0.146l1.85,2.021l2.625,1.516c0.422-0.724,0.172-1.652-0.553-2.073c-0.15-0.084-0.313-0.146-0.479-0.177l-1.948-3.224c-0.099-0.121-0.224-0.213-0.37-0.271l-2.041-0.823c-0.428-0.172-0.771-0.475-1.047-0.854c-3.141-0.766-5.917-2.479-7.709-4.443l0.5-0.459c2.396,2.35,6.167,4.24,10.225,4.381c4.344,0.15,8.994-1.87,12.047-7.442l-1.683-0.923c-2.761,5.046-6.567,6.584-10.302,6.453c-1.375-0.047-2.74-0.35-4.016-0.812c-0.011-0.391,0.005-0.767,0.052-1.084c0.167-1.109,0.698-1.802,1.989-1.812l2.99-0.027c1.547-0.192,2.114-1.5,2.385-2.249c0.318-0.875,0-1.448-0.656-1.626c-1.797-0.479-2.25-0.693-3.005-1.879c-0.661-1.047-1.255-1.558-2.192-1.699l-0.37-1.375c-0.234-0.891-1.406-0.896-1.526,0l-0.156,1.188l-0.563-2.095C38.616,45.332,38.194,45.067,37.794,45.067z' fill='%238B5CF6'/><path fill-rule='evenodd' clip-rule='evenodd' d='M72.018,26.04c-1.339,3.104-4.933,4.527-8.042,3.193c-3.094-1.339-4.516-4.938-3.182-8.033c1.344-3.098,4.938-4.524,8.031-3.191C71.935,19.348,73.356,22.941,72.018,26.04z' fill='%238B5CF6'/><path d='M64.372,32.499c-0.547,0-1.084,0.167-1.531,0.479l-7.526,5.308c-0.703,0.495-1.125,1.307-1.12,2.167l-0.979,8.364c-0.386,3.282,4.771,3.949,5.266,0.355l1.016-7.339l2.135-1.5v10.355c0,1.479,0.761,2.041,1.709,3.009l6.797,6.953l2.385,9.407c0.917,4.188,7.214,2.588,6.026-1.53L75.955,58.31c-0.136-0.53-0.406-1.014-0.792-1.405l-4.114-4.213l0.067-17.021c0-1.369-0.891-2.579-2.197-2.979c-0.313-0.125-0.651-0.193-0.984-0.193H64.372z' fill='%238B5CF6'/><path d='M77.408,38.306c-0.364-0.037-0.771,0.004-1.203,0.146l-3.281,0.984v5.537l4.797-1.433C80.804,42.722,79.981,38.567,77.408,38.306z' fill='%238B5CF6'/><path d='M63.226,56.187l-2.396,3.468l-7.058,2.229c-3.099,0.979-1.463,6.979,2.734,5.589l7.797-2.584c0.479-0.234,0.886-0.593,1.188-1.031l2.172-3.141L63.226,56.187z' fill='%238B5CF6'/></svg>`;
    const blob = new Blob([svg], {type: "image/svg+xml"});
    const url = URL.createObjectURL(blob);
    const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.type = "image/svg+xml";
    link.rel = "shortcut icon";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
    document.title = "Wags and Wiggles Stamford";
  });
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
                <div><div className="stat-num" style={{fontSize:"1rem",lineHeight:1.3}}>Mon-Fri</div><div className="stat-label">Availability</div></div>
                <div><div className="stat-num" style={{fontSize:"1.2rem"}}>347-457-0974</div><div className="stat-label">Call or text anytime</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services"><PricingSection /></section>
        <section id="book"><BookingSection /></section>
        <section id="profile"><ProfileSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="contact"><ContactSection /></section>

        <footer className="footer">
          <p><strong style={{color:C.teal2}}>Wags and Wiggles</strong> - Stamford, CT + surrounding areas - 347-457-0974 - wagsandwigglesstamford@gmail.com</p>
          <p style={{marginTop:4}}>Monday-Friday · Text or email to confirm availability · Meet and greets always free</p><p style={{marginTop:4}}><a href="https://instagram.com/wagsandwigglesstamford" target="_blank" rel="noopener noreferrer" style={{color:C.teal2,textDecoration:"none"}}>Instagram: @wagsandwigglesstamford</a></p>
        </footer>
      </div>
    </>
  );
}
