export function generateReport(transfer, validation) {
  console.log("----- Bridge Transfer Report -----");
  console.log("Bridge:", transfer.bridge);
  console.log("From Chain:", transfer.fromChain);
  console.log("To Chain:", transfer.toChain);
  console.log("Token:", transfer.token);
  console.log("Amount:", transfer.amount);
  console.log("Fee:", transfer.fee);
  console.log("Transaction:", validation.txHash);
  console.log("Status:", validation.status);
  console.log("----------------------------------");
}
