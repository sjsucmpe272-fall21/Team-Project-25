# from solc import compile_files

# contracts = compile_files(["../contracts/veritas.sol"])

# contract_id, contract_interface = contracts.popitem()

# bytecode = contract_interface["bin"]

# abi = contract_interface["abi"]

import json
import blockchain_utils

from flask import Flask, jsonify, request
from web3 import Web3



def transfer_product(w3, from_address, to_address, product_id, p_key):
    nonce = w3.eth.getTransactionCount(from_address)
    transaction = contract.functions.transferProduct(
        product_id, to_address
    ).buildTransaction(
        {
            "gas": 70000,
            "gasPrice": w3.toWei("200", "gwei"),
            "from": from_address,
            "nonce": nonce,
        }
    )
    signed_txn = w3.eth.account.sign_transaction(transaction, private_key=p_key)
    tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
    w3.eth.wait_for_transaction_receipt(tx_hash)


try:
    with open("../contracts/combined.json") as json_file:
        solc_output = json.load(json_file)
except Exception as e:
    print("Error opening JSON output file")
    print(e)


contract_data = solc_output["contracts"]["veritas.sol:Veritas"]
abi = contract_data["abi"]

contract_address = Web3.toChecksumAddress("0x9a20f9d147693a5281fb024466d06a83ca7d100f")


# print(contract_data["abi"])

w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))

print(w3.isConnected())

print(w3.eth.blockNumber)

# account = "0x00696bDE2008b9CC9AacB582C1da3dF31C1bA0e1"
# balance = w3.eth.getBalance(account)

# w3.eth.defaultAccount = w3.eth.accounts[0]

print(w3.eth.defaultAccount)


# print(w3.fromWei(balance, "ether"))

contract = w3.eth.contract(address=contract_address, abi=abi)


# print(contract.functions.getAllProducts("0xab5EF8da70C23EF987fdA94Aa942621707858Ca7").call())

# print()
# print(contract.functions.getCEO().call())
# print()

# print(contract.functions.getProductCount("0xab5EF8da70C23EF987fdA94Aa942621707858Ca7").call())
# # print(contract.functions.getProduct(0).call())
# print(contract.functions.getProductOwner(0).call())

print(
    contract.functions.getAllProducts(
        "0xA3a53CDfCEFe14C9b7cb24a1871B3b7b91987440"
    ).call()
)

# tx_hash = contract.functions.createProduct("Nike Shoe", "Air Force 1", 32, "0x3A1C340361c628fe4F7FD83383a2263DE890f676").transact()

# w3.eth.wait_for_transaction_receipt(tx_hash)

blockchain_utils.add_product(w3, contract, "Namer", "Descript", 32325, "0xA3a53CDfCEFe14C9b7cb24a1871B3b7b91987440", "0x60cb8662a78f4626a88ff1cef35eb9e7ab04599d6c123500fa33c759ed775812")

# print(contract.functions.getAllProducts("0x921aF922c7ed6133e06563F572Ce1EdB427b73de").call())
# print(contract.functions.getAllProducts("0xab5EF8da70C23EF987fdA94Aa942621707858Ca7").call())

# print(contract.functions.getProductOwner(0).call())

# # tx_hash = contract.functions.sellProduct(0, "0x921aF922c7ed6133e06563F572Ce1EdB427b73de").transact()
# # # tx_hash = contract.functions.transferProduct(0, "0x921aF922c7ed6133e06563F572Ce1EdB427b73de").transact()

# # w3.eth.wait_for_transaction_receipt(tx_hash)

# transfer_product(w3, "0xab5EF8da70C23EF987fdA94Aa942621707858Ca7", "0x921aF922c7ed6133e06563F572Ce1EdB427b73de", 0, "0xadec3933e8af6ab089422a88bb2e4d12f177c56de482704d7040fa95773cafb9")

# print(contract.functions.getAllProducts("0x921aF922c7ed6133e06563F572Ce1EdB427b73de").call())
# print(contract.functions.getAllProducts("0xab5EF8da70C23EF987fdA94Aa942621707858Ca7").call())

print("=========================")

print(blockchain_utils.get_products(contract, "0xA3a53CDfCEFe14C9b7cb24a1871B3b7b91987440"))

blockchain_utils.transfer_product(w3, contract, 0, "0xA3a53CDfCEFe14C9b7cb24a1871B3b7b91987440", "0x3083D31AC4E31797e3F34cFf72c6091C8E8d3C79", "0x60cb8662a78f4626a88ff1cef35eb9e7ab04599d6c123500fa33c759ed775812")

print(blockchain_utils.get_products(contract, "0x3083D31AC4E31797e3F34cFf72c6091C8E8d3C79"))

print("--------------")

print(blockchain_utils.get_products(contract, "0xA3a53CDfCEFe14C9b7cb24a1871B3b7b91987440"))

# holder = contract.functions.getAllProducts(
#         "0x5349aecB8Ad138D441DA6bb53bf43D17797c4dbe"
#     ).call()

# print(type(holder[0]))

# print(
#     contract.functions.getAllProducts(
#         "0x5349aecB8Ad138D441DA6bb53bf43D17797c4dbe"
#     ).call()
# )

# transfer_product(w3, "0x921aF922c7ed6133e06563F572Ce1EdB427b73de", "0x5349aecB8Ad138D441DA6bb53bf43D17797c4dbe", 0, "0x1f2bf5cb0d91aac04fec1e9ca2c14831f05c2b4b852330bd656e478cb535c521")

# print(
#     contract.functions.getAllProducts(
#         "0x5349aecB8Ad138D441DA6bb53bf43D17797c4dbe"
#     ).call()
# )

# transfer_product(
#     w3,
#     "0x921aF922c7ed6133e06563F572Ce1EdB427b73de",
#     "0x5349aecB8Ad138D441DA6bb53bf43D17797c4dbe",
#     0,
#     "0x1f2bf5cb0d91aac04fec1e9ca2c14831f05c2b4b852330bd656e478cb535c521",
# )