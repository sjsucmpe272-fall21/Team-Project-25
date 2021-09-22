# Proposal 0:

## Decentralized peer-to-peer ridesharing app

### Introduction

A decentralized ride sharing application that leverages the blockchain. Helps eliminate middlemen like Uber that engage in unfavorable practices.

### Abstract

There have been various [reports](https://www.washingtonpost.com/technology/2021/06/09/uber-lyft-drivers-price-hike/) of the popular ride sharing app Uber engaging in practices that are unfavorable to drivers. Recently during the Covid pandemic Uber made changes to the way it pays drivers; it paid drivers a flat fee based on distance and time whereas customers were being charged higher amounts compared to pre-pandemic times. Customers think that over worked drivers are getting more money with these increases in price, but the reality is that the company profits from higher charges, not the drivers. 

Another problem with centralized companies such as Uber is that the pricing and various different components associated with it such as surge pricing are modified in an opaque manner and the drivers rarely ever benefit from any of the changes being made.

A completely decentralized peer-to-peer application based on the blockchain using smart contracts can help alleviate these problems. Transparent smart contracts would mean that the pricing is based on actual supply and demand and not on arbitrary surge pricing set by a centralized entity/middleman. Such an application would help cut out middlemen such as Uber that don't make the best choices in the interest of their drivers. Cutting out the middlemen would also result in the drivers and riders being connected directly and thus what the riders pay is what the drivers will get.

### Approach 
The application would make use of the [Ethereum ledger](https://ethereum.org/en/) along with [IPFS](https://ipfs.io) to store data related to customers and drivers, enabling all aspects of the application to be completely decentralized.

Development of such an application would require frequent experimentation and we plan to go about that by deploying our own [private Ethereum blockchain network on AWS](https://aws.amazon.com/blogs/database/deploy-smart-contracts-to-your-private-ethereum-blockchain-network-on-aws/).
