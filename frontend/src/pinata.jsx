import { PinataSDK } from 'pinata'

const pinata = new PinataSDK({
    pinataJwt: import.meta.env.VITE_JWT,
    pinataGateway: import.meta.env.VITE_GATEWAY
});

export const uploadToIPFS = async (title, description, imageFile) => {

    console.log(imageFile);
    console.log("name: ", imageFile.name == "")

    if( imageFile.name == "" ) {
        try{
            const file = new File([""], `${title}.txt`, {type: "text/plain"});
            const upload = await pinata.upload.public.file(file)
            .keyvalues({
                title: title,
                description: description,
                image: false
            });
            console.log("File uploaded to IPFS:", upload);
            return upload.cid;
        }
        catch(error){
            alert("Failed inside uploadToIPFS if block with error: ", error);
        }
    }else {
        try {
            const upload = await pinata.upload.public.file(imageFile);
            upload.keyvalues = {
                title: title,
                description: description,
                image: true
            }
            console.log("File uploaded to IPFS:", upload);
            return upload.cid;
        }
        catch(error){
            alert( "failed inside uploadToIPFS else block with error: ", error);
        }
    }
}

export const fetchFromIPFS = async ( cid ) => {
    if( !cid ) return 
    try{
        const { data, contentType } = await pinata.gateways.public.get(cid);
        console.log("Fetched data from IPFS:", data);
        console.log("Content Type:", contentType);
        return;
    }
    catch(error){
        alert( "alert failed due to error ", error);
    }
}