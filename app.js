//baseHP, baseDef, EVs, nature
let statEvents=[document.getElementById("baseHP"),document.getElementById("baseDef"),document.getElementById("EVs"),document.getElementById("nature")];
let stats=[0,0,0,0];
let output=document.getElementById("output");
let changeHandler=(e) => {
    for(let i=0;i<3;i++)
        stats[i]=statEvents[i].value;
    stats[3]=statEvents[3].checked;
    if(stats[2]>504){
        stats[2]=504;
        statEvents[2].value=504;
    }
    else{
        let max=[0,0,0];
        for(let i=0;i<stats[2];i+=4){
            if(HPCalc(stats[0],i)*defCalc(stats[1],stats[2]-i,stats[3])>max[2]&&i<=252&&stats[2]-i<=252){
                max=[i,stats[2]-i,HPCalc(stats[0],i)*defCalc(stats[1],stats[2]-i,stats[3])];
            }
            output.innerText="Optimal EVs: "+ max[0]+" HP, "+max[1]+" Def/SpD";
        }
    }
    
};

let HPCalc=(base,ev) =>{
    let hp=Math.floor((2*base+31+Math.floor(ev/4))/2)+60;
    return hp;
};

let defCalc=(base,ev,nature)=>{
    let def=Math.floor(Math.floor((2*base+31+Math.floor(ev/4))/2+5)*(nature?1.1:1));
    return def;
};

statEvents.forEach((e) => {
    e.addEventListener(e.type == "checkbox" ? "change" : "input", changeHandler);
 });