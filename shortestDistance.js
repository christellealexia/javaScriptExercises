function zigZagCamel(d, h) {

    Math.degrees = radians => radians * (180 / Math.PI);

    const theta = Math.degrees(Math.atan(h / d));
    return theta > 30 ? 2 * h : Math.hypot(d, h);
}