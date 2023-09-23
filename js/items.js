function getItems(UniformItems) {
    return (
        UniformItems.forEach((UniformItems, index) => {
            const img = document.createElement('img');
            img.src = UniformItems;
            const container = document.getElementById("category");

            container.appendChild(img);
        })
    )

}

export { getItems };