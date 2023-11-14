/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { SoulBound, SoulBoundInterface } from "../SoulBound";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ERC721EnumerableForbiddenBatchMint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "ERC721OutOfBoundsIndex",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ba038038062001ba0833981016040819052620000349162000123565b60408051808201825260108082526f111e595b195d5b53585cdd195c93999d60821b6020808401829052845180860190955291845290830152829160006200007d8382620001fa565b5060016200008c8282620001fa565b5050506001600160a01b038116620000be57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000c981620000d1565b5050620002c6565b600b80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156200013657600080fd5b81516001600160a01b03811681146200014e57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200018057607f821691505b602082108103620001a157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001f557600081815260208120601f850160051c81016020861015620001d05750805b601f850160051c820191505b81811015620001f157828155600101620001dc565b5050505b505050565b81516001600160401b0381111562000216576200021662000155565b6200022e816200022784546200016b565b84620001a7565b602080601f8311600181146200026657600084156200024d5750858301515b600019600386901b1c1916600185901b178555620001f1565b600085815260208120601f198616915b82811015620002975788860151825594840194600190910190840162000276565b5085821015620002b65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6118ca80620002d66000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80636352211e116100b857806395d89b411161007c57806395d89b4114610271578063a22cb46514610279578063b88d4fde1461028c578063c87b56dd1461029f578063e985e9c5146102b2578063f2fde38b146102c557600080fd5b80636352211e1461022a5780636871ee401461023d57806370a0823114610245578063715018a6146102585780638da5cb5b1461026057600080fd5b806323b872dd116100ff57806323b872dd146101cb5780632f745c59146101de57806342842e0e146101f157806342966c68146102045780634f6ccce71461021757600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a457806318160ddd146101b9575b600080fd5b61014f61014a366004611355565b6102d8565b60405190151581526020015b60405180910390f35b61016c6102e9565b60405161015b91906113c2565b61018c6101873660046113d5565b61037b565b6040516001600160a01b03909116815260200161015b565b6101b76101b236600461140a565b6103a4565b005b6008545b60405190815260200161015b565b6101b76101d9366004611434565b6103b3565b6101bd6101ec36600461140a565b61041f565b6101b76101ff366004611434565b610484565b6101b76102123660046113d5565b61049f565b6101bd6102253660046113d5565b6104ab565b61018c6102383660046113d5565b610504565b6101b761050f565b6101bd610253366004611470565b610554565b6101b761059c565b600b546001600160a01b031661018c565b61016c6105b0565b6101b761028736600461148b565b6105bf565b6101b761029a3660046114dd565b6105ca565b61016c6102ad3660046113d5565b6105e7565b61014f6102c03660046115b9565b6105f2565b6101b76102d3366004611470565b610620565b60006102e38261065b565b92915050565b6060600080546102f8906115ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610324906115ec565b80156103715780601f1061034657610100808354040283529160200191610371565b820191906000526020600020905b81548152906001019060200180831161035457829003601f168201915b5050505050905090565b600061038682610680565b506000828152600460205260409020546001600160a01b03166102e3565b6103af8282336106b9565b5050565b6001600160a01b0382161561040f5760405162461bcd60e51b815260206004820152601c60248201527f746f6b656e2063616e206e6f74206265207472616e736665727265640000000060448201526064015b60405180910390fd5b61041a8383836106c6565b505050565b600061042a83610554565b821061045b5760405163295f44f760e21b81526001600160a01b038416600482015260248101839052604401610406565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b61041a838383604051806020016040528060008152506105ca565b6103af60008233610776565b60006104b660085490565b82106104df5760405163295f44f760e21b81526000600482015260248101839052604401610406565b600882815481106104f2576104f2611626565b90600052602060002001549050919050565b60006102e382610680565b61051761078b565b600c80546000918261052883611652565b91905055905061053833826107b8565b61055181604051806020016040528060008152506107d2565b50565b60006001600160a01b038216610580576040516322718ad960e21b815260006004820152602401610406565b506001600160a01b031660009081526003602052604090205490565b6105a461078b565b6105ae6000610822565b565b6060600180546102f8906115ec565b6103af338383610874565b6105d58484846103b3565b6105e184848484610913565b50505050565b60606102e382610a3c565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61062861078b565b6001600160a01b03811661065257604051631e4fbdf760e01b815260006004820152602401610406565b61055181610822565b60006001600160e01b03198216632483248360e11b14806102e357506102e382610b38565b6000818152600260205260408120546001600160a01b0316806102e357604051637e27328960e01b815260048101849052602401610406565b61041a8383836001610b5d565b6001600160a01b0382166106f057604051633250574960e11b815260006004820152602401610406565b60006106fe83836000610776565b90506001600160a01b03811661072a57604051637e27328960e01b815260048101839052602401610406565b836001600160a01b0316816001600160a01b0316146105e1576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610406565b6000610783848484610c63565b949350505050565b600b546001600160a01b031633146105ae5760405163118cdaa760e01b8152336004820152602401610406565b6103af828260405180602001604052806000815250610d30565b6000828152600a602052604090206107ea82826116b9565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b600b80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166108a657604051630b61174360e31b81526001600160a01b0383166004820152602401610406565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b156105e157604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610955903390889087908790600401611779565b6020604051808303816000875af1925050508015610990575060408051601f3d908101601f1916820190925261098d918101906117b6565b60015b6109f9573d8080156109be576040519150601f19603f3d011682016040523d82523d6000602084013e6109c3565b606091505b5080516000036109f157604051633250574960e11b81526001600160a01b0385166004820152602401610406565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14610a3557604051633250574960e11b81526001600160a01b0385166004820152602401610406565b5050505050565b6060610a4782610680565b506000828152600a602052604081208054610a61906115ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8d906115ec565b8015610ada5780601f10610aaf57610100808354040283529160200191610ada565b820191906000526020600020905b815481529060010190602001808311610abd57829003601f168201915b505050505090506000610aeb610d47565b90508051600003610afd575092915050565b815115610b2f578082604051602001610b179291906117d3565b60405160208183030381529060405292505050919050565b61078384610d67565b60006001600160e01b0319821663780e9d6360e01b14806102e357506102e382610dcf565b8080610b7157506001600160a01b03821615155b15610c33576000610b8184610680565b90506001600160a01b03831615801590610bad5750826001600160a01b0316816001600160a01b031614155b8015610bc05750610bbe81846105f2565b155b15610be95760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610406565b8115610c315783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b600080610c71858585610e1f565b90506001600160a01b038116610cce57610cc984600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b610cf1565b846001600160a01b0316816001600160a01b031614610cf157610cf18185610f18565b6001600160a01b038516610d0d57610d0884610fa9565b610783565b846001600160a01b0316816001600160a01b031614610783576107838585611058565b610d3a83836110a8565b61041a6000848484610913565b60606040518060a001604052806069815260200161182c60699139905090565b6060610d7282610680565b506000610d7d610d47565b90506000815111610d9d5760405180602001604052806000815250610dc8565b80610da78461110d565b604051602001610db89291906117d3565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982166380ac58cd60e01b1480610e0057506001600160e01b03198216635b5e139f60e01b145b806102e357506301ffc9a760e01b6001600160e01b03198316146102e3565b6000828152600260205260408120546001600160a01b0390811690831615610e4c57610e4c8184866111a0565b6001600160a01b03811615610e8a57610e69600085600080610b5d565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b03851615610eb9576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6000610f2383610554565b600083815260076020526040902054909150808214610f76576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090610fbb90600190611802565b60008381526009602052604081205460088054939450909284908110610fe357610fe3611626565b90600052602060002001549050806008838154811061100457611004611626565b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061103c5761103c611815565b6001900381819060005260206000200160009055905550505050565b6000600161106584610554565b61106f9190611802565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160a01b0382166110d257604051633250574960e11b815260006004820152602401610406565b60006110e083836000610776565b90506001600160a01b0381161561041a576040516339e3563760e11b815260006004820152602401610406565b6060600061111a83611204565b600101905060008167ffffffffffffffff81111561113a5761113a6114c7565b6040519080825280601f01601f191660200182016040528015611164576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461116e57509392505050565b6111ab8383836112dc565b61041a576001600160a01b0383166111d957604051637e27328960e01b815260048101829052602401610406565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610406565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106112435772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef8100000000831061126f576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061128d57662386f26fc10000830492506010015b6305f5e10083106112a5576305f5e100830492506008015b61271083106112b957612710830492506004015b606483106112cb576064830492506002015b600a83106102e35760010192915050565b60006001600160a01b038316158015906107835750826001600160a01b0316846001600160a01b03161480611316575061131684846105f2565b806107835750506000908152600460205260409020546001600160a01b03908116911614919050565b6001600160e01b03198116811461055157600080fd5b60006020828403121561136757600080fd5b8135610dc88161133f565b60005b8381101561138d578181015183820152602001611375565b50506000910152565b600081518084526113ae816020860160208601611372565b601f01601f19169290920160200192915050565b602081526000610dc86020830184611396565b6000602082840312156113e757600080fd5b5035919050565b80356001600160a01b038116811461140557600080fd5b919050565b6000806040838503121561141d57600080fd5b611426836113ee565b946020939093013593505050565b60008060006060848603121561144957600080fd5b611452846113ee565b9250611460602085016113ee565b9150604084013590509250925092565b60006020828403121561148257600080fd5b610dc8826113ee565b6000806040838503121561149e57600080fd5b6114a7836113ee565b9150602083013580151581146114bc57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156114f357600080fd5b6114fc856113ee565b935061150a602086016113ee565b925060408501359150606085013567ffffffffffffffff8082111561152e57600080fd5b818701915087601f83011261154257600080fd5b813581811115611554576115546114c7565b604051601f8201601f19908116603f0116810190838211818310171561157c5761157c6114c7565b816040528281528a602084870101111561159557600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156115cc57600080fd5b6115d5836113ee565b91506115e3602084016113ee565b90509250929050565b600181811c9082168061160057607f821691505b60208210810361162057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016116645761166461163c565b5060010190565b601f82111561041a57600081815260208120601f850160051c810160208610156116925750805b601f850160051c820191505b818110156116b15782815560010161169e565b505050505050565b815167ffffffffffffffff8111156116d3576116d36114c7565b6116e7816116e184546115ec565b8461166b565b602080601f83116001811461171c57600084156117045750858301515b600019600386901b1c1916600185901b1785556116b1565b600085815260208120601f198616915b8281101561174b5788860151825594840194600190910190840161172c565b50858210156117695787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906117ac90830184611396565b9695505050505050565b6000602082840312156117c857600080fd5b8151610dc88161133f565b600083516117e5818460208801611372565b8351908301906117f9818360208801611372565b01949350505050565b818103818111156102e3576102e361163c565b634e487b7160e01b600052603160045260246000fdfe68747470733a2f2f62616679626569653376667573666a696c70616132647469636867666265366d6a6632766461776666663761336c6b656e3461677468376e7a63612e697066732e7733732e6c696e6b2f4d6173746572253230477269642532304e46542e6a7067a2646970667358221220d001c97a981296c8af6239b73fc04493d0d41d7c90dffb7244f3a28fd4ac366964736f6c63430008150033";

type SoulBoundConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SoulBoundConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SoulBound__factory extends ContractFactory {
  constructor(...args: SoulBoundConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      SoulBound & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SoulBound__factory {
    return super.connect(runner) as SoulBound__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SoulBoundInterface {
    return new Interface(_abi) as SoulBoundInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SoulBound {
    return new Contract(address, _abi, runner) as unknown as SoulBound;
  }
}