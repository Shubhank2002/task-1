const wrapper = document.createElement('div')
wrapper.style.display='flex'
wrapper.style.padding='20px'
wrapper.style.justifyContent='space-between'

document.appendChild('wrapper')

const leftSection = document.createElement('div')
wrapper.appendChild(leftSection)

const rightSection = document.createElement('div')
wrapper.appendChild(rightSection)

const mainImage = document.createElement('div')
mainImage.style.width = '400px'
mainImage.style.height = '300px'
leftSection.appendChild(mainImage)