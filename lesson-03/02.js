const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
const NewWords = (words) => {
    if(words.indexOf("апельсин")) {
        return  "Ура! нашел"
    } else {
         return "Придется поискать в другом магазине…"
    }
}
console.log(NewWords(words))





