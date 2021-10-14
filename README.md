# Veritas

## Decentralized Authentication System

### Introduction

[Industries are currently losing billions of dollars owing to counterfeits present on the market](https://www.oecd.org/sti/ind/2090589.pdf). An application that allows users to determine the authenticity of a product before purchasing it can help curb this issue.

### Abstract

[The blockchain is starting to be used by companies to provide visibility in their supply chain and supply cycle of the product](https://consensys.net/blockchain-use-cases/supply-chain-management/). However, the problem of guaranteeing authenticity to the consumer still remains a challenge.

Companies can associate tokens on the blockchain for each stock keeping unit (SKU) and during the sale to the customer they can provide it to the customer via email or through a QR code that the customer can scan. This QR code can also be scanned by the customer to ensure that the product is authentic before buying it - the application would only verify tokens that exist on the blockchain and let the user know about the history of the product and its authenticity.

Blockchain can prove to be really valuable here due to it being tamper-proof. It can allow companies to provide full transparency to the product and its life cycle.

### Approach

We will create a web app that companies can use to associate its products with and generate tokens on the [Ethereum ledger](https://ethereum.org/en/) along with associate QR codes that they can print on their products. The application can also be extended to allow companies to track the product life cycle on the blockchain.

A customer facing mobile application will also be developed that would allow customers to scan QR codes and verify the authenticity of a product while also getting all the product life cycle information available.

Development of such an application would require frequent experimentation, and we plan to go about that by deploying our own [private Ethereum blockchain network on AWS](https://aws.amazon.com/blogs/database/deploy-smart-contracts-to-your-private-ethereum-blockchain-network-on-aws/).

### Persona

Companies trying to prevent counterfeits and users purchasing such products.