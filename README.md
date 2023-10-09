# Moz Schools API


The Moz Schools API is an API that provides access to detailed information about schools in Mozambique. It was developed to facilitate access to information about schools based on different criteria such as province, district, district post, locality, and school identification.

This API operates using the HTTP protocol and uses the GET method for all requests. This means that users can query the API to obtain specific information about schools without the need to send data or take actions that could change the system's state.

## Base URL

The base URL for this API is `http://localhost:3001/api/mz/schools`, which returns all the schools in Mozambique.

## Endpoints

#### Get Schools by Province

To retrieve schools by province, use the following endpoint:

 `http://localhost:3001/api/mz/schools/provincia/{provinceName}`
 
- Replace `{provinciaName}` with the name of the province you want to search for.

- Example: `http://localhost:3001/api/mz/schools/provincias/Maputo`

----------

#### Get Schools by District

To retrieve schools by district, use the following endpoint:

 `http://localhost:3001/api/mz/schools/distrito/{districtName}`
 
- Replace `:distrito` with the name of the district you want to search for.

- Example: `http://localhost:3001/api/mz/schools/distrito/Boane`
  
----------


### Get Schools by Posto Distrital

To retrieve schools by posto distrital, use the following endpoint:

 `http://localhost:3001/api/mz/schools/posto/{postoName}`
 
- Replace `{postoName}` with the name of the posto you want to search for.

- Example: `http://localhost:3001/api/mz/schools/posto/Namaacha`
