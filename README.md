# **Fine Tuning**
## **Table of Contents**
1. Overview
2. Product Spec
3. Wireframes
## **Overview**
### **Description**
A world-wide web application where customers can buy/sell music instruments and accessories, rent instruments, provide service options for customers who wants to repair their instruments, and provide product reselling when customers want to sell broken instruments so that the company can restore its quality, then sell it to multiple buyers. 

### **App Evaluation**
- **Category:** Music
- **Story:** Buy/Sell & rent music instruments, service instruments, and product reselling, and other items
- **Market:** Any musicians that wants to buy/sell their instruments, repair their instruments, 
- **Habit:** This app is mainly used for musicians; can also be used for non-musicians for product reselling
- **Scope:** First, we start reselling products (for a higher price) that we can get from potential customers. Then eventually, we should expand from the help of other music businesses around the country (ex: Music Masters, Guitar Center)

## **Product Spec**

### 1.	User Stories (Required/Optional)
#### **Required Must-Have Stories**
- User logs in to access preference settings
- User can pick their favorite ensemble (woodwinds, brass, percussion)
- User can sell instruments to receive a reasonable price
- User can buy/rent instruments & accessories for a reasonable price
- User can select the service option to explain to the company what’s wrong with the instrument and needs to be fixed (this can also be used as product reselling)

#### **Optional Nice-to-have Stories**
- User logs in to see their previous payments/search history


### 2.	Screens 
- Login
- Create an account
	-After installing the application, the user needs to log in/register for an account in order to have access for service, product reselling, rental, etc.
- Service Screen 
	- Allows the user to provide for customers where the company may need the customer’s information and their instrument (if they don’t have an account)
	- Also provides services prices
- Rent Instruments & Accessories Screen
	- Allows users to rent brass, woodwinds, or percussion instruments that available on the website
	- Payment Plan options/paid-in-full
- Buy/Sell Instruments Screen
	- Provide information on the music instruments the company’s selling
	- Allow users to have an option to sell their instruments
	- Provide description on which instruments are being sold, previous uses, etc
- Settings Screen 
	- Users can change their language, preferences, and notification 

### **3.	Navigation**
**Tab Navigation (Tab to Screen)**
- **Service Selection**
- **Sell Instruments Section**
- **Buy/Rental Section**
- **Profile**
- **Settings**

Optional: 
- Settings
- Profile
(These may be in menu)

**Flow Navigation (Screen to Screen)**
- Log-In Screen -> Account Creation
- Service Option -> Account Log-In -> Service’s Provider Information
- Buy/Sell Instruments -> Payment Info
- Rental Instruments Option-> Account Log-In ->Payment Plan
- Settings -> toggle the settings

## Wireframes
[bab385a7-3dab-41b4-955f-d8e163250fb8.pdf](https://github.com/Finetuning-Breathing/product_repo/files/9711853/bab385a7-3dab-41b4-955f-d8e163250fb8.pdf)

**Digital WireFrame**


![DigitalWireframe](https://user-images.githubusercontent.com/65302664/193961103-004d4d75-de5a-4de6-afd5-6b06928bce4b.png)

## Schema

### **Models**
User
|**Property**|**Type**|**Description**|
|------------|--------|---------------|
| username | string | Name of User |
| email  | string | Email of User |
| password | string | Password of User |

Product
|**Property**|**Type**|**Description**|
|------------|--------|---------------|
| Instrument | string | Name of Instrument |
| Desc | string | Description of Instrument |
| Brand | string | Instrument's Brand |
| Price | double | Instrument's Price |
| Rating | int | Instrument's Rating |
| Tags | array | Product tags for filtering |

Repair
|**Property**|**Type**|**Description**|
|------------|--------|---------------|
| Name | string | Name of Instrument |
| Desc | string | Description of Instrument's problems |

## **Networking**
- Login Screen
	- (POST) create new user account
	- (GET) log into existing account
- Home Screen
	- (GET) Query first five instruments of a specific tag (ex. top 5 woodwinds)
- Instrument View Screen
	- (GET) Show instrument data (name, description, and price)
	- (GET) Query instrument in inventory according to search filters
- Buy/Rent Screen
	- (GET) send request to buy / rent instrument(s)
	- (DELETE) buy/rent confirmation on instrument(s)
- Repair/Service Screen
	- (POST) submitted repair form
- Sell Screen
	- (POST) enter new instrument into inventory
