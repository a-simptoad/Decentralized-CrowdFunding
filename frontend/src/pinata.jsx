import { PinataSDK } from 'pinata'

const pinata = new PinataSDK({
    pinataJwt: "", 
    pinataGateway: ""
});

const uploadToIPFS = async ( file ) => {
    if( !file ) return 
    try{
        const upload = await pinata.upload.public.file(file);
        return upload.cid;
    }
    catch(error){
        alert( "alert failed due to error ", error);
    }
}