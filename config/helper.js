
module.exports.encryptID = async function (id) {
    const buff = Buffer.from(process.env.ID_ENCODE_STRING+id, 'utf-8');
    // decode buffer as Base64
    const base64 = buff.toString('base64');
    return base64;  
}

module.exports.decryptID = async function (id) {
    let staticString =process.env.ID_ENCODE_STRING;
    let buffer_id = new Buffer(id, 'base64')
    let decoded_id = buffer_id.toString();
    let org_id = parseInt(decoded_id.replace(staticString,''));
    return org_id;
}
