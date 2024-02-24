import { KYCABI,KYCAddress } from "../middleware/constants.js";
import { ethers } from "ethers"

const provider = new ethers.providers.Web3Provider(window.ethereum);

const kycContract = new ethers.Contract(KYCAddress, KYCABI, provider.getSigner());

const verify = async (password) => {
    try {
        const isPass = await kycContract.comparePassword(password);
        const isAdmin = await kycContract.compareAdminAddress(provider.getSigner().getAddress());
    
        console.log(isPass,isAdmin);
        if(isPass && isAdmin){
            return true;
        }
        else{
            return false
        }
    
    } catch (error) {
        console.error(error);
        
    }

}

export { verify };