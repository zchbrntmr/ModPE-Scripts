/*
Version 0.2
/s to set unobtainable blocks at your feet
*/
function procCmd(c){
	var p=c.split(' ');
	var command=p[0];
	switch(command){
		case 'commands': 
			clientMessage('\n /s (setblock) is the only command');
			break;
		case 's':
			if(p[1]=='lava'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),10);
			}else if(p[1]=='statlava'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),11);
			}else if(p[1]=='water'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),8);
			}else if(p[1]=='statwater'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),9);
			}else if(p[1]=='bedrock'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),7);
			}else if(p[1]=='cobweb'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),30);
			}else if(p[1]=='fire'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),51);
			}else if(p[1]=='invisiblebedrock'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),95);
			}else if(p[1]=='glowingobsidian'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),246);
			}else if(p[1]=='ice'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),79);
			}else if(p[1]=='snow'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),78);
			}else if(p[1]=='irondoor'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),71);
			}else if(p[1]=='tallgrass'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),31);
			}else if(p[1]=='update'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),248);
			}else if(p[1]=='ateupd'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),249);
			}else if(p[1]=='burningfurnace'){
				setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),62);
			}else{
				clientMessage('\nSet Command\nPossible blocks: ateupd, bedrock, burningfurnace, cobweb, fire, glowingobsidian, ice, irondoor, lava, snow, statlava, statwater, tallgrass, update, water');
			}
			clientMessage('Set block '+p[1]);
			break;
		default: 
			clientMessage('\nCommand does not exist!');
			break;
	}
}
