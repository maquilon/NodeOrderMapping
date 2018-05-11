[{
    _id:
        {
            customId: '5af4841640130c1c07ee383e',
            date: '2017-03-02',
            title: 'Amazon Inc. Order',
            schoolId: '55e4ddddc588d547062bed7b',
            districtId: '55e4ddddc588d547062bed79',
            discount: 0,
            userName: 'Michelle Rowe',
            status: 'complete',
            userId: '57bc9102ba8113d1dddf16ac',
            type: 'internal',
            vendorOrderId: 133177,
            vendorId: '55fa1e4398eb4b0c07afaf29',
            purchaseOrderNumber: 'N/A',
            returnedTax: 0,
            shipping: -349,
            tax: 0,
            subTtotal: -1299
        },
    order:
        {
            title: 'Amazon Inc. Order',
            schoolId: '55e4ddddc588d547062bed7b',
            districtId: '55e4ddddc588d547062bed79',
            discount: 0,
            userName: 'Michelle Rowe',
            status: 'complete',
            userId: '57bc9102ba8113d1dddf16ac',
            originalDate: '2017-03-02',
            type: 'internal',
            shipping: -349,
            tax: 0,
            total: -1299,
            vendor:
                {
                    vendorOrderId: 133177,
                    vendorId: '55fa1e4398eb4b0c07afaf29',
                    purchaseOrderNumber: 'N/A',
                    items:
                        [{
                            itemdId: 'B01I90E1AC',
                            quantity: 1,
                            sumPrice: -1299,
                            price: -1299,
                            description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendly for iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue'
                        }]
                },
            distributions: [{ id: '57c46700f687533d06fbd75b', amount: 1648 }],
            created: 2018 - 05 - 11T15: 02: 01.939Z,
            modified: 2018 - 05 - 11T15: 02: 01.939Z,
            completed: 2018 - 05 - 11T15: 02: 01.939Z,
            migratedReturns: true
        },
    original:
        [{
            _id: 5808098426d6babb30004139,
            userId: '57bc9102ba8113d1dddf16ac',
            userName: 'Michelle Rowe',
            status: 'complete',
            created: 2016 - 10 - 20T00: 02: 12.162Z,
            modified: 2017 - 03 - 02T16: 34: 51.286Z,
            shipping: 519,
            tax: 0,
            total: 2217,
            vendor:
                {
                    items:
                        [{
                            itemId: 'B00004T8R2',
                            description: 'Panasonic On-Ear Stereo Headphones RP-HT21 (Black &amp; Silver) Lightweight and Comfortable, Powerful Bass',
                            quantity: 2,
                            price: 849
                        },
                        {
                            itemId: 'B01I07FLK8',
                            description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] TemperedGlass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]',
                            quantity: 0,
                            price: 1295
                        },
                        {
                            itemId: 'B01I90E1AC',
                            description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendlyfor iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue',
                            quantity: 0,
                            price: 1299
                        }],
                    vendorName: 'Amazon Inc.',
                    vendorId: '55fa1e4398eb4b0c07afaf29',
                    purchaseOrderNumber: 'N/A',
                    vendorOrderId: 133177,
                    returningItems:
                        [{
                            itemId: 'B01I07FLK8',
                            quantity: 1,
                            price: 1295,
                            description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] TemperedGlass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]',
                            status: 'return_complete',
                            taxRefund: 0
                        },
                        {
                            itemId: 'B01I90E1AC',
                            quantity: 1,
                            price: 1299,
                            description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendlyfor iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue',
                            status: 'return_complete',
                            taxRefund: 0
                        }],
                    returningShipping: 349,
                    cogs_discount: 0
                },
            schoolId: '55e4ddddc588d547062bed7b',
            districtId: '55e4ddddc588d547062bed79',
            title: 'Amazon Inc. Order',
            discount: 0,
            type: 'internal',
            exemptedTax: 0,
            purse:
                {
                    purses:
                        [{ id: '57c46700f687533d06fbd75b', value: 4078 },
                        { id: '57bc9a9b4896e0847687aa37', value: 1082 }]
                },
            approval_distributions:
                [{
                    amount: 4078,
                    isProcessed: true,
                    status: 'approved',
                    id: '57c46700f687533d06fbd75b',
                    createdBy: '57bc996aba8113d1dddf16f0',
                    districtId: '55e4ddddc588d547062bed79',
                    title: '$200 Supplemental Funds for Common Core 2016-2017',
                    admin: 'Marti Ayala',
                    adminId: '57bc9095ba8113d1dddf1662',
                    date: 2016 - 10 - 20T19: 26: 13.104Z
                }],
            distributions:
                [{ id: '57c46700f687533d06fbd75b', amount: -1135 },
                { id: '57bc9a9b4896e0847687aa37', amount: -1082 }],
            completed: 2016 - 10 - 20T19: 26: 13.587Z,
            orderManagementStatus: 'items_return_complete',
            history:
                [{
                    action: 'process_return_item',
                    date: 2017 - 03 - 02T16: 34: 19.046Z,
                    notes: 'item Id: B01I07FLK8, quantity: 1'
                },
                {
                    action: 'process_return_item',
                    date: 2017 - 03 - 02T16: 34: 25.908Z,
                    notes: 'item Id: B01I90E1AC, quantity: 1'
                },
                {
                    returningShipping: 349,
                    action: 'shipping_refund',
                    transactionStepId: 58b849a04413ea3906d6bd15,
                    date: 2017 - 03 - 02T16: 34: 40.283Z,
                    distributions: [{ id: '57c46700f687533d06fbd75b', amount: 349 }]
                },
                {
                    returningItems:
                        [{
                            status: 'return_processing',
                            taxRefund: 0,
                            itemId: 'B01I07FLK8',
                            quantity: 1,
                            price: 1295,
                            description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] Tempered Glass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]'
                        }],
                    action: 'complete_return_item',
                    transactionStepId: 58b849a44413ea3906d6bd1a,
                    notes: 'item Id: B01I07FLK8, quantity: 1',
                    date: 2017 - 03 - 04T16: 34: 44.857Z,
                    distributions: [{ id: '57c46700f687533d06fbd75a', amount: 1295 }]
                },
                {
                    returningItems:
                        [{
                            status: 'return_processing',
                            taxRefund: 0,
                            itemId: 'B01I90E1AC',
                            quantity: 1,
                            price: 1299,
                            description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendly for iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue'
                        }],
                    action: 'complete_return_item',
                    transactionStepId: 58b849ab4413ea3906d6bd1f,
                    notes: 'item Id: B01I90E1AC, quantity: 1',
                    date: 2017 - 03 - 02T16: 34: 51.286Z,
                    distributions: [{ id: '57c46700f687533d06fbd75b', amount: 1299 }]
                }],
            initialTotal: 5160,
            initialDistributions:
                [{ id: '57c46700f687533d06fbd75b', amount: -4078 },
                { id: '57bc9a9b4896e0847687aa37', amount: -1082 }]
        }]
},



{
    _id:
        {
            customId: '5af4841640130c1c07ee383e',
            date: '2017-03-04',
            title: 'Amazon Inc. Order',
            schoolId: '55e4ddddc588d547062bed7b',
            districtId: '55e4ddddc588d547062bed79',
            discount: 0,
            userName: 'Michelle Rowe',
            status: 'complete',
            userId: '57bc9102ba8113d1dddf16ac',
            type: 'internal',
            vendorOrderId: 133177,
            vendorId: '55fa1e4398eb4b0c07afaf29',
            purchaseOrderNumber: 'N/A',
            returnedTax: 0,
            shipping: 0,
            tax: 0,
            subTtotal: -1295
        },
    order:
        {
            title: 'Amazon Inc. Order',
            schoolId: '55e4ddddc588d547062bed7b',
            districtId: '55e4ddddc588d547062bed79',
            discount: 0,
            userName: 'Michelle Rowe',
            status: 'complete',
            userId: '57bc9102ba8113d1dddf16ac',
            originalDate: '2017-03-04',
            type: 'internal',
            shipping: 0,
            tax: 0,
            total: -1295,
            vendor:
                {
                    vendorOrderId: 133177,
                    vendorId: '55fa1e4398eb4b0c07afaf29',
                    purchaseOrderNumber: 'N/A',
                    items:
                        [{
                            itemdId: 'B01I07FLK8',
                            quantity: 1,
                            sumPrice: -1295,
                            price: -1295,
                            description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] Tempered Glass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]'
                        }]
                },
            distributions: [{ id: '57c46700f687533d06fbd75a', amount: 1295 }],
            created: 2018 - 05 - 11T15: 02: 01.939Z,
            modified: 2018 - 05 - 11T15: 02: 01.939Z,
            completed: 2018 - 05 - 11T15: 02: 01.939Z,
            migratedReturns: true
        },
    original:
        [{
            _id: 5808098426d6babb30004139,
            userId: '57bc9102ba8113d1dddf16ac',
            userName: 'Michelle Rowe',
            status: 'complete',
            created: 2016 - 10 - 20T00: 02: 12.162Z,
            modified: 2017 - 03 - 02T16: 34: 51.286Z,
            shipping: 519,
            tax: 0,
            total: 2217,
            vendor:
                {
                    items:
                        [{
                            itemId: 'B00004T8R2',
                            description: 'Panasonic On-Ear Stereo Headphones RP-HT21 (Black &amp; Silver) Lightweight and Comfortable, Powerful Bass',
                            quantity: 2,
                            price: 849
                        },
                        {
                            itemId: 'B01I07FLK8',
                            description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] TemperedGlass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]',
                            quantity: 0,
                            price: 1295
                        },
                        {
                            itemId: 'B01I90E1AC',
                            description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendlyfor iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue',
                            quantity: 0,
                            price: 1299
                        }],
                    vendorName: 'Amazon Inc.',
                    vendorId: '55fa1e4398eb4b0c07afaf29',
                    purchaseOrderNumber: 'N/A',
                    vendorOrderId: 133177,
                    returningItems:
                        [{
                            itemId: 'B01I07FLK8',
                            quantity: 1,
                            price: 1295,
                            description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] TemperedGlass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]',
                            status: 'return_complete',
                            taxRefund: 0
                        },
                        {
                            itemId: 'B01I90E1AC',
                            quantity: 1,
                            price: 1299,
                            description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendlyfor iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue',
                            status: 'return_complete',
                            taxRefund: 0
                        }],
                    returningShipping: 349,
                    cogs_discount: 0
                },
            schoolId: '55e4ddddc588d547062bed7b',
            districtId: '55e4ddddc588d547062bed79',
            title: 'Amazon Inc. Order',
            discount: 0,
            type: 'internal',
            exemptedTax: 0,
            purse:
                {
                    purses:
                        [{ id: '57c46700f687533d06fbd75b', value: 4078 },
                        { id: '57bc9a9b4896e0847687aa37', value: 1082 }]
                },
            approval_distributions:
                [{
                    amount: 4078,
                    isProcessed: true,
                    status: 'approved',
                    id: '57c46700f687533d06fbd75b',
                    createdBy: '57bc996aba8113d1dddf16f0',
                    districtId: '55e4ddddc588d547062bed79',
                    title: '$200 Supplemental Funds for Common Core 2016-2017',
                    admin: 'Marti Ayala',
                    adminId: '57bc9095ba8113d1dddf1662',
                    date: 2016 - 10 - 20T19: 26: 13.104Z
                }],
            distributions:
                [{ id: '57c46700f687533d06fbd75b', amount: -1135 },
                { id: '57bc9a9b4896e0847687aa37', amount: -1082 }],
            completed: 2016 - 10 - 20T19: 26: 13.587Z,
            orderManagementStatus: 'items_return_complete',
            history:
                [{
                    action: 'process_return_item',
                    date: 2017 - 03 - 02T16: 34: 19.046Z,
                    notes: 'item Id: B01I07FLK8, quantity: 1'
                },
                {
                    action: 'process_return_item',
                    date: 2017 - 03 - 02T16: 34: 25.908Z,
                    notes: 'item Id: B01I90E1AC, quantity: 1'
                },
                {
                    returningShipping: 349,
                    action: 'shipping_refund',
                    transactionStepId: 58b849a04413ea3906d6bd15,
                    date: 2017 - 03 - 02T16: 34: 40.283Z,
                    distributions: [{ id: '57c46700f687533d06fbd75b', amount: 349 }]
                },
                {
                    returningItems:
                        [{
                            status: 'return_processing',
                            taxRefund: 0,
                            itemId: 'B01I07FLK8',
                            quantity: 1,
                            price: 1295,
                            description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] Tempered Glass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]'
                        }],
                    action: 'complete_return_item',
                    transactionStepId: 58b849a44413ea3906d6bd1a,
                    Humbertos-MBP: app humberto$ history -c
Humbertos-MBP: app humberto$ node orderCreator.js
                    [{
                        _id:
                            {
                                customId: '5af4841640130c1c07ee383e',
                                date: '2017-03-02',
                                title: 'Amazon Inc. Order',
                                schoolId: '55e4ddddc588d547062bed7b',
                                districtId: '55e4ddddc588d547062bed79',
                                discount: 0,
                                userName: 'Michelle Rowe', status: 'complete',
                                userId: '57bc9102ba8113d1dddf16ac',
                                type: 'internal',
                                vendorOrderId: 133177,
                                vendorId: '55fa1e4398eb4b0c07afaf29',
                                purchaseOrderNumber: 'N/A',
                                returnedTax: 0,
                                shipping: -349,
                                tax: 0,
                                subTtotal: -1299
                            },
                        order:
                            {
                                title: 'Amazon Inc. Order',
                                schoolId: '55e4ddddc588d547062bed7b',
                                districtId: '55e4ddddc588d547062bed79',
                                discount: 0,
                                userName: 'Michelle Rowe',
                                status: 'complete',
                                userId: '57bc9102ba8113d1dddf16ac',
                                originalDate: '2017-03-02',
                                type: 'internal',
                                shipping: -349,
                                tax: 0,
                                total: -1299,
                                vendor:
                                    {
                                        vendorOrderId: 133177,
                                        vendorId: '55fa1e4398eb4b0c07afaf29',
                                        purchaseOrderNumber: 'N/A',
                                        items:
                                            [{
                                                itemdId: 'B01I90E1AC',
                                                quantity: 1,
                                                sumPrice: -1299,
                                                price: -1299,
                                                description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendly for iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue'
                                            }]
                                    },
                                distributions: [{ id: '57c46700f687533d06fbd75b', amount: 1648 }],
                                created: 2018 - 05 - 11T15: 21: 59.038Z,
                                modified: 2018 - 05 - 11T15: 21: 59.038Z,
                                completed: 2018 - 05 - 11T15: 21: 59.038Z,
                                migratedReturns: true
                            },
                        original:
                            [{
                                _id: 5808098426d6babb30004139,
                                userId: '57bc9102ba8113d1dddf16ac',
                                userName: 'Michelle Rowe',
                                status: 'complete',
                                created: 2016 - 10 - 20T00: 02: 12.162Z,
                                modified: 2017 - 03 - 02T16: 34: 51.286Z,
                                shipping: 519,
                                tax: 0,
                                total: 2217,
                                vendor:
                                    {
                                        items:
                                            [{
                                                itemId: 'B00004T8R2',
                                                description: 'Panasonic On-Ear Stereo Headphones RP-HT21 (Black &amp; Silver) Lightweight and Comfortable, Powerful Bass',
                                                quantity: 2,
                                                price: 849
                                            },
                                            {
                                                itemId: 'B01I07FLK8',
                                                description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] TemperedGlass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]',
                                                quantity: 0,
                                                price: 1295
                                            },
                                            {
                                                itemId: 'B01I90E1AC',
                                                description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendlyfor iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue',
                                                quantity: 0,
                                                price: 1299
                                            }],
                                        vendorName: 'Amazon Inc.',
                                        vendorId: '55fa1e4398eb4b0c07afaf29',
                                        purchaseOrderNumber: 'N/A',
                                        vendorOrderId: 133177,
                                        returningItems:
                                            [{
                                                itemId: 'B01I07FLK8',
                                                quantity: 1,
                                                price: 1295,
                                                description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] TemperedGlass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]',
                                                status: 'return_complete',
                                                taxRefund: 0
                                            },
                                            {
                                                itemId: 'B01I90E1AC',
                                                quantity: 1,
                                                price: 1299,
                                                description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendlyfor iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue',
                                                status: 'return_complete',
                                                taxRefund: 0
                                            }],
                                        returningShipping: 349,
                                        cogs_discount: 0
                                    },
                                schoolId: '55e4ddddc588d547062bed7b',
                                districtId: '55e4ddddc588d547062bed79',
                                title: 'Amazon Inc. Order',
                                discount: 0,
                                type: 'internal',
                                exemptedTax: 0,
                                purse:
                                    {
                                        purses:
                                            [{ id: '57c46700f687533d06fbd75b', value: 4078 },
                                            { id: '57bc9a9b4896e0847687aa37', value: 1082 }]
                                    },
                                approval_distributions:
                                    [{
                                        amount: 4078,
                                        isProcessed: true,
                                        status: 'approved',
                                        id: '57c46700f687533d06fbd75b',
                                        createdBy: '57bc996aba8113d1dddf16f0',
                                        districtId: '55e4ddddc588d547062bed79',
                                        title: '$200 Supplemental Funds for Common Core 2016-2017',
                                        admin: 'Marti Ayala',
                                        adminId: '57bc9095ba8113d1dddf1662',
                                        date: 2016 - 10 - 20T19: 26: 13.104Z
                                    }],
                                distributions:
                                    [{ id: '57c46700f687533d06fbd75b', amount: -1135 },
                                    { id: '57bc9a9b4896e0847687aa37', amount: -1082 }],
                                completed: 2016 - 10 - 20T19: 26: 13.587Z,
                                orderManagementStatus: 'items_return_complete',
                                history:
                                    [{
                                        action: 'process_return_item',
                                        date: 2017 - 03 - 02T16: 34: 19.046Z,
                                        notes: 'item Id: B01I07FLK8, quantity: 1'
                                    },
                                    {
                                        action: 'process_return_item',
                                        date: 2017 - 03 - 02T16: 34: 25.908Z,
                                        notes: 'item Id: B01I90E1AC, quantity: 1'
                                    },
                                    {
                                        returningShipping: 349,
                                        action: 'shipping_refund',
                                        transactionStepId: 58b849a04413ea3906d6bd15,
                                        date: 2017 - 03 - 02T16: 34: 40.283Z,
                                        distributions: [{ id: '57c46700f687533d06fbd75b', amount: 349 }]
                                    },
                                    {
                                        returningItems:
                                            [{
                                                status: 'return_processing',
                                                taxRefund: 0,
                                                itemId: 'B01I07FLK8',
                                                quantity: 1,
                                                price: 1295,
                                                description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] Tempered Glass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]'
                                            }],
                                        action: 'complete_return_item',
                                        transactionStepId: 58b849a44413ea3906d6bd1a,
                                        notes: 'item Id: B01I07FLK8, quantity: 1',
                                        date: 2017 - 03 - 04T16: 34: 44.857Z,
                                        distributions: [{ id: '57c46700f687533d06fbd75a', amount: 1295 }]
                                    },
                                    {
                                        returningItems:
                                            [{
                                                status: 'return_processing',
                                                taxRefund: 0,
                                                itemId: 'B01I90E1AC',
                                                quantity: 1,
                                                price: 1299,
                                                description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendly for iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue'
                                            }],
                                        action: 'complete_return_item',
                                        transactionStepId: 58b849ab4413ea3906d6bd1f,
                                        notes: 'item Id: B01I90E1AC, quantity: 1',
                                        date: 2017 - 03 - 02T16: 34: 51.286Z,
                                        distributions: [{ id: '57c46700f687533d06fbd75b', amount: 1299 }]
                                    }],
                                initialTotal: 5160,
                                initialDistributions:
                                    [{ id: '57c46700f687533d06fbd75b', amount: -4078 },
                                    { id: '57bc9a9b4896e0847687aa37', amount: -1082 }]
                            }]
                    },
                        {
                            _id:
                                {
                                    customId: '5af4841640130c1c07ee383e',
                                    date: '2017-03-04',
                                    title: 'Amazon Inc. Order',
                                    schoolId: '55e4ddddc588d547062bed7b',
                                    districtId: '55e4ddddc588d547062bed79',
                                    discount: 0,
                                    userName: 'Michelle Rowe',
                                    status: 'complete',
                                    userId: '57bc9102ba8113d1dddf16ac',
                                    type: 'internal',
                                    vendorOrderId: 133177,
                                    vendorId: '55fa1e4398eb4b0c07afaf29',
                                    purchaseOrderNumber: 'N/A',
                                    returnedTax: 0,
                                    shipping: 0,
                                    tax: 0,
                                    subTtotal: -1295
                                },
                            order:
                                {
                                    title: 'Amazon Inc. Order',
                                    schoolId: '55e4ddddc588d547062bed7b',
                                    districtId: '55e4ddddc588d547062bed79',
                                    discount: 0,
                                    userName: 'Michelle Rowe',
                                    status: 'complete',
                                    userId: '57bc9102ba8113d1dddf16ac',
                                    originalDate: '2017-03-04',
                                    type: 'internal',
                                    shipping: 0,
                                    tax: 0,
                                    total: -1295,
                                    vendor:
                                        {
                                            vendorOrderId: 133177,
                                            vendorId: '55fa1e4398eb4b0c07afaf29',
                                            purchaseOrderNumber: 'N/A',
                                            items:
                                                [{
                                                    itemdId: 'B01I07FLK8',
                                                    quantity: 1,
                                                    sumPrice: -1295,
                                                    price: -1295,
                                                    description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] Tempered Glass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]'
                                                }]
                                        },
                                    distributions: [{ id: '57c46700f687533d06fbd75a', amount: 1295 }],
                                    created: 2018 - 05 - 11T15: 21: 59.038Z,
                                    modified: 2018 - 05 - 11T15: 21: 59.038Z,
                                    completed: 2018 - 05 - 11T15: 21: 59.038Z,
                                    migratedReturns: true
                                },
                            original:
                                [{
                                    _id: 5808098426d6babb30004139,
                                    userId: '57bc9102ba8113d1dddf16ac',
                                    userName: 'Michelle Rowe',
                                    status: 'complete',
                                    created: 2016 - 10 - 20T00: 02: 12.162Z,
                                    modified: 2017 - 03 - 02T16: 34: 51.286Z,
                                    shipping: 519,
                                    tax: 0,
                                    total: 2217,
                                    vendor:
                                        {
                                            items:
                                                [{
                                                    itemId: 'B00004T8R2',
                                                    description: 'Panasonic On-Ear Stereo Headphones RP-HT21 (Black &amp; Silver) Lightweight and Comfortable, Powerful Bass',
                                                    quantity: 2,
                                                    price: 849
                                                },
                                                {
                                                    itemId: 'B01I07FLK8',
                                                    description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] TemperedGlass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]',
                                                    quantity: 0,
                                                    price: 1295
                                                },
                                                {
                                                    itemId: 'B01I90E1AC',
                                                    description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendlyfor iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue',
                                                    quantity: 0,
                                                    price: 1299
                                                }],
                                            vendorName: 'Amazon Inc.',
                                            vendorId: '55fa1e4398eb4b0c07afaf29',
                                            purchaseOrderNumber: 'N/A',
                                            vendorOrderId: 133177,
                                            returningItems:
                                                [{
                                                    itemId: 'B01I07FLK8',
                                                    quantity: 1,
                                                    price: 1295,
                                                    description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] TemperedGlass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]',
                                                    status: 'return_complete',
                                                    taxRefund: 0
                                                },
                                                {
                                                    itemId: 'B01I90E1AC',
                                                    quantity: 1,
                                                    price: 1299,
                                                    description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendlyfor iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue',
                                                    status: 'return_complete',
                                                    taxRefund: 0
                                                }],
                                            returningShipping: 349,
                                            cogs_discount: 0
                                        },
                                    schoolId: '55e4ddddc588d547062bed7b',
                                    districtId: '55e4ddddc588d547062bed79',
                                    title: 'Amazon Inc. Order',
                                    discount: 0,
                                    type: 'internal',
                                    exemptedTax: 0,
                                    purse:
                                        {
                                            purses:
                                                [{ id: '57c46700f687533d06fbd75b', value: 4078 },
                                                { id: '57bc9a9b4896e0847687aa37', value: 1082 }]
                                        },
                                    approval_distributions:
                                        [{
                                            amount: 4078,
                                            isProcessed: true,
                                            status: 'approved',
                                            id: '57c46700f687533d06fbd75b',
                                            createdBy: '57bc996aba8113d1dddf16f0',
                                            districtId: '55e4ddddc588d547062bed79',
                                            title: '$200 Supplemental Funds for Common Core 2016-2017',
                                            admin: 'Marti Ayala',
                                            adminId: '57bc9095ba8113d1dddf1662',
                                            date: 2016 - 10 - 20T19: 26: 13.104Z
                                        }],
                                    distributions:
                                        [{ id: '57c46700f687533d06fbd75b', amount: -1135 },
                                        { id: '57bc9a9b4896e0847687aa37', amount: -1082 }],
                                    completed: 2016 - 10 - 20T19: 26: 13.587Z,
                                    orderManagementStatus: 'items_return_complete',
                                    history:
                                        [{
                                            action: 'process_return_item',
                                            date: 2017 - 03 - 02T16: 34: 19.046Z,
                                            notes: 'item Id: B01I07FLK8, quantity: 1'
                                        },
                                        {
                                            action: 'process_return_item',
                                            date: 2017 - 03 - 02T16: 34: 25.908Z,
                                            notes: 'item Id: B01I90E1AC, quantity: 1'
                                        },
                                        {
                                            returningShipping: 349,
                                            action: 'shipping_refund',
                                            transactionStepId: 58b849a04413ea3906d6bd15,
                                            date: 2017 - 03 - 02T16: 34: 40.283Z,
                                            distributions: [{ id: '57c46700f687533d06fbd75b', amount: 349 }]
                                        },
                                        {
                                            returningItems:
                                                [{
                                                    status: 'return_processing',
                                                    taxRefund: 0,
                                                    itemId: 'B01I07FLK8',
                                                    quantity: 1,
                                                    price: 1295,
                                                    description: 'iPad 2 3 4 Screen Protector,TANTEK [HD-Clear][Anti-Scratch][Anti-Glare][Anti-Fingerprint] Tempered Glass Screen Protector for Apple iPad 2 / iPad 3 / iPad 4 (9.7 inch),[Lifetime Warranty]-[2Pack]'
                                                }],
                                            action: 'complete_return_item',
                                            transactionStepId: 58b849a44413ea3906d6bd1a,
                                            notes: 'item Id: B01I07FLK8, quantity: 1',
                                            date: 2017 - 03 - 04T16: 34: 44.857Z,
                                            distributions: [{ id: '57c46700f687533d06fbd75a', amount: 1295 }]
                                        },
                                        {
                                            returningItems:
                                                [{
                                                    status: 'return_processing',
                                                    taxRefund: 0,
                                                    itemId: 'B01I90E1AC',
                                                    quantity: 1,
                                                    price: 1299,
                                                    description: 'AVAWO Apple iPad 2 3 4 Kids Case - Light Weight Shock Proof Convertible Handle Stand Kids Friendly for iPad 2, iPad 3rd generation, iPad 4th generation Tablet - Blue'
                                                }],
                                            action: 'complete_return_item',
                                            transactionStepId: 58b849ab4413ea3906d6bd1f,
                                            notes: 'item Id: B01I90E1AC, quantity: 1',
                                            date: 2017 - 03 - 02T16: 34: 51.286Z,
                                            distributions: [{ id: '57c46700f687533d06fbd75b', amount: 1299 }]
                                        }],
                                    initialTotal: 5160,
                                    initialDistributions:
                                        [{ id: '57c46700f687533d06fbd75b', amount: -4078 },
                                        { id: '57bc9a9b4896e0847687aa37', amount: -1082 }]
                                }]
                        }]










