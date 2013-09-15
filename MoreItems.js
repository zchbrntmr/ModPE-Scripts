var tb=0;
function useItem(x,y,z,itemId,blockId,side){
	if(itemId==280&&tb==0){
		ModPE.setItem(392,6,12,"Blaze Rod");
		ModPE.setFoodItem(393,5,12,5,"Cookie");
		Player.addItemInventory(392,5);
		Player.addItemInventory(393,1);
		tb=1;
	}else if(itemId==280&&tb==1){
		Player.addItemInventory(392,5);
		Player.addItemInventory(393,1);
	}else if(itemId==392){
		Level.spawnChicken(x,y+1,z,"mobs/chicken.png");
	}
}
