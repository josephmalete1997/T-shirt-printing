function getItems(UniformItems) {
    UniformItems.sort()
    return (
        UniformItems.forEach((UniformItems, index) => {
            const borderHolder = document.createElement('div');
            borderHolder.setAttribute("class", "borderHolder")
            const container = document.getElementById("category");
            borderHolder.innerHTML = `<i class='fa-regular fa-heart'></i>`;
            borderHolder.style.backgroundImage = `url(${UniformItems})`
                // text
            container.appendChild(borderHolder);
        })
    )

}

export { getItems };