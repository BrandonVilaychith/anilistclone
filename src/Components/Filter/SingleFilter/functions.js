const onClickHandler = (setDropDown, dropDown, title) => {
    if (dropDown === title) {
        setDropDown(null);
    } else {
        setDropDown(title)
    }
};

export {
    onClickHandler
}