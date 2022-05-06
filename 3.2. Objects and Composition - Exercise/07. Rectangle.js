function rectangle(width, height, color) {

    const rect = {
        width,
        height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea() {
            return rect.width * rect.height;
        }
    }
    return rect;
}
