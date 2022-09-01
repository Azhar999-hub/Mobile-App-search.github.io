const mobiles = {
    Iphone: {
        IphoneX: {
            Name: " Iphone",
            Model: " Iphone X",
            Ram: " 3 GB",
            Rom: " 64 GB",
            Price: " Rs 144,999",
        },
        Iphone12: {
            Name: " Iphone",
            Model: " Iphone 12",
            Ram: " 4 GB",
            Rom: " 128 GB",
            Price: " Rs 175,599.",
        },
        Iphone13: {
            Name: " Iphone",
            Model: " Iphone 13",
            Ram: " 4 GB",
            Rom: " 128 GB",
            Price: " Rs 271,799",
        },
    },
    Vivo: {
        Y55: {
            Name: " Vivo",
            Model: " Y55",
            Ram: " 8 GB",
            Rom: " 128 GB",
            Price: " Rs 57,999",
        },
        Y33s: {
            Name: " Vivo",
            Model: " Y33s",
            Ram: " 8 GB",
            Rom: " 128 GB",
            Price: " Rs 49,999",
        },
        Y21e: {
            Name: " Vivo",
            Model: " Y21e",
            Ram: " 8 GB",
            Rom: " 128 GB",
            Price: " Rs 59,999",
        }
    },
    Samsung: {
        Note5: {
            Name: " Samsung",
            Model: " Galaxy Note 5",
            Ram: " 4 GB",
            Rom: " 32 GB",
            Price: " Rs 50,999",
        },
        Note8: {
            Name: " Samsung",
            Model: " Galaxy Note 8",
            Ram: "6 GB",
            Rom: " 64 GB",
            Price: " Rs 89,999",
        },
        S22: {
            Name: " Samsung",
            Model: " S22",
            Ram: " 8 GB",
            Rom: " 128 GB",
            Price: " Rs 219,999",
        },
    },
}

const brand = document.getElementById('brand');
const model = document.getElementById('model');
const renderValues = document.getElementById('renderValues');
const BrandNames = Object.keys(mobiles);

function firstValue() {
    for (let i = 0; i < BrandNames.length; i++) {
        brand.innerHTML += `  <option value=${BrandNames[i]}>${BrandNames[i]}</option>`
    }
}

firstValue();

function secondValue() {
    model.disabled = false
    const mobileNames = Object.keys(mobiles[brand.value]);
    for (let i = 0; i < mobileNames.length; i++) {
        model.innerHTML += `  <option value=${mobileNames[i]}>${mobileNames[i]}</option>`
    }
}

function renderVal(){
    const selectedVal = mobiles[brand.value][model.value]
    renderValues.innerHTML = `        
    <h4> 
        Mobile Name: ${selectedVal.Name}   
    </h4>
    <h4>
        Model Name: ${selectedVal.Model}   
    </h4>
    <h4>
        Ram: ${selectedVal.Ram}   
    </h4>
    <h4>
        Rom: ${selectedVal.Rom}   
    </h4>
    <h4>
        Price: ${selectedVal.Price}   
    </h4>
    
    `
}