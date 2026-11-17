(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){return e.frame===`front`?{x:t.z,y:t.y,z:-t.x}:e.frame===`back`?{x:-t.z,y:t.y,z:t.x}:{x:t.x,y:t.y,z:t.z}}function t(e){return e.frame===`front`?{x:0,y:Math.SQRT1_2,z:0,w:Math.SQRT1_2}:e.frame===`back`?{x:0,y:-Math.SQRT1_2,z:0,w:Math.SQRT1_2}:{x:0,y:0,z:0,w:1}}function n(e){let t=e.frame??`side`,n={x0:-e.halfX,x1:-e.halfX+e.holeW,z0:-(e.boardHalfZ+.005),z1:e.boardHalfZ+.005},r={hingeX:n.x1+(e.shelf??0),halfX:e.boardHalfX,halfY:.004,halfZ:e.boardHalfZ},i=t===`side`?{halfX:e.halfX,halfZ:e.halfZ,wallH:e.wallH??.46}:{halfX:e.halfZ,halfZ:e.halfX,wallH:e.wallH??.46},a=t===`front`?{x0:n.z0,x1:n.z1,z0:-n.x1,z1:-n.x0}:t===`back`?{x0:-n.z1,x1:-n.z0,z0:n.x0,z1:n.x1}:{...n};return{frame:t,field:i,hole:a,localHole:n,board:r,boardCx:r.hingeX+r.halfX,shelf:e.shelf,fence:{z:e.boardHalfZ+.011,halfT:.003,h:.034},chute:{rampTop:t===`back`?-.06:-.07,rampBottom:-.205,exitZ0:i.halfZ,exitZ1:i.halfZ+(e.trayDepth??.115),floorY:-.235,...t===`back`?{knee:{z:a.z1+.08,y:-.17},floorZ1:a.z1+.08}:{}}}}function r(e,t){return e.halfZ??t.board.halfZ*.92}function i(e,t){let n=Math.max(0,Math.min(1,(t-e.low)/(e.high-e.low)));return(e.lift??0)+n*Math.abs(e.high-e.low)*Math.tan(e.angle)}var a=.003;function o(e,t){let n=e.layout.board.halfY;return e.sign?n+i(e.sign,t.x):n}var s=(e,t,n)=>({x:e,y:t,z:n}),c={frog:{id:`frog`,friction:.6,parts:[{name:`body`,kind:`capsule`,r:.04,half:.022,mass:.04,pos:s(0,.078,0)},{name:`head`,kind:`ball`,r:.047,half:0,mass:.028,pos:s(0,.16,.004),parent:0,anchor:s(0,.12,0),stiff:.045,damp:.003,extra:[{r:.017,pos:s(-.026,.204,.008)},{r:.017,pos:s(.026,.204,.008)}]},{name:`armL`,kind:`capsule`,r:.015,half:.028,mass:.008,pos:s(-.062,.148,0),tilt:.55,parent:0,anchor:s(-.036,.112,0),stiff:.009,damp:8e-4},{name:`armR`,kind:`capsule`,r:.015,half:.028,mass:.008,pos:s(.062,.148,0),tilt:-.55,parent:0,anchor:s(.036,.112,0),stiff:.009,damp:8e-4},{name:`legL`,kind:`capsule`,r:.019,half:.024,mass:.012,pos:s(-.025,.043,.002),parent:0,anchor:s(-.022,.062,0),stiff:.015,damp:.001},{name:`legR`,kind:`capsule`,r:.019,half:.024,mass:.012,pos:s(.025,.043,.002),parent:0,anchor:s(.022,.062,0),stiff:.015,damp:.001}]},cat:{id:`cat`,friction:.6,parts:[{name:`body`,kind:`capsule`,r:.046,half:.02,mass:.05,pos:s(0,.074,0)},{name:`head`,kind:`ball`,r:.056,half:0,mass:.034,pos:s(0,.172,.002),parent:0,anchor:s(0,.122,0),stiff:.06,damp:.004,extra:[{r:.016,pos:s(-.036,.222,0)},{r:.016,pos:s(.036,.222,0)}]},{name:`armL`,kind:`capsule`,r:.016,half:.02,mass:.008,pos:s(-.05,.088,.012),tilt:-.25,parent:0,anchor:s(-.04,.112,.006),stiff:.01,damp:8e-4},{name:`armR`,kind:`capsule`,r:.016,half:.02,mass:.008,pos:s(.05,.088,.012),tilt:.25,parent:0,anchor:s(.04,.112,.006),stiff:.01,damp:8e-4},{name:`legL`,kind:`capsule`,r:.02,half:.012,mass:.01,pos:s(-.026,.032,.006),parent:0,anchor:s(-.024,.05,0),stiff:.008,damp:.001},{name:`legR`,kind:`capsule`,r:.02,half:.012,mass:.01,pos:s(.026,.032,.006),parent:0,anchor:s(.024,.05,0),stiff:.008,damp:.001},{name:`tail`,kind:`capsule`,r:.012,half:.03,mass:.006,pos:s(.026,.07,-.058),tilt:-.35,lean:-.9,parent:0,anchor:s(.012,.05,-.04),stiff:.006,damp:5e-4}]}},l={frog:s(.08,.05,.12),cat:s(.075,.056,.125)};function u(e){return e.type===`box`||e.type===`plush`?e.half:e.type===`standing`?{x:e.radius,y:e.height/2,z:e.count*e.radius}:{x:e.count*e.radius,y:e.radius,z:e.length/2}}function d(e,t){let{field:n,hole:r}=e;return{home:{x:+(e.frame===`side`?r.x0+.06:-n.halfX+t+.03).toFixed(4),y:.407,z:+(n.halfZ-t-.014).toFixed(4)},limit:{x:n.halfX-.04,z:-(n.halfZ-t-.012)},speed:.2,lowerY:.236}}var f={type:`box`,half:{x:.03,y:.042,z:.03},mass:.11},p=n({halfX:.21,halfZ:.17,holeW:.122,boardHalfX:.1,boardHalfZ:.09}),m={chain:.19,ringWire:.0035,boardFriction:.34,boardLimit:.62,ringDamping:.04,chainDamping:3,lockChainTwist:!0,solverIterations:6,ringSegments:16,ccdSubsteps:2,chainLinksPerBody:3,ccd:!1},h={...m,id:`standard`,layout:p,crane:d(p,.046),ringRadius:.046,ringMass:.065,hooks:[{x:.062,z:0,mouth:.027,direction:0}],prize:{friction:.34,gap:.02,z:0,yaw:0},defaultShape:f},g=n({halfX:.24,halfZ:.17,holeW:.16,boardHalfX:.12,boardHalfZ:.09,trayDepth:.15}),_={...m,id:`slant`,layout:g,crane:d(g,.04),ringRadius:.04,ringMass:.12,hooks:[{x:.12,z:.004,mouth:.022,direction:-.95}],prize:{friction:.34,gap:.02,z:0,yaw:0},defaultShape:{type:`box`,half:{x:.05,y:.022,z:.065},mass:.09}},v=.08,y=.0045,b={x:4*v,z:6*v},x=2.4*v,S=n({frame:`back`,halfX:.34,halfZ:.32,holeW:.2,wallH:.58,boardHalfX:b.x/2,boardHalfZ:b.z/2,trayDepth:.15,shelf:.07}),C=S.board.hingeX;function w(e,t){let n=e.reduce((e,t)=>e+t.x,0)/e.length,r=e.reduce((e,t)=>e+t.z,0)/e.length;return e.map(e=>({...e,mouth:t,direction:Math.atan2(r-e.z,n-e.x),style:`question`}))}var T=C+S.board.halfX*2,E=C,D=E+x,O={side:1.75*v,depth:1.3*v},k={height:.72*v,loop:.58*v,tip:.47*v},A={...m,id:`triple`,layout:S,crane:(()=>{let e=d(S,v/2-y);return{...e,home:{...e.home,y:.525},lowerY:.2}})(),ringRadius:v/2-y,ringMass:.13,ringColor:14278374,ringWire:y,hooks:w([{label:`A`,x:D-O.depth/2,z:0},{label:`B`,x:D+O.depth/2,z:O.side/2},{label:`C`,x:D+O.depth/2,z:-O.side/2}],k.loop-4*a),ringSegments:12,chainStyle:`ball`,chainMass:.08,chainDamping:3,chainLinksPerBody:8,sign:{low:T,high:E,angle:0,lift:.003,halfZ:b.z/2},boardLimit:1.1,boardMass:.12,signMass:.02,lift:{posts:.16,dumpAt:.03,dumpAngle:.7},hookFriction:.35,prize:{friction:.34,gap:.006,z:0,yaw:0},defaultShape:{type:`standing`,count:3,radius:.03,height:.17,mass:.45}},j={type:`box`,half:{x:.06,y:.09,z:.045},mass:.22,friction:.25,com:{x:.004,y:-.022,z:-.006}},M=e=>Math.round(e*1e4)/1e4,N=(e,t)=>{let n={}[e];return n?Number(n):t},ee={halfX:.35,halfZ:.35,wallH:N(`WALLH`,1)},P=.0085,te=.025,ne=.025,re=.0215,ie=.22;function ae(e=j,t={}){let n=u(e),r=n.z*2,i=n.y*2,a=M(Math.min(r+(t.margin??.035),i-.03)+P*2),o=M(Math.max(r*.6,r-(t.outerLess??.03))+P*2),s=M(ee.halfZ-(t.front??ne)-P-a/2-o),c=[-(a/2+o),-a/2,a/2,a/2+o].map(e=>s+e),l={x0:-.24,x1:.24,z0:c[1]+P,z1:c[2]-P},d=Math.max(-ee.halfZ+.02,c[0]-P-re),f=e.mass/ie,p={frame:`side`,field:ee,hole:l,localHole:l,board:{hingeX:-.09,halfX:.09,halfY:.004,halfZ:.09},boardCx:0,fence:{z:.2,halfT:.003,h:.034},chute:{rampTop:-.24,rampBottom:-.44,exitZ0:ee.halfZ,exitZ1:ee.halfZ+.24,floorY:-.5,doorH:.3}},h={barY:.07,barRadius:P,bars:c.map((e,t)=>({z:e,grip:`pink`,lift:t===0||t===3?te:0,marks:t===1||t===2})),prize:{x:0,z:s,yaw:.05},marks:{x0:l.x0+.01,x1:l.x1-.01},backWall:.24,backZ:d,arm:{hingeX:.105,elbow:{x:.03,y:-.1},tip:{x:-.083,y:-.2},claw:{length:.026,width:.022,angle:.52,thick:t.claw??.006},plate:{width:.016,thick:.008},mass:t.armMass??.06,open:t.open??.66,closed:0,openTorque:.25,grabTorque:(t.grab??.8)*f,holdTorque:(t.hold??.016)*f,easeHeight:t.ease??.08,side:[1,t.side??.93],friction:.15},pushForce:t.push??7,pushSlack:t.slack??.1,sway:{period:1.2,damping:.13,gain:t.sway??.5,mass:1.5,play:t.play??.06,stiff:12},twist:t.twist??-.21,swivel:{stiff:t.swivel??4,damp:.16,play:.17},contactHz:t.contactHz??200};return{...m,id:`bridge`,bridge:h,layout:p,crane:{home:{x:-.155,y:t.homeY??.7,z:M(ee.halfZ-.07)},limit:{x:.155,z:M(d+.02)},speed:.2,lowerSpeed:t.lower??.24,liftSpeed:t.lift??.28,lowerY:.26,settleTime:t.settle??2.6},chain:0,ringRadius:.01,ringMass:.01,hooks:[],solverIterations:t.iters??8,ccd:!0,prize:{friction:.25,gap:0,z:0,yaw:0},defaultShape:e}}function oe(){let e=ae(j),t=e.bridge,n=ee,r={x:-.155,y:e.crane.home.y,z:.24},i={x:r.x,z:r.z,y:.22,cols:6,rows:3,pitchX:.0575,pitchZ:.0633,bar:.009,depth:.025,tilt:.026,wall:.11,win:N(`WINS`,2)>1?[[1,1],[4,1]]:[[4,1]],filled:[[0,0],[5,2],[2,2]]},a={x0:N(`DX0`,.02),x1:N(`DX1`,.26),z0:N(`DZ0`,-.16),z1:N(`DZ1`,0),y:.06,rim:N(`RIM`,.06),pile:[N(`PNX`,5),N(`PNZ`,3)]},o=n.halfZ,s={...e.layout,hole:{x0:-.24,x1:.24,z0:o,z1:o},localHole:{x0:-.24,x1:.24,z0:o,z1:o}};return{...e,id:`takoyaki`,layout:s,tako:{ball:{radius:.02,mass:.0027,restitution:.84,friction:.35,count:N(`NBALL`,32)},plate:i,dish:a},bridge:{...t,bars:[],backWall:0,backZ:-n.halfZ,prize:{x:0,z:0,yaw:0},marks:{x0:-n.halfX,x1:n.halfX},arm:{...t.arm,claw:{...t.arm.claw,length:.012,angle:0},fork:{length:N(`FLEN`,.05),gap:.026,rod:.0025,lip:N(`FLIP`,.008),tilt:N(`FTILT`,.35),lipAngle:N(`FLA`,.45)},single:!0,releaseOpen:N(`ROPEN`,1.35),side:[1,1]}},crane:{...e.crane,home:r,limit:{x:.155,z:-.14}},solverIterations:N(`TITERS`,8)}}var se=oe(),ce={type:`plush`,model:`frog`,half:l.frog,mass:.108,friction:.6};function le(e){let t=ae(j),n=t.bridge,r=ee,i={x0:-r.halfX,x1:-.06,z0:.08,z1:r.halfZ},a={x:e===3?-.2:-.16,y:t.crane.home.y,z:.21},o={...t.layout,hole:i,localHole:i,chute:{...t.layout.chute,rampTop:-.2,rampBottom:-.4}},s={...n.arm,friction:N(`PFR`,.55),grabTorque:N(`PGRAB`,.5),holdTorque:N(`PHOLD`,.2),easeHeight:.05,side:[1,1]},c={...n.arm,count:3,hingeX:.032,elbow:{x:.022,y:-.075},tip:{x:N(`CTIPX`,-.018),y:-.14},claw:{length:N(`CLEN`,.022),width:.014,angle:N(`CANG`,.9),thick:.004},plate:{width:.012,thick:.004},mass:.05,open:N(`COPEN`,.62),closed:-.25,openTorque:.12,friction:N(`CFR`,.5),grabTorque:N(`CGRAB`,.16),holdTorque:N(`CHOLD`,.09),carryTorque:N(`CCARRY`,.07),easeHeight:.04,carryOpen:N(`COPENTOP`,.45),side:[1,1]};return{...t,id:e===3?`plush3`:`plush2`,layout:o,plush:{place:{x:.07,z:-.04,yaw:.35},guard:{h:.07,t:.004}},bridge:{...n,bars:[],backWall:0,backZ:-r.halfZ,prize:{x:0,z:0,yaw:0},marks:{x0:-r.halfX,x1:r.halfX},arm:e===3?c:s,pushForce:e===3?4:n.pushForce,twist:e===3?-.08:n.twist},crane:{...t.crane,home:a,limit:{x:e===3?.26:.16,z:-.22},lowerY:N(`LOWY`,e===3?.13:.232)},defaultShape:ce}}var ue=le(2),de=le(3),fe=ae(j);fe.bridge;var pe={standard:h,slant:_,triple:A,bridge:fe,takoyaki:se,plush2:ue,plush3:de};function me(e,t){let n=pe[e]??pe.standard;return n.tako?n:n.plush?t?.type===`plush`?{...n,defaultShape:t}:n:n.bridge&&t?.type===`box`?ae(t):n}function he(e,t){let n=u(t),{board:r}=e.layout;return{x:(e.layout.shelf?e.layout.localHole.x1:r.hingeX)+((`gap`in t?t.gap:void 0)??e.prize.gap)+n.x,y:r.halfY*2+n.y+5e-4,z:e.prize.z}}var ge=.0095,_e=.006,ve=.00225;function ye(e){if(e.plush)return Array.from({length:Math.max(...Object.values(c).map(e=>e.parts.length))},()=>({span:0,links:1}));if(e.tako)return Array.from({length:e.tako.ball.count},()=>({span:0,links:1}));let t=Math.round(e.chain/(e.chainStyle===`ball`?_e:ge)),n=e.chainLinksPerBody,r=[];for(let i=t;i>0;i-=n){let a=Math.min(i,n);r.push({span:e.chain*a/t,links:a})}return r}var be=(e=0,t=0,n=0)=>({x:e,y:t,z:n});function xe(e,t,n=0){let r=Math.cos(e.direction),i=Math.sin(e.direction),o=(t,a)=>be(e.x-n+r*t,a,e.z+i*t),s=(e.mouth+a*2)/2,c=[o(0,t)];if(e.style===`question`){let n=k.height-s-a,r=Math.asin(((e.tip??k.tip)-n)/s);c.push(o(0,t+(n-s)*.5),o(0,t+n-s));let i=-Math.PI/2,l=-2*Math.PI+r;for(let e=1;e<=10;e++){let r=i+(l-i)*e/10;c.push(o(s*Math.cos(r),t+n+s*Math.sin(r)))}return c}let l=e.style===`tall`?.075:.039;e.style===`tall`&&c.push(o(0,t+l*.5));for(let e=0;e<=10;e++){let n=Math.PI*(1-e/10);c.push(o(s*(1+Math.cos(n)),t+l+s*Math.sin(n)))}return c.push(o(s*2,t+l-.013)),c}function Se(e,t){let n=0,r=()=>({x:e[n++],y:e[n++],z:e[n++]}),i=()=>({x:e[n++],y:e[n++],z:e[n++],w:e[n++]}),a=r(),o=r(),s=i(),c=r(),l=i(),u=r(),d=i(),f=[e[n++],e[n++],e[n++]],p=e[n++],m=e[n++],h={x:e[n++],z:e[n++]};return{head:a,ring:o,ringQ:s,board:c,boardQ:l,prize:u,prizeQ:d,chain:Array.from({length:t},()=>({p:r(),q:i()})),arms:f,headYaw:p,shelf:m,sway:h}}var Ce=[`hook`,`ring`,`prize`,`board`,`chute`,`arm`,`ball`],F=class{spec=h;state={phase:`ready`,won:!1,touched:!1,prizeInTray:!1,prizeTravel:0,empty:!1,boardResets:0,motion:{moving:!1,speed:0,vertical:!1},ringSpeed:0,seq:0,sleeping:!1};stats=null;onUpdate=()=>{};onRejected=()=>{};snap=null;history=[];worker;links=ye(h).length;seq=0;machineSeq=0;shots=new Map;demos=new Map;shotId=0;ready;constructor(){this.worker=new Worker(new URL(new URL(`worker-Bah9GkEd.js`,import.meta.url).href,``+import.meta.url),{type:`module`});let e,t;this.ready=new Promise((n,r)=>{e=n,t=r}),this.worker.onerror=e=>{t(Error(e.message||`物理の読み込みに失敗`)),this.onError(e.message||`物理が止まった`)},this.worker.onmessage=n=>{let r=n.data;switch(r.type){case`ready`:e();break;case`error`:t(Error(r.message)),console.error(r.message),this.onError(r.message);break;case`state`:{if(r.state.seq<this.machineSeq)break;this.snap=Se(r.snap,this.links),this.history.push({t:r.t,s:this.snap}),this.history.length>12&&this.history.shift(),this.state=r.state.seq>=this.seq?r.state:{...r.state,phase:this.state.phase,won:this.state.won,prizeInTray:this.state.prizeInTray,empty:this.state.empty,seq:this.state.seq},r.stats&&(this.stats=r.stats);let e=[];for(let t=0;t<r.impacts.length;t+=2)e.push({kind:Ce[r.impacts[t]],force:r.impacts[t+1]});this.onUpdate({phases:r.phases,impacts:e,dropped:r.dropped});break}case`pressed`:r.ok||this.onRejected(r.axis);break;case`shotDone`:this.shots.get(r.id)?.({won:r.won,tray:r.tray}),this.shots.delete(r.id);break;case`demo`:this.demos.get(r.id)?.(r),this.demos.delete(r.id)}}}send(e){this.worker.postMessage(e)}demo(e=5e3){let t=++this.shotId;return new Promise(n=>{this.demos.set(t,n),this.send({type:`demo`,seq:this.seq,id:t,budget:e})})}onError=()=>{};pause(){this.send({type:`pause`,seq:this.seq})}resume(){this.history=[],this.snap&&this.history.push({t:performance.timeOrigin/1e3+performance.now()/1e3,s:this.snap}),this.send({type:`resume`,seq:this.seq})}get phase(){return this.state.phase}get won(){return this.state.won}get prizeInTray(){return this.state.prizeInTray}get empty(){return this.state.empty}press(e,t){this.send({type:`press`,seq:++this.seq,axis:e,at:performance.timeOrigin+t}),this.state={...this.state,phase:e===`x`?`right`:`back`,seq:this.seq,...e===`x`?{touched:!1}:{}}}release(e,t){this.send({type:`release`,seq:++this.seq,axis:e,at:performance.timeOrigin+t});let n=this.state.phase;e===`x`&&n===`right`&&(this.state={...this.state,phase:`aim`,seq:this.seq}),e===`z`&&n===`back`&&(this.state={...this.state,phase:`lower`,seq:this.seq})}rearm(){this.send({type:`rearm`,seq:++this.seq}),this.state.phase===`result`&&(this.state={...this.state,phase:`ready`,seq:this.seq})}setMachine(e,t){this.spec=me(e,t),this.links=ye(this.spec).length,this.snap=null,this.history=[],this.send({type:`machine`,seq:++this.seq,id:e,shape:t}),this.machineSeq=this.seq,this.state={...this.state,phase:`ready`,won:!1,touched:!1,prizeInTray:!1,prizeTravel:0,empty:!1,seq:this.seq}}takePrize(){this.send({type:`take`,seq:++this.seq}),this.state={...this.state,prizeInTray:!1,won:!1,empty:!0,seq:this.seq}}restock(e){this.send({type:`restock`,seq:++this.seq,shape:e}),this.state={...this.state,prizeInTray:!1,won:!1,empty:!1,seq:this.seq}}nudgeToTray(){this.send({type:`nudge`,seq:++this.seq}),this.state.won&&(this.state={...this.state,prizeInTray:!0,seq:this.seq})}shot(e,t,n,r){let i=++this.shotId;return this.send({type:`shot`,seq:++this.seq,id:i,right:e,wait:t,back:n,aim:r}),new Promise(e=>this.shots.set(i,e))}get wonAt(){return this.state.won?1:null}get crane(){return{pos:this.snap?.head??{x:0,y:0,z:0}}}get prize(){let e=this.snap?.prize??{x:0,y:0,z:0};return{translation:()=>e}}get ring(){let e=this.snap?.ring??{x:0,y:0,z:0};return{translation:()=>e}}snapshot(){let e=this.history;if(e.length<2)return this.snap;let t=(performance.timeOrigin+performance.now())/1e3-.025;if(t<=e[0].t)return e[0].s;if(t>=e[e.length-1].t)return e[e.length-1].s;let n=e.length-2;for(;n>0&&e[n].t>t;)n--;let r=e[n],i=e[n+1],a=i.t>r.t?(t-r.t)/(i.t-r.t):1;return Ee(r.s,i.s,a)}},we=(e,t,n)=>({x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n,z:e.z+(t.z-e.z)*n});function Te(e,t,n){let r=e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w<0?-1:1,i={x:e.x+(t.x*r-e.x)*n,y:e.y+(t.y*r-e.y)*n,z:e.z+(t.z*r-e.z)*n,w:e.w+(t.w*r-e.w)*n},a=Math.hypot(i.x,i.y,i.z,i.w)||1;return{x:i.x/a,y:i.y/a,z:i.z/a,w:i.w/a}}function Ee(e,t,n){return{head:we(e.head,t.head,n),ring:we(e.ring,t.ring,n),ringQ:Te(e.ringQ,t.ringQ,n),board:we(e.board,t.board,n),boardQ:Te(e.boardQ,t.boardQ,n),prize:we(e.prize,t.prize,n),prizeQ:Te(e.prizeQ,t.prizeQ,n),chain:e.chain.map((e,r)=>({p:we(e.p,t.chain[r].p,n),q:Te(e.q,t.chain[r].q,n)})),arms:[e.arms[0]+(t.arms[0]-e.arms[0])*n,e.arms[1]+(t.arms[1]-e.arms[1])*n,e.arms[2]+(t.arms[2]-e.arms[2])*n],headYaw:e.headYaw+(t.headYaw-e.headYaw)*n,shelf:e.shelf+(t.shelf-e.shelf)*n,sway:{x:e.sway.x+(t.sway.x-e.sway.x)*n,z:e.sway.z+(t.sway.z-e.sway.z)*n}}}var I=`もちもちアニマル`,De=`おかしコレクション`,L=`ドリンク3本セット`,R=`でかもちフィギュア`,Oe=`幻影紳士録`,ke=`閃光拳伝`,Ae=`鋼筋格闘録`,je=[Oe,ke,Ae],Me=`ふわふわ人形`,Ne=[I,De,L,...je,Me,R],Pe={type:`box`,half:{x:.03,y:.042,z:.03},mass:.11},Fe=(e,t,n,r,i,a,o,s,c=`normal`)=>({id:e,name:t,series:I,category:`figure`,base:n,rarity:c,weight:r,shape:Pe,body:i,accent:a,bg:o,ears:s}),Ie=(e,t,n,r,i,a,o,s,c=`normal`)=>({...Fe(e,t,n,r,i,a,o,s,c),series:R,shape:j,retired:!0}),Le=(e,t,n,r,i,a,o)=>{let s={x:e/200,y:t/200,z:n/200};return{type:`box`,half:s,mass:r/1e3,friction:.25,com:{x:i*s.x,y:a*s.y,z:o*s.z}}},Re=(e,t,n,r,i,a,o,s,c,u=`normal`)=>({id:e,name:t,series:Me,category:`plush`,base:n,rarity:u,weight:r,shape:{type:`plush`,model:a,half:l[a],mass:o,friction:.6},body:s,accent:c,bg:s,plush:i}),ze=(e,t,n,r,i,a,o,s,c,l=`normal`)=>({id:e,name:t,series:n,category:`figure`,base:r,rarity:l,weight:i,shape:a,body:c.skin,accent:s,bg:o,hero:c}),Be={type:`standing`,count:3,radius:.03,height:.17,mass:.45},Ve=(e,t,n,r,i,a,o,s,c,l=`normal`)=>({id:e,name:t,series:L,category:`drink`,base:n,rarity:l,weight:r,shape:Be,body:i,bg:a,accent:o,bottle:s,cloudy:c}),He=(e,t,n,r,i,a,o,s,c,l,u=`normal`)=>({id:e,name:t,series:De,category:`snack`,base:n,rarity:u,weight:r,shape:{type:`box`,half:i,mass:a},body:s,bg:o,accent:s,motif:c,pack:l}),Ue={x:.055,y:.02,z:.04},We={x:.05,y:.022,z:.065},Ge={x:.06,y:.016,z:.032},Ke={x:.045,y:.02,z:.06},qe={x:.05,y:.022,z:.05},Je=[Fe(`neko`,`もちねこ`,600,10,`#f7f1e8`,`#f6a6b2`,`#ffcf7a`,`cat`),Fe(`inu`,`もちいぬ`,600,10,`#e9c39b`,`#9b6a45`,`#8fd3ff`,`dog`),Fe(`usagi`,`もちうさぎ`,650,9,`#fbe9f1`,`#ff9fc4`,`#c9b6ff`,`rabbit`),Fe(`kuma`,`もちくま`,650,9,`#b98a62`,`#f0d2b0`,`#a6e8b8`,`bear`),Fe(`pen`,`もちぺんぎん`,700,8,`#3d4a63`,`#ffb347`,`#9fe6f2`,`none`),Fe(`kaeru`,`もちかえる`,700,8,`#9bdc7c`,`#ff8f8f`,`#fff09a`,`frog`),Fe(`kitsune`,`もちきつね`,720,7,`#f2a14a`,`#fff3e0`,`#ffe1b8`,`fox`),Fe(`panda`,`もちぱんだ`,750,7,`#fbfaf6`,`#2c2a30`,`#b9ecc4`,`panda`),Fe(`hamu`,`もちはむ`,720,7,`#f6d7a8`,`#fff6ea`,`#ffd0d8`,`hamster`),Fe(`hiyoko`,`もちひよこ`,680,8,`#ffe36a`,`#ff9a3d`,`#bfe6ff`,`chick`),Fe(`kin`,`きんのもちねこ`,2800,1.2,`#ffd34d`,`#ff8a3d`,`#3b2a63`,`cat`,`secret`),He(`cookie`,`ほろほろクッキー缶`,450,9,Ue,.22,`#3f6fd8`,`#f3c27a`,`cookie`,`tin`),He(`chips`,`しおポテト（大袋）`,300,10,We,.08,`#ffcf2e`,`#e8432f`,`chips`,`bag`),He(`choco`,`チョコバー5本パック`,380,9,Ge,.16,`#6b3a22`,`#ff4f8b`,`choco`,`bars`),He(`gummy`,`ぷにぷにグミ（大袋）`,350,9,Ke,.12,`#ff6fb5`,`#7fe0ff`,`gummy`,`bag`),He(`biscuit`,`さくさくビスケット`,400,9,Ue,.2,`#e9573f`,`#ffe9b8`,`biscuit`,`carton`),He(`popcorn`,`キャラメルポップコーン（大袋）`,320,9,We,.07,`#d8342c`,`#ffd98a`,`popcorn`,`bag`),He(`ramune`,`しゅわしゅわラムネ（大袋）`,330,9,Ke,.1,`#2fb7c9`,`#fff27a`,`ramune`,`bag`),He(`candy`,`フルーツキャンディ缶`,480,8,qe,.24,`#8a5ad6`,`#ffe36a`,`candy`,`tin`),He(`goldchoco`,`きんのチョコ缶`,1800,1.2,qe,.25,`#2a1a40`,`#ffd34d`,`choco`,`tin`,`secret`),Ve(`soda`,`しゅわっとソーダ`,520,8,`#6fd6ff`,`#22b6e8`,`#ffffff`,`soda`,.3),Ve(`tea`,`すっきり緑茶`,500,8,`#b4c93c`,`#2f8a46`,`#f4f0d8`,`tea`,.55),Ve(`sports`,`ぐんぐんスポーツ`,540,7,`#bfe0ff`,`#1f5bd6`,`#ffffff`,`sports`,.5),Ve(`orange`,`つぶつぶオレンジ`,530,7,`#ffa62b`,`#f47a12`,`#fff3c9`,`soda`,.95),Ve(`grape`,`ぶどうスカッシュ`,530,7,`#7b3fb8`,`#5a2a96`,`#f1e2ff`,`soda`,.7),Ve(`milktea`,`まろやかミルクティー`,560,6,`#d9b48a`,`#8a5a3a`,`#fff1dd`,`tea`,1),Ve(`water`,`おいしい天然水`,420,8,`#cfeaff`,`#3a8fd8`,`#ffffff`,`water`,.1),Ve(`goldsoda`,`きんいろサイダー`,2200,1.2,`#ffe07a`,`#c8941b`,`#fff6d0`,`soda`,.4,`secret`),Ie(`big-neko`,`でかもちねこ`,950,10,`#f7f1e8`,`#f6a6b2`,`#ff9fb8`,`cat`),Ie(`big-inu`,`でかもちいぬ`,950,10,`#e9c39b`,`#9b6a45`,`#6fc3ff`,`dog`),Ie(`big-usagi`,`でかもちうさぎ`,1e3,9,`#fbe9f1`,`#ff9fc4`,`#b39cff`,`rabbit`),Ie(`big-kuma`,`でかもちくま`,1e3,9,`#b98a62`,`#f0d2b0`,`#7fdc9a`,`bear`),Ie(`big-pen`,`でかもちぺんぎん`,1050,8,`#3d4a63`,`#ffb347`,`#7fdcea`,`none`),Ie(`big-panda`,`でかもちぱんだ`,1100,7,`#fbfaf6`,`#2c2a30`,`#9be0a8`,`panda`),Ie(`big-kitsune`,`でかもちきつね`,1100,7,`#f2a14a`,`#fff3e0`,`#ffc98a`,`fox`),Ie(`big-hiyoko`,`でかもちひよこ`,1050,8,`#ffe36a`,`#ff9a3d`,`#9fd6ff`,`chick`),Ie(`big-kin`,`きんのでかもちねこ`,4200,1.2,`#ffd34d`,`#ff8a3d`,`#2a1f55`,`cat`,`secret`),ze(`gen-jean`,`月鏡のリュネ`,Oe,1100,9,Le(12.5,25,9.5,270,0,-.25,-.1),`#3c6777`,`#a5efcd`,{line:`pose`,pose:`stance`,skin:`#c79c77`,hair:`#1e293a`,hairStyle:`long`,top:`#ece3c8`,bottom:`#483343`,trim:`#43988b`}),ze(`gen-leo`,`秒針のヴェスパ`,Oe,950,10,Le(12,18,9,220,.2,-.25,0),`#874156`,`#ffc475`,{line:`pose`,pose:`kneel`,skin:`#8d5239`,hair:`#58312f`,hairStyle:`short`,top:`#168368`,bottom:`#282b3e`,trim:`#efb056`}),ze(`gen-luca`,`琥珀のノクス`,Oe,1200,8,Le(15,20,10,290,0,.15,-.15),`#89623b`,`#efd193`,{line:`pose`,pose:`cape`,skin:`#e7bb9a`,hair:`#80777f`,hairStyle:`short`,top:`#5d375b`,bottom:`#312e3c`,trim:`#e1cca3`,cape:`#242332`}),ze(`sen-kai`,`潮輪のナギ`,ke,1150,9,Le(15,20,10,300,0,-.3,0),`#176d88`,`#85efdf`,{line:`aura`,pose:`charge`,skin:`#c69773`,hair:`#225e5e`,hairStyle:`short`,top:`#30424c`,bottom:`#253039`,trim:`#c58c52`,aura:`#7aebed`}),ze(`sen-jin`,`砂電のトキ`,ke,1250,8,Le(13,23,10,260,.1,.2,.1),`#8f3d57`,`#ffc877`,{line:`aura`,pose:`kick`,skin:`#bc8b68`,hair:`#c0babc`,hairStyle:`long`,top:`#cc8a36`,bottom:`#37303e`,trim:`#963d33`,aura:`#ff7b71`}),ze(`sen-gou`,`霧灯のリンカ`,ke,1500,6,Le(16,25,12,390,0,.28,0),`#4d6197`,`#bbd5fb`,{line:`aura`,pose:`lift`,skin:`#ddb895`,hair:`#633e39`,hairStyle:`short`,top:`#7197b5`,bottom:`#314257`,trim:`#d5d8e1`,aura:`#bfdafd`}),ze(`kou-tetsu`,`岩戸のガク`,Ae,1600,6,Le(16.5,22,10.5,490,0,-.05,0),`#563a47`,`#f5bd82`,{line:`muscle`,pose:`flex`,skin:`#cfa081`,hair:`#494746`,hairStyle:`short`,top:`#a85e3e`,bottom:`#a85e3e`,trim:`#403736`}),ze(`kou-taiga`,`風切のイサナ`,Ae,1e3,10,Le(12,18,9,240,-.25,-.2,0),`#225e62`,`#bedce3`,{line:`muscle`,pose:`guard`,skin:`#d8a584`,hair:`#312a30`,hairStyle:`long`,top:`#28838c`,bottom:`#e3d8c6`,trim:`#afa18b`}),ze(`kou-gen`,`黒縄のトウマ`,Ae,1550,6,Le(16,25,12,420,0,-.3,.2),`#705347`,`#e9b08c`,{line:`muscle`,pose:`smash`,skin:`#845439`,hair:`#2a2325`,hairStyle:`short`,top:`#263e59`,bottom:`#303146`,trim:`#b76244`}),ze(`kou-kin`,`岩戸のガク（黄金像）`,Ae,4800,1.2,Le(16.5,22,10.5,520,0,0,0),`#2a1f55`,`#ffd34d`,{line:`muscle`,pose:`flex`,skin:`#f0c040`,hair:`#fff1a8`,hairStyle:`short`,top:`#f0c040`,bottom:`#b8860b`,trim:`#fff1a8`},`secret`),Re(`plush-frog`,`マントがえる`,700,10,`frog`,`frog`,.108,`#5c7a2c`,`#f1efe6`),Re(`plush-cat`,`めがねねこ`,800,9,`cat`,`cat`,.13,`#d9b48a`,`#8c6239`),Re(`plush-mask`,`覆面めがねねこ`,1500,3,`mask`,`cat`,.135,`#d8262b`,`#1f3fae`,`secret`)],Ye=e=>Je.find(t=>t.id===e)??Je[0],Xe={standard:Je.filter(e=>e.series===I).map(e=>e.id),slant:Je.filter(e=>e.category===`snack`).map(e=>e.id),triple:Je.filter(e=>e.category===`drink`).map(e=>e.id),bridge:Je.filter(e=>e.hero).map(e=>e.id),takoyaki:Je.filter(e=>e.hero).map(e=>e.id),plush2:Je.filter(e=>e.category===`plush`).map(e=>e.id),plush3:Je.filter(e=>e.category===`plush`).map(e=>e.id)};function Ze(e,t=Xe.standard){let n=Je.filter(e=>t.includes(e.id)),r=e*n.reduce((e,t)=>e+t.weight,0);for(let e of n)if(r-=e.weight,r<0)return e;return n[n.length-1]}function Qe(e,t){let n=2166136261;for(let r of`${e}:${t}`)n^=r.charCodeAt(0),n=Math.imul(n,16777619);return .7+(n>>>0)%1e4/1e4*.7}function $e(e,t){return Math.round(e.base*Qe(t,e.id)/10)*10}function et(e,t,n,r,i){e.save(),e.translate(n,r),e.scale(i,i),e.lineWidth=4,e.strokeStyle=`#3a2a2a`,e.lineJoin=`round`;let a=t=>{e.fillStyle=t,e.fill(),e.stroke()};switch(e.beginPath(),t.ears){case`cat`:e.moveTo(-62,-30),e.lineTo(-48,-88),e.lineTo(-14,-56),e.closePath(),e.moveTo(62,-30),e.lineTo(48,-88),e.lineTo(14,-56),e.closePath(),a(t.body);break;case`dog`:e.ellipse(-66,-14,20,40,.35,0,Math.PI*2),e.moveTo(86,-14),e.ellipse(66,-14,20,40,-.35,0,Math.PI*2),a(t.accent);break;case`rabbit`:e.ellipse(-26,-96,15,48,-.12,0,Math.PI*2),e.moveTo(41,-96),e.ellipse(26,-96,15,48,.12,0,Math.PI*2),a(t.body);break;case`bear`:e.arc(-50,-52,20,0,Math.PI*2),e.moveTo(70,-52),e.arc(50,-52,20,0,Math.PI*2),a(t.body);break;case`frog`:e.arc(-34,-58,24,0,Math.PI*2),e.moveTo(58,-58),e.arc(34,-58,24,0,Math.PI*2),a(t.body);break;case`fox`:e.moveTo(-68,-26),e.lineTo(-56,-100),e.lineTo(-12,-58),e.closePath(),e.moveTo(68,-26),e.lineTo(56,-100),e.lineTo(12,-58),e.closePath(),a(t.body),e.beginPath(),e.moveTo(-56,-44),e.lineTo(-51,-80),e.lineTo(-30,-58),e.closePath(),e.moveTo(56,-44),e.lineTo(51,-80),e.lineTo(30,-58),e.closePath(),e.fillStyle=`#5a3524`,e.fill();break;case`panda`:e.arc(-52,-54,22,0,Math.PI*2),e.moveTo(74,-54),e.arc(52,-54,22,0,Math.PI*2),a(t.accent);break;case`hamster`:e.arc(-46,-56,17,0,Math.PI*2),e.moveTo(63,-56),e.arc(46,-56,17,0,Math.PI*2),a(t.body);break;case`chick`:e.moveTo(-8,-62),e.quadraticCurveTo(-16,-92,0,-84),e.quadraticCurveTo(4,-100,14,-82),e.quadraticCurveTo(22,-80,10,-62),e.closePath(),a(t.body)}if(e.beginPath(),e.moveTo(-78,40),e.bezierCurveTo(-86,-40,-40,-66,0,-66),e.bezierCurveTo(40,-66,86,-40,78,40),e.bezierCurveTo(70,62,-70,62,-78,40),a(t.body),t.ears===`none`&&(e.beginPath(),e.ellipse(0,10,50,44,0,0,Math.PI*2),e.fillStyle=`#ffffff`,e.fill()),(t.ears===`fox`||t.ears===`hamster`)&&(e.beginPath(),e.ellipse(0,26,t.ears===`fox`?40:46,28,0,0,Math.PI*2),e.fillStyle=t.accent,e.fill()),t.ears===`panda`){e.fillStyle=t.accent;for(let t of[-1,1])e.beginPath(),e.ellipse(t*27,-6,15,19,t*.35,0,Math.PI*2),e.fill()}if(t.ears===`chick`){e.fillStyle=z(t.body,-.12);for(let t of[-1,1])e.beginPath(),e.ellipse(t*70,14,12,22,t*.3,0,Math.PI*2),e.fill()}if(t.ears===`frog`){e.fillStyle=`#fff`;for(let t of[-34,34])e.beginPath(),e.arc(t,-58,13,0,Math.PI*2),e.fill()}e.fillStyle=`#2a1f1f`;let o=t.ears===`frog`?-58:-8;for(let n of t.ears===`frog`?[-34,34]:[-26,26])e.fillStyle=t.ears===`panda`?`#ffffff`:`#2a1f1f`,e.beginPath(),e.arc(n,o,t.ears===`panda`?6:7,0,Math.PI*2),e.fill(),t.ears===`panda`&&(e.fillStyle=`#2a1f1f`,e.beginPath(),e.arc(n,o,3.6,0,Math.PI*2),e.fill()),e.fillStyle=`#fff`,e.beginPath(),e.arc(n+2.5,o-2.5,2.4,0,Math.PI*2),e.fill(),e.fillStyle=`#2a1f1f`;e.globalAlpha=.75,e.fillStyle=t.ears===`panda`||t.ears===`fox`||t.ears===`hamster`?`#ff9fb0`:t.accent;for(let t of[-44,44])e.beginPath(),e.ellipse(t,14,12,7,0,0,Math.PI*2),e.fill();if(e.globalAlpha=1,e.beginPath(),t.ears===`none`||t.ears===`chick`?(e.moveTo(-9,6),e.lineTo(9,6),e.lineTo(0,16),e.closePath(),e.fillStyle=t.accent,e.fill()):(e.moveTo(-10,8),e.quadraticCurveTo(-5,15,0,9),e.quadraticCurveTo(5,15,10,8),e.lineWidth=3,e.stroke()),t.rarity===`secret`){e.fillStyle=`#fff6b0`;for(let[t,n,r]of[[-70,-70,9],[76,-54,7],[60,52,6]]){e.beginPath();for(let i=0;i<8;i++){let a=i*Math.PI/4,o=i%2?r*.35:r;e.lineTo(t+Math.cos(a)*o,n+Math.sin(a)*o)}e.closePath(),e.fill()}}e.restore()}function tt(e,t=256,n=360){let r=document.createElement(`canvas`);r.width=t,r.height=n;let i=r.getContext(`2d`),a=i.createLinearGradient(0,0,0,n);a.addColorStop(0,e.bg),a.addColorStop(1,z(e.bg,-.22)),i.fillStyle=a,i.fillRect(0,0,t,n),i.save(),i.translate(t/2,n*.52),i.globalAlpha=.16,i.fillStyle=`#ffffff`;for(let e=0;e<16;e++)i.rotate(Math.PI/8),i.beginPath(),i.moveTo(0,0),i.lineTo(-18,-n),i.lineTo(18,-n),i.closePath(),i.fill();return i.restore(),i.fillStyle=`rgba(255,255,255,0.28)`,nt(i,t*.1,n*.2,t*.8,n*.6,22),i.fill(),et(i,e,t/2,n*.53,t/300),i.fillStyle=e.rarity===`secret`?`#ffe680`:`#ffffff`,i.strokeStyle=`rgba(40,20,30,0.85)`,i.lineWidth=6,i.font=`900 ${Math.round(t*.11)}px "Hiragino Maru Gothic ProN","Hiragino Sans",sans-serif`,i.textAlign=`center`,i.strokeText(e.series,t/2,n*.13),i.fillText(e.series,t/2,n*.13),i.font=`800 ${Math.round(t*.085)}px "Hiragino Maru Gothic ProN","Hiragino Sans",sans-serif`,i.strokeText(e.name,t/2,n*.92),i.fillText(e.name,t/2,n*.92),r}function nt(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function z(e,t){let n=parseInt(e.slice(1),16),r=e=>Math.max(0,Math.min(255,Math.round(e+(t<0?e:255-e)*t))),i=r(n>>16),a=r(n>>8&255),o=r(n&255);return`#${(i<<16|a<<8|o).toString(16).padStart(6,`0`)}`}var rt=`"Hiragino Maru Gothic ProN","Hiragino Sans",sans-serif`;function it(e,t,n,r,i){switch(e.save(),e.translate(n,r),e.scale(i,i),e.lineWidth=4,e.strokeStyle=`#3a2418`,t.motif){case`cookie`:for(let[t,n,r]of[[-40,10,46],[44,-6,40],[6,-48,34]]){e.fillStyle=`#e9b46a`,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=`#5a3020`;for(let i=0;i<6;i++){let a=i*1.1+t;e.beginPath(),e.arc(t+Math.cos(a)*r*.5,n+Math.sin(a)*r*.5,r*.11,0,Math.PI*2),e.fill()}}break;case`chips`:for(let[t,n,r]of[[-36,6,-.4],[30,-10,.5],[0,34,.1],[-6,-40,-.2]]){e.save(),e.translate(t,n),e.rotate(r),e.fillStyle=`#ffd86b`,e.beginPath(),e.ellipse(0,0,44,30,0,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle=`rgba(160,90,20,0.6)`,e.lineWidth=3;for(let t=-1;t<=1;t++)e.beginPath(),e.moveTo(-30,t*10),e.quadraticCurveTo(0,t*10-8,30,t*10),e.stroke();e.restore()}break;case`choco`:for(let n=0;n<3;n++){e.save(),e.translate(-50+n*50,0),e.rotate(-.2+n*.2),e.fillStyle=t.rarity===`secret`?`#e8b730`:`#5b2f1c`,e.fillRect(-18,-60,36,120),e.strokeRect(-18,-60,36,120),e.strokeStyle=`rgba(0,0,0,0.3)`;for(let t=-2;t<=2;t++)e.beginPath(),e.moveTo(-18,t*24),e.lineTo(18,t*24),e.stroke();e.restore()}break;case`biscuit`:for(let[t,n,r]of[[-44,12,-.25],[40,-4,.2],[0,-44,.05]]){e.save(),e.translate(t,n),e.rotate(r),e.fillStyle=`#eec27a`,nt(e,-38,-28,76,56,10),e.fill(),e.stroke(),e.fillStyle=`rgba(150,90,30,0.55)`;for(let t=-2;t<=2;t++)for(let n=-1;n<=1;n++)e.beginPath(),e.arc(t*14,n*15,2.6,0,Math.PI*2),e.fill();e.restore()}break;case`popcorn`:for(let[t,n,r]of[[-46,18,30],[38,10,32],[-4,-34,34],[-52,-32,22],[50,-42,22],[4,44,24]]){e.fillStyle=`#fff3cf`,e.beginPath();for(let i=0;i<5;i++){let a=i*1.256+t*.1;e.moveTo(t+Math.cos(a)*r*.45+r*.5,n+Math.sin(a)*r*.45),e.arc(t+Math.cos(a)*r*.45,n+Math.sin(a)*r*.45,r*.5,0,Math.PI*2)}e.fill(),e.stroke(),e.fillStyle=`#fff3cf`,e.beginPath(),e.arc(t,n,r*.62,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(200,120,30,0.7)`,e.beginPath(),e.ellipse(t+r*.1,n+r*.15,r*.34,r*.22,.4,0,Math.PI*2),e.fill()}break;case`ramune`:[`#ffffff`,`#ffd0e0`,`#d6f3ff`,`#fff3a8`,`#d9ffd0`].forEach((t,n)=>{let r=-64+n*32,i=n%2*34-17;e.fillStyle=t,e.beginPath(),e.ellipse(r,i,19,19,0,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle=`rgba(60,40,30,0.25)`,e.lineWidth=2,e.beginPath(),e.ellipse(r,i,11,11,0,0,Math.PI*2),e.stroke(),e.strokeStyle=`#3a2418`,e.lineWidth=4});break;case`candy`:[`#ff5a6e`,`#ffb02e`,`#7fdc6a`,`#6fb8ff`,`#d07bff`].forEach((t,n)=>{let r=n*1.256-1.57,i=Math.cos(r)*46,a=Math.sin(r)*40;e.save(),e.translate(i,a),e.rotate(r+.6),e.fillStyle=t,e.beginPath(),e.moveTo(-34,-12),e.lineTo(-18,0),e.lineTo(-34,12),e.closePath(),e.fill(),e.stroke(),e.beginPath(),e.moveTo(34,-12),e.lineTo(18,0),e.lineTo(34,12),e.closePath(),e.fill(),e.stroke(),e.beginPath(),e.ellipse(0,0,20,16,0,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=`rgba(255,255,255,0.6)`,e.beginPath(),e.ellipse(-6,-6,6,3.5,-.5,0,Math.PI*2),e.fill(),e.restore()});break;case`gummy`:[`#ff5a6e`,`#ffd23f`,`#6fe08a`,`#7fd0ff`,`#c58bff`].forEach((t,n)=>{let r=-60+n*30,i=n%2*30-15;e.fillStyle=t,e.globalAlpha=.92,e.beginPath(),e.arc(r,i-16,11,0,Math.PI*2),e.arc(r,i+6,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(r-9,i-26,5,0,Math.PI*2),e.arc(r+9,i-26,5,0,Math.PI*2),e.fill()}),e.globalAlpha=1}e.restore()}function at(e,t=320,n=400){let r=document.createElement(`canvas`);r.width=t,r.height=n;let i=r.getContext(`2d`),a=i.createLinearGradient(0,0,t,n);a.addColorStop(0,z(e.bg,.15)),a.addColorStop(1,z(e.bg,-.2)),i.fillStyle=a,i.fillRect(0,0,t,n),i.save(),i.translate(t/2,n/2),i.rotate(-.35),i.fillStyle=`rgba(255,255,255,0.18)`,i.fillRect(-t,-40,t*2,80),i.restore(),i.fillStyle=`rgba(255,255,255,0.12)`;for(let e=10;e<n;e+=28)for(let n=e/28%2*14;n<t;n+=28)i.beginPath(),i.arc(n,e,5,0,Math.PI*2),i.fill();it(i,e,t/2,n*.55,t/300);let[o,s]=e.name.includes(`（`)?[e.name.split(`（`)[0],`（`+e.name.split(`（`)[1]]:[e.name,``];return i.textAlign=`center`,i.lineJoin=`round`,i.font=`900 ${Math.round(t*.12)}px ${rt}`,i.lineWidth=10,i.strokeStyle=`#2a1a12`,i.strokeText(o,t/2,n*.17),i.fillStyle=e.rarity===`secret`?`#ffe680`:`#ffffff`,i.fillText(o,t/2,n*.17),s&&(i.font=`800 ${Math.round(t*.07)}px ${rt}`,i.lineWidth=6,i.strokeText(s,t/2,n*.26),i.fillText(s,t/2,n*.26)),i.font=`800 ${Math.round(t*.06)}px ${rt}`,i.fillStyle=`rgba(255,255,255,0.85)`,i.fillText(De,t/2,n*.94),r}function ot(e,t=512,n=128){let r=document.createElement(`canvas`);r.width=t,r.height=n;let i=r.getContext(`2d`);i.fillStyle=e.accent,i.fillRect(0,0,t,n),i.fillStyle=e.bg,i.fillRect(0,n*.18,t,n*.64),i.fillStyle=`rgba(255,255,255,0.25)`;for(let e=0;e<t;e+=40)i.beginPath(),i.arc(e+20,n*.5,9,0,Math.PI*2),i.fill();i.font=`900 ${Math.round(n*.34)}px ${rt}`,i.textAlign=`center`,i.fillStyle=e.rarity===`secret`?`#fff3b0`:`#ffffff`,i.strokeStyle=`rgba(0,0,0,0.35)`,i.lineWidth=5;for(let r of[t*.25,t*.75])i.strokeText(e.name,r,n*.62),i.fillText(e.name,r,n*.62);return r}function st(e,t,n){let r=document.createElement(`canvas`);r.width=t,r.height=n;let i=r.getContext(`2d`),a=i.createLinearGradient(0,0,0,n);a.addColorStop(0,`#2b2050`),a.addColorStop(1,`#151030`),i.fillStyle=a,i.fillRect(0,0,t,n);let o=ot(e,256,64),s=t*.24,c=n*.62;for(let r=0;r<3;r++){let a=t*.5+(r-1)*s*1.05-s/2,l=n*.2;i.fillStyle=e.body,i.globalAlpha=.9,nt(i,a,l+c*.12,s,c*.88,s*.3),i.fill(),i.fillRect(a+s*.3,l+c*.02,s*.4,c*.14),i.globalAlpha=1,i.fillStyle=e.accent,nt(i,a+s*.28,l-c*.04,s*.44,c*.08,4),i.fill(),i.drawImage(o,0,0,128,64,a,l+c*.42,s,c*.26),i.fillStyle=`rgba(255,255,255,0.35)`,i.fillRect(a+s*.15,l+c*.2,s*.08,c*.65)}return i.textAlign=`center`,i.font=`900 ${Math.round(t*.085)}px ${rt}`,i.fillStyle=e.rarity===`secret`?`#ffe680`:`#ffffff`,i.fillText(e.name,t/2,n*.93),i.font=`800 ${Math.round(t*.06)}px ${rt}`,i.fillStyle=`rgba(255,255,255,0.75)`,i.fillText(L,t/2,n*.11),r}function ct(e,t,n){let r=document.createElement(`canvas`);r.width=t,r.height=n;let i=r.getContext(`2d`);i.fillStyle=e.bg,i.fillRect(0,0,t,n),i.fillStyle=`rgba(255,255,255,0.18)`;for(let e=0;e<12;e++)i.beginPath(),i.arc(e*53%t,e*97%n,t*.06,0,Math.PI*2),i.fill();let a=t/2,o=n*.42,s=t*.28;i.fillStyle=e.plush===`frog`?`#5c7a2c`:`#d9b48a`,i.beginPath(),i.arc(a,o,s,0,Math.PI*2),i.fill(),i.lineWidth=t*.02,i.strokeStyle=`#2a1d12`,i.stroke(),e.plush===`mask`&&(i.fillStyle=`#d8262b`,i.beginPath(),i.arc(a,o,s*.96,Math.PI,0),i.fill()),i.fillStyle=`#2a1d12`;for(let e of[-1,1])i.beginPath(),i.arc(a+e*s*.38,o-s*.05,s*.09,0,Math.PI*2),i.fill();if(e.plush!==`frog`){i.lineWidth=t*.015;for(let e of[-1,1])i.beginPath(),i.arc(a+e*s*.38,o-s*.05,s*.24,0,Math.PI*2),i.stroke()}return i.font=`900 ${Math.round(t*.11)}px ${rt}`,i.textAlign=`center`,i.fillStyle=`#ffffff`,i.fillText(e.name,a,n*.86,t*.9),r}var lt=null,ut=e=>{lt=e};function dt(e,t=200,n=280){return e.hero&&lt?lt(e,t,n):e.category===`snack`?at(e,t,n):e.category===`drink`?st(e,t,n):e.category===`plush`?ct(e,t,n):tt(e,t,n)}var ft=3e3,pt={price:500,plays:6},mt=1e3,ht=(e=new Date)=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`;function gt(){return{money:ft,credits:0,plays:0,wins:0,spent:0,earned:0,nextUid:1,shelf:[],everGot:[],lastAllowance:null}}var _t=class{state;store;constructor(e=null){this.store=e,this.state=gt();try{let t=e?.get();if(t){let e=JSON.parse(t),n=gt();this.state={...n,...e,shelf:Array.isArray(e.shelf)?e.shelf.filter(e=>e&&Je.some(t=>t.id===e.kind)):[],everGot:Array.isArray(e.everGot)?e.everGot:[]},(!Number.isFinite(this.state.money)||this.state.money<0)&&(this.state.money=n.money),(!Number.isFinite(this.state.credits)||this.state.credits<0)&&(this.state.credits=0);let r=this.state.shelf.reduce((e,t)=>Math.max(e,Number.isFinite(t.uid)?t.uid:0),0);(!Number.isFinite(this.state.nextUid)||this.state.nextUid<=r)&&(this.state.nextUid=r+1)}}catch{this.state=gt()}}save(){try{this.store?.set(JSON.stringify(this.state))}catch{}}insert(e){let t=e?pt.price:100;return this.state.money<t?!1:(this.state.money-=t,this.state.spent+=t,this.state.credits+=e?pt.plays:1,this.save(),!0)}startPlay(){return this.state.credits<1?!1:(--this.state.credits,this.state.plays+=1,this.save(),!0)}refundPlay(){this.state.credits+=1,this.state.plays=Math.max(0,this.state.plays-1),this.save()}addPrize(e,t=ht()){let n={uid:this.state.nextUid++,kind:e,gotAt:t};return this.state.shelf.push(n),this.state.wins+=1,this.state.everGot.includes(e)||this.state.everGot.push(e),this.save(),n}priceOf(e,t=ht()){let n=this.state.shelf.find(t=>t.uid===e);return n?$e(Ye(n.kind),t):0}sell(e,t=ht()){let n=this.state.shelf.findIndex(t=>t.uid===e);if(n<0)return 0;let r=$e(Ye(this.state.shelf[n].kind),t);return this.state.shelf.splice(n,1),this.state.money+=r,this.state.earned+=r,this.save(),r}get broke(){return this.state.money<100&&this.state.credits<1}canAllowance(e=ht()){return this.broke&&this.state.shelf.length===0&&this.state.lastAllowance!==e}nextAllowanceAt(e=new Date){return this.state.lastAllowance===ht(e)?new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,0,0):e}takeAllowance(e=ht()){return this.canAllowance(e)?(this.state.money+=mt,this.state.lastAllowance=e,this.save(),!0):!1}devGrant(e){this.state.money+=e,this.save()}isNew(e){return!this.state.everGot.includes(e)}countOf(e){return this.state.shelf.filter(t=>t.kind===e).length}groups(){let e=new Map;for(let t of this.state.shelf){let n=e.get(t.kind);n?n.push(t.uid):e.set(t.kind,[t.uid])}return[...e].map(([e,t])=>({kind:e,uids:t.sort((e,t)=>e-t)})).sort((e,t)=>t.uids[t.uids.length-1]-e.uids[e.uids.length-1])}bookProgress(){let e=Je.filter(e=>this.state.everGot.includes(e.id));return{got:e.length,total:Je.filter(e=>!e.retired).length+e.filter(e=>e.retired).length}}seriesProgress(e=I){let t=Je.filter(t=>t.series===e),n=t.filter(e=>this.state.everGot.includes(e.id));return{got:n.length,total:t.filter(e=>!e.retired).length+n.filter(e=>e.retired).length}}};function vt(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function yt(e,t,n){let r=Math.round(e.sampleRate*t),i=e.createBuffer(2,r,e.sampleRate),a=vt(99);for(let e=0;e<2;e++){let t=i.getChannelData(e);for(let e=0;e<r;e++)t[e]=(a()*2-1)*(1-e/r)**n}let o=e.createConvolver();return o.buffer=i,o}var bt=[0,2,4,7,9],xt=(e,t)=>e*2**((bt[(t%5+5)%5]+12*Math.floor(t/5))/12),St=class{ctx;dry;wet;far;noise;r;machines;nextEvent=2;scheduledTo=0;timer=0;constructor(e,t,n,r=7){this.ctx=e,this.noise=n,this.r=vt(r),this.far=e.createBiquadFilter(),this.far.type=`lowpass`,this.far.frequency.value=2200,this.dry=e.createGain(),this.dry.gain.value=.55,this.wet=e.createGain(),this.wet.gain.value=.9;let i=yt(e,2.2,2.6);this.far.connect(this.dry).connect(t),this.far.connect(i).connect(this.wet).connect(t);let a=e.createBuffer(1,e.sampleRate*4,e.sampleRate),o=a.getChannelData(0),s=0,c=vt(3);for(let e=0;e<o.length;e++)s=(s+.02*(c()*2-1))/1.02,o[e]=s*3.5;let l=e.createBufferSource();l.buffer=a,l.loop=!0;let u=e.createBiquadFilter();u.type=`lowpass`,u.frequency.value=220;let d=e.createGain();d.gain.value=.05,l.connect(u).connect(d).connect(t),l.start(),this.machines=[this.newMachine(-.7,118,261.6,`square`,.5),this.newMachine(.65,132,293.7,`triangle`,3.5)]}newMachine(e,t,n,r,i){let a={pan:e,tempo:t,root:n,wave:r,next:i,bar:0,song:[],bass:[],until:0};return this.newSong(a),a}newSong(e){let t=this.r,n=5+Math.floor(t()*3);e.song=Array.from({length:32},(e,r)=>r%8==7&&t()<.5?-99:(n+=Math.floor(t()*5)-2,n=Math.max(3,Math.min(11,n)),n)),e.bass=Array.from({length:4},()=>[0,3,4,2][Math.floor(t()*4)]),e.bar=0,e.until=12+Math.floor(t()*12)}tone(e,t,n,r,i,a,o=this.far){let s=this.ctx,c=s.createOscillator();c.type=i,c.frequency.value=e;let l=s.createGain();l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(r,t+.01),l.gain.exponentialRampToValueAtTime(1e-4,t+n);let u=s.createStereoPanner();u.pan.value=a,c.connect(l).connect(u).connect(o),c.start(t),c.stop(t+n+.02)}burst(e,t,n,r,i,a){let o=this.ctx,s=o.createBufferSource();s.buffer=this.noise;let c=o.createBiquadFilter();c.type=`bandpass`,c.frequency.value=r,c.Q.value=i;let l=o.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(n,e+.005),l.gain.exponentialRampToValueAtTime(1e-4,e+t);let u=o.createStereoPanner();u.pan.value=a,s.connect(c).connect(l).connect(u).connect(this.far),s.start(e,this.r()*1.5),s.stop(e+t+.02)}event(e){let t=this.r,n=t()*1.8-.9,r=t();if(r<.35)this.tone(2300+t()*300,e,.12,.05,`sine`,n),this.tone(3600,e+.004,.08,.025,`sine`,n),this.burst(e+.1,.06,.05,900,3,n),this.tone(1318,e+.3,.12,.03,`triangle`,n);else if(r<.6){let r=[523,587,659][Math.floor(t()*3)];[0,4,7,12,16].forEach((t,i)=>this.tone(r*2**(t/12),e+i*.09,.2,.035,`square`,n))}else if(r<.85){let t=this.ctx,r=t.createOscillator();r.type=`triangle`,r.frequency.setValueAtTime(70,e),r.frequency.linearRampToValueAtTime(95,e+.3),r.frequency.linearRampToValueAtTime(70,e+1.4);let i=t.createGain();i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(.06,e+.2),i.gain.exponentialRampToValueAtTime(1e-4,e+1.5);let a=t.createStereoPanner();a.pan.value=n,r.connect(i).connect(a).connect(this.far),r.start(e),r.stop(e+1.6)}else for(let t=0;t<3;t++)this.burst(e+t*.18,.03,.05,1600,1.5,n)}scheduleTo(e){for(let t of this.machines){let n=60/t.tempo/2;for(;t.next<e;){let e=t.bar%4;if(t.bar>=t.until){t.next+=2+this.r()*4,this.newSong(t);continue}let r=t.next;for(let i=0;i<8;i++){let a=t.song[e*8+i];a>-90&&this.tone(xt(t.root,a),r+i*n,n*.9,.03,t.wave,t.pan)}this.tone(xt(t.root/2,t.bass[e]),r,n*7,.035,`triangle`,t.pan),t.next+=n*8,t.bar++}}for(;this.nextEvent<e;)this.event(this.nextEvent),this.nextEvent+=2.5+this.r()*6;this.scheduledTo=e}start(){let e=()=>this.scheduleTo(this.ctx.currentTime+1.5);e(),this.timer=window.setInterval(e,500)}stop(){clearInterval(this.timer)}get scheduled(){return this.scheduledTo}},Ct={metalLight0:[0,.2055],metalLight1:[.2355,.1565],metalLight2:[.422,.1421],metalLight3:[.5942,.2733],metalLight4:[.8975,.1336],metalMid0:[1.0611,.158],metalMid1:[1.2491,.1493],metalHeavy0:[1.4284,.1845],wood0:[1.6428,.1609],wood1:[1.8337,.199],wood2:[2.0627,.0915],plank0:[2.1842,.1774],plank1:[2.3916,.2024],soft0:[2.6241,.3909],soft1:[3.045,.4363],softLight0:[3.5112,.1804],tin0:[3.7217,.1558],tin1:[3.9075,.1072],tin2:[4.0446,.1247],generic0:[4.1993,.1001],generic1:[4.3294,.1375],switch0:[4.4969,.1517],switch1:[4.6785,.1523],coins0:[4.8608,.7107],coins1:[5.6015,.2964],metalClick:[5.9279,.3583],latch:[6.3162,.171],belt0:[6.5172,.2149],belt1:[6.7621,.3209]},wt={mech:.12,hit:.75,jingle:.6,amb:.5},Tt=class{ctx=null;master;bus;noise;motor=null;last=new Map;ambience=null;sfx=null;enabled=!0;volume=.85;levels={...wt};unlock(e){try{this.open(e)}catch(e){this.failed||console.warn(`音を用意できなかった（音なしで続ける）`,e),this.failed=!0,this.ctx=null}}failed=!1;open(e){if(this.failed)return;if(this.ctx){this.ctx instanceof AudioContext&&this.ctx.state!==`running`&&!document.hidden&&this.ctx.resume().catch(()=>{});return}let t=e??null;if(!t){let e=window.AudioContext??window.webkitAudioContext;if(!e)return;t=new e}this.ctx=t;let n=t.createDynamicsCompressor();n.threshold.value=-18,n.knee.value=12,n.ratio.value=3,n.connect(t.destination),this.master=t.createGain(),this.master.gain.value=this.enabled?this.volume:0,this.master.connect(n);let r=t.createBiquadFilter();r.type=`lowpass`,r.frequency.value=2600,r.Q.value=.5,r.connect(this.master);let i=e=>{let n=t.createGain();return n.gain.value=this.levels[e],n.connect(e===`mech`?r:this.master),n};this.bus={mech:i(`mech`),hit:i(`hit`),jingle:i(`jingle`),amb:i(`amb`)};let a=t.sampleRate*2;this.noise=t.createBuffer(1,a,t.sampleRate);let o=this.noise.getChannelData(0),s=1234567;for(let e=0;e<a;e++)s=s*1103515245+12345>>>0,o[e]=s/4294967296*2-1;this.startMotor(),this.startAmbience(!e),e||this.loadSfx()}async loadSfx(e=`./sfx/sfx.wav`){let t=this.ctx;if(!t)return!1;try{let n=await fetch(e);return n.ok?(this.sfx=await t.decodeAudioData(await n.arrayBuffer()),!0):!1}catch{return!1}}sample(e,t,n,r=1,i=0){if(!this.sfx||!this.ctx)return!1;let[a,o]=Ct[Array.isArray(e)?this.pickFresh(e):e],s=this.ctx.createBufferSource();s.buffer=this.sfx,s.playbackRate.value=r;let c=this.ctx.createGain();return c.gain.value=n,s.connect(c).connect(this.bus[t]),s.start(this.now()+i,a,o),!0}vary(e=.08){return 1+(Math.random()*2-1)*e}lastPick=new Map;pickFresh(e){let t=e.join(`|`),n=this.lastPick.get(t),r=e.length>1?e.filter(e=>e!==n):e,i=r[Math.floor(Math.random()*r.length)];return this.lastPick.set(t,i),i}tired=new Map;allow(e,t){let n=this.now(),r=this.tired.get(e)??{level:0,at:-9},i=r.level*Math.exp(-(n-r.at)/.9);return n-r.at<t*(1+i*1.5)?0:(this.tired.set(e,{level:i+1,at:n}),1/(1+i))}pause(e){let t=this.ctx;t instanceof AudioContext&&(e?t.suspend().catch(()=>{}):t.resume().catch(()=>{}))}setLevel(e,t){this.levels[e]=Math.max(0,Math.min(1,t)),this.ctx&&this.bus[e].gain.setTargetAtTime(this.levels[e],this.ctx.currentTime,.03)}setEnabled(e){this.enabled=e,this.ctx&&this.master.gain.setTargetAtTime(e?this.volume:0,this.ctx.currentTime,.05)}now(){return this.ctx.currentTime}gap(e,t){let n=this.now();return(this.last.get(e)??-9)+t>n?!1:(this.last.set(e,n),!0)}tone(e,t,n,r,i=`sine`,a=0){let o=this.ctx,s=this.now()+a,c=o.createOscillator(),l=o.createGain();c.type=i,c.frequency.value=t,l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(r,s+.006),l.gain.exponentialRampToValueAtTime(1e-4,s+n),c.connect(l).connect(this.bus[e]),c.start(s),c.stop(s+n+.02)}burst(e,t,n,r,i,a=1,o=0){let s=this.ctx,c=this.now()+o,l=s.createBufferSource();l.buffer=this.noise;let u=s.createBiquadFilter();u.type=r,u.frequency.value=i,u.Q.value=a;let d=s.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(n,c+.004),d.gain.exponentialRampToValueAtTime(1e-4,c+t),l.connect(u).connect(d).connect(this.bus[e]),l.start(c,Math.random()*1.5),l.stop(c+t+.02)}bell(e,t,n,r,i=0,a=2.2){let o=this.ctx,s=this.now()+i,c=o.createOscillator(),l=o.createOscillator(),u=o.createGain(),d=o.createGain();c.frequency.value=t,l.frequency.value=t*1.41,u.gain.setValueAtTime(t*a,s),u.gain.exponentialRampToValueAtTime(t*.05,s+n),l.connect(u).connect(c.frequency),d.gain.setValueAtTime(1e-4,s),d.gain.exponentialRampToValueAtTime(r,s+.003),d.gain.exponentialRampToValueAtTime(1e-4,s+n),c.connect(d).connect(this.bus[e]),c.start(s),l.start(s),c.stop(s+n+.02),l.stop(s+n+.02)}coin(){this.ctx&&(this.sample(`coins1`,`hit`,.14,this.vary(.04))?this.sample(`metalClick`,`hit`,.15,1,.14):(this.bell(`hit`,2350,.16,.16,0,1.6),this.bell(`hit`,3720,.1,.07,.004,1.2),this.burst(`hit`,.06,.12,`bandpass`,900,3,.11),this.burst(`hit`,.05,.08,`bandpass`,700,3,.19)),this.tone(`hit`,140,.12,.12,`sine`,.24),this.tone(`jingle`,1318.5,.1,.09,`triangle`,.32),this.tone(`jingle`,1760,.18,.09,`triangle`,.4))}button(e=!0){if(!this.ctx)return;let t=this.vary(.07);e?(this.burst(`mech`,.024,.3,`bandpass`,560*t,.8),this.tone(`mech`,105*t,.07,.22,`sine`)):this.burst(`mech`,.014,.09,`bandpass`,820*t,.8)}startMotor(){let e=this.ctx,t=e.createOscillator();t.type=`triangle`,t.frequency.value=70;let n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=320,n.Q.value=.7;let r=e.createGain();r.gain.value=0,t.connect(n).connect(r).connect(this.bus.mech);let i=e.createOscillator();i.type=`sine`,i.frequency.value=820;let a=e.createGain();a.gain.value=0,i.connect(a).connect(this.bus.mech);let o=e.createBufferSource();o.buffer=this.noise,o.loop=!0;let s=e.createBiquadFilter();s.type=`bandpass`,s.frequency.value=900,s.Q.value=.8;let c=e.createGain();c.gain.value=0,o.connect(s).connect(c).connect(this.bus.mech),t.start(),i.start(),o.start(),this.motor={body:t,whine:i,gain:r,whineGain:a,filter:n,hiss:c}}motorUpdate(e){if(!this.ctx||!this.motor)return;let t=this.now(),n=e.moving?Math.min(1,e.speed/.24):0,r=e.vertical?92:68,i=e.moving?.07:.12;this.motor.body.frequency.setTargetAtTime(r+26*n,t,.08),this.motor.filter.frequency.setTargetAtTime(260+220*n,t,.1),this.motor.gain.gain.setTargetAtTime(e.moving?.04+.032*n:0,t,i),this.motor.whine.frequency.setTargetAtTime((e.vertical?980:760)+160*n,t,.1),this.motor.whineGain.gain.setTargetAtTime(0,t,i),this.motor.hiss.gain.setTargetAtTime(e.moving?.002+.002*n:0,t,i)}clunk(e=!1){if(!this.ctx||!this.gap(`clunk`,.15))return;let t=this.vary(.12);this.burst(`mech`,e?.07:.045,e?.2:.1,`lowpass`,(e?300:400)*t,.8),this.tone(`mech`,(e?64:82)*t,e?.11:.07,e?.16:.08,`sine`),e&&this.sample(`latch`,`mech`,.55,.78*t,.012)}chain(e){if(!this.ctx||e<.2||!this.gap(`chain`,.32+Math.random()*.4)||Math.random()<.6&&this.sample([`belt0`,`belt1`],`mech`,Math.min(.16,(e-.15)*.4),this.vary(.25)))return;let t=Math.min(.025,(e-.1)*.04);this.bell(`mech`,2100+Math.random()*900,.05,t,0,1.2),Math.random()<.4&&this.bell(`mech`,2900+Math.random()*700,.04,t*.6,.014,1)}impact(e){if(!this.ctx)return;let t=this.allow(e.kind,{hook:.16,ring:.14,board:.16,prize:.14,chute:.1,arm:.16,ball:.045}[e.kind]);if(!t)return;let n=e.force;switch(e.kind){case`ball`:this.bell(`hit`,2300+Math.random()*700,.045,t*Math.min(.14,.015+n*.05),0,.9),this.burst(`hit`,.012,t*Math.min(.08,.01+n*.03),`bandpass`,3200,1.5);break;case`hook`:if(this.sample([`metalLight0`,`metalLight1`,`metalLight2`,`metalLight3`,`metalLight4`],`hit`,t*Math.min(.4,.1+n*.016),this.vary())){n>12&&this.sample([`metalMid0`,`metalMid1`],`hit`,t*Math.min(.3,n*.012),this.vary());break}this.bell(`hit`,1500+Math.random()*200,.3,t*Math.min(.2,.04+n*.008),0,1.8),this.bell(`hit`,2400,.14,t*Math.min(.06,n*.004),.003,1.2);break;case`ring`:if(this.sample([`tin0`,`tin1`,`generic0`,`generic1`],`hit`,t*Math.min(.35,.08+n*.015),this.vary()))break;this.burst(`hit`,.04,t*Math.min(.16,.03+n*.006),`bandpass`,1300,2),this.bell(`hit`,2e3+Math.random()*400,.08,t*Math.min(.05,n*.003),0,1.2);break;case`board`:if(this.sample([`plank0`,`plank1`],`hit`,t*Math.min(.4,.1+n*.012),this.vary(.12)))break;this.burst(`hit`,.08,t*Math.min(.35,.06+n*.008),`lowpass`,650,1),this.tone(`hit`,150,.1,t*Math.min(.22,n*.01),`triangle`);break;case`prize`:if(this.sample([`wood0`,`wood1`,`wood2`],`hit`,t*Math.min(.4,.1+n*.02),this.vary(.12)))break;this.burst(`hit`,.09,t*Math.min(.35,.04+n*.015),`lowpass`,500,.8),this.tone(`hit`,105,.1,t*Math.min(.2,n*.012),`sine`);break;case`arm`:if(this.sample([`softLight0`,`generic0`,`generic1`],`hit`,t*Math.min(.22,.05+n*.01),this.vary(.15)*.85))break;this.burst(`hit`,.05,t*Math.min(.2,.04+n*.008),`lowpass`,700,.8);break;case`chute`:if(this.sample([`soft0`,`soft1`],`hit`,t*Math.min(.5,.2+n*.02),this.vary(.05))){this.sample([`tin0`,`tin2`],`hit`,t*Math.min(.2,.06+n*.008),this.vary(),.02);break}this.burst(`hit`,.18,t*Math.min(.5,.12+n*.016),`lowpass`,420,1.2),this.tone(`hit`,72,.2,t*Math.min(.38,.08+n*.016),`sine`),this.burst(`hit`,.1,.06,`bandpass`,1500,4,.03)}}drop(){if(this.ctx){[523.25,659.25,783.99].forEach((e,t)=>this.tone(`jingle`,e,.13,.13,`triangle`,t*.08)),this.tone(`jingle`,1046.5,.55,.15,`triangle`,.24),this.tone(`jingle`,1318.5,.5,.07,`sine`,.24);for(let e=0;e<5;e++)this.bell(`jingle`,2e3+e*260,.25,.035,.3+e*.05,1.4)}}flap(){this.ctx&&(this.sample(`tin2`,`hit`,.2,.9)?this.sample(`softLight0`,`hit`,.16,1,.03):(this.burst(`hit`,.05,.18,`bandpass`,1e3,2),this.tone(`hit`,220,.08,.1,`triangle`)))}fanfare(e){if(!this.ctx)return;let t=e?[784,988,1175,1568,1976,2349]:[659,784,988,1319];t.forEach((e,t)=>{this.tone(`jingle`,e,.22,.11,`square`,t*.09),this.tone(`jingle`,e/2,.22,.08,`triangle`,t*.09)});let n=t.length*.09;this.tone(`jingle`,t[t.length-1],.8,.12,`triangle`,n);for(let e=0;e<8;e++)this.bell(`jingle`,2400+Math.random()*1600,.3,.03,n+e*.05,1.4)}miss(e){this.ctx&&(e?[523,494,466].forEach((e,t)=>this.tone(`jingle`,e,t===2?.35:.15,.08,`triangle`,t*.13)):[330,262].forEach((e,t)=>this.tone(`jingle`,e,.25,.06,`triangle`,t*.15)))}sell(e){if(!this.ctx)return;let t=Math.min(6,2+Math.floor(e/500));for(let e=0;e<t;e++)this.bell(`jingle`,2600+e%2*500,.16,.08,e*.06,1.4);this.tone(`jingle`,1568,.2,.08,`triangle`,t*.06)}startAmbience(e){this.ambience=new St(this.ctx,this.bus.amb,this.noise),e&&this.ambience.start()}scheduleAmbience(e){this.ambience?.scheduleTo(e)}dispose(){this.ambience?.stop()}},Et=1e3,Dt=1001,Ot=1002,kt=1003,At=1004,jt=1005,Mt=1006,Nt=1007,Pt=1008,Ft=1009,It=1010,Lt=1011,Rt=1012,zt=1013,Bt=1014,Vt=1015,Ht=1016,Ut=1017,Wt=1018,Gt=1020,Kt=35902,qt=35899,Jt=1021,Yt=1022,Xt=1023,Zt=1026,Qt=1027,$t=1028,en=1029,tn=1030,nn=1031,rn=1033,an=33776,on=33777,sn=33778,cn=33779,ln=35840,un=35841,dn=35842,fn=35843,pn=36196,mn=37492,hn=37496,gn=37488,_n=37489,vn=37490,yn=37491,bn=37808,xn=37809,Sn=37810,Cn=37811,wn=37812,Tn=37813,En=37814,Dn=37815,On=37816,kn=37817,An=37818,jn=37819,Mn=37820,Nn=37821,Pn=36492,Fn=36494,In=36495,Ln=36283,Rn=36284,zn=36285,Bn=36286,Vn=2300,Hn=2301,Un=2302,Wn=2303,Gn=2400,Kn=2401,qn=2402,Jn=3200,Yn=`srgb`,Xn=`srgb-linear`,Zn=`linear`,Qn=`srgb`,$n=7680,er=35044,tr=2e3;function nr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function rr(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ir(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ar(){let e=ir(`canvas`);return e.style.display=`block`,e}var or={};function sr(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function cr(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=cr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=cr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function lr(...e){let t=e.join(` `);t in or||(or[t]=!0,B(...e))}function ur(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var dr={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},fr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},pr=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),mr=1234567,hr=Math.PI/180,gr=180/Math.PI;function _r(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pr[e&255]+pr[e>>8&255]+pr[e>>16&255]+pr[e>>24&255]+`-`+pr[t&255]+pr[t>>8&255]+`-`+pr[t>>16&15|64]+pr[t>>24&255]+`-`+pr[n&63|128]+pr[n>>8&255]+`-`+pr[n>>16&255]+pr[n>>24&255]+pr[r&255]+pr[r>>8&255]+pr[r>>16&255]+pr[r>>24&255]).toLowerCase()}function vr(e,t,n){return Math.max(t,Math.min(n,e))}function yr(e,t){return(e%t+t)%t}function br(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function xr(e,t,n){return e===t?0:(n-e)/(t-e)}function Sr(e,t,n){return(1-n)*e+n*t}function Cr(e,t,n,r){return Sr(e,t,1-Math.exp(-n*r))}function wr(e,t=1){return t-Math.abs(yr(e,t*2)-t)}function Tr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Er(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Dr(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Or(e,t){return e+Math.random()*(t-e)}function kr(e){return e*(.5-Math.random())}function Ar(e){e!==void 0&&(mr=e);let t=mr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jr(e){return e*hr}function Mr(e){return e*gr}function Nr(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Pr(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Fr(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ir(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:B(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Lr(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Rr(e,t){if(t.constructor===Float32Array)return e;let n=Lr(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function zr(e,t){if(t.constructor===Float32Array)return e;let n=Lr(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Br={DEG2RAD:hr,RAD2DEG:gr,generateUUID:_r,clamp:vr,euclideanModulo:yr,mapLinear:br,inverseLerp:xr,lerp:Sr,damp:Cr,pingpong:wr,smoothstep:Tr,smootherstep:Er,randInt:Dr,randFloat:Or,randFloatSpread:kr,seededRandom:Ar,degToRad:jr,radToDeg:Mr,isPowerOfTwo:Nr,ceilPowerOfTwo:Pr,floorPowerOfTwo:Fr,setQuaternionFromProperEuler:Ir,normalize:zr,denormalize:Rr},H=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vr(this.x,e.x,t.x),this.y=vr(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vr(this.x,e,t),this.y=vr(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vr=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vr(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ur.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ur.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vr(this.x,e.x,t.x),this.y=vr(this.y,e.y,t.y),this.z=vr(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vr(this.x,e,t),this.y=vr(this.y,e,t),this.z=vr(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hr.copy(this).projectOnVector(e),this.sub(Hr)}reflect(e){return this.sub(Hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hr=new U,Ur=new Vr,W=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return lr(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Wr.makeScale(e,t)),this}rotate(e){return lr(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Wr.makeRotation(-e)),this}translate(e,t){return lr(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wr=new W,Gr=new W().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kr=new W().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qr(){let e={enabled:!0,workingColorSpace:Xn,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Yr(e.r),e.g=Yr(e.g),e.b=Yr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Xr(e.r),e.g=Xr(e.g),e.b=Xr(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Zn:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Xn]:{primaries:t,whitePoint:r,transfer:Zn,toXYZ:Gr,fromXYZ:Kr,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:r,transfer:Qn,toXYZ:Gr,fromXYZ:Kr,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),e}var Jr=qr();function Yr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Xr(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Zr,Qr=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zr===void 0&&(Zr=ir(`canvas`)),Zr.width=e.width,Zr.height=e.height;let t=Zr.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Zr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ir(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Yr(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Yr(t[e]/255)*255):t[e]=Yr(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},$r=0,ei=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$r++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(ti(r[t].image)):e.push(ti(r[t]))}else e=ti(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function ti(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Qr.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var ni=0,ri=new U,ii=class e extends fr{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Dt,i=Dt,a=Mt,o=Pt,s=Xt,c=Ft,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ni++}),this.uuid=_r(),this.name=``,this.source=new ei(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new W,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ri).x}get height(){return this.source.getSize(ri).y}get depth(){return this.source.getSize(ri).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Et:e.x-=Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case Ot:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Et:e.y-=Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case Ot:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null,ii.DEFAULT_MAPPING=300,ii.DEFAULT_ANISOTROPY=1;var ai=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vr(this.x,e.x,t.x),this.y=vr(this.y,e.y,t.y),this.z=vr(this.z,e.z,t.z),this.w=vr(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vr(this.x,e,t),this.y=vr(this.y,e,t),this.z=vr(this.z,e,t),this.w=vr(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oi=class extends fr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ai(0,0,e,t),this.scissorTest=!1,this.viewport=new ai(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new ii({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ei(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},si=class extends oi{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ci=class extends ii{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},li=class extends ii{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ui=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/di.setFromMatrixColumn(e,0).length(),i=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pi,e,mi)}lookAt(e,t,n){let r=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),hi.crossVectors(n,_i),hi.lengthSq()===0&&(Math.abs(n.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),hi.crossVectors(n,_i)),hi.normalize(),gi.crossVectors(_i,hi),r[0]=hi.x,r[4]=gi.x,r[8]=_i.x,r[1]=hi.y,r[5]=gi.y,r[9]=_i.y,r[2]=hi.z,r[6]=gi.z,r[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],P=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*te,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*te,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*te,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=di.set(r[0],r[1],r[2]).length(),o=di.set(r[4],r[5],r[6]).length(),s=di.set(r[8],r[9],r[10]).length();i<0&&(a=-a),fi.copy(this);let c=1/a,l=1/o,u=1/s;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=l,fi.elements[5]*=l,fi.elements[6]*=l,fi.elements[8]*=u,fi.elements[9]*=u,fi.elements[10]*=u,t.setFromRotationMatrix(fi),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=tr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=tr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},di=new U,fi=new ui,pi=new U(0,0,0),mi=new U(1,1,1),hi=new U,gi=new U,_i=new U,vi=new ui,yi=new Vr,bi=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(vr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-vr(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(vr(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-vr(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(vr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-vr(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vi.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vi,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yi.setFromEuler(this),this.setFromQuaternion(yi,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER=`XYZ`;var xi=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Si=0,Ci=new U,wi=new Vr,Ti=new ui,Ei=new U,Di=new U,Oi=new U,ki=new Vr,Ai=new U(1,0,0),ji=new U(0,1,0),Mi=new U(0,0,1),Ni={type:`added`},Pi={type:`removed`},Fi={type:`childadded`,child:null},Ii={type:`childremoved`,child:null},Li=class e extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Si++}),this.uuid=_r(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new bi,r=new Vr,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ui},normalMatrix:{value:new W}}),this.matrix=new ui,this.matrixWorld=new ui,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Ai,e)}rotateY(e){return this.rotateOnAxis(ji,e)}rotateZ(e){return this.rotateOnAxis(Mi,e)}translateOnAxis(e,t){return Ci.copy(e).applyQuaternion(this.quaternion),this.position.add(Ci.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ai,e)}translateY(e){return this.translateOnAxis(ji,e)}translateZ(e){return this.translateOnAxis(Mi,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ei.copy(e):Ei.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Di,Ei,this.up):Ti.lookAt(Ei,Di,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(Ti),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ni),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pi),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ni),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,Oi),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,ki,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Li.DEFAULT_UP=new U(0,1,0),Li.DEFAULT_MATRIX_AUTO_UPDATE=!0,Li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=class extends Li{constructor(){super(),this.isGroup=!0,this.type=`Group`}},zi={type:`move`},Bi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zi)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ui={h:0,s:0,l:0};function Wi(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jr.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Jr.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jr.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Jr.workingColorSpace){if(e=yr(e,1),t=vr(t,0,1),n=vr(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Wi(i,r,e+1/3),this.g=Wi(i,r,e),this.b=Wi(i,r,e-1/3)}return Jr.colorSpaceToWorking(this,r),this}setStyle(e,t=Yn){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yn){let n=Vi[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Jr.workingToColorSpace(Gi.copy(this),e),Math.round(vr(Gi.r*255,0,255))*65536+Math.round(vr(Gi.g*255,0,255))*256+Math.round(vr(Gi.b*255,0,255))}getHexString(e=Yn){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jr.workingColorSpace){Jr.workingToColorSpace(Gi.copy(this),t);let n=Gi.r,r=Gi.g,i=Gi.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Jr.workingColorSpace){return Jr.workingToColorSpace(Gi.copy(this),t),e.r=Gi.r,e.g=Gi.g,e.b=Gi.b,e}getStyle(e=Yn){Jr.workingToColorSpace(Gi.copy(this),e);let t=Gi.r,n=Gi.g,r=Gi.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Ui);let n=Sr(Hi.h,Ui.h,t),r=Sr(Hi.s,Ui.s,t),i=Sr(Hi.l,Ui.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gi=new G;G.NAMES=Vi;var Ki=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new G(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qi=class extends Li{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ji=new U,Yi=new U,Xi=new U,Zi=new U,Qi=new U,$i=new U,ea=new U,ta=new U,na=new U,ra=new U,ia=new ai,aa=new ai,oa=new ai,sa=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ji.subVectors(e,t),r.cross(Ji);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Ji.subVectors(r,t),Yi.subVectors(n,t),Xi.subVectors(e,t);let a=Ji.dot(Ji),o=Ji.dot(Yi),s=Ji.dot(Xi),c=Yi.dot(Yi),l=Yi.dot(Xi),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zi)!==null&&Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Zi)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Zi.x),s.addScaledVector(a,Zi.y),s.addScaledVector(o,Zi.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ia.setScalar(0),aa.setScalar(0),oa.setScalar(0),ia.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),oa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ia,i.x),a.addScaledVector(aa,i.y),a.addScaledVector(oa,i.z),a}static isFrontFacing(e,t,n,r){return Ji.subVectors(n,t),Yi.subVectors(e,t),Ji.cross(Yi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),Ji.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Qi.subVectors(r,n),$i.subVectors(i,n),ta.subVectors(e,n);let s=Qi.dot(ta),c=$i.dot(ta);if(s<=0&&c<=0)return t.copy(n);na.subVectors(e,r);let l=Qi.dot(na),u=$i.dot(na);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Qi,a);ra.subVectors(e,i);let f=Qi.dot(ra),p=$i.dot(ra);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector($i,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ea.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ea,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Qi,a).addScaledVector($i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ca=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ua.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ua.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ua.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ua):ua.fromBufferAttribute(r,t),ua.applyMatrix4(e.matrixWorld),this.expandByPoint(ua);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ua),ua.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),ya.subVectors(this.max,va),fa.subVectors(e.a,va),pa.subVectors(e.b,va),ma.subVectors(e.c,va),ha.subVectors(pa,fa),ga.subVectors(ma,pa),_a.subVectors(fa,ma);let t=[0,-ha.z,ha.y,0,-ga.z,ga.y,0,-_a.z,_a.y,ha.z,0,-ha.x,ga.z,0,-ga.x,_a.z,0,-_a.x,-ha.y,ha.x,0,-ga.y,ga.x,0,-_a.y,_a.x,0];return!Sa(t,fa,pa,ma,ya)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,fa,pa,ma,ya))?!1:(ba.crossVectors(ha,ga),t=[ba.x,ba.y,ba.z],Sa(t,fa,pa,ma,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ua).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ua).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(la)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},la=[new U,new U,new U,new U,new U,new U,new U,new U],ua=new U,da=new ca,fa=new U,pa=new U,ma=new U,ha=new U,ga=new U,_a=new U,va=new U,ya=new U,ba=new U,xa=new U;function Sa(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){xa.fromArray(e,a);let o=i.x*Math.abs(xa.x)+i.y*Math.abs(xa.y)+i.z*Math.abs(xa.z),s=t.dot(xa),c=n.dot(xa),l=r.dot(xa);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ca=new U,wa=new H,Ta=0,Ea=class extends fr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ta++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=er,this.updateRanges=[],this.gpuType=Vt,this.version=0,this._normalizationScale=e===void 0?void 0:Lr(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXYZ(t,Ca.x,Ca.y,Ca.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix4(e),this.setXYZ(t,Ca.x,Ca.y,Ca.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyNormalMatrix(e),this.setXYZ(t,Ca.x,Ca.y,Ca.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.transformDirection(e),this.setXYZ(t,Ca.x,Ca.y,Ca.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Rr(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?zr(e,this.array):Math.round(e*t)}},Da=class extends Ea{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Oa=class extends Ea{constructor(e,t,n){super(new Uint32Array(e),t,n)}},K=class extends Ea{constructor(e,t,n){super(new Float32Array(e),t,n)}},ka=new ca,Aa=new U,ja=new U,Ma=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ka.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let t=Aa.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Aa,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(ja)),this.expandByPoint(Aa.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Na=0,Pa=new ui,Fa=new Li,Ia=new U,La=new ca,Ra=new ca,za=new U,Ba=class e extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Na++}),this.uuid=_r(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(nr(e)?Oa:Da)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new W().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pa.makeRotationFromQuaternion(e),this.applyMatrix4(Pa),this}rotateX(e){return Pa.makeRotationX(e),this.applyMatrix4(Pa),this}rotateY(e){return Pa.makeRotationY(e),this.applyMatrix4(Pa),this}rotateZ(e){return Pa.makeRotationZ(e),this.applyMatrix4(Pa),this}translate(e,t,n){return Pa.makeTranslation(e,t,n),this.applyMatrix4(Pa),this}scale(e,t,n){return Pa.makeScale(e,t,n),this.applyMatrix4(Pa),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ia).negate(),this.translate(Ia.x,Ia.y,Ia.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new K(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];La.setFromBufferAttribute(n),this.morphTargetsRelative?(za.addVectors(this.boundingBox.min,La.min),this.boundingBox.expandByPoint(za),za.addVectors(this.boundingBox.max,La.max),this.boundingBox.expandByPoint(za)):(this.boundingBox.expandByPoint(La.min),this.boundingBox.expandByPoint(La.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);else if(e){let n=this.boundingSphere.center;if(La.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ra.setFromBufferAttribute(n),this.morphTargetsRelative?(za.addVectors(La.min,Ra.min),La.expandByPoint(za),za.addVectors(La.max,Ra.max),La.expandByPoint(za)):(La.expandByPoint(Ra.min),La.expandByPoint(Ra.max))}La.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)za.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(za));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)za.fromBufferAttribute(a,t),o&&(Ia.fromBufferAttribute(e,t),za.add(Ia)),r=Math.max(r,n.distanceToSquared(za))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Ea(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let l=new U,u=new U,d=new U,f=new H,p=new H,m=new H,h=new U,g=new U;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new U,b=new U,x=new U,S=new U;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Ea(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)za.fromBufferAttribute(e,t),za.normalize(),e.setXYZ(t,za.x,za.y,za.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Ea(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Va=new U,Ha=new U,Ua=new W,Wa=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Va.subVectors(n,t).cross(Ha.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Va),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ua.getNormalMatrix(e),r=this.coplanarPoint(Va).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ga=0,Ka=class extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ga++}),this.uuid=_r(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new G().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Wa().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},qa=new U,Ja=new U,Ya=new U,Xa=new U,Za=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qa)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qa.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qa.copy(this.origin).addScaledVector(this.direction,t),qa.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ja.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),Xa.copy(this.origin).sub(Ja);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ya),o=Xa.dot(this.direction),s=-Xa.dot(Ya),c=Xa.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ja).addScaledVector(Ya,d),f}intersectSphere(e,t){if(e.radius<0)return null;qa.subVectors(e.center,this.origin);let n=qa.dot(this.direction),r=qa.dot(qa)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qa)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,P=C/w,te=1/w,ne=T-ee*D,re=E-P*D,ie=O-ee*A,ae=k-P*A,oe=j-ee*N,se=M-P*N,ce=oe*ae-se*ie,le=ne*se-re*oe,ue=ie*re-ae*ne;if(r){if(ce<0||le<0||ue<0)return null}else if((ce<0||le<0||ue<0)&&(ce>0||le>0||ue>0))return null;let de=ce+le+ue;if(de===0)return null;let fe=te*(ce*D+le*A+ue*N);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qa=class extends Ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$a=new ui,eo=new Za,to=new Ma,no=new U,ro=new U,io=new U,ao=new U,oo=new U,so=new U,co=new U,lo=new U,q=class extends Li{constructor(e=new Ba,t=new Qa){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){so.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(oo.fromBufferAttribute(s,e),a?so.addScaledVector(oo,r):so.addScaledVector(oo.sub(t),r))}t.add(so)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(i),eo.copy(e.ray).recast(e.near),to.containsPoint(eo.origin)===!1&&(eo.intersectSphere(to,no)===null||eo.origin.distanceToSquared(no)>(e.far-e.near)**2)||($a.copy(i).invert(),eo.copy(e.ray).applyMatrix4($a),(n.boundingBox===null||eo.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,eo)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=fo(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=fo(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=fo(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=fo(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function uo(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;lo.copy(s),lo.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(lo);return l<n.near||l>n.far?null:{distance:l,point:lo.clone(),object:e}}function fo(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ro),e.getVertexPosition(c,io),e.getVertexPosition(l,ao);let u=uo(e,t,n,r,ro,io,ao,co);if(u){let e=new U;sa.getBarycoord(co,ro,io,ao,e),i&&(u.uv=sa.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=sa.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=sa.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};sa.getNormal(ro,io,ao,t.normal),u.face=t,u.barycoord=e}return u}var po=class extends ii{constructor(e=null,t=1,n=1,r,i,a,o,s,c=kt,l=kt,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mo=class extends Ea{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ho=new ui,go=new ui,_o=[],vo=new ca,yo=new ui,bo=new q,xo=new Ma,So=class extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,yo)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ca),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),vo.copy(e.boundingBox).applyMatrix4(ho),this.boundingBox.union(vo)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ma),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),xo.copy(e.boundingSphere).applyMatrix4(ho),this.boundingSphere.union(xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(n),e.ray.intersectsSphere(xo)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ho),go.multiplyMatrices(n,ho),bo.matrixWorld=go,bo.raycast(e,_o);for(let e=0,n=_o.length;e<n;e++){let n=_o[e];n.instanceId=i,n.object=this,t.push(n)}_o.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new po(new Float32Array(r*this.count),r,this.count,$t,Vt));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Co=new Ma,wo=new H(.5,.5),To=new U,Eo=class{constructor(e=new Wa,t=new Wa,n=new Wa,r=new Wa,i=new Wa,a=new Wa){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Co.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Co.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Co)}intersectsSprite(e){return Co.center.set(0,0,0),Co.radius=.7071067811865476+wo.distanceTo(e.center),Co.applyMatrix4(e.matrixWorld),this.intersectsSphere(Co)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(To.x=r.normal.x>0?e.max.x:e.min.x,To.y=r.normal.y>0?e.max.y:e.min.y,To.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Do=new ui,Oo=class e{constructor(){this.coordinateSystem=tr,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Do.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Eo),n[e].setFromProjectionMatrix(Do,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Eo),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},ko=class extends Ka{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ao=new ui,jo=new Za,Mo=new Ma,No=new U,Po=class extends Li{constructor(e=new Ba,t=new ko){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Mo.radius+=i,e.ray.intersectsSphere(Mo)===!1)return;Ao.copy(r).invert(),jo.copy(e.ray).applyMatrix4(Ao);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);No.fromBufferAttribute(l,n),Fo(No,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)No.fromBufferAttribute(l,a),Fo(No,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Fo(e,t,n,r,i,a,o){let s=jo.distanceSqToPoint(e);if(s<n){let n=new U;jo.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Io=class extends ii{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lo=class extends ii{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ro=class extends ii{constructor(e,t,n=Bt,r,i,a,o=kt,s=kt,c,l=Zt,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ei(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},zo=class extends Ro{constructor(e,t=Bt,n=301,r,i,a=kt,o=kt,s,c=Zt){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bo=class extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vo=class e extends Ba{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new K(c,3)),this.setAttribute(`normal`,new K(l,3)),this.setAttribute(`uv`,new K(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ho=class e extends Ba{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new U,g=new U;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new K(o,3)),this.setAttribute(`normal`,new K(s,3)),this.setAttribute(`uv`,new K(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Uo=class e extends Ba{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new U,l=new H;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new K(a,3)),this.setAttribute(`normal`,new K(o,3)),this.setAttribute(`uv`,new K(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},J=class e extends Ba{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new K(u,3)),this.setAttribute(`normal`,new K(d,3)),this.setAttribute(`uv`,new K(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wo=class e extends J{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Go=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){B(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new H:new U);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,r=[],i=[],a=[],o=new U,s=new ui;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new U)}i[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(vr(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(vr(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ko=class extends Go{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new H){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},qo=class extends Ko{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Jo(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Yo=new U,Xo=new U,Zo=new Jo,Qo=new Jo,$o=new Jo,es=class extends Go{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Xo.subVectors(r[0],r[1]).add(r[0]),c=Xo);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Yo.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Yo),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Zo.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Qo.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),$o.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Zo.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Qo.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),$o.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Zo.calc(s),Qo.calc(s),$o.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ts(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ns(e,t){let n=1-e;return n*n*t}function rs(e,t){return 2*(1-e)*e*t}function is(e,t){return e*e*t}function as(e,t,n,r){return ns(e,t)+rs(e,n)+is(e,r)}function os(e,t){let n=1-e;return n*n*n*t}function ss(e,t){let n=1-e;return 3*n*n*e*t}function cs(e,t){return 3*(1-e)*e*e*t}function ls(e,t){return e*e*e*t}function us(e,t,n,r,i){return os(e,t)+ss(e,n)+cs(e,r)+ls(e,i)}var ds=class extends Go{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(us(e,r.x,i.x,a.x,o.x),us(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fs=class extends Go{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(us(e,r.x,i.x,a.x,o.x),us(e,r.y,i.y,a.y,o.y),us(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ps=class extends Go{constructor(e=new H,t=new H){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ms=class extends Go{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hs=class extends Go{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(as(e,r.x,i.x,a.x),as(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gs=class extends Go{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(as(e,r.x,i.x,a.x),as(e,r.y,i.y,a.y),as(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_s=class extends Go{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new H){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ts(o,s.x,c.x,l.x,u.x),ts(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this}},vs=Object.freeze({__proto__:null,ArcCurve:qo,CatmullRomCurve3:es,CubicBezierCurve:ds,CubicBezierCurve3:fs,EllipseCurve:Ko,LineCurve:ps,LineCurve3:ms,QuadraticBezierCurve:hs,QuadraticBezierCurve3:gs,SplineCurve:_s}),ys=class extends Go{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new vs[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new vs[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},bs=class extends ys{constructor(e){super(),this.type=`Path`,this.currentPoint=new H,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ps(this.currentPoint.clone(),new H(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new hs(this.currentPoint.clone(),new H(e,t),new H(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ds(this.currentPoint.clone(),new H(e,t),new H(n,r),new H(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new _s([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ko(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xs=class extends bs{constructor(e){super(e),this.uuid=_r(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new bs().fromJSON(n))}return this}};function Ss(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Cs(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=As(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ts(a,o,n,s,c,l,0),o}function Cs(e,t,n,r,i){let a;if(i===ec(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Zs(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Zs(i/r|0,e[i],e[i+1],a);return a&&Us(a,a.next)&&(Qs(a),a=a.next),a}function ws(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Us(n,n.next)||Hs(n.prev,n,n.next)===0)){if(Qs(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ts(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Fs(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ds(e,r,i,a):Es(e))t.push(c.i,e.i,l.i),Qs(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Os(ws(e),t),Ts(e,t,n,r,i,a,2)):o===2&&ks(e,t,n,r,i,a):Ts(ws(e),t,n,r,i,a,1);break}}}function Es(e){let t=e.prev,n=e,r=e.next;if(Hs(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Bs(i,s,a,c,o,l,m.x,m.y)&&Hs(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ds(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Hs(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ls(p,m,t,n,r),v=Ls(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Bs(s,u,c,d,l,f,y.x,y.y)&&Hs(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Bs(s,u,c,d,l,f,b.x,b.y)&&Hs(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Bs(s,u,c,d,l,f,y.x,y.y)&&Hs(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Bs(s,u,c,d,l,f,b.x,b.y)&&Hs(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Os(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Us(r,i)&&Ws(r,n,n.next,i)&&Js(r,i)&&Js(i,r)&&(t.push(r.i,n.i,i.i),Qs(n),Qs(n.next),n=e=i),n=n.next}while(n!==e);return ws(n)}function ks(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Vs(o,e)){let s=Xs(o,e);o=ws(o,o.next),s=ws(s,s.next),Ts(o,t,n,r,i,a,0),Ts(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function As(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Cs(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Rs(o))}i.sort(js);for(let e=0;e<i.length;e++)n=Ms(i[e],n);return n}function js(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ms(e,t){let n=Ns(e,t);if(!n)return t;let r=Xs(n,e);return ws(r,r.next),ws(n,n.next)}function Ns(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Us(e,n))return n;do{if(Us(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&zs(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Js(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Ps(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Ps(e,t){return Hs(e.prev,e,t.prev)<0&&Hs(t.next,e,e.next)<0}function Fs(e,t,n,r){let i=e;do i.z===0&&(i.z=Ls(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Is(i)}function Is(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ls(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Rs(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function zs(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Bs(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&zs(e,t,n,r,i,a,o,s)}function Vs(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!qs(e,t)&&(Js(e,t)&&Js(t,e)&&Ys(e,t)&&(Hs(e.prev,e,t.prev)||Hs(e,t.prev,t))||Us(e,t)&&Hs(e.prev,e,e.next)>0&&Hs(t.prev,t,t.next)>0)}function Hs(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Us(e,t){return e.x===t.x&&e.y===t.y}function Ws(e,t,n,r){let i=Ks(Hs(e,t,n)),a=Ks(Hs(e,t,r)),o=Ks(Hs(n,r,e)),s=Ks(Hs(n,r,t));return!!(i!==a&&o!==s||i===0&&Gs(e,n,t)||a===0&&Gs(e,r,t)||o===0&&Gs(n,e,r)||s===0&&Gs(n,t,r))}function Gs(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ks(e){return e>0?1:e<0?-1:0}function qs(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ws(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Js(e,t){return Hs(e.prev,e,e.next)<0?Hs(e,t,e.next)>=0&&Hs(e,e.prev,t)>=0:Hs(e,t,e.prev)<0||Hs(e,e.next,t)<0}function Ys(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Xs(e,t){let n=$s(e.i,e.x,e.y),r=$s(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Zs(e,t,n,r){let i=$s(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Qs(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function $s(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ec(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var tc=class{static triangulate(e,t,n=2){return Ss(e,t,n)}},nc=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];rc(e),ic(n,e);let a=e.length;t.forEach(rc);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,ic(n,t[e]);let o=tc.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function rc(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function ic(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var ac=class e extends Ba{constructor(e=new xs([new H(.5,.5),new H(-.5,.5),new H(-.5,-.5),new H(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new K(r,3)),this.setAttribute(`uv`,new K(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?oc:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new U,b=new U,x=new U}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!nc.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];nc.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||V(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new H(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new H(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,ee=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}let P;if(p===0)P=nc.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);oe(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);oe(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}P=nc.triangulateShape(e,t)}let te=P.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ee[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),oe(x.x,x.y,x.z)):oe(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ee[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),oe(x.x,x.y,x.z)):oe(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);oe(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?oe(i.x,i.y+g[s-1].y,g[s-1].x+n):oe(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<te;e++){let n=P[e];se(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<te;e++){let n=P[e];se(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<te;e++){let t=P[e];se(t[2],t[1],t[0])}for(let e=0;e<te;e++){let t=P[e];se(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ce(t+r+n,t+i+n,t+i+a,t+r+a)}}}function oe(e,t,n){a.push(e),a.push(t),a.push(n)}function se(e,t,i){le(e),le(t),le(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ue(o[0]),ue(o[1]),ue(o[2])}function ce(e,t,i,a){le(e),le(t),le(a),le(t),le(i),le(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ue(s[0]),ue(s[1]),ue(s[3]),ue(s[1]),ue(s[2]),ue(s[3])}function le(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ue(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return sc(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new vs[i.type]().fromJSON(i)),new e(r,t.options)}},oc={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new H(a,o),new H(s,c),new H(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new H(o,1-c),new H(l,1-d),new H(f,1-m),new H(h,1-_)]:[new H(s,1-c),new H(u,1-d),new H(p,1-m),new H(g,1-_)]}};function sc(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var cc=class e extends Ba{constructor(e=[new H(0,-.5),new H(.5,0),new H(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=vr(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new U,d=new H,f=new U,p=new U,m=new U,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new K(a,3)),this.setAttribute(`uv`,new K(o,2)),this.setAttribute(`normal`,new K(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},lc=class e extends Ba{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new K(p,3)),this.setAttribute(`normal`,new K(m,3)),this.setAttribute(`uv`,new K(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},uc=class e extends Ba{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new U,p=new H;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new K(s,3)),this.setAttribute(`normal`,new K(c,3)),this.setAttribute(`uv`,new K(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},dc=class e extends Ba{constructor(e=new xs([new H(0,.5),new H(-.5,-.5),new H(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new K(r,3)),this.setAttribute(`normal`,new K(i,3)),this.setAttribute(`uv`,new K(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;nc.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];nc.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=nc.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return fc(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function fc(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var pc=class e extends Ba{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new K(p,3)),this.setAttribute(`normal`,new K(m,3)),this.setAttribute(`uv`,new K(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},mc=class e extends Ba{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new U,f=new U,p=new U;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new K(c,3)),this.setAttribute(`normal`,new K(l,3)),this.setAttribute(`uv`,new K(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},hc=class e extends Ba{constructor(e=new gs(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,s=new U,c=new H,l=new U,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new K(u,3)),this.setAttribute(`normal`,new K(d,3)),this.setAttribute(`uv`,new K(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new vs[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function gc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(vc(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(vc(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function _c(e){let t={};for(let n=0;n<e.length;n++){let r=gc(e[n]);for(let e in r)t[e]=r[e]}return t}function vc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function yc(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function bc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jr.workingColorSpace}var xc={clone:gc,merge:_c},Sc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wc=class extends Ka{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sc,this.fragmentShader=Cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gc(e.uniforms),this.uniformsGroups=yc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new G().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new ai().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new ui().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Tc=class extends wc{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Y=class extends Ka{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ec=class extends Y{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new H(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vr(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new G(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new G(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new G(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return lr(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){lr(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Dc=class extends Ka{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Oc=class extends Ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Jn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kc=class extends Ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ac(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function jc(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Mc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Nc=class extends Mc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gn,endingEnd:Gn}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kn:i=e,o=2*t-n;break;case qn:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Kn:a=e,s=2*n-t;break;case qn:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Pc=class extends Mc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Fc=class extends Mc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ic=class extends Mc{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=zc(n,t,g,y,r);i[p]=Lc(x,o,_,b,m)}return i}};function Lc(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Rc(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function zc(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Lc(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Rc(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Bc=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ac(t,this.TimeBufferType),this.values=Ac(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ac(e.times,Array),values:Ac(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),jc(e.settings)&&(n.settings={inTangents:Ac(e.settings.inTangents,Array),outTangents:Ac(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ic(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vn:t=this.InterpolantFactoryMethodDiscrete;break;case Hn:t=this.InterpolantFactoryMethodLinear;break;case Un:t=this.InterpolantFactoryMethodSmooth;break;case Wn:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vn;case this.InterpolantFactoryMethodLinear:return Hn;case this.InterpolantFactoryMethodSmooth:return Un;case this.InterpolantFactoryMethodBezier:return Wn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;jc(this.settings)&&(Vc(this.settings.inTangents,e),Vc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;jc(this.settings)&&(Hc(this.settings.inTangents,e),Hc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&rr(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Un,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,jc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Vc(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Hc(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Bc.prototype.ValueTypeName=``,Bc.prototype.TimeBufferType=Float32Array,Bc.prototype.ValueBufferType=Float32Array,Bc.prototype.DefaultInterpolation=Hn;var Uc=class extends Bc{constructor(e,t,n){super(e,t,n)}};Uc.prototype.ValueTypeName=`bool`,Uc.prototype.ValueBufferType=Array,Uc.prototype.DefaultInterpolation=Vn,Uc.prototype.InterpolantFactoryMethodLinear=void 0,Uc.prototype.InterpolantFactoryMethodSmooth=void 0;var Wc=class extends Bc{constructor(e,t,n,r){super(e,t,n,r)}};Wc.prototype.ValueTypeName=`color`;var Gc=class extends Bc{constructor(e,t,n,r){super(e,t,n,r)}};Gc.prototype.ValueTypeName=`number`;var Kc=class extends Mc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Vr.slerpFlat(i,0,a,c-o,a,c,s);return i}},qc=class extends Bc{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Kc(this.times,this.values,this.getValueSize(),e)}};qc.prototype.ValueTypeName=`quaternion`,qc.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends Bc{constructor(e,t,n){super(e,t,n)}};Jc.prototype.ValueTypeName=`string`,Jc.prototype.ValueBufferType=Array,Jc.prototype.DefaultInterpolation=Vn,Jc.prototype.InterpolantFactoryMethodLinear=void 0,Jc.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends Bc{constructor(e,t,n,r){super(e,t,n,r)}};Yc.prototype.ValueTypeName=`vector`;var Xc=class extends Li{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Zc=class extends Xc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Li.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Qc=new ui,$c=new U,el=new U,tl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=Ft,this.map=null,this.mapPass=null,this.matrix=new ui,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new ai(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;$c.setFromMatrixPosition(e.matrixWorld),t.position.copy($c),el.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(el),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Qc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Qc,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nl=new U,rl=new Vr,il=new U,al=class extends Li{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new ui,this.projectionMatrix=new ui,this.projectionMatrixInverse=new ui,this.coordinateSystem=tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nl,rl,il),il.x===1&&il.y===1&&il.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,rl,il.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(nl,rl,il),il.x===1&&il.y===1&&il.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,rl,il.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ol=new U,sl=new H,cl=new H,ll=class extends al{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ol.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ol.x,ol.y).multiplyScalar(-e/ol.z),ol.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ol.x,ol.y).multiplyScalar(-e/ol.z)}getViewSize(e,t){return this.getViewBounds(e,sl,cl),t.subVectors(cl,sl)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ul=class extends tl{constructor(){super(new ll(90,1,.5,500)),this.isPointLightShadow=!0}},dl=class extends Xc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ul}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},fl=class extends al{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pl=class extends tl{constructor(){super(new fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ml=class extends Xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Li.DEFAULT_UP),this.updateMatrix(),this.target=new Li,this.shadow=new pl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},hl=-90,gl=1,_l=class extends Li{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ll(hl,gl,e,t);r.layers=this.layers,this.add(r);let i=new ll(hl,gl,e,t);i.layers=this.layers,this.add(i);let a=new ll(hl,gl,e,t);a.layers=this.layers,this.add(a);let o=new ll(hl,gl,e,t);o.layers=this.layers,this.add(o);let s=new ll(hl,gl,e,t);s.layers=this.layers,this.add(s);let c=new ll(hl,gl,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},vl=class extends ll{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},yl=`\\[\\]\\.:\\/`,bl=RegExp(`[\\[\\]\\.:\\/]`,`g`),xl=`[^\\[\\]\\.:\\/]`,Sl=`[^`+yl.replace(`\\.`,``)+`]`,Cl=`((?:WC+[\\/:])*)`.replace(`WC`,xl),wl=`(WCOD+)?`.replace(`WCOD`,Sl),Tl=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,xl),El=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,xl),Dl=RegExp(`^`+Cl+wl+Tl+El+`$`),Ol=[`material`,`materials`,`bones`,`map`],kl=class{constructor(e,t,n){let r=n||Al.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Al=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(bl,``)}static parseTrackName(e){let t=Dl.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ol.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Al.Composite=kl,Al.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Al.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Al.prototype.GetterByBindingType=[Al.prototype._getValue_direct,Al.prototype._getValue_array,Al.prototype._getValue_arrayElement,Al.prototype._getValue_toArray],Al.prototype.SetterByBindingTypeAndVersioning=[[Al.prototype._setValue_direct,Al.prototype._setValue_direct_setNeedsUpdate,Al.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Al.prototype._setValue_array,Al.prototype._setValue_array_setNeedsUpdate,Al.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Al.prototype._setValue_arrayElement,Al.prototype._setValue_arrayElement_setNeedsUpdate,Al.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Al.prototype._setValue_fromArray,Al.prototype._setValue_fromArray_setNeedsUpdate,Al.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jl=new ui,Ml=class{constructor(e,t,n=0,r=1/0){this.ray=new Za(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new xi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):V(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return jl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jl),this}intersectObject(e,t=!0,n=[]){return Pl(e,this,n,t),n.sort(Nl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Pl(e[r],this,n,t);return n.sort(Nl),n}};function Nl(e,t){return e.distance-t.distance}function Pl(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Pl(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Fl(e,t,n,r){let i=Il(r);switch(n){case Jt:return e*t;case $t:return e*t/i.components*i.byteLength;case en:return e*t/i.components*i.byteLength;case tn:return e*t*2/i.components*i.byteLength;case nn:return e*t*2/i.components*i.byteLength;case Yt:return e*t*3/i.components*i.byteLength;case Xt:return e*t*4/i.components*i.byteLength;case rn:return e*t*4/i.components*i.byteLength;case an:case on:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case sn:case cn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case un:case fn:return Math.max(e,16)*Math.max(t,8)/4;case ln:case dn:return Math.max(e,8)*Math.max(t,8)/2;case pn:case mn:case gn:case _n:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case hn:case vn:case yn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Sn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Cn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case wn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Tn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case En:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Dn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case On:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case kn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case An:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case jn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Mn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Nn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pn:case Fn:case In:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ln:case Rn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case zn:case Bn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Il(e){switch(e){case Ft:case It:return{byteLength:1,components:1};case Rt:case Lt:case Ht:return{byteLength:2,components:1};case Ut:case Wt:return{byteLength:2,components:4};case Bt:case zt:case Vt:return{byteLength:4,components:1};case Kt:case qt:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Ll(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Rl(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var zl={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W}},envmap:{envMap:{value:null},envMapRotation:{value:new W},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0},uvTransform:{value:new W}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}}},Bl={basic:{uniforms:_c([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:zl.meshbasic_vert,fragmentShader:zl.meshbasic_frag},lambert:{uniforms:_c([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:zl.meshlambert_vert,fragmentShader:zl.meshlambert_frag},phong:{uniforms:_c([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zl.meshphong_vert,fragmentShader:zl.meshphong_frag},standard:{uniforms:_c([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zl.meshphysical_vert,fragmentShader:zl.meshphysical_frag},toon:{uniforms:_c([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new G(0)}}]),vertexShader:zl.meshtoon_vert,fragmentShader:zl.meshtoon_frag},matcap:{uniforms:_c([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:zl.meshmatcap_vert,fragmentShader:zl.meshmatcap_frag},points:{uniforms:_c([X.points,X.fog]),vertexShader:zl.points_vert,fragmentShader:zl.points_frag},dashed:{uniforms:_c([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zl.linedashed_vert,fragmentShader:zl.linedashed_frag},depth:{uniforms:_c([X.common,X.displacementmap]),vertexShader:zl.depth_vert,fragmentShader:zl.depth_frag},normal:{uniforms:_c([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:zl.meshnormal_vert,fragmentShader:zl.meshnormal_frag},sprite:{uniforms:_c([X.sprite,X.fog]),vertexShader:zl.sprite_vert,fragmentShader:zl.sprite_frag},background:{uniforms:{uvTransform:{value:new W},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zl.background_vert,fragmentShader:zl.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W}},vertexShader:zl.backgroundCube_vert,fragmentShader:zl.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zl.cube_vert,fragmentShader:zl.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zl.equirect_vert,fragmentShader:zl.equirect_frag},distance:{uniforms:_c([X.common,X.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zl.distance_vert,fragmentShader:zl.distance_frag},shadow:{uniforms:_c([X.lights,X.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:zl.shadow_vert,fragmentShader:zl.shadow_frag}};Bl.physical={uniforms:_c([Bl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new W},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W}}]),vertexShader:zl.meshphysical_vert,fragmentShader:zl.meshphysical_frag};var Vl={r:0,b:0,g:0},Hl=new ui,Ul=new W;Ul.set(-1,0,0,0,1,0,0,0,1);function Wl(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new q(new Vo(1,1,1),new wc({name:`BackgroundCubeMaterial`,uniforms:gc(Bl.backgroundCube.uniforms),vertexShader:Bl.backgroundCube.vertexShader,fragmentShader:Bl.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hl.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ul),l.material.toneMapped=Jr.getTransfer(i.colorSpace)!==Qn,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new lc(2,2),new wc({name:`BackgroundMaterial`,uniforms:gc(Bl.background.uniforms),vertexShader:Bl.background.vertexShader,fragmentShader:Bl.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Jr.getTransfer(i.colorSpace)!==Qn,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Vl,bc(e)),n.buffers.color.setClear(Vl.r,Vl.g,Vl.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Gl(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Kl(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ql(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&B(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Jl(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Wa,s=new W,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Yl=class extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Io(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vo(5,5,5),i=new wc({name:`CubemapFromEquirect`,uniforms:gc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Mt),new _l(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Xl=256,Zl=3,Ql=20,$l=256,eu=16,tu=3,nu=new U,ru=new G,iu=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _l(1,10,null),this._boxMesh=new q(new Vo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=nu}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(ru));let h=new _l(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Xl,Fr(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Xl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=au(e,!1,!1),n=Math.log2(e)-Zl;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=au(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=uu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=su(),this._integrationMaterial=cu());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/eu);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-tu)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/($l*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=lu());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function au(e,t,n){return new Yl(e,{minFilter:Pt,generateMipmaps:t,type:Ht,colorSpace:Xn,depthBuffer:n})}function ou(e,t,n){return new wc({name:e,uniforms:t,vertexShader:zl.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function su(){return ou(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$l}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function cu(){return ou(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:eu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function lu(){return ou(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ql}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function uu(){return ou(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function du(){return ou(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fu(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Yl(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new iu(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new iu(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function pu(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&lr(`WebGLRenderer: `+e+` extension not supported.`),t}}}function mu(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Oa:Da)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function hu(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function gu(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function _u(e,t,n){let r=new WeakMap,i=new ai;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ci(h,p,m,u);g.type=Vt,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new H(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function vu(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var yu={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function bu(e,t,n,r,i,a){let o=new si(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Ba;u.setAttribute(`position`,new K([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new K([0,2,0,0,2,0],2));let d=new Tc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new q(u,d),p=new fl(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new si(t,n,{type:Ht,depthBuffer:!1,stencilBuffer:!1}),c=new si(t,n,{type:Ht,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Ro(t,n),a===!0&&(l.format=Qt,l.type=Gt)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Jr.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=yu[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var xu=new ii,Su=new Ro(1,1),Cu=new zo(1),wu=new ci,Tu=new li,Eu=new Io,Du=[],Ou=[],ku=new Float32Array(16),Au=new Float32Array(9),ju=new Float32Array(4);function Mu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Du[i];if(a===void 0&&(a=new Float32Array(i),Du[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Nu(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Pu(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Fu(e,t){let n=Ou[t];n===void 0&&(n=new Int32Array(t),Ou[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Iu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Lu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nu(n,t))return;e.uniform2fv(this.addr,t),Pu(n,t)}}function Ru(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Nu(n,t))return;e.uniform3fv(this.addr,t),Pu(n,t)}}function zu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nu(n,t))return;e.uniform4fv(this.addr,t),Pu(n,t)}}function Bu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Nu(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Pu(n,t)}else{if(Nu(n,r))return;ju.set(r),e.uniformMatrix2fv(this.addr,!1,ju),Pu(n,r)}}function Vu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Nu(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Pu(n,t)}else{if(Nu(n,r))return;Au.set(r),e.uniformMatrix3fv(this.addr,!1,Au),Pu(n,r)}}function Hu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Nu(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Pu(n,t)}else{if(Nu(n,r))return;ku.set(r),e.uniformMatrix4fv(this.addr,!1,ku),Pu(n,r)}}function Uu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Wu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nu(n,t))return;e.uniform2iv(this.addr,t),Pu(n,t)}}function Gu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nu(n,t))return;e.uniform3iv(this.addr,t),Pu(n,t)}}function Ku(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nu(n,t))return;e.uniform4iv(this.addr,t),Pu(n,t)}}function qu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ju(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nu(n,t))return;e.uniform2uiv(this.addr,t),Pu(n,t)}}function Yu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nu(n,t))return;e.uniform3uiv(this.addr,t),Pu(n,t)}}function Xu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nu(n,t))return;e.uniform4uiv(this.addr,t),Pu(n,t)}}function Zu(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Qu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Zu(Su):xu,n.setTexture2D(t||a,i)}function $u(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Tu,i)}function ed(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Zu(Cu):Eu,n.setTextureCube(t||a,i)}function td(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||wu,i)}function nd(e){switch(e){case 5126:return Iu;case 35664:return Lu;case 35665:return Ru;case 35666:return zu;case 35674:return Bu;case 35675:return Vu;case 35676:return Hu;case 5124:case 35670:return Uu;case 35667:case 35671:return Wu;case 35668:case 35672:return Gu;case 35669:case 35673:return Ku;case 5125:return qu;case 36294:return Ju;case 36295:return Yu;case 36296:return Xu;case 35678:case 36198:case 36298:case 36306:case 35682:return Qu;case 35679:case 36299:case 36307:return $u;case 35680:case 36300:case 36308:case 36293:return ed;case 36289:case 36303:case 36311:case 36292:return td}}function rd(e,t){e.uniform1fv(this.addr,t)}function id(e,t){let n=Mu(t,this.size,2);e.uniform2fv(this.addr,n)}function ad(e,t){let n=Mu(t,this.size,3);e.uniform3fv(this.addr,n)}function od(e,t){let n=Mu(t,this.size,4);e.uniform4fv(this.addr,n)}function sd(e,t){let n=Mu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function cd(e,t){let n=Mu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ld(e,t){let n=Mu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ud(e,t){e.uniform1iv(this.addr,t)}function dd(e,t){e.uniform2iv(this.addr,t)}function fd(e,t){e.uniform3iv(this.addr,t)}function pd(e,t){e.uniform4iv(this.addr,t)}function md(e,t){e.uniform1uiv(this.addr,t)}function hd(e,t){e.uniform2uiv(this.addr,t)}function gd(e,t){e.uniform3uiv(this.addr,t)}function _d(e,t){e.uniform4uiv(this.addr,t)}function vd(e,t,n){let r=this.cache,i=t.length,a=Fu(n,i);Nu(r,a)||(e.uniform1iv(this.addr,a),Pu(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Zu(Su):xu;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function yd(e,t,n){let r=this.cache,i=t.length,a=Fu(n,i);Nu(r,a)||(e.uniform1iv(this.addr,a),Pu(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Tu,a[e])}function bd(e,t,n){let r=this.cache,i=t.length,a=Fu(n,i);Nu(r,a)||(e.uniform1iv(this.addr,a),Pu(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Zu(Cu):Eu;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function xd(e,t,n){let r=this.cache,i=t.length,a=Fu(n,i);Nu(r,a)||(e.uniform1iv(this.addr,a),Pu(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||wu,a[e])}function Sd(e){switch(e){case 5126:return rd;case 35664:return id;case 35665:return ad;case 35666:return od;case 35674:return sd;case 35675:return cd;case 35676:return ld;case 5124:case 35670:return ud;case 35667:case 35671:return dd;case 35668:case 35672:return fd;case 35669:case 35673:return pd;case 5125:return md;case 36294:return hd;case 36295:return gd;case 36296:return _d;case 35678:case 36198:case 36298:case 36306:case 35682:return vd;case 35679:case 36299:case 36307:return yd;case 35680:case 36300:case 36308:case 36293:return bd;case 36289:case 36303:case 36311:case 36292:return xd}}var Cd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nd(t.type)}},wd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sd(t.type)}},Td=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ed=/(\w+)(\])?(\[|\.)?/g;function Dd(e,t){e.seq.push(t),e.map[t.id]=t}function Od(e,t,n){let r=e.name,i=r.length;for(Ed.lastIndex=0;;){let a=Ed.exec(r),o=Ed.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Dd(n,l===void 0?new Cd(s,e,t):new wd(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Td(s),Dd(n,e)),n=e}}}var kd=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Od(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ad(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var jd=37297,Md=0;function Nd(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Pd=new W;function Fd(e){Jr._getMatrix(Pd,Jr.workingColorSpace,e);let t=`mat3( ${Pd.elements.map(e=>e.toFixed(4))} )`;switch(Jr.getTransfer(e)){case Zn:return[t,`LinearTransferOETF`];case Qn:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Id(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Nd(e.getShaderSource(t),r)}return i}function Ld(e,t){let n=Fd(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Rd={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function zd(e,t){let n=Rd[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Bd=new U;function Vd(){return Jr.getLuminanceCoefficients(Bd),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Bd.x.toFixed(4)}, ${Bd.y.toFixed(4)}, ${Bd.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Hd(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Gd).join(`
`)}function Ud(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Wd(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Gd(e){return e!==``}function Kd(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function qd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(e){return e.replace(Jd,Xd)}function Xd(e,t){let n=zl[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Yd(n)}var Zd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(e){return e.replace(Zd,$d)}function $d(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ef(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var tf={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function nf(e){return tf[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var rf={302:`ENVMAP_MODE_REFRACTION`};function af(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:rf[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var of={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function sf(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:of[e.combine]||`ENVMAP_BLENDING_NONE`}function cf(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=nf(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=af(n),d=sf(n),f=Hd(n),p=Ud(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Gd).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Gd).join(`
`),g.length>0&&(g+=`
`)):(h=[ef(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Gd).join(`
`),g=[ef(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:zl.tonemapping_pars_fragment,n.toneMapping===0?``:zd(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,zl.colorspace_pars_fragment,Ld(`linearToOutputTexel`,n.outputColorSpace),Vd(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Gd).join(`
`)),o=Yd(o),o=Kd(o,n),o=qd(o,n),s=Yd(s),s=Kd(s,n),s=qd(s,n),o=Qd(o),s=Qd(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Ad(i,i.VERTEX_SHADER,v),x=Ad(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Id(i,b,`vertex`),n=Id(i,x,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new kd(i,m),w=Wd(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,jd)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Md++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var lf=0,uf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new df(e),t.set(e,n)),n}},df=class{constructor(e){this.id=lf++,this.code=e,this.usedTimes=0}};function ff(e){return e===1030||e===37490||e===36285}function pf(e,t,n,r,i,a){let o=new xi,s=new uf,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Bl[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,ee=!!i.map,P=!!i.matcap,te=!!b,ne=te&&b.isPMREMTexture===!0,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,le=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=de&&!!i.anisotropyMap,be=fe&&!!i.clearcoatMap,xe=fe&&!!i.clearcoatNormalMap,Se=fe&&!!i.clearcoatRoughnessMap,Ce=pe&&!!i.diffuseRoughnessMap,F=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,I=!!i.specularMap,De=!!i.specularColorMap,L=!!i.specularIntensityMap,R=ve&&!!i.transmissionMap,Oe=ve&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,je=i.alphaTest>0,Me=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe=ne?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ie={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Jr.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ee,matcap:P,envMap:te,envMapMode:te&&b.mapping,envMapPMREM:ne,envMapMaxLod:ne?Fe.length-1:null,envMapSize:ne?Fe[0].width:null,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&ff(i.normalMap.format),metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:ye,clearcoat:fe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,diffuseRoughness:pe,diffuseRoughnessMap:Ce,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:F,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:I,specularColorMap:De,specularIntensityMap:L,transmission:ve,transmissionMap:R,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:Me,combine:i.combine,mapUv:ee&&p(i.map.channel),aoMapUv:re&&p(i.aoMap.channel),lightMapUv:ie&&p(i.lightMap.channel),bumpMapUv:ae&&p(i.bumpMap.channel),normalMapUv:oe&&p(i.normalMap.channel),displacementMapUv:se&&p(i.displacementMap.channel),emissiveMapUv:ce&&p(i.emissiveMap.channel),metalnessMapUv:le&&p(i.metalnessMap.channel),roughnessMapUv:ue&&p(i.roughnessMap.channel),anisotropyMapUv:ye&&p(i.anisotropyMap.channel),clearcoatMapUv:be&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:F&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(i.sheenRoughnessMap.channel),specularMapUv:I&&p(i.specularMap.channel),specularColorMapUv:De&&p(i.specularColorMap.channel),specularIntensityMapUv:L&&p(i.specularIntensityMap.channel),transmissionMapUv:R&&p(i.transmissionMap.channel),thicknessMapUv:Oe&&p(i.thicknessMap.channel),alphaMapUv:Ae&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(oe||de),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(ee||Ae),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ee&&i.map.isVideoTexture===!0&&Jr.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Jr.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Bl[t];n=xc.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new cf(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function mf(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function hf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _f(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||hf),r.length>1&&r.sort(t||gf),i.length>1&&i.sort(t||gf)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function vf(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new _f,e.set(t,[i])):n>=r.length?(i=new _f,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function yf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new U,color:new G};break;case`SpotLight`:n={position:new U,direction:new U,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function bf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var xf=0;function Sf(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Cf(e){let t=new yf,n=bf(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new ui,o=new ui;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Sf);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=xf++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function wf(e){let t=new Cf(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Tf(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new wf(e),t.set(n,[a])):r>=i.length?(a=new wf(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ef=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Df=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Of=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],kf=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Af=new ui,jf=new U,Mf=new U;function Nf(e,t,n){let r=new Eo,i=new H,a=new H,o=new ai,s=new Oc,c=new kc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new wc({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:Ef,fragmentShader:Df}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ba;m.setAttribute(`position`,new Ea(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new q(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){B(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new si(i.x,i.y,{format:tn,type:Ht,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ro(i.x,i.y,Vt),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Zt,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=kt,d.map.depthTexture.magFilter=kt}else l.isPointLight?(d.map=new Yl(i.x),d.map.depthTexture=new zo(i.x,Bt)):(d.map=new si(i.x,i.y),d.map.depthTexture=new Ro(i.x,i.y,Bt)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Zt,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Mt,d.map.depthTexture.magFilter=Mt):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=kt,d.map.depthTexture.magFilter=kt);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),jf.setFromMatrixPosition(l.matrixWorld),e.position.copy(jf),Mf.copy(e.position),Mf.add(Of[t]),e.up.copy(kf[t]),e.lookAt(Mf),e.updateMatrixWorld(),n.makeTranslation(-jf.x,-jf.y,-jf.z),Af.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Af,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new si(i.x,i.y,{format:tn,type:Ht}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Pf(e,t){function n(){let t=!1,n=new ai,r=null,i=new ai(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=dr[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=ee>=1);let te=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new ai().fromArray(re),oe=new ai().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),le(e.CULL_FACE),ge(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(N&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+M-1),te!==t&&(e.activeTexture(t),te=t)}function F(t,n,r){r===void 0&&(r=te===null?e.TEXTURE0+M-1:te);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(te!==r&&(e.activeTexture(r),te=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=ne[te];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function I(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function L(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function R(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Me(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Pe(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Fe(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Le(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,ne={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:F,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:Ae,texImage3D:je,pixelStorei:Ne,getParameter:Me,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:I,texSubImage3D:De,compressedTexSubImage2D:L,compressedTexSubImage3D:R,scissor:Pe,viewport:Fe,reset:Re}}function Ff(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new H,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):ir(`canvas`)}function v(e,t,n){let r=1,i=Oe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Zn:Jr.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),M(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),ee(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function M(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&N(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function N(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ee(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let P=0;function te(){P=0}function ne(){return P}function re(e){P=e}function ie(){let e=P;return e>=i.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),P+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(t,i){let a=r.get(t);if(t.isVideoTexture&&L(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{_e(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?_e(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ce(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?_e(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ve(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ue={[Et]:e.REPEAT,[Dt]:e.CLAMP_TO_EDGE,[Ot]:e.MIRRORED_REPEAT},de={[kt]:e.NEAREST,[At]:e.NEAREST_MIPMAP_NEAREST,[jt]:e.NEAREST_MIPMAP_LINEAR,[Mt]:e.LINEAR,[Nt]:e.LINEAR_MIPMAP_NEAREST,[Pt]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function pe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ue[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ue[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ue[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,de[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,de[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,fe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function me(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ae(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function he(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ge(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=he(n.start,r.width,4),c=he(t.start,r.width,4);n.start<=i+1&&a===c&&he(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function _e(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=me(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Jr.getPrimaries(Jr.workingColorSpace),r=o.colorSpace===``?null:Jr.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=R(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);pe(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===Qt,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ge(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=Fl(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Fl(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=Oe(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=Oe(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ve(t,o,s){if(o.image.length!==6)return;let c=me(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Jr.getPrimaries(Jr.workingColorSpace),r=o.colorSpace===``?null:Jr.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=R(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);pe(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===Qt,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=Oe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ye(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,I(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;De(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,I(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,I(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);De(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,I(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,I(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?le(i.depthTexture,0):oe(i.depthTexture,0);let u=c.__webglTexture,d=I(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Se(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)xe(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?xe(i.__webglFramebuffer[0],t,0):xe(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),be(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),be(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,i){let a=r.get(t);n!==void 0&&ye(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Se(t)}function F(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&De(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=I(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),be(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ye(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ye(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),pe(c,a),ye(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),pe(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ye(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ye(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Se(t)}function we(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Te=[];function Ee(t){if(t.samples>0){if(De(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Te.length=0,Te.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Te.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function I(e){return Math.min(i.maxSamples,e.samples)}function De(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function L(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function R(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Jr.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function Oe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ie,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=re,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=F,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=De,this.dispose=j}function If(e,t){function n(n,r=``){let i,a=Jr.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Lf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wc({vertexShader:Lf,fragmentShader:Rf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new lc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bf=class extends fr{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new zf,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new H,C=null,w=null,T=new ll;T.viewport=new ai;let E=new ll;E.viewport=new ai;let D=[T,E],O=new vl,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Bi,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Bi,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Bi,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Qt:Zt,a=_.stencil?Gt:Bt);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new si(d.textureWidth,d.textureHeight,{format:Xt,type:Ft,depthTexture:new Ro(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new si(f.framebufferWidth,f.framebufferHeight,{format:Xt,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function ee(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ee(O,i);for(let e=0;e<a.length;e++)ee(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),P(e,O,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=gr*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let te=null;function ne(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new ll,o.layers.enable(n),o.viewport=new ai,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Bo,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}te&&te(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let re=new Ll;re.setAnimationLoop(ne),this.setAnimationLoop=function(e){te=e},this.dispose=function(){}}},Vf=new ui,Hf=new W;Hf.set(-1,0,0,0,1,0,0,0,1);function Uf(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,bc(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Vf.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Hf),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Wf(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Gf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kf=null;function qf(){return Kf===null&&(Kf=new po(Gf,16,16,tn,Ht),Kf.name=`DFG_LUT`,Kf.minFilter=Mt,Kf.magFilter=Mt,Kf.wrapS=Dt,Kf.wrapT=Dt,Kf.generateMipmaps=!1,Kf.needsUpdate=!0),Kf}var Jf=class{constructor(e={}){let{canvas:t=ar(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ft}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([rn,nn,en]),g=new Set([Ft,Bt,Rt,Gt,Ut,Wt]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Yn;let j=0,M=0,N=null,ee=-1,P=null,te=new ai,ne=new ai,re=null,ie=new G(0),ae=0,oe=t.width,se=t.height,ce=1,le=null,ue=null,de=new ai(0,0,oe,se),fe=new ai(0,0,oe,se),pe=!1,me=new Eo,he=new Oo,ge=!1,_e=!1,ve=new ui,ye=new U,be=new ai,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ce(){return N===null?ce:1}let F=n;function we(e,n){return t.getContext(e,n)}let Te,Ee,I,De,L,R,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,qe,!1),t.addEventListener(`webglcontextrestored`,Je,!1),t.addEventListener(`webglcontextcreationerror`,Ye,!1),F===null){let t=`webgl2`;if(F=we(t,e),F===null)throw we(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ge()}catch(e){throw t.removeEventListener(`webglcontextlost`,qe,!1),t.removeEventListener(`webglcontextrestored`,Je,!1),t.removeEventListener(`webglcontextcreationerror`,Ye,!1),V(`WebGLRenderer: `+e.message),e}function Ge(){Te=new pu(F),Te.init(),He=new If(F,Te),Ee=new ql(F,Te,e,He),I=new Pf(F,Te),Ee.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),O=F.createFramebuffer(),k=F.createFramebuffer(),A=F.createFramebuffer(),De=new gu(F),L=new mf,R=new Ff(F,Te,I,L,Ee,He,De),Oe=new fu(T),ke=new Rl(F),Ue=new Gl(F,ke),Ae=new mu(F,ke,De,Ue),je=new vu(F,Ae,ke,Ue,De),ze=new _u(F,Ee,R),Ie=new Jl(L),Me=new pf(T,Oe,Te,Ee,Ue,Ie),Ne=new Uf(T,L),Pe=new vf,Fe=new Tf(Te),Re=new Wl(T,Oe,I,je,p,s),Le=new Nf(T,je,Ee),We=new Wf(F,De,Ee,I),Be=new Kl(F,Te,De),Ve=new hu(F,Te,De),De.programs=Me.programs,T.capabilities=Ee,T.extensions=Te,T.properties=L,T.renderLists=Pe,T.shadowMap=Le,T.state=I,T.info=De}m!==1009&&(w=new bu(m,t.width,t.height,o,r,i));let Ke=new Bf(T,F);this.xr=Ke,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(e){e!==void 0&&(ce=e,this.setSize(oe,se,!1))},this.getSize=function(e){return e.set(oe,se)},this.setSize=function(e,n,r=!0){Ke.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(oe=e,se=n,t.width=Math.floor(e*ce),t.height=Math.floor(n*ce),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(oe*ce,se*ce).floor()},this.setDrawingBufferSize=function(e,n,r){oe=e,se=n,ce=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(te)},this.getViewport=function(e){return e.copy(de)},this.setViewport=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),I.viewport(te.copy(de).multiplyScalar(Ce()).round())},this.getScissor=function(e){return e.copy(fe)},this.setScissor=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),I.scissor(ne.copy(fe).multiplyScalar(Ce()).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(e){I.setScissorTest(pe=e)},this.setOpaqueSort=function(e){le=e},this.setTransparentSort=function(e){ue=e},this.getClearColor=function(e){return e.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Re.getClearColor(),r=Re.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferiv(F.COLOR,0,v))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,qe,!1),t.removeEventListener(`webglcontextrestored`,Je,!1),t.removeEventListener(`webglcontextcreationerror`,Ye,!1),Re.dispose(),Pe.dispose(),Fe.dispose(),R.dispose(),L.dispose(),Oe.dispose(),je.dispose(),Ae.dispose(),Ue.dispose(),We.dispose(),Me.dispose(),Ke.dispose(),Ke.removeEventListener(`sessionstart`,nt),Ke.removeEventListener(`sessionend`,z),rt.stop()};function qe(e){e.preventDefault(),sr(`WebGLRenderer: Context Lost.`),E=!0}function Je(){sr(`WebGLRenderer: Context Restored.`),E=!1;let e=De.autoReset,t=Le.enabled,n=Le.autoUpdate,r=Le.needsUpdate,i=Le.type;Ge(),De.autoReset=e,Le.enabled=t,Le.autoUpdate=n,Le.needsUpdate=r,Le.type=i}function Ye(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Xe(e){let t=e.target;t.removeEventListener(`dispose`,Xe),Ze(t)}function Ze(e){Qe(e),L.remove(e)}function Qe(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Me.releaseProgram(e)}),e.isShaderMaterial&&Me.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=xe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=mt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ae.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ue.setup(i,r,s,n,c);let h,g=Be;if(c!==null&&(h=ke.get(c),g=Ve,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ce()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ce()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Te.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ke.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function $e(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ge===!0&&Ie.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ut(e,t,r),e.side=0,e.needsUpdate=!0,ut(e,t,r),e.side=2):ut(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Fe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),_e=this.localClippingEnabled,ge=Ie.init(this.clippingPlanes,_e),ge===!0&&Ie.setGlobalState(this.clippingPlanes,t),D!==null&&Le.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];$e(o,n,t,e),r.add(o)}else $e(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Te.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let et=null;function tt(e){et&&et(e)}function nt(){rt.stop()}function z(){rt.start()}let rt=new Ll;rt.setAnimationLoop(tt),typeof self<`u`&&rt.setContext(self),this.setAnimationLoop=function(e){et=e,Ke.setAnimationLoop(e),e===null?rt.stop():rt.start()},Ke.addEventListener(`sessionstart`,nt),Ke.addEventListener(`sessionend`,z),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ke.enabled===!0&&Ke.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(t),t=Ke.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Fe.get(e,C.length),x.init(t),x.state.textureUnits=R.getTextureUnits(),C.push(x),ve.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?he.setFromArrayCamera(t):me.setFromProjectionMatrix(ve,tr,t.reversedDepth),_e=this.localClippingEnabled,ge=Ie.init(this.clippingPlanes,_e),b=Pe.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,Ke.enabled===!0&&Ke.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&it(e,t,-1/0,T.sortObjects)}it(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(le,ue),Se=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,Se&&Re.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),ge===!0&&Ie.beginShadows();let i=x.state.shadowsArray;if(Le.render(i,e,t),ge===!0&&Ie.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ot(n,r,e,a)}Se&&Re.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];at(b,e,n,n.viewport)}}else r.length>0&&ot(n,r,e,t),Se&&Re.render(e),at(b,e,t)}N!==null&&M===0&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Ue.resetDefaultState(),ee=-1,P=null,C.pop(),C.length>0?(x=C[C.length-1],R.setTextureUnits(x.state.textureUnits),ge===!0&&Ie.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function it(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?he:me;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&be.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ve);let i=je.update(e),a=e.material;a.visible&&b.push(e,i,a,n,be.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?he:me;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=je.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),be.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),be.copy(e.boundingSphere.center)),be.applyMatrix4(e.matrixWorld).applyMatrix4(ve)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,be.z,s,t)}}else a.visible&&b.push(e,i,a,n,be.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)it(i[e],t,n,r)}function at(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ge===!0&&Ie.setGlobalState(T.clippingPlanes,n),r&&I.viewport(te.copy(r)),i.length>0&&st(i,t,n),a.length>0&&st(a,t,n),o.length>0&&st(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function ot(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Te.has(`EXT_color_buffer_half_float`)||Te.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new si(1,1,{generateMipmaps:!0,type:e?Ht:Ft,minFilter:Pt,samples:Math.max(4,Ee.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jr.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||te;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ie),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),Se&&Re.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ge===!0&&Ie.setGlobalState(T.clippingPlanes,r),st(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),Te.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),T.toneMapping=u}function st(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ct(o,t,n,s,l,c)}}function ct(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function lt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function ut(e,t,n){t.isScene!==!0&&(t=xe);let r=L.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Me.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Me.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Oe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Xe),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return pt(e,s),d}else s.uniforms=Me.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Me.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ie.uniform),pt(e,s),r.needsLights=gt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=lt(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function dt(e,t,n,r,i){let a=L.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=ut(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function ft(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=kd.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function pt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function mt(e,t,n,r,i){t.isScene!==!0&&(t=xe),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Jr.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Oe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),b=x.state.lights;if(ge===!0&&(_e===!0||e!==P)){let t=e===P&&r.id===ee;Ie.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ie.numPlanes||v.numIntersection!==Ie.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===lt(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?dt(r,t,i,s,h):ut(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(I.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==ee&&(ee=r.id,O=!0),E||P!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(F,`projectionMatrix`,e.projectionMatrix),A.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(F,ye.setFromMatrixPosition(e.matrixWorld)),Ee.logarithmicDepthBuffer&&A.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),P!==e&&(P=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(F,`sunShadowMap`,b.state.sunShadowMap,R),b.state.directionalShadowMap.length>0&&A.setValue(F,`directionalShadowMap`,b.state.directionalShadowMap,R),b.state.spotShadowMap.length>0&&A.setValue(F,`spotShadowMap`,b.state.spotShadowMap,R),b.state.pointShadowMap.length>0&&A.setValue(F,`pointShadowMap`,b.state.pointShadowMap,R)),i.isSkinnedMesh){A.setOptional(F,i,`bindMatrix`),A.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(A.setOptional(F,i,`batchingTexture`),A.setValue(F,`batchingTexture`,i._matricesTexture,R),A.setOptional(F,i,`batchingIdTexture`),A.setValue(F,`batchingIdTexture`,i._indirectTexture,R),A.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0)&&ze.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=qf()),O){if(A.setValue(F,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ht(j,k),a&&r.fog===!0&&Ne.refreshFogUniforms(j,a),Ne.refreshMaterialUniforms(j,r,ce,se,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}kd.upload(F,ft(v),j,R)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(kd.upload(F,ft(v),j,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(F,`center`,i.center),A.setValue(F,`modelViewMatrix`,i.modelViewMatrix),A.setValue(F,`normalMatrix`,i.normalMatrix),A.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];We.update(n,w),We.bind(n,w)}}return w}function ht(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function gt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,I.viewport(te),I.scissor(ne),I.setScissorTest(re),ee=-1;return}if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else te.copy(de).multiplyScalar(ce).floor(),ne.copy(fe).multiplyScalar(ce).floor(),re=pe;if(n!==0&&(r=O),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(te),I.scissor(ne),I.setScissorTest(re),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ee=-1};function _t(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ee.textureFormatReadable(e.format),t.__typeReadable=Ee.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=_t(o);if(u.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,He.convert(c),He.convert(l),a)}finally{let e=N===null?null:L.get(N).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=_t(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,He.convert(l),He.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=N===null?null:L.get(N).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ur(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=He.convert(t.format),_=He.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,k),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,I.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Jr._getDrawingBufferColorSpace(e),t.unpackColorSpace=Jr._getUnpackColorSpace()}},Yf=class extends qi{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new Vo;e.deleteAttribute(`uv`);let t=new Y({side:1}),n=new Y,r=new dl(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new q(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new So(e,n,6),o=new Li;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new q(e,Xf(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new q(e,Xf(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new q(e,Xf(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new q(e,Xf(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new q(e,Xf(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new q(e,Xf(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Xf(e){return new Dc({color:0,emissive:16777215,emissiveIntensity:e})}var Zf=(e,t)=>{let n=document.createElement(`canvas`);return n.width=e,n.height=t,{c:n,ctx:n.getContext(`2d`)}},Qf=e=>{let t=new Lo(e);return t.colorSpace=Yn,t.anisotropy=4,t};function $f(e,t,n,r,i,a,o=1){let s=o,c=()=>(s=s*16807%2147483647,s/2147483647);for(let o=0;o<a;o++){e.fillStyle=c()<.5?r:i,e.globalAlpha=.18+c()*.22;let a=c()*t,o=c()*n;e.fillRect(a,o,1+c()*2,1+c()*2)}e.globalAlpha=1}function ep(e,t,n,r,i){let a=5089,o=()=>(a=a*16807%2147483647,a/2147483647);e.lineCap=`round`;for(let a=0;a<t*n/11;a++){let a=o()*t,s=o()*n,c=Math.sin(a*.16+Math.sin(s*.19)*2)+Math.cos(s*.17),l=2+o()*4;e.lineWidth=.75+o()*1.1,e.strokeStyle=o()+c*.22>.5?r:i,e.globalAlpha=.1+o()*.24,e.beginPath(),e.moveTo(a,s),e.quadraticCurveTo(a+(c+.6)*l*.24,s+l*.48,a+c*l*.37,s+l),e.stroke()}e.globalAlpha=1}function tp(e,t){e.save(),e.lineCap=`round`,e.lineWidth=4,e.strokeStyle=`rgba(103,66,43,0.52)`,e.stroke(t),e.setLineDash([3,4]),e.lineWidth=1.7,e.strokeStyle=`#efd4ae`,e.stroke(t),e.restore()}var np=null;function rp(e,t){if(t)return new Y({map:e,roughness:.98});if(!np){let{c:e,ctx:t}=Zf(256,256);t.fillStyle=`#808080`,t.fillRect(0,0,e.width,e.height),ep(t,e.width,e.height,`#e8e8e8`,`#181818`),np=new Lo(e),np.anisotropy=4}return new Ec({map:e,roughness:.96,bumpMap:np,bumpScale:55e-5,sheen:.88,sheenColor:new G(14203024),sheenRoughness:.88})}var ip=.25;function ap(e,t,n,r,i,a=!1){let{c:o,ctx:s}=Zf(512,256);if(s.fillStyle=e,s.fillRect(0,0,512,256),i){s.strokeStyle=i,s.lineCap=`round`;for(let e=-3;e<=3;e++){s.lineWidth=9-Math.abs(e);let t=512*ip+e*18;s.beginPath(),s.moveTo(t,20.48),s.lineTo(t+e*3,76.8),s.stroke()}for(let e of[-1,1])for(let t=0;t<3;t++){s.lineWidth=7;let n=512*ip+e*(81.92+t*18);s.beginPath(),s.moveTo(n,92.16+t*10),s.lineTo(n+e*26,107.52+t*12),s.stroke()}}if(a){ep(s,512,256,t,n);let e=new Path2D;e.moveTo(369,39),e.bezierCurveTo(388,78,383,173,374,219),tp(s,e);for(let e of[-1,1]){let t=512*ip+e*99,n=new Path2D;n.moveTo(t-13,48),n.quadraticCurveTo(t,67,t+13,49),tp(s,n)}}else $f(s,512,256,t,n,9e3);return r?.(s,512*ip,133.12,1),Qf(o)}function op(e,t,n,r,i=!1){let{c:a,ctx:o}=Zf(256,256);if(o.fillStyle=e,o.fillRect(0,0,256,256),r){o.fillStyle=r;for(let e=18;e<256;e+=46)o.globalAlpha=.85,o.fillRect(0,e,256,14);o.globalAlpha=1}return i?ep(o,256,256,t,n):$f(o,256,256,t,n,4500,7),Qf(a)}var sp=(e,t,n,r)=>{e.strokeStyle=`#1d2a15`,e.lineWidth=4*r,e.lineCap=`round`,e.beginPath(),e.moveTo(t-30*r,n-8*r),e.quadraticCurveTo(t,n+16*r,t+30*r,n-8*r),e.stroke(),e.lineWidth=2*r;for(let i of[-.7,-.35,0,.35,.7]){let a=t+i*30*r,o=n-8*r+(1-i*i)*12*r;e.beginPath(),e.moveTo(a,o-4*r),e.lineTo(a,o+4*r),e.stroke()}e.fillStyle=`rgba(255,150,140,0.35)`;for(let i of[-1,1])e.beginPath(),e.ellipse(t+i*44*r,n-2*r,12*r,7*r,0,0,Math.PI*2),e.fill()},cp=e=>(t,n,r,i)=>{let a=`#221a14`;if(e){t.fillStyle=`#d8262b`,t.fillRect(n-120*i,r-140*i,240*i,140*i),t.beginPath(),t.ellipse(n,r-6*i,120*i,40*i,0,0,Math.PI),t.fill(),t.fillStyle=`#1f3fae`;for(let e of[-1,1])t.beginPath(),t.moveTo(n+e*8*i,r-20*i),t.quadraticCurveTo(n+e*40*i,r-70*i,n+e*96*i,r-54*i),t.quadraticCurveTo(n+e*70*i,r-36*i,n+e*86*i,r-8*i),t.quadraticCurveTo(n+e*50*i,r-18*i,n+e*8*i,r-20*i),t.fill();t.fillStyle=`#ffffff`,t.beginPath();for(let e=0;e<10;e++){let a=-Math.PI/2+e*Math.PI/5,o=(e%2?9:22)*i;t.lineTo(n+Math.cos(a)*o,r-88*i+Math.sin(a)*o)}t.fill(),t.strokeStyle=`#ffffff`,t.lineWidth=4*i;for(let e of[-1,1])t.beginPath(),t.ellipse(n+e*34*i,r-26*i,22*i,16*i,0,0,Math.PI*2),t.stroke()}for(let o of[-1,1]){let s=n+o*34*i,c=r-26*i;t.fillStyle=`#ffffff`,t.beginPath(),t.ellipse(s,c,15*i,11*i,0,0,Math.PI*2),t.fill(),t.fillStyle=a,t.beginPath(),t.ellipse(s+o*1*i,c+3*i,7*i,6*i,0,0,Math.PI*2),t.fill(),t.fillStyle=e?`#d8262b`:`#d9b48a`,t.fillRect(s-16*i,c-12*i,32*i,9*i),t.strokeStyle=a,t.lineWidth=3*i,t.beginPath(),t.moveTo(s-15*i,c-3*i),t.lineTo(s+15*i,c-3*i),t.stroke()}t.fillStyle=a,t.beginPath(),t.moveTo(n-6*i,r-2*i),t.lineTo(n+6*i,r-2*i),t.lineTo(n,r+5*i),t.fill(),t.strokeStyle=a,t.lineWidth=2.5*i,t.beginPath(),t.moveTo(n,r+5*i),t.lineTo(n,r+10*i),t.moveTo(n-9*i,r+13*i),t.quadraticCurveTo(n-4*i,r+9*i,n,r+10*i),t.quadraticCurveTo(n+4*i,r+9*i,n+9*i,r+13*i),t.stroke(),t.lineWidth=2*i;for(let e of[-1,1])for(let a of[-1,1])t.beginPath(),t.moveTo(n+e*40*i,r+2*i+a*5*i),t.lineTo(n+e*76*i,r+a*9*i),t.stroke()},lp=new Map;function up(e,t){let n=`${e}:${t}`,r=lp.get(n);if(r)return r;let i=(e,t=.95)=>new Y({map:e,roughness:t,metalness:0}),a;return a=e===`frog`?{fabric:i(op(`#5c7a2c`,`#7b9a43`,`#3f561c`)),head:i(ap(`#5c7a2c`,`#7b9a43`,`#3f561c`,sp)),extra:[]}:e===`cat`?{fabric:rp(op(`#d3ae83`,`#fff0cd`,`#99744e`,`#a37751`,!0),t),head:rp(ap(`#d9b48a`,`#fff0cf`,`#947052`,cp(!1),`#976843`,!0),t),extra:[]}:{fabric:i(op(`#d9b48a`,`#ead0ad`,`#b98f62`,`#9a6b42`)),head:i(ap(`#d9b48a`,`#ead0ad`,`#b98f62`,cp(!0))),extra:[]},lp.set(n,a),a}var dp=(()=>{let e=null;return()=>{if(e)return e;let{c:t,ctx:n}=Zf(128,64);return n.fillStyle=`#f7f5ef`,n.fillRect(0,0,128,64),$f(n,128,64,`#ffffff`,`#d9d6cc`,600,3),n.fillStyle=`#141414`,n.beginPath(),n.ellipse(128*ip,26,9,9,0,0,Math.PI*2),n.fill(),n.fillStyle=`#ffffff`,n.beginPath(),n.arc(128*ip-3,23,2.5,0,Math.PI*2),n.fill(),e=new Y({map:Qf(t),roughness:.8}),e}})(),fp=e=>{let t=new bi(e.lean??0,0,e.tilt??0,`ZXY`);return new Vr().setFromEuler(t)};function pp(e,t,n,r){let i=t.parts[n],a=up(e,r),o=new Ri,s=r?14:22;if(i.kind===`ball`){let e=new q(new pc(i.r,s+4,s-4),i.name===`head`?a.head:a.fabric);o.add(e)}else{let e=new q(new Ho(i.r,i.half*2,r?5:7,s),a.fabric);e.quaternion.copy(fp(i)),o.add(e)}let c=(e,t,n)=>new U(e-i.pos.x,t-i.pos.y,n-i.pos.z);if(i.name===`head`&&e===`frog`)for(let e of i.extra??[]){let t=new q(new pc(e.r*1.05,s,s-8),dp());t.position.copy(c(e.pos.x,e.pos.y,e.pos.z)),t.rotation.x=-.35,o.add(t);let n=new q(new mc(e.r*.95,e.r*.22,6,s),a.fabric);n.position.copy(c(e.pos.x,e.pos.y-.004,e.pos.z-.002)),n.rotation.x=Math.PI/2+.25,o.add(n)}if(i.name===`head`&&e!==`frog`){for(let t of i.extra??[]){let n=new q(new Wo(t.r*1.25,t.r*2.4,r?3:4),e===`mask`?new Y({color:14165547,roughness:.85}):a.fabric);if(n.position.copy(c(t.pos.x,t.pos.y+.006,t.pos.z)),n.rotation.set(.1,Math.PI/4,Math.sign(t.pos.x)*-.25),o.add(n),e===`cat`){let e=new q(new Uo(t.r*.6,3),new Y({color:15771034,roughness:.9}));e.position.copy(c(t.pos.x,t.pos.y+.004,t.pos.z+t.r*.55)),e.rotation.set(-.1,0,Math.PI/2+Math.sign(t.pos.x)*-.25),o.add(e)}}let t=new Y({color:1447446,roughness:.35,metalness:.4}),n=new Y({color:16777215,roughness:.05,transparent:!0,opacity:.18,depthWrite:!1}),l=i.r*.93,u=.012;for(let e of[-1,1]){let r=new q(new mc(.0145,.0016,6,s+6),t);r.position.set(e*.019,u,l),o.add(r);let i=new q(new Uo(.0142,s),n);i.position.set(e*.019,u,l+5e-4),o.add(i);let a=new q(new J(.0012,.0012,.03,5),t);a.rotation.x=Math.PI/2,a.position.set(e*.034,u,l-.016),o.add(a)}let d=new q(new J(.0013,.0013,.009,5),t);d.rotation.z=Math.PI/2,d.position.set(0,.014,l+.002),o.add(d)}if(i.name===`body`){if(e===`frog`){let e=new Y({map:op(`#f1efe6`,`#ffffff`,`#d7d3c4`),roughness:.95,side:2}),t=new q(new J(i.r*1.08,i.r*1.35,.06,s,1,!0,Math.PI*.15,Math.PI*1.7),e);t.position.set(0,.025,-.002),o.add(t);let{c:n,ctx:r}=Zf(64,64);for(let e=0;e<8;e++)for(let t=0;t<8;t++)r.fillStyle=(t+e)%2?`#1a1a1a`:`#f4f4f4`,r.fillRect(t*8,e*8,8,8);let a=new Y({map:Qf(n),roughness:.8});for(let e of[-1,1]){let t=new q(new Wo(.008,.016,4),a);t.rotation.z=e*Math.PI/2,t.position.set(e*.009,.044,i.r*.98),o.add(t)}let c=new q(new pc(.004,8,6),a);c.position.set(0,.044,i.r*1.02),o.add(c)}else if(e===`cat`){let{c:e,ctx:t}=Zf(256,64);t.fillStyle=`#8c6239`,t.fillRect(0,0,256,64);for(let e=0;e<256;e+=8)t.fillStyle=`rgba(0,0,0,0.18)`,t.fillRect(e,0,3,64),t.fillStyle=`rgba(255,255,255,0.08)`,t.fillRect(e+4,0,2,64);t.fillStyle=`rgba(0,0,0,0.25)`,t.fillRect(0,0,256,4),t.fillRect(0,60,256,4);let n=new q(new J(i.r*1.07,i.r*1.07,.045,s+6,1,!0),new Y({map:Qf(e),roughness:.95}));n.position.y=-.004,o.add(n)}else{let e=new q(new J(i.r*1.06,i.r*1.06,.022,s+6,1,!0),new Y({color:2047918,roughness:.5,metalness:.2}));e.position.y=-.006,o.add(e);let t=new q(new J(.017,.017,.004,8),new Y({color:14278116,roughness:.25,metalness:.9}));t.rotation.x=Math.PI/2,t.position.set(0,-.006,i.r*1.07),o.add(t);let{c:n,ctx:r}=Zf(64,64);r.clearRect(0,0,64,64),r.fillStyle=`#d8262b`,r.beginPath();for(let e=0;e<10;e++){let t=-Math.PI/2+e*Math.PI/5,n=e%2?11:26;r.lineTo(32+Math.cos(t)*n,34+Math.sin(t)*n)}r.fill();let a=new q(new lc(.022,.022),new Y({map:Qf(n),transparent:!0,roughness:.5}));a.position.set(0,-.006,i.r*1.07+.0025),o.add(a)}}return o}var mp=e=>{let t=e.shape,n=c[t.type===`plush`?t.model:`frog`];return{look:e.plush??`frog`,model:n}};function hp(e,t){let{look:n,model:r}=mp(e);return r.parts.map((e,i)=>pp(n,r,i,t))}function gp(e,t){let{look:n,model:r}=mp(e),i=new Ri;return r.parts.forEach((e,a)=>{let o=pp(n,r,a,t);o.position.set(e.pos.x,e.pos.y,e.pos.z),i.add(o)}),i.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),i}var _p=new U;function vp(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;_p.copy(t),_p[r]=0,_p.normalize();let l=.5*o/(o+s),u=1-_p.angleTo(e)/c;return Math.sign(_p[n])===1?u*l:s/(o+s)+l+l*(1-u)}var yp=class e extends Vo{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new U,c=new U,l=new U(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new U,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=vp(m,c,`z`,`y`,i,n),f[a+1]=1-vp(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-vp(m,c,`z`,`y`,i,n),f[a+1]=1-vp(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-vp(m,c,`x`,`z`,i,e),f[a+1]=vp(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-vp(m,c,`x`,`z`,i,e),f[a+1]=1-vp(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-vp(m,c,`x`,`y`,i,e),f[a+1]=1-vp(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=vp(m,c,`x`,`y`,i,e),f[a+1]=1-vp(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function bp(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Ba;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=xp(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=xp(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function xp(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Ea(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Sp=`#17121a`,Cp=`"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif`,wp=`"Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif`,Tp=new WeakMap;function Ep(e,t){Tp.set(e,t)}function Dp(e,t,n,r,i,a){let o=Math.min(i/t.naturalWidth,a/t.naturalHeight),s=t.naturalWidth*o,c=t.naturalHeight*o;e.drawImage(t,n-s/2,r-c,s,c)}var Op={stance:{head:[.02,.935],neck:[.012,.862],sl:[-.118,.838],sr:[.132,.822],el:[-.175,.705],hl:[-.05,.868],er:[.2,.672],hr:[.115,.548],pl:[-.052,.522],pr:[.078,.5],kl:[-.1,.268],kr:[.142,.258],fl:[-.175,0],fr:[.2,0]},kneel:{head:[-.01,.705],neck:[-.004,.635],sl:[-.125,.612],sr:[.122,.6],el:[-.215,.565],hl:[-.335,.655],er:[.168,.468],hr:[.115,.352],pl:[-.055,.335],pr:[.065,.33],kl:[-.175,.31],kr:[.175,.045],fl:[-.15,0],fr:[.325,.03],top:.84},cape:{head:[0,.935],neck:[0,.862],sl:[-.126,.832],sr:[.126,.832],el:[-.245,.805],hl:[-.365,.845],er:[.158,.69],hr:[.045,.632],pl:[-.06,.5],pr:[.06,.5],kl:[-.075,.262],kr:[.085,.262],fl:[-.1,0],fr:[.125,0]},charge:{head:[0,.805],neck:[0,.732],sl:[-.142,.704],sr:[.142,.704],el:[-.212,.58],hl:[-.132,.492],er:[.212,.58],hr:[.132,.492],pl:[-.07,.402],pr:[.07,.402],kl:[-.205,.245],kr:[.205,.245],fl:[-.245,0],fr:[.245,0],top:.94},kick:{head:[-.19,.865],neck:[-.148,.802],sl:[-.21,.74],sr:[-.045,.802],el:[-.31,.665],hl:[-.245,.585],er:[.04,.868],hr:[.135,.925],pl:[-.04,.505],pr:[.05,.552],kl:[-.16,.36],kr:[.205,.512],fl:[-.06,.235],fr:[.385,.452],top:1},lift:{head:[0,.8],neck:[0,.732],sl:[-.145,.716],sr:[.145,.716],el:[-.2,.845],hl:[-.135,.952],er:[.2,.845],hr:[.135,.952],pl:[-.072,.42],pr:[.072,.42],kl:[-.135,.222],kr:[.135,.222],fl:[-.165,0],fr:[.165,0],top:1.3},flex:{head:[0,.9],neck:[0,.83],sl:[-.172,.79],sr:[.172,.79],el:[-.275,.8],hl:[-.205,.925],er:[.275,.8],hr:[.205,.925],pl:[-.076,.472],pr:[.076,.472],kl:[-.112,.25],kr:[.112,.25],fl:[-.145,0],fr:[.145,0],top:1.02},guard:{head:[.02,.862],neck:[.02,.792],sl:[-.142,.762],sr:[.172,.752],el:[-.165,.632],hl:[-.082,.762],er:[.225,.632],hr:[.152,.742],pl:[-.062,.452],pr:[.082,.452],kl:[-.135,.242],kr:[.152,.232],fl:[-.185,0],fr:[.205,0],top:.99},smash:{head:[-.065,.625],neck:[-.045,.562],sl:[-.175,.545],sr:[.105,.562],el:[-.228,.385],hl:[-.168,.175],er:[.225,.605],hr:[.305,.725],pl:[-.02,.342],pr:[.105,.342],kl:[-.145,.225],kr:[.245,.165],fl:[-.065,0],fr:[.345,0],top:.84}};function kp(e,t,n,r,i,a,o=.25,s=!0){let c=n[0]-t[0],l=n[1]-t[1],u=Math.hypot(c,l)||1e-6,d=-l/u,f=c/u,p=(t[0]+n[0])/2,m=(t[1]+n[1])/2,h=(r+i)/2*(1+o);e.beginPath(),e.moveTo(t[0]+d*r,t[1]+f*r),e.quadraticCurveTo(p+d*h*1.15,m+f*h*1.15,n[0]+d*i,n[1]+f*i),e.arc(n[0],n[1],i,Math.atan2(f,d),Math.atan2(-f,-d),!0),e.quadraticCurveTo(p-d*h*1.15,m-f*h*1.15,t[0]-d*r,t[1]-f*r),e.arc(t[0],t[1],r,Math.atan2(-f,-d),Math.atan2(f,d),!0),e.closePath(),e.fillStyle=a,e.fill(),e.stroke(),s&&(e.save(),e.clip(),e.strokeStyle=`rgba(20,10,30,0.22)`,e.lineWidth=h*.9,e.beginPath(),e.moveTo(t[0]-d*r*.9+Math.abs(d)*.004,t[1]-f*r*.9),e.quadraticCurveTo(p-d*h*1.1,m-f*h*1.1,n[0]-d*i*.9,n[1]-f*i*.9),e.stroke(),e.restore())}var Ap=(e,t,n,r=!0)=>{e.beginPath(),t.forEach((t,n)=>n?e.lineTo(t[0],t[1]):e.moveTo(t[0],t[1])),e.closePath(),e.fillStyle=n,e.fill(),r&&e.stroke()},jp=(e,t,n,r=Sp)=>{e.save(),e.lineWidth=n,e.strokeStyle=r,e.beginPath(),t.forEach((t,n)=>n?e.lineTo(t[0],t[1]):e.moveTo(t[0],t[1])),e.stroke(),e.restore()},Mp=(e,t,n=.5)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n];function Np(e,t,n,r,i){let a=Op[t.pose],o=i/(a.top??1.02);e.save(),e.translate(n,r),e.scale(o,-o),e.lineJoin=`round`,e.lineCap=`round`,e.strokeStyle=Sp;let s=.011;e.lineWidth=s;let c=t.line===`muscle`?1.42:t.line===`aura`?1.16:.92,l=t.skin,u=z(t.skin,-.22),d=t.line===`pose`?t.top:l,f=t.bottom,p={arm:.036*c,fore:.031*c,hand:.03*(.8+c*.22),thigh:.056*(.7+c*.3),calf:.04*(.75+c*.25),foot:.03};if(t.line===`aura`&&t.aura){let n=Mp(a.neck,Mp(a.pl,a.pr),.55);for(let[r,i]of[[1,z(t.aura,.1)],[.72,z(t.aura,.55)]]){e.beginPath();for(let t=0;t<=26;t++){let i=t/26*Math.PI*2+Math.PI/2,a=Math.max(0,Math.sin(i)),o=(.3+.2*a+(t%2?.1+.16*a:0))*r,s=n[0]+Math.cos(i)*o*.9,c=n[1]+Math.sin(i)*o*1.15+.05;t?e.lineTo(s,c):e.moveTo(s,c)}e.closePath(),e.globalAlpha=r===1?.55:.75,e.fillStyle=i,e.fill(),e.globalAlpha=1}}if(t.cape){let n=t.cape;Ap(e,[[a.sl[0]-.01,a.sl[1]+.02],[a.sr[0]+.01,a.sr[1]+.02],[a.sr[0]+.16,.42],[a.sr[0]+.24,.1],[.12,.16],[.02,.06],[-.1,.17],[a.hl[0]+.02,.12],[a.hl[0]-.04,.5],[a.hl[0],a.hl[1]-.02],[a.el[0],a.el[1]+.03]],n),jp(e,[[a.sr[0]+.05,.7],[a.sr[0]+.14,.3]],s*.7,z(n,-.35)),jp(e,[[-.2,.62],[-.24,.3]],s*.7,z(n,-.35))}t.pose===`kick`&&Ap(e,[[-.02,0],[.02,0],[.012,.5],[-.012,.5]],`rgba(235,245,255,0.75)`);let m=Mp(a.pl,a.pr),h=(n,r,i,a)=>{kp(e,n,r,p.thigh,p.calf*1.05,f,.28),kp(e,r,i,p.calf,p.foot*.95,f,.5);let o=[i[0]+a*.05,i[1]+(i[1]>.1?-.012:.004)],c=t.line===`muscle`?l:t.line===`aura`?t.trim:z(t.bottom,-.5);kp(e,[i[0]-a*.012,i[1]+.014],o,p.foot*.85,p.foot*.7,c,.1,!1),t.line===`aura`&&kp(e,Mp(r,i,.62),i,p.calf*.92,p.foot,t.trim,.2),t.line===`muscle`&&jp(e,[[r[0]-p.calf*.5,r[1]+.012],[r[0]+p.calf*.5,r[1]+.012]],s*.6,z(f,-.22))};h(a.pr,a.kr,a.fr,1),h(a.pl,a.kl,a.fl,-1);let g=t.line===`muscle`?1.12:1,_=t.line===`muscle`?.058:t.line===`aura`?.055:.05,v=Mp(a.neck,m,.42),y=Mp(a.neck,m,.8),b=[a.neck[0]+(a.sl[0]-a.neck[0])*g,a.sl[1]],x=[a.neck[0]+(a.sr[0]-a.neck[0])*g,a.sr[1]];e.beginPath(),e.moveTo(a.neck[0]-.03,a.neck[1]+.012),e.quadraticCurveTo(b[0]*.6+a.neck[0]*.4,b[1]+.035*c,b[0]-.012,b[1]+.008),e.quadraticCurveTo(b[0]-.02,v[1],y[0]-_,y[1]),e.lineTo(a.pl[0]-.035,a.pl[1]-.02),e.lineTo(a.pr[0]+.035,a.pr[1]-.02),e.lineTo(y[0]+_,y[1]),e.quadraticCurveTo(x[0]+.02,v[1],x[0]+.012,x[1]+.008),e.quadraticCurveTo(x[0]*.6+a.neck[0]*.4,x[1]+.035*c,a.neck[0]+.03,a.neck[1]+.012),e.closePath(),e.fillStyle=t.top,e.fill(),e.stroke(),Ap(e,[[y[0]-_,y[1]-.012],[y[0]+_,y[1]-.012],[a.pr[0]+p.thigh,a.pr[1]-.03],[m[0],m[1]-.075],[a.pl[0]-p.thigh,a.pl[1]-.03]],t.bottom),Ap(e,[[y[0]-_-.004,y[1]+.006],[y[0]+_+.004,y[1]+.006],[y[0]+_+.004,y[1]-.024],[y[0]-_-.004,y[1]-.024]],t.trim),t.line===`aura`?Ap(e,[[y[0]+_*.5,y[1]-.01],[y[0]+_*.9,y[1]-.11],[y[0]+_*.55,y[1]-.12],[y[0]+_*.25,y[1]-.02]],t.trim):Ap(e,[[y[0]-.014,y[1]+.003],[y[0]+.014,y[1]+.003],[y[0]+.014,y[1]-.021],[y[0]-.014,y[1]-.021]],`#f2d27a`);let S=a.neck[0],C=Mp(b,x)[1]-.012;if(t.line===`muscle`){let n=z(t.top,-.22);jp(e,[[S,C-.015],[S,y[1]+.02]],s*.75,n);for(let t of[-1,1]){e.save(),e.lineWidth=s*.85,e.strokeStyle=n,e.beginPath(),e.moveTo(S+t*.008,v[1]-.006),e.quadraticCurveTo(S+t*.075,v[1]-.035,S+t*.118,v[1]+.02),e.stroke();for(let n of[.25,.52,.78]){let r=v[1]-.03+(y[1]+.02-v[1]+.03)*n;e.beginPath(),e.moveTo(S+t*.006,r),e.lineTo(S+t*.045,r+.004),e.stroke()}e.restore()}if(t.scar){jp(e,[[S-.07,v[1]+.05],[S+.03,v[1]-.02]],s*.9,`#b8454a`);for(let t of[.25,.5,.75]){let n=Mp([S-.07,v[1]+.05],[S+.03,v[1]-.02],t);jp(e,[[n[0]-.008,n[1]-.012],[n[0]+.008,n[1]+.012]],s*.6,`#b8454a`)}}}else if(t.line===`aura`)Ap(e,[[S-.034,C+.012],[S+.034,C+.012],[S+.004,v[1]-.045],[S-.004,v[1]-.045]],l),jp(e,[[S-.04,C+.014],[S,v[1]-.06],[S+.04,C+.014]],s*1.5,t.trim),Ap(e,[[S+.055,v[1]+.03],[S+.095,v[1]+.03],[S+.095,v[1]-.008],[S+.055,v[1]-.008]],`#ffffff`);else{Ap(e,[[S-.03,C+.012],[S+.03,C+.012],[S+.004,v[1]-.02],[S-.004,v[1]-.02]],l),Ap(e,[[S-.036,C+.016],[S-.085,C-.02],[S-.012,v[1]-.05]],t.trim),Ap(e,[[S+.036,C+.016],[S+.085,C-.02],[S+.012,v[1]-.05]],t.trim),jp(e,[[S,v[1]-.04],[y[0],y[1]+.01]],s*.8);for(let t of[.2,.5,.8]){let n=Mp([S+.018,v[1]-.05],[y[0]+.016,y[1]+.02],t);e.beginPath(),e.arc(n[0],n[1],.008,0,Math.PI*2),e.fillStyle=`#f2d27a`,e.fill(),e.stroke()}}kp(e,[a.neck[0],a.neck[1]-.01],Mp(a.neck,a.head,.55),.026*(.7+c*.3),.024*(.7+c*.3),l,0,!1);let[w,T]=a.head,E=.062,D=(a.head[0]-a.neck[0])*2.2;e.save(),e.translate(w,T),e.rotate(-D);let O=t.hair,k=z(t.hair,-.3);if(t.hairStyle===`long`&&Ap(e,[[-.0651,E*.5],[-.062*1.35,-.062*1.4],[-.062*.7,-.062*2.3],[-.062*.2,-.0744],[E*.3,-.1488],[E*1.3,-.093],[E*1.05,E*.5]],O),t.hairStyle===`spiky`){let t=[];for(let e=0;e<=8;e++){let n=Math.PI*(.02+.96*e/8);if(t.push([Math.cos(n)*E*1.02,Math.sin(n)*E*.95+E*.1]),e<8){let n=Math.PI*(.02+.96*(e+.5)/8);t.push([Math.cos(n)*E*(1.75+e%2*.35),Math.sin(n)*E*(1.7+e%3*.2)+E*.1])}}Ap(e,t,O)}e.beginPath(),e.moveTo(-.05704,E*.35),e.quadraticCurveTo(-.062*.95,-.0279,-.03224,-.06076),e.lineTo(-.00992,-.0744),e.lineTo(E*.16,-.0744),e.lineTo(E*.52,-.06076),e.quadraticCurveTo(E*.95,-.0279,E*.92,E*.35),e.quadraticCurveTo(E*.8,E*1.05,0,E*1.08),e.quadraticCurveTo(-.062*.8,E*1.05,-.05704,E*.35),e.closePath(),e.fillStyle=l,e.fill(),e.stroke(),e.save(),e.clip(),Ap(e,[[E*.35,E*1.2],[E*1.1,E*1.2],[E*1.1,-.0806],[E*.5,-.0806],[E*.62,-.0186]],`rgba(20,10,30,0.2)`,!1),e.restore(),t.hairStyle===`pompadour`?(Ap(e,[[-.062,E*.3],[-.06696,E*.95],[-.0372,E*1.5],[E*.5,E*1.62],[E*1.5,E*1.35],[E*1.72,E*.85],[E*1.25,E*.52],[E*.9,E*.62],[E*.2,E*.5],[-.031,E*.6]],O),jp(e,[[-.062*.4,E*1.05],[E*.5,E*1.2],[E*1.3,E*.95]],s*.6,k)):t.hairStyle===`spiky`?Ap(e,[[-.06076,E*.25],[-.062*.7,E*.72],[-.0279,E*.3],[-.0093,E*.78],[E*.12,E*.32],[E*.45,E*.75],[E*.7,E*.3],[E*.98,E*.3],[E*.9,E*1.02],[0,E*1.2],[-.0558,E*1.02]],O):t.hairStyle===`long`?Ap(e,[[-.062,E*.1],[-.062*.55,E*.62],[-.062*.1,E*.4],[E*.25,E*.75],[E*.65,E*.35],[E*1,E*.1],[E*.95,E*1],[0,E*1.25],[-.062*.95,E*1]],O):t.hairStyle===`mohawk`?Ap(e,[[-.01364,E*.75],[-.0186,E*1.5],[0,E*1.85],[E*.3,E*1.5],[E*.22,E*.75]],O):t.hairStyle===`short`&&Ap(e,[[-.06076,E*.3],[-.0372,E*.6],[E*.3,E*.52],[E*.98,E*.3],[E*.92,E*.98],[E*.3,E*1.22],[-.062*.4,E*1.2],[-.05704,E*.95]],O);for(let n of[-1,1])Ap(e,[[n*E*.14,E*.2],[n*E*.72,E*.36],[n*E*.74,E*.25],[n*E*.16,E*.06]],t.hairStyle===`bald`?Sp:k,!1),Ap(e,[[n*E*.2,E*.02],[n*E*.68,E*.14],[n*E*.62,-.062*.12],[n*E*.24,-.00868]],`#ffffff`,!1),e.beginPath(),e.arc(n*E*.42,-.062*.03,E*.1,0,Math.PI*2),e.fillStyle=Sp,e.fill(),jp(e,[[n*E*.18,E*.03],[n*E*.7,E*.15]],s*.55);jp(e,[[E*.03,-.062*.12],[E*.1,-.062*.42],[-.00124,-.02852]],s*.6),jp(e,t.line===`aura`?[[-.01364,-.04588],[0,-.04216],[E*.26,-.04588]]:[[-.062*.24,-.04464],[E*.26,-.062*.7]],s*.75),t.line===`muscle`&&jp(e,[[-.031,-.062*.55],[-.0186,-.062*.95]],s*.5,u),e.restore();let A=(n,r,i)=>{if(kp(e,n,r,p.arm*1.08,p.fore*1.02,d,t.line===`muscle`?.5:.3),kp(e,r,i,p.fore,p.fore*.72,d,.42),t.line===`aura`&&kp(e,Mp(r,i,.58),Mp(r,i,.95),p.fore*.92,p.fore*.8,t.trim,.1,!1),t.line===`pose`&&kp(e,Mp(r,i,.8),Mp(r,i,.98),p.fore*.86,p.fore*.8,t.trim,0,!1),t.line===`muscle`){e.beginPath(),e.arc(n[0],n[1],p.arm*1.25,0,Math.PI*2),e.fillStyle=l,e.fill(),e.stroke();let t=Mp(n,r,.55);jp(e,[[t[0]-p.arm*.5,t[1]+.008],[t[0]+p.arm*.5,t[1]-.008]],s*.6,u)}if(e.beginPath(),e.arc(i[0],i[1],p.hand,0,Math.PI*2),e.fillStyle=l,e.fill(),e.stroke(),t.line===`pose`){let t=[i[0]-r[0],i[1]-r[1]],n=Math.hypot(t[0],t[1])||1,a=[t[0]/n,t[1]/n];for(let t of[-.7,-.25,.2,.65]){let n=Math.cos(t),r=Math.sin(t),o=[a[0]*n-a[1]*r,a[0]*r+a[1]*n];kp(e,[i[0]+o[0]*p.hand*.6,i[1]+o[1]*p.hand*.6],[i[0]+o[0]*p.hand*2.3,i[1]+o[1]*p.hand*2.3],.0075,.006,l,0,!1)}}else for(let t of[-.35,.1,.5])jp(e,[[i[0]+t*p.hand-.004,i[1]+p.hand*.5],[i[0]+t*p.hand+.004,i[1]-p.hand*.3]],s*.45,u)};if(A(x,a.er,a.hr),A(b,a.el,a.hl),t.pose===`lift`){let t=[0,1.115],n=.175,r=[];for(let e=0;e<11;e++){let i=e/11*Math.PI*2;r.push([t[0]+Math.cos(i)*n*(1+(e%3==0?.1:e%2?-.08:0)),t[1]+Math.sin(i)*n*(.92+(e%4==1?.1:0))])}Ap(e,r,`#8f8a84`),jp(e,[[t[0]-.08,t[1]+.05],[t[0]-.01,t[1]-.02],[t[0]+.06,t[1]+.01]],s*.7,`#5d5852`),jp(e,[[t[0]+.02,t[1]-.09],[t[0]+.05,t[1]-.02]],s*.7,`#5d5852`)}if(t.pose===`smash`)for(let[t,n,r]of[[-.09,.03,.035],[.02,.05,.028],[-.13,.11,.022],[.06,.13,.02],[-.03,.16,.016]]){let i=[a.hl[0]+t,n];Ap(e,[[i[0]-r,i[1]-r*.6],[i[0]-r*.3,i[1]+r],[i[0]+r,i[1]+r*.4],[i[0]+r*.5,i[1]-r]],`#8f8a84`)}if(t.pose===`charge`&&t.aura){let n=Mp(a.hl,a.hr);for(let[r,i]of[[.085,.35],[.055,.7],[.03,1]])e.beginPath(),e.arc(n[0],n[1]-.005,r,0,Math.PI*2),e.globalAlpha=i,e.fillStyle=i===1?`#ffffff`:z(t.aura,.5),e.fill(),e.globalAlpha=1}e.restore()}function Pp(e,t,n,r,i,a,o){e.beginPath();for(let o=0;o<a*2;o++){let s=o/(a*2)*Math.PI*2,c=o%2?r:i*(.85+o*7%5*.05);o?e.lineTo(t+Math.cos(s)*c,n+Math.sin(s)*c):e.moveTo(t+Math.cos(s)*c,n+Math.sin(s)*c)}e.closePath(),e.fillStyle=o,e.fill()}function Fp(e,t,n,r,i,a,o=.5){let s=t.hero,c=t.bg,l=t.accent;if(e.save(),e.beginPath(),e.rect(n,r,i,a),e.clip(),s.line===`pose`){e.fillStyle=c,e.fillRect(n,r,i,a),e.fillStyle=l,e.beginPath(),e.moveTo(n,r+a*.42),e.lineTo(n+i,r+a*.12),e.lineTo(n+i,r+a*.5),e.lineTo(n,r+a*.86),e.fill(),e.fillStyle=z(c,-.35),e.beginPath(),e.moveTo(n,r+a*.86),e.lineTo(n+i,r+a*.5),e.lineTo(n+i,r+a),e.lineTo(n,r+a),e.fill(),e.fillStyle=`rgba(255,255,255,0.2)`;let t=Math.max(8,i/24);for(let o=0;o*t<a*.5;o++)for(let s=0;s*t<i;s++){let i=t*.34*(1-o*t/(a*.5));e.beginPath(),e.arc(n+s*t+o%2*t/2,r+o*t+t/2,Math.max(.5,i),0,Math.PI*2),e.fill()}Pp(e,n+i*.5,r+a*o,i*.3,i*.62,14,`rgba(255,255,255,0.28)`)}else if(s.line===`aura`){let t=e.createRadialGradient(n+i/2,r+a*o,i*.05,n+i/2,r+a*o,Math.max(i,a)*.75);t.addColorStop(0,z(c,.6)),t.addColorStop(.45,c),t.addColorStop(1,z(c,-.55)),e.fillStyle=t,e.fillRect(n,r,i,a),e.fillStyle=`rgba(255,255,255,0.2)`;for(let t=0;t<40;t++){let s=t/40*Math.PI*2+t%3*.02,c=Math.max(i,a),l=.012+t%4*.006;e.beginPath(),e.moveTo(n+i/2+Math.cos(s)*i*.3,r+a*o+Math.sin(s)*i*.3),e.lineTo(n+i/2+Math.cos(s-l)*c,r+a*o+Math.sin(s-l)*c),e.lineTo(n+i/2+Math.cos(s+l)*c,r+a*o+Math.sin(s+l)*c),e.fill()}e.strokeStyle=l,e.lineWidth=Math.max(2,i*.012),e.lineJoin=`miter`;for(let[t,o,s]of[[.1,.2,1],[.86,.3,-1],[.14,.7,1]]){e.beginPath();let c=n+i*t,l=r+a*o;e.moveTo(c,l);for(let t=0;t<4;t++)c+=s*i*(t%2?-.03:.07),l+=a*.035,e.lineTo(c,l);e.stroke()}}else{let t=e.createLinearGradient(0,r,0,r+a);t.addColorStop(0,`#fff4d8`),t.addColorStop(.57,`#ead9b6`),t.addColorStop(1,`#bba27e`),e.fillStyle=t,e.fillRect(n,r,i,a),e.fillStyle=z(c,-.34),e.beginPath(),e.moveTo(n,r+a*.31),e.lineTo(n+i*.15,r+a*.67),e.lineTo(n+i*.46,r+a),e.lineTo(n,r+a),e.fill(),e.fillStyle=`#884437`,e.beginPath(),e.moveTo(n+i,r+a*.35),e.lineTo(n+i*.74,r+a*.86),e.lineTo(n+i,r+a*.79),e.fill(),e.fillStyle=Sp,e.fillRect(n,r,i,a*.163),e.fillStyle=l,e.fillRect(n,r+a*.161,i,a*.008)}if(t.rarity===`secret`){e.globalAlpha=.25,e.fillStyle=`#fff1a8`;for(let t=-6;t<16;t++)e.beginPath(),e.moveTo(n+t*i*.14,r),e.lineTo(n+t*i*.14+i*.05,r),e.lineTo(n+t*i*.14-a*.3+i*.05,r+a),e.lineTo(n+t*i*.14-a*.3,r+a),e.fill();e.globalAlpha=1}e.restore()}var Ip=e=>e===`pose`?wp:Cp;function Lp(e,t,n,r,i,a,o,s=`#ffffff`){let c=t.hero.line;e.save(),e.translate(r,i),c===`aura`&&e.transform(1,0,-.18,1,0,0),e.font=`900 ${Math.round(a)}px ${Ip(c)}`,e.textAlign=`center`,e.lineJoin=`round`,e.lineWidth=a*.3,e.strokeStyle=Sp,e.strokeText(n,0,0,o),e.lineWidth=a*.12,e.strokeStyle=c===`muscle`?`#b3202a`:t.accent,e.strokeText(n,0,0,o),e.fillStyle=s,e.fillText(n,0,0,o),e.restore()}function Rp(e,t,n,r,i,a,o){let s=t.hero,c=t.rarity===`secret`,l=Tp.get(s);Fp(e,t,n,r,i,a,.52),e.save(),e.beginPath(),e.rect(n,r,i,a),e.clip();let u=r+a*.167,d=r+a*.843;if(l)Dp(e,l.image,n+i/2,d+a*.006,i*1.16,a*.695);else{let t=Op[s.pose],r=s.pose===`kick`||s.pose===`kneel`||s.pose===`smash`?.9:.62,o=Math.min(d-u,i/r*(t.top??1.02)*.92);e.fillStyle=`rgba(0,0,0,0.3)`,e.beginPath(),e.ellipse(n+i/2,d,i*.34,a*.018,0,0,Math.PI*2),e.fill(),Np(e,s,n+i/2+(s.pose===`kneel`?i*.04:s.pose===`kick`?-i*.05:s.pose===`smash`?-i*.06:0),d,o)}let f=Math.min(i*.15,a*.085,l?i*.88/t.series.length:1/0);Lp(e,t,t.series,n+i/2,r+a*.105,f,i*.92,c?`#ffe680`:`#ffffff`),e.font=`800 ${Math.round(i*.05)}px ${Cp}`,e.textAlign=`center`,e.lineWidth=i*.014,e.strokeStyle=`rgba(20,10,30,0.8)`,e.lineJoin=`round`,e.strokeText(`アクションポーズ フィギュア`,n+i/2,r+a*.15,i*.9),e.fillStyle=`#ffffff`,e.fillText(`アクションポーズ フィギュア`,n+i/2,r+a*.15,i*.9);let p=r+a*.839,m=a*.118;e.fillStyle=Sp,e.fillRect(n,p,i,m),e.fillStyle=c?`#ffe680`:t.accent,e.fillRect(n,p,i,Math.max(1,a*.007)),e.font=`900 ${Math.round(Math.min(m*.69,i*.2))}px ${Ip(s.line)}`,e.fillStyle=c?`#ffe680`:`#fff8ed`,e.fillText(t.name,n+i/2,p+m*.74,i*.9),e.font=`800 ${Math.round(i*.045)}px ${Cp}`,e.fillStyle=`#ffffff`,e.lineWidth=i*.012,e.strokeStyle=`rgba(20,10,30,0.75)`;let h=Je.filter(e=>e.series===t.series&&e.rarity!==`secret`).length;e.strokeText(`全${h}種${Je.some(e=>e.series===t.series&&e.rarity===`secret`)?` ＋ シークレット`:``}`,n+i/2,r+a*.983,i*.9),e.fillText(`全${h}種${Je.some(e=>e.series===t.series&&e.rarity===`secret`)?` ＋ シークレット`:``}`,n+i/2,r+a*.983,i*.9);let g=i*.1;Pp(e,n+i*.87,r+a*.21,g*.78,g,10,c?`#ffd34d`:t.accent),e.lineWidth=Math.max(2,i*.008),e.strokeStyle=Sp,e.stroke(),e.font=`900 ${Math.round(g*.5)}px ${Cp}`,e.fillStyle=c?`#7a2a00`:`#ffffff`,e.lineWidth=g*.14,e.strokeStyle=Sp,c||e.strokeText(`No.${o}`,n+i*.87,r+a*.21+g*.18),e.fillText(c?`激レア`:`No.${o}`,n+i*.87,r+a*.21+g*.18),e.restore()}function zp(e,t,n,r,i,a){let o=Je.filter(e=>e.series===t.series);e.save(),e.beginPath(),e.rect(n,r,i,a),e.clip(),e.fillStyle=z(t.bg,-.45),e.fillRect(n,r,i,a),e.fillStyle=t.accent,e.fillRect(n,r,i,a*.1),e.fillStyle=Sp,e.fillRect(n,r+a*.1,i,Math.max(2,a*.008)),Lp(e,t,`ラインナップ`,n+i/2,r+a*.075,a*.05,i*.9);let s=o.length>3?2:1,c=Math.ceil(o.length/s),l=i/s,u=a*.62/c;o.forEach((o,c)=>{let d=n+c%s*l,f=r+a*.125+u*Math.floor(c/s),p=o.id===t.id,m=o.rarity===`secret`&&!p;if(e.fillStyle=m?`#2b2433`:z(o.bg,.25),nt(e,d+l*.06,f+u*.04,l*.88,u*.9,u*.06),e.fill(),e.lineWidth=p?Math.max(3,i*.014):Math.max(1.5,i*.006),e.strokeStyle=p?`#ffe14d`:Sp,e.stroke(),e.textAlign=`center`,m)e.font=`900 ${Math.round(u*.5)}px ${Cp}`,e.fillStyle=`#ffe680`,e.fillText(`？`,d+l/2,f+u*.62);else{e.save(),e.beginPath(),e.rect(d+l*.06,f+u*.04,l*.88,u*.72),e.clip();let t=Tp.get(o.hero);t?Dp(e,t.image,d+l/2,f+u*.76,l*.83,u*.68):Np(e,o.hero,d+l/2,f+u*.76,u*.68),e.restore()}e.font=`800 ${Math.round(Math.min(u*.13,l*.11))}px ${Cp}`,e.fillStyle=m?`#ffe680`:Sp,e.fillText(m?`シークレット`:o.name,d+l/2,f+u*.9,l*.82)});let d=r+a*.77;e.fillStyle=`rgba(255,255,255,0.92)`,e.fillRect(n+i*.04,d,i*.92,a*.2),e.fillStyle=`#111`;let f=n+i*.08,p=t.id.length*7+3;for(;f<n+i*.42;){p=p*1103515245+12345&2147483647;let t=Math.max(1,Math.round((1+p%3)*i/260));e.fillRect(f,d+a*.025,t,a*.11),f+=t+Math.max(1,Math.round((1+(p>>4)%3)*i/260))}e.font=`600 ${Math.round(i*.036)}px ${Cp}`,e.textAlign=`left`,e.fillStyle=Sp,[[`品名`,`プライズフィギュア`],[`材質`,`PVC・ABS`],[`対象`,`15才以上`],[`製造`,`クレーン生活 工房`]].forEach(([t,r],o)=>e.fillText(`${t}：${r}`,n+i*.47,d+a*(.045+o*.04),i*.47)),e.restore()}function Bp(e,t,n,r,i,a,o){Fp(e,t,n,r,i,a,.3),e.save(),e.beginPath(),e.rect(n,r,i,a),e.clip();let s=t.hero,c=r+a*.1;if(o){e.save();let o=i*.4;e.beginPath(),e.arc(n+i/2,r+o+a*.03,o,0,Math.PI*2),e.fillStyle=z(t.bg,.5),e.fill(),e.lineWidth=Math.max(2,i*.03),e.strokeStyle=Sp,e.stroke(),e.clip();let l=Tp.get(s);if(l){let[t,s,c]=l.face,u=o*1.1/c,d=u*l.image.naturalHeight/l.image.naturalWidth;e.drawImage(l.image,n+i/2-t*u,r+o+a*.03-s*d,u,d)}else{let t=Op[s.pose],c=o*5.2,l=c/(t.top??1.02);Np(e,s,n+i/2-t.head[0]*l,r+o+a*.03+t.head[1]*l-o*.1,c)}e.restore(),c=r+o*2+a*.1}let l=[...o?t.name:t.series],u=Math.min(i*.5,(r+a*.97-c)/l.length*.98);l.forEach((r,a)=>Lp(e,t,r===`ー`?`｜`:r,n+i/2,c+u*(a+.85),u*.82,i*.9)),e.restore()}function Vp(e,t,n,r,i,a,o){e.save(),e.beginPath(),e.rect(n,r,i,a),e.clip();let s=t.rarity===`secret`;e.fillStyle=Sp,e.fillRect(n,r,i,a),e.fillStyle=s?`#ffe680`:t.accent,e.fillRect(n+i*.046,r+a*.74,i*.908,a*.017),e.textAlign=`center`,e.fillStyle=`#fff8ed`,e.font=`900 ${Math.round(Math.min(i*.19,a*.37))}px ${Ip(t.hero.line)}`,e.fillText(t.name,n+i/2,r+a*.66,i*.89),e.font=`800 ${Math.round(Math.min(i*.09,a*.17))}px ${Cp}`,e.fillStyle=s?`#ffe680`:t.accent,e.fillText(o?`アクションポーズ フィギュア`:t.series,n+i/2,r+a*.25,i*.87),e.restore()}function Hp(e,t,n,r,i,a=!1){let o=Math.max(5,Math.min(r,i)*.024);e.save(),e.beginPath(),e.rect(t,n,r,i),e.clip(),e.strokeStyle=`rgba(28,20,19,0.42)`,e.lineWidth=o*.48,e.strokeRect(t+o*.97,n+o*.97,r-o*1.94,i-o*1.94),e.strokeStyle=`rgba(255,233,192,0.48)`,e.lineWidth=o*.41,e.strokeRect(t+o*.57,n+o*.57,r-o*1.14,i-o*1.14),a&&(e.lineWidth=o*.35,e.strokeStyle=`rgba(219,191,154,0.43)`,e.beginPath(),e.moveTo(t+o,n+i*.85),e.lineTo(t+r*.14,n+i*.89),e.lineTo(t+r*.86,n+i*.89),e.lineTo(t+r-o,n+i*.85),e.stroke()),e.restore()}function Up(e){let t=u(e.shape),n=t.x*2,r=t.y*2,i=t.z*2,a=1536,o=1024,s=Math.min(a/(2*n+2*i),o/(r+i)),c=Math.floor(n*s),l=Math.floor(r*s),d=Math.floor(i*s),f=document.createElement(`canvas`);f.width=a,f.height=o;let p=f.getContext(`2d`);p.fillStyle=e.bg,p.fillRect(0,0,a,o),Rp(p,e,0,0,c,l,Je.filter(t=>t.series===e.series).findIndex(t=>t.id===e.id)+1),zp(p,e,c,0,c,l),Bp(p,e,c*2,0,d,l,!0),Bp(p,e,c*2+d,0,d,l,!1),Vp(p,e,0,l,c,d,!1),Vp(p,e,c,l,c,d,!0);for(let[e,t]of[[0,c],[c,c],[c*2,d],[c*2+d,d]])Hp(p,e,0,t,l);Hp(p,0,l,c,d,!0),Hp(p,c,l,c,d,!0);let m=(e,t,n,r)=>({u0:(e+1)/a,v0:1-(t+r-1)/o,u1:(e+n-1)/a,v1:1-(t+1)/o});return{canvas:f,front:m(0,0,c,l),back:m(c,0,c,l),left:m(c*2,0,d,l),right:m(c*2+d,0,d,l),top:m(0,l,c,d),bottom:m(c,l,c,d)}}function Wp(e,t,n){let r=document.createElement(`canvas`);return r.width=t,r.height=n,Rp(r.getContext(`2d`),e,0,0,t,n,Je.filter(t=>t.series===e.series).findIndex(t=>t.id===e.id)+1),r}ut(Wp);var Gp=`"Hiragino Maru Gothic ProN","Hiragino Sans","Noto Sans JP",sans-serif`,Kp=`#2a1a16`;function qp(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,{c:n,ctx:n.getContext(`2d`)}}var Jp=(e,t,n,r,i,a)=>({u0:(n+1)/e,v0:1-(r+a-1)/t,u1:(n+i-1)/e,v1:1-(r+1)/t});function Yp(e){let t=2166136261;for(let n of e)t^=n.charCodeAt(0),t=Math.imul(t,16777619);return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)%1e5/1e5)}function Xp(e,t,n,r,i,a,o={}){e.font=`${o.weight??900} ${Math.round(i)}px ${Gp}`,e.textAlign=o.align??`center`,e.lineJoin=`round`,o.stroke&&(e.lineWidth=o.lw??i*.22,e.strokeStyle=o.stroke,e.strokeText(t,n,r,o.maxW)),e.fillStyle=a,e.fillText(t,n,r,o.maxW)}function Zp(e,t,n,r,i,a){let o=Yp(a);e.fillStyle=`#ffffff`,e.fillRect(t,n,r,i),e.fillStyle=`#111111`;let s=t+r*.07,c=t+r*.93,l=i*.68;for(;s<c;){let t=Math.max(1,Math.round((1+Math.floor(o()*3))*r/110));e.fillRect(s,n+i*.08,Math.min(t,c-s),l),s+=t+Math.max(1,Math.round((1+Math.floor(o()*3))*r/110))}let u=`4 9`;for(let e=0;e<11;e++)u+=(e===5?` `:``)+Math.floor(o()*10);e.font=`600 ${Math.round(i*.17)}px ui-monospace,Menlo,monospace`,e.textAlign=`center`,e.fillText(u,t+r/2,n+i*.95,r*.9)}function Qp(e,t,n,r,i,a,o=Kp){e.textAlign=`left`,i.forEach(([i,s],c)=>{let l=n+a*1.45*(c+.8);e.font=`800 ${a}px ${Gp}`,e.fillStyle=o,e.fillText(i,t,l,r*.3),e.font=`500 ${a}px ${Gp}`,e.fillText(s,t+r*.32,l,r*.68),e.fillStyle=`rgba(0,0,0,0.18)`,e.fillRect(t,l+a*.32,r,1)})}function $p(e,t,n,r,i,a,o){let s=Yp(o+`n`);e.fillStyle=`#ffffff`,e.fillRect(t,n,r,i),e.strokeStyle=Kp,e.lineWidth=2,e.strokeRect(t+1,n+1,r-2,i-2);let c=[[`エネルギー`,`${Math.round(20+s()*400)}kcal`],[`たんぱく質`,`${(s()*6).toFixed(1)}g`],[`脂質`,`${(s()*20).toFixed(1)}g`],[`炭水化物`,`${(5+s()*50).toFixed(1)}g`],[`食塩相当量`,`${(s()*1.2).toFixed(2)}g`]],l=i/(c.length+1.4),u=Math.min(l*.72,r*.085);e.fillStyle=Kp,e.font=`800 ${u}px ${Gp}`,e.textAlign=`center`,e.fillText(`栄養成分表示（${a}）`,t+r/2,n+l*.95,r*.94),e.fillRect(t+4,n+l*1.22,r-8,2),e.font=`500 ${u}px ${Gp}`,c.forEach(([i,a],o)=>{let s=n+l*(o+2.1);e.textAlign=`left`,e.fillText(i,t+r*.06,s,r*.5),e.textAlign=`right`,e.fillText(a,t+r*.94,s,r*.38)})}function em(e,t,n,r,i,a,o){e.beginPath();for(let a=0;a<i*2;a++){let o=a*Math.PI/i-Math.PI/2,s=a%2?r*.78:r;e.lineTo(t+Math.cos(o)*s,n+Math.sin(o)*s)}e.closePath(),e.fillStyle=a,e.fill(),o&&(e.lineWidth=r*.07,e.strokeStyle=o,e.stroke())}function tm(e,t,n,r,i,a,o,s){e.save(),e.beginPath(),e.rect(t,n,r,i),e.clip(),e.translate(a,o),e.globalAlpha=s,e.fillStyle=`#ffffff`;let c=Math.hypot(r,i);for(let t=0;t<18;t++)e.rotate(Math.PI/9),e.beginPath(),e.moveTo(0,0),e.lineTo(-c*.06,-c),e.lineTo(c*.06,-c),e.closePath(),e.fill();e.restore()}function nm(e,t,n,r,i,a,o,s){e.fillStyle=s;for(let s=0,c=n+a/2;c<n+i;c+=a,s++)for(let n=t+(s%2?a:a/2);n<t+r;n+=a)e.beginPath(),e.arc(n,c,o,0,Math.PI*2),e.fill()}var rm={x0:.12,x1:.88,y0:.2,y1:.775};function im(e){let t=1024,n=1024,{c:r,ctx:i}=qp(t,n),a=e.rarity===`secret`,o=Je.filter(t=>t.series===e.series),s=o.findIndex(t=>t.id===e.id)+1,c=z(e.bg,-.3);i.save(),i.beginPath(),i.rect(0,0,512,717),i.clip();let l=i.createLinearGradient(0,0,0,717);if(l.addColorStop(0,z(e.bg,.12)),l.addColorStop(.55,e.bg),l.addColorStop(1,c),i.fillStyle=l,i.fillRect(0,0,512,717),tm(i,0,0,512,717,256,717*.48,.14),nm(i,0,559.26,512,157.74,22,4,`rgba(255,255,255,0.16)`),a){i.globalAlpha=.22,i.fillStyle=`#ffe680`;for(let e=-8;e<12;e++)i.beginPath(),i.moveTo(e*70,0),i.lineTo(e*70+26,0),i.lineTo(e*70-180+26,717),i.lineTo(e*70-180,717),i.fill();i.globalAlpha=1}Xp(i,e.series,256,75.285,56,a?`#ffe680`:`#ffffff`,{stroke:Kp,lw:13,maxW:471.04}),Xp(i,`ぷにっと フィギュアコレクション`,256,114.72,23,`#ffffff`,{stroke:`rgba(40,20,30,0.75)`,lw:5,weight:800,maxW:460.8}),i.fillStyle=`rgba(0,0,0,0.25)`,nt(i,40.96,717*.822,430.08,717*.108,34),i.fill(),i.fillStyle=`#fffdf6`,nt(i,40.96,717*.812,430.08,717*.108,34),i.fill(),i.lineWidth=5,i.strokeStyle=c,i.stroke(),Xp(i,e.name,256,636.696,50,Kp,{maxW:389.12}),Xp(i,`全${o.filter(e=>e.rarity!==`secret`).length}種 ＋ シークレット1種`,256,717*.968,22,`#ffffff`,{stroke:`rgba(40,20,30,0.7)`,lw:5,weight:800});let u=512*rm.x0,d=717*rm.y0,f=512*(rm.x1-rm.x0),p=717*(rm.y1-rm.y0);i.lineWidth=16,i.strokeStyle=`rgba(0,0,0,0.22)`,nt(i,u,d+4,f,p,30),i.stroke(),i.lineWidth=14,i.strokeStyle=`#fffdf6`,nt(i,u,d,f,p,30),i.stroke(),em(i,440.32,154.155,54,12,a?`#ffd34d`:e.accent,Kp),Xp(i,a?`激レア`:`No.${String(s).padStart(2,`0`)}`,440.32,163.476,a?25:27,a?`#7a2a00`:`#ffffff`,a?{}:{stroke:Kp,lw:6}),i.globalCompositeOperation=`destination-out`,nt(i,u+7,d+7,f-14,p-14,24),i.fill(),i.globalCompositeOperation=`source-over`,i.restore(),i.save(),i.beginPath(),i.rect(512,0,512,717),i.clip(),i.fillStyle=z(e.bg,.62),i.fillRect(512,0,512,717),nm(i,512,0,512,717,26,3,`rgba(255,255,255,0.5)`),i.fillStyle=e.bg,i.fillRect(512,0,512,75.285),i.fillStyle=c,i.fillRect(512,75.285,512,6),Xp(i,`ラインナップ`,768,53.775,40,`#ffffff`,{stroke:Kp,lw:9}),o.forEach((t,n)=>{let r=512+128*(n%4+.5),a=143.4+146.98499999999999*Math.floor(n/4),o=t.id===e.id,s=t.rarity===`secret`&&!o;i.fillStyle=s?`#3a3048`:`#ffffff`,i.beginPath(),i.arc(r,a,51.2,0,Math.PI*2),i.fill(),i.lineWidth=o?7:3,i.strokeStyle=o?`#ff3b6b`:c,i.stroke(),s?Xp(i,`？`,r,a+20,58,`#ffe680`):et(i,t,r,a+6,51.2/105),Xp(i,s?`シークレット`:t.name,r,a+51.2+22,17,Kp,{weight:800,maxW:122.88})}),i.fillStyle=`rgba(255,255,255,0.85)`,i.fillRect(526,573.6,484,129.39999999999998),Zp(i,538,589.6,170,104,e.id),Qp(i,726,579.6,268,[[`品名`,`ミニフィギュア`],[`材質`,`PVC・ABS`],[`対象`,`6才以上`],[`製造`,`もちもち工房`]],19),i.restore();let m=(t,n)=>{i.save(),i.beginPath(),i.rect(t,717,219,307),i.clip();let r=i.createLinearGradient(0,717,0,1024);r.addColorStop(0,e.bg),r.addColorStop(1,c),i.fillStyle=r,i.fillRect(t,717,219,307),i.fillStyle=`rgba(255,255,255,0.14)`;for(let e=-4;e<8;e++)i.beginPath(),i.moveTo(t+e*44,717),i.lineTo(t+e*44+18,717),i.lineTo(t+e*44-100+18,1024),i.lineTo(t+e*44-100,1024),i.fill();if(n)i.fillStyle=`#ffffff`,i.beginPath(),i.arc(t+219/2,809.1,78.84,0,Math.PI*2),i.fill(),et(i,e,t+219/2,815.24,78.84/105),Xp(i,e.name,t+219/2,944.1800000000001,30,`#ffffff`,{stroke:Kp,lw:7,maxW:197.1}),Xp(i,`No.${String(s).padStart(2,`0`)}`,t+219/2,993.3,24,`#fff3b0`,{stroke:Kp,lw:5});else{let n=[...e.series];n.forEach((e,r)=>Xp(i,e===`ー`?`｜`:e,t+219/2,761+r*247/n.length,30,`#ffffff`,{stroke:Kp,lw:7}))}i.restore()};return m(0,!0),m(219,!1),i.fillStyle=e.bg,i.fillRect(438,717,219,219),i.fillStyle=`rgba(255,255,255,0.16)`,i.fillRect(438,760.8,219,65.7),Xp(i,e.series,547.5,808.98,27,`#ffffff`,{stroke:Kp,lw:7,maxW:219*.94}),Xp(i,e.name,547.5,887.8199999999999,30,`#ffffff`,{stroke:Kp,lw:7,maxW:197.1}),{canvas:r,front:Jp(t,n,0,0,512,717),back:Jp(t,n,512,0,512,717),left:Jp(t,n,0,717,219,307),right:Jp(t,n,219,717,219,307),top:Jp(t,n,438,717,219,219)}}var am={cookie:`12枚`,chips:`85g`,choco:`5本`,gummy:`100g`,biscuit:`16枚`,popcorn:`90g`,ramune:`70g`,candy:`120g`},om={cookie:`焼菓子`,chips:`スナック菓子`,choco:`チョコレート菓子`,gummy:`グミキャンディ`,biscuit:`ビスケット`,popcorn:`スナック菓子`,ramune:`清涼菓子`,candy:`キャンディ`};function sm(e,t,n,r,i,a,o={}){let s=a.rarity===`secret`;e.save(),e.beginPath(),e.rect(t,n,r,i),e.clip(),e.translate(t,n);let c=e.createLinearGradient(0,0,r,i);c.addColorStop(0,z(a.bg,.08)),c.addColorStop(.5,a.bg),c.addColorStop(1,z(a.bg,-.32)),e.fillStyle=c,e.fillRect(0,0,r,i),tm(e,0,0,r,i,r/2,i*.6,.07),e.save(),e.translate(r/2,i*.58),e.rotate(-.3),e.fillStyle=`rgba(255,255,255,0.1)`,e.fillRect(-r,-i*.13,r*2,i*.26),e.restore(),nm(e,0,0,r,i,30,4,`rgba(255,255,255,0.08)`);let l=(o.seal??0)*i,u=l,d=i-l*2,f=Math.min(r,d),p=u+d*.62;e.fillStyle=z(a.bg,-.35),e.globalAlpha=.45,e.beginPath(),e.ellipse(r/2,p,f*.44,f*.36,0,0,Math.PI*2),e.fill(),e.globalAlpha=1,e.lineWidth=3,e.strokeStyle=`rgba(255,255,255,0.55)`,e.beginPath(),e.ellipse(r/2,p,f*.44,f*.36,0,0,Math.PI*2),e.stroke(),it(e,a,r/2,p,f/300);let[m,h]=a.name.includes(`（`)?[a.name.split(`（`)[0],a.name.split(`（`)[1].replace(`）`,``)]:[a.name,``],g=Math.min(r*.125,d*.15);Xp(e,m,r/2,u+d*.07+g*1.08,g,s?`#ffe680`:`#ffffff`,{stroke:Kp,lw:g*.24,maxW:r*.88}),Xp(e,De,r*.95,u+d*.965,Math.max(12,f*.045),`rgba(255,255,255,0.92)`,{weight:800,align:`right`,stroke:`rgba(0,0,0,0.4)`,lw:3});let _=o.badge??h;_&&(em(e,r*.82,u+d*.4,f*.14,12,s?`#ffd34d`:`#ff3b3b`,`#ffffff`),Xp(e,_,r*.82,u+d*.4+f*.035,f*.085,`#ffffff`,{stroke:`rgba(90,0,0,0.6)`,lw:4,maxW:f*.24})),Xp(e,`内容量 ${am[a.motif??``]??``}`,r*.05,u+d*.965,Math.max(13,f*.055),`#ffffff`,{align:`left`,weight:800,stroke:`rgba(0,0,0,0.5)`,lw:4});let v=e.createLinearGradient(0,0,r,i*.6);v.addColorStop(.2,`rgba(255,255,255,0)`),v.addColorStop(.32,`rgba(255,255,255,0.09)`),v.addColorStop(.42,`rgba(255,255,255,0)`),e.fillStyle=v,e.fillRect(0,0,r,i),l&&cm(e,r,i,l,a),e.restore()}function cm(e,t,n,r,i){for(let a of[0,n-r]){e.fillStyle=z(i.bg,.3),e.fillRect(0,a,t,r),e.fillStyle=`rgba(0,0,0,0.12)`;for(let n=a+3;n<a+r-1;n+=6)e.fillRect(0,n,t,2);e.fillStyle=`rgba(255,255,255,0.35)`;for(let n=a+5;n<a+r-1;n+=6)e.fillRect(0,n,t,1)}e.fillStyle=`rgba(0,0,0,0.25)`,e.fillRect(0,r-2,t,2),e.fillRect(0,n-r,t,2)}function lm(e,t,n,r,i,a,o={}){e.save(),e.beginPath(),e.rect(t,n,r,i),e.clip(),e.translate(t,n),e.fillStyle=z(a.bg,-.12),e.fillRect(0,0,r,i),nm(e,0,0,r,i,30,4,`rgba(255,255,255,0.08)`);let s=(o.seal??0)*i,c=s+i*.03,l=i-s*2-i*.06,u=Math.min(r,l);Xp(e,a.name.split(`（`)[0],r/2,c+u*.1,u*.085,`#ffffff`,{stroke:Kp,lw:5,maxW:r*.9}),e.fillStyle=`rgba(255,253,246,0.94)`,nt(e,r*.05,c+u*.15,r*.9,l-u*.15,10),e.fill();let d=Math.max(11,u*.043),f=r*.09,p=r*.82,m=d*1.45*5;Qp(e,f,c+u*.17,p,[[`名称`,om[a.motif??``]??`菓子`],[`内容量`,am[a.motif??``]??``],[`賞味期限`,`枠外下部に記載`],[`保存方法`,`直射日光・高温多湿をさける`],[`製造者`,`おかしコレクション製菓`]],d);let h=c+u*.2+m,g=c+l-h-u*.04;g>u*.2&&($p(e,f,h,p*.52,g,`1袋あたり`,a.id),Zp(e,f+p*.56,h+g*.3,p*.44,Math.min(g*.7,p*.3),a.id)),o.fin&&(e.fillStyle=`rgba(0,0,0,0.18)`,e.fillRect(r/2-1,0,3,i),e.fillStyle=`rgba(255,255,255,0.25)`,e.fillRect(r/2+3,0,2,i)),s&&cm(e,r,i,s,a),e.restore()}var um=.075;function dm(e,t){let n=Math.round(512*t.z/t.x),r=1024,i=n+72,a=e.pack??`carton`;if(a===`bars`)return fm(e,t);let{c:o,ctx:s}=qp(r,i),c=a===`bag`;if(sm(s,0,0,512,n,e,{seal:c?um:0,badge:c?void 0:e.rarity===`secret`?`金`:`新`}),lm(s,512,0,512,n,e,{seal:c?um:0,fin:c}),!c)for(let[e,t,r]of[[10,`rgba(255,255,255,0.55)`,4],[15,`rgba(0,0,0,0.25)`,3],[26,`rgba(255,255,255,0.3)`,2]])s.lineWidth=r,s.strokeStyle=t,nt(s,e,e,512-e*2,n-e*2,26-e*.4),s.stroke();let l=s.createLinearGradient(0,n,0,i);return l.addColorStop(0,z(e.bg,.1)),l.addColorStop(1,z(e.bg,-.3)),s.fillStyle=l,s.fillRect(0,n,r,72),s.fillStyle=e.accent,s.fillRect(0,n+28.8,r,14.4),nm(s,0,n+28.8,r,14.4,28,4,`rgba(255,255,255,0.7)`),s.fillStyle=`rgba(255,255,255,0.35)`,s.fillRect(0,n+72*.3,r,3),s.fillRect(0,n+48.96,r,3),{canvas:o,top:Jp(r,i,0,0,512,n),bottom:Jp(r,i,512,0,512,n),side:Jp(r,i,0,n,r,72)}}function fm(e,t){let n=Math.round(176*t.z/(t.x/5)),r=1024,i=Math.max(n,320),{c:a,ctx:o}=qp(r,i),s=e.rarity===`secret`,c=(t,r)=>{o.save(),o.beginPath(),o.rect(t,0,176,n),o.clip(),o.translate(t,0);let i=o.createLinearGradient(0,0,176,0);if(i.addColorStop(0,z(e.bg,-.2)),i.addColorStop(.35,z(e.bg,.18)),i.addColorStop(.6,e.bg),i.addColorStop(1,z(e.bg,-.3)),o.fillStyle=i,o.fillRect(0,0,176,n),!r)o.fillStyle=e.accent,o.fillRect(0,n*.36,176,n*.28),o.fillStyle=`rgba(255,255,255,0.5)`,o.fillRect(0,n*.36,176,3),o.fillRect(0,n*.64-3,176,3),o.save(),o.translate(88,n/2),o.rotate(-Math.PI/2),Xp(o,`チョコバー`,0,24.64,63.36,`#ffffff`,{stroke:Kp,lw:8,maxW:n*.26}),o.restore(),Xp(o,`CHOCO`,88,n*.24,35.2,s?`#ffe680`:`rgba(255,255,255,0.9)`,{weight:800}),Xp(o,`ミルク`,88,n*.8,35.2,`rgba(255,255,255,0.9)`,{weight:800});else{o.fillStyle=`rgba(255,253,246,0.9)`,o.fillRect(24.64,n*.2,126.72,n*.6),o.fillStyle=`rgba(0,0,0,0.5)`;for(let e=0;e<12;e++)o.fillRect(35.2,n*(.24+e*.045),176*(.3+e*37%30/100),2);o.fillStyle=`rgba(0,0,0,0.2)`,o.fillRect(87,0,3,n)}cm(o,176,n,n*.07,e),o.restore()};return c(0,!1),c(176,!0),o.fillStyle=`#fffaf0`,o.fillRect(368,0,640,150),o.fillStyle=e.accent,o.fillRect(368,0,640,24),o.fillRect(368,126,640,24),Xp(o,e.name,688,99,60,e.bg,{stroke:`#ffffff`,lw:6,maxW:640*.72}),em(o,956.8000000000001,75,54,12,s?`#ffd34d`:`#ff3b3b`,`#ffffff`),Xp(o,`5本`,956.8000000000001,88.5,39,`#ffffff`,{stroke:`rgba(90,0,0,0.6)`,lw:4}),it(o,e,425.6,75,150/330),o.fillStyle=`#fffaf0`,o.fillRect(368,170,640,150),o.fillStyle=e.accent,o.fillRect(368,170,640,24),o.fillRect(368,296,640,24),Zp(o,764.8,206,192,78,e.id),Qp(o,400,200,320,[[`名称`,`チョコレート菓子`],[`内容量`,`5本`],[`保存方法`,`28℃以下の涼しい所`]],19.5),{canvas:a,bar:Jp(r,i,0,0,176,n),barBack:Jp(r,i,176,0,176,n),top:Jp(r,i,368,0,640,150),bottom:Jp(r,i,368,170,640,150),side:Jp(r,i,368,3,640,18)}}function pm(e,t,n,r,i){switch(e.save(),e.translate(n,r),e.scale(i,i),e.lineWidth=5,e.strokeStyle=Kp,e.lineJoin=`round`,t.id){case`tea`:for(let t of[-.5,.5])e.save(),e.rotate(t),e.beginPath(),e.moveTo(0,46),e.quadraticCurveTo(-34,0,0,-50),e.quadraticCurveTo(34,0,0,46),e.fillStyle=`#7ed06a`,e.fill(),e.stroke(),e.beginPath(),e.moveTo(0,40),e.lineTo(0,-36),e.lineWidth=3,e.stroke(),e.restore();break;case`sports`:e.beginPath(),e.moveTo(12,-52),e.lineTo(-28,6),e.lineTo(-2,6),e.lineTo(-14,52),e.lineTo(30,-10),e.lineTo(4,-10),e.closePath(),e.fillStyle=`#ffe24a`,e.fill(),e.stroke();break;case`orange`:e.beginPath(),e.arc(0,0,46,0,Math.PI*2),e.fillStyle=`#ff9a1f`,e.fill(),e.stroke(),e.beginPath(),e.arc(0,0,37,0,Math.PI*2),e.fillStyle=`#ffd27a`,e.fill(),e.lineWidth=3,e.strokeStyle=`#fff3c9`;for(let t=0;t<8;t++)e.beginPath(),e.moveTo(0,0),e.lineTo(Math.cos(t*Math.PI/4)*37,Math.sin(t*Math.PI/4)*37),e.stroke();break;case`grape`:e.fillStyle=`#8a4fd0`;for(let[t,n]of[[-22,-18],[0,-18],[22,-18],[-11,2],[11,2],[0,22]])e.beginPath(),e.arc(t,n,14,0,Math.PI*2),e.fill(),e.stroke();e.beginPath(),e.moveTo(0,-32),e.quadraticCurveTo(10,-52,26,-46),e.stroke();break;case`milktea`:e.beginPath(),e.moveTo(-34,-22),e.lineTo(34,-22),e.quadraticCurveTo(34,34,0,36),e.quadraticCurveTo(-34,34,-34,-22),e.closePath(),e.fillStyle=`#fffaf0`,e.fill(),e.stroke(),e.beginPath(),e.arc(40,0,15,-1.2,1.4),e.stroke(),e.beginPath(),e.ellipse(0,-22,30,8,0,0,Math.PI*2),e.fillStyle=`#c99a6a`,e.fill(),e.stroke();break;case`water`:e.beginPath(),e.moveTo(-52,34),e.lineTo(-14,-34),e.lineTo(6,-4),e.lineTo(22,-24),e.lineTo(52,34),e.closePath(),e.fillStyle=`#5fb0ea`,e.fill(),e.stroke(),e.beginPath(),e.moveTo(-26,-12),e.lineTo(-14,-34),e.lineTo(-4,-18),e.closePath(),e.fillStyle=`#ffffff`,e.fill();break;default:for(let[n,r,i]of[[-20,16,26],[22,-6,20],[-6,-34,14],[30,32,10]])e.beginPath(),e.arc(n,r,i,0,Math.PI*2),e.fillStyle=t.rarity===`secret`?`#fff3b0`:`rgba(255,255,255,0.85)`,e.fill(),e.stroke(),e.beginPath(),e.arc(n-i*.3,r-i*.3,i*.22,0,Math.PI*2),e.fillStyle=`#ffffff`,e.fill()}e.restore()}function mm(e){let t=1024,{c:n,ctx:r}=qp(t,396),i=e.rarity===`secret`,a=r.createLinearGradient(0,0,0,332);a.addColorStop(0,z(e.bg,.18)),a.addColorStop(1,z(e.bg,-.18)),r.fillStyle=a,r.fillRect(0,0,t,332),r.fillStyle=e.accent,r.fillRect(0,0,t,33.2),r.fillRect(0,298.8,t,33.2),r.fillStyle=`rgba(255,255,255,0.3)`;for(let e=0;e<t;e+=34)r.beginPath(),r.arc(e+17,16.6,6,0,Math.PI*2),r.arc(e+17,315.4,6,0,Math.PI*2),r.fill();for(let n of[t*.25,t*.75])r.fillStyle=`rgba(255,255,255,0.2)`,r.beginPath(),r.ellipse(n,166,t*.15,122.84,0,0,Math.PI*2),r.fill(),pm(r,e,n,109.56,332/330),Xp(r,e.name,n,332*.69,66.4,i?`#fff3b0`:`#ffffff`,{stroke:Kp,lw:18.26,maxW:t*.225}),Xp(r,`280ml`,n,275.56,332*.085,`#ffffff`,{stroke:`rgba(0,0,0,0.45)`,lw:4,weight:800});for(let n of[0,t*.5]){let i=n-t*.07;for(let a of n===0?[i,i+t]:[i])r.fillStyle=`rgba(255,253,246,0.93)`,nt(r,a,49.8,143.36,332*.7,8),r.fill(),n===0?$p(r,a+6,332*.17,131.36,219.12,`100mlあたり`,e.id):(Qp(r,a+8,332*.16,127.36000000000001,[[`名称`,`清涼飲料水`],[`内容量`,`280ml`],[`保存`,`直射日光をさける`]],15.272),Zp(r,a+10,166,123.36000000000001,332*.32,e.id))}r.fillStyle=e.accent,r.fillRect(0,332,128,64),r.fillStyle=`rgba(0,0,0,0.16)`;for(let e=0;e<128;e+=6)r.fillRect(e,351.2,2,44.8);r.fillStyle=`rgba(255,255,255,0.3)`,r.fillRect(0,346.08,128,3),r.fillStyle=`#fffaf0`,r.fillRect(128,332,896,64),r.fillStyle=e.bg,r.fillRect(128,332,896,8.96),r.fillRect(128,387.04,896,8.96);for(let t of[.25,.75])em(r,128+896*(t-.17),364,23.04,10,i?`#ffd34d`:`#ff3b3b`),Xp(r,`3本`,128+896*(t-.17),371.68,19.2,`#ffffff`,{}),Xp(r,`${e.name} おとくな3本セット`,128+896*(t+.03),374.24,28.16,z(e.bg,-.25),{maxW:295.68});return{canvas:n,label:Jp(t,396,0,0,t,332),cap:Jp(t,396,0,332,128,64),band:Jp(t,396,128,332,896,64)}}function hm(e=256){let{c:t,ctx:n}=qp(e,e),r=Yp(`crinkle`),i=new Float32Array(e*e);for(let[t,n]of[[6,1],[13,.55],[29,.28]]){let a=new Float32Array(t*t).map(()=>r()),o=(e,n)=>a[(n%t+t)%t*t+(e%t+t)%t];for(let r=0;r<e;r++)for(let a=0;a<e;a++){let s=a/e*t,c=r/e*t,l=Math.floor(s),u=Math.floor(c),d=s-l,f=c-u,p=d*d*(3-2*d),m=f*f*(3-2*f),h=(o(l,u)*(1-p)+o(l+1,u)*p)*(1-m)+(o(l,u+1)*(1-p)+o(l+1,u+1)*p)*m;i[r*e+a]+=Math.abs(h-.5)*2*n}}let a=n.createImageData(e,e),o=(t,n)=>i[(n+e)%e*e+(t+e)%e];for(let t=0;t<e;t++)for(let n=0;n<e;n++){let r=(o(n+1,t)-o(n-1,t))*2.2,i=(o(n,t+1)-o(n,t-1))*2.2,s=Math.hypot(r,i,1),c=(t*e+n)*4;a.data[c]=(-r/s*.5+.5)*255,a.data[c+1]=(i/s*.5+.5)*255,a.data[c+2]=(1/s*.5+.5)*255,a.data[c+3]=255}return n.putImageData(a,0,0),t}var gm=[`position`,`normal`,`uv`,`color`];function _m(e,t){let n=e.geometry;if(!n.attributes.position||!n.attributes.normal||!n.attributes.uv)return null;let r=n.index?n.toNonIndexed():n.clone();for(let e of Object.keys(r.attributes))gm.includes(e)||r.deleteAttribute(e);r.morphAttributes={},r.clearGroups(),e.updateWorldMatrix(!0,!1);let i=e.matrixWorld.clone();if(t&&(t.updateWorldMatrix(!0,!1),i.premultiply(t.matrixWorld.clone().invert())),r.applyMatrix4(i),i.determinant()<0)for(let e of Object.keys(r.attributes)){let t=r.attributes[e],n=t.itemSize,i=t.array;for(let e=0;e+2<t.count;e+=3)for(let t=0;t<n;t++){let r=(e+1)*n+t,a=(e+2)*n+t,o=i[r];i[r]=i[a],i[a]=o}}return r}function vm(e){let t=e;if(!t.isMesh||t.isInstancedMesh||t.isSkinnedMesh||Array.isArray(t.material)||!t.visible||t.children.length||t.userData.keep)return!1;let n=t.material;return!(!n.visible||n.transparent&&!t.userData.merge)}function ym(e,t={}){let n=new Map,r=t.only??[...e.children];for(let i of r){if(i.parent!==e||t.exclude?.has(i)||!vm(i))continue;let r=!!i.geometry.attributes.color,a=`${i.material.uuid}|${i.castShadow}|${i.receiveShadow}|${i.renderOrder}|${r}`;(n.get(a)??n.set(a,[]).get(a)).push(i)}let i=[],a=[];for(let t of n.values()){if(t.length<2)continue;let n=[],r=[];for(let i of t){let t=_m(i,e);t&&(n.push(t),r.push(i))}if(n.length<2){n.forEach(e=>e.dispose());continue}let o=bp(n,!1);if(n.forEach(e=>e.dispose()),!o)continue;let s=r[0],c=new q(o,s.material);c.castShadow=s.castShadow,c.receiveShadow=s.receiveShadow,c.renderOrder=s.renderOrder,c.matrixAutoUpdate=!1,e.add(c);for(let t of r)e.remove(t),t.geometry.dispose(),a.push(t);i.push(c)}return{merged:i,removed:a}}function bm(e,t,n,r,i,a,o,s){let c=new Vo(e,t,n).toNonIndexed();s&&c.applyMatrix4(new ui().makeRotationFromEuler(new bi(s.x??0,s.y??0,s.z??0))),c.translate(r,i,a);let l=new G(o),u=c.attributes.position.count,d=new Float32Array(u*3);for(let e=0;e<u;e++)l.toArray(d,e*3);return c.setAttribute(`color`,new Ea(d,3)),c.clearGroups(),c}function xm(e,t,n,r){let i=new lc(e,t).toNonIndexed(),a=i.attributes.uv;for(let e=0;e<a.count;e++)a.setXY(e,n.u0+a.getX(e)*(n.u1-n.u0),n.v0+a.getY(e)*(n.v1-n.v0));return i.applyMatrix4(r),i}function Sm(e,t,n,r){let i=new Vo(e,t,n),a=i.attributes.uv;for(let e=0;e<6;e++){let t=r[e]??r[r.length-1];for(let n=e*4;n<e*4+4;n++)a.setXY(n,t.u0+a.getX(n)*(t.u1-t.u0),t.v0+a.getY(n)*(t.v1-t.v0))}let o=i.toNonIndexed();return i.dispose(),o.clearGroups(),o}function Cm(e,t,n,r){let i=new Vo(e,t,n).toNonIndexed(),a=[`position`,`normal`,`uv`],o={position:3,normal:3,uv:2},s={position:[],normal:[],uv:[]},c=new Ba,l=0,u=Math.max(...r)+1;for(let e=0;e<u;e++){let t=0;for(let n=0;n<6;n++)if(r[n]===e){for(let e of a){let t=i.attributes[e].array,r=o[e];for(let i=n*6*r;i<(n+1)*6*r;i++)s[e].push(t[i])}t+=6}t&&c.addGroup(l,t,e),l+=t}for(let e of a)c.setAttribute(e,new Ea(new Float32Array(s[e]),o[e]));return i.dispose(),c}function wm(e){let t=new Map;e.updateWorldMatrix(!0,!0),e.traverse(e=>{let n=e;if(!n.isMesh||Array.isArray(n.material))return;let r=`${n.material.uuid}|${n.castShadow}|${n.receiveShadow}`;(t.get(r)??t.set(r,[]).get(r)).push(n)});let n=[];for(let r of t.values()){let t=r.map(t=>_m(t,e)).filter(e=>!!e);if(t.length!==r.length){t.forEach(e=>e.dispose());return}let i=bp(t,!1);if(t.forEach(e=>e.dispose()),!i)return;let a=new q(i,r[0].material);a.castShadow=r[0].castShadow,a.receiveShadow=r[0].receiveShadow,n.push(a)}e.traverse(e=>{e.isMesh&&e.geometry.dispose()}),e.clear(),e.add(...n)}function Tm(e,t,n=1024,r=n){let i=t/n,a=t/r;return{u0:e.u0+i,v0:e.v0+a,u1:e.u1-i,v1:e.v1-a}}var Em=(e=0,t=0,n=0,r=0,i=0,a=0,o=1,s=1,c=1)=>new ui().compose(new U(e,t,n),new Vr().setFromEuler(new bi(r,i,a)),new U(o,s,c));function Dm(e){let t=e.index?e.toNonIndexed():e;t!==e&&e.dispose();for(let e of Object.keys(t.attributes))[`position`,`normal`,`uv`,`color`].includes(e)||t.deleteAttribute(e);return t.clearGroups(),t}function Om(e,t,n){let r=Dm(e);r.applyMatrix4(n);let i=new G(t),a=r.attributes.position.count,o=new Float32Array(a*3);for(let e=0;e<a;e++)i.toArray(o,e*3);return r.setAttribute(`color`,new Ea(o,3)),r}function km(e,t){let n=e.attributes.uv;for(let e=0;e<n.count;e++)n.setXY(e,t.u0+n.getX(e)*(t.u1-t.u0),t.v0+n.getY(e)*(t.v1-t.v0));return e}function Am(e){let t=bp(e,!1);if(e.forEach(e=>e.dispose()),!t)throw Error(`景品の形をまとめられない`);return t}var jm=e=>{let t=new Lo(e);return t.colorSpace=Yn,t.anisotropy=8,t};function Mm(e,t){if(!e)return new Ec(t);let{clearcoat:n,clearcoatRoughness:r,...i}=t;return new Y(i)}var Nm=null;function Pm(){return Nm||(Nm=new Lo(hm()),Nm.wrapS=Nm.wrapT=Et),Nm}function Fm(e,t,n=!0,r=!0){let i=new q(e,t);return i.castShadow=n,i.receiveShadow=r,i}function Im(e,t,n,r,i){let a=.0215,o=.0185,s=.0195,c=e.ears??`none`,l=e.body,u=e.accent,d=`#241a1a`,f=t?8:12,p=[],m=(e,t,i,a,o,s,c,l=0,u=f)=>p.push(Om(new pc(1,u,Math.max(5,Math.round(u*.7))),e,Em(t,n+i,r+a,0,0,l,o,s,c))),h=(e,i,a,o,s,c,l=0,u=0)=>p.push(Om(new Wo(s,c,t?8:12),e,Em(i,n+a,r+o,l,0,u))),g=(e,t)=>s*Math.sqrt(Math.max(0,1-(e/a)**2-(t/o)**2));m(l,0,0,0,a,o,s,0,t?18:28);for(let e of[-1,1]){switch(c){case`cat`:h(l,e*.0118,.0182,.001,.0062,.0098,0,-e*.32),h(u,e*.0118,.0176,.0022,.0036,.0062,0,-e*.32);break;case`fox`:h(l,e*.012,.0195,.001,.0066,.0128,0,-e*.28),h(`#5a3524`,e*.012,.019,.0024,.0036,.0082,0,-e*.28);break;case`dog`:m(u,e*.0198,.0058,0,.0042,.0098,.005,e*.25);break;case`rabbit`:m(l,e*.0066,.0255,0,.0036,.0112,.0026,-e*.12),m(u,e*.0066,.0255,.0017,.0019,.0084,.0012,-e*.12);break;case`bear`:m(l,e*.0128,.0155,0,.0052,.0052,.004),m(u,e*.0128,.0155,.0028,.0028,.0028,.0016);break;case`hamster`:m(l,e*.0118,.016,0,.0043,.0043,.0032),m(`#ffb3c0`,e*.0118,.016,.0022,.0024,.0024,.0014);break;case`panda`:m(u,e*.013,.0152,0,.0056,.0056,.0042);break;case`frog`:m(l,e*.0095,.0158,.005,.0062,.0062,.0062),m(`#ffffff`,e*.0095,.0165,.0085,.0042,.0042,.0036),m(d,e*.0095,.0166,.0115,.002,.002,.0012)}if(c!==`frog`){let t=.0072,n=.0042,r=g(t,n)-6e-4;c===`panda`?(m(u,e*t,.0037999999999999996,r-4e-4,.0044,.0054,.0014,e*.35),m(`#ffffff`,e*t,n,r+8e-4,.0017,.0017,.001),m(d,e*t,n,r+.0016,.001,.001,6e-4,0,6)):(m(d,e*t,n,r,.0022,.0025,.0016),m(`#ffffff`,e*t+7e-4,.0050999999999999995,r+.0013,7e-4,7e-4,5e-4,0,6))}m([`dog`,`bear`,`none`,`fox`,`panda`,`hamster`,`chick`].includes(c)?`#ff9fb0`:u,e*.0124,-.0012,g(.0124,-.0012)-4e-4,.0032,.002,9e-4),m(c===`panda`?u:c===`chick`?z(l,-.1):l,e*.0198,-.003,.004,.0034,.0058,.0038,e*.35),m(c===`none`||c===`chick`||c===`panda`?u:z(l,-.1),e*.0085,i-n+.0018,.0138,.0048,.0022,.006)}return c===`chick`&&(m(l,0,.0195,0,.0022,.004,.0022),m(l,.003,.0185,0,.0018,.003,.0018,-.5),m(l,-.003,.0185,0,.0018,.003,.0018,.5)),c===`none`&&m(`#ffffff`,0,-.004,g(0,-.004)-.0045,.0135,.0125,.006),(c===`hamster`||c===`fox`)&&m(u,0,-.005,g(0,-.005)-.004,.011,.009,.005),c===`none`||c===`chick`?h(u,0,5e-4,g(0,5e-4)+.0012,.0024,.0045,Math.PI/2):m(d,0,.0012,g(0,.0012),.0013,9e-4,8e-4,0,6),c===`fox`?(m(l,0,-.004,-.0195,.0055,.0055,.008),m(u,0,-.002,-.026,.0036,.0036,.0036)):m(c===`rabbit`?`#ffffff`:l,0,-.007,-.0185,.0038,.0038,.0038),p}function Lm(e,t){let n=u(e.shape),r=n.x*2,i=n.y*2,a=n.z*2,o=Up(e),s=e=>Tm(e,2,1536,1024),c=Sm(r,i,a,[s(o.right),s(o.left),s(o.top),s(o.bottom),s(o.front),s(o.back)]),l=new Ri,d=e.rarity===`secret`;return l.add(Fm(c,Mm(t,{map:jm(o.canvas),roughness:d?.3:.56,metalness:d?.25:0,clearcoat:d?.5:.22,clearcoatRoughness:.37}))),l}function Rm(e,t){if(e.hero)return Lm(e,t);let n=u(e.shape),r=n.x*2,i=n.y*2,a=n.z*2,o=im(e),s=e.rarity===`secret`,c=Sm(r,i,a,[Tm(o.right,3),Tm(o.left,3),Tm(o.top,3),Tm(o.top,3),Tm(o.front,3),Tm(o.back,3)]),l=new Ri;l.add(Fm(c,Mm(t,{map:jm(o.canvas),alphaTest:.5,alphaToCoverage:!0,roughness:.5,clearcoat:.3,clearcoatRoughness:.35})));let d=i/2-i*rm.y1-6e-4,f=.0012,p=z(e.bg,.25),m=z(e.bg,-.12),h=[Om(new lc(r-f*2,i-f*2),p,Em(0,0,-a/2+f)),Om(new lc(a-f*2,i-f*2),m,Em(-r/2+f,0,0,0,Math.PI/2)),Om(new lc(a-f*2,i-f*2),m,Em(r/2-f,0,0,0,-Math.PI/2)),Om(new lc(r-f*2,a-f*2),m,Em(0,i/2-f,0,Math.PI/2)),bm(r-f*2,d+i/2-f,a-f*2,0,(d-i/2+f)/2,0,new G(z(e.bg,.35)).getHex()),Om(new J(.0212,.0212,.0016,t?16:24),`#fffdf6`,Em(0,d+8e-4,.003))],g=d+.0016;h.push(...Im(e,t,g+.01147,.003,g)),l.add(Fm(Am(h),Mm(t,{vertexColors:!0,roughness:s?.24:.36,metalness:s?.55:0,clearcoat:.6,clearcoatRoughness:.25,envMapIntensity:s?3:1.4}),!1,!1));let _=new q(new lc(r*(rm.x1-rm.x0),i*(rm.y1-rm.y0)),new Y({color:16777215,transparent:!0,opacity:.13,roughness:.04,depthWrite:!1,envMapIntensity:3}));return _.position.set(r*((rm.x0+rm.x1)/2-.5),i*(.5-(rm.y0+rm.y1)/2),a/2-.0015),_.renderOrder=2,l.add(_),l}function zm(e,t,n,r,i,a){let{nx:o,nz:s}=a,c=(e,t)=>Math.sin(e*7.3+a.seed)*Math.sin(t*9.1+a.seed*1.7)*.5+Math.sin(e*15.1+t*11.3+a.seed*2.3)*.3+Math.sin(e*3.1-t*5.7)*.2,l=(r,i)=>{let l=[],u=[],d=[];for(let d=0;d<=s;d++)for(let f=0;f<=o;f++){let p=f/o*2-1,m=d/s*2-1,h=Math.abs(m),g=-t*.42,_=g+r*5e-4,v=1;if(h<1-a.seal){let e=h/(1-a.seal),n=(1-e**2.6)**.55,i=(1-Math.abs(p)**2.4)**.5,o=a.crinkle*c(p,m*r)*i*(.35+.65*e*e)*Math.min(1,n*3);_=r>0?Math.min(t,Math.max(g+5e-4,g+(t*.96-g)*n*i+o)):Math.max(-t,Math.min(g-5e-4,g-(t+g)*Math.min(1,1.9*n*i))),v=1-.05*n}l.push(e*p*v,_,n*m);let y=r>0?(p+1)/2:(1-p)/2,b=(1-m)/2;u.push(i.u0+y*(i.u1-i.u0),i.v0+b*(i.v1-i.v0))}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=e*(o+1)+t,i=n+1,a=n+o+1,s=a+1;r>0?d.push(n,a,i,i,a,s):d.push(n,i,a,i,s,a)}let f=new Ba;return f.setAttribute(`position`,new K(l,3)),f.setAttribute(`uv`,new K(u,2)),f.setIndex(d),f.computeVertexNormals(),Dm(f)};return Am([l(1,r),l(-1,i)])}function Bm(e,t,n,r,i,a,o,s={x:0,y:0,z:0}){let c=Dm(e),l=c.attributes.position,u=c.attributes.normal,d=c.attributes.uv,f=(e,t,n,r)=>d.setXY(e,t.u0+Math.min(1,Math.max(0,n))*(t.u1-t.u0),t.v0+Math.min(1,Math.max(0,r))*(t.v1-t.v0));for(let e=0;e<l.count;e+=3){let c=u.getX(e)+u.getX(e+1)+u.getX(e+2),d=u.getY(e)+u.getY(e+1)+u.getY(e+2),p=u.getZ(e)+u.getZ(e+1)+u.getZ(e+2),m=Math.hypot(c,d,p)||1;for(let u=e;u<e+3;u++){let e=(l.getX(u)-s.x)/t,h=(l.getY(u)-s.y)/n,g=(l.getZ(u)-s.z)/r;d/m>.6?f(u,i,(e+1)/2,(1-g)/2):d/m<-.6?f(u,a,(1-e)/2,(1-g)/2):f(u,o,((Math.abs(c)>Math.abs(p)?g:e)+1)/2,(h+1)/2)}}return c}function Vm(e,t){let n=u(e.shape),{x:r,y:i,z:a}=n,o=dm(e,n),s=jm(o.canvas),c=e.pack??`carton`,l=e.rarity===`secret`,d,f;if(c===`bag`)d=zm(r,i,a,o.top,o.bottom,{seal:um,nx:t?12:20,nz:t?18:30,crinkle:.0016,seed:e.id.length*1.7}),f=Mm(t,{map:s,normalMap:Pm(),normalScale:new H(.55,.55),roughness:.34,metalness:.12,clearcoat:.4,clearcoatRoughness:.3,envMapIntensity:1.3});else if(c===`tin`){let e=.0045,n=t?2:4;d=Am([Bm(new yp(r*2-.002,i*2*.62,a*2-.002,n,e).translate(0,-i+i*.62,0),r,i,a,o.top,o.bottom,o.side),Bm(new yp(r*2,i*2*.42,a*2,n,e).translate(0,i-i*.42,0),r,i,a,o.top,o.bottom,o.side)]),f=Mm(t,{map:s,roughness:l?.3:.38,metalness:l?.45:.22,clearcoat:.25,clearcoatRoughness:.4,envMapIntensity:.8})}else if(c===`bars`){let e=.001,n=(r*2-e*4)/10,c=[];for(let r=0;r<5;r++){let s=zm(n,i*.9,a*.98,o.bar,o.barBack,{seal:.07,nx:t?4:6,nz:t?10:16,crinkle:5e-4,seed:r*2.1+1});s.translate((r-2)*(n*2+e),0,0),c.push(s)}let l=.0135;c.push(Bm(new yp(r*2,i*2,l*2,2,.0012),r,i,l,o.top,o.bottom,o.side)),d=Am(c),f=Mm(t,{map:s,normalMap:Pm(),normalScale:new H(.25,.25),roughness:.36,metalness:.1,clearcoat:.35,clearcoatRoughness:.3,envMapIntensity:1.3})}else d=Bm(new yp(r*2,i*2,a*2,2,.0016),r,i,a,o.top,o.bottom,o.side),f=Mm(t,{map:s,roughness:.55,clearcoat:.15,clearcoatRoughness:.5,envMapIntensity:.7});return Fm(d,f)}var Hm=[[.43,.905],[.43,.915],[.52,.918],[.52,.928],[.42,.932],[.42,.985]],Um={soda:[[0,.03],[.5,.012],[.8,0],[.95,.02],[1,.07],[1,.17],[.975,.19],[.975,.55],[1,.57],[1,.62],[.9,.66],[.9,.69],[1,.73],[.97,.77],[.84,.82],[.62,.87],[.47,.895]],tea:[[0,.02],[.6,.008],[.9,0],[1,.03],[1,.16],[.975,.19],[.975,.55],[1,.58],[.96,.61],[1,.64],[.96,.67],[1,.7],[.99,.74],[.88,.8],[.66,.86],[.47,.895]],sports:[[0,.02],[.6,.008],[.92,0],[1,.04],[1,.11],[.9,.15],[.975,.19],[.975,.55],[1,.58],[1,.68],[.93,.77],[.72,.85],[.5,.89]],water:[[0,.02],[.6,.008],[.9,0],[1,.03],[.96,.06],[1,.09],[.96,.12],[1,.15],[.975,.19],[.975,.55],[1,.58],[.96,.61],[1,.64],[.96,.67],[1,.7],[.9,.78],[.68,.85],[.47,.895]]},Wm={y0:.19,y1:.55},Gm=.8,Km={y0:.065,y1:.165},qm=(e,t,n,r)=>Dm(new cc(e.map(([e,r])=>new H(e*t,r*n-n/2)),r));function Jm(e,t){let n=[];for(let r=0;r<e.length;r++){let[i,a]=e[r];if(a<=t){n.push([i*.93,a+(r===0?.004:0)]);continue}let[o,s]=e[r-1],c=(t-s)/(a-s);n.push([(o+(i-o)*c)*.93,t]);break}return n.push([0,t]),n}function Ym(e,t,n,r,i,a){let o=t*1.012,s=(e-1)*t,c=[];for(let e=0;e<=a;e++){let t=Math.PI*e/a;c.push({x:o*Math.cos(t),z:s+o*Math.sin(t),nx:Math.cos(t),nz:Math.sin(t)})}for(let e=0;e<=a;e++){let t=Math.PI+Math.PI*e/a;c.push({x:o*Math.cos(t),z:-s+o*Math.sin(t),nx:Math.cos(t),nz:Math.sin(t)})}c.push(c[0]);let l=[0];for(let e=1;e<c.length;e++)l.push(l[e-1]+Math.hypot(c[e].x-c[e-1].x,c[e].z-c[e-1].z));let u=l[l.length-1],d=[],f=[],p=[],m=(e,t,n,r)=>{d.push(e.x,t,e.z),f.push(e.nx,0,e.nz),p.push(i.u0+n*(i.u1-i.u0),i.v0+r*(i.v1-i.v0))};for(let e=0;e<c.length-1;e++){let t=Math.floor(2*l[e]/u+1e-6),i=2*l[e]/u-t,a=Math.min(1,2*l[e+1]/u-t),o=c[e],s=c[e+1];m(o,n,1-i,0),m(o,r,1-i,1),m(s,n,1-a,0),m(s,n,1-a,0),m(o,r,1-i,1),m(s,r,1-a,1)}let h=new Ba;return h.setAttribute(`position`,new K(d,3)),h.setAttribute(`normal`,new K(f,3)),h.setAttribute(`uv`,new K(p,2)),h}function Xm(e,t){let n=e.shape,{count:r,radius:i}=n,a=n.height??n.length??.17,o=mm(e),s=t?16:28,c=[...Um[e.bottle??`soda`],...Hm],l=qm(c,i,a,s),u=qm(Jm(c,Gm),i,a,s),d=km(Dm(new J(i*.988,i*.988,(Wm.y1-Wm.y0)*a,s,1,!0)),o.label);d.rotateY(Zm),d.translate(0,((Wm.y0+Wm.y1)/2-.5)*a,0);let f=km(Dm(new J(i*.475,i*.475,.07*a,t?12:20)),o.cap).translate(0,(.96-.5)*a,0),p=[],m=[],h=[];for(let e=0;e<r;e++){let t=(e-(r-1)/2)*i*2;p.push(l.clone().translate(0,0,t)),m.push(u.clone().translate(0,0,t)),h.push(d.clone().translate(0,0,t),f.clone().translate(0,0,t))}[l,u,d,f].forEach(e=>e.dispose()),r>1&&h.push(Ym(r,i,(Km.y0-.5)*a,(Km.y1-.5)*a,o.band,t?8:12));let g=new Ri;g.add(Fm(Am(h),Mm(t,{map:jm(o.canvas),roughness:.46,clearcoat:.3,clearcoatRoughness:.3})));let _=.55+.45*(e.cloudy??.4),v=Fm(Am(m),new Y({color:e.body,emissive:e.body,emissiveIntensity:.32,transparent:_<.98,opacity:_,roughness:.18,envMapIntensity:1.6}),!1,!1);v.renderOrder=1,g.add(v);let y=Fm(Am(p),Mm(t,{color:16777215,transparent:!0,opacity:.15,roughness:.03,clearcoat:1,clearcoatRoughness:.03,depthWrite:!1,envMapIntensity:2.2}),!0,!1);if(y.renderOrder=2,g.add(y),n.type===`bottles`)for(let e of g.children)e.geometry.rotateY(Math.PI/2).rotateX(Math.PI/2);return g}var Zm=0;function Qm(e,t){return e.category===`plush`?gp(e,t):e.category===`drink`||e.shape.type!==`box`?Xm(e,t):e.category===`figure`?Rm(e,t):Vm(e,t)}function $m(e){e.traverse(e=>{if(e instanceof q){e.geometry.dispose();for(let t of[].concat(e.material))t.map?.dispose()}})}var eh=new Map,th=class{scene=new qi;camera=new ll(24,1,.02,5);stage=new Ri;shadow;cache=eh;backs=new Map;renderer;redraw;low;constructor(e,t,n,r){this.renderer=e,this.redraw=n,this.low=r;let i=this.scene;i.environment=t,i.environmentIntensity=.55,i.add(new Zc(16777215,3811930,.3));let a=new ml(16774374,1.7);a.position.set(-.7,1.3,1.1);let o=new ml(12570879,.8);o.position.set(.9,.6,-.8),i.add(a,o,this.stage);let s=document.createElement(`canvas`);s.width=s.height=128;let c=s.getContext(`2d`),l=c.createRadialGradient(64,64,4,64,64,62);l.addColorStop(0,`rgba(0,0,0,0.55)`),l.addColorStop(.6,`rgba(0,0,0,0.2)`),l.addColorStop(1,`rgba(0,0,0,0)`),c.fillStyle=l,c.fillRect(0,0,128,128),this.shadow=new q(new lc(1,1),new Qa({map:new Lo(s),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,i.add(this.shadow)}setEnvironment(e){this.scene.environment=e}dispose(){for(let e of this.backs.values())e.dispose();this.backs.clear(),this.shadow.geometry.dispose();let e=this.shadow.material;e.map?.dispose(),e.dispose()}background(e){let t=e?`secret`:`normal`,n=this.backs.get(t);if(!n){let r=document.createElement(`canvas`);r.width=150,r.height=210;let i=r.getContext(`2d`),a=i.createLinearGradient(0,0,0,210);e?(a.addColorStop(0,`#5a3d12`),a.addColorStop(1,`#1d1208`)):(a.addColorStop(0,`#3a2a70`),a.addColorStop(1,`#151030`)),i.fillStyle=a,i.fillRect(0,0,150,210);let o=i.createRadialGradient(75,95,5,75,95,110);o.addColorStop(0,e?`rgba(255,225,130,0.55)`:`rgba(190,170,255,0.42)`),o.addColorStop(1,`rgba(255,255,255,0)`),i.fillStyle=o,i.fillRect(0,0,150,210),n=new Lo(r),n.colorSpace=Yn,this.backs.set(t,n)}return n}static saved(e,t=300,n=420){return eh.get(`${e.id}:${t}x${n}`)}url(e,t=300,n=420){let r=`${e.id}:${t}x${n}`,i=this.cache.get(r);if(i)return i;let a=null;try{let i=this.renderer,o=i.getPixelRatio(),s=i.getDrawingBufferSize(new H);if(s.x<64||s.y<64)return null;let c=Math.min(1,s.x/t,s.y/n),l=Math.floor(t*c),u=Math.floor(n*c);a=Qm(e,this.low),e.category===`figure`?a.rotation.set(0,-.5,0):e.category===`plush`?a.rotation.set(0,-.35,0):e.category===`snack`?a.rotation.set(1.02,0,.3,`ZXY`):a.rotation.set(0,-Math.PI/2+.28,0),this.stage.add(a),this.stage.updateMatrixWorld(!0);let d=new ca().setFromObject(a),f=d.getBoundingSphere(new Ma),p=l/u,m=Br.degToRad(this.camera.fov),h=2*Math.atan(Math.tan(m/2)*p),g=f.radius/Math.sin(Math.min(m,h)/2)*.74;this.camera.aspect=p,this.camera.position.copy(f.center).add(new U(0,Math.sin(.3),Math.cos(.3)).multiplyScalar(g)),this.camera.lookAt(f.center),this.camera.updateProjectionMatrix();let _=Math.max(d.max.x-d.min.x,d.max.z-d.min.z)*1.7;this.shadow.scale.set(_,_,1),this.shadow.position.set(f.center.x,d.min.y-5e-4,f.center.z),this.scene.background=this.background(e.rarity===`secret`);let v=i.getViewport(new ai),y=i.getScissor(new ai),b=i.getScissorTest();i.setViewport(0,0,l/o,u/o),i.setScissor(0,0,l/o,u/o),i.setScissorTest(!0),i.render(this.scene,this.camera);let x=document.createElement(`canvas`);x.width=l,x.height=u,x.getContext(`2d`).drawImage(i.domElement,0,s.y-u,l,u,0,0,l,u),i.setViewport(v),i.setScissor(y),i.setScissorTest(b),this.redraw();let S=x.toDataURL(`image/jpeg`,.9);return this.cache.set(r,S),S}catch{return null}finally{a&&(this.stage.remove(a),$m(a))}}},nh=Br.degToRad,rh={front:{label:`正面`,yaw:0,pitch:nh(31),target:[0,.15,-.02],halfWidth:.26,halfHeight:.34},angle:{label:`斜め`,yaw:nh(38),pitch:nh(30),target:[0,.12,-.02],halfWidth:.27,halfHeight:.32},side:{label:`横`,yaw:nh(90),pitch:nh(24),target:[0,.12,-.02],halfWidth:.25,halfHeight:.3},top:{label:`真上`,yaw:0,pitch:nh(78),target:[0,.02,0],halfWidth:.25,halfHeight:.22},tray:{label:`取出口`,yaw:nh(-8),pitch:nh(3),target:[-.15,-.19,.22],halfWidth:.16,halfHeight:.11}},ih=nh(110),ah=nh(4),oh=nh(86),sh=.45,ch=1.8,lh=.52;function uh(e){let t=Math.atan2(e.field.halfX,e.field.halfZ),n=rh.angle.yaw;return Math.abs(n-t)<nh(10)?t-nh(16):n}var dh=class{preset=`front`;yaw=rh.front.yaw;pitch=rh.front.pitch;zoom=1;follow=null;camera;cur={yaw:0,pitch:0,dist:1,target:new U};started=!1;moving=!0;presets;constructor(e,t){this.camera=e;let n=t.field.halfX/.21,r=Math.max(0,t.field.wallH-.66),i=e=>({...e,target:[e.target[0]*n,e.target[1]+(e===rh.top?0:r*.45),e.target[2]*n],halfWidth:e.halfWidth*n,halfHeight:e.halfHeight*Math.max(1,n*.9)+r*.5}),{hole:a,chute:o}=t;this.presets={front:i(rh.front),angle:{...i(rh.angle),yaw:uh(t)},side:i(rh.side),top:i(rh.top),tray:{...rh.tray,target:[(a.x0+a.x1)/2,o.doorH?o.floorY+o.doorH/2+.01:-.19,o.exitZ0+.05],halfWidth:o.doorH&&o.doorH>.2?(a.x1-a.x0)*.62:Math.min((a.x1-a.x0)*1.3,.22),halfHeight:o.doorH&&o.doorH>.2?o.doorH*.8:Math.min(.11*Math.max(1,(a.x1-a.x0)/.122),.15)}}}saved=null;focus(e){this.saved||={preset:this.preset,yaw:this.yaw,pitch:this.pitch,zoom:this.zoom},this.select(e)}unfocus(){if(!this.saved)return;let e=this.saved;this.saved=null,this.preset=e.preset,this.yaw=e.yaw,this.pitch=e.pitch,this.zoom=e.zoom}get focused(){return this.saved!==null}choose(e){this.saved=null,this.select(e)}select(e){this.preset=e;let t=this.presets[e];this.yaw=t.yaw,this.pitch=t.pitch,this.zoom=1}rotate(e,t){this.yaw=Br.clamp(this.yaw-e*.0065,-ih,ih),this.pitch=Br.clamp(this.pitch+t*.005,ah,oh)}zoomBy(e){this.zoom=Br.clamp(this.zoom/e,sh,ch)}fitDistance(e){let t=nh(this.camera.fov),n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return Math.max(e.halfWidth/Math.tan(n/2),e.halfHeight/Math.tan(t/2))}update(e){let t=this.presets[this.preset],n=fh.set(t.target[0],t.target[1],t.target[2]),r=this.fitDistance(t)*this.zoom;this.follow&&(n.set(this.follow.x,Br.clamp(this.follow.y,.04,.2),this.follow.z),r=this.fitDistance(this.presets.front)*lh*Math.min(1,this.zoom)),this.started||=(this.cur.yaw=this.yaw,this.cur.pitch=this.pitch,this.cur.dist=r,this.cur.target.copy(n),!0);let i=1-Math.exp(-e*6),a=1-Math.exp(-e*2.6);this.cur.yaw+=(this.yaw-this.cur.yaw)*i,this.cur.pitch+=(this.pitch-this.cur.pitch)*i,this.cur.dist+=(r-this.cur.dist)*a,this.cur.target.lerp(n,a),this.moving=Math.abs(this.yaw-this.cur.yaw)>.001||Math.abs(this.pitch-this.cur.pitch)>.001||Math.abs(r-this.cur.dist)>5e-4||this.cur.target.distanceTo(n)>5e-4,this.moving||(this.cur.yaw=this.yaw,this.cur.pitch=this.pitch,this.cur.dist=r,this.cur.target.copy(n));let{yaw:o,pitch:s}=this.cur,c=ph.set(Math.sin(o)*Math.cos(s),Math.sin(s),Math.cos(o)*Math.cos(s)).multiplyScalar(this.cur.dist);this.camera.position.copy(this.cur.target).add(c),this.camera.lookAt(this.cur.target)}},fh=new U,ph=new U;function mh(e,t,n,r,i){let a=new Map,o=null,s=0,c=0,l=(t,n,r=!0)=>e.addEventListener(t,n,{signal:i,passive:r});l(`pointerdown`,t=>{try{e.setPointerCapture(t.pointerId)}catch{}a.set(t.pointerId,{x:t.clientX,y:t.clientY}),a.size===2&&(s=d()),o=a.size===1?{x:t.clientX,y:t.clientY,t:performance.now(),moved:0}:null}),l(`pointermove`,e=>{let r=a.get(e.pointerId);if(!r)return;let i=e.clientX-r.x,c=e.clientY-r.y;if(r.x=e.clientX,r.y=e.clientY,o&&(o.moved+=Math.abs(i)+Math.abs(c)),a.size===1)t.rotate(i,c);else if(a.size===2){let e=d();s>0&&e>0&&t.zoomBy(e/s),s=e}Math.abs(i)+Math.abs(c)>0&&n?.()});let u=e=>{if(a.delete(e.pointerId),s=a.size===2?d():0,e.type===`pointerup`&&o&&o.moved<10&&performance.now()-o.t<450){if(r?.(e.clientX,e.clientY))c=0;else{let e=performance.now();e-c<320?(t.select(t.preset),n?.(),c=0):c=e}}o=null};l(`pointerup`,u),l(`pointercancel`,u),l(`wheel`,e=>{e.preventDefault(),t.zoomBy(Math.exp(-e.deltaY*.0015)),n?.()},!1);function d(){let[e,t]=[...a.values()];return e&&t?Math.hypot(e.x-t.x,e.y-t.y):0}}function hh(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,{c:n,ctx:n.getContext(`2d`)}}function gh(e,t=1){let n=new Lo(e);return n.colorSpace=Yn,n.anisotropy=8,t!==1&&(n.wrapS=n.wrapT=Et,n.repeat.set(t,t)),n}function _h(){let{c:e,ctx:t}=hh(512,512);t.fillStyle=`#eef0f1`,t.fillRect(0,0,512,512);let n=20261115,r=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let e=0;e<2;e++)for(let n=0;n<2;n++){let i=236+Math.round(r()*8);t.fillStyle=`rgb(${i},${i+2},${i+3})`,t.fillRect(n*256,e*256,256,256)}for(let e=0;e<2600;e++){let e=.03+r()*.05;t.fillStyle=r()<.5?`rgba(255,255,255,${e})`:`rgba(60,70,90,${e})`,t.fillRect(r()*512,r()*512,1+r()*1.5,1+r()*1.5)}t.lineCap=`round`;for(let e=0;e<16;e++){let e=r()*512,n=r()*512,i=20+r()*70,a=(r()-.5)*.9;t.strokeStyle=`rgba(90,100,120,${.05+r()*.06})`,t.lineWidth=.8+r()*1.2,t.beginPath(),t.moveTo(e,n),t.lineTo(e+Math.cos(a)*i,n+Math.sin(a)*i),t.stroke()}for(let e=0;e<=2;e++){let n=e*256;t.fillStyle=`rgba(70,80,100,0.55)`,t.fillRect(n-1.5,0,3,512),t.fillRect(0,n-1.5,512,3),t.fillStyle=`rgba(255,255,255,0.7)`,t.fillRect(n+1.5,0,1.5,512),t.fillRect(0,n+1.5,512,1.5)}for(let e=0;e<2;e++)for(let n=0;n<2;n++)for(let[r,i]of[[18,18],[238,18],[18,238],[238,238]]){let a=n*256+r,o=e*256+i;t.fillStyle=`#b6bcc6`,t.beginPath(),t.arc(a,o,4.5,0,Math.PI*2),t.fill(),t.fillStyle=`#8b93a0`,t.beginPath(),t.arc(a,o,3,0,Math.PI*2),t.fill(),t.strokeStyle=`#5d6471`,t.lineWidth=1.2,t.beginPath(),t.moveTo(a-2.5,o),t.lineTo(a+2.5,o),t.moveTo(a,o-2.5),t.lineTo(a,o+2.5),t.stroke()}let i=gh(e);return i.wrapS=i.wrapT=Et,i}function vh(){let{c:e,ctx:t}=hh(256,128),n=21931,r=()=>(n=n*1664525+1013904223>>>0,n/4294967296),i=t.createImageData(256,128);for(let e=0;e<128;e++)for(let t=0;t<256;t++){let n=188+6*(Math.sin(t*.13+Math.cos(e*.16)*1.8)+Math.cos(e*.22-t*.067))+27*(r()-.5)-(r()<.14?21:0),a=(e*256+t)*4;i.data[a]=i.data[a+1]=i.data[a+2]=n,i.data[a+3]=255}t.putImageData(i,0,0),t.lineWidth=.65,t.strokeStyle=`rgba(245,245,245,0.22)`;for(let e=0;e<22;e++){let e=r()*256,n=r()*128,i=4+r()*17;t.beginPath(),t.moveTo(e,n),t.lineTo(e+i,n+(r()-.5)*i*.46),t.stroke()}let a=new Lo(e);return a.anisotropy=8,a}function yh(){let{c:e,ctx:t}=hh(512,256);t.fillStyle=`#d9a86c`,t.fillRect(0,0,512,256);for(let e=0;e<70;e++){let n=Math.random()*256;t.strokeStyle=`rgba(${120+Math.random()*40},${70+Math.random()*30},30,${.12+Math.random()*.2})`,t.lineWidth=.6+Math.random()*2.2,t.beginPath(),t.moveTo(0,n);for(let r=0;r<=512;r+=32)t.lineTo(r,n+Math.sin(r*.02+e)*3+Math.random()*1.5);t.stroke()}return gh(e)}function bh(){let{c:e,ctx:t}=hh(512,512);t.fillStyle=`#1a1530`,t.fillRect(0,0,512,512);let n=[`#ff4fa3`,`#3fd0ff`,`#ffd23f`,`#8f7bff`];for(let e=0;e<60;e++){t.strokeStyle=n[e%4],t.globalAlpha=.35,t.lineWidth=3;let r=e*97%512,i=e*173%512;e%3==0?(t.beginPath(),t.arc(r,i,10,0,Math.PI*2),t.stroke()):e%3==1?(t.beginPath(),t.moveTo(r-10,i-10),t.lineTo(r+10,i+10),t.stroke()):t.strokeRect(r-7,i-7,14,14)}return gh(e,6)}function xh(e,t,n=!1){let r=n?.5:1,{c:i,ctx:a}=hh(1024*r,256*r);return a.scale(r,r),a.clearRect(0,0,1024,256),a.textAlign=`center`,a.font=`900 150px "Hiragino Sans",sans-serif`,a.shadowColor=t,a.shadowBlur=40,a.strokeStyle=t,a.lineWidth=8,a.strokeText(e,512,180),a.shadowBlur=10,a.fillStyle=`#ffffff`,a.fillText(e,512,180),gh(i)}var Sh=`"Hiragino Sans","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif`,Ch=`"Hiragino Maru Gothic ProN","Hiragino Sans",sans-serif`;function wh(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,{c:n,ctx:n.getContext(`2d`)}}function Th(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}var Eh=(e,t,n,r,i,a)=>({u0:n/e,u1:(n+i)/e,v0:1-(r+a)/t,v1:1-r/t}),Dh=[{name:`ぬいぐるみ広場`,label:`PLUSH CRANE`,paint:2511198,trim:9096397,prizes:[15518361,15248052,15261647]},{name:`景品倉庫`,label:`FIGURE PRIZE`,paint:4729922,trim:15968903,prizes:[5469051,11229513,13023106],print:[`gen-jean`,`sen-jin`,`gen-luca`]},{name:`おやつ横丁`,label:`SWEET CRANE`,paint:5387818,trim:16764795,prizes:[15652506,12613202,10010265],print:[`biscuit`,`choco`,`ramune`]},{name:`ミニクレーン`,label:`MINI CRANE`,paint:3424349,trim:11123198,prizes:[13286878,9747151,14727564]}];function Oh(e){let t=e?.5:1,n=1024,{c:r,ctx:i}=wh(n*t,256*t);return i.scale(t,t),i.textAlign=`center`,i.textBaseline=`middle`,{canvas:r,cells:Dh.map((e,t)=>{let r=t*256,a=`#${e.trim.toString(16).padStart(6,`0`)}`;i.save(),i.translate(r,0);let o=i.createLinearGradient(0,0,0,80);return o.addColorStop(0,`#243241`),o.addColorStop(1,`#101822`),i.fillStyle=o,i.fillRect(0,0,256,80),i.fillStyle=a,i.fillRect(0,2,256,4),i.fillRect(0,74,256,4),i.font=`800 29px ${Sh}`,i.fillStyle=`#fff8ea`,i.fillText(e.name,128,32),i.font=`700 13px ${Sh}`,i.fillStyle=a,i.fillText(e.label,128,57),i.fillStyle=`#fff3d9`,i.fillRect(0,86,118,52),i.fillStyle=`#48302c`,i.font=`900 23px ${Sh}`,i.fillText(`1回 ¥100`,59,112),i.fillStyle=`#292e3b`,i.fillRect(130,86,126,52),i.fillStyle=`#ede8d9`,i.font=`700 21px ${Sh}`,i.fillText(`取出口`,193,112),e.print?.forEach((e,t)=>{let n=t*84;i.drawImage(dt(Ye(e),80,110),n,144)}),i.restore(),{header:Eh(n,256,r+2,2,252,76),price:Eh(n,256,r+2,88,114,48),chute:Eh(n,256,r+132,88,122,48),prizes:[0,1,2].map(e=>Eh(n,256,r+e*84+2,146,76,106))}})}}var kh=1024,Ah=512,jh={warn:Eh(kh,Ah,0,0,256,256),staff:Eh(kh,Ah,256,0,384,192),bag:Eh(kh,Ah,640,0,384,256),board:Eh(kh,Ah,0,256,384,256),change:Eh(kh,Ah,384,256,256,256),price:Eh(kh,Ah,640,256,192,192),capsuleHeader:Eh(kh,Ah,834,258,188,42),capsuleLabels:[0,1,2].map(e=>Eh(kh,Ah,834,308+e*62,188,56))};function Mh(){let{c:e,ctx:t}=wh(kh,Ah);t.textAlign=`center`,t.textBaseline=`middle`,t.lineJoin=`round`,t.save(),t.translate(128,128),t.fillStyle=`#ffffff`,Th(t,-120,-120,240,240,26),t.fill(),t.fillStyle=`#ffd400`,t.strokeStyle=`#1a1a1a`,t.lineWidth=12,t.beginPath(),t.moveTo(0,-98),t.lineTo(84,40),t.lineTo(-84,40),t.closePath(),t.fill(),t.stroke(),t.fillStyle=`#1a1a1a`,t.font=`900 96px ${Sh}`,t.fillText(`!`,0,-8),t.font=`900 34px ${Sh}`,t.fillText(`ゆらさないで`,0,82),t.restore(),t.save(),t.translate(256,0),t.fillStyle=`#ffffff`,Th(t,6,6,372,180,18),t.fill(),t.fillStyle=`#1e56c8`,Th(t,6,6,372,62,18),t.fill(),t.fillRect(6,40,372,28),t.fillStyle=`#ffffff`,t.font=`900 34px ${Sh}`,t.fillText(`こまった時は`,192,38),t.fillStyle=`#16213a`,t.font=`900 36px ${Sh}`,t.fillText(`店員さんを呼んでね`,192,104),t.fillStyle=`#5a6478`,t.font=`700 22px ${Sh}`,t.fillText(`景品が引っかかった・位置を戻したい`,192,152),t.restore(),t.save(),t.translate(640,0),t.fillStyle=`#fffaf0`,Th(t,6,6,372,244,16),t.fill(),t.strokeStyle=`#ff5fb8`,t.lineWidth=10,Th(t,14,14,356,228,12),t.stroke(),t.fillStyle=`#ff3d9a`,t.font=`900 76px ${Ch}`,t.fillText(`景品袋`,192,92),t.fillStyle=`#16213a`,t.font=`900 40px ${Ch}`,t.fillText(`ご自由にどうぞ`,192,180),t.restore(),t.save(),t.translate(0,256),t.fillStyle=`#16213a`,t.fillRect(0,0,384,256),t.fillStyle=`#ffd23f`,t.fillRect(10,10,364,236),t.fillStyle=`#16213a`,t.fillRect(18,18,348,220),t.fillStyle=`#ffd23f`,t.font=`900 54px ${Sh}`,t.fillText(`クレーンゲーム`,192,62),t.fillStyle=`#ffffff`,t.font=`900 62px ${Sh}`,t.fillText(`1回 ¥100`,192,138),t.fillStyle=`#ff7ac8`,t.font=`900 40px ${Sh}`,t.fillText(`¥500で6回！`,192,204),t.restore(),t.save(),t.translate(384,256),t.fillStyle=`#20305e`,t.fillRect(0,0,256,256),t.fillStyle=`#ffd23f`,t.fillRect(0,0,256,70),t.fillStyle=`#16213a`,t.font=`900 50px ${Sh}`,t.fillText(`両 替`,128,38),t.fillStyle=`#0b0f20`,Th(t,28,92,200,64,8),t.fill(),t.fillStyle=`#7dffb0`,t.font=`900 30px ${Sh}`,t.fillText(`¥1000 → ¥100`,128,126),t.fillStyle=`#c9d2de`,Th(t,44,176,168,18,6),t.fill(),t.fillStyle=`#0b0f20`,Th(t,70,212,116,34,8),t.fill(),t.restore(),t.save(),t.translate(736,352),t.fillStyle=`#ff3d6e`,t.beginPath(),t.arc(0,0,90,0,Math.PI*2),t.fill(),t.strokeStyle=`#ffffff`,t.lineWidth=8,t.beginPath(),t.arc(0,0,76,0,Math.PI*2),t.stroke(),t.fillStyle=`#ffffff`,t.font=`900 30px ${Sh}`,t.fillText(`1 PLAY`,0,-30),t.font=`900 58px ${Sh}`,t.fillText(`¥100`,0,22),t.restore(),t.save(),t.translate(832,256),t.fillStyle=`#394158`,t.fillRect(0,0,192,46),t.fillStyle=`#fff0c9`,t.font=`900 25px ${Ch}`,t.fillText(`カプセルトイ`,96,23);for(let[e,n,r]of[[0,`喫茶ミニチュア`,`#eed39b`],[1,`おやすみ動物`,`#b0d5e5`],[2,`まちの看板`,`#edbac8`]]){let i=50+e*62;t.fillStyle=r,t.fillRect(0,i,192,60),t.fillStyle=`#29283a`,t.font=`900 21px ${Ch}`,t.fillText(n,96,i+17),t.font=`800 22px ${Sh}`,t.fillText(`¥300`,96,i+44)}return t.restore(),e}function Nh(){let{c:e,ctx:t}=wh(256,256);t.fillStyle=`#3c3c3c`,t.fillRect(0,0,256,256);let n=(e,n,r)=>{let i=t.createLinearGradient(e,0,e+n,0);i.addColorStop(0,`rgba(255,255,255,0)`),i.addColorStop(.5,`rgba(255,255,255,${r})`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.fillRect(e,-200,n,700)};return t.save(),t.translate(128,128),t.rotate(-.42),t.translate(-128,-128),n(18,60,.75),n(96,16,.5),n(170,90,.6),t.restore(),e}function Ph(e){let t=128*e.length+16,{c:n,ctx:r}=wh(t,180),i=[];return e.forEach((e,n)=>{r.drawImage(dt(e,128,180),n*128,0),i.push(Eh(t,180,n*128+2,2,124,176))}),r.fillStyle=`#f1ece2`,r.fillRect(128*e.length,0,16,180),{canvas:n,cells:i,side:Eh(t,180,128*e.length+4,4,8,8)}}var Fh=`"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif`,Ih=`"Hiragino Maru Gothic ProN","Hiragino Sans",sans-serif`,Lh=`"Avenir Next Condensed","Avenir Next","Arial Narrow","Helvetica Neue",sans-serif`;function Rh(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,{c:n,ctx:n.getContext(`2d`)}}function zh(e){let t=new Lo(e);return t.colorSpace=Yn,t.anisotropy=8,t}function Bh(e,t,n,r,i,a){e.save(),e.translate(n,r),a.skew&&e.transform(1,0,a.skew,1,0,0),e.font=a.font.replace(`SIZE`,`${i}px`),e.textAlign=`center`,e.textBaseline=`alphabetic`,e.lineJoin=`round`,a.tracking!==void 0&&(e.letterSpacing=`${a.tracking}px`),e.fillStyle=`rgba(0,0,0,0.45)`,e.strokeStyle=`rgba(0,0,0,0.45)`,e.lineWidth=i*.3,e.strokeText(t,i*.05,i*.08),a.glow&&(e.shadowColor=a.glow,e.shadowBlur=i*.45),e.strokeStyle=a.edge,e.lineWidth=i*.26,e.strokeText(t,0,0),e.shadowBlur=0,e.strokeStyle=a.inner??`#ffffff`,e.lineWidth=i*.11,e.strokeText(t,0,0);let o=Math.ceil(e.measureText(t).width+i),s=Math.ceil(i*1.3),c=document.createElement(`canvas`);c.width=o,c.height=s;let l=c.getContext(`2d`);l.font=e.font,l.textAlign=`center`,l.textBaseline=`alphabetic`,a.tracking!==void 0&&(l.letterSpacing=`${a.tracking}px`),l.translate(o/2,i*1.05);let u=l.createLinearGradient(0,-i*.85,0,i*.1);u.addColorStop(0,a.fill[0]),u.addColorStop(.55,a.fill[1]),u.addColorStop(1,a.fill[2]),l.fillStyle=u,l.fillText(t,0,0),l.globalCompositeOperation=`source-atop`;let d=l.createLinearGradient(0,-i*.85,0,-i*.3);d.addColorStop(0,`rgba(255,255,255,0.75)`),d.addColorStop(1,`rgba(255,255,255,0)`),l.fillStyle=d,l.fillRect(-o/2,-i*.9,o,i*.62),e.drawImage(c,-o/2,-i*1.05),e.restore()}function Vh(e,t,n,r,i=5,a=.45){e.beginPath();for(let o=0;o<i*2;o++){let s=o*Math.PI/i-Math.PI/2,c=o%2?r*a:r;e.lineTo(t+Math.cos(s)*c,n+Math.sin(s)*c)}e.closePath()}function Hh(e,t,n,r,i=`#ffffff`){e.save(),e.fillStyle=i,e.shadowColor=i,e.shadowBlur=r*1.5,Vh(e,t,n,r,4,.18),e.fill(),e.restore()}function Uh(e,t,n,r,i,a=!0){e.save(),e.fillStyle=r;for(let r=0;r<n;r+=i){let o=a?r/n:1-r/n,s=i*.42*o;if(!(s<.4))for(let n=Math.floor(r/i)%2*i/2;n<t;n+=i)e.beginPath(),e.arc(n,r,s,0,Math.PI*2),e.fill()}e.restore()}var Wh={hook:{en:`HOOK  CHALLENGE`,jp:`フックチャレンジ`,line:`リングを掛けて、板ごと持ち上げろ！`,back:`RING & HOOK`,backLine:`フックに掛けて 板を上げると 景品が落ちる`,side:`HOOK CHALLENGE`,lower:`② を離すとリングが下がります`},bridge:{en:`BRIDGE  CHALLENGE`,jp:`橋渡しチャレンジ`,line:`箱をずらして、バーのあいだに落とせ！`,back:`BOX & BRIDGE`,backLine:`アームで箱をずらして バーのあいだに落とす`,side:`BRIDGE CHALLENGE`,lower:`② を離すとアームが下がります`},tako:{en:`TAKOYAKI  CHALLENGE`,jp:`たこ焼きチャレンジ`,line:`ピンポン玉を、赤い穴に入れろ！`,back:`BALL & HOLE`,backLine:`玉をすくって たこ焼き器へ 赤い穴に入れば当たり`,side:`TAKOYAKI CHALLENGE`,lower:`② を離すとアームが下がります`},plush:{en:`PLUSH  CATCHER`,jp:`ぬいぐるみキャッチャー`,line:`ふわふわ人形を、つかんで運べ！`,back:`SOFT & FLUFFY`,backLine:`アームでつかんで 左手前の穴へ運ぶ`,side:`PLUSH CATCHER`,lower:`② を離すとアームが下がります`}};function Gh(e,t,n,r,i=`hook`){if(i===`bridge`){Yh(e,t,n,r);return}if(i===`tako`){qh(e,t,n,r);return}if(i===`plush`){Kh(e,t,n,r);return}e.save(),e.translate(t,n);let a=e.createRadialGradient(-r*.3,-r*.3,r*.1,0,0,r);a.addColorStop(0,`#fff6c9`),a.addColorStop(1,`#ffc23d`),e.fillStyle=a,e.beginPath(),e.arc(0,0,r,0,Math.PI*2),e.fill(),e.lineWidth=r*.12,e.strokeStyle=`#1c0b33`,e.stroke(),e.lineWidth=r*.05,e.strokeStyle=`#ffffff`,e.beginPath(),e.arc(0,0,r*.86,0,Math.PI*2),e.stroke(),e.lineCap=`round`,e.strokeStyle=`#1c0b33`,e.lineWidth=r*.2;let o=()=>{e.beginPath(),e.moveTo(-r*.15,r*.55),e.lineTo(-r*.15,-r*.05),e.arc(r*.08,-r*.05,r*.23,Math.PI,0),e.lineTo(r*.31,r*.1),e.stroke()};o(),e.strokeStyle=`#d98a14`,e.lineWidth=r*.1,o(),e.lineWidth=r*.16,e.strokeStyle=`#1c0b33`,e.beginPath(),e.ellipse(r*.08,-r*.18,r*.42,r*.17,-.25,0,Math.PI*2),e.stroke(),e.lineWidth=r*.08,e.strokeStyle=`#ff4fb0`,e.beginPath(),e.ellipse(r*.08,-r*.18,r*.42,r*.17,-.25,0,Math.PI*2),e.stroke(),e.restore()}function Kh(e,t,n,r){e.save(),e.translate(t,n);let i=e.createRadialGradient(-r*.3,-r*.3,r*.1,0,0,r);i.addColorStop(0,`#ffe6f4`),i.addColorStop(1,`#ff8cc8`),e.fillStyle=i,e.beginPath(),e.arc(0,0,r,0,Math.PI*2),e.fill(),e.lineWidth=r*.12,e.strokeStyle=`#1c0b33`,e.stroke(),e.lineWidth=r*.05,e.strokeStyle=`#ffffff`,e.beginPath(),e.arc(0,0,r*.86,0,Math.PI*2),e.stroke(),e.strokeStyle=`#1c0b33`,e.lineWidth=r*.06,e.fillStyle=`#7cc46a`,e.beginPath(),e.ellipse(0,r*.42,r*.3,r*.22,0,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.arc(0,r*.1,r*.3,0,Math.PI*2),e.fill(),e.stroke();for(let t of[-1,1])e.fillStyle=`#7cc46a`,e.beginPath(),e.arc(t*r*.16,-r*.15,r*.11,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=`#1c0b33`,e.beginPath(),e.arc(t*r*.16,-r*.15,r*.045,0,Math.PI*2),e.fill();e.beginPath(),e.arc(0,r*.14,r*.12,.2,Math.PI-.2),e.stroke(),e.lineCap=`round`,e.strokeStyle=`#1c0b33`,e.lineWidth=r*.07,e.beginPath(),e.moveTo(0,-r*.85),e.lineTo(0,-r*.5),e.stroke(),e.fillStyle=`#f4f6fa`,e.beginPath(),e.ellipse(0,-r*.48,r*.16,r*.08,0,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle=`#c9d0d8`,e.lineWidth=r*.05;for(let t of[-1,0,1])e.beginPath(),e.moveTo(t*r*.12,-r*.44),e.quadraticCurveTo(t*r*.42+(t===0?r*.05:0),-r*.32,t*r*.3+(t===0?r*.05:0),-r*.12),e.stroke();e.restore()}function qh(e,t,n,r){e.save(),e.translate(t,n);let i=e.createRadialGradient(-r*.3,-r*.3,r*.1,0,0,r);i.addColorStop(0,`#fff6c9`),i.addColorStop(1,`#ffc23d`),e.fillStyle=i,e.beginPath(),e.arc(0,0,r,0,Math.PI*2),e.fill(),e.lineWidth=r*.12,e.strokeStyle=`#1c0b33`,e.stroke(),e.lineWidth=r*.05,e.strokeStyle=`#ffffff`,e.beginPath(),e.arc(0,0,r*.86,0,Math.PI*2),e.stroke(),e.fillStyle=`#2b2530`,e.strokeStyle=`#1c0b33`,e.lineWidth=r*.06;let a=r*1.1,o=r*.62,s=-a/2,c=r*.02;e.beginPath(),e.roundRect(s,c,a,o,r*.1),e.fill(),e.stroke();for(let t=0;t<3;t++)for(let n=0;n<2;n++)e.fillStyle=t===1&&n===0?`#e8242e`:`#0f0c14`,e.beginPath(),e.arc(s+a*(t+.5)/3,c+o*(n+.5)/2,r*.11,0,Math.PI*2),e.fill();e.fillStyle=`#ff8f1f`,e.beginPath(),e.arc(0,-r*.36,r*.2,0,Math.PI*2),e.fill(),e.lineWidth=r*.06,e.stroke(),e.fillStyle=`rgba(255,255,255,0.75)`,e.beginPath(),e.arc(-r*.07,-r*.43,r*.055,0,Math.PI*2),e.fill(),e.restore()}function Jh(){let{c:e,ctx:t}=Rh(512,160);return t.fillStyle=`#fff8e6`,nt(t,0,0,512,160,18),t.fill(),t.strokeStyle=`#e8242e`,t.lineWidth=8,nt(t,6,6,500,148,14),t.stroke(),t.fillStyle=`#e8242e`,t.beginPath(),t.arc(64,80,34,0,Math.PI*2),t.fill(),t.fillStyle=`#ffffff`,t.font=`900 40px ${Fh}`,t.textAlign=`center`,t.fillText(`当`,64,95),t.textAlign=`left`,t.fillStyle=`#1c1206`,t.font=`900 44px ${Fh}`,t.fillText(`赤い穴に入れば`,116,68),t.fillStyle=`#e8242e`,t.font=`900 50px ${Fh}`,t.fillText(`当たり！`,116,126),e}function Yh(e,t,n,r){e.save(),e.translate(t,n);let i=e.createRadialGradient(-r*.3,-r*.3,r*.1,0,0,r);i.addColorStop(0,`#fff6c9`),i.addColorStop(1,`#ffc23d`),e.fillStyle=i,e.beginPath(),e.arc(0,0,r,0,Math.PI*2),e.fill(),e.lineWidth=r*.12,e.strokeStyle=`#1c0b33`,e.stroke(),e.lineWidth=r*.05,e.strokeStyle=`#ffffff`,e.beginPath(),e.arc(0,0,r*.86,0,Math.PI*2),e.stroke(),e.lineJoin=`round`,e.save(),e.translate(r*.02,-r*.08),e.rotate(.42),e.fillStyle=`#3a6cf0`,e.strokeStyle=`#1c0b33`,e.lineWidth=r*.07,e.beginPath(),e.rect(-r*.46,-r*.3,r*.92,r*.46),e.fill(),e.stroke(),e.fillStyle=`#ffffff`,e.fillRect(-r*.46+r*.035,-r*.13,r*.92-r*.07,r*.12),e.restore();for(let t of[-.38,.38])e.beginPath(),e.arc(t*r,r*.36,r*.13,0,Math.PI*2),e.fillStyle=`#ff4fb0`,e.fill(),e.lineWidth=r*.06,e.strokeStyle=`#1c0b33`,e.stroke(),e.beginPath(),e.arc(t*r-r*.04,r*.32,r*.035,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,0.8)`,e.fill();e.fillStyle=`#1c0b33`,e.beginPath(),e.moveTo(-r*.09,r*.44),e.lineTo(r*.09,r*.44),e.lineTo(0,r*.62),e.closePath(),e.fill(),e.restore()}function Xh(e=`hook`){let t=Wh[e],n=1536,{c:r,ctx:i}=Rh(n,470),a=i.createLinearGradient(0,0,0,470);a.addColorStop(0,`#2b0f5c`),a.addColorStop(.55,`#4b1488`),a.addColorStop(1,`#1b0838`),i.fillStyle=a,i.fillRect(0,0,n,470),i.save(),i.translate(n/2,291.4);for(let e=0;e<28;e++)i.rotate(Math.PI/14),i.fillStyle=e%2?`rgba(255,120,220,0.10)`:`rgba(120,220,255,0.07)`,i.beginPath(),i.moveTo(0,0),i.lineTo(-70,-1200),i.lineTo(70,-1200),i.closePath(),i.fill();i.restore(),Uh(i,n,470,`rgba(255,255,255,0.07)`,16);let o=(e,t)=>{let r=i.createLinearGradient(0,e,0,e+t);r.addColorStop(0,`#ff8ad6`),r.addColorStop(1,`#c2189a`),i.fillStyle=r,i.fillRect(0,e,n,t)};o(0,22),o(448,22),Bh(i,t.en,n/2,112,70,{font:`italic 800 SIZE ${Lh}`,fill:[`#e9fdff`,`#8fe9ff`,`#3bb8ff`],edge:`#0c1f4d`,glow:`#4fd6ff`,skew:-.08,tracking:10}),Bh(i,t.jp,n/2,296,124,{font:`900 SIZE ${Fh}`,fill:[`#fffbe0`,`#ffd23f`,`#ff8a1f`],edge:`#2a0a3d`,glow:`#ff5fd2`,skew:-.06}),i.save(),i.font=`800 40px ${Fh}`,i.textAlign=`center`,i.fillStyle=`#ffe9f8`,i.shadowColor=`#ff4fb0`,i.shadowBlur=14,i.fillText(t.line,n/2,400),i.restore(),Gh(i,150,241,104,e),Gh(i,1386,241,104,e);for(let[e,t,n]of[[300,90,16],[1240,80,20],[330,380,12],[1210,380,14],[560,60,10],[990,55,12]])Hh(i,e,t,n);return r}function Zh(e=`hook`){let t=Wh[e],n=1024,r=1120,{c:i,ctx:a}=Rh(n,r),o=a.createLinearGradient(0,0,0,r);o.addColorStop(0,`#2d1b6b`),o.addColorStop(.45,`#8c4bd9`),o.addColorStop(.8,`#ff7ac4`),o.addColorStop(1,`#ffc8e6`),a.fillStyle=o,a.fillRect(0,0,n,r),a.save(),a.translate(n/2,r*.42);for(let e=0;e<36;e++)a.rotate(Math.PI/18),a.fillStyle=`rgba(255,255,255,${e%2?.07:.03})`,a.beginPath(),a.moveTo(0,0),a.lineTo(-60,-1400),a.lineTo(60,-1400),a.closePath(),a.fill();for(let[e,t]of[[430,.06],[330,.08],[230,.1]])a.strokeStyle=`rgba(255,255,255,${t*2})`,a.lineWidth=6,a.beginPath(),a.arc(0,0,e,0,Math.PI*2),a.stroke();a.restore(),Uh(a,n,r,`rgba(255,255,255,0.12)`,22),Gh(a,n/2,r*.36,150,e),Bh(a,t.back,n/2,r*.6,92,{font:`italic 800 SIZE ${Lh}`,fill:[`#ffffff`,`#ffe36b`,`#ffaa2b`],edge:`#2a0a3d`,skew:-.08,tracking:6}),a.save(),a.font=`800 40px ${Fh}`,a.textAlign=`center`,a.fillStyle=`rgba(255,255,255,0.9)`,a.fillText(t.backLine,n/2,r*.67),a.restore(),a.fillStyle=`rgba(255,255,255,0.85)`;for(let e=0;e<26;e++)Vh(a,e*389%n,e*241%(r*.55),5+e%4*3),a.fill();for(let[e,t,n]of[[160,200,22],[880,260,26],[120,620,16],[910,700,18]])Hh(a,e,t,n);let s=a.createLinearGradient(0,r*.86,0,r);return s.addColorStop(0,`rgba(40,10,60,0)`),s.addColorStop(1,`rgba(40,10,60,0.55)`),a.fillStyle=s,a.fillRect(0,r*.86,n,r*.14),i}function Qh(e=`hook`){let t=1024,{c:n,ctx:r}=Rh(512,t),i=r.createLinearGradient(0,0,512,t);i.addColorStop(0,`#ff5fb8`),i.addColorStop(.5,`#a43be0`),i.addColorStop(1,`#2b1a6b`),r.fillStyle=i,r.fillRect(0,0,512,t),r.save(),r.rotate(-.5);for(let e=-6;e<14;e++)r.fillStyle=e%3==0?`rgba(255,255,255,0.16)`:`rgba(255,255,255,0.05)`,r.fillRect(-400,e*120,1600,e%3==0?34:14);return r.restore(),Uh(r,512,t,`rgba(255,255,255,0.12)`,18,!1),r.save(),r.translate(256,t*.55),r.rotate(-Math.PI/2),Bh(r,Wh[e].side,0,40,e===`bridge`?88:96,{font:`italic 800 SIZE ${Lh}`,fill:[`#ffffff`,`#ffe36b`,`#ffaa2b`],edge:`#2a0a3d`,skew:-.08,tracking:4}),r.restore(),Gh(r,256,t*.14,90,e),r.fillStyle=`#120a22`,r.fillRect(0,t*.93,512,t*.07),n}function $h(e,t,n=`hook`){let r=1024,{c:i,ctx:a}=Rh(r,240);a.fillStyle=`#1b2140`,a.fillRect(0,0,r,240);for(let e=0;e<240;e+=2)a.fillStyle=`rgba(255,255,255,${.015+Math.random()*.03})`,a.fillRect(0,e,r,1);let o=e=>(e/t+.5)*r;for(let t of e){let e=o(t.x);a.save(),a.fillStyle=`rgba(0,0,0,0.35)`,nt(a,e-64,160,128,56,14),a.fill(),a.strokeStyle=t.color,a.lineWidth=3,nt(a,e-64,160,128,56,14),a.stroke(),a.fillStyle=`#ffffff`,a.font=`900 34px ${Fh}`,a.textAlign=`center`,a.fillText(`${t.arrow} ${t.label}`,e,200),a.restore(),a.save(),a.strokeStyle=t.color,a.globalAlpha=.5,a.lineWidth=6,a.beginPath(),a.arc(e,80,74,0,Math.PI*2),a.stroke(),a.restore()}return a.save(),a.fillStyle=`#ffd23f`,a.font=`800 26px ${Fh}`,a.fillText(`ボタンを押している間だけ動きます`,34,70),a.fillStyle=`rgba(255,255,255,0.7)`,a.font=`600 22px ${Fh}`,a.fillText(`① で横の位置、② で奥の位置を決める`,34,110),a.fillText(Wh[n].lower,34,142),a.restore(),i}function eg(){let{c:e,ctx:t}=Rh(256,420),n=t.createLinearGradient(0,0,256,0);n.addColorStop(0,`#8f98a6`),n.addColorStop(.5,`#e5e9ef`),n.addColorStop(1,`#8f98a6`),t.fillStyle=n,nt(t,0,0,256,420,22),t.fill();for(let e=0;e<420;e+=2)t.fillStyle=`rgba(0,0,0,${Math.random()*.04})`,t.fillRect(0,e,256,1);return t.fillStyle=`#111`,nt(t,24,24,208,120,12),t.fill(),t.save(),t.shadowColor=`#ffcf4a`,t.shadowBlur=16,t.fillStyle=`#ffcf4a`,t.textAlign=`center`,t.font=`900 46px ${Fh}`,t.fillText(`¥100`,128,78),t.font=`800 26px ${Fh}`,t.fillText(`500円で6回`,128,120),t.restore(),t.fillStyle=`#2a2d33`,nt(t,78,176,100,70,14),t.fill(),t.fillStyle=`#050505`,nt(t,122,186,12,50,6),t.fill(),t.fillStyle=`#3a3d44`,t.font=`700 20px ${Lh}`,t.textAlign=`center`,t.fillText(`INSERT COIN`,128,272),t.fillStyle=`#c0392b`,t.beginPath(),t.arc(128,318,22,0,Math.PI*2),t.fill(),t.fillStyle=`#3a3d44`,t.font=`700 18px ${Fh}`,t.fillText(`返却`,128,360),t.fillStyle=`#1d1f24`,nt(t,88,372,80,30,8),t.fill(),e}function tg(){let{c:e,ctx:t}=Rh(512,96);return t.fillStyle=`#ffd23f`,nt(t,0,0,512,96,18),t.fill(),t.fillStyle=`#1c1206`,t.font=`900 46px ${Fh}`,t.textAlign=`center`,t.fillText(`▼ 景品取り出し口 ▼`,256,64),e}function ng(e=`もちもちアニマル`){let{c:t,ctx:n}=Rh(360,460);return n.fillStyle=`#ffffff`,nt(n,0,0,360,460,26),n.fill(),n.fillStyle=`#ff2f6d`,nt(n,0,0,360,130,26),n.fill(),n.fillRect(0,100,360,30),n.textAlign=`center`,n.fillStyle=`#ffffff`,n.font=`italic 800 46px ${Lh}`,n.fillText(`1 PLAY`,180,62),n.font=`900 48px ${Fh}`,n.fillText(`100円`,180,116),n.fillStyle=`#ff2f6d`,n.font=`900 64px ${Fh}`,n.fillText(`500円`,180,230),n.fillStyle=`#222`,n.font=`900 50px ${Fh}`,n.fillText(`で 6回！`,180,296),n.strokeStyle=`#ffd23f`,n.lineWidth=8,n.setLineDash([16,10]),n.strokeRect(30,330,300,100),n.setLineDash([]),n.fillStyle=`#444`,n.font=`800 30px ${Ih}`,n.fillText(`景品は`,180,372),n.fillText(e,180,412),n.fillStyle=`rgba(255,240,170,0.75)`,n.save(),n.translate(180,0),n.rotate(-.06),n.fillRect(-60,-14,120,34),n.restore(),t}function rg(){let{c:e,ctx:t}=Rh(256,200);return t.clearRect(0,0,256,200),t.fillStyle=`rgba(255,255,255,0.85)`,t.font=`italic 800 64px ${Lh}`,t.textAlign=`center`,t.fillText(`PUSH`,128,120),t.font=`800 26px ${Fh}`,t.fillText(`押して取り出す`,128,162),e}function ig(){let{c:e,ctx:t}=Rh(256,256);t.fillStyle=`#0f1222`,t.beginPath(),t.arc(128,128,126,0,Math.PI*2),t.fill(),t.fillStyle=`#2b3150`;for(let e=14;e<256;e+=14)for(let n=14+e/14%2*7;n<256;n+=14)Math.hypot(n-128,e-128)>110||(t.beginPath(),t.arc(n,e,4.2,0,Math.PI*2),t.fill());return t.strokeStyle=`#c9d2de`,t.lineWidth=8,t.beginPath(),t.arc(128,128,120,0,Math.PI*2),t.stroke(),e}function ag(e,t){let n=e.getContext(`2d`),r=e.width,i=e.height;n.fillStyle=`#0a0606`,n.fillRect(0,0,r,i),n.font=`700 ${i*.28}px ${Lh}`,n.fillStyle=`#ff6b3d`,n.textAlign=`left`,n.fillText(`CREDIT`,r*.06,i*.42),n.save(),n.font=`italic 700 ${i*.74}px "DIN Alternate","Avenir Next Condensed",monospace`,n.textAlign=`right`,n.fillStyle=`rgba(255,80,40,0.12)`,n.fillText(`88`,r*.95,i*.84),n.fillStyle=`#ff5a2a`,n.shadowColor=`#ff3a10`,n.shadowBlur=14,n.fillText(String(Math.min(99,t)).padStart(2,`0`),r*.95,i*.84),n.restore()}function og(){let{c:e,ctx:t}=Rh(900,592);t.fillStyle=`#e3222e`,t.fillRect(0,0,900,592);let n=(e,n,r,i,a,o,s,c)=>{t.strokeStyle=s,t.lineWidth=c,t.lineCap=`round`,t.beginPath(),t.moveTo(e,n),t.quadraticCurveTo(a,o,r,i),t.stroke()};n(-40,140,260,-20,40,20,`#1e3fae`,46),n(-40,190,300,-10,60,70,`#ffffff`,10),n(940,432,600,622,840,562,`#1e3fae`,46),n(940,382,580,612,820,502,`#ffffff`,10),t.save(),t.translate(450,296),t.fillStyle=`#ffd400`,Vh(t,0,0,230,14,.62),t.fill(),t.fillStyle=`#fff36b`,Vh(t,0,0,145,14,.7),t.fill(),t.restore();let r=(e,n,r)=>Bh(t,e,n,r,132,{font:`900 SIZE ${Fh}`,fill:[`#ffffff`,`#ffffff`,`#e8eeff`],edge:`#1a2f8f`,inner:`#ffffff`});return r(`取る`,150,150),r(`取る`,750,552),Bh(t,`リングをフックに`,450,205,46,{font:`900 SIZE ${Fh}`,fill:[`#ffe14d`,`#ffd23f`,`#ff9a1f`],edge:`#5a1a00`,inner:`#3a1a00`}),Bh(t,`ひっかけろ！`,450,470,70,{font:`900 SIZE ${Fh}`,fill:[`#ffe14d`,`#ffd23f`,`#ff9a1f`],edge:`#5a1a00`,inner:`#3a1a00`}),e}var sg={u0:0,v0:0,u1:1,v1:1},cg=12174281,lg=3357252;function ug(e,t,n,r,i,a,o=0){return xm(e,t,n,new ui().makeRotationY(o).setPosition(r,i,a))}function dg(e,t){let n=e.index?e.toNonIndexed():e;n!==e&&e.dispose();let r=new G(t),i=new Float32Array(n.attributes.position.count*3);for(let e=0;e<i.length;e+=3)r.toArray(i,e);return n.setAttribute(`color`,new Ea(i,3)),n.clearGroups(),n}function fg(e,t){let n=new q(bp(e,!1),t);return e.forEach(e=>e.dispose()),n}function pg(e,t){let n=fg(e,t);return n.renderOrder=5,n}function mg(e,t,n,r,i){let a=.5,o=Oh(n),s=zh(o.canvas),c=new Y({map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.24,roughness:.65}),l=new Y({vertexColors:!0,roughness:.46,metalness:.08}),u=new Y({color:14019834,alphaMap:r,transparent:!0,opacity:.43,roughness:.1,envMapIntensity:1.3,depthWrite:!1});return[-1,1,-2,2].map((r,s)=>{let{paint:d,trim:f,prizes:p}=Dh[s],{header:m,price:h,chute:g,prizes:_}=o.cells[s],v=[],y=[],b=(e,t,n,r,i,a,o,s=0)=>{v.push(bm(e,t,n,r,i,a,o,{z:s}))},x=3355458,S=13489368;b(.46,.06,.42400000000000004,0,.03,0,lg),b(a,.5,.46,0,.31,0,d),b(.46799999999999997,.046,.021,0,.095,.232,cg),b(.46799999999999997,.014,.013,0,.487,.232,f);let C=.28;b(.27,.19,.022,0,C,.242,lg),b(.22,.14,.008,0,C,.258,1317152);for(let e of[-1,1])b(.235,.016,.03,0,C+e*.075,.262,cg),b(.016,.134,.03,e*.115,C,.262,cg);b(.207,.098,.008,0,.29200000000000004,.265,x),y.push(ug(.101,.0397,g,0,.29200000000000004,.2705)),b(.52,.092,.56,0,.557,.043,d),b(.527,.014,.5730000000000001,0,.607,.045,3688024),b(.038,.063,.009,.183,.553,.325,cg),b(.006,.039,.004,.183,.557,.331,lg);for(let[e,t]of[[.019,f],[.106,15777141]])v.push(dg(new J(.027,.029,.008,12),cg).translate(e,.618,.28400000000000003)),v.push(dg(new J(.021,.024,.014,12),t).translate(e,.628,.28400000000000003));b(.083,.027,.004,-.13,.558,.325,x);for(let e=0;e<2;e++){let t=-.141+e*.02,n=.328,r=15693413;for(let e of[.553,.564])b(.008,.0024,.002,t,e,n,r);for(let e of[-1,1])b(.0026,.009,.002,t+e*.004,.5585,n,r)}let w=2.1109999999999998/2;b(.497,.052,.457,0,.631,0,S),b(.456,.027,.41600000000000004,0,.658,0,14802386),b(.448,.821,.026,0,w,-.23+.016,d),b(.422,.756,.008,0,w,-.199,s===0?7441808:8749450);for(let e of[-1,1]){for(let t of[-1,1])b(.025,.848,.028,e*(a/2-.013),w,t*.216,cg),b(.005,.821-.015,.006,e*(a/2-.026),w,t*.21300000000000002,lg);b(.007,.731,.008,e*(a/2-.032),w,-.186,15985108),b(.018,.023,.41500000000000004,e*(a/2-.012),1.451,0,cg)}b(.453,.009,.006,0,.6900000000000001,.20400000000000001,f),b(.442,.01,.012,0,1.441,.17400000000000002,16773337);let T=[ug(.46,.821-.018,sg,0,1.0604999999999998,.223),...[-1,1].map(e=>ug(.41700000000000004,.821-.018,sg,e*(a/2-.007),1.0604999999999998,0,e*Math.PI/2))];y.push(ug(.081,.034,h,a/2-.074,1.3639999999999999,.226));let E=s%2==0?-.055:.06;b(.436,.018,.037,0,1.391,-.019,cg),b(.078,.04,.065,E,1.3699999999999999,-.019,lg),b(.009,.093,.009,E,1.309,-.019,cg),b(.083,.043,.062,E,1.253,-.019,S),b(.085,.008,.064,E,1.2349999999999999,-.019,f);for(let e of[-1,1])b(.009,.064,.011,E+e*.047,1.2029999999999998,-.019,cg,e*.45),b(.009,.037,.011,E+e*.053,1.16,-.019,cg,-e*.48);b(.424,.018,.155,0,1.02,-.131,S),b(.426,.009,.008,0,1.025,-.052,f);let D=(e,t,r,i,a,o)=>{v.push(dg(new pc(e,n?8:12,n?5:7),o).scale(1,t,1).translate(r,i,a))};for(let e=0;e<7;e++){let t=e<3,n=t?(e-1)*.109:(e-4.5)*.095,r=t?1.029:.672,i=t?-.145:.058+e%2*.053,a=p[e%p.length];if(s%3==0){D(.039,1.04,n,r+.038,i,a),D(.037,.85,n,r+.089,i+.012,a);for(let e of[-1,1])D(.015,1.15,n+e*.028,r+.114,i+.014,a),D(.015,.76,n+e*.028,r+.013,i+.026,a),D(.004,1,n+e*.012,r+.091,i+.047,3418929);D(.012,.68,n,r+.079,i+.046,15720907)}else{let o=.092+e%3*.011,s=(e%4-1.5)*(t?.095:.22);v.push(bm(.072,o,.056,n,r+o/2,i,a,{y:s})),y.push(ug(.06899999999999999,o-.004,_[e%_.length],n+Math.sin(s)*.029,r+o/2,i+Math.cos(s)*.029,s))}}b(.512,.151,.47200000000000003,0,1.54,0,d),b(.518,.018,.47800000000000004,0,1.615,0,cg),b(.482,.012,.47500000000000003,0,1.481,0,f),b(.46,.13,.012,0,1.55,.234,lg),y.push(ug(.435,.116,m,0,1.55,.24200000000000002));let O=fg(v,l),k=fg(y,c);O.renderOrder=k.renderOrder=i;let A=new Ri;A.add(O,k,pg(T,u));let j=Math.sign(r),M=j>0?e.x1:-e.x0;return A.position.set(j*(M+.12+a/2+(Math.abs(r)-1)*.56),t,-.02),A.matrixAutoUpdate=!1,A.updateMatrix(),A})}function hg(e,t,n,r,i){let a=.244,o=.408,s=.235,c=.14,l=n+.18,u=r+s/2,d=[12933720,5214117,13212241,6596245,11632541],f=[15957855,6406631,16764507,15370158,10803093],p=[],m=(t,n,r,i,a,o,s)=>{e.push(bm(t,n,r,i,a,o,s))};m(1.313,.15,.262,c,n+.075,r,3817292),m(1.322,.032,.27999999999999997,c,l-.016,r,cg);let h=l+o*2+.048;m(1.307,.092,.055,c,h,u-.06,3752280),m(1.309,.008,.057,c,h+.049,u-.06,13084791),t.push(ug(.34,.076,jh.capsuleHeader,.4,h,u-.031));let g=.021,_=f.map(e=>[dg(new pc(g,i?8:12,i?3:4,0,Math.PI*2,0,Math.PI/2),15787475),dg(new pc(g,i?8:12,i?3:4,0,Math.PI*2,Math.PI/2,Math.PI/2),e)]);for(let n=0;n<2;n++)for(let i=0;i<5;i++){let h=c+(i-2)*.256,g=l+n*o,v=d[(i+n*2)%d.length],y=15197148;e.push(dg(new yp(a,.129,s,1,.009),y).translate(h,g+.065,r)),m(a,.25,.023,h,g+.249,r-s/2+.012,y),e.push(dg(new yp(.252,.028,.248,1,.008),v).translate(h,g+.392,r)),m(.197,.006,.007,h,g+.374,u-.022,16377291),m(.249,.013,.24,h,g+.135,r,v);for(let e of[-1,1])m(.015,.245,.017,h+e*.112,g+.256,u-.005,y),m(.009,.235,.009,h+e*.113,g+.256,u-.021,lg),p.push(ug(.19599999999999998,.236,sg,h+e*(a/2-.009),g+.257,r-.006,e*Math.PI/2));p.push(ug(.212,.236,sg,h,g+.257,u-.007));for(let t=0;t<3;t++){let a=t===2?3:4;for(let o=0;o<a;o++){let s=o+t*3+i*5+n*2,c=h+(o-(a-1)/2)*.046+(s%3-1)*.003,l=g+(t===2?.19:.163),u=r+[.055,-.01,.025][t]+o%2*.005,d=new ui().makeRotationFromEuler(new bi((s%4-1.5)*.51,0,(s%5-2)*.45));d.setPosition(c,l,u);for(let t of _[s%f.length])e.push(t.clone().applyMatrix4(d))}}t.push(ug(.171,.051,jh.capsuleLabels[(i+n)%jh.capsuleLabels.length],h,g+.335,u-.018)),e.push(dg(new J(.032,.034,.009,12),cg).rotateX(Math.PI/2).translate(h-.037,g+.081,u+.003)),e.push(dg(new J(.022,.026,.015,12),v).rotateX(Math.PI/2).translate(h-.037,g+.081,u+.012)),e.push(bm(.038,.011,.01,h-.037,g+.081,u+.021,y,{z:(i-n)*.26})),m(.031,.029,.008,h+.066,g+.102,u+.003,cg),m(.004,.021,.004,h+.066,g+.102,u+.008,lg),m(.068,.042,.009,h+.059,g+.046,u+.003,lg),m(.07,.008,.022,h+.059,g+.023,u+.013,cg)}return _.flat().forEach(e=>e.dispose()),pg(p,new Y({color:13231349,roughness:.14,transparent:!0,opacity:.14,depthWrite:!1}))}var gg=(e,t,n,r=0,i=0)=>new ui().compose(new U(e,t,n),new Vr().setFromEuler(new bi(i,r,0,`YXZ`)),new U(1,1,1));function _g(){let e=new Lo(Nh());return e.wrapS=e.wrapT=Dt,e}function vg(t,n){let{layout:r,cab:i,floorY:a,glassZ:o}=t,s=r.field,c=[],l=[],u=[],d=[],f=s.wallH-.15,p=.076,m=.028,h=.06,g=.065,_=Math.max(1,Math.floor((s.halfX-.015-g)/h)),v=t.kinds.length?t.kinds:[];if(v.length){let e=Array.from({length:_*2},(e,t)=>v[t%v.length]),t=Ph(e),n=[];e.forEach((e,r)=>{let i=(r<_?-1:1)*(.092+r%_*h),a=Sm(.054,p,m,[t.side,t.side,t.side,t.side,t.cells[r],t.side]);a.applyMatrix4(gg(i,f+p/2,-s.halfZ+.004+m/2+.003,(r*37%9-4)*.02)),n.push(a)});let r=zh(t.canvas),i=new q(bp(n,!1),new Y({map:r,roughness:.5}));n.forEach(e=>e.dispose()),d.push(i);for(let e of[-1,1]){let t=.059000000000000004,n=g+_*h-.002;c.push(bm(n-t,.004,.038,e*(t+n)/2,f-.002,-s.halfZ+.023,15330803));for(let t of[.07100000000000001,n-.012])c.push(bm(.004,.018,.03,e*t,f-.013,-s.halfZ+.019,11187136))}}for(let e of[-1,1])l.push(bm(.006,s.wallH-.05,.006,e*(s.halfX-.005),s.wallH/2,-s.halfZ+.005,15923455));if(!t.noSensors)for(let t of[-1,1]){let n=e(r,{x:(r.localHole.x0+r.localHole.x1)/2,y:.016,z:t*(r.fence.z+.013)});n.x>r.hole.x0&&n.x<r.hole.x1&&n.z>r.hole.z0&&n.z<r.hole.z1||(c.push(bm(.014,.032,.014,n.x,n.y,n.z,1842726)),l.push(bm(.005,.005,.005,n.x,n.y+.0175,n.z,16724016)))}u.push(xm(.05,.05,jh.warn,gg(-s.halfX+.04,.05,o-.003))),u.push(xm(.04,.04,jh.price,gg(-s.halfX+.036,s.wallH-.05,o-.003))),u.push(xm(.11,.055,jh.staff,gg(i.x1-.085,-.39,i.z1+.0012)));{let e=i.x1+.031,t=-.34,n=i.z1-.2;c.push(bm(.058,.2,.17,e,t,n,16250094));for(let t=0;t<4;t++)c.push(bm(.006,.07,.15,e-.018+t*.012,-.22000000000000003+t%2*.008,n,t%2?16777215:15660799));u.push(xm(.15,.1,jh.bag,gg(e+.0296,t,n,Math.PI/2)))}{let e=i.x1-.16,t=i.z1+.27;c.push(bm(.36,.13,.3,e,a+.065,t,7259647)),c.push(bm(.36,.13,.15,e,a+.195,t-.075,7259647)),c.push(bm(.34,.006,.13,e,a+.133,t+.075,3095125)),c.push(bm(.34,.006,.13,e,a+.263,t-.075,3095125))}{let e=i.x0-.32,t=i.z1+.2,n=.62,r=.2;for(let i of[-1,1])c.push(bm(.42,n,.016,e,a+n/2*Math.cos(r),t+i*Math.sin(r)*n/2,2106943,{x:-i*r}));u.push(xm(.38,97.28/384,jh.board,gg(e,a+n/2*Math.cos(r)+.08,t+Math.sin(r)*n/2+.0095+.08*Math.tan(r)*-1,0,-.2)))}let y=-1.42;d.push(hg(c,u,a,y,n));{let e=1.02,t=1.3;c.push(bm(.44,t,.3,e,a+t/2,y,1713488)),c.push(bm(.46,.04,.32,e,a+t+.02,y,13226718)),u.push(xm(.38,.38,jh.change,gg(e,a+t-.26,-1.268)))}if(c.length){let e=new q(bp(c,!1),new Y({vertexColors:!0,roughness:.6,metalness:.05}));c.forEach(e=>e.dispose()),d.push(e)}if(l.length){let e=new q(bp(l,!1),new Qa({vertexColors:!0,toneMapped:!1}));l.forEach(e=>e.dispose()),d.push(e)}if(u.length){let e=zh(Mh()),t=new q(bp(u,!1),new Y({map:e,alphaTest:.5,roughness:.55}));u.forEach(e=>e.dispose()),d.push(t)}for(let e of d)e.userData.keep=!0,e.matrixAutoUpdate=!1,e.updateMatrix();return d}var yg=-.86,bg=new Y({color:11868708,roughness:.6}),xg={standard:`もちもちアニマル`,slant:`おかしいろいろ`,triple:`ドリンク3本セット`,bridge:`プライズフィギュア`,takoyaki:`当たりでフィギュア`},Z,Q,Sg,Cg,wg,Tg=0,Eg=0,Dg,Og,kg={x0:0,x1:0,z0:0,z1:0,top:0};function Ag(e){({field:Z,hole:Q,board:Sg,fence:Cg,chute:wg,boardCx:Tg,localHole:Og}=e),Dg=e,kg={x0:-(Z.halfX+.04),x1:Z.halfX+.04,z0:-(Z.halfZ+.04),z1:wg.exitZ1+.002,top:Z.wallH+.16},Eg=Z.halfZ+.018}var jg=(e,t,n)=>new U(e,t,n),Mg=new URLSearchParams(location.search),Ng=3,Pg=.06,Fg=.003,Ig=1.2,Lg=1.7,Rg=2,zg=Mg.has(`low`)||!Mg.has(`high`)&&matchMedia(`(pointer: coarse)`).matches;function Bg(e){if(!zg)return new Ec(e);let{clearcoat:t,clearcoatRoughness:n,transmission:r,thickness:i,...a}=e;return new Y(a)}var Vg=zg?[1.25,1,.85,.7]:[1.75,1.5,1.25,1],Hg=null;function Ug(e){let t=new iu(e),n=new Yf,r=t.fromScene(n,.04,.1,100,{size:zg?128:256}).texture;return n.dispose(),t.dispose(),r}function Wg(){if(Hg)return Hg;let e=new Jf({antialias:!0,powerPreference:`high-performance`});return e.toneMapping=4,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=1,e.shadowMap.autoUpdate=!1,e.outputColorSpace=Yn,e.debug.checkShaderErrors=!1,e.domElement.setAttribute(`role`,`img`),Hg={renderer:e,env:Ug(e)},Hg}var Gg=new ui,Kg=new Vr,qg=new Vr,Jg=new U,Yg=new U,Xg=new U,Zg=new U(1,1,1),Qg=new U(0,0,0),$g=new U(0,1,0),e_=new U(0,-1,0),t_=new Vr().setFromAxisAngle($g,Math.PI/2),n_=new G,r_=new G(4865058),i_=new U,a_=new Set([`lower`,`settle`,`lift`]),o_=e=>a_.has(e);function s_(e,t){for(let n of Object.values(e))n&&n.isTexture&&t(n)}var c_=e=>{let t=e.material;return t?Array.isArray(t)?t:[t]:[]},l_=class{renderer;warm=!1;disposed=!1;inputs=new AbortController;onRestored=()=>{Hg&&(Hg.env.dispose(),Hg.env=Ug(this.renderer),this.scene.environment=Hg.env,this.studio&&this.studio.setEnvironment(Hg.env),this.restored=!0)};restored=!1;shadowLights=[];shadowReach=.4;shadowTurn=0;shadowDirty=Ng;scene=new qi;camera=new ll(38,1,.05,12);container;head=new Ri;bridge=new Ri;carriage=new Ri;cables=[];mast=new Ri;chainMesh;ballChain=!1;chainCurve=new es([],!1,`centripetal`);chainLayout=[];ring;board=new Ri;prizeMesh=null;neighbors=[];prizeKindId=``;flap;flapOpen=0;flapTarget=0;lamp;marqueeMat;bulbSets=[];ledMats=[];bulbStep=-1;chuteGlow;chuteHit;trayActive=!1;onChuteTap=null;creditCanvas=document.createElement(`canvas`);creditTex=new Lo(this.creditCanvas);shownCredits=-1;resIndex=0;lastAdaptAt=0;physicsMsInWindow=0;fpsWindow={frames:0,start:0,slow:0,fast:0};time=0;celebrate=0;sparkles;sparkleVel;rig;roof=[];zoomOnDrop=!1;watchPlate=!1;specId;theme;plushParts=[];spec;tape=null;tapeMat=null;arms=[];displays=new Ri;constructor(e,t){Ag(t.layout),this.specId=t.id,this.theme=t.plush?`plush`:t.tako?`tako`:t.bridge?`bridge`:`hook`,this.spec=t,this.container=e;let{renderer:n,env:r}=Wg();this.resIndex=Math.max(0,Vg.findIndex(e=>Math.min(devicePixelRatio||1,e)<=n.getPixelRatio()+1e-6)),n.domElement.isConnected||(this.resIndex=0),n.setPixelRatio(Math.min(devicePixelRatio||1,Vg[this.resIndex])),n.domElement.setAttribute(`aria-label`,t.plush?`ぬいぐるみの台の3D画面`:t.tako?`たこ焼き台の3D画面`:t.bridge?`橋渡し台の3D画面`:`フック台の3D画面`),n.domElement.parentElement!==e&&e.prepend(n.domElement),n.domElement.addEventListener(`webglcontextrestored`,this.onRestored,{signal:this.inputs.signal}),this.renderer=n;let i=this.scene;i.background=new G(854556),i.fog=new Ki(854556,1.6,4.2),i.environment=r,i.environmentIntensity=.24;let a=_g();this.buildArcade(a),this.buildCabinet(a);let o=this.buildLights();this.lamp=o.lamp,this.marqueeMat=o.marquee,this.buildCrane();for(let e of vg({layout:t.layout,cab:kg,floorY:yg,glassZ:Eg,kinds:(Xe[t.id]??[]).map(e=>Ye(e)),noSensors:!!t.plush},zg))i.add(e);this.chainLayout.push(...ye(t)),this.chainCurve.arcLengthDivisions=64;let s=this.chainLayout.reduce((e,t)=>e+t.links,0);this.ballChain=t.chainStyle===`ball`;let c;if(t.tako)c=new pc(t.tako.ball.radius,zg?14:20,zg?9:14);else if(this.ballChain){let e=new pc(ve,zg?8:10,zg?6:8),t=new J(6e-4,6e-4,.006,5);t.translate(0,-.003,0),c=bp([e.toNonIndexed(),t.toNonIndexed()])}else c=new mc(.0034,.0011,6,12),c.scale(1,1.45,1);let l=new Y({color:14147046,metalness:.95,roughness:.28}),u=new Y({color:16747036,roughness:.55,metalness:0});if(this.chainMesh=new So(c,t.tako?u:l,Math.max(1,s)),this.chainMesh.count=s,this.chainMesh.visible=s>0&&!t.plush,this.chainMesh.castShadow=!0,this.ballChain){let e=new Y({color:15265010,metalness:1,roughness:.18}),t=new q(new mc(.009,.0016,8,28),e);t.scale.set(1,1.9,1),t.position.y=-.016,t.castShadow=!0,this.head.add(t)}this.chainMesh.frustumCulled=!1,i.add(this.chainMesh);let d=new mc(t.ringRadius,t.ringWire,zg?10:12,zg?48:64);d.rotateY(Math.PI/2),this.ring=new q(d,Bg({color:16736184,metalness:.35,roughness:.22,clearcoat:1,clearcoatRoughness:.12,emissive:7999314,emissiveIntensity:.25})),this.ring.castShadow=!0,i.add(this.ring),t.bridge?(this.ring.visible=!1,this.board.visible=!1,t.tako?this.buildTako(t):t.plush?this.buildPlushBooth(t):this.buildBars(t),i.add(this.displays)):this.buildBoard(t),t.ringColor!==void 0&&(this.ring.material=Bg({color:t.ringColor,metalness:1,roughness:.16,clearcoat:.6})),this.flap=this.buildFlap();let f=new Ba;f.setAttribute(`position`,new Ea(new Float32Array(480),3));let p=new Float32Array(480),m=[16736184,16765503,4182271,10223482,16777215].map(e=>new G(e));for(let e=0;e<160;e++)m[e%m.length].toArray(p,e*3);f.setAttribute(`color`,new Ea(p,3)),this.sparkles=new Po(f,new ko({size:.012,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1})),this.sparkleVel=new Float32Array(480),this.sparkles.frustumCulled=!1,i.add(this.sparkles),this.pruneShadows(),this.bake(),this.resize(),this.rig=new dh(this.camera,t.layout),mh(n.domElement,this.rig,void 0,(e,t)=>this.tap(e,t),this.inputs.signal)}pruneShadows(){let e=this.shadowReach,t=new ca;this.scene.updateMatrixWorld(!0),this.scene.traverse(n=>{let r=n;if(!r.isMesh||!(r.castShadow||r.receiveShadow))return;t.setFromObject(r);let i=e+.03;(t.min.x>i||t.max.x<-i||t.min.z>i||t.max.z<-i||t.max.y<-.5)&&(r.castShadow=!1,r.receiveShadow=!1)})}bake(){ym(this.scene,{exclude:new Set([this.ring,...this.cables,...this.roof])});let{merged:e,removed:t}=ym(this.scene,{only:[...this.roof]}),n=new Set(t),r=this.roof.filter(e=>!n.has(e));this.roof.length=0,this.roof.push(...r,...e),ym(this.board)}buildArcade(e){let t=this.scene,n=new q(new lc(8,8),new Y({map:bh(),roughness:.95}));n.rotation.x=-Math.PI/2,n.position.y=yg,n.renderOrder=Rg,t.add(n);let r=new q(new lc(8,3),new Y({color:1774643,roughness:.9}));r.position.set(0,.64,-1.6),r.renderOrder=Rg,t.add(r);for(let[e,n,r,i]of[[`GAME`,`#ff4fa3`,-.9,.45],[`PRIZE`,`#3fd0ff`,.9,.55]]){let a=new q(new lc(1.1,.28),new Qa({map:xh(e,n,zg),transparent:!0,toneMapped:!1,fog:!1}));a.position.set(r,i+.3,-1.58),t.add(a);let o=new dl(new G(n),1.2,2.2,1.5);o.position.set(r,i+.2,-1.3),zg||t.add(o)}this.neighbors=mg(kg,yg,zg,e,Rg),t.add(...this.neighbors)}buildCabinet(n){let r=this.scene,i=Bg({color:1778512,metalness:.55,roughness:.34,clearcoat:.7,clearcoatRoughness:.2}),a=Bg({map:zh(Qh(this.theme)),roughness:.38,clearcoat:.8,clearcoatRoughness:.15}),o=new Y({color:15659767,metalness:1,roughness:.12}),s=new Y({color:13226718,roughness:.28,metalness:.9}),c=new Y({color:723730,roughness:.85}),l=(e,t,n,i,a,o,s,c=!0)=>{let l=new q(new Vo(t,n,i),e);return l.position.set(a,o,s),l.castShadow=c,l.receiveShadow=!0,r.add(l),l},u=(e,t,n,i,a,o,s,c)=>{let l=new q(new yp(t,n,i,zg?a>=.008?2:1:3,a),e);return l.position.set(o,s,c),l.castShadow=!0,l.receiveShadow=!0,r.add(l),l},d=(e,t,n,i,a,o,s=0)=>{let c=new q(new lc(t,n),e);return c.position.set(i,a,o),c.rotation.y=s,r.add(c),c},f=(e,t,n,i,a,o,s)=>{let c=new q(new J(t,t,n,16),e);return c.position.set(i,a,o),s===`x`&&(c.rotation.z=Math.PI/2),s===`z`&&(c.rotation.x=Math.PI/2),r.add(c),c},{x0:p,x1:m,z0:h,z1:g}=kg,_=-.025,v=-.825,y=.7999999999999999,b=-.85/2,x=wg.doorH??.115,S={x0:Q.x0+.005,x1:Q.x1-.005,y0:wg.floorY,y1:wg.floorY+x},C=Math.max(.15,Q.x1+.07);l(i,m-p-.04,y,.02,0,b,h+.01);for(let e of[-1,1]){let t=[0,0,0,0,0,0];t[e>0?0:1]=1;let n=new q(Cm(.02,y,g-h,t),[i,a]);n.position.set(e*(m-.01),b,(h+g)/2),n.castShadow=!0,n.receiveShadow=!0,r.add(n),e<0&&(n.scale.z=-1)}let w=g-.01;l(i,S.x0-p-.02,y,.02,(p+.02+S.x0)/2,b,w),l(i,m-.02-S.x1,y,.02,(S.x1+m-.02)/2,b,w),l(i,S.x1-S.x0,_-S.y1,.02,(S.x0+S.x1)/2,(_+S.y1)/2,w),l(i,S.x1-S.x0,S.y0-v,.02,(S.x0+S.x1)/2,(S.y0+v)/2,w);for(let e of[-1,1])f(o,.0065,.8019999999999999,e*m,b,g,`y`);f(o,.0065,m-p+.002,0,_,g,`x`),l(o,m-p-.01,.03,.006,0,-.8049999999999999,g+.001,!1),l(c,m-p,.035,g-h-.02,0,-.8425,(h+g)/2-.01,!1);for(let e of[-1,1])for(let t of[h+.03,g-.03]){let n=new q(new J(.018,.022,.012,20),s);n.position.set(e*(m-.03),-.854,t),r.add(n)}let T=new Y({color:15265013,roughness:.4,emissive:16773848,emissiveIntensity:.25}),E=wg.exitZ0-.01,D=w-.0105,O=l(T,Q.x1-Q.x0,.012,D-E,(Q.x0+Q.x1)/2,wg.floorY-.006,(E+D)/2,!1);O.receiveShadow=!0;let k=new Y({color:2764616,roughness:.6});for(let e of[Q.x0+.004,Q.x1-.004])l(k,.006,x+.003,wg.exitZ1-wg.exitZ0,e,wg.floorY+(x+.006)/2,(wg.exitZ0+wg.exitZ1)/2,!1);let A=S.x1-S.x0,j=S.y1-S.y0,M=(S.x0+S.x1)/2,N=(S.y0+S.y1)/2;for(let[e,t,n,r]of[[A+.024,.013,M,S.y1+.0055],[A+.024,.013,M,S.y0-.0055],[.013,j+.002,S.x0-.0055,N],[.013,j+.002,S.x1+.0055,N]])u(o,e,t,.014,.004,n,r,g+.003);d(new Y({map:zh(tg()),roughness:.4}),A+.02,(A+.02)*96/512,M,S.y1+.03,g+.002);let ee=new Qa({color:16765503,transparent:!0,opacity:0,toneMapped:!1,depthWrite:!1});for(let[e,t,n,i]of[[A+.05,.007,M,S.y1+.017],[A+.05,.007,M,S.y0-.017],[.007,j+.04,S.x0-.021,N],[.007,j+.04,S.x1+.021,N]]){let a=new q(new lc(e,t),ee);a.userData.merge=!0,a.position.set(n,i,g+.012),r.add(a)}this.chuteGlow=ee;let P=new q(new Vo(A+.08,j+.1,.08),new Qa({visible:!1}));P.position.set(M,N,g),r.add(P),this.chuteHit=P;let te=new Y({color:3817301,roughness:.6}),ne=[{z:Q.z0,y:wg.rampTop},...wg.knee?[wg.knee]:[],{z:wg.exitZ0,y:wg.rampBottom}];for(let e=1;e<ne.length;e++){let t=ne[e-1],n=ne[e],r=l(te,Q.x1-Q.x0,.01,Math.hypot(n.z-t.z,t.y-n.y)+.004,(Q.x0+Q.x1)/2,(t.y+n.y)/2-.006,(t.z+n.z)/2,!1);r.rotation.x=Math.atan2(t.y-n.y,n.z-t.z)}let re=new Y({map:zh(ig()),transparent:!0,roughness:.6,metalness:.3});for(let e of[-.14,.14]){let t=new q(new Uo(.042,40),re);t.userData.merge=!0,t.position.set(e,Math.min(-.5,S.y0-.075),g+.002),r.add(t)}let ie=zh(eg()),ae=new Y({map:ie,emissive:16777215,emissiveMap:ie,emissiveIntensity:.18,metalness:.6,roughness:.3});u(new Y({color:10134448,metalness:.9,roughness:.3}),.072,.115,.008,.004,C,-.255,g+.002),d(ae,.066,.066*420/256,C,-.255,g+.0075),this.creditCanvas.width=256,this.creditCanvas.height=96,ag(this.creditCanvas,0);let oe=new Qa({map:this.creditTex,toneMapped:!1});u(c,.08,.034,.008,.003,C,-.145,g+.002),d(oe,.072,.027,C,-.145,g+.0075);let se=.12,ce=m-p+.01,le=u(i,ce,.05,.125,.01,0,-.047,g+.05);le.rotation.x=se;let ue=[{x:.04,label:`横`,arrow:`① →`,color:`#3fd04a`},{x:.13,label:`奥`,arrow:`② ↑`,color:`#ffa63f`}],de=new Y({map:zh($h(ue,ce-.02,this.theme)),roughness:.32,metalness:.5}),fe=new q(new lc(ce-.02,.112),de);fe.rotation.x=-Math.PI/2+se,fe.position.set(0,-.0205,g+.05),r.add(fe),f(o,.005,ce,0,-.072,g+.113,`x`);for(let e of ue){let t=new Ri,n=new q(new J(.03,.033,.01,40),o),i=new G(e.color),a=new q(new pc(.025,zg?20:32,zg?10:16,0,Math.PI*2,0,Math.PI/2.6),Bg({color:i,emissive:i,emissiveIntensity:.4,roughness:.18,clearcoat:1}));a.scale.y=.7,a.position.y=0,t.add(n,a);let s=(.5-80/240)*.112;t.position.set(e.x,-.0205+Math.sin(se)*s+.004,g+.05-Math.cos(se)*s),t.rotation.x=se,r.add(t)}let pe=new Y({map:_h(),roughness:.62}),me=(e,t,n,i)=>{let a=new Vo(t-e,.024,i-n),o=a.attributes.position,s=a.attributes.uv;for(let r=8;r<12;r++)s.setXY(r,(o.getX(r)+(e+t)/2)/.2,(o.getZ(r)+(n+i)/2)/.2);let c=new q(a,pe);c.position.set((e+t)/2,-.012,(n+i)/2),c.receiveShadow=!0,r.add(c)};Q.x1<Z.halfX&&me(Q.x1,Z.halfX,-Z.halfZ,Z.halfZ),Q.x0>-Z.halfX&&me(-Z.halfX,Q.x0,-Z.halfZ,Z.halfZ),Q.z1<Z.halfZ&&me(Q.x0,Q.x1,wg.floorZ1??Q.z1,Z.halfZ),Q.z0>-Z.halfZ&&me(Q.x0,Q.x1,-Z.halfZ,Q.z0);let he=document.createElement(`canvas`);he.width=256,he.height=16;let ge=he.getContext(`2d`);for(let e=0;e<16;e++)ge.fillStyle=e%2?`#1a1a1a`:`#ffd23f`,ge.beginPath(),ge.moveTo(e*16,16),ge.lineTo(e*16+8,0),ge.lineTo(e*16+24,0),ge.lineTo(e*16+16,16),ge.fill();let _e=new Y({map:zh(he),roughness:.5}),ve=[];this.spec.tako||Q.z0>-Z.halfZ&&ve.push([(Q.x0+Q.x1)/2,Q.z0-.004,Q.x1-Q.x0,!1]),!this.spec.tako&&Q.z1<Z.halfZ&&ve.push([(Q.x0+Q.x1)/2,(wg.floorZ1??Q.z1)+.004,Q.x1-Q.x0,!1]),!this.spec.tako&&Q.x0>-Z.halfX&&ve.push([Q.x0-.004,(Q.z0+Q.z1)/2,Q.z1-Q.z0,!0]),!this.spec.tako&&(Dg.frame!==`side`||this.spec.bridge)&&Q.x1<Z.halfX&&ve.push([Q.x1+.004,(Q.z0+Q.z1)/2,Q.z1-Q.z0,!0]);for(let[e,t,n,i]of ve){let a=new q(new Vo(i?.008:n-.002,.003,i?n-.002:.008),_e);a.position.set(e,.0026,t),r.add(a)}if(!this.spec.tako){let e=new q(new Vo(Q.x1-Q.x0,.002,Q.z1-Q.z0),new Qa({color:460300}));e.position.set((Q.x0+Q.x1)/2,Math.min(-.32,wg.floorY-.03),(Q.z0+Q.z1)/2),r.add(e)}l(o,Z.halfX*2+.03,.014,.01,0,.003,Eg+.004,!1);let ye=zh(Zh(this.theme)),be=new q(new lc(Z.halfX*2,Z.wallH),new Y({map:ye,roughness:.55,emissive:16777215,emissiveMap:ye,emissiveIntensity:.22}));be.position.set(0,Z.wallH/2,-Z.halfZ-.004),be.receiveShadow=!0,r.add(be),this.roof.push(l(i,m-p,.01,g-h-.08,0,Z.wallH+.005,-.02,!1));let xe=Z.halfX*2-.08,Se=Z.halfZ*2-.1,Ce=new q(new lc(xe,Se),new Qa({color:16775406,toneMapped:!1}));Ce.rotation.x=Math.PI/2,Ce.position.set(0,Z.wallH-.0015,0),r.add(Ce),this.roof.push(Ce);for(let[e,t,n,r]of[[xe+.01,.008,0,-Se/2-.004],[xe+.01,.008,0,Se/2+.004],[.008,Se+.01,-xe/2-.004,0],[.008,Se+.01,xe/2+.004,0]])this.roof.push(l(s,e,.006,t,n,Z.wallH-.003,r,!1));let F=kg.top-_-.002;for(let e of[-1,1])for(let t of[-1,1])u(s,.024,F,.024,.004,e*(Z.halfX+.016),_+F/2,t*(Z.halfZ+.02));for(let e of[-1,1]){let t=new Qa({color:8382975,toneMapped:!1}),n=new q(new Vo(.004,Z.wallH-.02,.006),t);n.position.set(e*(Z.halfX+.003),Z.wallH/2,Z.halfZ+.02),r.add(n),this.ledMats.push(t)}let we=Bg({color:16777215,metalness:0,roughness:.03,transparent:!0,opacity:.2,alphaMap:n,envMapIntensity:1.6,clearcoat:1,clearcoatRoughness:.02,side:2,depthWrite:!1,forceSinglePass:!0}),Te=d(we,Z.halfX*2+.02,Z.wallH,0,Z.wallH/2,Eg);if(Te.renderOrder=10,!zg)for(let e of[-1,1]){let t=d(we,Z.halfZ*2+.03,Z.wallH,e*(Z.halfX+.012),Z.wallH/2,0,Math.PI/2);t.renderOrder=10}l(c,Z.halfX*2+.03,.01,.012,0,Z.wallH-.005,Eg,!1);let Ee=d(new Y({map:zh(ng(xg[this.specId]??`もちもちアニマル`)),roughness:.5,transparent:!0}),.06,.06*460/360,Z.halfX-.045,Z.wallH-.06,Eg-.002);Ee.rotation.z=-.06;let I=Bg({color:14218495,transparent:!0,opacity:.35,roughness:.1,clearcoat:1,depthWrite:!1}),De=t(Dg);if(!this.spec.bridge)for(let t of[-1,1]){let n=Og.x0,i=Sg.hingeX+Sg.halfX*2+.01,a=new q(new Vo(i-n,Cg.h,Cg.halfT*2),I),o=e(Dg,{x:(n+i)/2,y:Cg.h/2,z:t*Cg.z});a.position.set(o.x,o.y,o.z),a.quaternion.set(De.x,De.y,De.z,De.w),a.renderOrder=5,r.add(a)}if(this.spec.bridge&&!this.spec.tako&&!this.spec.plush){let e=d(I,Z.halfX*2,this.spec.bridge.backWall,0,this.spec.bridge.backWall/2,this.spec.bridge.backZ-.003);e.renderOrder=5}let L=kg.top-Z.wallH,R=u(i,m-p+.012,L,.45,.012,0,(kg.top+Z.wallH)/2,-.01);R.castShadow=!1,this.roof.push(R);let Oe=new Qa({color:16740312,toneMapped:!1}),ke=new q(new Vo(m-p-.02,.006,.008),Oe);ke.position.set(0,kg.top+.001,.212),r.add(ke),this.roof.push(ke),this.ledMats.push(Oe)}buildLights(){let e=this.scene;e.add(new Zc(10128639,2103344,.22));let t=matchMedia(`(pointer: coarse)`).matches,n=zg||t?512:1024,r=Math.max(Z.halfX,Z.halfZ)+.08;this.shadowReach=r;let i=new Li;e.add(i);for(let t=0;t<Ng;t++){let a=Math.PI/2+t*2*Math.PI/Ng,o=new ml(16774890,3.4/Ng);o.position.set(Math.cos(a)*Pg,Ig,.04+Math.sin(a)*Pg),o.target=i,o.castShadow=!0,o.shadow.mapSize.set(n,n),Object.assign(o.shadow.camera,{left:-r,right:r,top:r,bottom:-r,near:.3,far:Lg}),o.shadow.bias=-2e-4,o.shadow.normalBias=.0015,o.shadow.radius=Fg/(2*r/n),zg&&(o.shadow.autoUpdate=!1),this.shadowLights.push(o),e.add(o)}let a=new dl(16773853,.5,1.2,1.4);a.position.set(0,.42,.05),zg||e.add(a);let o=new ml(13161727,.32);o.position.set(-.4,.6,1.4),e.add(o);let s=zh(Xh(this.theme)),c=new Y({map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:1,roughness:.35}),l=kg.x1-kg.x0-.04,u=Math.min(l*470/1536,kg.top-Z.wallH-.026),d=(kg.top+Z.wallH)/2,f=new q(new lc(l,u),c);f.position.set(0,d,.2165),e.add(f),this.roof.push(f);let p=new Y({color:15659767,metalness:1,roughness:.12});for(let[t,n,r,i]of[[l+.016,.007,0,d+u/2+.004],[l+.016,.007,0,d-u/2-.004],[.008,u,-l/2-.004,d],[.008,u,l/2+.004,d]]){let a=new q(new yp(t,n,.01,2,.003),p);a.position.set(r,i,.2185),e.add(a),this.roof.push(a)}let m=new dl(16740312,.8,1.2,1.6);m.position.set(0,kg.top,.45),zg||e.add(m);let h=new Qa({color:8382975,toneMapped:!1}),g=new q(new Vo(Z.halfX*2-.002,.005,.005),h);g.position.set(0,.012,Eg-.006),e.add(g),this.ledMats.push(h);let _=new pc(.0048,zg?7:12,zg?5:8),v=(t,n)=>{let r=new So(_,new Qa({color:16777215,toneMapped:!1}),t.length),i=new ui;t.forEach((e,t)=>{r.setMatrixAt(t,i.makeTranslation(...e)),r.setColorAt(t,new G(16771496))}),e.add(r),this.bulbSets.push(r),n&&this.roof.push(r)},y=[];for(let e=0;e<18;e++){let t=-l/2+e*l/17;y.push([t,d+u/2+.004,.2245],[t,d-u/2-.004,.2245])}return v(y,!0),v(Array.from({length:14},(e,t)=>[kg.x0+.02+t*(kg.x1-kg.x0-.04)/13,-.072,kg.z1+.122]),!1),{lamp:a,marquee:c}}buildCrane(){let e=this.scene,t=new Y({color:12240082,roughness:.3,metalness:.85}),n=new Y({color:2369070,roughness:.5,metalness:.4}),r=Z.wallH-.02;for(let n of[-1,1]){let i=new q(new Vo(Z.halfX*2,.012,.014),t);i.position.set(0,r,n*(Z.halfZ-.01)),e.add(i)}let i=new q(new Vo(.03,.014,Z.halfZ*2),t);i.castShadow=!0,this.bridge.add(i);let a=new q(new Vo(.028,.02,.05),n);a.position.set(.03,0,-Z.halfZ+.06),this.bridge.add(a);for(let e of[-1,1]){let t=new q(new Vo(.05,.02,.022),n);t.position.set(0,.004,e*(Z.halfZ-.012)),this.bridge.add(t)}ym(this.bridge),this.bridge.position.y=r-.012,e.add(this.bridge);let o=new q(new Vo(.05,.03,.05),n);o.castShadow=!0,this.carriage.add(o);let s=new q(new J(.014,.014,.04,16),t);s.rotation.z=Math.PI/2,s.position.set(0,.024,0);let c=new q(new Vo(.053,.008,.053),new Y({color:16765503,roughness:.6}));if(c.position.set(0,-.006,0),this.carriage.add(s,c),this.carriage.position.y=r-.03,e.add(this.carriage),this.spec.bridge){this.spec.bridge.arm.count===3?this.buildClaws(this.spec.bridge,t):this.buildArms(this.spec.bridge,t,n);return}let l=new q(new J(.02,.024,.036,24),Bg({color:15922424,roughness:.3,metalness:.2,clearcoat:.8}));l.position.y=.022,l.castShadow=!0;let u=new q(new J(.0245,.0245,.007,24),new Y({color:16736184,emissive:16723864,emissiveIntensity:.6}));u.position.y=.01;let d=new q(new J(.005,.008,.008,12),t);d.position.y=.002,this.head.add(l,u,d),e.add(this.head);for(let t of[-.012,.012]){let r=new q(new J(9e-4,9e-4,1,6),n);this.cables.push(r),r.userData.dx=t,e.add(r)}}buildArms(e,t,n){let r=this.scene,i=e.arm,a=Bg({color:16054010,roughness:.28,metalness:.1,clearcoat:1,clearcoatRoughness:.1}),o=new q(new yp(i.hingeX*2+.03,.058,.09,zg?3:4,.022),a);o.position.y=.032,o.castShadow=!0;for(let[e,t]of[16736184,16765503,4182271].entries()){let n=new q(new Uo(.0065,20),new Qa({color:t,toneMapped:!1}));n.position.set((e-1)*.019,.034,.0455),n.userData.merge=!0,this.head.add(n)}let s=new q(new yp(i.hingeX*2+.034,.009,.094,2,.004),new Y({color:16736184,emissive:16723864,emissiveIntensity:.5}));s.position.y=.008;let c=new q(new J(.011,.011,.05,16),t);c.position.y=.082,this.head.add(o,s,c);let l=Bg({color:15135999,transparent:!0,opacity:.5,roughness:.05,clearcoat:1,clearcoatRoughness:.05,depthWrite:!1}),u=new Y({color:12575487,transparent:!0,opacity:.55,roughness:.1,depthWrite:!1}),d=new Y({color:15001838,metalness:1,roughness:.2,envMapIntensity:1.6}),f=new Y({color:9069112,metalness:.55,roughness:.45}),p=new Y({color:13225686,metalness:.9,roughness:.3}),m=i.plate.width,h=i.plate.thick;for(let e of[-1,1]){let t=new Ri,r=[new H(0,.012),new H(0,0),new H(e*i.elbow.x,i.elbow.y),new H(e*i.tip.x,i.tip.y)],a=[],o=[];for(let e=0;e<r.length;e++){let t=r[Math.max(0,e-1)],n=r[Math.min(r.length-1,e+1)],i=new H().subVectors(n,t).normalize(),s=new H(-i.y,i.x).multiplyScalar(m/2);a.push(r[e].clone().add(s)),o.push(r[e].clone().sub(s))}let s=new xs;s.moveTo(a[0].x,a[0].y);for(let e=1;e<a.length;e++)s.lineTo(a[e].x,a[e].y);for(let e=o.length-1;e>=0;e--)s.lineTo(o[e].x,o[e].y);s.closePath();let c=new ac(s,{depth:h-.002,bevelEnabled:!0,bevelThickness:.001,bevelSize:.001,bevelSegments:2,curveSegments:4});c.translate(0,0,-(h-.002)/2);let g=new q(c,[l,u]);g.castShadow=!0,g.renderOrder=6,t.add(g);let _=[];for(let[e,t]of[[a,-1],[o,1]]){let n=e.map((e,n)=>{let i=r[Math.max(0,n-1)],a=r[Math.min(r.length-1,n+1)],o=new H().subVectors(a,i).normalize();return e.clone().add(new H(-o.y,o.x).multiplyScalar(t*.0028))}),i=new xs;i.moveTo(e[0].x,e[0].y);for(let t=1;t<e.length;t++)i.lineTo(e[t].x,e[t].y);for(let e=n.length-1;e>=0;e--)i.lineTo(n[e].x,n[e].y);i.closePath();let a=new ac(i,{depth:h+.0024,bevelEnabled:!1});a.translate(0,0,-(h+.0024)/2),_.push(a)}let v=new q(bp(_),u);v.renderOrder=7,t.add(v);let y=i.claw.length,b=i.claw.width,x=b*.3,S=new xs;S.moveTo(-.001,-x),S.lineTo(y*.2,-x),S.quadraticCurveTo(y*.42,-b/2,y*.62,-b/2),S.absarc(y-b/2,0,b/2,-Math.PI/2,Math.PI/2,!1),S.lineTo(y*.62,b/2),S.quadraticCurveTo(y*.42,b/2,y*.2,x),S.lineTo(-.001,x),S.closePath();let C=Math.max(.001,i.claw.thick-.0016),w=new ac(S,{depth:C,bevelEnabled:!0,bevelThickness:8e-4,bevelSize:6e-4,bevelSegments:2,curveSegments:8});w.translate(0,0,-C/2),w.rotateX(Math.PI/2);let T=new Ri,E=new q(w,d);if(E.castShadow=!0,E.position.set(e*i.tip.x,i.tip.y,0),E.rotation.z=e>0?Math.PI-i.claw.angle:i.claw.angle,i.fork&&e>0){let t=i.fork,n=-Math.cos(t.tilt),r=Math.sin(t.tilt),a=-Math.cos(t.tilt+t.lipAngle),o=Math.sin(t.tilt+t.lipAngle),s=e*i.tip.x+n*t.length,c=i.tip.y+r*t.length;for(let l of[-t.gap/2,t.gap/2]){let u=new q(new J(t.rod,t.rod,t.length,8),d);if(u.position.set(e*i.tip.x+n*t.length/2,i.tip.y+r*t.length/2,l),u.rotation.z=Math.PI/2-t.tilt,u.castShadow=!0,T.add(u),t.lip>0){let e=new q(new J(t.rod,t.rod,t.lip,8),d);e.position.set(s+a*t.lip/2,c+o*t.lip/2,l),e.rotation.z=Math.PI/2-(t.tilt+t.lipAngle),T.add(e)}let f=new q(new pc(t.rod*1.25,8,6),d);f.position.set(s+a*t.lip,c+o*t.lip,l),T.add(f)}let l=new q(new J(t.rod,t.rod,t.gap+t.rod*2,8),d);l.rotation.x=Math.PI/2,l.position.set(e*i.tip.x,i.tip.y,0),T.add(l)}else T.add(E);let D=new H(i.elbow.x-i.tip.x,i.elbow.y-i.tip.y).normalize(),O=t=>[e*(i.tip.x+D.x*t),i.tip.y+D.y*t],k=new q(new Vo(.0016,.0215,b*.6),d);k.position.set(...O(.00875),0),k.rotation.z=Math.atan2(D.y,e*D.x)-Math.PI/2,k.castShadow=!0,T.add(k);let A=new q(new Vo(.012,.017,h+.004),f);A.position.set(...O(.008),0),A.rotation.z=Math.atan2(D.y,e*D.x)-Math.PI/2,T.add(A);for(let e of[.004,.012]){let t=new q(new J(.0018,.0018,h+.006,8),p);t.rotation.x=Math.PI/2,t.position.set(...O(e),0),T.add(t)}let j=new q(new J(.008,.008,h+.012,14),n);j.rotation.x=Math.PI/2,T.add(j),wm(T),t.add(T),t.position.set(e*i.hingeX,0,0),i.single&&e<0&&(t.visible=!1),this.arms.push(t),this.head.add(t)}r.add(this.head),this.buildMast()}buildClaws(e,t){let n=e.arm,r=Bg({color:16054010,roughness:.28,metalness:.1,clearcoat:1,clearcoatRoughness:.1}),i=new q(new J(n.hingeX+.012,n.hingeX+.018,.05,zg?18:28),r);i.position.y=.03,i.castShadow=!0;let a=new q(new J(n.hingeX+.0195,n.hingeX+.0195,.008,zg?18:28),new Y({color:16736184,emissive:16723864,emissiveIntensity:.5}));a.position.y=.008;let o=new q(new pc(n.hingeX+.012,zg?16:24,8,0,Math.PI*2,0,Math.PI/2),r);o.position.y=.055;let s=new q(new J(.009,.009,.05,12),t);s.position.y=.095,this.head.add(i,a,o,s);let c=new Y({color:14673130,metalness:1,roughness:.22,envMapIntensity:1.6}),l=new Y({color:2829104,roughness:.8});for(let e=0;e<3;e++){let r=e*2*Math.PI/3-Math.PI/2+Math.PI/3,i=new Ri;i.rotation.y=r,i.position.set(n.hingeX*Math.cos(r),0,-n.hingeX*Math.sin(r));let a=new Ri,o=new U(n.tip.x-Math.cos(n.claw.angle)*n.claw.length,n.tip.y+Math.sin(n.claw.angle)*n.claw.length,0),s=new q(new hc(new es([new U(0,.004,0),new U(n.elbow.x*.6,n.elbow.y*.5,0),new U(n.elbow.x,n.elbow.y,0),new U((n.elbow.x+n.tip.x)/2+.006,(n.elbow.y+n.tip.y)/2,0),new U(n.tip.x,n.tip.y,0),o],!1,`centripetal`),zg?24:40,n.plate.thick*.9,zg?5:8,!1),c);s.castShadow=!0,a.add(s);let u=new q(new pc(n.plate.thick*1.3,8,6),l);u.position.copy(o),a.add(u);let d=new q(new J(.0045,.0045,.012,10),t);d.rotation.x=Math.PI/2,a.add(d),i.add(a),this.arms.push(a),this.head.add(i)}this.scene.add(this.head),this.buildMast()}buildMast(){let e=[];[.0115,.009,.0068].forEach((t,n)=>{let r=new J(t,t,1/3+.004,14,1,!0);r.translate(0,-(n+.5)/3,0),e.push(r);let i=new J(t+.0012,t+.0012,.012,14,1,!0);i.translate(0,-(n+1)/3+.006,0),e.push(i)});let t=new q(bp(e),new Y({color:15133424,metalness:.7,roughness:.28,envMapIntensity:1.8,side:2}));t.castShadow=!0;class n extends Go{constructor(){super()}getPoint(e,t=new U){let n=e*Math.PI*2*11;return t.set(Math.cos(n)*.017,-e,Math.sin(n)*.017)}}let r=new q(new hc(new n,zg?110:176,.0021,zg?4:6,!1),new Y({color:16053488,roughness:.6}));for(let e of[t,r])e.frustumCulled=!1,this.mast.add(e);this.scene.add(this.mast)}buildPlushBooth(e){let t=e.plush.guard,n=this.scene,r=Bg({color:14218495,transparent:!0,opacity:.3,roughness:.08,clearcoat:1,depthWrite:!1,side:2}),i=new Y({color:15265010,metalness:.8,roughness:.3}),a=Q.z1-Q.z0,o=Q.x1-Q.x0,s=new q(new lc(a,t.h),r);s.rotation.y=Math.PI/2,s.position.set(Q.x1+t.t/2,t.h/2,(Q.z0+Q.z1)/2),s.renderOrder=5;let c=new q(new lc(o+t.t,t.h),r);c.position.set((Q.x0+Q.x1)/2+t.t/2,t.h/2,Q.z0-t.t/2),c.renderOrder=5;let l=new q(new Vo(.006,.004,a),i);l.position.set(Q.x1+t.t/2,t.h+.002,(Q.z0+Q.z1)/2);let u=new q(new Vo(o+t.t,.004,.006),i);u.position.set((Q.x0+Q.x1)/2+t.t/2,t.h+.002,Q.z0-t.t/2),n.add(s,c,l,u)}buildTako(e){let t=e.tako,n=t.plate,r=t.dish,i=this.scene,a=vh(),o=new Y({color:4802893,metalness:.63,roughness:.68}),s=new Y({color:7763057,metalness:.69,roughness:.88,map:a,roughnessMap:a,bumpMap:zg?null:a,bumpScale:45e-5}),c=new Y({vertexColors:!0,metalness:.47,roughness:.59}),l=new Y({vertexColors:!0,metalness:.16,roughness:.5,emissive:7606299,emissiveIntensity:.28}),u=new Y({color:15281216,roughness:.47,emissive:7997968,emissiveIntensity:.38}),d=new Y({color:15922166,roughness:.6}),f=new Y({color:3108822,roughness:.45}),p=Bg({color:14218495,transparent:!0,opacity:.22,roughness:.08,clearcoat:1,depthWrite:!1}),m=n.cols*n.pitchX,h=n.rows*n.pitchZ,g=.023,_=n.bar,v=m+_*2,y=h+_*2,b=n.depth,x=.0258,S=zg?16:24,C=new Ri;C.position.set(n.x,n.y,n.z),C.rotation.x=n.tilt;let w=(e,t)=>n.win.some(([n,r])=>n===e&&r===t),T=new xs;T.moveTo(-v/2,-y/2),T.lineTo(v/2,-y/2),T.lineTo(v/2,y/2),T.lineTo(-v/2,y/2),T.closePath();let E=[],D=[],O=[],k=Math.max(0,b-g),A=b-k,j=[new H(x,0),new H(.02425,-k*.38)];for(let e=0;e<=8;e++){let t=e/8*Math.PI/2;j.push(new H(g*Math.cos(t),-k-A*Math.sin(t)))}let M=new G(12037536),N=new G(2828072),ee=new G(15749973),P=new G(9968428),te=new G;for(let e=0;e<n.cols;e++)for(let t=0;t<n.rows;t++){let r=(e-(n.cols-1)/2)*n.pitchX,i=(t-(n.rows-1)/2)*n.pitchZ,a=new bs;a.absarc(r,-i,x,0,Math.PI*2,!0),T.holes.push(a);let o=w(e,t),s=new cc(j,S),c=s.attributes.position,l=new Float32Array(c.count*3);for(let e=0;e<c.count;e++){let t=Br.smoothstep(c.getY(e),-.009,0);te.copy(o?P:N).lerp(o?ee:M,t).toArray(l,e*3)}if(s.setAttribute(`color`,new Ea(l,3)),s.translate(r,0,i),(o?D:E).push(s),o){let e=new uc(.02615,.0293,S);e.rotateX(-Math.PI/2),e.translate(r,6e-4,i),O.push(e)}}let ne=new dc(T,S/2),re=ne.attributes.position,ie=ne.attributes.uv;for(let e=0;e<re.count;e++)ie.setXY(e,re.getX(e)/v+.5,re.getY(e)/y+.5);ne.rotateX(-Math.PI/2);let ae=new q(ne,s);ae.receiveShadow=!0,C.add(ae);let oe=new q(bp(E),c);oe.receiveShadow=!0,C.add(oe),D.length&&(C.add(new q(bp(D),l)),C.add(new q(bp(O),u))),[...E,...D,...O].forEach(e=>e.dispose());let se=.03,ce=(e,t,n,r)=>{let i=new q(new Vo(e,se,t),o);i.position.set(n,-.03/2-5e-4,r),i.castShadow=!0,C.add(i)};ce(m+_*2,.004,0,-h/2-_+.002),ce(m+_*2,.004,0,h/2+_-.002),ce(.004,h+_*2-.008,-m/2-_+.002,0),ce(.004,h+_*2-.008,m/2+_-.002,0);let le=new q(new Vo(m+_*2-.008,se-b-.002,h+_*2-.008),o);le.position.y=-b-.001-(se-b-.002)/2,C.add(le);for(let e of[-1,1]){let t=new q(new Vo(.03,.012,.07),o);t.position.set(e*(m/2+_+.012),-.012,0),C.add(t)}i.add(C);let ue=n.y-.034-h/2*Math.tan(n.tilt),de=new q(new Vo(m+_*2-.01,ue,h+_*2-.01),d);de.position.set(n.x,ue/2,n.z),de.castShadow=!0,de.receiveShadow=!0,i.add(de);let fe=new q(new lc(.2,32/512),new Y({map:zh(Jh()),roughness:.5}));fe.position.set(n.x,Math.min(ue-.04,.11),n.z+h/2+_-.004),i.add(fe);let pe=n.y+n.wall/2-.01,me=n.wall+.04,he=(e,t,n,r)=>{let a=new q(new lc(e,me),p);a.position.set(t,pe,n),a.rotation.y=r,a.renderOrder=5,i.add(a)};he(m+_*2,n.x,n.z-h/2-_-.002,0),he(m+_*2,n.x,n.z+h/2+_+.002,0),he(h+_*2,n.x-m/2-_-.002,n.z,Math.PI/2),he(h+_*2,n.x+m/2+_+.002,n.z,Math.PI/2);let ge=.004,_e=(r.x0+r.x1)/2,ve=(r.z0+r.z1)/2,ye=r.x1-r.x0,be=r.z1-r.z0,xe=new Ri,Se=(e,t,n,r,i,a)=>{let o=new q(new Vo(e,t,n),f);o.position.set(r,i,a),o.castShadow=!0,o.receiveShadow=!0,xe.add(o)};Se(ye+ge*2,r.y,be+ge*2,_e,r.y/2,ve),Se(ye+ge*2,r.rim,ge,_e,r.y+r.rim/2,r.z0-ge/2),Se(ye+ge*2,r.rim,ge,_e,r.y+r.rim/2,r.z1+ge/2),Se(ge,r.rim,be,r.x0-ge/2,r.y+r.rim/2,ve),Se(ge,r.rim,be,r.x1+ge/2,r.y+r.rim/2,ve),wm(xe),i.add(xe)}buildBars(e){let t=e.bridge,n=this.scene,r=new Y({color:15988216,roughness:.4}),i={pink:Bg({color:16746168,transparent:!0,opacity:.82,roughness:.3,clearcoat:.6}),clear:Bg({color:15660799,transparent:!0,opacity:.4,roughness:.15,clearcoat:.8})},a=new Y({color:16185338,roughness:.55}),o=new Y({color:1381658,roughness:.7}),s=new Y({color:14690858,roughness:.6}),c=Z.halfX*2-.012,l=(e,t,r,i,a,o,s=!1)=>{let c=new q(new J(t,t,r,16),e);return c.rotation.z=Math.PI/2,c.position.set(i,a,o),c.castShadow=s,c.receiveShadow=!0,n.add(c),c};t.bars.forEach((e,u)=>{let d=t.barY+(e.lift??0);if(l(r,t.barRadius-.002,c-.004,0,d,e.z,!0),e.grip!==`none`&&l(i[e.grip],t.barRadius,c-.05,0,d,e.z),e.marks)for(let n of[t.marks.x0,t.marks.x1])l(o,t.barRadius+6e-4,.012,n,d,e.z);u===t.bars.length-1&&l(s,t.barRadius+6e-4,.008,t.prize.x,d,e.z);for(let t of[-1,1]){let r=new q(new Vo(.016,.026,.03),a);r.position.set(t*(Z.halfX-.014),d-.002,e.z),n.add(r)}});let u=t.bars[0].z-.05,d=t.bars[t.bars.length-1].z+.05,f=[];for(let e of[-1,1]){let t=new q(new Vo(.008,.15,d-u),a);t.position.set(e*(Z.halfX-.004),.075,(u+d)/2),t.receiveShadow=!0,n.add(t);for(let t=u+.02;t<d-.01;t+=.025)for(let n of[.025,.05,.1,.125]){let r=new Uo(.004,8).toNonIndexed();r.rotateY(-e*Math.PI/2),r.translate(e*(Z.halfX-.0085),n,t),f.push(r)}}n.add(new q(bp(f,!1),new Qa({color:3158586}))),f.forEach(e=>e.dispose())}buildBoard(e){let t=new Y({map:yh(),roughness:.55}),n=new q(new Vo(Sg.halfX*2,Sg.halfY*2,Sg.halfZ*2),t);if(n.castShadow=!0,n.receiveShadow=!0,this.board.add(n),Dg.shelf){let e=new q(new Vo(Dg.shelf-.002,Sg.halfY*2,Sg.halfZ*2),t);e.position.set(Og.x1+Dg.shelf/2-Tg,0,0),e.receiveShadow=!0,e.castShadow=!0,this.shelfInner().add(e)}if(e.lift){let t=Bg({color:14673130,metalness:1,roughness:.2}),n=.014,r=[];for(let t of[-1,1])for(let i of[-1,1]){let a=new J(.003,.003,e.lift.posts+Sg.halfY,10);a.translate(t*(Sg.halfX-n),(e.lift.posts+Sg.halfY)/2-Sg.halfY,i*(Sg.halfZ-n));let o=new pc(.0042,10,8);o.translate(t*(Sg.halfX-n),e.lift.posts,i*(Sg.halfZ-n)),r.push(a.toNonIndexed(),o.toNonIndexed())}let i=new q(bp(r,!1),t);r.forEach(e=>e.dispose()),i.castShadow=!0,this.fixedBoard().add(i)}let i=e.sign?Bg({color:15133424,metalness:1,roughness:.16,clearcoat:.6}):Bg({color:15249482,metalness:.9,roughness:.22,clearcoat:.5});for(let t of e.hooks){let n=xe(t,o(e,t),Tg).map(e=>jg(e.x,e.y,e.z)),r=new q(new hc(new es(n,!1,`centripetal`),zg?48:80,a,zg?8:10,!1),i);r.castShadow=!0,this.board.add(r);let s=t.style===`question`,c=new q(new pc(s?a*1.7:a,12,10),i);if(c.position.copy(n[n.length-1]),this.board.add(c),s){let e=new q(new J(.008,.008,.0015,20),i);e.position.set(n[0].x,n[0].y+75e-5,n[0].z);let t=new q(new J(.0062,.0062,.005,6),i);t.position.set(n[0].x,n[0].y+.004,n[0].z),this.board.add(e,t)}else{let e=new q(new J(.009,.011,.004,20),i);e.position.set(n[0].x,n[0].y+.002,n[0].z),this.board.add(e)}if(t.label){let r=document.createElement(`canvas`);r.width=r.height=64;let i=r.getContext(`2d`);i.fillStyle=`#1b1f38`,i.beginPath(),i.arc(32,32,30,0,Math.PI*2),i.fill(),i.fillStyle=`#ffd23f`,i.font=`900 40px "Avenir Next","Hiragino Sans",sans-serif`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillText(t.label,32,34);let a=new q(new Uo(.009,24),new Y({map:zh(r),roughness:.6}));if(a.rotation.x=-Math.PI/2,a.position.set(n[0].x-Math.cos(t.direction)*.02,o(e,{...t,x:t.x-Math.cos(t.direction)*.02})+.0012,n[0].z-Math.sin(t.direction)*.02),e.sign){let t=Math.sign(e.sign.high-e.sign.low)*e.sign.angle;a.rotation.set(-Math.PI/2,0,0),a.rotateOnWorldAxis(new U(0,0,1),t)}this.board.add(a)}}if(e.pusher){let t=Bg({color:15267583,transparent:!0,opacity:.35,roughness:.08,clearcoat:1,depthWrite:!1}),n=new q(new Vo(.003,e.pusher,Sg.halfZ*1.8),t);n.position.set(-Sg.halfX+.0015,Sg.halfY+e.pusher/2,0),n.renderOrder=4;let r=new q(new Vo(.005,.008,Sg.halfZ*1.8+.002),new Y({color:14166062,roughness:.5}));r.position.set(-Sg.halfX+.0015,Sg.halfY+e.pusher-.004,0),r.castShadow=!0,this.board.add(n,r);for(let t of[-1,1]){let n=new q(new Vo(.006,e.pusher,.006),Bg({color:14015459,metalness:.9,roughness:.25}));n.position.set(-Sg.halfX+.003,Sg.halfY+e.pusher/2,t*Sg.halfZ*.9),n.castShadow=!0,this.board.add(n)}}if(e.backLip){let t=Sg.halfY+(e.sign?.lift??0),n=new q(new Vo(.004,e.backLip,Sg.halfZ*2),Bg({color:14015459,metalness:.9,roughness:.25}));n.position.set(-Sg.halfX+.002,t+e.backLip/2,0),n.castShadow=!0,this.board.add(n)}let s=new q(new J(.004,.004,Sg.halfZ*2,12),new Y({color:10134445,metalness:.9,roughness:.3}));if(s.rotation.x=Math.PI/2,s.position.set(-Sg.halfX,0,0),this.board.add(s),e.sign){let{low:t,high:n,angle:i}=e.sign,a=e.sign.lift??0,o=Math.abs(n-t)/Math.cos(i),s=Math.sign(n-t)*i,c=zh(og());c.center.set(.5,.5),c.rotation=n<t?Math.PI/2:-Math.PI/2;let l=new q(Cm(o-.002,.006,r(e.sign,e.layout)*2-.002,[0,0,1,0,0,0]),[bg,new Y({map:c,roughness:.82})]);l.position.set((t+n)/2-Tg,Sg.halfY+a+Math.abs(n-t)/2*Math.tan(i)-.003,0),l.rotation.z=s,l.castShadow=!0,l.receiveShadow=!0,this.board.add(l);let u=new Y({color:13226718,metalness:.9,roughness:.3});for(let[o,s]of[[n,a+Math.abs(n-t)*Math.tan(i)],[t,a]])if(!(s<.004))for(let i of[-r(e.sign,e.layout)*.85,r(e.sign,e.layout)*.85]){let e=new q(new Vo(.006,s,.006),u);e.position.set(o-Tg-Math.sign(o===n?n-t:t-n)*.006,Sg.halfY+s/2,i),this.board.add(e)}}this.scene.add(this.board)}buildFlap(){let e=new Ri,t=Q.x1-Q.x0-.012,n=(wg.doorH??.115)-.005,r=zh(rg()),i=new q(new lc(t,n),Bg({color:9081784,transparent:!0,opacity:.28,roughness:.18,clearcoat:1,side:2,depthWrite:!1,emissive:16777215,emissiveMap:r,emissiveIntensity:.35}));return i.position.y=-n/2,e.add(i),e.position.set((Q.x0+Q.x1)/2,wg.floorY+n+.003,kg.z1+.004),this.scene.add(e),e}setPrize(e){if(this.prizeKindId===e.id&&this.prizeMesh)return;this.prizeMesh&&(this.scene.remove(this.prizeMesh),$m(this.prizeMesh));let t;if(this.spec.plush&&e.category===`plush`){let n=new Ri;this.plushParts=hp(e,zg);for(let e of this.plushParts)e.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.frustumCulled=!1)}),n.add(e);t=n}else this.plushParts=[],t=Qm(e,zg);this.shotKind=e.practice?null:e,this.warm&&this.preshoot(),e.practice&&this.markCom(t,e),this.scene.add(t),this.prizeMesh=t,this.prizeKindId=e.id,this.spec.bridge?this.lineUpDisplays(t,e):this.layTape(e)}markCom(e,t){if(t.shape.type!==`box`)return;let{half:n,com:r={x:0,y:0,z:0}}=t.shape,i=new Qa({color:16777215,toneMapped:!1}),a=new Qa({color:15082794,toneMapped:!1});for(let t of[-1,1]){let o=new Ri,s=new q(new Uo(.012,24),i),c=new q(new Uo(.0085,24),a);c.position.z=3e-4,o.add(s,c),o.position.set(r.x,r.y,t*(n.z+.0012)),t<0&&(o.rotation.y=Math.PI),e.add(o)}}lineUpDisplays(e,t){if(this.displays.clear(),this.spec.plush)return;let n=u(t.shape);if(this.spec.tako){for(let t=0;t<3;t++){let r=e.clone();r.position.set(-.27+t*(n.x*2+.012),n.y+5e-4,-Z.halfZ+n.z+.03+t%2*.01),r.quaternion.identity(),r.rotation.y=.12-t*.05,r.visible=!0,r.traverse(e=>{e.castShadow=!1}),this.displays.add(r)}return}if(t.practice||n.z*2+.02>Z.halfZ+this.spec.bridge.backZ)return;let r=n.x*2+.012,i=n.z*2+.014,a=this.spec.bridge.backZ+Z.halfZ-.02,o=Math.max(1,Math.min(2,Math.floor(a/i))),s=0;for(let t=0;t<o;t++){let a=t===0?4:3,o=this.spec.bridge.backZ-.012-n.z-.004-t*i;for(let t=0;t<a;t++,s++){let i=e.clone();i.position.set((t-(a-1)/2)*r,n.y+5e-4,o),i.quaternion.identity(),i.rotation.y=(s*37%5-2)*.025,i.visible=!0,i.traverse(e=>{e.castShadow=!1}),this.displays.add(i)}}}layTape(e){this.tape&&(this.tape.removeFromParent(),this.tape.geometry.dispose());let t=this.spec,n=he(t,e.shape),r=u(e.shape),i=!!t.sign&&n.x>=Math.min(t.sign.low,t.sign.high)&&n.x<=Math.max(t.sign.low,t.sign.high),a=Sg.halfY+(i?t.sign.lift??0:0)+9e-4,o=n.x-Tg,s=n.z,c=.005,l=Math.min(.02,r.x*.7,r.z*.7),d=.004,f=[],p=(e,t,n,r)=>{let i=new lc(e,t).toNonIndexed();i.rotateX(-Math.PI/2),i.translate(n,a,r),f.push(i)};for(let e of[-1,1])for(let t of[-1,1]){let n=o+e*(r.x+d),i=s+t*(r.z+d);p(l,c,n-e*(l/2-c/2),i),p(c,l,n,i-t*(l/2-c/2))}this.tapeMat??=new Y({color:16185330,roughness:.75}),this.tape=new q(bp(f,!1),this.tapeMat),f.forEach(e=>e.dispose()),this.tape.receiveShadow=!0,(Dg.shelf?this.shelfInner():this.board).add(this.tape)}fixed=null;fixedBoard(){if(this.fixed)return this.fixed;let n=new Ri,r=e(Dg,{x:Tg,y:Sg.halfY,z:0}),i=t(Dg);return n.position.set(r.x,r.y,r.z),n.quaternion.set(i.x,i.y,i.z,i.w),this.scene.add(n),this.fixed=n,n}shelfPivot=null;shelfIn=null;shelfInner(){if(this.shelfIn)return this.shelfIn;let e=Og.x1-Tg;return this.shelfPivot=new Ri,this.shelfPivot.position.set(e,0,0),this.shelfIn=new Ri,this.shelfIn.position.set(-e,0,0),this.shelfPivot.add(this.shelfIn),this.fixedBoard().add(this.shelfPivot),this.shelfIn}warmUp(){return this.warming??=this.prepare()}warming=null;async prepare(){let e=this.renderer;try{await Promise.race([e.compileAsync(this.scene,this.camera),new Promise(e=>setTimeout(e,8e3))])}catch{}if(this.disposed)return;let t=[];this.scene.traverse(e=>{e.frustumCulled&&(e.frustumCulled=!1,t.push(e))});for(let e of this.shadowLights)e.shadow.needsUpdate=!0;e.shadowMap.needsUpdate=!0,e.render(this.scene,this.camera);for(let e of t)e.frustumCulled=!0;this.shadowDirty=this.shadowLights.length,this.warm=!0,this.preshoot()}dispose(){if(this.disposed)return;this.disposed=!0,this.warm=!1,this.inputs.abort();let e=new Set;this.scene.traverse(t=>{t.geometry?.dispose(),t.isInstancedMesh&&t.dispose(),t.shadow?.dispose();for(let n of c_(t))s_(n,t=>{e.has(t)||(e.add(t),t.dispose())})}),this.creditTex.dispose(),this.studio?.dispose(),this.studio=null,this.scene.clear()}resize(){let e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}adaptResolution(e,t){let n=this.fpsWindow;if(t){n.start=0,n.frames=0,this.physicsMsInWindow=0;return}if(!n.start||e-n.start>3e3){n.start=e,n.frames=0,this.physicsMsInWindow=0;return}if(e-this.lastAdaptAt>100){this.lastAdaptAt=e,n.start=e,n.frames=0,this.physicsMsInWindow=0;return}if(this.lastAdaptAt=e,n.frames++,e-n.start<1500)return;let r=e-n.start,i=n.frames*1e3/r,a=r/n.frames;n.frames=0,n.start=e,this.physicsMsInWindow=0;let o=this.adapt;if(o.loweredFrom>0){let t=a<o.loweredFrom*.88;if(o.loweredFrom=0,!t&&this.resIndex>0){o.noLowerUntil=e+6e4,this.setResolution(this.resIndex-1);return}}a>25?(n.slow++,n.fast=0):i>56.5?(n.fast++,n.slow=0):(n.slow=0,n.fast=0);let s=this.resIndex;n.slow>=1&&this.resIndex<Vg.length-1&&e>o.noLowerUntil&&(s++,o.loweredFrom=a,e-o.raisedAt<8e3&&(o.noRaiseUntil=e+12e4)),n.fast>=3&&this.resIndex>0&&e>o.noRaiseUntil&&(s--,o.raisedAt=e),s!==this.resIndex&&this.setResolution(s)}adapt={loweredFrom:0,noLowerUntil:0,noRaiseUntil:0,raisedAt:-1e9};setResolution(e){this.resIndex=e,this.fpsWindow.slow=0,this.fpsWindow.fast=0,this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,Vg[e])),this.resize()}get resolution(){return this.renderer.getPixelRatio()}setCredits(e){e!==this.shownCredits&&(this.shownCredits=e,ag(this.creditCanvas,e),this.creditTex.needsUpdate=!0)}tap(e,t){if(!this.trayActive||!this.onChuteTap)return!1;let n=this.renderer.domElement.getBoundingClientRect(),r=new H((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),i=new Ml;return i.setFromCamera(r,this.camera),i.intersectObject(this.chuteHit,!1).length!==0&&this.onChuteTap()}openFlap(e){this.flapTarget=+!!e}celebrateNow(){this.celebrate=1;let e=this.sparkles.geometry.getAttribute(`position`);for(let t=0;t<e.count;t++){e.setXYZ(t,Q.x0+.06+(Math.random()-.5)*.04,.02,(Math.random()-.5)*.06);let n=Math.random()*Math.PI*2,r=.4+Math.random()*.8;this.sparkleVel[t*3]=Math.cos(n)*r*.5,this.sparkleVel[t*3+1]=.9+Math.random()*1.2,this.sparkleVel[t*3+2]=Math.sin(n)*r*.5}e.needsUpdate=!0}get animating(){return this.rig.moving||this.celebrate>0||Math.abs(this.flapOpen-this.flapTarget)>.01||this.trayActive}updateShadows(e){let t=this.renderer.shadowMap,n=this.shadowLights;if(!zg||n.length<2){t.needsUpdate=e;return}e&&(this.shadowDirty=1),this.shadowTurn=(this.shadowTurn+1)%2;let r=this.shadowDirty>0&&(this.shadowTurn===0||!e);if(r){for(let e of n)e.shadow.needsUpdate=!0;e||(this.shadowDirty=0)}t.needsUpdate=r}render(e,t,n=!1){this.updateShadows(!n||this.restored),this.restored=!1,this.time+=t,this.adaptResolution(performance.now(),n);let r=this.camera.position.x;for(let e of this.neighbors)e.visible=!(Math.sign(r)===Math.sign(e.position.x)&&Math.abs(r)>Math.abs(e.position.x)-.3);if(!e)return;let i=e.head;if(this.head.position.set(i.x,i.y,i.z),this.arms.length===3)for(let t=0;t<3;t++)this.arms[t].rotation.z=e.arms[t];else this.arms.length&&(this.arms[0].rotation.z=-e.arms[0],this.arms[1].rotation.z=e.arms[1]);let a=i.x-e.sway.x,o=i.z-e.sway.z;this.bridge.position.x=a,this.carriage.position.set(a,this.carriage.position.y,o);let s=this.carriage.position.y-.015;if(this.arms.length){let t=i.y+.105,n=s+.1,r=Yg.set(i.x-a,t-n,i.z-o),c=(s-n)/r.y,l=Math.max(.004,r.length()*(1-c));this.mast.position.set(a+r.x*c,s,o+r.z*c),this.mast.quaternion.setFromUnitVectors(e_,r.normalize()),this.mast.scale.set(1,l,1),this.head.rotation.set(Math.atan2(r.z,-r.y),e.headYaw,-Math.atan2(r.x,-r.y),`YXZ`)}for(let e of this.cables){let t=Math.max(.001,s-(i.y+.04));e.scale.y=t,e.position.set(i.x+e.userData.dx,i.y+.04+t/2,i.z)}let c=Gg,l=Kg,u=t_,d=Jg,f=0;if(this.chainMesh.visible){if(this.spec.tako)for(let t=0;t<e.chain.length;t++){let n=e.chain[t].p;this.chainMesh.setMatrixAt(f++,c.makeTranslation(n.x,n.y,n.z))}else if(this.ballChain){let t=this.chainCurve,n=t.points;for(;n.length<e.chain.length+1;)n.push(new U);n.length=e.chain.length+1,n[0].set(i.x,i.y,i.z);for(let t=0;t<e.chain.length;t++){let r=e.chain[t];Yg.set(0,-this.chainLayout[t].span/2,0).applyQuaternion(qg.set(r.q.x,r.q.y,r.q.z,r.q.w)),n[t+1].set(r.p.x+Yg.x,r.p.y+Yg.y,r.p.z+Yg.z)}t.updateArcLengths();let r=this.chainMesh.count;for(let e=0;e<r;e++){let n=(e+.5)/r;t.getPointAt(n,d),t.getTangentAt(n,Xg).negate(),l.setFromUnitVectors($g,Xg);let a=i.y-d.y<.03;c.compose(d,l,a?Qg:Zg),this.chainMesh.setMatrixAt(f++,c)}}else for(let t=0;t<e.chain.length;t++){let n=e.chain[t],{span:r,links:i}=this.chainLayout[t],a=qg.set(n.q.x,n.q.y,n.q.z,n.q.w);for(let e=0;e<i;e++){let t=Yg.set(0,r/2-(e+.5)*r/i,0).applyQuaternion(a);d.set(n.p.x+t.x,n.p.y+t.y,n.p.z+t.z),l.copy(a),(f&1)==1&&l.multiply(u),c.compose(d,l,Zg),this.chainMesh.setMatrixAt(f++,c)}}}if(f>0&&(this.chainMesh.instanceMatrix.needsUpdate=!0),this.ring.position.set(e.ring.x,e.ring.y,e.ring.z),this.ring.quaternion.set(e.ringQ.x,e.ringQ.y,e.ringQ.z,e.ringQ.w),this.shelfPivot&&(this.shelfPivot.rotation.z=e.shelf),this.board.position.set(e.board.x,e.board.y,e.board.z),this.board.quaternion.set(e.boardQ.x,e.boardQ.y,e.boardQ.z,e.boardQ.w),this.plushParts.length&&this.prizeMesh){this.prizeMesh.visible=e.prize.y>-1;for(let t=0;t<this.plushParts.length;t++){let n=e.chain[t];this.plushParts[t].position.set(n.p.x,n.p.y,n.p.z),this.plushParts[t].quaternion.set(n.q.x,n.q.y,n.q.z,n.q.w)}}else this.prizeMesh&&(this.prizeMesh.visible=e.prize.y>-1,this.prizeMesh.position.set(e.prize.x,e.prize.y,e.prize.z),this.prizeMesh.quaternion.set(e.prizeQ.x,e.prizeQ.y,e.prizeQ.z,e.prizeQ.w));this.flapOpen+=(this.flapTarget-this.flapOpen)*Math.min(1,t*8),this.chuteGlow.opacity=this.trayActive?.45+.45*Math.sin(this.time*6):0,this.chuteGlow.visible=this.trayActive,this.flap.rotation.x=-this.flapOpen*1.25;let p=this.celebrate>0,m=Math.floor(this.time*(p?16:5));if(m!==this.bulbStep){this.bulbStep=m;let e=n_.setHex(p?16744408:16769696),t=r_;for(let n of this.bulbSets){for(let r=0;r<n.count;r++)n.setColorAt(r,(p?(m+r)%2==0:(m+r)%4!=0)?e:t);n.instanceColor.needsUpdate=!0}}this.marqueeMat.emissiveIntensity=.9+.1*Math.sin(this.time*2.3)+(p?.6*Math.abs(Math.sin(this.time*12)):0),this.lamp.intensity=.5+(p?.8*Math.abs(Math.sin(this.time*10)):0);for(let e=0;e<this.ledMats.length;e++)this.ledMats[e].color.setHSL(p?(this.time*2+e*.3)%1:.5+.08*Math.sin(this.time*.6+e),p?1:.85,.62);let h=this.sparkles.material;if(this.sparkles.visible=this.celebrate>0,this.celebrate>0){this.celebrate=Math.max(0,this.celebrate-t/2.4),h.opacity=Math.min(1,this.celebrate*2);let e=this.sparkles.geometry.getAttribute(`position`);for(let n=0;n<e.count;n++)this.sparkleVel[n*3+1]-=2.2*t,e.setXYZ(n,e.getX(n)+this.sparkleVel[n*3]*t,Math.max(.002,e.getY(n)+this.sparkleVel[n*3+1]*t),e.getZ(n)+this.sparkleVel[n*3+2]*t);e.needsUpdate=!0}else h.opacity=0;let g=this.spec.tako?.plate;this.rig.follow=this.watchPlate&&g?i_.set(g.x,g.y,g.z):this.zoomOnDrop?this.spec.bridge?i_.set(i.x,i.y-.2,i.z):i_.set(e.ring.x,e.ring.y,e.ring.z):null,this.rig.update(t);let _=this.camera.position,v=_.y>Z.wallH-.02&&Math.abs(_.x)<.6&&Math.abs(_.z)<.6;for(let e of this.roof)e.visible=!v;n||(_.x+=Math.sin(this.time*.7)*.0015,_.y+=Math.sin(this.time*1.1)*.001),this.renderer.render(this.scene,this.camera)}aimMark=null;setAim(e){if(this.aimMark&&=(this.aimMark.removeFromParent(),this.aimMark.traverse(e=>{e.geometry?.dispose()}),null),!e||!this.spec.bridge||this.disposed)return;let t=this.spec.bridge,n=new Qa({color:16769357,toneMapped:!1,transparent:!0,opacity:.9,depthWrite:!1}),r=new Ri,i=this.spec.crane.home.y-.02,a=t.barY+t.barRadius+.004,o=new q(new mc(.022,.0028,6,28),n);o.rotation.x=Math.PI/2,o.position.y=a;let s=new q(new J(.005,.005,.002,12),n);s.position.y=a;let c=new q(new J(.0012,.0012,i-a,6),n);c.position.y=(i+a)/2,r.add(o,s,c),r.position.set(e.x,0,e.z),r.renderOrder=8,this.scene.add(r),this.aimMark=r}studio=null;shotKind=null;preshoot(){let e=this.shotKind;e&&setTimeout(()=>{!this.disposed&&this.warm&&this.prizeKindId===e.id&&this.artUrl(e)},600)}artUrl(e){return this.disposed?th.saved(e)??dt(e,200,280).toDataURL(`image/png`):(this.studio??=new th(this.renderer,this.scene.environment,()=>this.renderer.render(this.scene,this.camera),zg),this.studio.url(e)??dt(e,200,280).toDataURL(`image/png`))}artCached(e){return th.saved(e)}artUrlSized(e,t,n){return this.artUrl(e),this.studio.url(e,t,n)}},u_=new URL(`gen-jean-CdbShlT-.webp`,import.meta.url).href,d_=new URL(`gen-leo-Csl5nv0b.webp`,import.meta.url).href,f_=new URL(`gen-luca-S2EjbQ3V.webp`,import.meta.url).href,p_=new URL(`kou-gen-CfffIAgs.webp`,import.meta.url).href,m_=new URL(`kou-kin-Dkyv75VX.webp`,import.meta.url).href,h_=new URL(`kou-taiga-CzaOHZuj.webp`,import.meta.url).href,g_=new URL(`kou-tetsu-zQCTqeML.webp`,import.meta.url).href,__=new URL(`sen-gou-CRJwmLrm.webp`,import.meta.url).href,v_=new URL(`sen-jin-Cr2nAO0H.webp`,import.meta.url).href,y_=new URL(`sen-kai-BwZGKskd.webp`,import.meta.url).href,b_={"gen-jean":[.56,.17,.18],"gen-leo":[.51,.17,.2],"gen-luca":[.49,.22,.2],"sen-kai":[.5,.21,.2],"sen-jin":[.55,.18,.2],"sen-gou":[.51,.17,.2],"kou-tetsu":[.5,.18,.23],"kou-taiga":[.48,.24,.27],"kou-gen":[.52,.16,.19],"kou-kin":[.51,.16,.24]},x_=Object.assign({"./prize-portraits/gen-jean.webp":u_,"./prize-portraits/gen-leo.webp":d_,"./prize-portraits/gen-luca.webp":f_,"./prize-portraits/kou-gen.webp":p_,"./prize-portraits/kou-kin.webp":m_,"./prize-portraits/kou-taiga.webp":h_,"./prize-portraits/kou-tetsu.webp":g_,"./prize-portraits/sen-gou.webp":__,"./prize-portraits/sen-jin.webp":v_,"./prize-portraits/sen-kai.webp":y_});async function S_(){await Promise.all(Object.entries(b_).map(async([e,t])=>{let n=Je.find(t=>t.id===e)?.hero,r=x_[`./prize-portraits/${e}.webp`];try{if(!n||!r)throw Error(`景品データが見つかりません`);let e=new Image;e.src=r,await e.decode(),Ep(n,{image:e,face:t})}catch(t){console.warn(`景品のイラストを読み込めませんでした: ${e}`,t)}}))}function C_(e,t,n,r=2500){let i=e.textContent,a=0,o=()=>{a=0,e.classList.remove(`armed`),e.textContent=i};e.addEventListener(`click`,()=>{a?(clearTimeout(a),o(),n()):(e.classList.add(`armed`),e.textContent=t,a=window.setTimeout(o,r))})}function w_(e){let t=t=>{if(t.target!==e)return!1;let n=e.getBoundingClientRect();return t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom},n=!1;e.addEventListener(`pointerdown`,e=>{n=t(e)}),e.addEventListener(`click`,r=>{n&&t(r)&&e.close(),n=!1})}var T_=`actual`,E_=[{id:T_,label:`実物`,w:0,h:0,d:0,mass:0},{id:`mini`,label:`ミニ`,w:.08,h:.14,d:.06,mass:.09},{id:`standard`,label:`標準`,w:.12,h:.18,d:.09,mass:.22},{id:`tall`,label:`縦長`,w:.125,h:.25,d:.095,mass:.27},{id:`wide`,label:`中箱`,w:.15,h:.2,d:.1,mass:.29},{id:`heavy`,label:`重い箱`,w:.165,h:.22,d:.105,mass:.49},{id:`big`,label:`大箱`,w:.16,h:.25,d:.12,mass:.39}],D_=[{id:T_,label:`実物`,x:0,y:0,z:0},{id:`center`,label:`真ん中`,x:0,y:0,z:0},{id:`bottom`,label:`下寄り`,x:0,y:-.25,z:-.13},{id:`top`,label:`上寄り`,x:0,y:.25,z:0},{id:`side`,label:`片側寄り`,x:.3,y:0,z:0},{id:`corner`,label:`下の角`,x:.25,y:-.3,z:0}],O_={size:T_,com:T_},k_=e=>E_.find(t=>t.id===e)??E_[0],A_=e=>D_.find(t=>t.id===e)??D_[0];function j_(e){let t=e.type===`box`?e.half:{x:.06,y:.09,z:.045};return{id:T_,label:`実物`,w:t.x*2,h:t.y*2,d:t.z*2,mass:e.mass}}function M_(e,t){let n=e.size===`actual`?j_(t):k_(e.size),r={x:n.w/2,y:n.h/2,z:n.d/2},i;if(e.com===`actual`){let e=t.type===`box`?t.half:r,n=t.type===`box`&&t.com||{x:0,y:0,z:0};i={x:n.x/e.x,y:n.y/e.y,z:n.z/e.z}}else i=A_(e.com);let a=t.type===`box`?t.friction??.25:.25;return{type:`box`,half:r,mass:n.mass,friction:a,com:{x:i.x*r.x,y:i.y*r.y,z:i.z*r.z}}}function N_(e){let t=e=>String(Math.round(e*1e3)/10);return`${t(e.w)}×${t(e.h)}×${t(e.d)}cm・${Math.round(e.mass*1e3)}g`}var P_=1,$=e=>document.getElementById(e),F_=e=>e.toLocaleString(`ja-JP`),I_=`crane-life.v1`,L_={get:()=>{try{return localStorage.getItem(I_)}catch{return null}},set:e=>{try{localStorage.setItem(I_,e)}catch{}}};async function R_(){let e=new F;await Promise.all([e.ready,S_()]);let t=new _t(L_),n=new Tt,r=`crane-life.machine`,i=`crane-life.prize`,a=e=>{try{return localStorage.getItem(e)}catch{return null}},o=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},s=(()=>{let e=a(i);if(!e)return{};try{let t=JSON.parse(e);if(t&&typeof t==`object`)return t}catch{}return{standard:e}})(),c=e=>{try{localStorage.removeItem(e)}catch{}},l=e=>{s[e]=Ze(Math.random(),Xe[e]).id,o(i,JSON.stringify(s))},u=`crane-life.pending`,d=null;try{let e=JSON.parse(a(u)??`null`),t=Je.find(t=>t.id===e?.prize);t&&e?.machine&&Xe[e.machine]&&(d=t,l(e.machine))}catch{}c(u);let f=a(r)??`standard`;pe[f]||(f=`standard`);let p=e=>{let t=s[e];if(t&&Xe[e].includes(t))return Ye(t);let n=Ze(Math.random(),Xe[e]);return s[e]=n.id,o(i,JSON.stringify(s)),n};for(let e of Object.keys(pe))Xe[e]&&p(e);let m=`crane-life.practice`,h={on:!1,...O_,moves:0};try{let e=JSON.parse(a(m)??`null`);e&&(h.on=e.on===!0,h.size=k_(e.size??``).id,h.com=A_(e.com??``).id)}catch{}let g=()=>o(m,JSON.stringify({on:h.on,size:h.size,com:h.com})),_=()=>h.on&&f===`bridge`,v=()=>{let e=p(`bridge`);return{...e,id:`practice-${e.id}-${h.size}-${h.com}`,name:`${e.name}（練習）`,shape:M_(h,e.shape),practice:!0}},y=e=>h.on&&e===`bridge`?v():p(e),b=y(f);e.setMachine(f,b.shape);let x=new l_($(`stage`),e.spec);x.setPrize(b);let S=$(`loading`),C=e=>e.warmUp().then(()=>{e===x&&S.classList.add(`done`)});C(x);let w={machine:e,economy:t,view:x,sound:n,Sound:Tt};Object.assign(window,{__crane:w});let T=!1,E=!1,D=!1,O=!1,k=0,A=0,j={x:!1,z:!1},M=t.state.money;function N(){Ie();let n=t.state,r=$(`money`).parentElement;n.money!==M&&(r.classList.remove(`bump`,`drop`),r.offsetWidth,r.classList.add(n.money>M?`bump`:`drop`),M=n.money),$(`money`).textContent=F_(n.money),r.classList.toggle(`long`,n.money>=1e5);let i=_();$(`credits`).textContent=i?`∞`:String(n.credits);let a=$(`practice-open`);a.hidden=f!==`bridge`,a.textContent=i?`練習中 ${h.moves}手`:`練習`,a.classList.toggle(`on`,i);let o=$(`demo`);o.hidden=!i,o.disabled=E||e.phase!==`ready`||e.won||e.empty,o.classList.toggle(`busy`,E&&e.phase===`ready`),o.textContent=E&&e.phase===`ready`?`考え中…`:`お手本`,x.setCredits(n.credits),$(`shelf-count`).textContent=String(n.shelf.length);let s=e.phase,c=e.won,l=$(`btn-x`),u=$(`btn-z`);l.disabled=E||!(s===`right`||s===`ready`&&(n.credits>0||i)&&!c&&!e.empty),u.disabled=E||s!==`aim`&&s!==`back`,l.classList.toggle(`ready`,s===`ready`&&!l.disabled),u.classList.toggle(`ready`,s===`aim`),l.classList.toggle(`held`,s===`right`),u.classList.toggle(`held`,s===`back`),$(`coin-100`).disabled=i||n.money<100,$(`coin-500`).disabled=i||n.money<pt.price;let d=!i&&n.credits===0&&s===`ready`&&!c&&!e.empty;$(`coin-100`).classList.toggle(`glow`,d&&n.money>=100),$(`coin-500`).classList.toggle(`glow`,d&&n.money>=pt.price),$(`staff`).disabled=E||s!==`ready`||c,$(`staff`).classList.toggle(`glow`,e.empty&&s===`ready`),x.trayActive=e.prizeInTray}let ee=0;function P(e,t=``,n=2.4){let r=$(`toast`),i=document.querySelector(`dialog[open]`)??$(`stage`);r.parentElement!==i&&i.append(r),r.textContent=e,r.className=`toast show ${t}`,clearTimeout(ee),ee=window.setTimeout(()=>r.classList.remove(`show`),n*1e3)}function te(r,i=performance.now()){if(n.unlock(),!(j[r]||E)){if(r===`x`){if(e.phase!==`ready`||e.won)return;if(e.empty){P(`「店員さんを呼ぶ」で次の景品を置いてもらおう`);return}if(D=!1,_())h.moves++;else{if(t.state.credits<1){P(`まずコインを入れよう`);return}if(!t.startPlay())return}T=!0}else if(e.phase!==`aim`)return;e.press(r,i),j[r]=!0,n.button(!0),N()}}function ne(r,i=performance.now()){j[r]&&(j[r]=!1,e.release(r,i),n.button(!1),n.clunk(),N(),r===`x`&&e.phase===`aim`&&t.state.plays<=2&&P(`オレンジ（↑）を押している間、奥へ。離すと下がる`,``,4))}e.onRejected=e=>{j[e]=!1,e===`x`&&T&&(_()?h.moves=Math.max(0,h.moves-1):t.refundPlay(),T=!1),N()};for(let[e,t]of[[`btn-x`,`x`],[`btn-z`,`z`]]){let n=$(e);n.addEventListener(`pointerdown`,e=>{e.preventDefault();try{n.setPointerCapture(e.pointerId)}catch{}n.classList.add(`pressed`),te(t,e.timeStamp)});for(let e of[`pointerup`,`pointercancel`,`lostpointercapture`])n.addEventListener(e,e=>{n.classList.remove(`pressed`),ne(t,e.timeStamp)});n.addEventListener(`contextmenu`,e=>e.preventDefault())}let re={ArrowRight:`x`,ArrowUp:`z`},ie={x:$(`btn-x`),z:$(`btn-z`)};addEventListener(`keydown`,e=>{let t=re[e.key];t&&!document.querySelector(`dialog[open]`)&&(e.preventDefault(),e.repeat||(ie[t].classList.add(`pressed`),te(t,e.timeStamp)))}),addEventListener(`keyup`,e=>{let t=re[e.key];t&&(ie[t].classList.remove(`pressed`),ne(t,e.timeStamp))});let ae=()=>{ne(`x`),ne(`z`),ie.x.classList.remove(`pressed`),ie.z.classList.remove(`pressed`)};addEventListener(`blur`,ae),addEventListener(`pagehide`,ae);function oe(r){n.unlock(),t.insert(r)?(n.coin(),N(),t.state.plays<2&&e.phase===`ready`&&!e.empty&&!e.won&&P(`緑（→）を押している間、右へ`,``,4)):P(`お金が足りない`)}$(`coin-100`).addEventListener(`click`,()=>oe(!1)),$(`coin-500`).addEventListener(`click`,()=>oe(!0)),$(`staff`).addEventListener(`click`,()=>{if(n.unlock(),!(e.phase!==`ready`||e.won)){if(e.empty){let t=p(f);if(f===`bridge`){Ve(`bridge`,`店員さん「${t.name}を置きますね」`);return}e.restock(t.shape),b=t,x.setPrize(b),P(`店員さん「${b.name}を置きますね」`)}else e.restock(),h.moves=0,P(`店員さん「元の位置に戻しますね」`);N()}});function se(){if(n.unlock(),!e.prizeInTray||_())return!1;n.flap(),x.openFlap(!0);let r=t.isNew(b.id),i=t.addPrize(b.id),a=b;return c(u),l(f),e.takePrize(),O=!1,setTimeout(()=>{x.openFlap(!1),ce(a,i.uid,r)},380),N(),!0}x.onChuteTap=se,addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&e.prizeInTray&&!document.querySelector(`dialog[open]`)&&(t.preventDefault(),se())});function ce(e,r,i){let a=e.rarity===`secret`,{got:o,total:s}=t.seriesProgress(e.series),c=t.countOf(e.id),l=$(`reveal-note`);l.replaceChildren();let u=document.createElement(`b`);i&&o===s?(u.textContent=`コンプリート！`,u.className=`complete`):i?u.textContent=`はじめて！`:c>1&&(u.textContent=`${c}個め`,u.className=`more`),u.textContent&&l.append(u),l.append(`${e.series} ${o}/${s}`),$(`reveal-kicker`).textContent=a?`シークレット！！`:`ゲット！`,$(`reveal-kicker`).classList.toggle(`secret`,a),$(`reveal-art`).src=x.artUrl(e),$(`reveal-art`).setAttribute(`alt`,e.name),$(`reveal-name`).textContent=e.name,$(`reveal-price`).textContent=`¥${F_(t.priceOf(r))}`;let d=$(`reveal`);d.dataset.uid=String(r),d.showModal(),n.fanfare(a)}$(`reveal-keep`).addEventListener(`click`,()=>$(`reveal`).close());let le=0;$(`reveal`).addEventListener(`close`,()=>{x.rig.unfocus(),R(x.rig.preset),N(),xe();let t=le?`¥${F_(le)}で売れた`:``;le=0,e.empty?P(t?`${t}。次は「店員さんを呼ぶ」`:`「店員さんを呼ぶ」で次の景品を置いてもらおう`,``,3.2):t&&P(t)}),$(`reveal-sell`).addEventListener(`click`,()=>{let e=$(`reveal`),r=t.sell(Number(e.dataset.uid));r&&(n.sell(r),le=r),e.close(),N()});let ue=[],de=0;function fe(e){let t=document.createElement(`div`);t.className=`photo`;let n=n=>{let r=document.createElement(`img`);r.alt=e.name,r.src=n,t.append(r)},r=x.artCached(e);return r?(n(r),t):(ue.push(()=>{t.isConnected&&n(x.artUrl(e))}),de||=window.setInterval(()=>{let e=ue.shift();e?e():(clearInterval(de),de=0)},70),t)}let me=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),r.textContent=n,r},he=`shelf`;function ge(){ue.length=0;let e=t.bookProgress();$(`tab-shelf-count`).textContent=String(t.state.shelf.length),$(`tab-book-count`).textContent=`${e.got}/${e.total}`,$(`tab-shelf`).setAttribute(`aria-pressed`,String(he===`shelf`)),$(`tab-book`).setAttribute(`aria-pressed`,String(he===`book`)),$(`shelf-items`).hidden=he!==`shelf`,$(`shelf-note`).hidden=he!==`shelf`,$(`book`).hidden=he!==`book`,he===`shelf`?_e():ve()}function _e(){let e=ht(),r=$(`shelf-items`),i=r.scrollTop;r.replaceChildren();let a=t.groups();if(!a.length)r.append(me(`p`,`shelf-empty`,`まだ景品がありません`));else{for(let i of a){let a=Ye(i.kind),o=Qe(e,a.id),s=document.createElement(`div`);s.className=`shelf-item`,s.append(fe(a)),i.uids.length>1&&s.append(me(`span`,`count`,`×${i.uids.length}`)),s.append(me(`p`,`name`,a.name),me(`p`,`price ${o>1.08?`up`:o<.92?`down`:``}`,`¥${F_($e(a,e))}`));let c=me(`button`,``,`売る`);c.type=`button`,C_(c,`もう一度`,()=>{let e=t.sell(i.uids[0]);e&&(n.sell(e),P(`¥${F_(e)}で売れた`)),ge(),N()}),s.append(c),r.append(s)}r.scrollTop=i}}function ve(){let e=$(`book`),n=e.scrollTop;e.replaceChildren();for(let n of Ne){let{got:r,total:i}=t.seriesProgress(n);if(i===0)continue;let a=me(`h3`,``,n);a.append(me(`span`,r===i?`complete`:``,`${r}/${i}`));let o=document.createElement(`div`);o.className=`book-grid`;for(let e of Je.filter(e=>e.series===n)){if(e.retired&&t.isNew(e.id))continue;let n=e.rarity===`secret`,r=document.createElement(`div`);t.isNew(e.id)?(r.className=`book-cell unknown${n?` secret`:``}`,r.append(me(`div`,`photo`,`？`),me(`p`,``,n?`シークレット`:`？？？`))):(r.className=`book-cell`,r.append(fe(e),me(`p`,``,e.name))),o.append(r)}e.append(a,o)}e.scrollTop=n}let ye=()=>{ae(),he=`shelf`,ge(),$(`shelf`).showModal()};$(`shelf-open`).addEventListener(`click`,()=>{n.unlock(),ye()}),$(`tab-shelf`).addEventListener(`click`,()=>{he=`shelf`,ge()}),$(`tab-book`).addEventListener(`click`,()=>{he=`book`,ge()}),$(`shelf-close`).addEventListener(`click`,()=>$(`shelf`).close()),$(`shelf`).addEventListener(`close`,()=>{ue.length=0,xe()});let be=!1;function xe(n=!1){if(!t.broke){be=!1,I();return}if(e.won||e.phase!==`ready`||_()&&!n||document.querySelector(`dialog[open]`))return;let r=$(`broke`);if(t.state.shelf.length){if(be&&!n){I();return}be=!0,$(`broke-title`).textContent=`お金が足りない`,$(`broke-text`).textContent=`棚の景品を売れば、また遊べる。`,$(`broke-ok`).textContent=`棚を見る`,r.dataset.action=`shelf`}else t.canAllowance()?($(`broke-title`).textContent=`お小遣いの日`,$(`broke-text`).textContent=`今日のお小遣い ¥${F_(mt)} をもらった。次は ${we(Ce())}。`,$(`broke-ok`).textContent=`OK`,r.dataset.action=`allowance`):($(`broke-title`).textContent=`今日はここまで`,$(`broke-ok`).textContent=`OK`,r.dataset.action=`wait`);r.showModal(),I()}function Se(e){let r=$(`broke`),i=r.dataset.action;r.dataset.action=``,i===`allowance`&&t.takeAllowance()&&(n.sell(1e3),N()),e&&r.open&&r.close(),i===`shelf`&&ye(),I()}$(`broke-ok`).addEventListener(`click`,()=>Se(!0));let Ce=(e=new Date)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+1);function we(e,t=new Date){let n=Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime())/864e5);return`${n===0?`今日`:n===1?`明日`:`${n}日後`}（${e.getMonth()+1}/${e.getDate()}）${e.getHours()}:${String(e.getMinutes()).padStart(2,`0`)}`}function Te(e){let t=Math.max(0,Math.ceil(e/1e3));return`${Math.floor(t/3600)}:${String(Math.floor(t/60)%60).padStart(2,`0`)}:${String(t%60).padStart(2,`0`)}`}let Ee=!1;function I(){let e=t.broke&&t.state.shelf.length===0&&!t.canAllowance(),n=$(`allowance-wait`),r=$(`broke`);if(t.broke&&t.state.shelf.length>0){n.textContent=`お金が足りない：棚の景品を売ると遊べる`,n.hidden=r.open||_(),Ee=!1;return}if(!e){n.hidden=!0,Ee&&t.canAllowance()&&(Ee=!1,r.open&&r.close(),xe()),Ee=!1;return}Ee=!0;let i=t.nextAllowanceAt(),a=i.getTime()-Date.now();n.textContent=`次のお小遣い ${we(i)}（あと ${Te(a)}）`,n.hidden=r.open,r.open&&r.dataset.action===`wait`&&($(`broke-text`).textContent=`次のお小遣い ¥${F_(mt)} は ${we(i)}。あと ${Te(a)}。`)}setInterval(I,1e3),$(`allowance-wait`).addEventListener(`click`,()=>{n.unlock(),t.state.shelf.length?ye():xe(!0)}),$(`broke`).addEventListener(`close`,()=>Se(!1));let De=`crane-life.view`,L=$(`views`);function R(e){for(let t of L.querySelectorAll(`button`))t.setAttribute(`aria-pressed`,String(t.dataset.view===e))}function Oe(e){x.rig.choose(e),R(e);try{localStorage.setItem(De,e)}catch{}}for(let[e,t]of Object.entries(rh)){let r=document.createElement(`button`);r.type=`button`,r.dataset.view=e,r.textContent=t.label,r.addEventListener(`click`,()=>{n.unlock(),Oe(e)}),L.append(r)}let ke=null;try{ke=localStorage.getItem(De)}catch{}Oe(ke&&ke in rh?ke:`front`);let Ae=()=>$(`drag-hint`).classList.add(`hidden`),je=()=>{x.renderer.domElement.addEventListener(`pointerdown`,Ae,{once:!0}),x.renderer.domElement.addEventListener(`wheel`,Ae,{once:!0})};je(),setTimeout(Ae,6e3),$(`help-open`).addEventListener(`click`,()=>{n.unlock(),ae(),$(`help`).showModal()}),$(`help-close`).addEventListener(`click`,()=>$(`help`).close());for(let e of[`shelf`,`sound`,`help`])w_($(e));let Me={standard:`スタンダードの台`,slant:`ナナメフックの台`,triple:`トリプルフックの台`,bridge:`橋渡し台`,takoyaki:`たこ焼き台`,plush2:`ぬいぐるみの台`,plush3:`3本爪の台`},Pe={standard:`スタンダード`,slant:`ナナメ`,triple:`トリプル`,bridge:`橋渡し`,takoyaki:`たこ焼き`,plush2:`ぬいぐるみ`,plush3:`3本爪`},Fe=$(`machines`);for(let e of Object.keys(pe)){let t=document.createElement(`button`);t.type=`button`,t.dataset.machine=e,t.append(me(`span`,``,Pe[e]??e),document.createElement(`small`)),t.addEventListener(`click`,()=>{n.unlock(),Re(e)}),Fe.append(t)}function Ie(){for(let t of document.querySelectorAll(`#machines button`)){let n=t.dataset.machine;t.setAttribute(`aria-pressed`,String(n===f)),n===f&&t.dataset.shown!==`1`?(t.dataset.shown=`1`,t.scrollIntoView({block:`nearest`,inline:`nearest`})):n!==f&&(t.dataset.shown=``);let r=t.querySelector(`small`),i=Je.find(e=>e.id===s[n]);r&&(r.textContent=n===`bridge`&&h.on?`練習中`:n===f&&e.empty?`からっぽ`:i?.name??``),t.disabled=E||e.phase!==`ready`||e.won||j.x||j.z}}let Le=0;function Re(t){t===f||e.phase!==`ready`||e.won||(Be&&performance.now()-Le>4e3?(Le=performance.now(),P(`箱は元の位置に戻る。移るならもう一度`,``,3.5)):Ve(t,`${Me[t]??t}に移った`))}async function ze(){if(n.unlock(),E||!_()||e.phase!==`ready`||e.won||e.empty)return;E=!0,N(),P(`お手本：考え中…`,``,30);let t=await e.demo(5e3);E&&(t.ok?(h.moves++,T=!0,D=!1,x.setAim({x:t.x,z:t.z}),P(t.win?`お手本：ここを狙うと落ちる（${t.tried}通りから）`:`お手本：${t.tried}通りのうち、一番進む手`,t.win?`win`:``,5),N()):(E=!1,P(`お手本を出せなかった`),N()))}$(`demo`).addEventListener(`click`,()=>void ze());let Be=!1;function Ve(n,i){f=n,o(r,n),b=y(n),h.moves=0,Be=!1,Le=0,E=!1,e.setMachine(n,b.shape);let a=x.rig.preset;x.dispose(),$(`loading-text`).textContent=`台を準備中…`,S.classList.remove(`done`),x=new l_($(`stage`),e.spec),C(x),x.setPrize(b),x.onChuteTap=se,x.setCredits(t.state.credits),Oe(a),je(),w.view=x,Ge(),O=!1,A=0,P(i),N()}let He=[];function Ue(){$(`practice-on`).checked=h.on;for(let e of He)e.setAttribute(`aria-pressed`,String(e.dataset.value===(e.dataset.kind===`size`?h.size:h.com)));let e=p(`bridge`),t=He.find(e=>e.dataset.kind===`size`&&e.dataset.value===`actual`)?.querySelector(`small`);t&&(t.textContent=`${e.name}・${N_(j_(e.shape))}`);let n=He.find(e=>e.dataset.kind===`com`&&e.dataset.value===`actual`)?.querySelector(`small`);n&&(n.textContent=e.name)}function We(t){if(E||e.phase!==`ready`||e.won){P(`クレーンが止まってから変えよう`),Ue();return}if(Object.assign(h,t),g(),Ue(),f!==`bridge`)return;let n=h.size===`actual`?`実物の大きさ`:`${k_(h.size).label}の箱`,r=h.com===`actual`?`実物の重心`:`重心は${A_(h.com).label}`;Ve(`bridge`,h.on?`練習：${p(`bridge`).name}・${n}・${r}`:`練習をやめた`)}for(let[e,t,n]of[[`practice-sizes`,`size`,E_],[`practice-coms`,`com`,D_]])for(let r of n){let n=document.createElement(`button`);n.type=`button`,n.dataset.kind=t,n.dataset.value=r.id,n.append(me(`span`,``,r.label)),t===`size`&&n.append(me(`small`,``,r.id===`actual`?``:N_(k_(r.id)))),t===`com`&&r.id===`actual`&&n.append(me(`small`,``,``)),n.addEventListener(`click`,()=>We(t===`size`?{size:r.id,on:!0}:{com:r.id,on:!0})),$(e).append(n),He.push(n)}$(`practice-on`).addEventListener(`change`,()=>We({on:$(`practice-on`).checked})),$(`practice-open`).addEventListener(`click`,()=>{n.unlock(),ae(),Ue(),$(`practice`).showModal()}),$(`practice-close`).addEventListener(`click`,()=>$(`practice`).close()),w_($(`practice`));let Ge=()=>{},Ke=`crane-life.sound`,qe=[...document.querySelectorAll(`.levels input`)],et=()=>{try{localStorage.setItem(Ke,JSON.stringify({on:n.enabled,levels:n.levels}))}catch{}},tt=()=>{$(`sound-on`).checked=n.enabled;for(let e of qe)e.value=String(Math.round(n.levels[e.dataset.bus]/P_*100));$(`sound-open`).textContent=n.enabled?`音`:`音なし`};try{let e=JSON.parse(localStorage.getItem(Ke)??`null`);if(e?.levels)for(let[t,r]of Object.entries(e.levels))t in wt&&Number.isFinite(r)&&n.setLevel(t,r);e?.on===!1&&n.setEnabled(!1)}catch{}tt();for(let e of qe)e.addEventListener(`input`,()=>{n.unlock(),n.setLevel(e.dataset.bus,Number(e.value)/100*P_),et()});$(`sound-on`).addEventListener(`change`,()=>{n.unlock(),n.setEnabled($(`sound-on`).checked),tt(),et()}),$(`sound-default`).addEventListener(`click`,()=>{for(let e of Object.keys(wt))n.setLevel(e,wt[e]);tt(),et()}),$(`sound-open`).addEventListener(`click`,()=>{n.unlock(),ae(),tt(),$(`sound`).showModal()}),$(`sound-close`).addEventListener(`click`,()=>$(`sound`).close());function nt(){T=!1,E&&(E=!1,x.setAim(null));let t=e.state.prizeTravel;if(!(e.won||D)){if(e.spec.tako){let e=Math.round(t);e>0?(P(e>1?`ハズレ…（玉${e}個）`:`ハズレ…`,`near`),n.miss(!0)):(P(`玉をすくえなかった`),n.miss(!1))}else if(e.spec.plush){let r=t*100;r>20?(P(`惜しい！ 運ぶ途中で落ちた`,`near`),n.miss(!0)):r>2?(P(r>6?`惜しい！ ${r.toFixed(0)}cm持ち上がった`:`少し持ち上がった（${r.toFixed(0)}cm）`,`near`),n.miss(!0)):e.state.touched?(P(`つかめなかった`,`near`),n.miss(!0)):(P(`ぬいぐるみに届かなかった`),n.miss(!1))}else if(e.spec.bridge){let r=_()?`${h.moves}手目：`:``;t>.005?(P(`${r}箱が${(t*100).toFixed(1)}cm動いた`,`near`),n.miss(!0),_()||(Be=!0)):(P(r+(e.state.touched?`箱は動かなかった`:`箱に届かなかった`)),n.miss(e.state.touched))}else e.state.touched?(P(t>.008?`惜しい！ 景品が${(t*100).toFixed(1)}cm動いた`:`惜しい！ フックに触れた`,`near`),n.miss(!0)):t>.005?(P(`景品が${(t*100).toFixed(1)}cm動いた`,`near`),n.miss(!0)):(P(`フックに届かなかった`),n.miss(!1))}k=.9}let z=performance.now(),rt=0,it=0,at=!1;addEventListener(`pointerdown`,()=>{at=!0,it=performance.now()},!0),addEventListener(`pointerup`,()=>{at=!1,it=performance.now()},!0),addEventListener(`pointercancel`,()=>{at=!1},!0),addEventListener(`wheel`,()=>{it=performance.now()},!0),addEventListener(`keydown`,()=>{it=performance.now()},!0);let ot=0,st=document.querySelectorAll(`dialog[open]`).length;new MutationObserver(()=>{st=document.querySelectorAll(`dialog[open]`).length,rt=0}).observe(document.body,{attributes:!0,attributeFilter:[`open`],subtree:!0});let ct=-1e9;function lt(t){requestAnimationFrame(lt);let r=Math.min(.1,(t-z)/1e3);z=t,k>0&&(k-=r,k<=0&&e.phase===`result`&&(e.rearm(),N(),xe())),e.won&&!e.prizeInTray?(A+=r,A>6&&(e.nudgeToTray(),P(`店員さん「取り出し口に出しておきますね」`,``,3))):A=0,e.prizeInTray&&!O&&t-ct>2600&&(_()?(P(`練習：${h.moves}手で取れた！`,`win`,3.5),n.fanfare(!1),e.takePrize(),e.restock(b.shape),h.moves=0):(O=!0,x.rig.focus(`tray`),R(`tray`),P(`取り出し口をタップ！`,`win`,4)),N()),e.state.boardResets!==ot&&(e.state.boardResets>ot&&P(e.spec.plush?`店員さん「置き直しますね」`:e.spec.tako?`店員さん「玉を戻しますね」`:e.spec.bridge?`店員さん「真ん中に戻しますね」`:`店員さん「板を元に戻しますね」`,``,2.6),ot=e.state.boardResets),n.motorUpdate(e.state.motion),n.chain(e.state.ringSpeed),x.zoomOnDrop=!e.won&&!x.rig.focused&&o_(e.phase),x.watchPlate=!!e.spec.tako&&T&&!e.won&&!x.rig.focused&&e.state.touched&&(e.phase===`home`||e.phase===`result`);let i=e.state.sleeping&&!x.animating&&!at&&t-it>300,a=st>0,o=a?250:i?125:0;x.warm&&(!o||t-rt>=o)&&(x.render(e.snapshot(),a||i?(t-rt)/1e3:r,i||a),rt=t)}let ut=``;e.onUpdate=({phases:t,impacts:r,dropped:i})=>{E&&e.phase!==ut&&(ut=e.phase,N());for(let e of r)n.impact(e);for(let e of t)dt(e);i&&(D=!0,n.drop(),x.celebrateNow(),ct=performance.now(),_()||o(u,JSON.stringify({machine:f,prize:b.id})),P(e.spec.tako?`当たり！！`:`落ちた！`,`win`,2.6),N())};{let n=document.createElement(`div`);n.className=`devbar`;let r=document.createElement(`button`);r.type=`button`,r.textContent=`開発用 ＋¥3,000`,r.addEventListener(`click`,()=>{t.devGrant(3e3),document.querySelector(`dialog[open]`)?.close(),N(),P(`開発用：¥3,000 を足した`)});let i=document.createElement(`button`);i.type=`button`,i.textContent=`最初から`,C_(i,`もう一度で消す`,()=>{try{for(let e of Object.keys(localStorage))e.startsWith(`crane-life`)&&localStorage.removeItem(e)}catch{}location.reload()});let a=document.createElement(`output`);a.textContent=`-- fps`;let o=0,s=0,c=performance.now(),l=c,u=0,d=0,f=()=>{let e=x.render.bind(x);x.render=(t,n,r)=>{let i=performance.now();e(t,n,r),u+=performance.now()-i,d++}};f(),Ge=f;let p=t=>{if(o++,s=Math.max(s,t-l),l=t,t-c>=1e3){let n=1e3/(t-c),r=e.stats,i=r?`物${Math.round(r.physMs/r.seconds/10)}%(本体${Math.round(r.worldMs/r.seconds/10)}%) 刻${Math.round(r.steps/r.seconds)}`:`物--`;a.textContent=`${Math.round(o*n)}fps ${Math.round(s)}ms ×${x.resolution.toFixed(2)} 描${(u/Math.max(1,d)).toFixed(1)}×${Math.round(d*n)} ${e.state.sleeping?`寝`:i}`,o=0,s=0,c=t,u=0,d=0}requestAnimationFrame(p)};requestAnimationFrame(p),n.append(a,r,i),$(`stage`).append(n),$(`stage`).classList.add(`has-devbar`);let m=document.createElement(`button`);m.type=`button`,m.className=`secondary`,m.textContent=`開発用 ＋¥3,000`,m.addEventListener(`click`,()=>{$(`broke`).dataset.action=``,r.click()}),$(`broke`).querySelector(`.sheet-actions`).append(m);let g=()=>_()?(h.moves++,!0):t.startPlay();Object.assign(window.__crane,{async shot(t,n,r){return e.phase!==`ready`||e.won||!g()?{won:!1,tray:!1}:(T=!0,N(),e.shot(t,n,r))},async aimShot(t,n){return e.phase!==`ready`||e.won||!g()?{won:!1,tray:!1}:(T=!0,N(),e.shot(0,.2,0,{x:t,z:n}))}})}function dt(e){e===`settle`&&n.clunk(!0),(e===`home`||e===`result`)&&n.clunk(),e===`result`&&T&&nt(),N()}let ft=()=>{x.resize(),rt=0};addEventListener(`resize`,ft),new ResizeObserver(ft).observe($(`stage`)),document.addEventListener(`visibilitychange`,()=>{document.hidden?(ae(),e.pause()):(e.resume(),z=performance.now(),rt=0),n.pause(document.hidden)});for(let e of[`pointerup`,`click`])addEventListener(e,()=>n.unlock(),!0);if($(`version`).textContent=`版 2026-11-17 21:09 (16b8895)`,e.onError=()=>{S.classList.remove(`done`),S.classList.add(`failed`),$(`loading-text`).textContent=`台が止まりました。ページを開き直してください。`},N(),d){let e=d,n=t.isNew(e.id),r=t.addPrize(e.id);x.warmUp().then(()=>{P(`前回の景品を受け取った`,`win`,3),ce(e,r.uid,n),N()})}else t.state.credits===0&&!_()&&!t.broke&&x.warmUp().then(()=>P(`まずコインを入れよう（¥100）`,``,3.5));xe(),requestAnimationFrame(lt)}R_().catch(e=>{console.error(e);let t=document.getElementById(`loading`),n=document.getElementById(`loading-text`);t?.classList.remove(`done`),t?.classList.add(`failed`),n&&(n.textContent=`読み込めませんでした。ページを開き直してください。`)});