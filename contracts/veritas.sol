pragma solidity >=0.4.16 <0.9.0;

import "./veritas-helper.sol";

contract Veritas is VeritasHelper {
    constructor() {
        ceo = msg.sender;
    }

    function createProduct(string memory _name, string memory description, uint sku, address _manufacturer) public isCEO(msg.sender) returns(uint) {
        products.push(Product(_name, description, sku, sku, _manufacturer, _manufacturer));
        productCount[_manufacturer]++;
        uint _id = products.length - 1;
        productOwners[_id] = _manufacturer;
        Product storage _product = products[_id];
        _product.id = uint(_id);
        return _id;
        // products.push(Product(_name, _manufacturer, address(0)));
    }

    function sellProduct(uint _id, address _owner) public isSaleAuthorized(msg.sender, _id) {
        _transferProduct(msg.sender, _owner, _id);
    }

    function transferProduct(uint _id, address _newOwner) public isOwner(msg.sender, _id) {
        _transferProduct(msg.sender, _newOwner, _id);
    }

    function getAllProducts(address _owner) external view returns(Product[] memory) {
        Product[] memory result = new Product[](productCount[_owner]);
        uint counter = 0;
        for (uint i = 0; i < products.length; i++) {
            if (products[i].owner == _owner) {
                result[counter] = products[i];
                counter++;
            }
        }
        return result;
    }
}