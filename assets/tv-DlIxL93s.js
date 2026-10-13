import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as S,v as k,k as M,o,r,d as c}from"./wake-lock-DsKx8cXg.js";import{v as x}from"./board-regeln-CxBug1AS.js";import{s as A}from"./tv-autofit-BTz2DVA_.js";import"./zuschauen-KKQesivj.js";await S();const n=await k(),g=document.getElementById("tv-stage"),u=n.length<=2?Math.max(1,n.length):n.length<=4?2:3,B=Math.max(1,Math.ceil(n.length/u));g.style.gridTemplateColumns="repeat("+u+", 1fr)";g.style.gridTemplateRows="repeat("+B+", 1fr)";g.innerHTML=n.map(t=>'<div id="table-'+t+'" class="table-card"><div class="inactive">Warte auf Tisch '+t+"...</div></div>").join("");const a=t=>String(t??"").replace(/[&<>"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[s]);M();let b=3;const w=A(document.getElementById("tv-stage"),()=>b);o(r(c,"system/tvSettings"),t=>{const s=t.val()&&Number(t.val().overscanPct);b=Number.isFinite(s)?s:3,w()});const I={auslosung:"tv-Auslosung.html",live:"tv.html",results:"tv-Turnier-Ergebnis.html",spieltag:"tv-Spieltag.html"};o(r(c,"tournament/tvView"),t=>{const s=I[t.val()]||"tv.html";s!=="tv.html"&&(window.location.href=s)});let m=!1,h=null;o(r(c,"tournament/active/status"),t=>{m=t.val()==="running",y()});const P=r(c,"tables");o(P,t=>{h=t.val(),y()});function y(){const t=h;for(const s of n){const p=document.getElementById(`table-${s}`),e=t?t[s]:null;if(e){const $=e.gameType==="pool",i=x(e),f=i===null?"":i===0?"Spiel beendet":`Spiel beendet · Sieg <strong style="color:${i===1?"#ff4444":"#4488ff"}">${a(i===1?e.player1:e.player2)}</strong>`;if($){const d=e.nextBreak===1?e.player1:e.player2,v=e.nextBreak===1?"#ff4444":"#4488ff";let l="";e.raceTo&&(l=` <span class="game-badge">Race to ${e.raceTo}</span>`),m&&!e.tournamentMatchId&&(l+=' <span class="game-badge" style="background:#6c757d;">Freies Spiel</span>'),p.innerHTML=`
              <div class="table-title">Tisch ${s} <span class="game-badge">Pool</span>${l}</div>
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
                ${f||`Nächster Anstoß: <strong style="color:${v}">${a(d)}</strong>`}
              </div>
            `}else{const d=e.turn===1?e.player1:e.player2,v=e.turn===1?"#ff4444":"#4488ff",l=Math.max(e.inn1||0,e.inn2||0),T=m&&!e.tournamentMatchId?' <span class="game-badge" style="background:#6c757d;">Freies Spiel</span>':"";p.innerHTML=`
              <div class="table-title">Tisch ${s} <span class="game-badge">14.1</span>${T}</div>
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
                ${f||`Am Tisch: <strong style="color:${v}">${a(d)}</strong>`} &nbsp;|&nbsp;
                Ziel: ${e.target||40} Pkt. / ${e.targetInn||20} Aufn. &nbsp;|&nbsp;
                Aufnahme: ${l}
              </div>
            `}}else p.innerHTML=`
            <div class="table-title">Tisch ${s}</div>
            <div class="inactive">Tisch nicht besetzt</div>
          `}}
