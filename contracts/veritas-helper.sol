pragma solidity >=0.4.16 <0.9.0;

contract VeritasHelper {
    address ceo;

    struct Product {
        string name;
        address manufacturer;
        address owner;
    }

    Product[] public products;

    mapping (uint => address) public productOwners;
    mapping (address => uint) public productCount;

    modifier isCEO(address _address) {
        require(msg.sender == ceo);
        _;
    }

    modifier isSaleAuthorized(address _address, uint256 _id) {
        address owner = products[_id].owner;
        require(msg.sender == ceo || msg.sender == owner);
        _;
    }

    modifier isOwner(address _address, uint256 _id) {
        require(msg.sender == products[_id].owner);
        _;
    }

    function _transferProduct(address _from, address _to, uint256 _id) internal {
        productOwners[_id] = _to;
        products[_id].owner = _to;
        productCount[_to]++;
        productCount[_from]--;
    }
}
