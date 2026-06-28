const wrapper = document.createElement('div')
wrapper.style.display = 'flex'
wrapper.style.padding = '20px'

document.body.appendChild(wrapper)

const leftSection = document.createElement('div')
leftSection.style.width = '30%'
wrapper.appendChild(leftSection)

const rightSection = document.createElement('div')
rightSection.style.display = 'flex'
rightSection.style.height = '70vh'
rightSection.style.paddingLeft = '10vw'
rightSection.style.flexDirection = 'column'
rightSection.style.justifyContent = 'center'
rightSection.style.alignItems = 'center'
wrapper.appendChild(rightSection)

const mainImage = document.createElement('div')
mainImage.style.width = '400px'
mainImage.style.height = '300px'
mainImage.style.marginBottom = '30px'
mainImage.style.padding = '4px'
mainImage.style.fontSize = '20px'
mainImage.style.fontWeight = 'bold'
leftSection.appendChild(mainImage)

const grid = document.createElement('div')
grid.style.display = 'flex'
grid.style.flexWrap = 'wrap'
grid.style.gap = '40px'

const colorData = {
    blue: ['lightskyblue', 'deepskyblue', 'dodgerblue', 'navy', 'mediumpurple'],
    red: ['red', 'maroon', 'deeppink'],
    green: ['yellow', 'greenyellow', 'chartreuse', 'darkgreen']
}

let activeThumb = null;

function createThumbnail(value, text) {
    const thumb = document.createElement('div')

    thumb.style.width = '70px'
    thumb.style.height = '70px'
    thumb.style.padding = '2px'
    thumb.style.cursor = 'pointer'
    thumb.style.backgroundColor = value
    thumb.style.fontSize = '12px'
    thumb.innerText = text

    return thumb
}

function renderThumbnail(filter = 'all') {
    grid.innerHTML = ''
    activeThumb = null
    if (filter === 'all') {
        Object.keys(colorData).forEach((color, i) => {
            colorData[color].forEach((value, index) => {
                const text = `${index + 1}/${colorData[color].length} - ${color.toUpperCase()}`
                const thumb = createThumbnail(value, text)
                thumb.addEventListener('click', () => {
                    if (activeThumb) {
                        activeThumb.style.border = 'none';
                    }

                    mainImage.style.backgroundColor = value
                    mainImage.innerText = `${index + 1}/${colorData[color].length} - ${color.toUpperCase()}`
                    thumb.style.border = '2px solid black'
                    activeThumb = thumb
                })

                grid.appendChild(thumb)
            })
        })
        const firstColor = Object.keys(colorData)[0]
        mainImage.style.backgroundColor = colorData[firstColor][0]
        mainImage.innerText = `${1}/${colorData[firstColor].length} - ${firstColor.toUpperCase()}`;

    } else {
        mainImage.style.backgroundColor = colorData[filter][0]
        mainImage.innerText = `1/${colorData[filter].length} - ${filter.toUpperCase()}`
        colorData[filter].forEach((value, i) => {
            const text = `${i + 1}/${colorData[filter].length} - ${filter.toUpperCase()}`
            const thumb = createThumbnail(value, text)
            thumb.addEventListener('click', () => {
                if (activeThumb) {
                    activeThumb.style.border = 'none';
                }

                mainImage.style.backgroundColor = value
                mainImage.innerText = `${i + 1}/${colorData[filter].length} - ${filter.toUpperCase()}`
                thumb.style.border = '2px solid black'
                activeThumb = thumb
            })

            grid.appendChild(thumb)
        })
    }
    const firstThumb = grid.firstChild
    if (firstThumb) {
        firstThumb.style.border = '2px solid black'
        activeThumb = firstThumb
    }
}

leftSection.appendChild(grid)

const select = document.createElement('select')
select.style.padding = '8px'
select.style.marginTop = '20px'
select.style.fontSize = '16px'

const buttonContainer = document.createElement('div')
buttonContainer.style.display = 'flex'
buttonContainer.style.gap = '5px'

const All_Button = document.createElement('button')
All_Button.innerText = 'ALL'

All_Button.style.padding = '8px 14px'
All_Button.style.cursor = 'pointer'
All_Button.style.border = '1px solid #999'
All_Button.style.backgroundColor = 'white'
All_Button.style.fontSize = '16px'
All_Button.addEventListener('click', () => { renderThumbnail('all'); select.value = 'all' })
buttonContainer.appendChild(All_Button)

Object.keys(colorData).forEach((color, i) => {
    const color_button = document.createElement('button')
    color_button.innerText = color.toUpperCase()
    color_button.style.padding = '8px 14px'
    color_button.style.cursor = 'pointer'
    color_button.style.border = '1px solid #999'
    color_button.style.backgroundColor = 'white'
    color_button.style.fontSize = '16px'
    color_button.addEventListener('click', () => { renderThumbnail(color); select.value = color })
    buttonContainer.appendChild(color_button)
})

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

const block = document.createElement('div')
block.appendChild(buttonContainer)
block.appendChild(select)
rightSection.appendChild(block)

renderThumbnail('all')
