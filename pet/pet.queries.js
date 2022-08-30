import client from "../client"

export default {
    Query: {
        seePetProfile: (_, { id }) =>
            client.petdb.findUnique({
                where: {
                    id,
                },
            }),
    },
};