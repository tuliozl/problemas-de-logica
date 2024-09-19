/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do ano;
- O maior valor de faturamento ocorrido em um dia do ano;
- Número de dias no ano em que o valor de faturamento diário foi superior à média anual.
*/


const invoices = [ 1500, 150, 10890, 3500, 128, 4752, 124125,3658]

const showStatistics = (invoices) => {
    let lowerInvoice = Number.MAX_VALUE
    let highestInvoice = Number.MIN_VALUE
    let invoiceSum = 0

    invoices.map((invoice) => {
        if (invoice > 0) {
            if (invoice < lowerInvoice) lowerInvoice = invoice
            if (invoice > highestInvoice) highestInvoice = invoice
            invoiceSum += invoice
        }
    })

    const anualAverage = invoiceSum / invoices.length //considerando que no vetor há todos os dias do ano com faturamento
    let daysAboveAverage = invoices.filter(invoice => invoice > anualAverage).length

    return {
        lowerInvoice,
        highestInvoice,
        anualAverage,
        daysAboveAverage
    }
}


const statistics = showStatistics(invoices)
console.log(`Menor faturamento: ${statistics.lowerInvoice}`)
console.log(`Maior faturamento: ${statistics.highestInvoice}`)
console.log(`Média: ${statistics.anualAverage}`)
console.log(`Quantidade de dias com faturamento acima da média: ${statistics.daysAboveAverage}`)

/*  OUTPUT

Menor faturamento: 128
Maior faturamento: 124125
Média: 18587.875
Quantidade de dias com faturamento acima da média: 1

*/