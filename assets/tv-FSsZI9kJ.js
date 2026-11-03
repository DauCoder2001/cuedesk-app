import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as I,x as N,k as j,o as g,r as u,d as h,v as H}from"./wake-lock-Oj0YvMLv.js";import{x as P}from"./board-regeln-D1tRIAMO.js";import{s as F}from"./tv-autofit-DgiNYFkO.js";import"./preload-helper-zcVjPdMZ.js";import"./endplaetze-B-4kKCXT.js";await I();const l=await N(),f=document.getElementById("tv-stage"),x=l.length<=2?Math.max(1,l.length):l.length<=4?2:3,L=Math.max(1,Math.ceil(l.length/x));f.style.gridTemplateColumns="repeat("+x+", 1fr)";f.style.gridTemplateRows="repeat("+L+", 1fr)";f.innerHTML=l.map(s=>'<div id="table-'+s+'" class="table-card"><div class="inactive">Warte auf Tisch '+s+"...</div></div>").join("");const n=s=>String(s??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]);j();let A=3;const R=F(document.getElementById("tv-stage"),()=>A);g(u(h,"system/tvSettings"),s=>{const a=s.val()&&Number(s.val().overscanPct);A=Number.isFinite(a)?a:3,R()});const C={auslosung:"tv-Auslosung.html",live:"tv.html",livenaechste:"tv.html",naechste:"tv-Naechste.html",results:"tv-Turnier-Ergebnis.html",spieltag:"tv-Spieltag.html",teamstand:"tv-Teamstand.html",gruppenstand:"tv-Gruppenstand.html",endplaetze:"tv-Endplaetze.html",turnierbaum:"tv-Turnierbaum.html"},D=l.length===3||l.length===5;let y=null,T=null;g(u(h,"tournament/tvView"),s=>{T=s.val();const a=C[T]||"tv.html";a!=="tv.html"&&(window.location.href=a),M()});g(u(h,"tournament/active"),s=>{y=s.val(),M()});function M(){let s=document.getElementById("naechste-feld");if(!(D&&T==="livenaechste"&&y)){s&&s.remove();return}s||(s=document.createElement("div"),s.id="naechste-feld",s.className="table-card naechste-karte"+(l.length===5?" klein":""),f.append(s));const a=y,i=a.schedule||null,e=i?Object.values(i):[],b=e.filter(t=>t.status==="completed").length,r=[a.name,e.length?b+" von "+e.length+" beendet":""].filter(Boolean).join(" · "),o=Array.isArray(a.stichkaempfe)?a.stichkaempfe:[],d=o.map(t=>'<div class="stich"><div class="skopf">STICHKAMPF · '+n(t.plaetze)+'</div><div class="snamen">'+(t.names||[]).map(n).join(t.names&&t.names.length===2?" – ":" · ")+'</div><div class="sfuss">'+(t.group?n(t.group)+" · ":"")+"Shoot-Out</div></div>").join(""),p=H(i,Math.max(0,(l.length===5?4:6)-o.length)),c=t=>{const v=/^Gruppe ([A-D])\b/.exec(t||"");return v?"gruppe-"+v[1]:"gruppe-neutral"},m=t=>t?"an Tisch "+n(t):"an einem anderen Tisch",z=p.length===0&&o.length===0?'<div class="leer">'+(e.some(t=>t.status==="running")?"Alle Spiele zugeteilt":"Keine offenen Spiele")+"</div>":'<div class="liste">'+d+p.map(({eintrag:t,belegt:v})=>{const k=[t.begegnung,t.group].filter(Boolean).join(" · "),E=v.length===0?'<span class="bereit">bereit</span>':'<span class="wartet">'+v.map(S=>n(S.name)+" spielt "+m(S.tisch)).join("<br>")+"</span>";return'<div class="spiel"><span class="links"><span class="markenfeld">'+(k?'<span class="marke '+c(t.group)+'">'+n(k)+"</span>":"")+'</span><span class="paar"><span class="p1">'+n(t.player1)+'</span><span class="gegen">–</span><span class="p2">'+n(t.player2)+'</span></span></span><span class="zustand">'+E+"</span></div>"}).join("")+"</div>";s.innerHTML='<div class="kopf"><span class="titel">Nächste Spiele</span><span class="sub">'+n(r)+"</span></div>"+z}let $=!1,B=null;g(u(h,"tournament/active/status"),s=>{$=s.val()==="running",w()});const G=u(h,"tables");g(G,s=>{B=s.val(),w()});function w(){const s=B;for(const a of l){const i=document.getElementById(`table-${a}`),e=s?s[a]:null;if(e){const b=e.gameType==="pool",r=P(e),o=r===null?"":r===0?"Spiel beendet":`Spiel beendet · Sieg <strong style="color:${r===1?"#ff4444":"#4488ff"}">${n(r===1?e.player1:e.player2)}</strong>`;if(b){const d=e.nextBreak===1?e.player1:e.player2,p=e.nextBreak===1?"#ff4444":"#4488ff";let c="";e.raceTo&&(c=` <span class="game-badge">Race to ${e.raceTo}</span>`),$&&!e.tournamentMatchId&&(c+=' <span class="game-badge" style="background:#6c757d;">Freies Spiel</span>');const m=e.discipline||"8/9/10-Ball";i.innerHTML=`
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
            `}else{const d=e.turn===1?e.player1:e.player2,p=e.turn===1?"#ff4444":"#4488ff",c=Math.max(e.inn1||0,e.inn2||0),m=$&&!e.tournamentMatchId?' <span class="game-badge" style="background:#6c757d;">Freies Spiel</span>':"";i.innerHTML=`
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
