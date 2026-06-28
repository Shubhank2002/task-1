const wrapper = document.createElement('div')
wrapper.style.display = 'flex'
wrapper.style.padding = '20px'
wrapper.style.justifyContent = 'space-between'

document.body.appendChild(wrapper)

const leftSection = document.createElement('div')
wrapper.appendChild(leftSection)

const rightSection = document.createElement('div')
wrapper.appendChild(rightSection)

const mainImage = document.createElement('div')
mainImage.style.width = '400px'
mainImage.style.height = '300px'
mainImage.style.marginBottom = '30px'
leftSection.appendChild(mainImage)

const grid = document.createElement('div')
grid.style.display = 'flex'
grid.style.flexWrap = 'wrap'

const colorData = {
    blue: ['skyblue', 'lightblue', 'slateblue', 'royalblue', 'darkblue'],
    red: ['red', 'darkred', 'hotpink'],
    green: ['yellowgreen', 'limegreen', 'lime', 'green']
}

function renderThumbnail(filter = 'all') {
    grid.innerHTML = ''

    if (filter === 'all') {
        Object.keys(colorData).forEach((color, i) => {
            colorData[color].forEach((value) => {
                const thumb = document.createElement('div')
                thumb.style.width = '100px'
                thumb.style.height = '100px'
                thumb.style.margin = '5px'
                thumb.style.backgroundColor = value
                thumb.innerText = `${i + 1}/${colorData[color].length} - ${color.toUpperCase()}`
                grid.appendChild(thumb)
            })
        })
        const firstColor = Object.keys(colorData)[0]  // 'blue'
        mainImage.style.backgroundColor = colorData[firstColor][0]  // 'skyblue'

    } else {
        colorData[filter].forEach((value, i) => {
            const thumb = document.createElement('div')
            thumb.style.width = '100px'
            thumb.style.height = '100px'
            thumb.style.margin = '5px'
            thumb.style.backgroundColor = value
            thumb.innerText = `${i + 1}/${colorData[filter].length} - ${filter.toUpperCase()}`
            grid.appendChild(thumb)
        })
    }
}

leftSection.appendChild(grid)

renderThumbnail('all')
