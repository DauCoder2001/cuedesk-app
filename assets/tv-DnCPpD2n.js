import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as S,x,k,o as c,r,d as o}from"./wake-lock-C0NdCknr.js";import{x as M}from"./board-regeln-B9xu3797.js";import{s as B}from"./tv-autofit-BTz2DVA_.js";import"./preload-helper-BXl3LOEh.js";import"./zuschauen-Blo4ZQQp.js";await S();const n=await x(),f=document.getElementById("tv-stage"),h=n.length<=2?Math.max(1,n.length):n.length<=4?2:3,A=Math.max(1,Math.ceil(n.length/h));f.style.gridTemplateColumns="repeat("+h+", 1fr)";f.style.gridTemplateRows="repeat("+A+", 1fr)";f.innerHTML=n.map(t=>'<div id="table-'+t+'" class="table-card"><div class="inactive">Warte auf Tisch '+t+"...</div></div>").join("");const a=t=>String(t??"").replace(/[&<>"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[s]);k();let b=3;const w=B(document.getElementById("tv-stage"),()=>b);c(r(o,"system/tvSettings"),t=>{const s=t.val()&&Number(t.val().overscanPct);b=Number.isFinite(s)?s:3,w()});const I={auslosung:"tv-Auslosung.html",live:"tv.html",naechste:"tv-Naechste.html",results:"tv-Turnier-Ergebnis.html",spieltag:"tv-Spieltag.html"};c(r(o,"tournament/tvView"),t=>{const s=I[t.val()]||"tv.html";s!=="tv.html"&&(window.location.href=s)});let g=!1,y=null;c(r(o,"tournament/active/status"),t=>{g=t.val()==="running",$()});const E=r(o,"tables");c(E,t=>{y=t.val(),$()});function $(){const t=y;for(const s of n){const p=document.getElementById(`table-${s}`),e=t?t[s]:null;if(e){const T=e.gameType==="pool",i=M(e),u=i===null?"":i===0?"Spiel beendet":`Spiel beendet · Sieg <strong style="color:${i===1?"#ff4444":"#4488ff"}">${a(i===1?e.player1:e.player2)}</strong>`;if(T){const d=e.nextBreak===1?e.player1:e.player2,v=e.nextBreak===1?"#ff4444":"#4488ff";let l="";e.raceTo&&(l=` <span class="game-badge">Race to ${e.raceTo}</span>`),g&&!e.tournamentMatchId&&(l+=' <span class="game-badge" style="background:#6c757d;">Freies Spiel</span>');const m=e.discipline||"8/9/10-Ball";p.innerHTML=`
              <div class="table-title">Tisch ${s} <span class="game-badge">${a(m)}</span>${l}</div>
              <div class="matchup">
                <div class="p1">${a(e.player1||"Spieler 1")}</div>
                <div class="score">
                  <span style="color:#ff4444">${e.score1||0}</span> 
                  <span class="colon">:</span> 
                  <span style="color:#4488ff">${e.score2||0}</span>
                </div>
                <div class="p2">${a(e.player2||"Spieler 2")}</div>
              </div>
              <div class="stats">
                ${u||`Nächster Anstoß: <strong style="color:${v}">${a(d)}</strong>`}
              </div>
            `}else{const d=e.turn===1?e.player1:e.player2,v=e.turn===1?"#ff4444":"#4488ff",l=Math.max(e.inn1||0,e.inn2||0),m=g&&!e.tournamentMatchId?' <span class="game-badge" style="background:#6c757d;">Freies Spiel</span>':"";p.innerHTML=`
              <div class="table-title">Tisch ${s} <span class="game-badge">14.1</span>${m}</div>
              <div class="matchup">
                <div class="p1">${a(e.player1||"Spieler 1")}</div>
                <div class="score">
                  <span style="color:#ff4444">${e.s1||0}</span> 
                  <span class="colon">:</span> 
                  <span style="color:#4488ff">${e.s2||0}</span>
                </div>
                <div class="p2">${a(e.player2||"Spieler 2")}</div>
              </div>
              <div class="stats">
                ${u||`Am Tisch: <strong style="color:${v}">${a(d)}</strong>`} &nbsp;|&nbsp;
                Ziel: ${e.target||40} Pkt. / ${e.targetInn||20} Aufn. &nbsp;|&nbsp;
                Aufnahme: ${l}
              </div>
            `}}else p.innerHTML=`
            <div class="table-title">Tisch ${s}</div>
            <div class="inactive">Tisch nicht besetzt</div>
          `}}
