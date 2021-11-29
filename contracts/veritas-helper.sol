pragma solidity >=0.4.16 <0.9.0;

contract VeritasHelper {

    address ceo;

    struct Product {
        string name;
        address manufacturer;
        address owner;
    }

    Product[] public products;

    modifier isCEO(address _address) {
        require(msg.sender == ceo);
        _;
    }

    modifier isSaleAuthorized(address _address, uint _id) {
        address owner = products[_id].owner;
        require(msg.sender == ceo || msg.sender == owner);
        _;
    }

}