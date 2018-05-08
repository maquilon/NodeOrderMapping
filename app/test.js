let distributions = [ 
    { 
        "id": '1' , 
        "amount": 10
    },
    { 
        "id": '1' , 
        "amount": 20
    },
    { 
        "id": '1' , 
        "amount": 50
    },
    { 
        "id": '2' , 
        "amount": 150
    },
]

const accumulatedTotals = {}
for ( let i = 0; i < distributions.length; i++ ) {
	const d = distributions[i]
	accumulatedTotals[ d.id ] = (accumulatedTotals[ d.id ] || 0) + d.amount
}
console.log('Acumulate --->', accumulatedTotals)

process.exit();