import fs from 'fs';
import axios from 'axios';


/*
   - eSpace Testnet uri
   If you need another environment see this: https://evmapi-testnet.confluxscan.net/doc
*/
const BASE_URI = "https://evmapi-testnet.confluxscan.net"; 

//- replace value with the smart contract address
const CONTRACT_ADDRESS = "0x3f55aDFBC0143DA8D0E07cB77CE29ECAfF1ef66F";

// read the solidity file
// - replace `VerifyContractFlatten.sol` with your FLATTEN contract
const contractSource = fs.readFileSync('VerifyContractFlatten.sol', 'utf8');

async function main() {
    const body = {
        module: 'contract',
        action: 'verifysourcecode',
        contractaddress: CONTRACT_ADDRESS,
        sourceCode: contractSource,
        codeformat: 'solidity-single-file',
        contractname: 'VerifyContract', //put your contract name
        compilerversion: 'v0.8.4+commit.c7e474f2',  // what compiler version you used for your contract?
        optimizationUsed: 0, // no = 0, yes =1
       // if optimization is used you need to specify your runs, (e.g. runs: 200 )
        licenseType: 3,
    /*
    Valid codes 1-14 where

    No License (None)
    The Unlicense (Unlicense)
    MIT License (MIT)
    GNU General Public License v2.0 (GNU GPLv2)
    GNU General Public License v3.0 (GNU GPLv3)
    GNU Lesser General Public License v2.1 (GNU LGPLv2.1)
    GNU Lesser General Public License v3.0 (GNU LGPLv3)
    BSD 2-clause 'Simplified' license (BSD-2-Clause)
    BSD 3-clause 'New' Or 'Revised' license* (BSD-3-Clause)
    Mozilla Public License 2.0 (MPL-2.0)
    Open Software License 3.0 (OSL-3.0)
    Apache 2.0 (Apache-2.0)
    GNU Affero General Public License (GNU AGPLv3)
    Business Source License (BSL 1.1)
    */
    }

    const response = await axios.post(`${BASE_URI}/api`, body);

    console.log(response.data);
}

main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
});