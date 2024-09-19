/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do ano;
- O maior valor de faturamento ocorrido em um dia do ano;
- Número de dias no ano em que o valor de faturamento diário foi superior à média anual.
*/


const invoices = [ 1500, 150, 10890, 3500, 128, 4752, 124125,3658]

const showStatistics = (invoices) => {
    let lowerInvoice = Number.MAX_VALUE
    let highestInvoice = 0

    invoices.map((invoice) => {
        if (invoice > 0) {
            if (invoice < lowerInvoice) 
                lowerInvoice = invoice
            
            if (invoice > highestInvoice) 
                highestInvoice = invoice
        }
    })

    const anualAverage = invoices.reduce((a, b) => a + b) / invoices.length //considerando que no vetor há todos os dias do ano com faturamento
    let daysAboveAverage = invoices.filter(invoice => invoice > anualAverage).length

    return {
        lowerInvoice,
        highestInvoice,
        anualAverage,
        daysAboveAverage
    }
}


const {lowerInvoice,highestInvoice,anualAverage,daysAboveAverage} = showStatistics(invoices)
console.log(`Menor faturamento: ${lowerInvoice}`)
console.log(`Maior faturamento: ${highestInvoice}`)
console.log(`Média: ${anualAverage}`)
console.log(`Quantidade de dias com faturamento acima da média: ${daysAboveAverage}`)

/*  OUTPUT

Menor faturamento: 128
Maior faturamento: 124125
Média: 18587.875
Quantidade de dias com faturamento acima da média: 1

*/