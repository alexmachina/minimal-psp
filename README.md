# minimal-psp
This is a back-end test for an amazing company

# Endpoints
## POST /transaction
Example payload:
```json
{  
  "amount": "100.0",
  "description": "Naruto Toad T-Shirt XL",
  "paymentMethod": "debit_card",
  "creditCardNumber": 4566,
  "expirationDate": "11/2020",
  "owner": "Cassius Mohamad Clay",
  "cvv": "811"
}
```

 ## GET /funds/available
 Example return:
 ```json
{
  "available": 291
}
```

## GET /funds/waiting_funds Example return:
 ```json
{
  "waiting_funds": 291
}
```
