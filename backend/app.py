import json

import blockchain_utils
from flask import Flask, jsonify, request
from flask_cors import CORS
from web3 import Web3

app = Flask(__name__)
CORS(app)

# DB
users = {}
companies = {}
company_name_map = {}
users_name_map = {}

accounts = [
    "0xaB3A61f493d59131e75d92A5E729DE7958D0DbCE",
    "0xB0484a63b209c42fF8Ba7479026D2e3f93C1Fd9C",
    "0x757f28686f03D6645FaE74daFD4b60eEce37e7fA",
]
keys = [
    "0xe874dba9c715470c126904b3f1acff4f21bb356843c2d8fc44bd3b4a63047c03",
    "0x7f719da2e8b03b0e1a13f222ef3cb0cecb06ad4927b33081489b1b5e352e284a",
    "0xb0bebdaa3d3b862d2533cb459aae2a5efeb9bde7eb66ed7f3deeea13bdd70881",
]

# accounts = []
# keys = []

solc_output = ""

try:
    with open("./combined.json") as json_file:
        solc_output = json.load(json_file)
except Exception as e:
    print("Error opening JSON output file")
    print(e)

contract_data = solc_output["contracts"]["veritas.sol:Veritas"]
abi = contract_data["abi"]

contract_address = Web3.toChecksumAddress("0x192d1c341ac31f25afee52ccfa47e6b10ca785b8")

w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))

print(w3.isConnected())

contract = w3.eth.contract(address=contract_address, abi=abi)


# Flask routes
@app.route("/signup/customer", methods=["POST"])
def sign_up_customer():
    request_data = request.json
    username = request_data["username"]
    password = request_data["password"]
    users[username] = password

    if len(accounts) <= 0:
        return jsonify({"message": "Error creating account - out of resources"}), 400

    account = accounts.pop()
    p_key = keys.pop()

    users_name_map[username] = (account, p_key)

    return jsonify({"message": "Customer created successfully"})


@app.route("/signin/customer", methods=["POST"])
def sign_in_customer():
    request_data = request.json
    if (
        request_data["username"] in users
        and users[request_data["username"]] == request_data["password"]
    ):
        return jsonify({"message": "Customer successfully authenticated"})
    else:
        return jsonify({"message": "Invalid username or password"}), 401


@app.route("/signup/company", methods=["POST"])
def sign_up_company():
    request_data = request.json
    username = request_data["username"]
    password = request_data["password"]
    companies[username] = password

    if len(accounts) <= 0:
        return jsonify({"message": "Error signing up company - out of resources"}), 400

    company_address = accounts.pop()
    company_key = keys.pop()

    company_name_map[username] = (request_data["name"], company_address, company_key)
    return jsonify({"message": "Company created successfully"})


@app.route("/signin/company", methods=["POST"])
def sign_in_company():
    request_data = request.json
    if (
        request_data["username"] in companies
        and companies[request_data["username"]] == request_data["password"]
    ):
        return jsonify({"message": "Company successfully authenticated"})
    else:
        return jsonify({"message": "Invalid username or password"}), 401


@app.route("/company/<username>", methods=["GET"])
def get_company_information(username):
    if username == "" or username is None:
        return jsonify({"message": "Invalid username for company"}), 400

    if username in companies:
        company_name = company_name_map[username][0]
        company_address = company_name_map[username][1]

        try:
            products = blockchain_utils.get_products(contract, company_address)
        except Exception as e:
            print("Error getting products from blockchain")
            print(e)

        return jsonify(
            {
                "message": "Company found",
                "company_name": company_name,
                "products": products,
            }
        )
    else:
        return jsonify({"message": "Company not found for " + username}), 404


@app.route("/customer/<username>", methods=["GET"])
def get_customer_information(username):
    if username == "" or username is None:
        return jsonify({"message": "Invalid username for customer"}), 400

    if username in users:
        user_address = users_name_map[username][0]

        try:
            products = blockchain_utils.get_products(contract, user_address)
        except Exception as e:
            print("Error getting products from blockchain")
            print(e)

        return jsonify(
            {
                "message": "Customer found",
                "products": products,
            }
        )
    else:
        return jsonify({"message": "Customer not found for " + username}), 404


@app.route("/company/add/product", methods=["POST"])
def add_product():
    request_data = request.json
    username = request_data["username"]
    product_name = request_data["product_name"]
    product_description = request_data["product_description"]
    product_sku = request_data["product_sku"]

    try:
        blockchain_utils.add_product(
            w3,
            contract,
            product_name,
            product_description,
            product_sku,
            company_name_map[username][1],
            company_name_map[username][2],
        )
    except Exception as e:
        print("Error adding product to blockchain")
        print(e)
        return jsonify({"message": "Error adding product to blockchain"}), 400

    return jsonify({"message": "Product added successfully"})


@app.route("/sell/product", methods=["POST"])
def sell_product():
    request_data = request.json
    username = request_data["username"]
    new_owner = request_data["new_owner"]  # New owner's email address
    product_id = request_data["product_id"]

    if not new_owner in users:
        return (
            jsonify({"message": "Account you're sending the token to doesn't exist"}),
            400,
        )

    try:
        blockchain_utils.transfer_product(
            w3,
            contract,
            product_id,
            company_name_map[username][1],
            users_name_map[new_owner][0],
            company_name_map[username][2],
        )
    except Exception as e:
        print("Error transferring token on blockchain")
        print(e)
        return (
            jsonify(
                {"message": "Error transferring token on blockchain while selling"}
            ),
            400,
        )

    return jsonify({"message": "Product sold successfully to " + new_owner})


@app.route("/transfer/product", methods=["POST"])
def transfer_product():
    request_data = request.json
    username = request_data["username"]
    new_owner = request_data["new_owner"]  # New owner's email address
    product_id = request_data["product_id"]

    if not new_owner in users:
        return (
            jsonify({"message": "Account you're sending the token to doesn't exist"}),
            400,
        )

    try:
        blockchain_utils.transfer_product(
            w3,
            contract,
            product_id,
            users_name_map[username][0],
            users_name_map[new_owner][0],
            users_name_map[username][1],
        )
    except Exception as e:
        print("Error transferring token on blockchain")
        print(e)
        return jsonify({"message": "Error transferring token on blockchain"}), 400

    return jsonify({"message": "Product transferred successfully to " + new_owner})


@app.route("/company/<username>/keys", methods=["GET"])
def get_company_keys(username):
    if username == "" or username is None:
        return jsonify({"message": "Invalid username for company"}), 400

    if username in companies:
        return jsonify(
            {
                "message": "Company found",
                "public_key": company_name_map[username][1],
                "private_key": company_name_map[username][2],
            }
        )
    else:
        return jsonify({"message": "Company not found for " + username}), 404


@app.route("/customer/<username>/keys", methods=["GET"])
def get_company_keys(username):
    if username == "" or username is None:
        return jsonify({"message": "Invalid username for customer"}), 400

    if username in users:
        return jsonify(
            {
                "message": "Company found",
                "public_key": users_name_map[username][0],
                "private_key": users_name_map[username][1],
            }
        )
    else:
        return jsonify({"message": "Company not found for " + username}), 404


if __name__ == "__main__":
    app.run(debug=True)
