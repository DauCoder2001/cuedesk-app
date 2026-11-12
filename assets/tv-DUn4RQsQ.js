import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as j,z as H,k as P,o as g,r as u,d as h,x as C}from"./wake-lock-EE35dRxz.js";import{x as R}from"./board-regeln-CFuN0ed1.js";import{s as F}from"./tv-autofit-DgiNYFkO.js";import"./preload-helper-C_plrGIO.js";import"./endplaetze-h2QdqXS_.js";await j();const l=await H(),f=document.getElementById("tv-stage"),b=l.length<=2?Math.max(1,l.length):l.length<=4?2:3,L=Math.max(1,Math.ceil(l.length/b));f.style.gridTemplateColumns="repeat("+b+", 1fr)";f.style.gridTemplateRows="repeat("+L+", 1fr)";f.innerHTML=l.map(s=>'<div id="table-'+s+'" class="table-card"><div class="inactive">Warte auf Tisch '+s+"...</div></div>").join("");const n=s=>String(s??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]);P();let B=3;const D=F(document.getElementById("tv-stage"),()=>B);g(u(h,"system/tvSettings"),s=>{const a=s.val()&&Number(s.val().overscanPct);B=Number.isFinite(a)?a:3,D()});const G={auslosung:"tv-Auslosung.html",live:"tv.html",livenaechste:"tv.html",naechste:"tv-Naechste.html",results:"tv-Turnier-Ergebnis.html",spieltag:"tv-Spieltag.html",teamstand:"tv-Teamstand.html",gruppenstand:"tv-Gruppenstand.html",endplaetze:"tv-Endplaetze.html",turnierbaum:"tv-Turnierbaum.html"},K=l.length>=3&&l.length<=6,T=l.length===4||l.length===6,O=T?8:l.length===5?4:6,M=s=>{f.style.gridTemplateColumns="repeat("+b+", 1fr)"+(s?" minmax(0, 1.1fr)":"")};let $=null,k=null;g(u(h,"tournament/tvView"),s=>{k=s.val();const a=G[k]||"tv.html";a!=="tv.html"&&(window.location.href=a),z()});g(u(h,"tournament/active"),s=>{$=s.val(),z()});function z(){let s=document.getElementById("naechste-feld");if(!(K&&k==="livenaechste"&&$)){s&&(s.remove(),T&&M(!1));return}s||(s=document.createElement("div"),s.id="naechste-feld",s.className="table-card naechste-karte"+(l.length===5?" klein":""),T&&(s.style.gridColumn=String(b+1),s.style.gridRow="1 / -1",M(!0)),f.append(s));const a=$,i=a.schedule||null,e=i?Object.values(i):[],y=e.filter(t=>t.status==="completed").length,r=[a.name,e.length?y+" von "+e.length+" beendet":""].filter(Boolean).join(" · "),o=Array.isArray(a.stichkaempfe)?a.stichkaempfe:[],d=o.map(t=>'<div class="stich"><div class="skopf">STICHKAMPF · '+n(t.plaetze)+'</div><div class="snamen">'+(t.names||[]).map(n).join(t.names&&t.names.length===2?" – ":" · ")+'</div><div class="sfuss">'+(t.group?n(t.group)+" · ":"")+"Shoot-Out</div></div>").join(""),p=C(i,Math.max(0,O-o.length)),c=t=>{const v=/^Gruppe ([A-D])\b/.exec(t||"");return v?"gruppe-"+v[1]:"gruppe-neutral"},m=t=>t?"an Tisch "+n(t):"an einem anderen Tisch",E=p.length===0&&o.length===0?'<div class="leer">'+(e.some(t=>t.status==="running")?"Alle Spiele zugeteilt":"Keine offenen Spiele")+"</div>":'<div class="liste">'+d+p.map(({eintrag:t,belegt:v})=>{const x=[t.begegnung,t.group].filter(Boolean).join(" · "),I=v.length===0?'<span class="bereit">bereit</span>':'<span class="wartet">'+v.map(A=>n(A.name)+" spielt "+m(A.tisch)).join("<br>")+"</span>";return'<div class="spiel"><span class="links"><span class="markenfeld">'+(x?'<span class="marke '+c(t.group)+'">'+n(x)+"</span>":"")+'</span><span class="paar"><span class="p1">'+n(t.player1)+'</span><span class="gegen">–</span><span class="p2">'+n(t.player2)+'</span></span></span><span class="zustand">'+I+"</span></div>"}).join("")+"</div>";s.innerHTML='<div class="kopf"><span class="titel">Nächste Spiele</span><span class="sub">'+n(r)+"</span></div>"+E}let S=!1,w=null;g(u(h,"tournament/active/status"),s=>{S=s.val()==="running",N()});const V=u(h,"tables");g(V,s=>{w=s.val(),N()});function N(){const s=w;for(const a of l){const i=document.getElementById(`table-${a}`),e=s?s[a]:null;if(e){const y=e.gameType==="pool",r=R(e),o=r===null?"":r===0?"Spiel beendet":`Spiel beendet · Sieg <strong style="color:${r===1?"#ff4444":"#4488ff"}">${n(r===1?e.player1:e.player2)}</strong>`;if(y){const d=e.nextBreak===1?e.player1:e.player2,p=e.nextBreak===1?"#ff4444":"#4488ff";let c="";e.raceTo&&(c=` <span class="game-badge">Race to ${e.raceTo}</span>`),S&&!e.tournamentMatchId&&(c+=' <span class="game-badge" style="background:#6c757d;">Freies Spiel</span>');const m=e.discipline||"8/9/10-Ball";i.innerHTML=`
              <div class="table-title">Tisch ${a} <span class="game-badge">${n(m)}</span>${c}</div>
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
                ${o||`Nächster Anstoß: <strong style="color:${p}">${n(d)}</strong>`}
              </div>
            `}else{const d=e.turn===1?e.player1:e.player2,p=e.turn===1?"#ff4444":"#4488ff",c=Math.max(e.inn1||0,e.inn2||0),m=S&&!e.tournamentMatchId?' <span class="game-badge" style="background:#6c757d;">Freies Spiel</span>':"";i.innerHTML=`
              <div class="table-title">Tisch ${a} <span class="game-badge">14.1</span>${m}</div>
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
                ${o||`Am Tisch: <strong style="color:${p}">${n(d)}</strong>`} &nbsp;|&nbsp;
                Ziel: ${e.target||40} Pkt. / ${e.targetInn||20} Aufn. &nbsp;|&nbsp;
                Aufnahme: ${c}
              </div>
            `}}else i.innerHTML=`
            <div class="table-title">Tisch ${a}</div>
            <div class="inactive">Tisch nicht besetzt</div>
          `}}
