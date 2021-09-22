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

Development of such an application would require frequent experimentation, and we plan to go about that by deploying our own [private Ethereum blockchain network on AWS](https://aws.amazon.com/blogs/database/deploy-smart-contracts-to-your-private-ethereum-blockchain-network-on-aws/).

### Persona

People who wish to drive for ridesharing apps and people who want to take such rides.

### Dataset

N/A


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


# Proposal 3:

## Restaurant deals app

### Introduction
A dining app which presents the user with the list of offers available on his/her cards or wallet on the desired cuisine at the restaurants nearby.


### Abstract
When we plan to dine at or order from a restaurant, we wish there are deals on the cards or wallets we use to pay for the food. A lot of times, the restaurant do have deals in the form of dicounts, cashback or vouchers on creadit cards, wallets etc, but we may not be aware of them.

This app helps the user know the offers at the restaurants nearby on the mode of payment he/she uses to pay.

### Approach
The app will have Python Flask as the backend and nginx server will host the application. The Flask app will be deployed on AWS EC2 in a private VPC. It contains a chatbot with which the user can chat to update his dining preferences for the day or his general dining preferences. The chatbot uses NLP and machine learning techniques to best interpret the user preferences. The app scrapes the web to find the list of deals which best fit the user. The user's previous preferences are stored so that he/she need not answer everytime. He/she can wish to follow the previous order and the app takes a note of the previous response to find the deals.

We will use API gateway through which the requests to/ responses from the app are sent. The app can be integrated with facebook so that user need not download a seperate app to find the deals. He/she can open facebook to look for the offers.

### Dataset
https://www.kaggle.com/uciml/restaurant-data-with-consumer-ratings
https://www.kaggle.com/heeraldedhia/stop-words-in-28-languages?select=english.txt

### Persona
Any user with a valid identity proof and bank account who wishes to order food.

# Proposal 4

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

### Dataset

N/A


# Proposal 5

## Flights delay prediction

### Introduction
The project for predicting delay records so that we can choose the right message.

### Abstract
Flight delay causes major exasperation in airports. It not only causes financial losses to airline companies but also brings dissatisfaction among passengers. Generally, flight delays represent the period by which the flight is late or cancelled. Flight delay can be considered as a regression problem and as well as a classification problem. The project use various machine learning algorithms to predict whether the flight is delayed.

### Approach
We aim to build a regression model for predicting the flight arrival delay considering various features which show a strong relation with arrival delay. We have also tried to frame the arrival delay and departure delay as a classification problem and used different classification algorithms. For Predicting the Flight Delay we have used the Regression Algorithms and Classification Algorithms. Then build a web page display through flask technology, and put the analysis and prediction data on the web page.

### Dataset Links
https://www.kaggle.com/bingecode/us-national-flight-data-2015-2020
https://www.transportation.gov/individuals/aviation-consumer-protection/air-travel-consumer-reports-2021


