import client from "../client";

export default {
    userdb: {
        posts: ({id}) => client.userdb.findUnique({where:{id}}).posts()
    }
}