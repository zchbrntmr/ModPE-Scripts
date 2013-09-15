function useItem(x,y,z,itemId,blockId,side){
	if(itemId==51){
		if(x>getPlayerX()){
			for (var i=0;i<5;i++){
				setTile(getPlayerX()+i,getPlayerY(),getPlayerZ(),51);
			};
		}
	}else{
		clientMessage(getPlayerX()+"  "+getPlayerZ());
	}
}
/*	Temporarily unused
	function procCmd(c){
	var p=c.split(' ');
	var command=p[0];
	switch(command){
		case '':
			clientMessage("No command given");
			break;
		default:
			clientMessage("Unrecognized command");
			break;
	}
}*/
