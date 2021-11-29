pragma solidity >=0.4.16 <0.9.0;

import "./veritas-helper.sol";

contract Veritas is VeritasHelper {

    mapping (uint => address) public productOwners;

    constructor() public {
        ceo = msg.sender;
    }

    function createProduct(string memory _name, address _manufacturer) public isCEO(msg.sender) returns(uint) {
        products.push(Product(_name, _manufacturer, _manufacturer));
        return products.length - 1;
        // products.push(Product(_name, _manufacturer, address(0)));
    }

    function sellProduct(uint _id, address _owner) public isSaleAuthorized(msg.sender, _id) {
        productOwners[_id] = _owner;
        products[_id].owner = _owner;
    }

}