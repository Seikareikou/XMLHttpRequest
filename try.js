function stringToBytes ( str ) {  
  var ch, st, re = [];  
  for (var i = 0; i < str.length; i++ ) {  
    ch = str.charCodeAt(i);    
    st = [];                 
    do {  
      st.push( ch & 0xFF ); 
      ch = ch >> 8;          
    }    
    while ( ch );  
    re = re.concat( st.reverse() );  
  } 
  return re;  
}  
//alert(stringToBytes( "2894944" ));

function encrypted_id (id) {  
  var byte1=[] ;
  byte1=byte1.concat(stringToBytes("3go8&$8*3*3h0k(2)2") );
  var byte2=[] ;
  byte2= byte2.concat(stringToBytes( id ) );
  //var byte1_len = byte1.length
  for(var i = 0;i != byte2.length;i++){
      byte2[i] = byte2[i]^byte1[i%18]}
  return byte2
}  
