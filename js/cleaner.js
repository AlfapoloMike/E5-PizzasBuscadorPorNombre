const res = document.querySelector('#main > div.cardContainer')

export const cleanHTML = () => {
    while (res.firstChild) {
        res.removeChild(res.firstChild)
    }
}