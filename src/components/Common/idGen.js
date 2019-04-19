export default class idGen {

  constructor(idlength){
    console.info("idGen->constructor");
    const length=25;
    var text = "";
    

  }

  Gen(){
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    console.info("idGen->Gen");
    for (var i = 0; i < 25; i++){
      console.info("idGen->Gen->for");
    this.text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    console.info("idGen->Gen->text: "+ this.text);
  return this.text;

  }
 
 
}