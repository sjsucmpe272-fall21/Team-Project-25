# Proposal 0:

## Decentralized peer-to-peer ridesharing app

### Introduction

A decentralized ride sharing application that leverages the blockchain. Helps eliminate middlemen like Uber that engage in unfavorable practices.

### Abstract

There have been various [reports](https://www.washingtonpost.com/technology/2021/06/09/uber-lyft-drivers-price-hike/) of the popular ride sharing app Uber engaging in practices that are unfavorable to drivers. Recently during the Covid pandemic Uber made changes to the way it pays drivers; it paid drivers a flat fee based on distance and time whereas customers were being charged higher amounts compared to pre-pandemic times. Customers think that over worked drivers are getting more money but that simply isn't the case. 

Another problem with centralized companies such as Uber is that the pricing and various different components associated with it such as surge pricing are modified in an opaque manner and the drivers rarely ever benefit from such changes.

A completely decentralized peer-to-peer application based on the blockchain using smart contracts can help alleviate these problems. Transparent smart contracts would mean that the pricing is based on actual supply and demand and not on arbitrary surge pricing set by a centralized entity/middleman. Such an application would help cut out the middleman such as Uber that don't make the best choices in the interest of their drivers. Cutting out the middleman would also mean that the drivers get paid whatever the customers pay; no more 25% cuts being taken by middlemen.

### Approach 
The application would make use of the [Ethereum ledger](https://ethereum.org/en/) along with [IPFS](https://ipfs.io) to store some data related to customers and drivers enabling all aspects of the application to be completely decentralized.

Since we'd need to try out various different things and ideally wounldn't want to spend real [Ether](https://ethereum.org/en/eth/) prototyping, we can deploy our own [private Ethereum blockchain network on AWS](https://aws.amazon.com/blogs/database/deploy-smart-contracts-to-your-private-ethereum-blockchain-network-on-aws/).
