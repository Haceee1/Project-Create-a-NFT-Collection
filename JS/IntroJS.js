let nfts = [];
let nextId = 1; 

function mintNFT(name, artist, year, description) {
    const nft = {
        id: nextId,
        name: name,
        artist: artist,
        year: year,
        description: description
    };
    
    nfts.push(nft);
    nextId++;
}

function listNFTs() {

    for (let i = 0; i < nfts.length; i++) {
        console.log("ID: " + nfts[i].id);
        console.log("Name: " + nfts[i].name);
        console.log("Artist: " + nfts[i].artist);
        console.log("Year: " + nfts[i].year);
        console.log("Description: " + nfts[i].description);
        console.log("---------------------------");
    }
}

function getTotalSupply() {

    return nfts.length;
}

mintNFT("Sunset Bliss", "Alice Smith", 2021, "A beautiful sunset over the mountains.");
mintNFT("Ocean Wave", "Bob Jones", 2022, "A massive wave crashing onto the shore.");
mintNFT("City Lights", "Charlie Brown", 2023, "A bustling cityscape at night.");

listNFTs();
console.log("Total NFTs Minted: " + getTotalSupply());
