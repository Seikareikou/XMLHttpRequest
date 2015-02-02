function stringToBytes (id) {  
  var byte1 = "3go8&$8*3*3h0k(2)2"
  var byte2 = id
  var byte1_len = byte1.length
    for(var i = 0;i != byte2.length;i++){
        byte2[i] = byte2[i]^byte1[i%byte1_len]}
        return byte2
}  

var deri = stringToBytes ("2894944")
//alert(deri);
