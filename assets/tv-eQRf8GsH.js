import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as E,x as N,k as z,o as m,r as g,d as u,v as I}from"./wake-lock-DNKI8YlE.js";import{x as j}from"./board-regeln-BkQMmG2H.js";import{s as P}from"./tv-autofit-DgiNYFkO.js";import"./preload-helper-B336Qpb3.js";import"./endplaetze-B-4kKCXT.js";await E();const l=await N(),f=document.getElementById("tv-stage"),S=l.length<=2?Math.max(1,l.length):l.length<=4?2:3,H=Math.max(1,Math.ceil(l.length/S));f.style.gridTemplateColumns="repeat("+S+", 1fr)";f.style.gridTemplateRows="repeat("+H+", 1fr)";f.innerHTML=l.map(s=>'<div id="table-'+s+'" class="table-card"><div class="inactive">Warte auf Tisch '+s+"...</div></div>").join("");const n=s=>String(s??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]);z();let x=3;const L=P(document.getElementById("tv-stage"),()=>x);m(g(u,"system/tvSettings"),s=>{const a=s.val()&&Number(s.val().overscanPct);x=Number.isFinite(a)?a:3,L()});const R={auslosung:"tv-Auslosung.html",live:"tv.html",livenaechste:"tv.html",naechste:"tv-Naechste.html",results:"tv-Turnier-Ergebnis.html",spieltag:"tv-Spieltag.html",teamstand:"tv-Teamstand.html",gruppenstand:"tv-Gruppenstand.html",endplaetze:"tv-Endplaetze.html"},F=l.length===3||l.length===5;let b=null,y=null;m(g(u,"tournament/tvView"),s=>{y=s.val();const a=R[y]||"tv.html";a!=="tv.html"&&(window.location.href=a),B()});m(g(u,"tournament/active"),s=>{b=s.val(),B()});function B(){let s=document.getElementById("naechste-feld");if(!(F&&y==="livenaechste"&&b)){s&&s.remove();return}s||(s=document.createElement("div"),s.id="naechste-feld",s.className="table-card naechste-karte"+(l.length===5?" klein":""),f.append(s));const a=b,i=a.schedule||null,e=i?Object.values(i):[],h=e.filter(t=>t.status==="completed").length,r=[a.name,e.length?h+" von "+e.length+" beendet":""].filter(Boolean).join(" · "),o=I(i,l.length===5?4:6),p=t=>{const v=/^Gruppe ([A-D])\b/.exec(t||"");return v?"gruppe-"+v[1]:"gruppe-neutral"},d=t=>t?"an Tisch "+n(t):"an einem anderen Tisch",c=o.length===0?'<div class="leer">'+(e.some(t=>t.status==="running")?"Alle Spiele zugeteilt":"Keine offenen Spiele")+"</div>":'<div class="liste">'+o.map(({eintrag:t,belegt:v})=>{const T=[t.begegnung,t.group].filter(Boolean).join(" · "),w=v.length===0?'<span class="bereit">bereit</span>':'<span class="wartet">'+v.map(k=>n(k.name)+" spielt "+d(k.tisch)).join("<br>")+"</span>";return'<div class="spiel"><span class="links"><span class="markenfeld">'+(T?'<span class="marke '+p(t.group)+'">'+n(T)+"</span>":"")+'</span><span class="paar"><span class="p1">'+n(t.player1)+'</span><span class="gegen">–</span><span class="p2">'+n(t.player2)+'</span></span></span><span class="zustand">'+w+"</span></div>"}).join("")+"</div>";s.innerHTML='<div class="kopf"><span class="titel">Nächste Spiele</span><span class="sub">'+n(r)+"</span></div>"+c}let $=!1,M=null;m(g(u,"tournament/active/status"),s=>{$=s.val()==="running",A()});const C=g(u,"tables");m(C,s=>{M=s.val(),A()});function A(){const s=M;for(const a of l){const i=document.getElementById(`table-${a}`),e=s?s[a]:null;if(e){const h=e.gameType==="pool",r=j(e),o=r===null?"":r===0?"Spiel beendet":`Spiel beendet · Sieg <strong style="color:${r===1?"#ff4444":"#4488ff"}">${n(r===1?e.player1:e.player2)}</strong>`;if(h){const p=e.nextBreak===1?e.player1:e.player2,d=e.nextBreak===1?"#ff4444":"#4488ff";let c="";e.raceTo&&(c=` <span class="game-badge">Race to ${e.raceTo}</span>`),$&&!e.tournamentMatchId&&(c+=' <span class="game-badge" style="background:#6c757d;">Freies Spiel</span>');const t=e.discipline||"8/9/10-Ball";i.innerHTML=`
              <div class="table-title">Tisch ${a} <span class="game-badge">${n(t)}</span>${c}</div>
              <div class="matchup">
                <div class="p1">${n(e.player1||"Spieler 1")}</div>
                <div class="score">
                  <span style="color:#ff4444">${e.score1||0}</span> 
                  <span class="colon">:</span> 
                  <span style="color:#4488ff">${e.score2||0}</span>
                </div>
                <div class="p2">${n(e.player2||"Spieler 2")}</div>
              </div>
              <div class="stats">
                ${o||`Nächster Anstoß: <strong style="color:${d}">${n(p)}</strong>`}
              </div>
            `}else{const p=e.turn===1?e.player1:e.player2,d=e.turn===1?"#ff4444":"#4488ff",c=Math.max(e.inn1||0,e.inn2||0),t=$&&!e.tournamentMatchId?' <span class="game-badge" style="background:#6c757d;">Freies Spiel</span>':"";i.innerHTML=`
              <div class="table-title">Tisch ${a} <span class="game-badge">14.1</span>${t}</div>
              <div class="matchup">
                <div class="p1">${n(e.player1||"Spieler 1")}</div>
                <div class="score">
                  <span style="color:#ff4444">${e.s1||0}</span> 
                  <span class="colon">:</span> 
                  <span style="color:#4488ff">${e.s2||0}</span>
                </div>
                <div class="p2">${n(e.player2||"Spieler 2")}</div>
              </div>
              <div class="stats">
                ${o||`Am Tisch: <strong style="color:${d}">${n(p)}</strong>`} &nbsp;|&nbsp;
                Ziel: ${e.target||40} Pkt. / ${e.targetInn||20} Aufn. &nbsp;|&nbsp;
                Aufnahme: ${c}
              </div>
            `}}else i.innerHTML=`
            <div class="table-title">Tisch ${a}</div>
            <div class="inactive">Tisch nicht besetzt</div>
          `}}
