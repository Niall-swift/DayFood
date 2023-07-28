
const Notifica ={
    async init(){
        const permission = await Notification.requestPermission()
        if(permission !== "granted"){
            throw new Error('permission negada')
        }
    },

    Notify({titulo, body}){
        new Notification(titulo, {
            body
        })
    }
}

export { Notifica }