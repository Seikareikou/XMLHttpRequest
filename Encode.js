function encrypted_id (id) {  
  var byte1 = "3go8&$8*3*3h0k(2)2"
  var byte2 = id
  //var byte1_len = byte1.length
  for(var i = 0;i != byte2.length;i++){
      byte2[i] = byte2[i]^byte1[i%18]}
  return byte2
}  

var deri = encrypted_id ("2894944")
//alert(deri);
