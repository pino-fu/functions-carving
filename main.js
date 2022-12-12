const createWoodBlock = () => {
    const blockObj = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
    return blockObj
}


const createBeautifulCarving = (woodObject) => {
    const stringVersion = `The ${woodObject.length} inch, ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}`
    return stringVersion
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)

