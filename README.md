# Moz Schools API


The Moz Schools API is an API that provides access to detailed information about schools in Mozambique such as name, province, district, code, and latitude and longitude coordinates. It was developed to facilitate access to information about schools based on different criteria such as province, district, district post, locality, and school identification.  

This API operates using the HTTP protocol and uses the GET method for all requests.
## Base URL

The base URL for this API is `https://moz-schools-api.vercel.app/api/mz/schools`, which returns all the schools in Mozambique.

Response example: 


```
 [
   {
    "codigo": 3628,
    "provincia": "Maputo",
    "distrito": "Cidade da Matola",
    "posto": "Machava",
    "localidade": "Machava",
    "nome": "Escola Secundaria de São Damaso",
    "latitude": -25.884333333333334,
    "longitude": 32.51711111111111
     },
   {
    "codigo": 7745,
    "provincia": "Sofala",
    "distrito": "C. Beira",
    "posto": "Urbano nº Manga Loforte",
    "localidade": "Beira",
    "nome": "Escola Primária Completa Josina Machel",
    "latitude": -19.776916666666665,
    "longitude": 34.889944444444446
     },
    {...}
  ]
```

## Endpoints

#### Get Schools by Province

To retrieve schools by province, use the following endpoint:

 `https://moz-schools-api.vercel.app/api/mz/schools/provincia/{provinceName}`
 
- Replace `{provinciaName}` with the name of the province you want to search for.

- Example: `https://moz-schools-api.vercel.app/api/mz/schools/province/Maputo`

----------

#### Get Schools by District

To retrieve schools by district, use the following endpoint:

 `https://moz-schools-api.vercel.app/api/mz/schools/distrito/{districtName}`
 
- Replace `{distritName}` with the name of the district you want to search for.

- Example: `https://moz-schools-api.vercel.app/api/mz/schools/distrito/Boane`
  
----------
#### Get Schools by Locality

To retrieve schools by locality, use the following endpoint:

 `https://moz-schools-api.vercel.app/api/mz/schools/localidade/{localityName}`
 
- Replace `{localityName}` with the name of the locality you want to search for.

- Example: `https://moz-schools-api.vercel.app/api/mz/schools/localidade/Manhiça`
  
----------


### Get Schools by Posto Distrital

To retrieve schools by posto distrital, use the following endpoint:

 `https://moz-schools-api.vercel.app/api/mz/schools/posto/{postoName}`
 
- Replace `{postoName}` with the name of the posto you want to search for.

- Example: `https://moz-schools-api.vercel.app/api/mz/schools/posto/Namaacha`

----------
  
### Get Schools by school code

To retrieve schools by school code, use the following endpoint:

 `https://moz-schools-api.vercel.app/api/mz/schools/{code}`
 
- Replace `{code}` with the name of the code you want to search for.

- Example: `https://moz-schools-api.vercel.app/api/mz/schools/7800`


## Contributing

We welcome contributions to this project. If you have suggestions, reports, or would like to contribute code feel free to open a pull request.

## Dataset Credits

The dataset used in this project is provided by OCHA Mozambique, and i would like to express my gratitude for their valuable contribution to this research. Without their data, this api would not have been possible.

- **Dataset Name**: Mozambique Rede Escolar WiS School data
- **Dataset Source**: https://data.humdata.org/dataset/mozambique-school-data
- **Dataset License**: [Creative Commons Attribution International](https://data.humdata.org/faqs/licenses)

## License

This project is licensed under the [MIT License](LICENSE). You are free to use and distribute this code as long as you attribute the source and include the same license in your distribution.

---

## Build with
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/mongodb-%23404d59.svg?style=for-the-badge&logo=mongodb&logoColor=green)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

---

## Autor
- [Francisco Júnior](https://github.com/franciscojunior12)
- Link do projecto: https://github.com/FranciscoJunior12/Moz-Schools-API


