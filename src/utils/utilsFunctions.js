function stringToColor(string) {
    let hash = 0;
    let i;


    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 3)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }


    return color;

}
export function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.charAt(0).toUpperCase()}`,
    };
}