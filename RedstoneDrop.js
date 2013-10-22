/* Uses code taked from MrARM's Redstone Mod */
function destroyBlock(x,y,z,side){
  var block=getTile(x,y,z);
  var item=getCarriedItem();
  if((block==73||block==74)&&(item==257||item==285||item==278)){
   var amount=4+parseInt(Math.random());
   preventDefault();
   Level.destroyBlock(x,y,z,false);
   Level.dropItem(x,y,z,1,55,amount,0);
  }
}
