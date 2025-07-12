import { PinataSDK } from 'pinata'

const pinata = new PinataSDK({
    pinataJwt: import.meta.env.VITE_JWT,
    pinataGateway: import.meta.env.VITE_GATEWAY
});

export const uploadToIPFS = async (title, description, imageFile) => {

    let imageUpload;
    if( imageFile.name !== "" ) {
        try{
            imageUpload = await pinata.upload.public.file(imageFile);
        } catch(error) {
            console.error("Error uploading image file:", error);
        }
    }
    else {
        imageUpload = { cid: "bafkreic2wd2uxb6dndsl2tnbslnl22znbqztzaminuh66phmhj27nglodi" };
    }
    try{
        const metadata = {
            title: title,
            description: description,
            image: `https://${import.meta.env.VITE_GATEWAY}/ipfs/${imageUpload.cid}`
        };
        const metadataUpload = await pinata.upload.public.json(metadata);
        return metadataUpload.cid;
    } catch(error) {
        console.error("Error creating metadata:", error);
    }
}

export const fetchFromIPFS = async ( cid ) => {
    if( !cid ) return 
    try{
        const response = await pinata.gateways.public.get(cid);
        return response;
    }
    catch(error){
        console.error("alert failed due to error ", error);
    }
}