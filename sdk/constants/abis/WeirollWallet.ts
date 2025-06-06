export const WeirollWalletAbi = [
  { type: "fallback", stateMutability: "payable" },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "amount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "execute",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "executeWeiroll",
    inputs: [
      {
        name: "commands",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
      { name: "state", type: "bytes[]", internalType: "bytes[]" },
    ],
    outputs: [{ name: "", type: "bytes[]", internalType: "bytes[]" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "executed",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "forfeit",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "forfeited",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isForfeitable",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "isValidSignature",
    inputs: [
      { name: "digest", type: "bytes32", internalType: "bytes32" },
      { name: "signature", type: "bytes", internalType: "bytes" },
    ],
    outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "lockedUntil",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "manualExecuteWeiroll",
    inputs: [
      {
        name: "commands",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
      { name: "state", type: "bytes[]", internalType: "bytes[]" },
    ],
    outputs: [{ name: "", type: "bytes[]", internalType: "bytes[]" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "marketHash",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "recipeMarketHub",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "pure",
  },
  {
    type: "event",
    name: "WeirollWalletExecutedManually",
    inputs: [],
    anonymous: false,
  },
  {
    type: "error",
    name: "ExecutionFailed",
    inputs: [
      {
        name: "command_index",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "target", type: "address", internalType: "address" },
      { name: "message", type: "string", internalType: "string" },
    ],
  },
  { type: "error", name: "NotOwner", inputs: [] },
  { type: "error", name: "NotRecipeMarketHub", inputs: [] },
  { type: "error", name: "OfferUnfilled", inputs: [] },
  { type: "error", name: "RawExecutionFailed", inputs: [] },
  { type: "error", name: "WalletLocked", inputs: [] },
  { type: "error", name: "WalletNotForfeitable", inputs: [] },
] as const;
