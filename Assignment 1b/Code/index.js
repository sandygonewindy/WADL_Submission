data = []

$("button").click((e) => {
    e.preventDefault();
    alert("Message Sent successfully!");
    const email = $("#inputEmail").val();
    const message = $("#inputMessage").val();
    data.push({email, message});
    console.log(data);
});