const wrapper = document.createElement('div')
wrapper.style.display = 'flex'
wrapper.style.padding = '20px'

document.body.appendChild(wrapper)

const leftSection = document.createElement('div')
leftSection.style.width = '35%'
wrapper.appendChild(leftSection)

const rightSection = document.createElement('div')
wrapper.appendChild(rightSection)

const mainImage = document.createElement('div')
mainImage.style.width = '440px'
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
        const firstColor = Object.keys(colorData)[0]
        mainImage.style.backgroundColor = colorData[firstColor][0]
        mainImage.innerText = `${1}/${colorData[firstColor].length} - ${firstColor.toUpperCase()}`;

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

const label = document.createElement('div')
label.style.display = 'flex'
label.style.gap = '5px'

const All_Button = document.createElement('button')
All_Button.innerText = 'ALL'

All_Button.style.padding = '8px 14px'
All_Button.style.cursor = 'pointer'
All_Button.style.border = '1px solid #999'
All_Button.style.backgroundColor = 'white'
All_Button.style.fontSize = '16px'
All_Button.addEventListener('click', () => renderThumbnail('all'))
label.appendChild(All_Button)

Object.keys(colorData).forEach((color, i) => {
    const color_button = document.createElement('button')
    color_button.innerText = color
    color_button.style.padding = '8px 14px'
    color_button.style.cursor = 'pointer'
    color_button.style.border = '1px solid #999'
    color_button.style.backgroundColor = 'white'
    color_button.style.fontSize = '16px'
    color_button.addEventListener('click', () => renderThumbnail(color))
    label.appendChild(color_button)
})
rightSection.appendChild(label)

const select = document.createElement('select')
select.style.padding = '8px'
select.style.marginTop = '20px'
select.style.fontSize = '16px'

const allOption = document.createElement('option')
allOption.value = 'all'
allOption.innerText = 'ALL'
select.appendChild(allOption)

Object.keys(colorData).forEach((color) => {
    const option = document.createElement('option')
    option.value = color
    option.innerText = color.toUpperCase()

    select.appendChild(option)
})

select.addEventListener('change', (e) => {
    renderThumbnail(e.target.value)
})

rightSection.appendChild(select)

renderThumbnail('all')
