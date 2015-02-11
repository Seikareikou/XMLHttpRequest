#include<QByteArray>

void encrypted_id (id){
    	QByteArray byte1 = "3go8&$8*3*3h0k(2)2";
    	QByteArray byte2 = id;
    	int byte1_len = byte1.length;
    	//int byte2_len = byte2.length;
    	for(int i = 0;i < byte2.length;i++){
    		byte2[i] = byte[i] ^ byte2[i % byte1.len]
    		}
    		
    	}
    	
