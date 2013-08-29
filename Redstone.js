var powered;
function useItem(x,y,z,itemId,blockId,side){
	if(itemId==267&&blockId==42){
		startPulse(x,y,z);
	}
}
function startPulse(x,y,z){
	print("Pulse activated");
	if(Level.getTile(x-1,y,z)==78){
		print("Detected wire lesser on X");
		powered[x-1][z]=true;
		checkFerMore(x-1,y,z);
	}
	if(Level.getTile(x+1,y,z)==78){
		print("Detected wire greater on X");
		powered[x+1][z]=true;
		checkFerMore(x+1,y,z);
	}
	if(Level.getTile(x,y,z-1)==78){
		print("Detected wire lesser on Z");
		powered[x][z-1]=true;
		checkFerMore(x,y,z-1);
	}
	if(Level.getTile(x,y,z+1)==78){
		print("Detected wire greater on Z");
		powered[x][z+1]=true;
		checkFerMore(x,y,z+1);
	}
}
function checkFerMore(x,y,z){
	if(powered[x][z]==true){
		if(Level.getTile(x-1,y,z)==78){
			print("Detected wire (x-1) than powered wire");
			checkFerMore(x-1,y,z);
		}
		if(Level.getTile(x+1,y,z)==78){
			print("Detected wire (x+1) than powered wire");
			checkFerMore(x-1,y,z);
		}
		if(Level.getTile(x,y,z-1)==78){
			print("Detected wire (z-1) than powered wire");
			checkFerMore(x,y,z-1);
		}
		if(Level.getTile(x,y,z+1)==78){
			print("Detected wire (z+1) than powered wire");
			checkFerMore(x,y,z+1);
		}
	}
}
function procCmd(c){
	var p=c.split(' ');
	var command=p[0];
	switch(command){
		case 'help':
			print("Help not added yet");
			break;
		default:
			print("Not a recognized command!");
			break;
	}
}
