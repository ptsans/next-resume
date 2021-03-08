export const formatAge = (age: number): string => {
    /*
    * 0 лет
    * 1 год
    * 2-4 года
    * 5-9 лет
   */
    const mod = age % 10
    switch (true) {
        case mod === 1:
            return `${age} год`
        case mod > 1 && mod < 5:
            return `${age} года`
        case mod === 0 || (mod > 4 && mod <= 9):
            return `${age} лет`
        default:
            return `${age}`
    }
}