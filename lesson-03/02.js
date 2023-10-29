const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
const newWords = (words) => {

    const searchIndex = words.indexOf("апельсин")

    if (searchIndex === -1) return  "Придется поискать в другом магазине…"
    return "Ура! нашел"

    // if(words.indexOf("апельсин")) {
    //     return  "Ура! нашел"
    // } else {
    //      return "Придется поискать в другом магазине…"
    // }
}
console.log(newWords(words))





