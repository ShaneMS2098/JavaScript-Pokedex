const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status !="200") {
            console.log(res);
            pokeImage("./Images/engranaje.png")
        }
        else {
            return res.json();
        }
    }).then ((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeInfo = data.forms;
            let pkT = data.types;
            let abilities = data.abilities;
            let pokeWeight = data.weight;
            let pokeHeight = data.height;
            pokeImage(pokeImg);
            pokeData(pokeInfo);
            pokeTypes(pkT);
            pokeAbilities(abilities);
            pokeAlturas(pokeHeight);
            pokePesos(pokeWeight);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (forms) => {
    const pokeForms = document.getElementById("pokemonName");
    const formsName = forms.map(item => item.name)
    pokeForms.innerHTML = formsName;
}

const pokeTypes = (types) => {
    const pokemonType = document.getElementById("pokemonType");
    const pokeTypeName = types.map(item => item.type.name);
    pokemonType.innerHTML = pokeTypeName[0].toUpperCase();
}

const pokeAbilities = (abilities) => {
    const pokemonMoves = document.getElementById("pMoves");
    const pokeAbilitiesName = abilities.map(item => item.ability.name);
    pokemonMoves.innerHTML = pokeAbilitiesName[0].toUpperCase() + " - " + pokeAbilitiesName[1].toUpperCase();
}
const pokeAlturas = (height) => {
    const pokemonAltura = document.getElementById("pokeAltura");
    const pokeHeight1 = height;
    pokemonAltura.innerHTML = pokeHeight1 + " M";
}
const pokePesos = (weight) => {
    const pokemonPeso = document.getElementById("pokePeso");
    const pokeWeight1 = weight;
    pokemonPeso.innerHTML = pokeWeight1 + " KG";
}