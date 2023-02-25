import fs from 'fs';
import axios from 'axios';

const BASE_URI = "https://evmapi-testnet.confluxscan.net";
const CONTRACT_ADDRESS = "0x3f55aDFBC0143DA8D0E07cB77CE29ECAfF1ef66F";

//const contractSource = fs.readFileSync('<yourContractFlattenName.sol>', 'utf8');
const contractSource = fs.readFileSync('VerifyContractFlatten.sol', 'utf8');


async function main() {
    const body = {
        module: 'contract',
        action: 'verifysourcecode',
        contractaddress: CONTRACT_ADDRESS,
        sourceCode: contractSource,
        codeformat: 'solidity-single-file',
        contractname: 'VerifyContract',
        compilerversion: 'v0.8.4+commit.c7e474f2',
        optimizationUsed: 0, 
        licenseType: 3,
    }

    const response = await axios.post(`${BASE_URI}/api`, body);

    console.log(response.data);
}

main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
});
