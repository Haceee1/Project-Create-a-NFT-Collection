# Project: Create an NFT Collection
```markdown
Welcome to our JavaScript coding assessment. Today, we'll walk through a simple NFT minting application.

## Introduction

This application demonstrates how to mint NFTs (Non-Fungible Tokens) using JavaScript. It includes functions for minting NFTs, listing all minted NFTs, and getting the total supply of minted NFTs.

## Variables

First, we declare two variables:

```javascript
let nfts = [];
let nextId = 1;
```

- `nfts` is an array that will store all the minted NFTs.
- `nextId` is a counter starting at 1, used to give each NFT a unique ID.

## Functions

### mintNFT

The `mintNFT` function creates and stores a new NFT.

```javascript
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
```

- **Parameters:** `name`, `artist`, `year`, `description`
- **Purpose:** Creates a new NFT object with these properties and assigns it a unique `id` using `nextId`. The new NFT object is then added to the `nfts` array. Finally, `nextId` is incremented by 1 to ensure the next NFT gets a unique ID.

### listNFTs

The `listNFTs` function lists all the minted NFTs.

```javascript
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
```

- **Purpose:** Iterates over the `nfts` array. For each NFT, it prints its `id`, `name`, `artist`, `year`, and `description` to the console. The `console.log("---------------------------");` separates each NFT's details visually.

### getTotalSupply

The `getTotalSupply` function returns the total number of minted NFTs.

```javascript
function getTotalSupply() {
    return nfts.length;
}
```

- **Purpose:** Returns the total number of NFTs minted, which is the length of the `nfts` array.

## Example Usage

Here's an example of how to use these functions:

```javascript
mintNFT("Sunset Bliss", "Alice Smith", 2021, "A beautiful sunset over the mountains.");
mintNFT("Ocean Wave", "Bob Jones", 2022, "A massive wave crashing onto the shore.");
mintNFT("City Lights", "Charlie Brown", 2023, "A bustling cityscape at night.");

listNFTs();
console.log("Total NFTs Minted: " + getTotalSupply());
```

- **Steps:**
  1. Mint three NFTs with different names, artists, years, and descriptions.
  2. Call `listNFTs` to print out all the minted NFTs' details.
  3. Print the total number of NFTs minted by calling `getTotalSupply`.

## Conclusion

You've just walked through a simple NFT minting application in JavaScript. Thanks for watching, and happy coding!    
```


# License

This project is licensed under the MIT License - see the LICENSE.md file for details
