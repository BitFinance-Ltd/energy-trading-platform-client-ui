ProducerInfo example (square profile image):

```jsx
const billProps = {
    labels: {
        name: 'Name',
        price: 'Price',
        marketPrice: 'vs. market price of',
        energyType: 'Type of energy',
        annualProduction: 'Annual Production',
        purchased: 'Energy purchased',
        capacity: 'Peak Capacity',
        selectedSince: 'Selected since',
        ethereumAddress: 'Ethereum Address',
        location: 'Location'
    },
    details: {
        name: 'Peter Producer',
        price: 2.4,
        marketPrice: 2.5,
        energyType: 'Wind',
        annualProduction: 3000,
        purchased: 1300,
        capacity: 8,
        selectedSince: 'Sep 12 - Feb 22',
        ethereumAddress: '0x3E7e5d1810F825a2B27C6BEC5fCB32F3eaCd192e',
        location: 'Lippendorf, Neukieritzsch'
    },
    description: `LTN Supply & Trading is a leading European energy
                  trading house and the interface between the LTN Group's
                  operating companies and global wholesale markets for
                  energy and energy-related raw materials in both their
                  physical and/or derivative forms.`,
    picture: 'https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg'
};

<div style={{ backgroundColor: 'white', padding: '10px' }}>
    <ProducerInfo {...billProps} />
</div>;
```

ProducerInfo example (without profile image and several fields):

```jsx
const billProps = {
    labels: {
        name: 'Name',
        price: 'Price',
        marketPrice: 'vs. market price of',
        energyType: 'Type of energy',
        annualProduction: 'Annual Production',
        purchased: 'Energy purchased',
        capacity: 'Peak Capacity',
        selectedSince: 'Selected since',
        location: 'Location'
    },
    details: {
        name: 'Peter Producer',
        price: 2.4,
        marketPrice: 2.5,
        energyType: 'Wind',
        annualProduction: null,
        purchased: null,
        capacity: null,
        selectedSince: '',
        location: ''
    },
    description: `LTN Supply & Trading is a leading European energy
                  trading house and the interface between the LTN Group's
                  operating companies and global wholesale markets for
                  energy and energy-related raw materials in both their
                  physical and/or derivative forms.`
};

<div style={{ backgroundColor: 'white', padding: '10px' }}>
    <ProducerInfo {...billProps} />
</div>;
```

ProducerInfo example (rectangle profile image, standard):

```jsx
const lukeProps = {
    labels: {
        name: 'Name',
        price: 'Price',
        energyType: 'Type of energy',
        annualProduction: 'Annual Production',
        purchased: 'Energy purchased',
        capacity: 'Peak Capacity',
        selectedSince: 'Selected since',
        location: 'Location'
    },
    details: {
        name: 'Bernd Ottovordemgentschen',
        price: 2.4,
        energyType: 'Wind',
        annualProduction: 3000,
        purchased: 1300,
        capacity: 8,
        status: 'standard',
        selectedSince: 'Sep 12 - Feb 22',
        location: 'Neuer Hafen 10, Schwedt, DE 16303'
    },
    description: `LTN Supply & Trading is a leading European energy
                  trading house and the interface between the LTN Group's
                  operating companies and global wholesale markets for
                  energy and energy-related raw materials in both their
                  physical and/or derivative forms.`,
    picture: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png'
};

<div style={{ backgroundColor: 'white', padding: '10px' }}>
    <ProducerInfo {...lukeProps} />
</div>;
```
