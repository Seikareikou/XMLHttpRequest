# XMLHttpRequest
自用代码

<def encrypted_id(id):>
    byte1 = bytearray('3go8&$8*3*3h0k(2)2')
    #id被转化为字节(八进制的数字）存在了byte2里，也就是说bytearray()是把对象转化为字节数组（byte[])
    byte2 = bytearray(id)
    byte1_len = len(byte1)
    #单纯的遍历字节数组
    for i in xrange(len(byte2)):
    	print byte2[i]
        byte2[i] = byte2[i]^byte1[i%byte1_len]
    #print byte2
    m = md5.new()
    m.update(byte2)
    result = m.digest().encode('base64')[:-1]
    result = result.replace('/', '_')
    result = result.replace('+', '-')
    return result


print (encrypted_id("8890651022531459"))

