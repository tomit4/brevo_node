const urlSender = document.querySelector(".url-sender");

urlSender.addEventListener("click", () => {
    handleOnClick();
});

const sendMail = async link => {
    try {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                msg: link,
            }),
        };
        const response = await fetch("/smtp/email", requestOptions).then(
            async response => {
                return response;
            },
        );
        return response.status === 200 ? true : false;
    } catch (err) {
        console.error("ERROR :=>", err);
    }
};

const handleOnClick = async () => {
    const response = await sendMail("https://craftcode.design");
};
