const defaultData={
war:{opponent:"SYLVAR ACADEMY",score:"2-0",maps:["13–10","13–10"]},
players:[
{name:"BARNY",role:"DUELIST",task:"ENTRY / FRAGGER"},
{name:"J1SHR",role:"SENTINEL",task:"ANCHOR / SUPPORT"},
{name:"XEVO",role:"INITIATOR",task:"INFO / SETUP"},
{name:"NEABEN",role:"FLEX",task:"ADAPT / CLUTCH"},
{name:"SOKANZY",role:"SMOKER",task:"CONTROL / IGL"}],
matches:[
{opponent:"AGEIS E SPOR",maps:"13–2 / 13–6",score:"2–0"},
{opponent:"SYLVAR ACADEMY",maps:"13–10 / 13–10",score:"2–0"},
{opponent:"REDZONE",maps:"HAVEN 13–9 / LOTUS 13–9",score:"2–0"}],
ranking:[
{name:"BARNY",role:"DUELIST",status:"MVP CANDIDATE"},
{name:"XEVO",role:"INITIATOR",status:"HOT"},
{name:"J1SHR",role:"SENTINEL",status:"STABLE"},
{name:"NEABEN",role:"FLEX",status:"CLUTCH"},
{name:"SOKANZY",role:"SMOKER",status:"CONTROL"}]};
function data(){return JSON.parse(localStorage.getItem("kexaData")||JSON.stringify(defaultData))}
function render(){
 const d=data();
 document.getElementById("warMatch").innerHTML=`KEXA <b>VS</b> ${d.war.opponent}`;
 const [u,t]=d.war.score.split("-"); document.getElementById("warUs").textContent=u||"2";document.getElementById("warThem").textContent=t||"0";
 document.getElementById("warMaps").innerHTML=d.war.maps.map(x=>`<span>${x}</span>`).join("");
 document.getElementById("rosterGrid").innerHTML=d.players.map((p,i)=>`<article class="player"><div class="num">0${i+1}</div><h3>${p.name}</h3><p>${p.role}</p><div class="role">${p.task}</div></article>`).join("");
 document.getElementById("matchesList").innerHTML=d.matches.map(m=>`<div class="match win"><div><small>VALORANT</small><h3>KEXA vs ${m.opponent}</h3></div><div class="maps">${m.maps}</div><b>${m.score}</b></div>`).join("");
 document.getElementById("rankingList").innerHTML=`<div class="rank-row header"><span>#</span><span>PLAYER</span><span>ROLE</span><span>STATUS</span></div>`+d.ranking.map((p,i)=>`<div class="rank-row"><strong>0${i+1}</strong><span>${p.name}</span><span>${p.role}</span><b>${p.status}</b></div>`).join("");
}
render();