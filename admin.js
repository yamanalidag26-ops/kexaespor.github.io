const KEY="kexaData";const PASS="KEXA2026";function get(){return JSON.parse(localStorage.getItem(KEY)||localStorage.getItem("kexaData")||JSON.stringify({war:{opponent:"SYLVAR ACADEMY",score:"2-0",maps:["13–10","13–10"]},players:[],matches:[],ranking:[]}))}
function login(){if(document.getElementById("password").value===PASS){sessionStorage.kexaAdmin="1";show()}else document.getElementById("loginMsg").textContent="Şifre hatalı."}
function show(){document.getElementById("loginBox").classList.add("hidden");document.getElementById("panel").classList.remove("hidden");load()}
function logout(){sessionStorage.removeItem("kexaAdmin");location.reload()}
function save(d){localStorage.setItem(KEY,JSON.stringify(d));load()}
function load(){const d=get();aOpponent.value=d.war.opponent;aScore.value=d.war.score;aMaps.value=d.war.maps.join(", ");adminPlayers.innerHTML=d.players.map((p,i)=>`<div class="admin-item"><span><b>${p.name}</b> — ${p.role} — ${p.task}</span><button onclick="delPlayer(${i})">SİL</button></div>`).join("");adminMatches.innerHTML=d.matches.map((m,i)=>`<div class="admin-item"><span>${m.opponent} — ${m.maps} — ${m.score}</span><button onclick="delMatch(${i})">SİL</button></div>`).join("");adminRanking.innerHTML=d.ranking.map((p,i)=>`<div class="admin-item"><span>${i+1}. ${p.name} — ${p.role} — ${p.status}</span></div>`).join("")}
function saveWar(){let d=get();d.war={opponent:aOpponent.value.toUpperCase(),score:aScore.value,maps:aMaps.value.split(",").map(x=>x.trim()).filter(Boolean)};save(d);alert("War Room güncellendi.")}
function addPlayer(){let d=get();if(!pName.value.trim())return;d.players.push({name:pName.value.toUpperCase(),role:pRole.value.toUpperCase(),task:pTask.value.toUpperCase()});pName.value=pRole.value=pTask.value="";save(d)}
function delPlayer(i){let d=get();d.players.splice(i,1);save(d)}
function addMatch(){let d=get();if(!mOpponent.value.trim())return;d.matches.unshift({opponent:mOpponent.value.toUpperCase(),maps:mMaps.value,score:mScore.value});mOpponent.value=mMaps.value=mScore.value="";save(d)}
function delMatch(i){let d=get();d.matches.splice(i,1);save(d)}
if(sessionStorage.kexaAdmin==="1")show();