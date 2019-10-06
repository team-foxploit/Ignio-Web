var options = {
    place: 'tr',
    message: " Welcome to Ignio",
    type: "info",
    icon: "fa fa-check-circle",
    autoDismiss: 7
}

export const withOptions = (notificationOptions) => {
    console.log(notificationOptions);
    const { error, message } = notificationOptions.props;
    if(notificationOptions.type === "error"){
        console.log("Error!", error);
        if(error.error){
            options = {
                ...options,
                type: "danger",
                message: " " + error.error + "!",
                icon: "fa fa-exclamation-circle"
            }
        }else if(error.status === 401){
            options = {
                ...options,
                type: "warning",
                message: " Invalid Credentials!",
                icon: "fa fa-times-circle"
            }
        }else if (error.title === "Method argument not valid"){
            options = {
                ...options,
                type: "warning",
                message: " Invalid Password!",
                icon: "fa fa-times-circle"
            }
        }else if (error === "No device"){
            options = {
                ...options,
                type: "warning",
                message: " No Device found for given ID!",
                icon: "fa fa-times-circle"
            }
        }else if(error.title){
            options = {
                ...options,
                type: "warning",
                message: " " + error.title + "!",
                icon: "fa fa-times-circle"
            }
        }
    }else if(notificationOptions.type === "message"){
        console.log("Message!", message);
        if(message.message){
            options = {
                ...options,
                type: "info",
                message: " " + message.message + "!",
                icon: "fa fa-check-circle"
            }
        }else if(message.detail){
            options = {
                ...options,
                type: "info",
                message: " " + message.detail + "!",
                icon: "ni ni-like-2"
            }
        }else{
            options = {
                ...options,
                type: "info",
                message: " " + message + "!",
                icon: "fa fa-check-circle"
            }
        }
    }
    return options;
}