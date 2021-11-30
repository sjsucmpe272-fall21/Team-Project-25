pragma solidity >=0.4.16 <0.9.0;

contract VeritasHelper {
    address ceo;

    struct Product {
        string name;
        string description;
        uint sku;
        uint id;
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
        require(_address == ceo || _address == owner);
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

    function getCEO() external view returns(address) {
        return ceo;
    }

    function getProductOwner(uint _id) external view returns(address) {
        return productOwners[_id];
    }

    function getProductCount(address _owner) external view returns(uint) {
        return productCount[_owner];
    }

    function getProductCount() external view returns(uint) {
        return productCount[msg.sender];
    }

    function getProduct(uint _id) external view returns(Product memory) {
        return products[_id];
    }
}
