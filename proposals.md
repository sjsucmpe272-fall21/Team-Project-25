# Proposal 1:

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



# Proposal 2:

## The Food Diary - Logging and Recommendations

### Introduction
Often times when food items are bought from the grocery store, users dont check the labels, ingrediants that much. Thus, it could happen that they are consuming food which they arent supposed to eat. Some users can have certain dietary restrictions due to some underlying disease, allergens, religious reasons or personal choice. But since the ingrediant list font size is small or if it is difficult to find, it is ignored by the users. 

### Abstract
The Food Diary app can be used for logging food items by either scanning a food item packet or manual data entry. The user can also specify what types of food ingrediants is he avoiding. When the user scans the ingrediant list, the applications detects any ingrediants which the user wants to avoid and notifies the user immediately. The app can also calculate how much calories were consumed along with breakup of the total carbohydrates, fats and proteins. The user can also set limits as to how much macros and micros he wants to consume and the app can notify him if the limits are breached. The application can also recommend healthy food alternatives by comparing ingrediants from different brands. 

### Approach 
The frontend of the app will be made in React with a backend of Node. Database to be used will be either MongoDB or MySQL. For scanning the ingrediant list OCR technology will be used.
A recommendations engine will be used to provide healthy food alternatives to the user based the contents of the food items.

### Dataset
https://www.kaggle.com/datafiniti/food-ingredient-lists 

#Proposal 3:

## Restaurant deals app

