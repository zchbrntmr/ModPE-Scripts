/* Version 0.4 */
function useItem(x,y,z,itemId,blockId){
	if(blockId==4){//Cobblestone->Stone
        setTile(x,y,z,1);
        preventDefault();
    }else if(blockId==12){//Sand->Glass
        setTile(x,y,z,20);
        preventDefault();
    }else if(blockId==17){//Wood->Coal
		setTile(x,y,z,0);
		Player.addItemInventory(263,1);
		preventDefault();
	}else if(blockId==87){//Netherrack->Nether Brick
		setTile(x,y,z,0);
		Player.addItemInventory(405,1);
		preventDefault();
	}else if(blockId==56){//Diamond Ore->Diamond
		setTile(x,y,z,1);
		Player.addItemInventory(264,1);
		preventDefault();
	}else if(blockId==15){//Iron Ore->Iron Ingot
		setTile(x,y,z,1);
		Player.addItemInventory(265,1);
		preventDefault();
	}else if(blockId==14){//Gold Ore->Gold Ingots
		setTile(x,y,z,1);
		Player.addItemInventory(266,1);
		preventDefault();
	}else if(blockId==16){//Coal Ore->Coal
		setTile(x,y,z,1);
		Player.addItemInventory(263,1);
		preventDefault();
	}else if(blockId==81){//Cactus->Dye
		setTile(x,y,z,0);
		Player.addItemInventory(351,1);
		preventDefault();
	}
}
