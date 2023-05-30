# Planode Zoo
Simple expressJs api to manage a zoo by WILLEMAIN Damien, MULET Jules and TRAORE Mohamed Seydou
>Domain : http://localhost:8080
# 📁 Collection: Space


## End-point: Récupérer tout les espaces
### Method: GET
>```
>http://{{domain}}/space
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}

```

### Query Params

|Param|value|
|---|---|
||null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupérer un espace grace à son ID
### Method: GET
>```
>http://{{domain}}/space/{{spaceId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```

### Query Params

|Param|value|
|---|---|
||null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Créer un espace
### Method: POST
>```
>http://{{domain}}/space
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3",
	"name" : "test space",
    "description" : "Un espace de test",
	"type" : 1,
	"capacity" : 10,
    "opening_time" : "8h",
    "handicap_access" : true,
    "on_maintain" : true
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Modifier un espace
### Method: PUT
>```
>http://{{domain}}/space/{{spaceId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3",
    "name": "test ttt",
    "description": "Un espace de test",
    "capacity": 10,
    "opening_time": "8h",
    "handicap_access": true,
    "on_maintain": true,
    "__v": 0,
    "animals": [
        "607202761b66fce0f035163d"
    ],
    "maintenanceHistory": []
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Supprimer un espace
### Method: DELETE
>```
>http://{{domain}}/space/{{spaceId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupère tout les animaux d'un espace
### Method: GET
>```
>http://{{domain}}/spaces/{{spaceId}}/animals
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupère le carnet de traitement des animaux d'un espace
### Method: GET
>```
>http://{{domain}}/space/{{spaceId}}/animals/treatments
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Ajouter un animal à un espace
### Method: POST
>```
>http://{{domain}}/space/{{spaceId}}/animals
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "animal_id" : "607223596afb47526bd39955",
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupérer tout les espaces en maintenance
### Method: GET
>```
>http://{{domain}}/space/maintenance
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupérer le carnet d'entretien d'un espace
### Method: GET
>```
>http://{{domain}}/space/{{spaceId}}/maintenance
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Mettre un espace en maintenance
### Method: POST
>```
>http://{{domain}}/space/{{spaceId}}/maintenance
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3",
    "on_maintain" : true,
    "email": "testmail@testmailbox.fr",
    "password": "testPassword"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupère toute les fréquentations
### Method: GET
>```
>http://{{domain}}/space/{{spaceId}}/crowds
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupère la fréquentation d'un espace par date
### Method: GET
>```
>http://{{domain}}/space/{{spaceId}}/isVisited
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupère la fréquentation d'un espace en temps réel
### Method: GET
>```
>http://{{domain}}/space/{{spaceId}}/crowds/live
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupérer la fréquentation d'un espace par période
### Method: GET
>```
>http://{{domain}}/space/{{spaceId}}/crowds/period
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3",
    "startDate" : "2021-04-25",
    "endDate" : "2021-04-27"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Employee


## End-point: Récupérer tout les employées
### Method: GET
>```
>http://{{domain}}/employee
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupérer un employée grace à son ID
### Method: GET
>```
>http://{{domain}}/employee/{{employeeId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
     "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Créer un employée
### Method: POST
>```
>http://{{domain}}/employee
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "name": "test admin employee",
    "is_admin": true,
    "role": 4,
    "email": "testmail@testmailveter.fr",
    "password": "testPassword",
    "is_working": true,
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Modifier un employée
### Method: PUT
>```
>http://{{domain}}/employee/{{employeeId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
	"name" : "test admin employee",
    "is_admin" : true,
    "role" : 2,
    "email" : "testmail@testmailjkbox.fr",
    "password" : "testPassword",
    "is_working" : true,
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Supprimer un employée
### Method: DELETE
>```
>http://{{domain}}/employee/{{employeeId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Connexion
### Method: POST
>```
>http://{{domain}}/employee/login
>```
### Body (**raw**)

```json
{
    "email": "testmail@testmailbox.fr",
    "password": "testPassword"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Un employée commence son service
### Method: POST
>```
>http://{{domain}}/employee/start/{{employeeId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
     "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Un employée finit son service
### Method: POST
>```
>http://{{domain}}/employee/end/{{employeeId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
     "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Animal


## End-point: Récupérer tout les animaux
### Method: GET
>```
>http://{{domain}}/animal
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
     "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupérer un animal grace à son ID
### Method: GET
>```
>http://{{domain}}/animal/{{animalId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
     "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Créer un animal
### Method: POST
>```
>http://{{domain}}/animal
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3",
	"name" : "loup",
    "treatments": [
            {
                "veterinary": "random veto",
                "treatment": "traitement contre les puces",
                "date" : "06/06/2021"
            },
            {
                "veterinary": "random veto 2",
                "treatment": "traitement contre les puces",
                "date" : "12/06/2021"
            },
            {
                "veterinary": "random veto 3",
                "treatment": "visite de routine",
                "date" : "24/06/2021"
            }
        ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Modifier un animal
### Method: PUT
>```
>http://{{domain}}/animal/{{animalId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3",
	"name" : "éléphant"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Supprimer un animal
### Method: DELETE
>```
>http://{{domain}}/animal/{{animalId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization||



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Ajouter un traitement à un animal
### Method: POST
>```
>http://{{domain}}/animal/{{animalId}}/treatment
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3",
    "veterinary": "random veto 3",
    "treatment": "soin",
    "date" : "25/06/2021",
    "email" : "testmail@testmailjkbox.fr",
    "password" : "testPassword"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Visitor


## End-point: Récupérer tout les visiteurs
### Method: GET
>```
>http://{{domain}}/visitor
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Headers

|Content-Type|Value|
|---|---|
|||


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupérer un visiteur grace à son id
### Method: GET
>```
>http://{{domain}}/visitor/{{visitorId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Créer un visiteur
### Method: POST
>```
>http://{{domain}}/visitor
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization||


### Body (**raw**)

```json
{
    "name" : "DAUL"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Modifier un visiteur
### Method: PUT
>```
>http://{{domain}}/visitor/{{visitorId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization||


### Body (**raw**)

```json
{
    "name" : "DAUL",
    "pass" : {
        "type": "PASS annuel",
        "price": 50,
        "is_valid": true
    } 
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Supprimer un visiteur
### Method: DELETE
>```
>http://{{domain}}/visitor/{{visitorId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization||



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Ajouter un pass à un visiteur
### Method: POST
>```
>http://{{domain}}/visitor/{{visitorId}}/pass
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization||


### Body (**raw**)

```json
{
    "type" : 5,
    "price" : 500,
    "is_valid" : true,
    "authorizedSpaces": [
        "607051cd65fe875b63f2161f",
        "6071f3a9d994d8c6d3e86f67"
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Déplacer un visiteur à un nouvelle espace
### Method: POST
>```
>http://{{domain}}/visitor/{{visitorId}}/move/{{spaceId}}
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDcxYmRiMWNlOGRkZDZjZGJlMTJiYzMiLCJpYXQiOjE2MTkzODI0NDksImV4cCI6MTYxOTQ2ODg0OX0.hi78fHEv1AnUrb5P0j-m5KjqyBddIk7RyAZaQRyvol4|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: ZooController


## End-point: Récupère la liste des employés d'entretien en poste
### Method: GET
>```
>http://{{domain}}/zoo/serviceAgent
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupère la liste des employés vétérinaires en poste
### Method: GET
>```
>http://{{domain}}/zoo/veterinary
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupère la liste des employés en poste à la reception
### Method: GET
>```
>http://{{domain}}/zoo/receptionist
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization||



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Récupère la liste des employés de vente en poste
### Method: GET
>```
>http://{{domain}}/zoo/seller
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Vérifier si le zoo peut être ouvert
### Method: GET
>```
>http://{{domain}}/zoo/abbleToOpen
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Vérifier si le zoo peut être ouvert en fournissant des détails
### Method: GET
>```
>http://{{domain}}/zoo/abbleToOpen/details
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Ouverture du zoo par un admin
### Method: POST
>```
>http://{{domain}}/zoo/open
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3",
    "email": "testmail@testmailbox.fr",
    "password": "testPassword"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Fermeture du zoo par un admin
### Method: POST
>```
>http://{{domain}}/zoo/close
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3",
    "email": "testmail@testmailbox.fr",
    "password": "testPassword"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Ouverture nocturne du zoo par un admin
### Method: POST
>```
>http://{{domain}}/zoo/openNight
>```
### Headers

|Content-Type|Value|
|---|---|
|authorization|{{token}}|


### Body (**raw**)

```json
{
    "userId": "6071bdb1ce8ddd6cdbe12bc3",
    "email": "testmail@testmailbox.fr",
    "password": "testPassword"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________