export const ETHERSCAN_TX = (txHash, network) => {
  if(network === "ropsten"){
    return `https://api-ropsten.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=${txHash}`;
  }
  else{
    return `https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=${txHash}`;
  }
}

export const ETHERSCAN_TX_FULL_PAGE = (txHash, network) => {
  if(network === "ropsten"){
    return `https://ropsten.etherscan.io/tx/${txHash}`;
  }
  else{
    return `https://etherscan.io/tx/${txHash}`;
  }
}

export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000"

//if there is an optional button it should be placed last in the array
export const Links = [
  {
    text: 'How it works',
    linkTo: '/',
  },{
    text: 'Claim',
    linkTo: '/claim',
  },{
    text: 'Verify',
    linkTo: '/verify',
  }, {
    text: 'Create new',
    linkTo: '/create-new',
    optional: true,
  }
];
