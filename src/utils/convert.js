const exceljs = require('exceljs');
const fs = require('fs');

async function convertExcelToJson() {
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile('F:/About Programming/Estudos/Node.Js Projects/moz-schools-api/Moz-Schools-API/src/utils/mozambique_rede-escolar_wis_school-data.xlsx');
    const worksheet = workbook.getWorksheet(1); // Supondo que os dados estão na primeira planilha.

    const data = [];
    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber !== 1) { // Pule o cabeçalho, se houver um.
            const rowData = {};
            row.eachCell((cell, colNumber) => {

                switch (colNumber) {
                    case 1:
                        rowData["codigo"] = rowNumber;
                        rowData["provincia"] = cell.value;
                        break;
                    case 2:
                        rowData["distrito"] = cell.value;
                        break;
                    case 3:
                        rowData["posto"] = cell.value;
                        break;
                    case 4:
                        rowData["localidade"] = cell.value;
                        break;
                    case 5:
                        rowData["nome"] = cell.value;
                        break;
                    case 6:
                        rowData["longitude"] = cell.value;
                        break;
                    case 7:
                        rowData["latitude"] = cell.value;
                        break;
                }

            });
            data.push(rowData);
        }
    });

    // Salve os dados em um arquivo JSON.
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

    console.log('Arquivo JSON criado com sucesso: dados.json');
}

convertExcelToJson();
